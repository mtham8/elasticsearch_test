from elasticsearch_dsl import Index, DocType, Text, analyzer, connections
from doctype import Movies

connections.create_connection(hosts=['localhost'])

dummy_movies = Index('dummy_movies')

dummy_movies.settings(
    number_of_shards=1,
    number_of_replicas=0
)

dummy_movies.doc_type(Movies)

# dummy_movies.create()
