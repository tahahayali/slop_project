from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.user import reg, login

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173","http://127.0.0.1:5173"], supports_credentials=True)

@app.route('/')
def home():
    return "slop"

@app.route('/auth/signup', methods=['POST'])
# user: str, passwd: str
def signup():
    req = request.get_json()
    username = req.get('user')
    password = req.get('pass')
    return reg(username, password)

@app.route('/auth/login', methods=['POST'])
def login_route():
    req = request.get_json()
    username = req.get('user')
    password = req.get('pass')
    return login(username, password)
    

if __name__ == '__main__':
    app.run(debug=True)
