export interface Lesson {
  id: string;
  title: string;
  content: string;
  subTopics?: string[];
  codeExample?: string;
  language?: string;
  quizId?: string;
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const syllabus: Section[] = [
  {
    id: "course-overview",
    title: "Course Overview",
    lessons: [
      {
        id: "curr-overview",
        title: "1. Curriculum Overview",
        content: "I. Core Java Mastery\nII. Web-MVC with Spring\nIII. Microservices Architecture\nIV. Full Stack Integration",
        subTopics: ["Program Goals", "Learning Roadmap", "Capstone Projects"]
      },
      {
        id: "pre-setup",
        title: "2. Prerequisites & Setup",
        content: "I. Hardware Requirements\nII. Software Installation\nIII. Development Environment",
        subTopics: ["Hardware & OS", "Software Requirements", "IDE Configuration"]
      },
      {
        id: "install-guide-lesson",
        title: "3. Installation Guide",
        content: "Comprehensive step-by-step setup guide for Java and Spring Boot development environment.",
        subTopics: ["Java JDK 21", "IDE Setup", "MySQL Configuration"]
      }
    ]
  },
  {
    id: "core-java",
    title: "Core JAVA",
    lessons: [
      {
        id: "java-history",
        title: "1. Java History",
        content: "I. Introduction to Java\nII. Features of Java",
        subTopics: ["Introduction to Java", "Features of Java"]
      },
      {
        id: "java-basics-new",
        title: "2. Java Basics",
        content: "I. Data Types\nII. Statements\nIII. Operators\nIV. Control Statements\nV. Type Casting\nVI. Java Arrays\nVII. Command-line Arguments\nVIII. Packages",
        subTopics: ["Data Types", "Statements", "Operators", "Control Statements", "Type Casting", "Java Arrays", "Command-line Arguments", "Packages"]
      },
      {
        id: "java-oop-new",
        title: "3. Object-Oriented Programming (OOP) Concepts",
        content: "I. Data Abstraction\nII. Encapsulation\nIII. Polymorphism\nIV. Inheritance\nV. Class and Object\nVI. Abstract Classes\nVII. Interfaces\nVIII. Overloading and Overriding\nIX. Super and Super()",
        subTopics: ["Data Abstraction", "Encapsulation", "Polymorphism", "Inheritance", "Class and Object", "Abstract Classes", "Interfaces", "Overloading/Overriding", "Super and Super()"]
      },
      {
        id: "java-exception-new",
        title: "4. Exception Handling",
        content: "I. Exception Handling Fundamentals\nII. Exception Types\nIII. try-catch-finally Blocks\nIV. throw and throws Keywords\nV. Creating Custom Exceptions",
        subTopics: ["Fundamentals", "Exception Types", "try-catch-finally Blocks", "throw/throws Keywords", "Custom Exceptions"]
      },
      {
        id: "java-lang-new",
        title: "5. Default Package Features - java.lang",
        content: "I. The java.lang Package Overview\nII. The Object Class\nIII. Wrapper Classes\nIV. System Class\nV. Math Class\nVI. String & String Buffer",
        subTopics: ["The java.lang Overview", "The Object Class", "Wrapper Classes", "System Class", "Math Class", "String & String Buffer"]
      },
      {
        id: "java-io-new",
        title: "6. Java Streams - java.io",
        content: "I. Streams Overview\nII. Byte Streams vs. Character Streams\nIII. Input/Output Streams\nIV. Reading/Writing from/to Files – The File Streams",
        subTopics: ["Streams Overview", "Byte vs Character Streams", "Input/Output Streams", "File Streams"]
      },
      {
        id: "java-multi-new",
        title: "7. Multithreading",
        content: "I. Creating a Thread\nII. Thread Lifecycle\nIII. Multithreading Advantages\nIV. Multithreading Methods\nV. Runnable Interface\nVI. Thread Communication",
        subTopics: ["Creating a Thread", "Thread Lifecycle", "Multithreading Advantages", "Multithreading Methods", "Runnable Interface", "Thread Communication"]
      },
      {
        id: "java-util-new",
        title: "8. Java Collections - java.util",
        content: "I. Collections Overview\nII. Collection Interface\nIII. List, Set, Map Interfaces\nIV. List Implementations\nV. Set Implementations\nVI. Map Implementations\nVII. Date and Calendar Classes",
        subTopics: ["Collections Overview", "Collection Interface", "List, Set, Map Interfaces", "List Implementations", "Set Implementations", "Map Implementations", "Date/Calendar Classes"]
      },
      {
        id: "java-8-new",
        title: "9. Java 8 FEATURES",
        content: "I. Lambda Expressions\nII. Method References\nIII. Functional Interfaces\nIV. Stream API\nV. Stream Filter\nVI. Interface Changes\nVII. For Each Method\nVIII. Stream Collectors Class",
        subTopics: ["Lambda Expressions", "Method References", "Functional Interfaces", "Stream API", "Stream Filter", "Interface Changes", "For Each Method", "Stream Collectors"]
      }
    ]
  },
  {
    id: "java-intermediate-new",
    title: "JAVA Intermediate",
    lessons: [
      {
        id: "db-programming",
        title: "1. Database Programming",
        content: "i. JDBC Overview\nii. SQL Basics\niii. JDBC Programming Concepts\niv. Query Execution\nv. Scrollable Result Sets\nvi. Batch Updates\nvii. Stored Procedures and Functions\nviii. Transactions",
        subTopics: ["JDBC Overview", "SQL Basics", "JDBC Programming", "Query Execution", "Result Sets", "Batch Updates", "Procedures/Functions", "Transactions"]
      },
      {
        id: "web-apps-basics",
        title: "2. Getting Started with Web Applications",
        content: "i. Web App Life Cycle\nii. Web Modules\niii. Configuring Web Apps\niv. Database Access\nv. Jar, War, and Ear\nvi. Web Server vs App Server",
        subTopics: ["Web App Life Cycle", "Web Modules", "Configuring Web Apps", "Database Access", "Jar, War, Ear", "Web/App Servers"]
      },
      {
        id: "servlet-tech-new",
        title: "3. Java Servlet Technology",
        content: "i. Servlets Overview\nii. Servlet Life Cycle\niii. Sharing Information\niv. Service Methods\nvi. Filtering\nviii. Session Tracking",
        subTopics: ["Servlets Overview", "Servlet Life Cycle", "Sharing Information", "Service Methods", "Filtering", "Session Tracking"]
      },
      {
        id: "jsp-tech-new",
        title: "4. Java Server Pages Technology",
        content: "i. JSP Overview\nii. JSP Life Cycle\niii. Scripting Elements\niv. Action Tags\nv. Directives\nvi. Implicit Objects\nvii. Scope in JSP\nviii. JSP Exception Handling\nix. Expression Language (EL)",
        subTopics: ["JSP Overview", "JSP Life Cycle", "Scripting Elements", "Action Tags", "Directives", "Implicit Objects", "Scope in JSP", "JSP Exception Handling", "Expression Language (EL)"]
      }
    ]
  },
  {
    id: "java-advanced-new",
    title: "JAVA Advanced",
    lessons: [
      {
        id: "spring-intro-new",
        title: "1. Spring Introduction",
        content: "1.1 Spring Modules\n1.2 Dependency Injection\n1.3 Spring Containers\n1.4 Bean Wiring\n1.5 Bean Life Cycle",
        subTopics: ["Spring Modules", "Dependency Injection", "Spring Containers", "Bean Wiring", "Bean Life Cycle"]
      },
      {
        id: "spring-data-new",
        title: "2. Spring Data Access",
        content: "2.1 Using JDBC with Spring\n2.2 Working with DataSource\n2.3 Working with JdbcTemplate\n2.4 DML Operations on Data",
        subTopics: ["JDBC with Spring", "DataSource", "JdbcTemplate", "DML Operations"]
      },
      {
        id: "spring-mvc-new",
        title: "3. Spring Web-MVC",
        content: "3.1 Controllers\n3.2 Handling Web Requests\n3.3 Mapping Requests\n3.4 Form Submissions\n3.5 View Resolvers\n3.6 Validations",
        subTopics: ["Spring Web MVC", "Controllers", "Handling Web Requests", "Mapping Requests", "Form Submissions", "View Resolvers", "Validations"]
      },
      {
        id: "aop-new",
        title: "4. Aspect Oriented Programming",
        content: "4.1 Join Points\n4.2 Advice\n4.3 Advice Aspects\n4.4 AspectJ Syntax",
        subTopics: ["Join Points", "Advice", "Advice Aspects", "AspectJ Syntax"]
      },
      {
        id: "spring-tx-new",
        title: "5. Spring Transactions",
        content: "5.1 The Meaning of Transaction\n5.2 Transaction Attributes\n5.3 Spring Transaction Management Support",
        subTopics: ["Transaction Meaning", "Transaction Attributes", "Management Support"]
      },
      {
        id: "spring-orm-new",
        title: "6. Spring ORM",
        content: "6.1 Introduction to ORM\n6.2 Hibernate Integration",
        subTopics: ["Introduction to ORM", "Hibernate Integration"]
      }
    ]
  },
  {
    id: "frontend-new",
    title: "FRONTEND",
    lessons: [
      {
        id: "web-dev-fundamentals",
        title: "Web Development Fundamentals",
        content: "1. Internet\n2. WWW\n3. Web Browsers\n4. Web Servers\n5. Client–Server\n6. Static vs Dynamic",
        subTopics: ["Internet and WWW", "Web Browsers and Web Servers", "Client Server Architecture", "Static and Dynamic Websites"]
      },
      {
        id: "html-new",
        title: "HTML (HYPERTEXT MARKUP LANGUAGE)",
        content: "I. Introduction to HTML\nII. Basic HTML Tags\nIII. HTML Links\nIV. HTML Media\nV. HTML Lists\nVI. HTML Tables\nVII. HTML Forms\nVIII. Semantic HTML",
        subTopics: ["Introduction to HTML", "Basic HTML Tags", "HTML Links", "HTML Media", "HTML Lists", "HTML Tables", "HTML Forms", "Semantic HTML"]
      },
      {
        id: "css-new",
        title: "CSS (CASCADING STYLE SHEETS)",
        content: "I. CSS and Selectors\nII. CSS Box Model\nIII. CSS Positioning\nIV. CSS Flexbox\nV. CSS Grid\nVI. Responsive Web Design\nVII. CSS Variables\nVIII. CSS Animations",
        subTopics: ["CSS and Selectors", "CSS Box Model", "CSS Positioning", "CSS Flexbox", "CSS Grid", "Responsive Web Design", "CSS Variables", "CSS Animations"]
      },
      {
        id: "js-new",
        title: "JAVASCRIPT",
        content: "I. JS Variables\nII. JS Data Types\nIII. JS Operators\nIV. JS Control Flow\nV. JS Functions\nVI. JS Scopes\nVII. JS Arrays\nVIII. JS Objects\nIX. JS DOM\nX. JS Events\nXI. JS Promises\nXII. JS Async Await",
        subTopics: ["JS Variables", "JS Data Types", "JS Operators", "JS Control Flow", "JS Functions", "JS Scopes", "JS Arrays", "JS Objects", "JS DOM", "JS Events", "JS Promises", "JS Async Await"]
      }
    ]
  },
  {
    id: "sql-new",
    title: "SQL",
    lessons: [
      {
        id: "sql-modules-new",
        title: "SQL Complete Modules",
        content: "I. Database Overview\nII. Introduction\nIII. DDL and DML Commands\nIV. Operators\nV. Constraints\nVI. Joins\nVII. Subqueries\nVIII. Stored Procedures\nIX. Query Optimization",
        subTopics: ["Database Overview ", "Introduction ", "DDL and DML Commands ", "Operators ", "Constraints ", "Joins ", "Subqueries ", "Stored Procedures ", "Query Optimization "]
      }
    ]
  },
  {
    id: "mongodb-new",
    title: "MongoDB (Basic)",
    lessons: [
      {
        id: "mongodb-modules-new",
        title: "MongoDB Modules",
        content: "I. Basics and Introduction\nII. Structure\nIII. Installation Process\nIV. Commands\nV. CRUD Operations\nVI. Operators\nVII. Aggregation\nVIII. Indexing",
        subTopics: ["Basics and Introduction to Modules", "Structure ", "Installation Process", "Commands", "CRUD Operations", "Operators  ", "Aggregation", "Indexing"]
      }
    ]
  },
  {
    id: "spring-boot-pending",
    title: "Spring Boot",
    lessons: [
      {
        id: "sb-modules-new",
        title: "Spring Boot Path",
        content: "I. Auto Configuration\nII. Starters\nIII. Actuator\nIV. Data JPA\nV. Security\nVI. Microservices",
        subTopics: ["Auto Configuration", "Starters", "Actuator", "Data JPA", "Security", "Microservices"]
      }
    ]
  }
];
