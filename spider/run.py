from spider.config import env
import time

if __name__ == '__main__':
    print(env.id)
    while True:
        time.sleep(1)
        print(env.id)
