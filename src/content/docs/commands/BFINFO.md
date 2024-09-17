---
title: BFINFO
description: Documentation for the Redis command BFINFO
---

# DiceDB Command: BFINFO

## Overview

The `BFINFO` command is part of the DiceDB Bloom Filter module, which provides probabilistic data structures to efficiently test whether an element is a member of a set. The `BFINFO` command is used to retrieve information about a Bloom filter, such as its capacity, size, and other relevant statistics.

## Syntax

```plaintext
BFINFO <key> [CAPACITY | SIZE | FILTERS | ITEMS | EXPANSIONS]
```

## Parameters

- `key`: (Required) The name of the Bloom filter for which information is being requested.
- `CAPACITY`: (Optional) Returns the capacity of the Bloom filter.
- `SIZE`: (Optional) Returns the size of the Bloom filter.
- `FILTERS`: (Optional) Returns the number of filters in the Bloom filter.
- `ITEMS`: (Optional) Returns the number of items currently stored in the Bloom filter.
- `EXPANSIONS`: (Optional) Returns the number of expansions that have occurred in the Bloom filter.

## Return Value

The return value of the `BFINFO` command depends on the optional argument provided:

- If no optional argument is provided, it returns a dictionary containing all available information about the Bloom filter.
- If an optional argument is provided, it returns the specific information related to that argument.

### Return Types

- `CAPACITY`: Integer
- `SIZE`: Integer
- `FILTERS`: Integer
- `ITEMS`: Integer
- `EXPANSIONS`: Integer
- `Default`: Dictionary

## Example Usage

### Retrieving All Information

```plaintext
BFINFO myBloomFilter
```

`Response:`

```json
{
  "Capacity": 1000,
  "Size": 8192,
  "Filters": 1,
  "Items": 500,
  "Expansions": 0
}
```

### Retrieving Specific Information

#### Capacity

```plaintext
BFINFO myBloomFilter CAPACITY
```

`Response:`

```plaintext
1000
```

#### Size

```plaintext
BFINFO myBloomFilter SIZE
```

`Response:`

```plaintext
8192
```

#### Filters

```plaintext
BFINFO myBloomFilter FILTERS
```

`Response:`

```plaintext
1
```

#### Items

```plaintext
BFINFO myBloomFilter ITEMS
```

`Response:`

```plaintext
500
```

#### Expansions

```plaintext
BFINFO myBloomFilter EXPANSIONS
```

`Response:`

```plaintext
0
```

## Behaviour

When the `BFINFO` command is executed, DiceDB retrieves the requested information about the specified Bloom filter. If no optional argument is provided, it returns a comprehensive dictionary containing all relevant statistics. If an optional argument is provided, it returns only the specific piece of information requested.

## Error Handling

The `BFINFO` command can raise errors under the following conditions:

1. `Non-Existent Key`: If the specified Bloom filter does not exist, DiceDB will return an error.

   - `Error Message`: `ERR no such key`

1. `Invalid Argument`: If an invalid optional argument is provided, DiceDB will return an error.

   - `Error Message`: `ERR syntax error`

1. `Wrong Type`: If the specified key exists but is not a Bloom filter, DiceDB will return an error.

   - `Error Message`: `WRONGTYPE Operation against a key holding the wrong kind of value`

## Summary

The `BFINFO` command is a powerful tool for retrieving detailed information about a Bloom filter in DiceDB. By understanding the parameters, return values, and potential errors, users can effectively monitor and manage their Bloom filters.

