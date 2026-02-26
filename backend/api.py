from flask import Flask, request, jsonify, session
from flask_cors import CORS
from routes.user import reg, login
from flask_session import Session 

app = Flask(__name__)

# TODO: Make this secure
app.secret_key = "sec_key" # Will change
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_COOKIE_HTTPS_ONLY'] = False
Session(app)

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
    data, status = login(username, password)
    if status == 200:
        session["user"] = data["user"]
        
    return jsonify(data), status
    

if __name__ == '__main__':
    app.run(debug=True)
