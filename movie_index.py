from elasticsearch_dsl import DocType, Text, connections, Search, Q

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


def create_doc(body):
    movies = Movies(body)
    saved_doc = movies.save()
    print('saved_doc --> ', saved_doc)


def generate_query(field, query, **kwargs):
    query_obj = {
        field: {
            'query': query
        }
    }
    field_obj = query_obj[field]

    for key, value in kwargs.items():
        field_obj[key] = value

    return query_obj


def match_query(field, query, index, **kwargs):
    q = generate_query(field=field, query=query, **kwargs)
    print('query --> ', q)
    return search_query(query=q, index=index, query_type='match')


def search_query(query, query_type, index):
    s = Search(index=index).query(query_type, **query)

    # by default, search only returns a subset of results
    # to get all results, you must slice to the last item
    total = s.count()
    s = s[0:total]

    response = s.execute()
    for hit in response:
        print(hit.to_dict())
    print('total search --> ', total)


def check_health():
    health = connections.get_connection().cluster.health()
    print('health --> ', health)


def get_doc_count(index):
    s = Search(index=index).count()
    print('doc count --> ', s)
