# Multi Match Query

The `multi_match` query builds on the `match` query to allow multi-field queries.

Example
```json
{
  "query": {
    "multi_match" : {
      "query":    "this is a test",
      "fields": [ "subject", "message" ]
    }
  }
}
```
Fields can be specified with wildcards.

`"fields": [ "title", "*_name" ]`

Individual fields can be boosted with the caret `^`

`"fields" : [ "subject^3", "message" ]`

If no `fields` are provided, the `multi_match` query defaults to the `index.query.default_field` index settings, which in turn defaults to `*`. `*` extracts all fields in the mapping that are eligible to term queries and filters the metadata fields. All extracted fields are then combined to build a query.

**There is a limit of no more than 1024 fields being queried at once.**

## Types of multi_match query

The way the `multi_match` query is executed internally depends on the `type` parameter.

Types include:

* `best_fields` **(default)**

  Finds documents which match any field, but uses the `_score` from the best field.

  The `best_fields` type is most useful when you are searching for multiple words best found in the same field. For instance “brown fox” in a single field is more meaningful than “brown” in one field and “fox” in the other.

* `most_fields`

  Finds documents which match any field and combines the `_score` from each field.

* `cross_fields`

  Treats fields with the same `analyzer` as though they were one big field. Looks for each word in `any` field.

* `phrase`

  Runs a `match_phrase` query on each field and combines the `_score` from each field.

* `phrase_prefix`

  Runs a `match_phrase_prefix` query on each field and combines the `_score` from each field.

The `best_fields` and `most_fields` types are _field-centric_ — they generate a match query per field. This means that the `operator` and `minimum_should_match` parameters are applied to each field individually.

In other words, **all terms** must be present **in a single field** for a document to match.

`cross_fields` would be a better option.

The `cross_field` type tries to solve these problems at query time by taking a _term-centric_ approach. It first analyzes the query string into individual terms, then looks for each term in any of the fields, as though they were one big field.

In other words, **all terms** must be present **in at least one field** for a document to match.
