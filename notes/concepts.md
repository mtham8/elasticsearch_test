### Elasticsearch bottom up

* The inverted index maps _terms_ to documents (and possibly positions in the documents) containing the term.

* A simple search with multiple terms is then done by looking up all the terms and their occurrences, and take the intersection (for AND searches) or the union (for OR searches) of the sets of occurrences to get the resulting list of documents.

* An _index term_ is the unit of search. The terms we generate dictate what types of searches we can (and cannot) efficiently do.

* We can efficiently find things given term _prefixes_. When all we have is an inverted index, we want everything to look like a string prefix problem.

* Keeping the data structures small and compact means sacrificing the possibility to efficiently update them. In fact, Lucene does not update them at all: ___the index files Lucene write are immutable___, i.e. they are never updated. This is quite different to B-trees, for instance, which can be updated and often lets you specify a fill factor to indicate how much updating you expect.
