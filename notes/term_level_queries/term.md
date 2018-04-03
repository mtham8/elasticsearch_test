## Term level queries

While the full text queries will analyze the query string before executing, the _term-level queries_ operate on the exact terms that are stored in the inverted index.

These queries are usually used for structured data like numbers, dates, and enums, rather than full text fields. Alternatively, they allow you to craft low-level queries, foregoing the analysis process.

# Term Query

The `term` query finds documents that contain the **exact** term specified in the inverted index.

Example
```json
{
  "query": {
    "term" : { "user" : "Kimchy" }
  }
}
```
Finds documents which contain the exact term `Kimchy` in the inverted index of the `user` field.

### _Why doesn't the `term` query match my document?_

String fields can be of type `text` (treated as full text, like the body of an email), or `keyword` (treated as exact values, like an email address or a zip code).

Exact values (like numbers, dates, and keywords) have the exact value specified in the field added to the inverted index in order to make them searchable.

However, `text` fields are analyzed. This means that their values are first passed through an _analyzer_ to produce a list of terms, which are then added to the inverted index.

There are many ways to analyze text: the default **`standard`** `analyzer` drops most punctuation, breaks up text into individual words, and lower cases them. For instance, the standard analyzer would turn the string “Quick Brown Fox!” into the terms [`quick`, `brown`, `fox`].

The `term` query looks for the exact term in the field’s inverted index — it doesn’t know anything about the field’s analyzer. This makes it useful for looking up values in keyword fields, or in numeric or date fields. When querying full text fields, use the `match` query instead, which understands how the field has been analyzed.

Example mapping
```json
{
  "mappings": {
    "_doc": {
      "properties": {
        "full_text": {
          "type":  "text"
        },
        "exact_value": {
          "type":  "keyword"
        }
      }
    }
  }
}
```
The `full_text` field is of type `text` and will be analyzed.

The `exact_value` field is of type keyword and will NOT be analyzed.

Example doc inserted
```json
{
  "full_text":   "Quick Foxes!",
  "exact_value": "Quick Foxes!"
}
```

The `full_text` inverted index will contain the terms: [`quick`, `foxes`].

The `exact_value` inverted index will contain the exact term: [`Quick Foxes!`].

Example using `term` query on `exact_value` keyword-field
```json
{
  "query": {
    "term": {
      "exact_value": "Quick Foxes!"
    }
  }
}
```
This query matches because the `exact_value` field contains the exact term `Quick Foxes!`.

Example using `term` query on `full_text` text-field
```json
{
  "query": {
    "term": {
      "full_text": "Quick Foxes!"
    }
  }
}
```
This query does not match, because the `full_text` field only contains the terms `quick` and `foxes`. It does not contain the exact term `Quick Foxes!`.

Example using `term` query on `full_text` text-field
```json
{
  "query": {
    "term": {
      "full_text": "foxes"
    }
  }
}
```
A `term` query for the term `foxes` matches the `full_text` field.

Example using `match` query on `full_text` text-field
```json
{
  "query": {
    "match": {
      "full_text": "Quick Foxes!"
    }
  }
}
```
This `match` query on the `full_text` field first analyzes the query string, then looks for documents containing `quick` or `foxes` or both.
