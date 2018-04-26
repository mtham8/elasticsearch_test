from elasticsearch_dsl import connections, Search, Q
from pprint import pprint

connections.create_connection(hosts=['localhost'])


class BaseQueryManager(object):

    QUERY_TYPES = ['contains', 'exists', 'missing',
                   'exclude', 'range', 'boolean', 'raw', 'sort']

    @classmethod
    def parse_query(cls, queries):
        query_set = []

        if not isinstance(queries, list):
            queries = [queries]

        for query_obj in queries:
            query_type = query_obj['query_type']
            cls.validate_query_type(query_type=query_type)

            if query_type == 'raw':
                query = query_obj['raw_query']['query']
                occurrence_type = query_obj['raw_query']['occurrence_type']

                parsed_query = cls._set_query(
                    occurrence_type=occurrence_type, query=query)
            else:
                field = query_obj['field']
                value = query_obj['value']

                method = getattr(cls, '_{}_query'.format(query_type))
                params = cls._set_params(field=field, value=value)

                parsed_query = method(field=field, params=params)

            query_set.append(parsed_query)

        print('query_set in parsed_query_list ---> ', query_set)
        return query_set

    @classmethod
    def validate_query_type(cls, query_type):
        if query_type not in cls.QUERY_TYPES:
            error_message = 'Your {query_type} query_type is invalid. Please refer to QUERY_TYPES in BaseQueryManager.'
            raise ValueError(error_message.format(query_type=query_type))

    @classmethod
    def load_query(cls, query_set, index):
        boolean_query_map = {
            'must': [],
            'must_not': [],
            'filter': [],
            'should': []  # usually you should not be using this occurrence type
        }

        for query in query_set:
            boolean_query_map[query['occurrence_type']].append(query['query'])

        print('boolean_query_map --> ', boolean_query_map)
        boolean_query = Q('bool', **boolean_query_map)

        s = Search(index=index)
        s = s.query(boolean_query)
        return s

    @classmethod
    def update_query(cls, query_type, field=None, value=None, raw_query=None, queries=None):
        if queries == None:
            queries = []

        query_obj = cls._set_query_obj(
            query_type=query_type, field=field, value=value, raw_query=raw_query)

        queries.append(query_obj)

        return queries

    @classmethod
    def override_and_parse_query(cls, query_type, field=None, value=None, raw_query=None, queries=None):
        if queries == None:
            queries = []

        query_obj = cls._set_query_obj(
            query_type=query_type, field=field, value=value, raw_query=raw_query)

        queries = [query for query in queries if query['field'] != field]
        queries.append(query_obj)

        return cls.parse_query(queries=queries)

    @classmethod
    def _set_query_obj(cls, query_type, field=None, value=None, raw_query=None):
        return {
            'query_type': query_type,
            'field': field,
            'value': value,
            'raw_query': raw_query
        }

    @classmethod
    def _set_query(cls, query, occurrence_type):
        return {
            'occurrence_type': occurrence_type,
            'query': Q(query)
        }

    @classmethod
    def _set_params(cls, field, value):
        return {
            field: value
        }

    @classmethod
    def _contains_query(cls, field, params):
        query = {}

        if field.find('mac_id') > 0 or field.find('uid') > 0 or field == 'gbc_cisr_id':
            query['match_phrase_prefix'] = params

        else:
            query['match'] = params

        return cls._set_query(occurrence_type='must', query=query)

    @classmethod
    def _exists_query(cls, field, params):
        '''equivalent to is_null'''

        query = {
            'exists': params
        }

        return cls._set_query(occurrence_type='filter', query=query)

    @classmethod
    def _missing_query(cls, field, params):
        '''equivalent to is_not_null'''

        query = {
            'exists': params
        }

        return cls._set_query(occurrence_type='must_not', query=query)

    @classmethod
    def _exclude_query(cls, field, params):
        query = {
            'match': params
        }

        return cls._set_query(occurrence_type='must_not', query=query)

    @classmethod
    def _range_query(cls, field, params):
        query = {
            'range': params
        }

        return cls._set_query(occurrence_type='filter', query=query)

    @classmethod
    def _boolean_query(cls, field, params):
        query = {
            'term': params
        }

        return cls._set_query(occurrence_type='filter', query=query)
