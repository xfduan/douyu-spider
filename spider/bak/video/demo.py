import os
import subprocess
import signal


# 若当前目录不存在result文件夹则创建
if not os.path.exists("./result"):
    os.makedirs("./result")

# # 使用shell指令运行streamlink录制直播视频
# cmd = """streamlink https://www.douyu.com/%s worst -o "./result/%s.mp4" --plugin-dirs "./" -f""" % (roomid,
#                                                                                                     record_name)
# try:
#     record = subprocess.Popen(cmd, shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
#     # 停止录制
#     while not self.__done:
#         pass
#     print(">>> 直播录制即将停止...")
#     record.send_signal(signal.CTRL_C_EVENT)
#     print(">>> 直播录制已经停止")


def testSubprocess():
    if not os.path.exists("./result"):
        os.makedirs("./result")
    cmd = """ echo hello world > "./result/a.txt" """
    child = subprocess.Popen(cmd, shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    # print(signal.CTRL_C_EVENT)
    print(child)


if __name__ == '__main__':
    testSubprocess()
