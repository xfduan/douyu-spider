from socket import socket
from struct import pack
from spider.util.logger import get_logger

logger = get_logger(__name__)


class LiveSocket(socket):
    def communicate(self, data):
        self.push(data)
        return self.pull()

    def push(self, data):
        s = pack('i', 9 + len(data)) * 2
        s += b'\xb1\x02\x00\x00'
        s += data.encode('ascii') + b'\x00'
        self.sendall(s)

    def pull(self):
        try:
            return self.recv(2048)
        except Exception as e:
            logger.error(e)
