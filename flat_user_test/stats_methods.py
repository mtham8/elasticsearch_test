from elasticsearch_dsl import connections, Search, Index

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
    mappings = mapping[index]['mappings']['doc']['properties'].keys()
    return mappings

# get shards info
# curl -XGET 'localhost:9200/_cat/shards?pretty'
