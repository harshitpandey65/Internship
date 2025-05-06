import mysql.connectoer
conn=mysql.connector.connect(host='localhost', username='root', password='1234@', database='test')

my_cursor=conn.cursor()

conn.commit()
conn.close()

print('Connection Successfull!')

print('hey  thuis  me from try to coonect with server from web application')