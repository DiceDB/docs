---
title: JSON.SET Command
description: JSON.SET Command
---

The `JSON.SET` command enables you to store or modify JSON values and attributes within a DiceDB key.

### Syntax

```
JSON.SET key path value
```

* **key**: The name of the key to which the JSON value will be associated.
* **path**: JSONPath expression specifying the location within the document where the value should be set.
* **value**: The JSON value to be stored at the specified path.

### Behavior

1. If the specified `key` does not exist, a new key is created.
2. The `path` argument is parsed as a JSONPath expression to determine the target location within the JSON document.
3. If the path does not exist, it is created.
4. If the path already exists, its value is overwritten.

### JSONPath Support

`JSON.SET` leverages the powerful JSONPath syntax to accurately pinpoint the target location for value insertion or modification. Key JSONPath concepts include:

* Root: Represented by `$`, indicates the root of the JSON document.
* Child Operators:
  * `.`: Accesses object properties.
  * `[]`: Accesses array elements.

### Examples

#### Basic Usage

```
JSON.SET avengers:1 $.name "Tony Stark"
```

This command creates a new key named `avengers:1` with a JSON object containing a property `name` set to "Tony Stark".

```
JSON.SET avengers:1 $.address.city "New York"
```

This command adds a nested object `address` with a property `city` set to "New York" within the existing `avengers:1`.

### Error Handling

* If the `key` or `path` is invalid, a syntax error is returned.
* If the `value` is not valid JSON, a type error is returned.
