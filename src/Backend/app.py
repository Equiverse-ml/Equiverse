from model import mine_data
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/test/",methods=["GET"])
def test():

    return {"testing passed"}

@app.route('/data', methods=["POST"])
def data():
        email = request.json['email']
        password = request.json['password']
        res=mine_data(email,password)
        return res