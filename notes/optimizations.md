#### Bulk index without replicas

If you're doing large bulk import, consider disabling replicas by setting `index.number_of_replicas: 0`. When documents are replicated, the entire document is sent to the replica node and the indexing process is repeated verbatim. This means each replica will perform the analysis, indexing, and potentially merging process.

In contrast, if you index with zero replicas and then enable replicas when ingestion is finished, the recovery process is essentially a byte-for-byte network transfer. This is much more efficient than duplicating the indexing process.

#### Use UUID-1 (Lucene Friendly IDs)

Using IDs such as UUID-4, are essentially random, which offer poor compression and slow down Lucene.
