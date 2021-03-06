from elasticsearch_dsl import DocType, Text, analyzer

# abstraction of this should require index_name = <index_name>
# then create a method, get_index_by_name(index_name)


class Movies(DocType):
    Poster = Text()
    Title = Text()
    Type = Text()
    Year = Text()
    imdbID = Text()

    def save(self, **kwargs):
        return super(Movies, self).save(**kwargs)
