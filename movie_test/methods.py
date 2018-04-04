from elasticsearch_dsl import connections, Search, Q
from doctype import Movies

connections.create_connection(hosts=['localhost'])


def create_doc(body):
    movies = Movies(**body)
    movies.meta.index = 'dummy_movies'
    saved_doc = movies.save()
    print('saved_doc --> ', saved_doc)


def match_query(field, query, index, **kwargs):
    q = generate_match_query(field=field, query=query, **kwargs)
    print('match query --> ', q)
    return search_query(query=q, index=index, query_type='match')


def match_phrase_prefix_query(field, query, index, **kwargs):
    q = generate_match_query(field=field, query=query, **kwargs)
    print('match_phrase_prefix query --> ', q)
    return search_query(query=q, index=index, query_type='match_phrase_prefix')


def multi_match_query(fields, query, index, **kwargs):
    q = generate_multi_match_query(fields=fields, query=query, **kwargs)
    print('multi_match_query --> ', q)
    return search_query(query=q, index=index, query_type='multi_match')


def query_string_query(fields, query, index, **kwargs):
    q = generate_multi_match_query(fields=fields, query=query, **kwargs)
    print('query_string_query --> ', q)
    return search_query(query=q, index=index, query_type='query_string')


def term_query(field, query, index, **kwargs):
    q = generate_term_query(field=field, query=query, **kwargs)
    print('term query --> ', q)
    return search_query(query=q, index=index, query_type='term')


def generate_term_query(field, query, **kwargs):
    query_obj = {
        field: query
    }
    field_obj = query_obj[field]

    for key, value in kwargs.items():
        field_obj[key] = value

    return query_obj


def generate_match_query(field, query, **kwargs):
    query_obj = {
        field: {
            'query': query
        }
    }
    field_obj = query_obj[field]

    for key, value in kwargs.items():
        field_obj[key] = value

    return query_obj


def generate_multi_match_query(fields, query, **kwargs):
    query_obj = {
        'fields': fields,
        'query': query
    }

    for key, value in kwargs.items():
        query_obj[key] = value

    return query_obj


def search_query(query, query_type, index):
    # TODO: create a base DocType class with method, get_index_by_name('dummy_movies')
    # TODO: create ability to search across indexes, using Search()

    s = Search(index=index)
    # adding dfs_query_then_fetch param improves overall doc score
    # s = s.query(query_type, **query).params(search_type='dfs_query_then_fetch')
    s = s.query(query_type, **query)

    # by default, search only returns a subset of results
    # to get all results, you must slice to the last item
    total = s.count()
    s = s[0:total]

    response = s.execute()
    for h in response:
        print(h.to_dict())
        print('%s returned with score %f' % (
            h.meta.id, h.meta.score))
    hits = response.hits.total
    print('hits --> ', hits)


def check_health():
    health = connections.get_connection().cluster.health()
    print('health --> ', health)


def get_doc_count(index):
    s = Search(index=index).count()
    print('doc count --> ', s)


def view_raw_mapping(doc_type):
    mapping = doc_type._doc_type.mapping.to_dict()
    print('mapping --> ', mapping)

# get shards info
# curl -XGET 'localhost:9200/_cat/shards?pretty'
