from query_data import query_data
from movie_index import get_doc_count, match_query, match_phrase_prefix_query, check_health


def main():
    # query_data(search_term='big', page=260)
    # check_health()

    index = 'omdb_movies'
    match_query(field='Title',
                query='I love', index=index)

    match_phrase_prefix_query(field='Title',
                              query='I love', index=index, max_expansions=30)

    get_doc_count(index=index)


if __name__ == '__main__':
    main()
