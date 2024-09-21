---
title: 'Releasing DiceDB v0.0.4'
description: 'In this release of DiceDB version 0.0.4, we've made significant strides in enhancing the functionality, performance, and compatibility of our in-memory real-time database. As the lead engineer on this project, I'm excited to share the technical details of our latest improvements.'
published_at: 2024-09-20
author: arpit
---

In this release of DiceDB version 0.0.4, we've made significant strides in enhancing the functionality, performance, and compatibility of our in-memory real-time database. As the lead engineer on this project, I'm excited to share the technical details of our latest improvements.

We've addressed several critical issues and implemented new features that bring us closer to our goal of being a drop-in replacement for Redis while offering superior performance for real-time applications. Let's dive into the key changes:

Data Structure Enhancements:
We've expanded our support for complex data structures, particularly in the JSON realm. The implementation of commands like JSON.FORGET, JSON.STRLEN, JSON.TOGGLE, JSON.MGET, JSON.NUMINCRBY, JSON.ARRPOP, and JSON.OBJLEN significantly increases our JSON manipulation capabilities. These additions allow for more granular control over JSON data, enabling efficient operations without the need for full object retrieval and modification.

Performance Optimizations:
A major focus of this release was on improving performance. We've made substantial enhancements to our SQL Executor, which should result in faster query processing. Additionally, we've implemented LFU (Least Frequently Used) cache with approximate counting, which optimizes memory usage and improves access times for frequently requested data.

We've also addressed performance in specific areas, such as the PFCOUNT command. By implementing benchmarking and caching mechanisms, we've improved the efficiency of our HyperLogLog operations, which are crucial for cardinality estimation in large datasets.

Compatibility and Interoperability:
To enhance DiceDB's versatility, we've added support for HTTP, allowing for easier integration with web-based applications. We've also implemented the COMMAND HELP feature, providing users with in-database documentation for available commands.

We've expanded our platform support by adding compatibility for ARM64 architecture, including Darwin ARM64. This broadens our potential user base and allows for deployment on a wider range of hardware configurations.

Reliability and Consistency:
We've fixed several issues to ensure DiceDB behaves consistently with Redis, particularly in edge cases. For instance, we've addressed the MSET command consistency issue and fixed problems with large integer handling in SET and GETEX commands with expiry times.

We've also improved our test suite, adding more comprehensive edge case testing for commands like INCR. This helps ensure the robustness of our implementation across a wide range of scenarios.

Security and Configuration:
We've added support for configuration files, allowing for more flexible deployment options. We've also ensured that authentication command line flags are properly respected during server startup, enhancing security in various deployment scenarios.

Developer Experience:
To improve the developer experience and maintain code quality, we've restructured our test folder and fixed several flaky tests. We've also bumped our Go SDK to version 1.23, taking advantage of the latest language features and optimizations.

In summary, this release represents a significant step forward in DiceDB's evolution. The enhancements in JSON handling, performance optimizations, and expanded platform support bring us closer to our goal of providing a high-performance, real-time database solution that can seamlessly replace Redis in modern application stacks.
