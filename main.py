from query_data import query_data
from movie_index import get_doc_count, match_query, match_phrase_prefix_query, check_health, multi_match_query


def main():
    # query_data(search_term='small', page=61)
    check_health()

    index = 'omdb_movies'
    match_query(field='Title',
                query='Great & Small *', index=index, cutoff_frequency=0.001)

    # match_phrase_prefix_query(field='Title',
    #                           query='I love', index=index, max_expansions=30)

    multi_match_query(fields=['Title'],
                      query='Great Small', index=index, type='best_fields')

    get_doc_count(index=index)


if __name__ == '__main__':
    main()
