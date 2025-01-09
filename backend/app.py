from flask import Flask, jsonify, request
import internal as I
import external as E
import keyboard
import builtins
import AppOpener as a
import psutil
import time
import pyautogui as p
import config as c

app = Flask(__name__)




@app.route("/ai", methods=["POST"])
def req():
    d = request.get_json()
    r = builtins.open(c.data, "r")
    chatStr = r.read()
    r.close()
    x = E.chat(
        d["query"],
        chatStr=chatStr,
    )
    data = {
        "response": x,
    }
    return jsonify(data)


# chatStr=''
@app.route("/start/chat", methods=["POST"])
def chat():
    d = request.get_json()
    r = builtins.open(c.data, "r")
    r.close()
    d = mainalgo( d["text"])
    return d

def mainalgo( text=""):
        print("input is ",text)
        query = text
        e = I.vscode( query)
        return jsonify({"isAi": "no", "response": "code written"})
        
if __name__ == "__main__":
    app.run(debug=True, port=1000)
