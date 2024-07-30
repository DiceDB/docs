---
title: JSON.SET
description: The `JSON.SET` command enables you to create or modify JSON values within a specified key. This command offers granular control over JSON data structures, allowing for intricate manipulations.

---

The `JSON.SET` command enables you to create or modify JSON values within a specified key. This command offers granular control over JSON data structures, allowing for intricate manipulations.

### Syntax

```
JSON.SET key path value
```

* `key`: The name of the key to which the JSON value will be associated.
* `path`: JSONPath expression specifying the location within the document.
* `value`: The JSON value to be stored at the specified path.

### Return Value

* `OK`: if the operation is successful.

### Behavior
1. If the specified `key` doesn't exist, a new key is created.
2. The `path` is interpreted as a JSONPath expression to pinpoint the exact location within the JSON document.
3. The provided `value` is assigned to the determined path.
   * If the path doesn't exist, it's created.
   * If the path already exists, its value is overwritten.


### JSONPath Support

`JSON.SET` leverages the powerful JSONPath syntax to accurately pinpoint the target location for value insertion or modification. Key JSONPath concepts include:

* Root: Represented by `$`, indicates the root of the JSON document.
* Child Operators:
  * `.`: Accesses object properties.
  * `[]`: Accesses array elements.

### Examples

```
JSON.SET avengers:1 $.name "Tony Stark"
```

This command creates a new key named `avengers:1` with a JSON object containing a property `name` set to "Tony Stark".

```
JSON.SET avengers:1 $.address.city "New York"
```

This command adds a nested object `address` with a property `city` set to "New York" within the existing `avengers:1`.

### Error Handling
* `ERR unknown command`: If RedisJSON module is not loaded.
* `ERR invalid JSON`: If the provided `value` is not valid JSON.
* `ERR syntax error`: If the `path` is malformed.
* `ERR path not found`: If the specified path doesn't exist and cannot be created.
* `ERR object expected`: If a path element expects an object but encounters a different type.
* `ERR array index out of range`: If an array index in the path is out of bounds.
* `(nil) reply`: If the `NX` or `XX` condition is not met.
