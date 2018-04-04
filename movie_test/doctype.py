from elasticsearch_dsl import DocType, Text, analyzer
from elasticsearch_dsl.utils import ObjectBase, AttrDict, merge, DOC_META_FIELDS, META_FIELDS


class Movies(DocType):
    Poster = Text()
    Title = Text()
    Type = Text()
    Year = Text()
    imdbID = Text()

    def save(self, **kwargs):
        return super(Movies, self).save(**kwargs)


# Movies.init()
