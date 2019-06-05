from .conn import SqlExecutor


class DouYuJobDao(object):
    INIT = 0
    RUNNING = 1
    COMPLETE = 2

    @staticmethod
    def query_chat_init_jobs():
        executor = SqlExecutor()
        sql = "select room_id, chat_status from dou_yu_job where chat_status = '%s';"
        tuples = executor.fetch_all(sql, DouYuJobDao.INIT)
        result = []
        for single in tuples:
            result.append({
                "room_id": single[0],
                "chat_status": single[1]
            })
        return result

    @staticmethod
    def update_chat_status(room_id, chat_status):
        executor = SqlExecutor()
        sql = "update dou_yu_job set chat_status = %s where room_id = %s;" % (chat_status, room_id)
        res = executor.update(sql)
        return res
