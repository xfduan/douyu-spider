import time
import threading


class Env(object):
    def __init__(self):
        pass


def update(**kwargs):
    while True:
        time.sleep(1)


env = Env()

t = threading.Thread(target=update)
t.start()
