# Prefix Query

Matches documents that have fields containing terms with a specified prefix (**not analyzed**). The prefix query maps to Lucene `PrefixQuery`.

The following matches documents where the user field contains a term that starts with `ki`:

```json
{ "query": {
    "prefix" : { "user" : "ki" }
  }
}
```

A boost can also be associated with the query:

```json
{ "query": {
    "prefix" : { "user" :  { "value" : "ki", "boost" : 2.0 } }
  }
}
```

This multi term query allows you to control how it gets rewritten using the `rewrite` parameter.
