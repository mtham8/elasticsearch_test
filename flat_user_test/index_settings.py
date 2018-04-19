from elasticsearch_dsl import Index, DocType, Text, analyzer, connections, tokenizer
from doctype import FlatUser

connections.create_connection(hosts=['localhost'])

flat_user = Index('flat_user_explicit_mapping_1')

flat_user.settings(
    number_of_shards=2,
    number_of_replicas=0
)

flat_user.doc_type(FlatUser)

# flat_user.create()

flat_user.delete()
