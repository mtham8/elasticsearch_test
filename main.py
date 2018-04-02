from query_data import query_data
from movie_index import get_doc_count, match_query, match_phrase_prefix_query, check_health, multi_match_query, Movies, query_string_query, view_raw_mapping


def main():
    # query_data(search_term='small', page=61)
    check_health()

    index = 'omdb_movies'
    # match_query(field='Title',
    #             query='Great & Small', index=index, cutoff_frequency=0.001, minimum_should_match=1)

    # match_phrase_prefix_query(field='Title',
    #                           query='I love', index=index, max_expansions=30)

    # multi_match_query(fields=['Title'],
    #                   query='Great Small', index=index, type='best_fields')

    query_string_query(fields=['Title'],
                       query='I love', index=index)

    get_doc_count(index=index)

    view_raw_mapping(doc_type=Movies)


if __name__ == '__main__':
    main()
