import requests

from private_settings import FLAT_USER_URL, FLAT_USER_TOKEN
from query_methods import create_doc


def query_flat_user(index, doctype):
    q = QueryData()
    for user in q.loop_query_data():
        if user != None:
            doc_id = user['profile_uuid']
            create_doc(body=user, index=index, doctype=doctype, doc_id=doc_id)


class QueryData(object):
    QUERY_URL = '{url}?page[show]={show}&page[number]={page}'
    BASE_URL = FLAT_USER_URL
    TOKEN = FLAT_USER_TOKEN

    def loop_query_data(self, show=50, is_batch=False):
        possible_more = True
        page = 1
        while possible_more == True:
            url = self.QUERY_URL.format(
                show=show, page=page, url=self.BASE_URL)

            possible_more, data = self._get_query_data(url=url, show=show)

            if data == None or len(data) == 0:
                yield None

            # yields list of data per page
            elif is_batch == True:
                yield data
                page += 1

            # yields each item in the list of data per page
            else:
                for datum in data:
                    yield datum
                page += 1

    def _get_query_data(self, url=None, show=50):
        '''We assume that the thing using this will be doing this in a loop.
        iterating on the page variable.  If there are more, then possible_more returns true'''

        response = self.get_from_query_url(url=url)

        possible_more = self.has_possible_more(show=show, response=response)

        return possible_more, response

    def get_from_query_url(self, url=None):
        headers = {
            'Authorization': 'Token {token}'.format(token=self.TOKEN)
        }
        response = requests.get(url=url, headers=headers)

        try:
            response = response.json()
            response = response['data']

            if len(response) == 0:
                print('QueryData: get_from_query_url URL --> ', url)
                print('QueryData: get_from_query_url RESPONSE --> ', response)

        except Exception as e:
            print('QueryData: ERROR in get_from_query_url --> ', e)
            response = None

        return response

    def has_possible_more(self, show=50, response=None):
        possible_more = True

        if response == None:
            return False

        if len(response) < show:
            possible_more = False

        return possible_more
