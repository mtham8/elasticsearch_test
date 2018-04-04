# Terms Query

Filters documents that have fields that match any of the provided terms (**not analyzed**).

## Terms lookup mechanism

When it’s needed to specify a `terms` filter with a lot of terms it can be beneficial to fetch those term values from a document in an index. A concrete example would be to filter tweets tweeted by your followers. Potentially the amount of user ids specified in the terms filter can be a lot. In this scenario it makes sense to use the terms filter’s terms lookup mechanism.

The terms lookup mechanism supports the following options:

* `index`

The index to fetch the term values from.

* `type`

The type to fetch the term values from.

* `id`

The id of the document to fetch the term values from.

* `path`

The field specified as path to fetch the actual values for the terms filter.

* `routing` (optional)

A custom routing value to be used when retrieving the external terms doc.

The values for the `terms` filter will be fetched from a field in a document with the specified id in the specified type and index. Internally a get request is executed to fetch the values from the specified path. At the moment for this feature to work the `_source` needs to be stored.

Also, consider using an index with a single shard and fully replicated across all nodes if the "reference" terms data is not large. The lookup terms filter will prefer to execute the get request on a local node if possible, reducing the need for networking.

Example docs

/users/_doc/2
```json
{
  "followers" : ["1", "3"]
}
```

/tweets/_doc/1
```json
{
  "user" : "1"
}
```

Example terms query

/tweets/_search
```json
{
  "query" : {
    "terms" : {
      "user" : {
          "index" : "users",
          "type" : "_doc",
          "id" : "2",
          "path" : "followers"
      }
    }
  }
}
```
