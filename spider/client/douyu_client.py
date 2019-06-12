import json, re, select, time, requests, threading
from spider.client.live_socket import LiveSocket
from spider.client.abstract_client import AbstractClient
from spider.dao.chat_message_dao import ChatMessageDao
from spider.dao.dou_yu_job_dao import DouYuJobDao
from spider.util.logger import get_logger

logger = get_logger(__name__)


class DouYuClient(AbstractClient):

    def __init__(self, url, version):
        super().__init__(url, version)

    def _get_live_status(self):
        """ 获取直播基本信息 """
        self.room_id = self.url.split('/')[-1]
        url = 'http://open.douyucdn.cn/api/RoomApi/room/%s' % self.room_id
        room_status_res = requests.get(url).json()
        logger.info(room_status_res)
        if room_status_res == "Not Found" \
                or room_status_res.get('error') != 0 \
                or room_status_res['data'].get('room_status') != '1':
            raise Exception("%s: 获取直播间状态异常" % self.room_id)
        else:
            self.time_out_repeat = 0
            logger.info("%s: 获取直播间状态成功" % self.room_id)

    def _init_self_socket(self):
        """ 初始化 socket """
        self.socket = LiveSocket()
        self.socket.connect(('119.96.201.28', 8601))
        self.socket.settimeout(10)
        self.socket.communicate(
            'type@=loginreq/roomid@=%s/ver@=%s/ct@=0/' % (self.room_id, self.version)
        )
        self.socket.push('type@=joingroup/rid@=1126960/gid@=3/')

    def _close_self_socket(self):
        if self.socket is not None:
            self.socket.close()

    def _keep_alive(self):
        """ 心跳 """
        if self.socket is not None:
            self.socket.push('type@=keeplive/tick@=%s/' % int(time.time()))
        time.sleep(30)

    def _get_message(self):
        """ 信息处理 """
        if not select.select([self.socket], [], [], 1)[0]:
            return

        content = self.socket.pull()
        for msg in re.findall(b'(type@=.*?)\x00', content):
            try:
                msg = msg.replace(b'@=', b'":"').replace(b'/', b'","')
                msg = msg.replace(b'@A', b'@').replace(b'@S', b'/')
                msg = json.loads((b'{"' + msg[:-2] + b'}').decode('utf8', 'ignore'))
                if msg.get('type') == 'chatmsg':
                    self._process_chat_msg(msg)
                else:
                    pass
            except Exception as e:
                logger.error(e)
            else:
                self.msg_pipe.append(msg)
                self.time_out_time = time.time() + 30

    def _process_chat_msg(self, msg):
        chat_message = {
            "room_id": self.room_id,
            "user_id": msg.get("uid"),
            "user_name": msg.get("nn"),
            "content": msg.get("txt")
        }
        # logger.info('ready insert: %s' % chat_message)
        ChatMessageDao.insert(chat_message)

    def start(self):
        def inner_get_message():
            """ 处理消息内容 """
            try:
                self._get_live_status()
                self._init_self_socket()
                while True:
                    if time.time() > self.time_out_time:
                        raise Exception("%s 获取信息超时" % self.room_id)
                    else:
                        self._get_message()
            except Exception as e:
                logger.error(e)
                if self.time_out_repeat < 3:
                    logger.info("%s 准备第 %s 次重新连接" % (self.room_id, self.time_out_repeat + 1))
                    # 等待一段时间，重试连接
                    time.sleep(self.time_wait)
                    self.time_out_repeat += 1
                    self._close_self_socket()
                    self.start()
                else:
                    logger.info("%s 重试次数达到三次，放弃" % self.room_id)

        def inner_keep_alive():
            """ 维持连接不断开 """
            try:
                while True:
                    self._keep_alive()
            except Exception as e:
                logger.error("keep alive error: %s" % e)

        message_thread = threading.Thread(target=inner_get_message)
        message_thread.setDaemon(True)
        message_thread.start()

        keep_alive_thread = threading.Thread(target=inner_keep_alive)
        keep_alive_thread.setDaemon(True)
        keep_alive_thread.start()
