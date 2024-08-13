---
title: PING
description: The `PING` command is a fundamental diagnostic tool used to test the connectivity and responsiveness of a DiceDB server. It serves as a basic health check to determine if the server is running and accessible.
---

The `PING` command is a fundamental diagnostic tool used to test the connectivity and responsiveness of a DiceDB server. It serves as a basic health check to determine if the server is running and accessible.

### Syntax
```
PING [message]
```

### Parameters
* `message` (optional): An optional string to be echoed back by the server.

### Return Value
* `PONG` (or the provided message if included): Indicates a successful connection and server response.

### Behavior
When the `PING` command is sent to the DiceDB server, the following occurs:

1. `Connection Check`: The command verifies that a connection to the DiceDB server is established.
2. `Server Response`: The server processes the command and sends back a `PONG` response, or the provided message if specified.

### Example Usage

```
# Basic PING command
PING

# PING with a message
PING "Hello from client"
```

### Error Handling

While the `PING` command itself is unlikely to return an error, underlying network or server issues can prevent a successful response. In such cases, the client may encounter connection timeouts or other network-related errors.

### Additional Considerations

* The `PING` command can be used to measure network latency between the client and server.
* It's often employed in scripts or monitoring tools to check server availability.
* While not explicitly designed for this purpose, the `PING` command can be used to test authentication if a message is echoed back correctly.

By understanding the `PING` command, you can effectively assess the health and responsiveness of your DiceDB server.
