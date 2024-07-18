---
title: 'Realtime Leaderboard'
description: 'Create a gaming leaderboard in the easiest way possible.'
---

In the world of gaming, leaderboards are essential for tracking player
rankings and improving engagement. DiceDB, an in-memory datastore with realtime reactivity,
is an excellent choice for implementing fast, reliable, and scalable leaderboards.
In this tutorial, we'll walk through the process of creating a gaming leaderboard
using DiceDB CLI commands, without relying on any SDK.

Prerequisites:
- [DiceDB](https://github.com/dicedb/dice) installed on your system
- Basic familiarity with [DiceDB and its CLI](https://github.com/dicedb/dice?tab=readme-ov-file#dice-in-action)

## Setup DiceDB - Server and CLI

If you haven't installed DiceDB yet, follow the instructions in the [official repository](https://github.com/dicedb/dice)
to set up DiceDB on your system and start the server.

The easiest way to get started with DiceDB is using [Docker](https://www.docker.com/) by running the following command.

```
$ docker run dicedb/dice-server
```

The above command will start the DiceDB server running locally on the port `7379` and you can connect
to it using DiceDB CLI and SDKs.

Now that the server is running, install the DiceDB CLI
to seamlessly talk to the database. To install DiceDB CLI,
just run the following command on your machine.

```
pip install dicedb-cli
```


## Connecting to DiceDB

First, open your terminal and connect to your DiceDB instance:

```
dice-cli
```

To test that the connection is well established fire the `PING` command and you should get `PONG` in return.

## Ingesting the stats

Let's start by ingesting some sample data into DiceDB. We'll use the `SET` command to store player scores.
Once the CLI connects to the database, fire the following commands to ingest player scores.

```
SET aquaman 5
SET batman 7
SET cyclops 2
SET deadpool 9
```

Note: If you were using REdis, then you'd need to use Sorted Set to build the leaderboard
but with DiceDB, you can use the `SET` command to store the score against the player as a top-level key, value pair.

## Querying the data

Open another terminal window, connect to the DiceDB with CLI.
To get the leaderboard, you need to simply query the DiceDB using the `QWATCH` command.

```
QWATCH "SELECT $key, $value ORDER BY $value DESC"
```

This command will keep emitting the list of key, value pairs in the descending order of the value (score).

## Updating Player Scores

As players complete games, you'll need to update their scores.
Use the `SET` command again to update the score of the player and set it to the new value.
Note: You can also use `INCR` command to increment the score of the player.

Say, we increase the score of `cyclops` to a `10`, then the command would be

```
SET cyclops 10
```

## Realtime Leaderboard

Given that we have used `QWATCH` command to get the leaderboard,
any time the data is updated, it will re-evaluate the query and
emitting the list of key, value pairs in the descending order of the value (score).

Thus your client will get the leaderboard in realtime, without having to poll or query the data periodically.

## Conclusion

DiceDB provides a powerful and efficient solution for implementing gaming leaderboards.
By using DiceDB CLI commands, you can create fast, scalable, and feature-rich leaderboards for your games,
without having to

1. periodically poll for the data, or
2. knowing the internal data data structures like Sorted Set.
