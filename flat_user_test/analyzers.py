from elasticsearch_dsl import analyzer, tokenizer

autocomplete = analyzer('autocomplete',
                        tokenizer=tokenizer(
                            'autocomplete', 'edge_ngram', min_gram=3, max_gram=10, token_chars=['letter']),
                        filter=['lowercase']
                        )

autocomplete_search = analyzer(
    'autocomplete_search', tokenizer='lowercase')

address_search = analyzer(
    'address_search', tokenizer='whitespace', filter=['trim', 'lowercase'])

email = analyzer(
    'email', tokenizer='uax_url_email', filter=['lowercase', 'unique'])

email_search = analyzer(
    'email_search', tokenizer='keyword', filter=['lowercase'])

postcode = analyzer('postcode', tokenizer=tokenizer(
    'postcode', 'edge_ngram', min_gram=1, max_gram=8))

postcode_search = analyzer('postcode_search', tokenizer='keyword')
