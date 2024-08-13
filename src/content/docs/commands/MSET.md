---
title: "MSET"
description: The `MSET` command in DiceDB is used to set multiple key-value pairs in a single atomic operation. This command is particularly useful for reducing the number of round-trip times between the client and the server when you need to set multiple keys at once.
---

The `MSET` command in DiceDB is used to set multiple key-value pairs in a single atomic operation. This command is particularly useful for reducing the number of round-trip times between the client and the server when you need to set multiple keys at once.

## Syntax

```
MSET key1 value1 [key2 value2 ...]
```

## Parameters

- `key1, key2, ...`: The keys to be set. Each key must be a unique string.
- `value1, value2, ...`: The values to be associated with the respective keys. Each value can be any string.

## Return Value

- `Simple String reply`: The command returns `OK` if the operation is successful.

## Behaviour

When the `MSET` command is executed, DiceDB sets the specified keys to their respective values. This operation is atomic, meaning that either all the keys are set, or none of them are. This ensures data consistency and integrity.

## Error Handling

- `Wrong number of arguments`: If the number of arguments is not even (i.e., there is a key without a corresponding value), DiceDB will return an error:
  ```
  ERR wrong number of arguments for 'mset' command
  ```
- `Non-string keys or values`: If any of the keys or values are not strings, DiceDB will return an error:
  ```
  ERR value is not a valid string
  ```

## Example Usage

### Basic Example

To set multiple key-value pairs in DiceDB:

```sh
MSET key1 "value1" key2 "value2" key3 "value3"
```

`Response:`

```
OK
```

### Example with Retrieval

To set multiple key-value pairs and then retrieve them:

```sh
MSET name "Alice" age "30" city "Wonderland"
```

`Response:`

```
OK
```

To retrieve the values:

```sh
GET name
```

`Response:`

```
"Alice"
```

```sh
GET age
```

`Response:`

```
"30"
```

```sh
GET city
```

`Response:`

```
"Wonderland"
```

### Error Example

Attempting to set an odd number of arguments:

```sh
MSET key1 "value1" key2
```

`Response:`

```
ERR wrong number of arguments for 'mset' command
```

## Notes

- The `MSET` command does not perform any type checking on the values. All values are stored as strings.
- If any of the keys already exist, their values will be overwritten without any warning.
- The `MSET` command is more efficient than issuing multiple `SET` commands because it reduces the number of network round-trips.

## Best Practices

- Use `MSET` when you need to set multiple keys to improve performance and ensure atomicity.
- Ensure that you always provide an even number of arguments to avoid errors.
- Be cautious when using `MSET` to overwrite existing keys, as this operation does not provide any warnings or confirmations.
