# Match Phrase Prefix Query

The  `match_phrase_prefix` query analyzes the text and creates a `phrase` query out of the analyzed text. It allows for prefix matches on the last term in the text.

Example
```json
{
    "query": {
        "match_phrase_prefix" : {
            "message" : "quick brown f"
        }
    }
}
```

**When using `match_phrase_prefix` type, set `max_expansions` to limit the number of terms to be collected. Eg, if the prefix is `"a"` you may end up with thousands of terms, which
is pretty meaningless.  Set max_expansions to (eg) `30` so that the user
gets some response, but your server is not overwhelmed by too many
clauses.**
