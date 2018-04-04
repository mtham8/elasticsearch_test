from elasticsearch_dsl import DocType, Text, analyzer


class Movies(DocType):
    Poster = Text()
    Title = Text()
    Type = Text()
    Year = Text()
    imdbID = Text()

    def save(self, **kwargs):
        return super(Movies, self).save(**kwargs)


# Movies.init()
