---
title: SET
description: The `SET` command in DiceDB is used to set the value of a key. If the key already holds a value, it is overwritten, regardless of its type. This is one of the most fundamental operations in DiceDB as it allows for both creating and updating key-value pairs.
---

The `SET` command in DiceDB is used to set the value of a key. If the key already holds a value, it is overwritten, regardless of its type. This is one of the most fundamental operations in DiceDB as it allows for both creating and updating key-value pairs.

## Syntax

```
SET key value [NX | XX] [EX seconds | PX milliseconds | 
EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL ]
```

## Parameters

1. `key`: The name of the key to be set.

   - Type: String
   - Required: Yes

1. `value`: The value to be set for the key.

   - Type: String
   - Required: Yes

1. `EX seconds`: Set the specified expire time, in seconds.

   - Type: Integer
   - Required: No

1. `EXAT timestamp-seconds`: Set the specified Unix time at which the key will expire, in seconds (a positive integer).

   - Type: Integer
   - Required: No

1. `PX milliseconds`: Set the specified expire time, in milliseconds.

   - Type: Integer
   - Required: No

1. `PXAT timestamp-milliseconds`: Set the specified Unix time at which the key will expire, in milliseconds (a positive integer).

   - Type: Integer
   - Required: No

1. `NX`: Only set the key if it does not already exist.

   - Type: None
   - Required: No

1. `XX`: Only set the key if it already exists.

   - Type: None
   - Required: No

1. `KEEPTTL`: Retain the time-to-live associated with the key.

   - Type: None
   - Required: No

## Return Value

- Returns `OK` if the command is successful.
- Returns `nil` if the `NX` or `XX` conditions are not met.
- Returns an error in cases where the syntax or specified constraints are invalid.

## Behaviour

- If the specified key already exists, the `SET` command will overwrite the existing key-value pair with the new value unless the `NX` option is provided.
- If the `NX` option is present, the command will set the key only if it does not already exist. If the key exists, no operation is performed and `nil` is returned.
- If the `XX` option is present, the command will set the key only if it already exists. If the key does not exist, no operation is performed and `nil` is returned.
- Using the `EX`, `EXAT`, `PX` or `PXAT` options together with `KEEPTTL` is not allowed and will result in an error.
- When provided, `EX` sets the expiry time in seconds and `PX` sets the expiry time in milliseconds.
- When provided, `EXAT` sets the expiry time in timestamp seconds and `PXAT` sets the expiry time in timestamp milliseconds.
- The `KEEPTTL` option ensures that the key's existing TTL is retained.

## Error Handling

The command may raise errors in the following scenarios:

1. `Wrong type of value or key`:

   - Error Message: `(error) WRONGTYPE Operation against a key holding the wrong kind of value`
   - Occurs when attempting to use the command on a key that contains a non-string value.

1. `Invalid syntax or conflicting options`:

   - Error Message: `(error) ERR syntax error`
   - Occurs if the command's syntax is incorrect, such as incompatible options like `EX` and `KEEPTTL` used together, or a missing required parameter.

1. `Non-integer value for `EX`or`PX\`\`:

   - Error Message: `(error) ERR value is not an integer or out of range`
   - Occurs when the expiration time provided is not a valid integer.

## Example Usage

### Basic Usage

Setting a key `foo` with the value `bar`:

```bash
127.0.0.1:7379> SET foo bar
OK
```

### Using Expiration Time (in seconds)

Setting a key `foo` with the value `bar` to expire in 10 seconds:

```bash
127.0.0.1:7379> SET foo bar EX 10
OK
```

### Using Expiration Time (in timestamp seconds)

Setting a key `foo` with the value `bar` to expire at 1726696183 timestamp seconds:

```bash
127.0.0.1:7379> SET foo bar EXAT 1726696183
OK
```

### Using Expiration Time (in milliseconds)

Setting a key `foo` with the value `bar` to expire in 10000 milliseconds (10 seconds):

```bash
127.0.0.1:7379> SET foo bar PX 10000
OK
```

### Using Expiration Time (in timestamp milliseconds)

Setting a key `foo` with the value `bar` to expire at 1726696092379 timestamp milliseconds:

```bash
127.0.0.1:7379> SET foo bar PXAT 1726696092379
OK
```

### Setting Only if Key Does Not Exist

Setting a key `foo` only if it does not already exist:

```bash
127.0.0.1:7379> SET foo bar NX
```

`Response`:

- If the key does not exist: `OK`
- If the key exists: `nil`

### Setting Only if Key Exists

Setting a key `foo` only if it exists:

```bash
127.0.0.1:7379> SET foo bar XX
```

`Response`:

- If the key exists: `OK`
- If the key does not exist: `nil`

### Retaining Existing TTL

Setting a key `foo` with a value `bar` and retaining existing TTL:

```bash
127.0.0.1:7379> SET foo bar KEEPTTL
OK
```

### Invalid Usage

Trying to set key `foo` with both `EX` and `KEEPTTL` will result in an error:

```bash
127.0.0.1:7379> SET foo bar EX 10 KEEPTTL
(error) ERR syntax error
```
