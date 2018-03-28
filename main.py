from query_data import query_data
from movie_index import get_doc_count


def main():
    query_data(search_term='prince')

    index = 'omdb_movies'
    # search_by_title(title='Dream', index=index)
    get_doc_count(index=index)


if __name__ == '__main__':
    main()
