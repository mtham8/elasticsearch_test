from elasticsearch_dsl import analyzer, tokenizer

autocomplete_analyzer = analyzer('autocomplete',
                                 tokenizer=tokenizer(
                                     'autocomplete', 'edge_ngram', min_gram=3, max_gram=10, token_chars=['letter']),
                                 filter=['lowercase']
                                 )

autocomplete_search_analyzer = analyzer(
    'autocomplete_search', tokenizer='lowercase')

email_analyzer = analyzer(
    'email_url', tokenizer='uax_url_email', filter=['lowercase', 'unique'])
