from elasticsearch_dsl import connections, Search, Index
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
    print('mapping --> ')
    print(mapping[index]['mappings']['doc']['properties'])
    mappings = mapping[index]['mappings']['doc']['properties']
    return mappings

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
    "index": "flat_user_3"
  },
  "dest": {
    "index": "flat_user_4"
  }
}
'

'''
