import requests

from private_settings import omdb_apiKey
from query_methods import create_doc
from doctype import Movies

movie_url = 'http://www.omdbapi.com'
movie_params = {
    'apikey': omdb_apiKey,
    'type': 'movie',
    'r': 'json'
}


def query_movie_data(search_term, index, page=1):
    page = page
    possible_more = True

    while possible_more == True:
        movie_params['page'] = page
        movie_params['s'] = search_term
        res = fetch_data(url=movie_url, params=movie_params)

        if res['Response'] == 'True':
            print('total results --> ', res['totalResults'])

            for movie in res['Search']:
                print('movie --> ', movie)
                doc_id = movie['imdbID']
                create_doc(body=movie, index=index,
                           doctype=Movies, doc_id=doc_id)
            print('page --> ', page)
            page += 1
            possible_more = True

        else:
            print('page --> ', page)
            print('error --> ', res['Error'])
            possible_more = False


def fetch_data(url, params):
    try:
        res = requests.get(url, params=params)
        res = res.json()
        return res
    except Exception as e:
        print('error --> ', e)
