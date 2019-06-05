import time, threading
from spider.util.logger import get_logger

from spider.client.douyu_client import DouYuClient
from spider.dao.dou_yu_job_dao import DouYuJobDao

logger = get_logger(__name__)

DOU_YU_VERSION = "20190530"


def start_chat_capture(room_id):
    dou_yu_client = DouYuClient(url="https://www.douyu.com/%s" % room_id, version=DOU_YU_VERSION)
    dou_yu_client.start()
    # 避免重复创建
    DouYuJobDao.update_chat_status(room_id, DouYuJobDao.RUNNING)


while True:
    logger.info('=== 开始执行弹幕获取脚本 ===')
    chat_init_jobs = DouYuJobDao.query_chat_init_jobs()
    logger.info("获取到 %s 个任务：%s" % (len(chat_init_jobs), chat_init_jobs))
    for job in chat_init_jobs:
        thread = threading.Thread(
            target=start_chat_capture,
            args=(job.get("room_id"),),
            name=job.get("room_id")
        )
        thread.setDaemon(True)
        thread.start()
    time.sleep(30)
