import os
import sys

cwd = os.getcwd()
sys.path.append(cwd)

from flask import Flask, jsonify, request
from flask_cors import CORS

from flat_user_test.stats_methods import get_mapping, analyze_match_query, get_aggregations
from flat_user_test.query_methods import search_query, sort_dr_points_query

# pagination
# def _paginate(self, data):
#     start_index = self.page_show * (self.page_number - 1)
#     end_index   = self.page_show * (self.page_number)

#     return data[start_index : end_index]

index = 'flat_user_explicit_mapping_2'

app = Flask(__name__)
CORS(app)


@app.route('/get_fields', methods=['GET'])
def get_fields():
    mapping = get_mapping(index=index)
    aggregations = get_aggregations(index=index, mapping=mapping)
    sort_dr_points = sort_dr_points_query(index=index)
    response = {
        'mapping': mapping,
        'aggregations': aggregations,
        'sort': sort_dr_points
    }
    return jsonify(response)


@app.route('/query', methods=['POST'])
def query():
    queries = request.json['queries']
    q = search_query(queries=queries, index=index)
    # analyze_match_query(field=field, query=query,
    #                     index=index, results=q['data'])
    response = jsonify(q)
    return response


if __name__ == '__main__':
    app.run(debug=True, threaded=True)
