from elasticsearch_dsl import analyzer, tokenizer

autocomplete_analyzer = analyzer('autocomplete',
                                 tokenizer=tokenizer(
                                     'autocomplete', 'edge_ngram', min_gram=3, max_gram=10, token_chars=['letter']),
                                 filter=['letter']
                                 )

autocomplete_search_analyzer = analyzer(
    'autocomplete_search', tokenizer='lowercase')

email_analyzer = analyzer(
    'email_url', tokenizer=tokenizer('email_url', 'uax_url_email', max_token_length=5))
