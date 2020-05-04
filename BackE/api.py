import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
<p>A prototype API for distant reading of science fiction novels.</p>'''


@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():
    conn = sqlite3.connect('books.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_books = cur.execute('SELECT * FROM User;').fetchall()

    return jsonify(all_books)

@app.route('/deleteaccount', methods=['POST'])
def api_deleteaccount():
    conn = sqlite3.connect('books.db')
    data = request.get_json()
    email = data['email']
    pwd = data['pwd']

    # Check if password is correct
    param = []
    param.append(email)
    param.append(pwd)
    query_check = "SELECT count(email) FROM User WHERE email=? AND pwd=?;"
    cur = conn.cursor()
    result_check = cur.execute(query_check,param).fetchall()[0][0]
    if result_check != 1:
        return 'Fail', 406
    
    # Delete account
    param = []
    param.append(email)
    cur = conn.cursor()
    query = "DELETE FROM User WHERE email=?;"
    count = cur.execute(query,param)
    conn.commit()
    cur.close()

    return 'Done', 201

@app.route('/changepwd', methods=['POST'])
def api_changepwd():
    conn = sqlite3.connect('books.db')
    data = request.get_json()
    email = data['email']
    old_pwd = data['old_pwd']
    new_pwd = data['new_pwd']

    # Check if old password is correct
    param = []
    param.append(email)
    param.append(old_pwd)
    query_check = "SELECT count(email) FROM User WHERE email=? AND pwd=?;"
    cur = conn.cursor()
    result_check = cur.execute(query_check,param).fetchall()[0][0]
    if result_check != 1:
        return 'Fail', 406
    
    # Update the password
    param = []
    param.append(new_pwd)
    param.append(email)
    cur = conn.cursor()
    query = "UPDATE User SET pwd=? WHERE email=?;"
    count = cur.execute(query,param)
    conn.commit()
    cur.close()

    return 'Done', 201

@app.route('/signup', methods=['POST'])
def api_signup():
    conn = sqlite3.connect('books.db')
    new_user_data = request.get_json()
    new_user_val = []
    new_user_val.append(new_user_data['email'])
    new_user_val.append(new_user_data['fname'])
    new_user_val.append(new_user_data['lname'])
    new_user_val.append(new_user_data['pwd'])

    # Check if email already exists
    email = []
    email.append(new_user_data['email'])
    query_check = "SELECT count(email) FROM User WHERE email=?;"
    cur = conn.cursor()
    result_check = cur.execute(query_check,email).fetchall()[0][0]
    if result_check != 0:
        return 'Fail', 406
    
    cur = conn.cursor()
    query = "INSERT INTO User(email, fname, lname, pwd) VALUES(?,?,?,?)"
    count = cur.execute(query,new_user_val)
    conn.commit()
    cur.close()

    return 'Done', 201

@app.route('/login', methods=['GET'])
def api_login():
    conn = sqlite3.connect('books.db')
    query_parameters = request.args
    email = query_parameters.get('email')
    pwd = query_parameters.get('pwd')

    # Check if parameters are valid or not
    if not (email and pwd):
        return jsonify({'status' : 0, 'fname' : ""})

    query = "FROM User WHERE"
    to_filter = []
    query += ' email=? AND'
    to_filter.append(email)
    query += ' pwd=? AND'
    to_filter.append(pwd)
    query = query[:-4] + ';'

    # Check if pwd and email matches
    query_check = "SELECT count(email) " + query
    cur = conn.cursor()
    result_check = cur.execute(query_check,to_filter).fetchall()[0][0]
    if result_check != 1:
        return jsonify({'status' : 0, 'fname' : ""})

    # Get result
    query = "SELECT * " + query
    cur = conn.cursor()
    result = cur.execute(query,to_filter).fetchall()[0]
    fname = result[1]
    return jsonify({'status' : 1, 'fname' : fname})

app.run()