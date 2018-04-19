from elasticsearch_dsl import connections, Search, Index, A
from pprint import pprint, pformat
from elasticsearch import Elasticsearch

connections.create_connection(hosts=['localhost'])


def check_health():
    health = connections.get_connection().cluster.health()
    print('health --> ', health)


def get_doc_count(index):
    s = Search(index=index).count()
    print('doc count --> ', s)


def get_mapping(index):
    i = Index(index)
    mapping = i.get_mapping()
    # pprint(mapping[index]['mappings']['doc']['properties'])
    mapping = mapping[index]['mappings']['doc']['properties']
    return mapping


def get_aggregations(index, mapping):
    s = Search(index=index)
    body = {
        'size': 0,
        'aggs': {}
    }
    for key, value in mapping.items():
        if value.get('fields', None) != None:
            agg_field = '{utility}.raw'.format(utility=key)
            body['aggs'][key] = {
                'terms': {
                    'field': agg_field
                }
            }
    s = s.from_dict(body)
    response = s.execute().to_dict()
    pprint(response)
    response_obj = {}
    for key, value in response.get('aggregations', {}).items():
        response_obj[key] = value['buckets']
    return response_obj


# get shards info
# curl -XGET 'localhost:9200/_cat/shards?pretty'


def analyze_match_query(index, field, query, results):
    body = {
        "query": {
            "match": {
                field: {
                    "query": query
                }
            }
        }
    }
    es = Elasticsearch([{'host': 'localhost', 'port': 9200}])
    for result in results:
        response = es.explain(index=index, body=body, doc_type='doc',
                              id=result['uuid'])
        print('explain response --> ', response)


# reindex
'''
curl -XPOST 'localhost:9200/_reindex?pretty' -H 'Content-Type: application/json' -d'
{
  "source": {
    "index": "flat_user_explicit_mapping"
  },
  "dest": {
    "index": "flat_user_explicit_mapping_1"
  }
}
'

'''
