from elasticsearch_dsl import analyzer, tokenizer

autocomplete = analyzer('autocomplete',
                        tokenizer=tokenizer('autocomplete', 'ngram', min_gram=3,
                                            max_gram=100, token_chars=['letter', 'digit']),
                        filter=['lowercase', 'trim']
                        )

email_analyzer = analyzer('email', tokenizer=tokenizer('email', 'ngram', min_gram=3,
                                                       max_gram=255),
                          filter=['lowercase'])

autocomplete_search = analyzer(
    'autocomplete_search', tokenizer='whitespace', filter=['trim', 'lowercase'])


postcode = analyzer('postcode', tokenizer=tokenizer(
    'postcode', 'edge_ngram', min_gram=1, max_gram=8, token_chars=['digit']))

postcode_search = analyzer('postcode_search', tokenizer='keyword')

suffix = analyzer('suffix', tokenizer='keyword',
                  filter=['lowercase', 'reverse'])
