from query_data import query_data
from movie_index import get_doc_count, search_by_title, check_health


def main():
    # query_data(search_term='power')
    # check_health()

    index = 'omdb_movies'
    search_by_title(
        title='hell', index=index)
    get_doc_count(index=index)


if __name__ == '__main__':
    main()
