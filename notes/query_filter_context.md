# Query DSL

Elasticsearch provides a full Query DSL based on JSON to define queries.

Two types of clauses:

1. Leaf query clauses

Leaf query claueses look for a particular value in a particular field, such as the `match`, `term`, or `range` queries. These queries can be used by themselves.

2. Compound query clauses

Compound query clauses wrap other leaf or compound queries and are used to combine multiple queries in a logical fashion (such as the `bool` or `dis_max` query), or to alter their behavior (such as the `constant_score` query).

## Query and filter context
Query clauses behave differently depending on whether they are used in `query` context or `filter` context.

1. Query context

A query clause used in query context answers the question _"How well does this document match this query clause?"_ Besides deciding on whether or not the document matches, the query clause also calculates a `_score` representing how well the document matches, relative to other documents.

Query context is in effect whenever a query clause is passed to a `query` parameter, such as the `query` paramter in the `search` API.

2. Filter context

In _filter_ context, a query clause answers the question _"Does this document match this query clause?"_ The answer is a simple Yes or No - **no score is calculated**. Filter context is mostly used for filtering structured data, e.g.

* _Does this `timestamp` fall into the range 2015 or 2016?_
* Is this `status` field set to `"published"`?

**Frequently used filters will be cached automatically by Elasticsearch, to speed performance.** Filter context is in effect whenever a query clause is passed to a `filter` parameter, such as the `filter` or `must_not` params in the `bool` query, the `filter` parameter in the `constant_score` query, or the `filter` aggregation.

Example of query clauses being used in query and filter context in the `search` API. This query will match documents where all of the following conditions are met:

* The `title` field contains the word `search`.
* The `content` field contains the word `elasticsearch`
* The `status` field contains the exact word `published`
* The `publish_date` field contains a date from 1 Jan 2015 onwards

```json
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title": "Search" } },
        { "match": { "content": "Elasticsearch" } }
      ],
      "filter": [
        { "term": { "status": "published" } },
        { "range": { "published_date": { "gte": "2015-01-01" } } }
      ]
    }
  }
}
```

1. The `query` parameter indicates query context.

2. The `bool` and two `match` clauses are used in query context, which means that they are used to score how well each document matches.

3. The `filter` parameter indicates filter context.

4. The `term` and `range` clauses are used in filter context. They will filter out documents which do not match, but they will not affect the score for matching documents.

**Use query clauses in query context for conditions which should affect the score of the matching documents (ie. how well does this document match), and use all other query clauses in filter context.**
