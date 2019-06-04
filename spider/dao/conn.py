import mysql.connector


class SqlExecutor(object):
    def __init__(self):
        self.__conn = mysql.connector.connect(
            user="spider",
            password="spider",
            host="localhost",
            port="30001",
            database="spider",
        )
        self.__cursor = self.__conn.cursor()
        self.__auto_commit = True

    def fetch_all(self, sql, params=(), multi=False):
        self.__cursor.execute(sql, params, multi)
        res = self.__cursor.fetchall()
        if self.__auto_commit:
            self.close()
        return res

    def fetch_one(self, sql, params=(), multi=False):
        self.__cursor.execute(sql, params, multi)
        res = self.__cursor.fetchone()
        if self.__auto_commit:
            self.close()
        return res

    def insert(self, sql, params=(), multi=False):
        self.__cursor.execute(sql, params, multi)
        res = self.__cursor.lastrowid
        if self.__auto_commit:
            self.commit()
            self.close()
        return res

    def update(self, sql, params=(), multi=False):
        self.__cursor.execute(sql, params, multi)
        res = self.__cursor.rowcount
        if self.__auto_commit:
            self.commit()
            self.close()
        return res

    def start_transaction(self):
        self.__auto_commit = False
        self.__conn.start_transaction()

    def commit(self):
        self.__conn.commit()

    def rollback(self):
        self.__conn.rollback()

    def close(self):
        self.__cursor.close()
        self.__conn.close()


if __name__ == "__main__":
    executor = SqlExecutor()
    result = executor.insert("insert into user (name) values ('xfduan')")
    print(result)
