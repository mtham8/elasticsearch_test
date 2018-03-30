# Match All Query

The most simple query, which matches all documents, giving them all a `_score` of `1.0`.

```json
{
  "query": {
    "match_all": {}
  }
}
```

The `_score` can be changed with the `boost` parameter.

```json
{
  "query": {
    "match_all": { "boost": 1.2 }
  }
}
```

# Match None Query

This is the inverse of `match_all` query, which matches no documents.

```json
{
  "query": {
    "match_none": {}
  }
}
```
