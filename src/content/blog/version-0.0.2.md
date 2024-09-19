---
title: 'Releasing DiceDB v0.0.2'
description: 'We are excited to announce the release of version 0.0.2. This update brings significant enhancements to our in-memory real-time database, further solidifying its position as a high-performance, SQL-based reactive system designed to replace Redis in modern, real-time applications.'
published_at: 2024-09-06
author: arpit
---

We are excited to announce the release of version 0.0.2. This update brings significant enhancements to our in-memory real-time database, further solidifying its position as a high-performance, SQL-based reactive system designed to replace Redis in modern, real-time applications.

One of the most notable additions in this release is the support for the WATCH command, which now allows for key updates. This feature, coupled with the introduction of QWATCH, enables a more robust real-time querying capability. We've implemented initial SQL parsing support for QWATCH and established an end-to-end QWATCH flow using DSQL (DiceDB SQL). This advancement significantly improves our ability to handle real-time data changes and propagate updates to clients efficiently.

We've also expanded our SQL capabilities, introducing support for wildcard FROM clauses, ORDER BY $value, and LIMIT in DSQL. These additions provide more flexibility in query construction and result set manipulation. Furthermore, we've added WHERE clause support to the DSQL Parser and Executor, enhancing our querying capabilities.

In terms of data types and operations, we've introduced support for byte arrays, signed integers, and JSON. These additions expand the range of data that can be efficiently stored and manipulated within DiceDB. We've also implemented JSONPath support, allowing for more sophisticated JSON data querying and manipulation.

Performance optimizations have been a key focus in this release. We've introduced a functional locking strategy to improve concurrency, and we're now using sync.Map for watching queries to enhance thread safety. We've also implemented caching for QWATCH queries to boost performance in real-time update scenarios.

Security enhancements include the addition of basic authentication support, providing an extra layer of protection for database access.

We've expanded our command set significantly, adding support for various Redis-compatible commands such as HELLO, KEYS, MSET, MGET, RENAME, COPY, TOUCH, OBJECT IDLETIME, EXPIRETIME, DBSIZE, and more. We've also introduced new commands specific to our JSON support, including JSON.TYPE, JSON.CLEAR, and JSON.DEL.

Error handling and messaging have been improved across the board, with a focus on standardizing error messages to enhance debugging and user experience.

To demonstrate the real-world applicability of our enhancements, we've added a real-time leaderboard demo using QWATCH, showcasing the power of DiceDB in building truly reactive applications.

On the development side, we've made significant improvements to our testing infrastructure. We've added comprehensive benchmarks, improved test coverage, and set up CI testing as part of our push to master and PR workflows. We've also introduced linting to maintain code quality and consistency.

Lastly, we've updated our licensing to BSL 1.1, reflecting our commitment to balancing open-source principles with sustainable development.

These enhancements collectively represent a substantial step forward in DiceDB's capabilities, performance, and developer experience. As we continue to refine and expand our system, we remain committed to providing a cutting-edge solution for real-time data management on modern hardware.
