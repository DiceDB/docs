---
title: CLIENT
description: Documentation for the Redis command CLIENT
---

# DiceDB CLIENT Command Documentation

## Overview

The `CLIENT` command in DiceDB is a versatile command used to manage and inspect client connections to the DiceDB server. It provides various subcommands to perform different operations related to client connections, such as listing connected clients, killing client connections, getting client information, and setting client-specific options.

## Subcommands

The `CLIENT` command has several subcommands, each serving a specific purpose:

- `CLIENT LIST`
- `CLIENT KILL`
- `CLIENT GETNAME`
- `CLIENT SETNAME`
- `CLIENT PAUSE`
- `CLIENT REPLY`
- `CLIENT ID`
- `CLIENT UNPAUSE`
- `CLIENT TRACKING`
- `CLIENT CACHING`
- `CLIENT NO-EVICT`

## Parameters

### CLIENT LIST

- `Syntax`: `CLIENT LIST`
- `Description`: Returns information and statistics about the client connections server in a human-readable format.

### CLIENT KILL

- `Syntax`: `CLIENT KILL [ip:port]`
- `Description`: Closes a client connection identified by its IP and port.

### CLIENT GETNAME

- `Syntax`: `CLIENT GETNAME`
- `Description`: Returns the name of the current connection as set by `CLIENT SETNAME`.

### CLIENT SETNAME

- `Syntax`: `CLIENT SETNAME name`
- `Description`: Assigns a name to the current connection.

### CLIENT PAUSE

- `Syntax`: `CLIENT PAUSE timeout`
- `Description`: Suspends all the DiceDB clients for the specified amount of time (in milliseconds).

### CLIENT REPLY

- `Syntax`: `CLIENT REPLY ON|OFF|SKIP`
- `Description`: Controls the replies sent to the client.

### CLIENT ID

- `Syntax`: `CLIENT ID`
- `Description`: Returns the unique ID of the current connection.

### CLIENT UNPAUSE

- `Syntax`: `CLIENT UNPAUSE`
- `Description`: Resumes the clients that were paused by `CLIENT PAUSE`.

### CLIENT TRACKING

- `Syntax`: `CLIENT TRACKING ON|OFF [REDIRECT client-id] [BCAST] [PREFIX prefix] [OPTIN] [OPTOUT] [NOLOOP]`
- `Description`: Enables or disables server-assisted client-side caching.

### CLIENT CACHING

- `Syntax`: `CLIENT CACHING YES|NO`
- `Description`: Enables or disables tracking of the keys for the next command executed by the connection.

### CLIENT NO-EVICT

- `Syntax`: `CLIENT NO-EVICT ON|OFF`
- `Description`: Enables or disables eviction protection for the current client.

## Return Value

The return value of the `CLIENT` command varies depending on the subcommand used:

- `CLIENT LIST`: Returns a string with information about all connected clients.
- `CLIENT KILL`: Returns `OK` if the client was successfully killed.
- `CLIENT GETNAME`: Returns the name of the current connection or a null bulk reply if no name is set.
- `CLIENT SETNAME`: Returns `OK` if the name was successfully set.
- `CLIENT PAUSE`: Returns `OK` if the clients were successfully paused.
- `CLIENT REPLY`: Returns `OK` if the reply mode was successfully set.
- `CLIENT ID`: Returns the unique ID of the current connection.
- `CLIENT UNPAUSE`: Returns `OK` if the clients were successfully unpaused.
- `CLIENT TRACKING`: Returns `OK` if tracking was successfully enabled or disabled.
- `CLIENT CACHING`: Returns `OK` if caching was successfully enabled or disabled.
- `CLIENT NO-EVICT`: Returns `OK` if eviction protection was successfully enabled or disabled.

## Example Usage

### CLIENT LIST

```shell
127.0.0.1:6379> CLIENT LIST
id=3 addr=127.0.0.1:6379 fd=6 name= age=3 idle=0 flags=N db=0 sub=0 psub=0 multi=-1 qbuf=0 qbuf-free=0 obl=0 oll=0 omem=0 events=r cmd=client
```

### CLIENT KILL

```shell
127.0.0.1:6379> CLIENT KILL 127.0.0.1:6379
OK
```

### CLIENT GETNAME

```shell
127.0.0.1:6379> CLIENT GETNAME
"my-client"
```

### CLIENT SETNAME

```shell
127.0.0.1:6379> CLIENT SETNAME my-client
OK
```

### CLIENT PAUSE

```shell
127.0.0.1:6379> CLIENT PAUSE 5000
OK
```

### CLIENT REPLY

```shell
127.0.0.1:6379> CLIENT REPLY OFF
OK
```

### CLIENT ID

```shell
127.0.0.1:6379> CLIENT ID
3
```

### CLIENT UNPAUSE

```shell
127.0.0.1:6379> CLIENT UNPAUSE
OK
```

### CLIENT TRACKING

```shell
127.0.0.1:6379> CLIENT TRACKING ON
OK
```

### CLIENT CACHING

```shell
127.0.0.1:6379> CLIENT CACHING YES
OK
```

### CLIENT NO-EVICT

```shell
127.0.0.1:6379> CLIENT NO-EVICT ON
OK
```

## Behaviour

When the `CLIENT` command is executed, it performs the action specified by the subcommand. For example, `CLIENT LIST` will list all connected clients, `CLIENT KILL` will terminate a specified client connection, and `CLIENT SETNAME` will assign a name to the current connection. The command's behavior is determined by the subcommand and its parameters.

## Error Handling

Errors may be raised in the following scenarios:

- `Invalid Subcommand`: If an invalid subcommand is provided, DiceDB will return an error message.

  - `Error Message`: `(error) ERR unknown subcommand 'subcommand'`

- `Invalid Parameters`: If the parameters provided to a subcommand are invalid, DiceDB will return an error message.

  - `Error Message`: `(error) ERR syntax error`

- `Client Not Found`: If the specified client for `CLIENT KILL` does not exist, DiceDB will return an error message.

  - `Error Message`: `(error) ERR No such client`

- `Invalid Timeout`: If the timeout value for `CLIENT PAUSE` is not a valid integer, DiceDB will return an error message.

  - `Error Message`: `(error) ERR invalid timeout value`

- `Invalid Reply Mode`: If an invalid reply mode is provided to `CLIENT REPLY`, DiceDB will return an error message.

  - `Error Message`: `(error) ERR Invalid argument for CLIENT REPLY`

## Conclusion

The `CLIENT` command in DiceDB is a powerful tool for managing and inspecting client connections. By understanding the various subcommands and their parameters, you can effectively control and monitor client interactions with the DiceDB server. This documentation provides a comprehensive guide to using the `CLIENT` command, including its parameters, return values, example usage, behavior, and error handling.

