from database import mydb, cursor

def reg(username: str, password: str):
    # Check to see if user alr exists
    cursor.execute(f'SELECT * FROM users WHERE username = {username}')
    exists = cursor.fetchone()
    if exists:
        mydb.close() 
        return {"error": "User already exists"}, 409
    cursor.execute(f'INSERT INTO users (username, password) VALUES ({username}, {password})')
    
    mydb.commit()
    mydb.close()
    return {"message": "User created"}, 201

def login(username: str, password: str):
    cursor.execute(f'SELECT * FROM users WHERE username = {username} AND password = {password}')
    user = cursor.fetchone()
    if user:
        res =  {"message": "Login successful"}, 200
    else:
        res =  {"error": "Invalid credentials"}, 401
        
    mydb.close()
    return res

def logout():
    pass

    
    
    