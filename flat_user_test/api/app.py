import os
import sys

cwd = os.getcwd()
sys.path.append(cwd)

from flask import Flask, jsonify, request
from flask_cors import CORS

from flat_user_test.stats_methods import get_mapping
from flat_user_test.query_methods import match_phrase_prefix_query

app = Flask(__name__)
CORS(app)


@app.route('/get_columns', methods=['GET'])
def get_columns():
    mapping = get_mapping(index='flat_user')
    return jsonify(mapping)


@app.route('/search', methods=['POST'])
def search():
    index = 'flat_user'
    field = request.json['field']
    query = request.json['query']
    q = match_phrase_prefix_query(field=field, query=query, index=index)
    response = jsonify(q)
    return response


if __name__ == '__main__':
    app.run(debug=True)
