---
title: 'Releasing DiceDB v0.0.3'
description: 'We are excited to announce the release of version 0.0.2. This update brings significant enhancements to our in-memory real-time database, further solidifying its position as a high-performance, SQL-based reactive system designed to replace Redis in modern, real-time applications.'
published_at: 2024-09-11
author: arpit
---

As we release version 0.0.3 of DiceDB, I'm excited to share the significant improvements and optimizations we've implemented. This release marks a substantial step forward in our journey to create a high-performance, in-memory real-time database with SQL-based reactivity.

One of the primary focuses of this release was code refactoring and structural improvements. We've separated the store package and moved several packages to internal, enhancing modularity and maintainability. This restructuring will facilitate easier development and testing moving forward.

We've made notable progress in optimizing our error handling mechanisms. The type error return has been refined, leading to more efficient error management and improved system reliability.

A significant enhancement in this release is the addition of common cache support per fingerprint in QWATCH. This optimization will lead to substantial performance improvements in query execution, especially for frequently accessed data patterns.

We've addressed several deviations from Redis implementation, particularly in bitmap commands. This ensures greater compatibility and consistency for users migrating from Redis to DiceDB.

The addition of the COMMAND command expands our compatibility with existing Redis clients and tools, further solidifying DiceDB as a drop-in replacement for Redis.

We've introduced HGET command support, complete with comprehensive unit and integration tests. This addition expands our hash operations capabilities, providing more flexibility in data manipulation.

A critical improvement in this release is the implementation of retry with exponential backoff for QWATCH writes. This enhancement significantly improves system resilience and reliability under high load or network instability conditions.

We've expanded our SQL execution capabilities by adding support for 'LIKE' and 'NOT LIKE' operators. This feature enhances our query flexibility, allowing for more complex pattern matching operations.

The EXPIRE command behavior has been refined to ensure consistency across various flag combinations, addressing edge cases that could lead to unexpected results.

We've introduced a TestEnvEnabled configuration and optimized our AOF (Append-Only File) dump process for test environments. This change will significantly speed up our testing processes without compromising on reliability.

A notable change in our DSQL (DiceDB Structured Query Language) is the deprecation of the FROM clause, with key filtering now handled in the WHERE clause. This modification aligns our query structure more closely with standard SQL practices while maintaining our unique capabilities.

We've expanded our JSON manipulation capabilities with the addition of the JSON.ARRLEN command, furthering our support for complex data structures.

A major architectural change in this release is the removal of locking structures for the store. This optimization reduces overhead and improves concurrency, leveraging our lock-free design more effectively.

We've implemented asynchronous notifications to the Query Manager for key changes. This enhancement decouples the write path from query processing, leading to improved write performance and reduced latency.

Lastly, we've improved our ORDER BY clause handling in the SQL parser, providing more robust and efficient sorting capabilities.

These changes collectively represent a significant step forward in DiceDB's evolution. The optimizations and new features introduced in version 0.0.3 enhance our database's performance, reliability, and functionality, further solidifying its position as a cutting-edge solution for real-time applications.
