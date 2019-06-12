from flask import Flask
from flask import request
from spider.dao.dou_yu_job_dao import DouYuJobDao

app = Flask(__name__)


@app.route('/stream', methods=['POST'])
def index():
    body = request.form
    room_id = body['roomId']
    stream_url = body['streamUrl']
    DouYuJobDao.update_stream_url(room_id, stream_url)
    return "success"


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=3000,
        debug=True
    )
