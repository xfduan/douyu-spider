import json, re, select, time, requests
from spider.client.live_socket import LiveSocket
from spider.client.abstract_client import AbstractClient


class DouYuClient(AbstractClient):

    def __init__(self, url, version):
        super().__init__(url, version)

    def get_live_status(self):
        """ 获取直播基本信息 """
        self.room_id = self.url.split('/')[-1]
        url = 'http://open.douyucdn.cn/api/RoomApi/room/%s' % self.room_id
        room_status_res = requests.get(url).json()
        print(room_status_res)
        if room_status_res.get('error') != 0 or room_status_res['data'].get('room_status') != '1':
            print("%s: 获取直播状态异常" % self.room_id)
            return False
        else:
            print("%s: 获取直播状态成功" % self.room_id)
            return True

    def init_self_socket(self):
        """ 初始化 socket """
        self.socket = LiveSocket()
        self.socket.connect(('119.96.201.28', 8601))
        self.socket.settimeout(10)
        self.socket.communicate(
            'type@=loginreq/roomid@=%s/ver@=%s/ct@=0/' % (self.room_id, self.version)
        )
        self.socket.push('type@=joingroup/rid@=1126960/gid@=3/')

    def keep_alive(self):
        """ 心跳 """
        self.socket.push('type@=keeplive/tick@=%s/' % int(time.time()))
        time.sleep(30)

    def get_message(self):
        """ 信息处理 """
        if not select.select([self.socket], [], [], 1)[0]:
            return

        content = self.socket.pull()
        for msg in re.findall(b'(type@=.*?)\x00', content):
            try:
                msg = msg.replace(b'@=', b'":"').replace(b'/', b'","')
                msg = msg.replace(b'@A', b'@').replace(b'@S', b'/')
                msg = json.loads((b'{"' + msg[:-2] + b'}').decode('utf8', 'ignore'))
                print(msg)
                msg['NickName'] = msg.get('nn', '')
                msg['Content'] = msg.get('txt', '')
                msg['MsgType'] = {
                    'dgb': 'gift', 'chatmsg': 'danmu', 'uenter': 'enter'
                }.get(msg['type'], 'other')
            except Exception as e:
                print(e)
            else:
                self.msg_pipe.append(msg)
                self.time_out_time = time.time() + 30

    @AbstractClient._socket_time_out
    def start(self):
        self.get_live_status()
        self.init_self_socket()
        while True:
            if time.time() > self.time_out_time:
                print('============= out of time =============')
            else:
                self.get_message()
