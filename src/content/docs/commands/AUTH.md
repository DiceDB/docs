---
title: AUTH
description: The `AUTH` command is used to authenticate a client connection to a DiceDB server. This is a crucial security measure to protect your DiceDB instance from unauthorized access.
---

The `AUTH` command is used to authenticate a client connection to a DiceDB server. This is a crucial security measure to protect your DiceDB instance from unauthorized access.

### Syntax
```
AUTH password
```

### Parameters
* `password`: The password required to authenticate the client.

### Return Value
* `OK`: If the authentication is successful.
* `ERR wrong password`: If the provided password is incorrect.

### Behavior
1. `Password Verification`: The provided password is compared to the password configured in the DiceDB server's `requirepass` setting.
2. `Authentication Success`: If the passwords match, the client is authenticated, and subsequent commands can be executed.
3. `Authentication Failure`: If the passwords do not match, the client remains unauthenticated, and subsequent commands will be rejected until a successful `AUTH` command is issued.

### Example Usage

```
AUTH mysecretpassword
```

### Error Handling

* `ERR wrong password`: This error is returned if the provided password does not match the configured password.

### Additional Considerations
* The `AUTH` command is typically the first command sent by a client to a DiceDB server if password authentication is enabled.
* For enhanced security, consider using DiceDB's Access Control Lists (ACL) system, which offers more granular control over user permissions.
* Avoid storing passwords in plain text configuration files. Consider using environment variables or secure password management tools.
* Regularly update passwords to enhance security.

By understanding the `AUTH` command and implementing proper authentication practices, you can significantly improve the security of your DiceDB instance. 
