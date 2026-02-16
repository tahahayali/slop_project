from flask import Flask
from routes.user import reg, login

app = Flask(__name__)

@app.route('/')
def home():
    return "slop"

@app.route('/auth/signup', methods=['POST'])
def signup(user: str, passwd: str):
    return reg(user, passwd)

@app.route('/auth/login', methods=['POST'])
def login_route(user: str, passwd: str):
    return login(user, passwd)
    

if __name__ == '__main__':
    app.run(debug=True)
