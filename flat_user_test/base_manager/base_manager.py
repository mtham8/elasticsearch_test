from elasticsearch_dsl import connections, Search, Index, A
from pprint import pprint


class BaseESManager(object):

    @classmethod
    def get_mapping(cls, index_name):
        i = Index(index_name)
        mapping = i.get_mapping()
        mapping = mapping[index_name]['mappings']['doc']['properties']
        return mapping

    @classmethod
    def get_aggregations(cls, mapping, index_name):
        body = {
            'size': 0,
            'aggs': {}
        }

        for key, value in mapping.items():
            if value.get('fields', None) != None:
                agg_field = '{utility}.raw'.format(utility=key)
                body['aggs'][key] = {
                    'terms': {
                        'field': agg_field
                    }
                }

        s = Search().from_dict(body).index(index_name)
        response = s.execute().to_dict()
        # pprint(response)
        response_obj = {}

        for key, value in response.get('aggregations', {}).items():
            response_obj[key] = value['buckets']

        return response_obj
