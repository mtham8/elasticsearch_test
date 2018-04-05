from elasticsearch_dsl import Index, DocType, Text, analyzer, connections, tokenizer
from doctype import FlatUser

connections.create_connection(hosts=['localhost'])

flat_user = Index('flat_user')

flat_user.settings(
    number_of_shards=2,
    number_of_replicas=0
)

flat_user.doc_type(FlatUser)

autocomplete_analyzer = analyzer('autocomplete',
                                 tokenizer=tokenizer(
                                     'autocomplete', 'edge_ngram', min_gram=3, max_gram=10, token_chars=['letter']),
                                 filter=['letter']
                                 )

flat_user.create()