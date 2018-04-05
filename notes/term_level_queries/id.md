# Ids Query

Filters documents that only have the provided ids. Note, this query uses the `_uid` field.

Example
```json
{
  "query": {
    "ids" : {
      "values" : ["1", "4", "100"]
    }
  }
}
```
