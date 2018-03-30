# Match Query

`match` queries accept text/numerics/dates, analyzes them, and constructs a query.

Example
```json
{
    "query": {
        "match" : {
            "message" : "this is a test"
        }
    }
}
```

## match

The `match` query is of type `boolean`. It means that the text provided is analyzed and the analysis process constructs a boolean query from the provided text. The `operator` flag can be set to `or` or `and` to control the boolean clauses (defaults to `or`). The minimum number of optional `should` clauses to match can be set using the `minimum_should_match` parameter.

The `analyzer` can be set to control which analyzer will perform the analysis process on the text. It defaults to the field explicit mapping definition, or the default search analyzer.

The `lenient` parameter can be set to `true` to ignore exceptions caused by data-type mismatches, such as trying to query a numeric field with a text query string. Defaults to `false`.

## Fuzziness

`fuzziness` allows _fuzzy matching_ based on the type of field being queried. When querying `text` or `keyword` fields, fuzziness is interpreted as a Levenshtein Edit Distance — the number of one character changes that need to be made to one string to make it the same as another string. `AUTO` should generally be the preferred value for `fuzziness`.

The `prefix_length` and `max_expansions` can be set in the case to control the fuzzy process. If the fuzzy option is set the query will use `top_terms_blended_freqs_${max_expansions}` as its rewrite method. The `fuzzy_rewrite` parameter allows to control how the query will get rewritten.

Fuzzy transpositions `(ab → ba)` are allowed by default but can be disabled by setting `fuzzy_transpositions` to `false`.

Example with additional parameters
```json
{
    "query": {
        "match" : {
            "message" : {
                "query" : "this is a test",
                "operator" : "and"
            }
        }
    }
}
```
## Cutoff frequency

The match query supports a `cutoff_frequency` that allows specifying an absolute or relative document frequency where high frequency terms are moved into an optional subquery and are only scored if one of the low frequency (below the cutoff) terms in the case of an or operator or all of the low frequency terms in the case of an and operator match.

This query allows handling `stopwords` dynamically at runtime, is domain independent and doesn’t require a stopword file. It prevents scoring / iterating high frequency terms and only takes the terms into account if a more significant / lower frequency term matches a document. Yet, if all of the query terms are above the given cutoff_frequency the query is automatically transformed into a pure conjunction (`and`) query to ensure fast execution.

The cutoff_frequency can either be relative to the total number of documents if in the range [0..1) or absolute if greater or equal to 1.0.

Here is an example showing a query composed of stopwords exclusively. Words that have a document frequency greater than 0.1% will be treated as common terms.
```json
{
    "query": {
        "match" : {
            "message" : {
                "query" : "to be or not to be",
                "cutoff_frequency" : 0.001
            }
        }
    }
}
```
