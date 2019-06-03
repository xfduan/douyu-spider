import abc, time


class AbstractClient(abc.ABC):

    def __init__(self, url, version):
        self.url = url
        self.version = version
        self.room_id = None
        self.socket = None
        self.msg_pipe = []
        self.time_out_time = time.time() + 30

    @staticmethod
    def _socket_time_out(fn):
        def wrapper(*args, **kwargs):
            try:
                print('run wrapper function')
                fn(*args, **kwargs)
            except Exception as e:
                print('occur error')
                print(e)

        return wrapper
