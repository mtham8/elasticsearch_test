import requests
import urllib
import json
from pprint import pprint
from elasticsearch_dsl import DocType, Date, Integer, Keyword, Text, connections

from elasticsearch import Elasticsearch

es = Elasticsearch([{
    'host': 'localhost',
    'port': 9200
}])
elastic_url = 'http://localhost:9200'


def get_elastic_info(url):
    res = requests.get(url)
    print(res.text)


def check_docs():
    url = elastic_url + '/_stats/docs'
    get_elastic_info(url=url)


connections.create_connection(hosts=['localhost'])


class Movies(DocType):
    Poster = Text()
    Title = Text()
    Type = Text()
    Year = Text()
    imdbID = Text()

    class Meta:
        index = 'omdb_movies'

    def save(self, **kwargs):
        return super(Movies, self).save(**kwargs)


Movies.init()


def create_index(body):
    movies = Movies(body)
    saved_doc = movies.save()
    print('saved_doc --> ', saved_doc)


def get_doc(id):
    movies = Movies.get(id=id)
    print('doc --> ', movies)


def check_health():
    connections.get_connection().cluster.health()


movie_url = 'http://www.omdbapi.com'
movie_params = {
    's': 'boy',
    'type': 'movie',
    'r': 'json'
}


def query_data():
    page = 1
    possible_more = True

    while possible_more == True:
        movie_params['page'] = page
        res = fetch_data(url=movie_url, params=movie_params)

        if res['Response'] == 'True':
            print('inside True')

            for movie in res['Search']:
                print('movie --> ', movie)
                create_index(body=movie)
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
        pprint(res)
        return res
    except Exception as e:
        print('error --> ', e)


def main():
    query_data()
    # check_health()
    check_docs()


if __name__ == '__main__':
    main()
