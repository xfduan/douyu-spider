from spider.client.douyu_client import DouYuClient
import time

dou_yu_client = DouYuClient(url="https://www.douyu.com/288016", version="20190530")
dou_yu_client.start()

while True:
    time.sleep(10)
