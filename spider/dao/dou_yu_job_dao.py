from .conn import SqlExecutor


class DouYuJobDao(object):
    INIT = 0
    RUNNING = 1
    COMPLETE = 2

    @staticmethod
    def query_jobs():
        executor = SqlExecutor()
        sql = "select room_id, name, stream_url, chat_status, video_status from dou_yu_job where del = 0;"
        tuples = executor.fetch_all(sql, DouYuJobDao.INIT)
        result = []
        for single in tuples:
            result.append({
                "room_id": single[0],
                "name": single[1],
                "stream_url": single[2],
                "chat_status": single[3],
                "video_status": single[4]
            })
        return result

    @staticmethod
    def update_stream_url(room_id, stream_url):
        executor = SqlExecutor()
        sql = "update dou_yu_job set stream_url = %s where room_id = %s and del = 0;"
        res = executor.update(sql, (stream_url, room_id))
        return res
