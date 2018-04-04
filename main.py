from query_data import query_data
from movie_test.methods import get_doc_count, match_query, match_phrase_prefix_query, check_health, multi_match_query, Movies, query_string_query, view_raw_mapping, term_query, range_query, prefix_query


def main():
    # index = 'single_shard_movies'
    # query_data(search_term='small', index=index, page=22)

    index = 'multi_shard_movies'
    # query_data(search_term='small', index=index)

    check_health()

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

    prefix_query(field='Title', query='sma', index=index)

    # get_doc_count(index=index)

    # view_raw_mapping(doc_type=Movies)


if __name__ == '__main__':
    main()
