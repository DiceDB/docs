---
title: SET
description: The `SET` command is a fundamental operation in DiceDB, allowing you to store a string, integer, or any supported types against a particular key.
---

The `SET` command is a fundamental operation in DiceDB,
allowing you to store a string, integer, or any supported types against a particular key.
It's a versatile command with several options to control key behavior.

### Syntax
```
SET key value [EX seconds]
```

### Parameters

* `key`: The name of the key to which the value will be associated.
* `value`: The string value to be stored.
* `EX seconds`: Sets an expiration time for the key in seconds.

### Return Value

* `OK`: If the set operation was successful.

### Behavior

1. If the specified `key` does not exist, a new key is created.
3. If the `EX` option is used, an expiration time is set for the key.

### Examples

```
SET mykey "Hello, world!"
SET mykey "Hello, world!" EX 10
```
