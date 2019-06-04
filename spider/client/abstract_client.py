import abc, time


class AbstractClient(abc.ABC):

    def __init__(self, url, version):
        self.url = url
        self.version = version
        self.room_id = None
        self.socket = None
        self.msg_pipe = []
        self.time_out_time = time.time() + 30
        self.time_out_repeat = 0
