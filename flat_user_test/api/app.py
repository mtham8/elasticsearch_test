import os
import sys

cwd = os.getcwd()
sys.path.append(cwd)

from flask import Flask, jsonify, request
from flask_cors import CORS

from flat_user_test.stats_methods import get_mapping, analyze_match_query
from flat_user_test.query_methods import match_phrase_prefix_query, match_query, range_query, term_query

# pagination
# def _paginate(self, data):
#     start_index = self.page_show * (self.page_number - 1)
#     end_index   = self.page_show * (self.page_number)

#     return data[start_index : end_index]

index = 'flat_user_3'
index = 'flat_user_4'

app = Flask(__name__)
CORS(app)


@app.route('/get_fields', methods=['GET'])
def get_fields():
    mapping = get_mapping(index=index)
    return jsonify(mapping)


@app.route('/query_match', methods=['POST'])
def query_match():
    field = request.json['field']
    query = request.json['query']
    q = match_query(field=field, query=query, index=index)
    # analyze_match_query(field=field, query=query,
    #                     index=index, results=q['data'])
    response = jsonify(q)
    return response


@app.route('/query_match_prefix', methods=['POST'])
def query_match_prefix():
    field = request.json['field']
    query = request.json['query']
    q = match_phrase_prefix_query(field=field, query=query, index=index)
    # analyze_match_query(field=field, query=query,
    #                     index=index, results=q['data'])
    response = jsonify(q)
    return response


@app.route('/query_range', methods=['POST'])
def query_range():
    field = request.json['field']
    query = request.json['query']
    # { 'gte': query }
    q = range_query(field=field, query=query, index=index)
    response = jsonify(q)
    return response


@app.route('/query_term', methods=['POST'])
def query_term():
    field = request.json['field']
    query = request.json['query']
    q = term_query(field=field, query=query, index=index)
    response = jsonify(q)
    return response


if __name__ == '__main__':
    app.run(debug=True)
