# Query String Query

A query that uses a query parser in order to parse its content.

The `query_string` query parses the input and splits around operators. Each textual part is analyzed independently of each other.

Example
```json
{
  "query": {
    "query_string" : {
      "default_field" : "content",
      "query" : "(new york city) OR (big apple)"
    }
  }
}
```
This will split into `new york city` and `big apple` and each part is then analyzed independently by the analyzer configured for the field.

Whitespaces are not considered operators, this means that `new york city` will be passed "as is" to the analyzer configured for the field.

If the field is a `keyword` field the analyzer will create a single term `new york city` and the query builder will use this term in the query. If you want to query each term separately you need to add explicit operators around the terms (e.g. `new AND york AND city`).

# Simple Query String Query

A query that uses the SimpleQueryParser to parse its context. Unlike the regular `query_string` query, the `simple_query_string` query will never throw an exception, and discards invalid parts of the query.

Example
```json
{
  "query": {
    "simple_query_string" : {
      "query": "\"fried eggs\" +(eggplant | potato) -frittata",
      "fields": ["title^5", "body"],
      "default_operator": "and"
    }
  }
}
```
