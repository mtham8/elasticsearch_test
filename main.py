from elasticsearch_dsl import Index

from movie_test.query_movie_data import query_movie_data

# from flat_user_test.query_methods import match_query, match_phrase_prefix_query, multi_match_query, query_string_query, term_query, range_query, prefix_query, ids_query

from flat_user_test.stats_methods import get_mapping, get_doc_count, check_health

from flat_user_test.query_flat_user import query_flat_user
from flat_user_test.doctype import FlatUser


def flat_user_test():
    # index = 'flat_user_explicit_mapping'

    # doctype = FlatUser
    # query_flat_user(index=index, doctype=doctype)

    # range_query(field='created_at', gte=2015, index=index)
    # id = '89000f86-7741-47d2-b2ee-54a430121d7c'
    # ids_query(query=[id], index=index)
    import flat_user_test.index_settings


def elasticsearch_methods():
    index = 'flat_user'
    get_doc_count(index=index)

    get_mapping(index=index)

    check_health()


def movie_test():
    index = 'single_shard_movies'
    query_movie_data(search_term='small', index=index, page=22)

    # index = 'multi_shard_movies'
    # query_movie_data(search_term='small', index=index)

    # match_query(field='Title',
    #             query='great & small', index=index)

    # term_query(field='Title',
    #            query='Magic Is Alive', index=index)

    # match_phrase_prefix_query(field='Title',
    #                           query='I love', index=index, max_expansions=30)

    # multi_match_query(fields=['Title'],
    #                   query='Great Small', index=index, type='best_fields')

    # query_string_query(fields=['Title'],
    #                    query='I love', index=index)

    # range_query(field='Year', gte=1990, lte=2000, index=index)

    # prefix_query(field='Title', query='sma', index=index)

    # ids_query(query=['tt0120875'], index=index)


if __name__ == '__main__':
    # movie_test()

    # elasticsearch_methods()

    flat_user_test()
