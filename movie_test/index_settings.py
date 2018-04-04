from elasticsearch_dsl import Index, DocType, Text, analyzer, connections
from doctype import Movies

connections.create_connection(hosts=['localhost'])

single_shard_movies = Index('single_shard_movies')

single_shard_movies.settings(
    number_of_shards=1,
    number_of_replicas=0
)

single_shard_movies.doc_type(Movies)

multi_shard_movies = single_shard_movies.clone('multi_shard_movies')
multi_shard_movies.settings(
    number_of_shards=3,
    number_of_replicas=0
)

single_shard_movies.create()
multi_shard_movies.create()
