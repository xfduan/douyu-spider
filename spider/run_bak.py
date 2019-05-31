import sys

from spider.danmu import DanMuClient


def pp(msg):
    print(
        msg.encode(sys.stdin.encoding, 'ignore').decode(sys.stdin.encoding)
    )


dmc = DanMuClient('https://www.douyu.com/1126960')
if not dmc.isValid():
    print('Url not valid')


@dmc.danmu
def danmu_fn(msg):
    # pp('[%s] %s' % (msg['NickName'], msg['Content']))
    pass


@dmc.gift
def gift_fn(msg):
    # pp('[%s] sent a gift!' % msg['NickName'])
    pass


@dmc.other
def other_fn(msg):
    # pp('Other message received')
    pass


dmc.start(blockThread=True)
