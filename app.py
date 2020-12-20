from flask import Flask, render_template, url_for, request, redirect
from flask.templating import render_template_string
from solve import *

app = Flask(__name__)


@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        data = request.form.to_dict()
        data = main(data)
        return render_template('solve.html', data=data)

    else:
        return render_template('index.html')

@app.errorhandler(500)
def internal_server_error(e):
    # note that we set the 500 status explicitly
    return render_template('500.html'), 500

if __name__ == "__main__":
    app.run()
