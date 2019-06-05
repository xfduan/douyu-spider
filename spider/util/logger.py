import logging, os
from logging.handlers import RotatingFileHandler


def get_logger(name):
    logger = logging.getLogger(name)
    logger.setLevel(level=logging.INFO)

    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    # 定义一个 RotatingFileHandler，最多备份 10 个日志文件，每个日志文件最大 1K
    if not os.path.exists(os.path.join("../../log")):
        os.mkdir(os.path.join("../../log"))

    r_handler = RotatingFileHandler(os.path.join("../log", "log.txt"), maxBytes=1 * 1024, backupCount=10)
    r_handler.setLevel(logging.INFO)
    r_handler.setFormatter(formatter)

    console = logging.StreamHandler()
    console.setLevel(logging.INFO)
    console.setFormatter(formatter)

    logger.addHandler(r_handler)
    logger.addHandler(console)

    return logger
