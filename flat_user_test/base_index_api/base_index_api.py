import copy
import arrow


class BaseESIndexAPI(object):

    def __init__(self, request, manager, index_name, **kwargs):
        self.kwargs = kwargs
        self.request = request

        self.Manager = manager
        self.index_name = index_name

        self.query_data = self._set_query_data()

        self._set_pagination()

    def run(self):
        self.method_type = self.query_data['method']
        method = getattr(self, self.method_type)
        method()

    def get_mapping_and_aggs(self):
        mapping = self.Manager.get_mapping(index_name=self.index_name)
        aggregations = self.Manager.get_aggregations(
            index_name=self.index_name, mapping=mapping)

        self.response = dict(mapping=mapping, aggregations=aggregations)

    def query(self):
        queries = self.query_data['query']
        # TODO: update this to the username returned after authenticating
        username = self.query_data['username']

        # TODO: only override query if user is not admin
        permitted_queries = self.Manager.override_query(
            query_type='contains', field='owners', value=username, queries=queries)

        parsed_queries = self.Manager.parse_query(queries=permitted_queries)

        loaded_queries = self.Manager.load_query(
            query_set=parsed_queries, index_name=self.index_name)

        self.set_response(
            data=loaded_queries, data_length=loaded_queries.count(), response_type=self.index_name)

    def set_response(self, data, data_length=None, response_type=None, is_formatted=True):
        meta_data = self._set_base_meta_data(
            data_length=data_length, response_type=response_type)

        if is_formatted == True:
            data = self._format_data(data=data)

        self.response = dict(data=data, meta_data=meta_data)

    def get_response(self):
        return self.response

    def serialize_data(self, data):
        # TODO: add serializer
        data = [h.to_dict() for h in data]
        return data

    def _set_query_data(self):
        data = copy.copy(self.request.data)
        return data

    def _set_base_meta_data(self, data_length, response_type):
        meta_data = {
            'total_query_results': data_length,
            'type': response_type,
            'request_time': arrow.utcnow().timestamp,
            'request_time_alt': arrow.utcnow().format('YYYY-MM-DD HH:mm:ss')
        }

        return meta_data

    def _format_data(self, data):
        '''serialize and paginate data'''
        if self.method_type != 'delete':
            data = self.serialize_data(data=self._paginate(data=data))

        return data

    def _set_pagination(self):
        page = self.query_data['page']
        self.page_number = int(page.get('number', 1))
        self.page_show = int(page.get('show', 10))
        if self.page_number <= 0 or self.page_show <= 0:
            raise IOError(
                'You cannot have a pagination with negative numbers or zeros. Number starts with 1.')

    def _paginate(self, data):
        start_index = self.page_show * (self.page_number - 1)
        end_index = self.page_show * (self.page_number)

        return data[start_index: end_index]
