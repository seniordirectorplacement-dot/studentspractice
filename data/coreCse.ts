export interface CoreCseDomain {
  id: string;
  name: string;
  code: string;
  badge: string;
  summary: string;
  topics: string[];
  interviewFocus: string[];
  keyQuestions: string[];
  freeResources: {
    title: string;
    type: 'Guide' | 'Documentation' | 'Video' | 'Interactive';
    url: string;
  }[];
}

export const CORE_CSE_DOMAINS: CoreCseDomain[] = [
  {
    id: "oop",
    name: "Object-Oriented Programming (OOP)",
    code: "CSE-101",
    badge: "Core Foundation",
    summary: "The 4 foundational pillars, design principles, polymorphism, memory layout, and real-world domain modeling in C++, Java, and Python.",
    topics: [
      "Encapsulation, Abstraction, Inheritance, and Polymorphism",
      "Virtual Functions, vtables, and dynamic dispatch mechanics",
      "Abstract classes vs Interfaces and default methods",
      "SOLID Design Principles (Single Responsibility, Open-Closed, Liskov, Interface Segregation, Dependency Inversion)",
      "Constructors, Destructors, Copy vs Move semantics, and RAII",
      "Operator Overloading and Diamond Problem resolutions"
    ],
    interviewFocus: [
      "Explain vtable and vptr memory footprint in C++ polymorphism",
      "Differentiate shallow copy vs deep copy with memory pointers",
      "Why prefer composition over inheritance? Provide a real scenario",
      "How to prevent memory leaks with smart pointers (unique_ptr, shared_ptr, weak_ptr)",
      "Demonstrate Liskov Substitution Principle violation and refactored fix"
    ],
    keyQuestions: [
      "What is runtime polymorphism and how is it implemented under the hood?",
      "Can an abstract class have constructors? Why or why not?",
      "Explain the diamond problem in multiple inheritance and how languages solve it.",
      "What is the difference between early binding and late binding?"
    ],
    freeResources: [
      { title: "GeeksforGeeks OOP Concepts Comprehensive Guide", type: "Guide", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
      { title: "Bjarne Stroustrup C++ Core Guidelines", type: "Documentation", url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines" },
      { title: "Refactoring.Guru: OOP & Design Principles", type: "Interactive", url: "https://refactoring.guru/design-patterns" },
      { title: "Java OOP Visual Tutorials by Oracle", type: "Documentation", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" }
    ]
  },
  {
    id: "dbms",
    name: "Database Management Systems (DBMS) & SQL",
    code: "CSE-102",
    badge: "High Frequency",
    summary: "Relational database internals, ACID transactions, B+ Tree indexing, normalization (1NF-BCNF), locks, MVCC, and complex analytical SQL queries.",
    topics: [
      "ACID properties (Atomicity, Consistency, Isolation, Durability) deep dive",
      "Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable)",
      "Concurrency anomalies: Dirty Read, Non-Repeatable Read, Phantom Read",
      "Indexing: B-Tree, B+ Tree, Clustered vs Non-Clustered indices",
      "Database Normalization (1NF, 2NF, 3NF, BCNF) and Denormalization trade-offs",
      "Query execution plans (EXPLAIN), Join algorithms (Nested Loop, Hash Join, Sort-Merge)",
      "SQL Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG)"
    ],
    interviewFocus: [
      "Why do relational databases use B+ Trees instead of Binary Search Trees or Hash tables?",
      "How does Two-Phase Locking (2PL) guarantee serializability?",
      "Write an optimized SQL query to find the N-th highest salary without LIMIT/OFFSET",
      "Explain Multi-Version Concurrency Control (MVCC) in PostgreSQL / MySQL InnoDB",
      "What causes database deadlocks and how can they be detected and avoided?"
    ],
    keyQuestions: [
      "Explain the trade-off between write performance and index quantity on high-throughput tables.",
      "What is the difference between RANK() and DENSE_RANK() in SQL?",
      "How does WAL (Write-Ahead Logging) guarantee atomicity and durability in case of server crashes?",
      "What is candidate key vs primary key vs super key?"
    ],
    freeResources: [
      { title: "Use The Index, Luke: A Guide to Database Performance", type: "Interactive", url: "https://use-the-index-luke.com/" },
      { title: "CMU 15-445: Database Systems Lectures (Andy Pavlo)", type: "Video", url: "https://15445.courses.cs.cmu.edu/" },
      { title: "PostgreSQL Official Documentation on Indexes & MVCC", type: "Documentation", url: "https://www.postgresql.org/docs/current/indexes.html" },
      { title: "LeetCode Database Top 50 SQL Problems", type: "Guide", url: "https://leetcode.com/studyplan/top-sql-50/" }
    ]
  },
  {
    id: "os",
    name: "Operating Systems (OS)",
    code: "CSE-103",
    badge: "Critical Core",
    summary: "Kernel vs user space, process management, threads, IPC, synchronization primitives, deadlocks, virtual memory, paging, and disk scheduling.",
    topics: [
      "Process Lifecycle, PCB, Context Switching overhead",
      "Threads vs Processes, Kernel-level vs User-level threads",
      "Inter-Process Communication (IPC): Pipes, Sockets, Shared Memory, Message Queues",
      "Process Synchronization: Critical Section, Mutex, Semaphores, Spinlocks, Barriers",
      "Deadlocks: 4 Coffman conditions, Banker's Algorithm, Resource Allocation Graph",
      "Virtual Memory: Paging, Page Faults, TLB (Translation Lookaside Buffer), Page Replacement (LRU, FIFO, Clock)",
      "CPU Scheduling Algorithms: FCFS, SJF, Round Robin, Multi-Level Feedback Queue"
    ],
    interviewFocus: [
      "Trace step-by-step what happens during a hardware interrupt and context switch",
      "Solve the Dining Philosophers and Producer-Consumer problem using Semaphores",
      "Why is context switching between threads cheaper than between processes?",
      "Explain Belady's Anomaly and which page replacement algorithms are immune",
      "What is Thrashing in virtual memory and how does the Working Set Model mitigate it?"
    ],
    keyQuestions: [
      "What happens when a page fault occurs? Step-by-step kernel actions.",
      "Explain atomic Test-and-Set instructions and how they power mutexes.",
      "What are Zombie and Orphan processes and how does init/systemd handle them?",
      "Differentiate between synchronous I/O, asynchronous I/O, and memory-mapped files (mmap)."
    ],
    freeResources: [
      { title: "Operating Systems: Three Easy Pieces (OSTEP Book free online)", type: "Guide", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
      { title: "GeeksforGeeks Operating Systems Comprehensive Track", type: "Guide", url: "https://www.geeksforgeeks.org/operating-systems/" },
      { title: "MIT 6.S081: Operating System Engineering (xv6)", type: "Interactive", url: "https://pdos.csail.mit.edu/6.828/2021/schedule.html" },
      { title: "Linux Kernel Documentation on Memory Management", type: "Documentation", url: "https://www.kernel.org/doc/html/latest/admin-guide/mm/index.html" }
    ]
  },
  {
    id: "cn",
    name: "Computer Networks (CN)",
    code: "CSE-104",
    badge: "Essential",
    summary: "OSI and TCP/IP 5-layer stacks, TCP 3-way handshake & flow/congestion control, UDP, DNS, HTTP/1.1 vs HTTP/2 vs HTTP/3, TLS handshake, and routing protocols.",
    topics: [
      "OSI 7-Layer model vs TCP/IP 4-Layer model mappings",
      "TCP 3-Way Handshake (SYN, SYN-ACK, ACK) and 4-Way Connection Termination (FIN/ACK)",
      "TCP Flow Control (Sliding Window) vs Congestion Control (Slow Start, Congestion Avoidance, Fast Retransmit)",
      "DNS Resolution: Recursive vs Iterative queries, Caching, Anycast DNS",
      "Application Protocols: HTTP/1.1 (Keep-Alive), HTTP/2 (Multiplexing, HPACK), HTTP/3 (QUIC over UDP)",
      "HTTPS & TLS 1.3 Handshake: Symmetric vs Asymmetric cryptography, Certificates, PKI",
      "Network Layer: IPv4 vs IPv6, Subnetting, CIDR, NAT, Routing (BGP, OSPF)"
    ],
    interviewFocus: [
      "Classic question: What happens when you type 'https://www.google.com' into your browser address bar and press Enter?",
      "Why does TCP use a 3-way handshake instead of a 2-way handshake?",
      "Explain head-of-line (HoL) blocking in HTTP/1.1 and how HTTP/2 vs HTTP/3 (QUIC) solve it",
      "Calculate subnet masks, network addresses, and usable host ranges for CIDR /26",
      "Compare TCP vs UDP: When would you strictly pick UDP and how to achieve reliability on top?"
    ],
    keyQuestions: [
      "Explain TIME_WAIT state in TCP and why it lasts 2*MSL (Maximum Segment Lifetime).",
      "How does TLS 1.3 reduce handshake latency to 1-RTT or 0-RTT?",
      "What is ARP (Address Resolution Protocol) and at which layer does it operate?",
      "How does NAT (Network Address Translation) allow private IPs to communicate with public internet?"
    ],
    freeResources: [
      { title: "Computer Networking: A Top-Down Approach Companion", type: "Guide", url: "https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm" },
      { title: "High Performance Browser Networking by Ilya Grigorik", type: "Interactive", url: "https://hpbn.co/" },
      { title: "Cloudflare Learning Center: How Does The Internet Work?", type: "Guide", url: "https://www.cloudflare.com/learning/" },
      { title: "Wireshark Packet Analysis Practice Labs", type: "Interactive", url: "https://www.wireshark.org/" }
    ]
  },
  {
    id: "system-design",
    name: "System Design (LLD & HLD)",
    code: "CSE-105",
    badge: "Senior / Tier-1",
    summary: "Object-oriented design patterns (GoF), Low-Level Design (LLD) problem breakdowns, and High-Level Design (HLD) distributed system architectures.",
    topics: [
      "Creational Patterns: Singleton, Factory, Abstract Factory, Builder",
      "Structural Patterns: Adapter, Decorator, Facade, Composite, Proxy",
      "Behavioral Patterns: Observer, Strategy, State, Command, Chain of Responsibility",
      "Scalability concepts: Horizontal vs Vertical scaling, Load Balancers (L4 vs L7, Consistent Hashing)",
      "Caching strategies: Cache-Aside, Write-Through, Write-Behind, Eviction (LRU/LFU), Redis cluster",
      "Data partitioning: Horizontal sharding, Replication (Leader-Follower, Multi-Leader, Quorum)",
      "CAP Theorem and PACELC Theorem trade-offs in distributed systems",
      "Message Queues & Streaming: Kafka, RabbitMQ, Event-driven architecture, Idempotency"
    ],
    interviewFocus: [
      "LLD interview task: Design a Parking Lot System with multiple floors, spot sizes, and ticketing",
      "LLD interview task: Design an Elevator Management System with optimal dispatch scheduling",
      "HLD interview task: Design a URL Shortener (TinyURL) handling 100M new links/day and 10B reads/month",
      "HLD interview task: Design a Rate Limiter using Token Bucket / Leaky Bucket algorithms",
      "HLD interview task: Design WhatsApp / Slack real-time messaging architecture with WebSockets"
    ],
    keyQuestions: [
      "How does Consistent Hashing minimize key remapping when adding or removing server nodes?",
      "What is the difference between Strong Consistency, Eventual Consistency, and Read-After-Write consistency?",
      "How do you design an idempotent payment processing API?",
      "When would you choose Cassandra (NoSQL column-family) over PostgreSQL (RDBMS)?"
    ],
    freeResources: [
      { title: "System Design Primer by Donne Martin (GitHub)", type: "Guide", url: "https://github.com/donnemartin/system-design-primer" },
      { title: "Refactoring.Guru Design Patterns Reference", type: "Interactive", url: "https://refactoring.guru/design-patterns" },
      { title: "ByteByteGo System Design Newsletter & Blog", type: "Guide", url: "https://blog.bytebytego.com/" },
      { title: "Martin Fowler: Microservices and Distributed Architecture", type: "Documentation", url: "https://martinfowler.com/architecture/" }
    ]
  },
  {
    id: "software-engineering",
    name: "Software Engineering & SDLC",
    code: "CSE-106",
    badge: "Industry Standard",
    summary: "Modern software lifecycle models, Agile Scrum, Git branching strategies, unit/integration testing methodologies, CI/CD, and clean code conventions.",
    topics: [
      "Software Development Life Cycle: Requirements, Design, Implementation, Testing, Deployment, Maintenance",
      "Agile Framework: Scrum ceremonies (Sprint Planning, Daily Standup, Review, Retrospective), Kanban boards",
      "Git version control internals: DAG (Directed Acyclic Graph), commits, trees, blobs, git rebase vs merge",
      "Testing Pyramid: Unit Tests, Integration Tests, End-to-End (E2E) Tests, Test-Driven Development (TDD)",
      "Continuous Integration & Continuous Delivery (CI/CD) pipelines",
      "Clean Code principles: DRY (Don't Repeat Yourself), KISS, YAGNI, Code Smells and Refactoring",
      "API Design: RESTful conventions, status codes (2xx, 3xx, 4xx, 5xx), versioning, GraphQL vs gRPC"
    ],
    interviewFocus: [
      "Git scenario: How to safely undo the latest public commit vs latest private commit without altering history?",
      "Explain the exact difference between Git rebase and Git merge. When should rebase be strictly forbidden?",
      "How do you write testable, mockable code using Dependency Injection?",
      "Describe a situation where a software bug escaped to production. What was your RCA (Root Cause Analysis) process?",
      "How do you resolve merge conflicts between divergent feature branches?"
    ],
    keyQuestions: [
      "What is code coverage and why is 100% test coverage not a guarantee of defect-free software?",
      "What is technical debt, how does it accumulate, and how should an engineering team prioritize paying it down?",
      "What is Semantic Versioning (SemVer: MAJOR.MINOR.PATCH)?",
      "Explain blue-green deployment vs canary release vs rolling deployment."
    ],
    freeResources: [
      { title: "Atlassian Git Tutorial & Workflows", type: "Guide", url: "https://www.atlassian.com/git/tutorials" },
      { title: "Google Engineering Practices Documentation (Code Review)", type: "Documentation", url: "https://google.github.io/eng-practices/" },
      { title: "Agile Manifesto & 12 Guiding Principles", type: "Documentation", url: "https://agilemanifesto.org/" },
      { title: "Martin Fowler: Test Pyramid and TDD", type: "Guide", url: "https://martinfowler.com/articles/practical-test-pyramid.html" }
    ]
  },
  {
    id: "toc-compiler",
    name: "Theory of Computation & Compiler Design",
    code: "CSE-107",
    badge: "Theory & GATE",
    summary: "Finite Automata (DFA/NFA), Regular Expressions, Context-Free Grammars, Turing Machines, P vs NP, Lexical Analysis, Parsing, and Intermediate Code Generation.",
    topics: [
      "Deterministic Finite Automata (DFA) and Non-Deterministic Finite Automata (NFA) subset construction",
      "Chomsky Hierarchy: Regular, Context-Free, Context-Sensitive, Recursively Enumerable languages",
      "Pumping Lemma for Regular Languages and Context-Free Languages",
      "Pushdown Automata (PDA) and Context-Free Grammars (CFG), Ambiguity resolution",
      "Turing Machines, Decidability, Halting Problem, Rice's Theorem",
      "Complexity Classes: P, NP, NP-Complete (3-SAT, Vertex Cover, Clique), NP-Hard",
      "Compiler Phases: Lexer (tokens), Parser (AST, LL/LR parsing), Semantic Analysis, Optimizer, Code Generation"
    ],
    interviewFocus: [
      "Prove why the language L = {a^n b^n | n >= 0} is not regular using the Pumping Lemma",
      "How does a Lexer use DFA to tokenize source code characters efficiently in O(N)?",
      "Explain the Halting Problem and give the reduction proof by contradiction",
      "What is the difference between NP and NP-Complete?",
      "Differentiate between top-down (LL) and bottom-up (LR, LALR) parsers and shift-reduce conflicts"
    ],
    keyQuestions: [
      "Is every regular language context-free? Is the converse true?",
      "What is the difference between decidable and semi-decidable problems?",
      "Why can't HTML be parsed using regular expressions?",
      "Explain Abstract Syntax Tree (AST) vs Concrete Syntax Tree (Parse Tree)."
    ],
    freeResources: [
      { title: "Introduction to the Theory of Computation by Michael Sipser", type: "Guide", url: "https://math.mit.edu/~sipser/" },
      { title: "Stanford CS143: Compilers Course Materials", type: "Documentation", url: "https://web.stanford.edu/class/cs143/" },
      { title: "Crafting Interpreters by Bob Nystrom (Free Online Book)", type: "Interactive", url: "https://craftinginterpreters.com/" },
      { title: "GeeksforGeeks Theory of Computation Full Syllabus", type: "Guide", url: "https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/" }
    ]
  },
  {
    id: "rapid-revision",
    name: "Rapid Revision & Technical Puzzles",
    code: "CSE-108",
    badge: "Interview Rounds",
    summary: "High-probability mathematical logic puzzles, probability brainteasers, quick formula cheatsheets, and rapid-fire technical trivia frequently asked by top product recruiters.",
    topics: [
      "Probability Brainteasers (Monty Hall Problem, Birthday Paradox, 100 Prisoners problem)",
      "Logic Puzzles: 25 Horses race, 8 Balls balance scale, Poisoned Wine & 10 Mice",
      "Crossing & Bridge Puzzles, Burning Ropes (Measuring 45 minutes)",
      "Bit manipulation tricks (XOR swaps, power of 2 check: (n & (n - 1)) == 0, count set bits)",
      "Time complexity masters formula: Master Theorem for Divide-and-Conquer recurrences",
      "Quick memory layout recap: Stack vs Heap allocation, memory alignment, padding"
    ],
    interviewFocus: [
      "Find the minimum number of races to determine top 3 fastest horses out of 25 with a 5-horse track",
      "Explain the Monty Hall problem: Why does switching doors increase probability from 1/3 to 2/3?",
      "How to measure 45 minutes using two ropes that each burn in 1 hour non-uniformly?",
      "Find the only non-repeating element when every other element appears three times",
      "Apply Master Theorem: T(n) = 2T(n/2) + O(n) and T(n) = 3T(n/4) + n log n"
    ],
    keyQuestions: [
      "What is the probability that two people in a room of 23 share the same birthday?",
      "How to determine the minimum number of drops to test a 2-egg break point in 100-floor building?",
      "Why does XOR have the properties: a ^ 0 = a, a ^ a = 0, and commutative/associative?",
      "Explain the difference between Big-O, Big-Omega, and Big-Theta notations."
    ],
    freeResources: [
      { title: "GeeksforGeeks Top 20 Puzzles for Software Interviews", type: "Interactive", url: "https://www.geeksforgeeks.org/top-20-puzzles-commonly-asked-during-sde-interviews/" },
      { title: "Brilliant: Logic and Mathematical Thinking", type: "Interactive", url: "https://brilliant.org/" },
      { title: "Tech Interview Handbook: Algorithmic Cheatsheet", type: "Guide", url: "https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/" },
      { title: "3Blue1Brown Mathematical Puzzles", type: "Video", url: "https://www.3blue1brown.com/" }
    ]
  },
  {
    id: "mock-month",
    name: "Full Core CSE + DSA + Aptitude Mock Interview Month",
    code: "CSE-109",
    badge: "Final Stage",
    summary: "Simulation month: 4 consecutive weekly simulated placement interview stages combining Online Assessment (OA), Technical Rounds, Core CS Deep-Dives, and Bar Raiser interviews.",
    topics: [
      "Week 1: Quantitative Aptitude, Logical Reasoning & Speed Coding OA Simulation",
      "Week 2: DSA Problem Solving Round (1 Medium + 1 Hard on LeetCode/Codeforces)",
      "Week 3: Core CS Machine Round (OS / DBMS / Networks / OOP Whiteboard Quiz)",
      "Week 4: Full System Design + Behavioral STAR Protocol + Bar Raiser Simulation",
      "Time management under high cognitive stress (45-minute countdown clock per question)",
      "Live thought-articulation (think out loud while coding), edge case discovery, and test-first mindset"
    ],
    interviewFocus: [
      "Communicate solution approach: Brute force first -> identify bottleneck -> propose optimized algorithm -> write clean code -> dry-run with test cases",
      "Handling interview hints: Listen carefully, acknowledge, and pivot without panicking",
      "Behavioral STAR answers: Situation, Task, Action, Result with quantifiable impact metrics",
      "Asking strong questions to the interviewer at the close of the conversation"
    ],
    keyQuestions: [
      "Tell me about a time you had a technical disagreement with a teammate. How did you resolve it?",
      "What is the most technically challenging project you have built, and what would you do differently today?",
      "Walk me through how you optimize an algorithm from O(N^2) to O(N log N) using divide-and-conquer.",
      "How do you test your code when no standard test harness is provided?"
    ],
    freeResources: [
      { title: "Pramp: Free Peer-to-Peer Mock Technical Interviews", type: "Interactive", url: "https://www.pramp.com/" },
      { title: "Interviewing.io Mock Technical Practice", type: "Guide", url: "https://interviewing.io/" },
      { title: "HackerRank Skills Verification Tests", type: "Interactive", url: "https://www.hackerrank.com/skills-verification" },
      { title: "STAR Method Behavioral Interview Guide", type: "Guide", url: "https://www.thebalancecareers.com/what-is-the-star-interview-response-technique-2061629" }
    ]
  }
];
