import time, threading, subprocess, shlex
from spider.util.logger import get_logger

from spider.client.douyu_client import DouYuClient
from spider.dao.dou_yu_job_dao import DouYuJobDao

logger = get_logger(__name__)

DOU_YU_VERSION = "20190612"

VIDEO_PROCESS_DICT = {}
CHAT_MESSAGE_RUNNING_ARR = []
VIDEO_RECORD_RUNNING_ARR = []


def start_chat_capture(capture_room_id):
    dou_yu_client = DouYuClient(url="https://www.douyu.com/%s" % capture_room_id, version=DOU_YU_VERSION)
    dou_yu_client.start()


while True:
    logger.info('=== 开始执行弹幕获取脚本 ===')
    all_jobs = DouYuJobDao.query_jobs()
    logger.info("获取到 %s 个任务：%s" % (len(all_jobs), all_jobs))

    for job in all_jobs:
        room_id = job.get("room_id")
        name = job.get("name")
        stream_url = job.get("stream_url")

        # 弹幕抓取
        if room_id not in CHAT_MESSAGE_RUNNING_ARR:
            logger.info("%s 开始弹幕抓取任务..." % room_id)
            CHAT_MESSAGE_RUNNING_ARR.append(room_id)
            chat_capture_thread = threading.Thread(
                target=start_chat_capture,
                args=(room_id,),
                name=room_id
            )
            chat_capture_thread.setDaemon(True)
            chat_capture_thread.start()
        else:
            logger.info("%s 弹幕抓取任务正在进行中..." % room_id)

        # 视频抓取
        if job.get("stream_url") is not None:
            if room_id not in VIDEO_RECORD_RUNNING_ARR:
                logger.info("%s 开始视频录制任务..." % room_id)
                VIDEO_RECORD_RUNNING_ARR.append(room_id)
                cmd = "ffmpeg -i %s -y ../result/%s_%s_%s.mp4" % (
                    stream_url, name, room_id, time.strftime('%Y%m%d%H%M%S', time.localtime(time.time()))
                )
                try:
                    print("开始录制视频：%s" % room_id)
                    args = shlex.split(cmd)
                    record = subprocess.Popen(args)
                    # 进程映射添加进 VIDEO_PROCESS_DICT，方便到时候种植
                    VIDEO_PROCESS_DICT[room_id] = record
                except Exception as e:
                    logger.error(e)
            else:
                logger.info("%s 视频录制任务正在进行中..." % room_id)
        else:
            logger.info("%s 直播暂未更新直播源信息..." % room_id)

    time.sleep(30)
