---
title: QWATCH
description: The `QWATCH` command is a novel feature designed to provide real-time updates to clients based on changes in underlying data.

---

The `QWATCH` command is a novel feature designed to provide real-time updates to clients based on changes in underlying data. It operates similarly to the `SUBSCRIBE` command but focuses on SQL-like queries over data structures. Whenever data modifications affect the query's results, the updated result set is pushed to the subscribed client. This eliminates the need for clients to constantly poll for changes.

This command is what makes [DiceDB](https://github.com/dicedb/dice) different from [Redis](https://redis.io/) and
is what uniquely positions it to be the easiest and the most intuitive way to build
realtime reactive applications like [Leaderboards](/tutorials/realtime-leaderboard/).


### Syntax

```
QWATCH dsql-query
```

### Parameters

* dsql-query: A SQL-like query specifying the data to be monitored and operation to be performed. The query syntax is as follows:
  * `SELECT`: Specifies the fields to be returned.
  * `FROM`: Specifies the key pattern and it supports `%` operator from the SQL world.
  * `WHERE`: Optional clause for filtering results based on conditions on the value.
  * `ORDER BY`: Optional clause for sorting results.

### Return Value

* A subscription confirmation message similar to `SUBSCRIBE`.

### Behavior

1. `Query Parsing`: The provided query is parsed to extract the SELECT, FROM, WHERE, and ORDER BY clauses.
2. `Subscription Establishment`: The client establishes a subscription to the specified query.
3. `Initial Result`: The initial result set based on the current data is sent to the client.
4. `Data Change Monitoring`: DiceDB continuously monitors the data sources specified in the FROM clause.
5. `Query Reevaluation`: Whenever data changes that might affect the query result, the query is reevaluated.
6. `Result Push`: If the reevaluated result differs from the previous result, the new result set is pushed to the subscribed client.

### Example Usage

Best way to understand the usage and application of `QWATCH` command is by
building a [realtime leaderboard](/tutorials/realtime-leaderboard/). A `QWATCH`
command from that example is

```
QWATCH "SELECT $key, $value FROM 'match_1:%' ORDER BY $value.score DESC"
```

This command subscribes the client to a query that selects the key and value from all keys matching the pattern 'match_1:*', ordered by the 'score' field within the value in descending order. Whenever a key matching the pattern is created, modified, or deleted, or the 'score' field of an existing value changes, the client will receive an updated result set.

### Error Handling

* `ERR invalid query`: If the provided query is malformed or unsupported.
* `ERR syntax error`: If the query syntax is incorrect.
* `ERR unknown command`: If the `QWATCH` command is not implemented.
* `ERR max number of subscriptions reached`: If the maximum number of allowed subscriptions is exceeded.
