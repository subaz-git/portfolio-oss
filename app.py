from flask import Flask,render_template,jsonify

app=Flask(__name__)

@app.route('/')
def home():
    return "<h2>HELLO WORLD</h2>"


if __name__=="__main__":
    app.run(debug=true)