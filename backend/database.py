import pymysql
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="backend/.env")

mydb = pymysql.connect(host=os.getenv("DB_HOST"), 
                       user=os.getenv("DB_USER"), 
                       password=os.getenv("DB_PASSWD"), 
                       database=os.getenv("DB_NAME"),
                       cursorclass=pymysql.cursors.DictCursor)

cursor = mydb.cursor()
