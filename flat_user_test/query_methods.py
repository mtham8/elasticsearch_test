from elasticsearch_dsl import connections, Search, Q, Index, A
from pprint import pprint

connections.create_connection(hosts=['localhost'])


def create_doc(body, index, doctype, doc_id):
    d = doctype(**body)
    d.meta.index = index
    d.meta.id = doc_id
    saved_doc = d.save()
    print('saved_doc --> ', saved_doc)


# def match_query(field, query, index, **kwargs):
#     q = generate_match_query(field=field, query=query, **kwargs)
#     print('match query --> ', q)
#     return search_query(query=q, index=index, query_type='match')


# def match_phrase_prefix_query(field, query, index, **kwargs):
#     q = generate_match_query(field=field, query=query, **kwargs)
#     print('match_phrase_prefix query --> ', q)
#     return search_query(query=q, index=index, query_type='match_phrase_prefix')


# def multi_match_query(fields, query, index, **kwargs):
#     q = generate_multi_match_query(fields=fields, query=query, **kwargs)
#     print('multi_match_query --> ', q)
#     return search_query(query=q, index=index, query_type='multi_match')


# def query_string_query(fields, query, index, **kwargs):
#     q = generate_multi_match_query(fields=fields, query=query, **kwargs)
#     print('query_string_query --> ', q)
#     return search_query(query=q, index=index, query_type='query_string')


# def term_query(field, query, index, **kwargs):
#     q = generate_term_query(field=field, query=query, **kwargs)
#     print('term query --> ', q)
#     return search_query(query=q, index=index, query_type='term')


# def range_query(field, index, **kwargs):
#     q = generate_range_query(field=field, **kwargs)
#     print('range query --> ', q)
#     return search_query(query=q, index=index, query_type='range')


# def prefix_query(field, query, index, **kwargs):
#     q = generate_prefix_query(field=field, query=query, **kwargs)
#     print('prefix query --> ', q)
#     return search_query(query=q, index=index, query_type='prefix')


# def ids_query(query, index):
#     q = generate_ids_query(query=query)
#     print('ids query --> ', q)
#     return search_query(query=q, index=index, query_type='ids')


def generate_ids_query(query):
    query_obj = {
        'values': query
    }

    return query_obj


def generate_prefix_query(field, query, **kwargs):
    query_obj = {
        field: {
            'value': query
        }
    }
    field_obj = query_obj[field]

    for key, value in kwargs.items():
        field_obj[key] = value

    return query_obj


def generate_range_query(field, **kwargs):
    query_obj = {
        field: {}
    }
    field_obj = query_obj[field]

    for key, value in kwargs.items():
        field_obj[key] = value

    return query_obj


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

# def autocomplete_query(query, index):
#     s = Search(index=index)
#     q = Q(query)
#     s = s.query(q)


def search_query(queries, index):
    # TODO: create a base DocType class with method, get_index_by_name('dummy_movies')
    # TODO: create ability to search across indexes, using Search()

    s = Search(index=index)
    # adding dfs_query_then_fetch param improves overall doc score
    # s = s.query(query_type, **query).params(search_type='dfs_query_then_fetch')
    # s = s.query(query_type, **query)

    query_obj = {
        'must': [],
        'must_not': [],
        'filter': []
    }

    for query in queries:
        if query != None:
            q = Q(query['query'])
            query_obj[query['query_type']].append(q)

    total_queries = Q('bool', **query_obj)
    s = s.query(total_queries)
    print('query --> ', s.to_dict())

    # by default, search only returns a subset of results
    # to get all results, you must slice to the last item

    response = s.execute()
    # for h in response:
    #     print(h.to_dict())
    #     print('%s returned with score %f' % (
    #         h.meta.id, h.meta.score))
    hits = response.hits.total
    print('hits --> ', hits)

    response = {
        'hits': hits,
        'data': [h.to_dict() for h in response]
    }
    return response
