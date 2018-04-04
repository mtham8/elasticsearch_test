# Exists Query

Returns documents that have at least one non-`null` value in the original field.

Example
```json
{
  "query": {
    "exists" : { "field" : "user" }
  }
}
```

These documents would all match the example query:
```json
{ "user": "jane" }
1. { "user": "" }
2 { "user": "-" }
{ "user": ["jane"] }
3. { "user": ["jane", null ] }
```
1. An empty string is a non-`null` value.
2. Even though the `standard` analyzer would emit zero tokens, the original field is non-`null`.
3. At least one non-`null` value is required.

These documents would **not** match the example query:
```json
{ "user": null }
1. { "user": [] }
2. { "user": [null] }
3. { "foo":  "bar" }
```
1. This field has no values.
2. At least one non-`null` value is required.
3. The `user` field is missing completely.

## `null_value` mapping

If the field mapping includes the `null_value` setting then explicit `null` values are replaced with the specified `null_value`. For instance, if the user field were mapped as follows:
```json
{
  "mappings": {
    "doc": {
      "properties": {
        "user": {
          "type": "keyword",
          "null_value": "_null_"
        }
      }
    }
  }
}
```
then explicit `null` values would be indexed as the string `_null_`, and the following docs would match the `exists` filter:
```json
{ "user": null }
{ "user": [null] }
```

## `missing` query

There isn’t a `missing` query. Instead use the `exists` query inside a `must_not` clause as follows:
```json
{
  "query": {
    "bool": {
      "must_not": {
        "exists": {
          "field": "user"
        }
      }
    }
  }
}
```
This query returns documents that have no value in the user field.
