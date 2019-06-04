from .conn import SqlExecutor


class ChatMessageDao(object):

    @staticmethod
    def insert(chat_message):
        executor = SqlExecutor()
        sql = "insert into chat_message (room_id, user_id, user_name, content) VALUES (%s, %s, %s, %s);"
        result = executor.insert(
            sql,
            (
                chat_message.get("room_id"),
                chat_message.get("user_id"),
                chat_message.get("user_name"),
                chat_message.get("content")
            )
        )
        return result
