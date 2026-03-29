import { data, line, object, s } from "motion/react-client";

export interface SubTopicContent {
  description?: string;
  keyPoints?: string[];
  code?: string;
  sections?: {
    heading: string;
    content?: string;
    points?: string[];
  }[];
}

export const subTopicData: Record<string, SubTopicContent> = {
  // Course Overview
  "Program Goals": {
    description: "The primary objective of this masterclass is to transform students into job-ready Java Full Stack Developers.",
    keyPoints: [
      "Master Core Java and Advance Concepts.",
      "Build scalable backends with Spring Boot and Microservices.",
      "Integrate modern frontend technologies like React and HTML5/CSS.",
      "Develop production-ready capstone projects."
    ]
  },
  "Learning Roadmap": {
    description: "A 3-month intensive journey from fundamental programming to advanced enterprise-ready development.",
    keyPoints: [
      "Month 1: Java Basics to Advanced OOP and Collections.",
      "Month 2: Database Design and Frontend Development.",
      "Month 3: Spring Framework, Microservices and Final Deployment."
    ]
  },
  "Capstone Projects": {
    description: "Real-world projects to build your professional portfolio.",
    keyPoints: [
      "Interactive E-learning Portal Design.",
      "Secure Banking Management System Backend.",
      "Social Media Platform API Architecture.",
      "Enterprise Resource Planning (ERP) Modules."
    ]
  },
  "Hardware & OS": {
    description: "Recommended system specifications for a smooth development experience.",
    keyPoints: [
      "CPU: Intel i5/AMD Ryzen 5 or higher.",
      "RAM: 8GB minimum (16GB recommended).",
      "OS: Windows 10/11, macOS, or any Linux distribution.",
      "SSD: 256GB minimum to ensure faster build times."
    ]
  },
  "Software Requirements": {
    description: "The essential tools required to be installed before starting the course.",
    keyPoints: [
      "Java JDK 21 (LTS Version).",
      "IDE: IntelliJ IDEA Community Edition or VS Code.",
      "MySQL Server 8.0+ / Workbench.",
      "Git (Version Control System)."
    ]
  },
  "IDE Configuration": {
    description: "Optimizing your coding environment for productivity.",
    keyPoints: [
      "Installing the Extension Pack for Java in VS Code.",
      "Setting up Lombok and Maven plugins in IntelliJ.",
      "Configuring Code Formatting and Linting rules.",
      "Integrating Git within the IDE."
    ]
  },

  // Installation Guide
  "Java JDK 21": {
    description: "Java Development Kit 21 is the foundational requirement for this course.",
    keyPoints: [
      "Download JDK 21 from Oracle or Adoptium.",
      "Ensure the installation directory is added to your PATH.",
      "Verify using 'java -version' in your command prompt.",
      "Check that JAVA_HOME environment variable is correctly set."
    ]
  },
  "IDE Setup": {
    description: "A good Integrated Development Environment makes coding much easier.",
    keyPoints: [
      "IntelliJ IDEA is highly recommended for backend development.",
      "VS Code is great for frontend and lightweight Java tasks.",
      "Enable 'Auto Import' and 'Save Actions' for better productivity.",
      "Set up the project SDK to point to your JDK 21 installation."
    ]
  },
  "MySQL Configuration": {
    description: "MySQL is our primary database for the Full Stack modules.",
    keyPoints: [
      "Install MySQL Community Server 8.0 or later.",
      "Set a strong 'root' password and keep it noted.",
      "Use MySQL Workbench for a graphical management interface.",
      "Create a test database to verify the connection."
    ]
  },

  // Core Java - Java History
  "Introduction to Java": {
    sections: [
      {
        heading: "Definition",
        content: "Java is a high level, class-based, object oriented programming language designed to have as few implementation dependencies as possible. It is widely used for building web, mobile, and enterprise applications."
      },
      {
        heading: "Introduction",
        content: "Java is a high-level, object-oriented programming language used to build web apps, mobile applications, and enterprise software systems. Java is a platform-independent language, which means code written in Java can run on any device that supports the Java Virtual Machine (JVM). Syntax and structure are similar to C-based languages like C++ and C#. Java was developed by Sun Microsystems in 1995. It is mostly used for building desktop applications, web applications, Android apps and enterprise systems. Java is a general-purpose programming language intended to let programmers Write Once, Run Anywhere (WORA). This means that compiled Java code can run on all platforms that support Java without the need to recompile."
      },
      {
        heading: "Why Java..?",
        points: [
          "Used to build Android apps, desktop and web apps, enterprise backend systems, and cloud-based software.",
          "In high demand with many job opportunities in software development.",
          "Has popular frameworks like Spring and Hibernate which makes it powerful for enterprise applications.",
          "Supports object-oriented programming for clean, maintainable and reusable code.",
          "Top companies like Amazon, Netflix, and LinkedIn use Java.",
          "Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)",
          "It is one of the most popular programming languages in the world",
          "It has a large demand in the current job market",
          "It is easy to learn and simple to use",
          "It is open-source and free",
          "It is secure, fast and powerful",
          "It has huge community support (tens of millions of developers)",
          "Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs",
          "As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa."
        ]
      }
    ],
    description: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    keyPoints: [
      "Created by James Gosling at Sun Microsystems in 1995.",
      "Initially named 'Oak', then 'Green', and finally 'Java'.",
      "Java follows the 'Write Once, Run Anywhere' (WORA) principle.",
      "Now owned and maintained by Oracle Corporation."
    ],
    code: "// The classic First Java Program\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
  },

  "Features of Java": {
    sections: [
      {
        heading: "Types of Java Features",
        content: "There are 16 major features that make Java a powerful and popular programming language:",
        points: [
          "Simple Syntax",
          "Object Oriented",
          "Platform Independent",
          "Interpreted",
          "Scalable",
          "Portable",
          "Secured and Robust",
          "Memory Management",
          "High Performance",
          "Multithreading",
          "Rich Standard Library",
          "Functional Programming Features",
          "Integration with Other Technologies",
          "Support for Mobile and Web Application",
          "Documentation and Community Support",
          "Architectural-Neutral"
        ]
      },
      {
        heading: "1. Simple Syntax",
        points: [
          "Java syntax is very straightforward and easy to learn. Java removes complex features like pointers and multiple inheritance, which makes it a good choice for beginners.",
        ]
      },
      {
        heading: "2. Object Oriented",
        points: ["Java is a pure object-oriented language. It supports core OOP concepts like: • Class • Objects • Inheritance • Encapsulation • Abstraction • Polymorphism",
        ]
      },
      {
        heading: "3. Platform Independent",
        points: ["Java is platform-independent because of Java Virtual Machine (JVM). • When we write Java code, it is first compiled by the compiler and then converted into bytecode (which is platform-independent). • This byte code can run on any platform which has JVM installed",
        ]
      },
      {
        heading: "4. Interpreted",
        points: [
          "Java code is not directly executed by the computer. It is first compiled into bytecode. This byte code is then understood by the JVM. This enables Java to run on any platform without rewriting code.",
        ]
      },
      {
        heading: "5. Scalable",
        points: [
          "Java can handle both small and large-scale applications. Java provides features like multithreading and distributed computing that allows developers to manage loads more easily."
        ]
      },
      {
        heading: "6. Portable",
        points: [
          "When we write a Java program, the code first gets converted into bytecode and this bytecode does not depend on any operating system or any specific computer. We can simply execute this bytecode on any platform with the help of JVM. Since JVMs are available on most devices, we can run the same Java program on different platforms"
        ]
      },
      {
        heading: "7. Secured and Robust",
        points: [
          "Java is a reliable programming language because it can catch mistakes early while writing the code and also keeps checking for errors when the program is running. It also has a feature called exception handling that helps deal with unexpected problems smoothly."
        ]
      },
      {
        heading: "8. Memory Management",
        points: [
          "• Memory management in Java is automatically handled by the Java Virtual Machine (JVM). • Java garbage collector reclaims memory from objects that are no longer needed. • Memory for objects are allocated in the heap • Method calls and local variables are stored in the stack."
        ]
      },

      {
        heading: "9. High Performance",
        points: [
          "Java is faster than old interpreted languages. Java program is first converted into bytecode which is faster than interpreted code. It is slower than fully compiled languages like C or C++ because of interpretation and JIT compilation process. Java performance is improved with the help of Just-In-Time (JIT) compilation, which makes it faster than many interpreted languages but not as fast as fully compiled languages."
        ]
      },
      {
        heading: "10. Multithreading",
        points: [
          "• Multithreading in Java allows multiple threads to run at the same time. • It improves CPU utilization and enhancing performance in applications that require concurrent task execution. • Multithreading is especially important for interactive and high-performance applications, such as games and real-time systems. • Java provides built-in support for managing multiple threads. A thread is known as the smallest unit of execution within a process."
        ]
      },
      {
        heading: "11. Rich Standard Library",
        points: [
          "Java provides various pre-built tools and libraries which is known as Java API. Java API is used to cover tasks like file handling, networking, database connectivity (JDBC), security, etc. With the help of these libraries developers save a lot of time and get ready to use solutions and can also build powerful applications."
        ]
      },
      {
        heading: "12. Functional Programming Features",
        points: [
          "Since Java 8, the language has introduced functional programming features such as: • Lambda expressions let us write small blocks of code in a very easy way without creating full methods. • Stream API allows data to be processed easily. Instead of writing long loops we can just filter, change, or combine data in a few lines. • Functional interfaces are interfaces that contain only one method. They work perfectly with lambda expressions and help us write flexible and reusable code."
        ]
      },
      {
        heading: "13. Integration with Other Technologies",
        points: [
          "Java can easily work with many languages and tools as well. For example, Java can connect with C and C++ with the help of Java Native Interface (JNI). Java is very popular for building websites and web services like RESTful & SOAP. In Java we can use JDBC for database connectivity and Java is the main language for Android development. As we can see, Java works so well with so many different technologies, which is the reason developers prefer Java more to create scalable and powerful applications."
        ]
      },
      {
        heading: "14. Support for Mobile and Web Application",
        points: [
          "• Java offers support for both web and mobile applications. • For web development: Java offers technologies like JSP and Servlets, along with frameworks like Spring and Spring Boot, which makes it easier to build web applications. • For mobile development: Java is the main language for Android app development. The Android SDK uses a special version of Java and its various tools to build mobile apps for Android devices."
        ]
      },
      {
        heading: "15. Documentation and Community Support",
        points: [
          "Java provides documentation which includes guides, API references, and tutorials for easy learning. Java has a large and active global community contributing to open-source projects and resources. This community support helps developers solve problems and stay updated with new advancements."
        ]
      },
      {
        heading: "16. Architectural-Neutral",
        points: [
          "Java byte code can be executed on any kind of processor. JRE automatically handles the code execution on different types of processors."
        ]
      }
    ],


    description: "Java's popularity stems from several key features that make it robust and easy to use.",
    keyPoints: [
      "Simple: Designed to be easy to learn and use.",
      "Object-Oriented: Everything in Java is an Object.",
      "Robust: Strong memory management and exception handling.",
      "Secure: Run within a Virtual Machine (JVM) buffer.",
      "Platform Independent: Bytecode runs on any OS with a JVM."
    ]
  },

  // Core Java - Java Basics
  "Data Types": {
    description: "Data types specify the type of data that a variable can hold. They define the operations that can be performed on the data and the way it is stored in memory.",
    keyPoints: [
      "Java has two main categories of data types: Primitive and Non-Primitive.",
      "Primitive data types include byte, short, int, long, float, double, boolean and char.",
      "Non-Primitive data types include String, Arrays, Classes, Interfaces."
    ],
    sections: [
      {
        heading: "Primitive Data Types",
        content: "Primitive data types  includes byte, short, int, long, float, double, boolean and char",

      },
      {
        heading: "Java has 8 primitive data types",
        points: [
          "byte       :       Stores whole numbers from -128 to 127",
          "short      :      Stores whole numbers from -32,768 to 32,767",
          "int        :      Stores whole numbers from -2,147,483,648 to 2,147,483,647",
          "long       :      Stores very large whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807",
          "float      :      Stores decimal (fractional) numbers with 6 to 7 digits precision",
          "double     :      Stores decimal (fractional) numbers with 15 to 16 digits precision",
          "boolean    :      Stores only true or false values",
          "char       :      Stores a single character like 'A', 'b', '1' or ASCII values"
        ]
      },
      {
        heading: "Key Points about Data Types",
        points: [
          "byte, short, int, long →   Used for integers (whole numbers)",
          "float, double          →   Used for decimal numbers",
          "boolean                →   Used for conditions (true/false)",
          "char                   →   Used for single characters"
        ]
      },
      {
        heading: "Non-Primitive Data Types",
        content: "Non-primitive data types are called reference types because they refer to objects. They include:",
      },
      {
        heading: "Types of Non-Primitive Data Types",
        points: [
          "Classes     : Blueprints used to create objects; they define variables and methods.",
          "Objects     : Instances of classes representing real-world entities with state and behavior.",
          "Strings     : Immutable objects that store sequences of characters.",
          "Arrays      : Fixed-size objects that hold multiple values of the same type.",
          "Interfaces  : Define a set of methods that classes must implement (contract).",
          "Enums       : Special types used to represent a fixed set of named constants."
        ]
      },
      {
        heading: "Differences between Primitive and Non-Primitive Data Types",
        points: [
          "Primitive types in Java are predefined and built into the language, while non-primitive types are created by the programmer (except for String).",
          "Non-primitive types can be used to call methods to perform certain operations, whereas primitive types cannot.",
          "Primitive types start with a lowercase letter (like int), while non-primitive types typically starts with an uppercase letter (like String).",
          "Primitive types always hold a value, whereas non-primitive types can be null.",
          "Examples of non-primitive types are Strings, Arrays, Classes etc."
        ]
      }

    ],
  },
  "Statements": {
    description: "Statements are instructions that perform some action. In Java, most statements end with a semicolon(;)",
    sections: [
      {
        heading: "Types of Statements",
        points: [
          " A computer program is a list of \"instructions\" to be \"executed\" by a computer.",
          "In a programming language, these programming instructions are called statements",
          "Types of statements in Java include: ",
          "Expression Statements,",
          "Declaration Statements,",
          "Control Flow Statements,",
          "Block Statements",
          "Empty Statements",
          "Labeled Statements",
          "Assert Statements.",
        ]
      },
      {
        heading: "Expression Statements",
        content: "Expression statements in Java are used to perform actions such as calculations, assignments, method calls, or object creation. These statements are formed when an expression is followed by a semicolon (;). Not all expressions are valid statements—only those that produce a side effect, like modifying a variable or calling a method, are considered expression statements. They play a major role in executing operations within a program and directly impact the program’s state.",
      },
      {
        heading: "key points",
        points: [
          "Perform operations or actions",
          "Always end with a semicolon (;)",
          "Include assignments, increments, method calls, object creation",
          "Must produce a side effect"
        ]
      },
      {
        heading: "Declaration Statements",
        content: "Declaration statements are used to declare variables by specifying their data type and name. They inform the compiler to allocate memory for storing data. Declaration can be done with or without initialization. These statements are fundamental because variables must be declared before they are used in a program. They can represent local variables, instance variables, or static variables.",
      },
      {
        heading: "Key Points",
        points: [
          "Define variables and their data types",
          "Allocate memory for storage",
          "Can include initialization",
          "Follow naming rules and conventions"
        ]
      },
      {
        heading: "Control Flow Statements",
        content: "Control flow statements determine the order in which instructions are executed in a program. Normally, Java executes code sequentially, but control flow statements allow branching, looping, and jumping to different parts of the program. They are essential for implementing logic, decision-making, and repetition."
      },
      {
        heading: "Key Points",
        points: [
          "Control execution flow of the program",
          "Include decision-making, looping, and branching",
          "Help build logical structures and algorithms"
        ]
      },
      {
        heading: "Types",
        points: [
          "Decision: if, if-else, switch",
          "Looping: for, while, do-while",
          "Jump: break, continue, return"
        ]
      },
      {
        heading: "Block Statements",
        content: "A block statement is a group of multiple statements enclosed within curly braces {} and treated as a single unit. Blocks are commonly used in loops, conditionals, and methods. They help in organizing code and defining the scope of variables, meaning variables declared inside a block cannot be accessed outside it.",
      },
      {
        heading: "Key Points",
        points: [
          "Group multiple statements together",
          "Defined using { }",
          "Creates a new scope for variables",
          "Used in loops, conditions, and methods"
        ]
      },
      {
        heading: "Empty Statements",
        content: "An empty statement in Java is a statement that does nothing and is represented by just a semicolon (;). Although it performs no operation, it is syntactically valid. Empty statements are sometimes used intentionally in loops but can also occur accidentally, leading to logical errors in programs.",
      },
      {
        heading: "Key Points",
        points: [
          " Represented by a single semicolon (;)",
          "Performs no action",
          "Can be used intentionally or mistakenly",
          "May cause bugs if used incorrectly"
        ]
      },
      {
        heading: "Labeled Statements",
        content: "A labeled statement is a statement that is preceded by a label (an identifier) followed by a colon (:). These are mainly used with break and continue statements in nested loops to control the flow more precisely. Labeled statements make it easier to exit or skip specific loops when multiple loops are involved.",
      },
      {
        heading: "Key Points",
        points: [
          "Defined using a label followed by :",
          "Used with break and continue",
          "Helpful in nested loops",
          "Improves control over program flow"
        ]
      },
      {
        heading: "Assert Statements",
        content: "Assert statements are used for debugging purposes to test assumptions in a program. They check whether a condition is true, and if it is false, an AssertionError is thrown. Assertions are mainly used during development to identify logical errors and are usually disabled in production environments.",
      },
      {
        heading: "Key Points",
        points: [
          "Used for debugging and testing conditions",
          "Throws AssertionError if condition is false",
          "Can include an error message",
          "Disabled by default"
        ]
      }
    ],
    code: "if (age >= 18) {\n  System.out.println(\"Authorized\");\n} else {\n  System.out.println(\"Denied\");\n}\n\nfor (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}"

  },
  "Operators": {
    description: "Operators are symbols that perform operations on variables and values.",
    keyPoints: [
      "Arithmetic: +, -, *, /, %, ++, --",
      "Assignment: =, +=, -=, *=, /=",
      "Comparison: ==, !=, >, <, >=, <=",
      "Logical: &&, ||, !"
    ],
    sections: [
      {
        heading: " What are Operators?",
        content: "In Java, operators are special symbols that are used to perform operations on variables and values (called operands). These operations can be mathematical, logical, relational, or even bit-level manipulations.In simple terms, operators help us process data and make decisions in a program.",
      },
      {
        heading: "Types of Operators",
        points: [
          "Arithmetic Operators: Used for basic mathematical operations like addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and increment/decrement (++, --).",
          "Assignment Operators: Used to assign values to variables, such as =, +=, -=, *=, /=.",
          "Comparison Operators: Used to compare two values and return a boolean result (true or false). Examples include == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to).",
          "Logical Operators: Used to combine multiple boolean expressions. The main logical operators are && (logical AND), || (logical OR), and ! (logical NOT).",
          "relational operators: Used to compare two values and return a boolean result (true or false). Examples include == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to).",
          "Bitwise Operators: Used to perform bit-level operations on integer types. Examples include &, |, ^, ~, <<, >>, >>>.",
          "unary operators: Used to perform operations on a single operand. Examples include + (positive), - (negative), ++ (increment), -- (decrement), ! (logical NOT).",
          "ternary operator: A shorthand for an if-else statement. It takes three operands and is used to evaluate a boolean expression and return one of two values. The syntax is: condition ? value_if_true : value_if_false.",
          "instanceof operator: Used to test whether an object is an instance of a specific class or implements a specific interface. The syntax is: object instanceof ClassName."
        ]
      },
      {
        heading: "Arithmetic Operators",
        content: "Arithmetic operators in Java are used to perform basic mathematical operations on numeric data types such as int, float, double, etc. These operators are fundamental in programming as they help in calculations, data processing, and algorithm implementation. Java follows standard mathematical precedence rules (BODMAS), meaning multiplication and division are performed before addition and subtraction unless parentheses are used.",
      },
      {
        heading: "Key Points",
        content: "One important point is that division between integers results in an integer (fraction is truncated), while using floating-point numbers gives precise results.",
        points: [
          "Perform mathematical calculations",
          "Follow operator precedence (BODMAS)",
          "Integer division removes decimal part",
          "Modulus % gives remainder",
          "Operators: +, -, *, /, %"
        ]
      },
      {
        heading: "Relational (Comparison) Operators",
        content: "Relational operators are used to compare two values or expressions. The result of these operations is always a boolean value (true or false). These operators are mainly used in decision-making constructs such as if, while, and for loops. They help in checking conditions like equality, inequality, greater than, or less than. Java has six relational operators: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to). When using these operators, it’s important to ensure that the data types of the operands are compatible for comparison.",
      },
      {
        heading: "Key Points",
        content: "These operators do not modify values; they only compare them.",
        points: [
          "Compare two operands",
          "Return boolean values",
          "Used in conditions and loops",
          "Operators: ==, !=, >, <, >=, <="
        ]
      },
      {
        heading: "Logical Operators",
        content: "Logical operators are used to combine multiple conditions or expressions. They operate on boolean values and are mainly used in control flow statements. Java supports short-circuit evaluation, meaning if the result is determined by the first condition, the second condition may not be evaluated.",
      },
      {
        heading: "Key Points",
        content: "For example, in &&, if the first condition is false, the second is not checked.",
        points: [
          "Combine multiple conditions",
          "Work only with boolean values",
          "Support short-circuit evaluation",
          "Operators: && (AND), || (OR), ! (NOT)"
        ]
      },
      {
        heading: "Assignment Operators",
        content: "Assignment operators are used to assign values to variables. Along with the basic assignment operator (=), Java provides compound assignment operators that combine arithmetic operations with assignment. These help in writing concise and readable code.",
      },
      {
        heading: "Key Points",
        content: "They automatically perform type casting in some cases.",
        points: [
          "Assign values to variables",
          "Provide shorthand operations",
          "Improve readability and reduce code length",
          "Operators: =, +=, -=, *=, /=, %="
        ]
      },
      {
        heading: "Unary Operator",
        content: "Unary operators operate on a single operand. They are commonly used for incrementing or decrementing values and for logical negation. These operators can be used in prefix (before variable) or postfix (after variable) forms, and the behavior differs slightly.",
      },
      {
        heading: "Key Points",
        content: "Prefix changes value first, postfix uses value first then changes.",
        points: [
          "Work on a single operand",
          "Used for increment/decrement and negation",
          "Prefix and postfix behavior differ",
          "Operators: ++, --, +, -, !"
        ]
      },
      {
        heading: "Ternary Operator",
        content: "The ternary operator is a compact alternative to the if-else statement. It evaluates a condition and returns one of two values based on whether the condition is true or false. It is useful for simple decision-making.",
      },
      {
        heading: "Key Points",
        content: "Best used for short conditions, not complex logic.",
        points: [
          "Short form of if-else",
          "Improves code readability",
          "Returns a value"
        ]
      },
      {
        heading: "Bitwise Operators",
        content: "Bitwise operators perform operations directly on binary representations (bits) of numbers. These are commonly used in system-level programming, cryptography, and performance optimization. Each bit of the operands is compared and manipulated.",
      },
      {
        heading: "Key Points",
        content: "Example: 5 = 101, 3 = 011 → AND = 001 (1)",
        points: [
          "Operate at bit level",
          "Faster than arithmetic operations",
          "Used in low-level programming",
          "Operators: &, |, ^, ~, <<, >>"
        ]
      },
      {
        heading: "Instanceof Operator",
        content: "The instanceof operator is used to check whether an object is an instance of a specific class or subclass. It is mainly used in object-oriented programming for type checking.",
      },
      {
        heading: "Key Points",
        content: "Very useful in inheritance and polymorphism.",
        points: [
          "Used for type checking",
          "Works with objects",
          "Returns boolean value"
        ]
      }
    ],
    code: "int x = 10 + 5;\nboolean isEqual = (x == 15);\nboolean result = (x > 10 && x < 20);"
  },
  "Control Statements": {
    description: "Control statements allow the program to make decisions and repeat blocks of code.",
    keyPoints: [
      "If-Else: Executes code based on a condition.",
      "Switch: Selects one of many code blocks to execute.",
      "Loops: for, while, do-while for repetitive tasks.",
      "Break and Continue: Control the flow inside loops."
    ],
    sections: [
      {
        heading: "What are Control Statements?",
        content: "Control statements in Java are used to control the flow of execution of a program. Normally, Java executes code line by line (top to bottom), but control statements allow the program to make decisions, repeat tasks, and jump between statements. They are very important because they help in building logic and making programs dynamic instead of static.",
      },
      {
        heading: "Types of Control Statements",
        points: [
          "Decision-Making Statements: if, if-else, switch",
          "Looping Statements: for, while, do-while",
          "Branching Statements: break, continue, return"
        ]
      },
      {
        heading: "Decision-Making Statements",
        content: "There are 4 Statements",
        points: [
          "if Statement",
          "if-else Statement",
          "if-else-if Ladder",
          "switch Statement"
        ]
      },
      {
        heading: "if statement",
        content: " The if statement is the most basic decision-making statement in Java. It is used to execute a block of code only when a given condition is true. If the condition evaluates to false, the block of code inside the if statement is skipped. This helps the program make decisions based on conditions such as user input, values, or logical expressions. It is mainly used when there is only one condition to check.",
      },
      {
        heading: "Key Points",
        points: [
          "Executes code only if condition is true",
          "Condition must return boolean (true or false)",
          "Simplest decision-making statement"
        ]
      },
      {
        heading: "if-else statement",
        content: "The if-else statement is used when there are two possible outcomes. If the condition is true, one block of code executes; if it is false, another block executes. This ensures that one of the two blocks will always run. It is useful when you want to handle both success and failure conditions or true/false scenarios.",
      },
      {
        heading: "Key Points",
        points: [
          "Executes one block if true, another if false",
          "Guarantees execution of one block",
          "Used for binary decisions"
        ]
      },
      {
        heading: "if-else-if Ladder",
        content: "The else-if ladder is used when multiple conditions need to be checked in sequence. Java evaluates each condition from top to bottom, and as soon as one condition becomes true, the corresponding block executes and the rest are skipped. If none of the conditions are true, the else block (if present) is executed. This is useful when dealing with multiple ranges or categories like grading systems.",
      },
      {
        heading: "Key Points",
        points: [
          "Used for multiple conditions",
          "Executes only the first true condition",
          "Improves readability compared to multiple if statements"
        ]
      },
      {
        heading: "switch statement",
        content: "The switch statement is used to select one block of code from multiple options based on a variable’s value. It is an alternative to multiple if-else statements when dealing with fixed values like days, menu options, or categories. The break statement is used to stop execution after a case is matched. If no case matches, the default block is executed.",
      },
      {
        heading: "Key Points",
        points: [
          "Used for multiple fixed choices",
          "Improves readability over if-else ladder",
          "Uses break to prevent fall-through",
          "Includes optional default case"
        ]
      },
      {
        heading: "Looping Statements (or) Iteration Statements",
        content: "Looping statements are used to repeat a block of code multiple times until a condition is satisfied. They are very useful when performing repetitive tasks like printing numbers, processing data, etc.",
      },
      {
        heading: "Types of Loops",
        points: [
          "for Loop: Used when the number of iterations is known.",
          "while Loop: Used when the number of iterations is unknown & executes as long as the condition is true.",
          "do-while Loop: Executes at least once, even if the condition is false."
        ]
      },
      {
        heading: "for Loop",
        content: "The for loop is used to execute a block of code repeatedly when the number of iterations is known in advance. It consists of three parts: initialization, condition, and update. The loop continues until the condition becomes false. It is commonly used for counting, iterating through arrays, and repeating tasks a fixed number of times.",
      },
      {
        heading: "Key Points",
        points: [
          "Used when number of iterations is known",
          "Compact and easy to read",
          "Contains initialization, condition, and increment"
        ]
      },
      {
        heading: "while Loop",
        content: "The while loop is used when the number of iterations is not known beforehand. It executes a block of code as long as the condition is true. The condition is checked before each iteration, so if the condition is false initially, the loop may not execute at all. It is commonly used for condition-based repetition.",
      },
      {
        heading: "Key Points",
        points: [
          "Used when iterations are unknown",
          "Condition checked before execution",
          "May execute zero times"
        ]
      },
      {
        heading: "do-while Loop",
        content: "The do-while loop is similar to the while loop, but it guarantees that the loop body executes at least once. This is because the condition is checked after the execution of the loop body. It is useful when the code must run at least once regardless of the condition.",
      },
      {
        heading: "Key Points",
        points: [
          "Executes at least once",
          "Condition checked after execution",
          "Used when first execution is mandatory"
        ]
      },
      {
        heading: "Branching Statements (or) Jump Statements",
        content: "Jump statements are used to transfer control from one part of the program to another. They are mainly used inside loops and methods.",
      },
      {
        heading: "Types of Branching Statements",
        points: [
          "break: Used to exit a loop or switch immediately.",
          "continue: Skips the current iteration and moves to the next.",
          "return: Used to exit from a method and optionally return a value."
        ]
      },
      {
        heading: "break Statement",
        content: "The break statement is used to immediately terminate a loop or switch statement. When break is encountered, control jumps to the next statement after the loop or switch. It is useful when you want to stop execution early based on a condition.",
      },
      {
        heading: "Key Points",
        points: [
          "Terminates loop or switch",
          "Transfers control outside the block",
          "Used to avoid unnecessary iterations"
        ]
      },
      {
        heading: "continue Statement",
        content: "The continue statement is used to skip the current iteration of a loop and move to the next iteration. It does not stop the loop completely like break, but only skips one cycle. It is useful when certain conditions should be ignored during iteration.",
      },
      {
        heading: "Key Points",
        points: [
          "Skips current iteration",
          "Continues with next loop cycle",
          "Used for filtering conditions"
        ]
      },
      {
        heading: "return Statement",
        content: "The return statement is used to exit from a method and optionally return a value to the caller. Once a return statement is executed, the method stops executing immediately. It is essential in methods that produce results.",
      },
      {
        heading: "Key Points",
        points: [
          "Exits a method",
          "Can return a value",
          "Stops execution immediately"
        ]
      }

    ],
    code: "if (age >= 18) {\n  System.out.println(\"Authorized\");\n} else {\n  System.out.println(\"Denied\");\n}\n\nfor (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}"

  },

  "Type Casting": {
    description: "Type casting is the process of converting a value from one data type to another.",
    keyPoints: [
      "Widening Casting (automatically): converting a smaller type to a larger type size (e.g., int to double).",
      "Narrowing Casting (manually): converting a larger type to a smaller size type (e.g., double to int).",
      "Data loss can occur during narrowing casting if the value exceeds the smaller type's limit."
    ],
    sections: [
      {
        heading: "What is Type Casting?",
        content: "Type casting in Java is the process of converting one data type into another data type. It is mainly used when you want to store a value of one type into a variable of another type. Since Java is a strongly typed language, it does not allow incompatible data types to be mixed directly, so type casting is required to avoid errors and ensure proper conversion.",
      },
      {
        heading: "Types of Type Casting",
        points: [
          "Widening Casting (Implicit Casting): converting a smaller type to a larger type size (e.g., int to double).",
          "Narrowing Casting (Explicit Casting): converting a larger type to a smaller size type (e.g., double to int).",
          "Type Promotion in Expressions: When different data types are used in an expression, Java promotes them to the largest type to prevent data loss.",
          "Casting Between Compatible Types: Some types can be cast to each other if they are compatible, such as char to int (ASCII values) or int to char.",
          "Casting in Object-Oriented Programming: In OOP, casting is also used to convert between classes in an inheritance hierarchy (upcasting and downcasting).",
        ]
      },
      {
        heading: "Widening Casting (Implicit Casting)",
        content: "Widening casting is the process of converting a smaller data type into a larger data type automatically. This type of casting is done by Java itself, so it is also called implicit casting. It is safe because there is no loss of data when converting from a smaller to a larger type.",
      },
      {
        heading: "Key Points",
        content: "Example flow:int → long → float → double   When a smaller type is assigned to a larger type, Java automatically converts it because the larger type can hold all values of the smaller type.",
        points: [
          "Done automatically by Java",
          "No data loss",
          "Safe conversion",
          "Smaller → Larger type"
        ]
      },
      {
        heading: "Narrowing Casting (Explicit Casting)",
        content: "Narrowing casting is the process of converting a larger data type into a smaller data type manually. This is also called explicit casting because the programmer must specify the conversion. This type of casting is risky because it may lead to data loss or precision loss.",
      },
      {
        heading: "Key Points",
        content: "Example flow: double → float → long → int   Since a smaller type cannot always hold the full value of a larger type, Java requires explicit conversion using parentheses.",
        points: [
          "Done manually by programmer",
          "May cause data loss",
          "Larger → Smaller type",
          "Requires casting syntax (type)"
        ]
      },
      {
        heading: "Type Promotion in Expressions",
        content: "Type promotion occurs when Java automatically converts smaller data types into larger types during expressions or operations. This ensures that calculations are performed accurately.",
      },
      {
        heading: "Key Points",
        content: "When different data types are used in an expression, Java converts them into a common larger type before performing the operation.",
        points: [
          "Happens automatically in expressions",
          "Prevents data loss in calculations",
          "Smaller types promoted to larger types"
        ]
      },
      {
        heading: "Casting Between Compatible Types",
        content: "Java allows type casting only between compatible data types. For example, numeric types can be converted among each other, but incompatible types like int and boolean cannot be cast.",
      },
      {
        heading: "Key Points",
        content: "If types are not compatible, Java will throw a compile-time error.",
        points: [
          "Only compatible types can be cast",
          "Invalid casting leads to errors",
          "Numeric types are compatible"
        ]
      },
      {
        heading: "Casting in Object-Oriented Programming",
        content: "In Java, type casting is also used with objects, especially in inheritance. This is known as upcasting and downcasting.",
        points: [
          "Upcasting: Converting a subclass type to a superclass type (safe and implicit).",
          "Downcasting: Converting a superclass type to a subclass type (risky and requires explicit casting).",
          "Downcasting can lead to ClassCastException if the object being cast is not an instance of the target class."
        ]
      },
      {
        heading: "Key Points",
        content: "Upcasting is safe and does not require explicit syntax, while downcasting requires explicit casting and can lead to runtime errors if not done carefully.",
        points: [
          "Used in inheritance",
          "Upcasting is automatic",
          "Downcasting is manual"
        ]
      }
    ],
    code: "int num = 10;\ndouble doubleNum = num; // Automatic casting: int to double\n\ndouble pi = 3.14;\nint approxPi = (int) pi; // Manual casting: double to int"
  },
  "Java Arrays": {
    description: "An array is a container object that holds a fixed number of values of a single type.",
    keyPoints: [
      "Arrays are 0-indexed, meaning the first element is at index 0.",
      "The length of an array is established when the array is created and is fixed.",
      "Arrays can store primitive data types or objects.",
      "Multi-dimensional arrays (like matrices) are supported."
    ],
    sections: [
      {
        heading: "What are Java Arrays?",
        content: "An array in Java is a data structure used to store multiple values of the same data type in a single variable. Instead of creating separate variables for each value, arrays allow you to store all values together and access them using an index. Each element in the array is stored in a continuous memory location, and indexing starts from 0.",
        points: [
          "Array = One variable → Multiple values",
        ]
      },
      {
        heading: "Declaring of Arrays",
        content: "Array declaration is the process of defining the array with a specific data type. It tells the compiler what type of data the array will store.",
        points: [
          "syntax: dataType[] arrayName; or dataType arrayName[];",
          "Example: int[] numbers; or int numbers[];",
          "Here, dataType represents the type of elements (like int, float, etc.), and arrayName is the name of the array.",
        ]
      },
      {
        heading: "Key points",
        points: [
          "Only same data type elements allowed",
          "Does not allocate memory yet",
          "Just declares the array reference",
        ]
      },
      {
        heading: "Initializing Arrays",
        content: "Initialization means assigning memory and values to the array. It can be done in two ways: with size or with values.",
        points: [
          "Syntax with size: arrayName = new dataType[size];",
          "Example: numbers = new int[5]; ",
          "Syntax with values: arrayName = {value1, value2, ...};",
          "Example: int[] numbers = {10, 20, 30, 40}; ",
          "When we initialize an array, memory is allocated, and elements can be stored inside it.",
        ]
      },
      {
        heading: "Key points",
        points: [
          "Allocates memory",
          "Size must be fixed",
          "Can initialize directly with values"
        ]
      },
      {
        heading: "Accessing Array Elements",
        content: "Array elements are accessed using their index number. The index always starts from 0 and goes up to size - 1.",
        points: [
          "syntax:  arrayName[index]",
          "Example: numbers[0] will access the first element of the array.",
          "Each element can be accessed, modified, or printed using its index."
        ]
      },
      {
        heading: "Key Points:",
        points: [
          "Index starts from 0",
          "Access using square brackets []",
          "Invalid index causes error"
        ]
      },
      {
        heading: "Types of Arrays",
        content: "Java supports different types of arrays based on their dimensions.",
        points: [
          "One-dimensional Arrays: A simple list of elements (e.g., int[] numbers).",
          "Two-dimensional Arrays: An array of arrays, like a matrix (e.g., int[][] matrix).",
          "Multi-dimensional Arrays: Arrays with more than two dimensions (e.g., int[][][] cube)."
        ]
      },
      {
        heading: " single-dimensional array",
        content: "A single-dimensional array is the simplest type of array in Java. It is used to store elements in a linear format (one row). All elements are stored sequentially, and each element can be accessed using a single index. This type of array is mainly used when data is arranged in a list-like structure, such as marks of students, prices, or numbers.",
        points: [
          "Single-Dimensional Array = One row of data",
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Stores elements in a single line",
          "Uses only one index",
          "Easy to declare and use",
          "Most commonly used array type"
        ]
      },
      {
        heading: "Two-dimensional array",
        content: "A two-dimensional array is used to store data in the form of rows and columns (table format). It is also called a matrix. Each element is accessed using two indices: one for the row and one for the column. This type of array is useful when working with tabular data such as marksheets, matrices, or grids.",
        points: [
          "2D Array = Table (rows × columns)",
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Stores data in rows and columns",
          "Uses two indices [row][column]",
          "Represents matrix or table structure",
          "Useful for structured data"
        ]
      },
      {
        heading: "Multi-dimensional array",
        content: "A multi-dimensional array is an extension of 2D arrays where data is stored in more than two dimensions. These arrays can have three or more dimensions and are used in complex applications like scientific calculations, 3D graphics, and simulations.",
        points: [
          "Multi-Dimensional Array = Array inside array inside array"
        ]
      },
      {
        heading: "Key Points",
        points: [
          "More than two dimensions",
          "Uses multiple indices",
          "Used in advanced applications",
          "Complex structure"
        ]
      },
      {
        heading: "Jagged Array (Irregular Array)",
        content: "A jagged array is a special type of multi-dimensional array where each row can have a different number of columns. Unlike normal 2D arrays, it does not require all rows to have the same length. This provides flexibility in storing uneven data.",
        points: [
          "Jagged Array = Array of arrays with different lengths"
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Rows can have different lengths",
          "More flexible than normal 2D arrays",
          "Memory efficient for uneven data",
          "Created using array of arrays"
        ]
      },
      {
        heading: "Anonymous Array",
        content: "An anonymous array is an array that is created without assigning it to a variable. It is mainly used when an array is required temporarily, such as passing it directly to a method.",
        points: [
          "Anonymous Array = Array without name",
        ]
      },
      {
        heading: "Key Points",
        points: [
          "No reference variable",
          "Used for one-time usage",
          "Commonly used in method calls",
          "Saves memory"
        ]
      },
      {
        heading: "Looping Through Arrays",
        content: "Loops are used to access all elements of an array efficiently. Instead of accessing each index manually, loops help in iterating through all elements.",
        points: [
          "for Loop: Commonly used for iterating through arrays with a known size.",
          "Enhanced for Loop (for-each): Simplifies iteration without needing an index.",
          "while Loop: Can be used when the number of iterations is not known."
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Used to iterate arrays",
          "length gives size",
          "For-each is simpler"
        ]
      },
      {
        heading: "Array Properties",
        content: "Arrays in Java have some important characteristics that define their behavior.",
        points: [
          "Fixed size (cannot change after creation)",
          "Stores same data type elements",
          "Stored in continuous memory",
          "Has built-in property length",
          "Default values (0 for int, null for objects)"
        ]

      },
      {
        heading: "Advantages of Arrays",
        content: "Arrays provide several benefits that make them a fundamental data structure in programming.",
        points: [
          "Easy to store multiple values",
          "Efficient memory usage",
          "Fast access using index",
          "Simplifies code"
        ]
      },
      {
        heading: "Limitations of Arrays",
        content: "Despite advantages, arrays have some limitations.",
        points: [
          "Fixed size (cannot grow dynamically)",
          "Can store only same type",
          "Insertion/deletion is difficult",
          "Wastes memory if size is large"
        ]
      },
    ],
    code: "// Array declaration and initialization\nint[] numbers = {10, 20, 30, 40};\n\n// Accessing elements\nSystem.out.println(numbers[0]); // Prints 10\n\n// Iterating through an array\nfor(int i = 0; i < numbers.length; i++) {\n  System.out.println(numbers[i]);\n}"
  },
  "Command-line Arguments": {
    description: "Command-line arguments allow passing parameters to a Java program at the time of execution.",
    keyPoints: [
      "Arguments are passed as an array of strings to the main() method (String[] args).",
      "They are useful for configuring program behavior without recompiling.",
      "Arguments are separated by spaces in the command line."
    ],
    sections: [
      {
        heading: "What are Command Line Arguments.?",
        content: "Command line arguments in Java are the inputs provided to a program at the time of execution through the command line. These arguments allow users to pass values externally instead of hardcoding them inside the program. They are received by the program through the String[] args parameter of the main() method. This makes programs more flexible and dynamic.",
        points: [
          "Input given during program execution",
          "Passed through command line",
          "Stored in String[] args",
          "Makes programs dynamic"
        ]
      },
      {
        heading: "Working of Cammand line Arguments.",
        content: "When a Java program is executed, the values entered after the class name are automatically stored in the args array. Each value is treated as a string and stored based on its position. The indexing starts from 0, just like normal arrays.",
        points: [
          "Arguments stored in array format",
          "Index starts from 0",
          "All values are treated as strings",
          "Order of input is preserved"
        ]
      },
      {
        heading: "Structure in Java Program",
        content: "Command line arguments are defined in the main() method, which is the entry point of every Java program. The parameter String[] args is used to store all input values provided during execution.",
        points: [
          "Defined in main() method",
          "String[] args stores inputs",
          "Can rename args (but commonly used)",
          "Essential for runtime input"
        ]
      },
      {
        heading: "Accessing Command Line Arguments",
        content: "Each command line argument can be accessed using its index in the args array. You can print or use these values just like elements of a normal array.",
        points: [
          "Access using args[index]",
          "Index starts from 0",
          "Accessing invalid index causes error",
          "Can be used in loops"
        ]
      },
      {
        heading: "Type Conversion of Arguments",
        content: "Since all command line arguments are stored as strings, they must be converted into required data types when needed. This is done using wrapper class methods like Integer.parseInt() or Double.parseDouble().",
        points: [
          "Default type is String",
          "Convert to int, double when needed",
          "Use wrapper class methods",
          "Required for calculations"
        ]
      },
      {
        heading: "Handling Errors",
        content: "If the required number of arguments is not provided or invalid data is passed, the program may throw runtime errors. To avoid this, it is important to check the length of the args array and handle inputs carefully.",
        points: [
          "Check args.length before accessing elements",
          "Avoid index errors",
          "Handle invalid input values",
          "Prevent runtime exceptions"
        ]
      },
      {
        heading: "Advantages of Command Line Arguments",
        content: "Command line arguments make programs more flexible and reusable. They allow users to provide different inputs without modifying the code, which is especially useful in real-world applications and testing.",
        points: [
          "No need to hardcode values",
          "Easy to pass multiple inputs",
          "Makes programs reusable",
          "Useful for testing"
        ]
      },
      {
        heading: "Limitations of Command Line Arguments",
        content: "Despite their advantages, command line arguments have some limitations. Since all values are treated as strings, conversion is required. Also, they are not very user-friendly for beginners compared to GUI-based input methods.",
        points: [
          "All inputs are strings",
          "Requires type conversion",
          "Not beginner-friendly",
          "Errors possible if input is incorrect"
        ]
      }
    ],
    code: "public class Main {\n  public static void main(String[] args) {\n    if(args.length > 0) {\n      System.out.println(\"First argument: \" + args[0]);\n    } else {\n      System.out.println(\"No arguments provided.\");\n    }\n  }\n}"
  },
  "Packages": {
    description: "A package in Java is used to group related classes, interfaces, and sub-packages to organize your code and prevent naming conflicts.",
    keyPoints: [
      "Built-in Packages: Core packages from the Java API (e.g., java.util, java.io).",
      "User-defined Packages: Custom packages created by developers.",
      "The 'import' keyword is used to access classes from other packages.",
      "Access modifiers (like protected and default) interact deeply with package structures.",
    ],
    sections: [
      {
        heading: "What is a Package?",
        content: "A package in Java is a namespace that groups related classes and interfaces together to organize code in a structured way. As Java applications grow larger, managing hundreds of classes becomes difficult. Packages solve this problem by dividing the program into smaller, logical units. They also help avoid naming conflicts, because two classes with the same name can exist in different packages without any issue.",
        points: [
          "Package = Folder → contains related program files",
          "Example:java.util contains utility classes like Scanner, ArrayList, etc.",
        ]
      },
      {
        heading: "key points",
        content: "Logical grouping of classes and interfaces",
        points: [
          "Acts like folders/directories",
          "Prevents class name conflicts",
          "Essential for large-scale applications"
        ]
      },
      {
        heading: "Why Packages are Needed",
        content: "In small programs, all classes can be placed in a single file, but in large projects, this becomes confusing and unmanageable. Packages provide a structured way to organize code, making it easier to locate, update, and reuse classes. They also support access control, which improves security by restricting access to certain classes or methods.",
        points: [
          "Without packages:",
          "Code becomes messy",
          "Hard to maintain",
          "Naming conflicts occur"
        ],
      },
      {
        heading: "Key Points:",
        points: [
          "Improves code organization",
          "Makes maintenance easier",
          "Supports modular programming",
          "Enhances security and reusability"
        ]
      },
      {
        heading: "Types of Packages",
        content: "Java supports two main types of packages: built-in packages and user-defined packages. Built-in packages are already available in Java and contain pre-written classes, while user-defined packages are created by developers to organize their own code.",
        points: [
          "Built-in → Provided by Java",
          "User-defined → Created by programmer",
          "Both improve code structure",
          "Used in almost every Java application"
        ]
      },
      {
        heading: "Built-in Packages (Predefined Packages)",
        content: "Built-in packages are a collection of pre-written classes provided by Java to perform common tasks such as input/output, data structures, networking, etc. These packages save time and effort because developers can directly use these classes instead of writing code from scratch.",
        points: [
          "Common examples:",
          "java.lang → Core classes (String, Math)",
          "java.util → Utility classes (Scanner, ArrayList)",
          "java.io → Input/Output operations",

          "Important:",
          "java.lang is automatically imported in every Java program.",
        ]
      },
      {
        heading: "key points",
        points: [
          "Provided by Java API",
          "No need to create manually",
          "Ready-to-use classes",
          "Improves productivity"
        ]
      },
      {
        heading: "User-Defined Packages",
        content: "User-defined packages are created by programmers to organize their own classes into meaningful groups. This is especially useful in large applications where multiple modules exist.",
        points: [
          "Example: package com.mycompany.student;",
          "Naming convention:",
          "Use lowercase letters",
          "Follow domain-based naming (reverse domain name)",
          "Example:com.company.project.module",
        ]
      },
      {
        heading: "Key Points",
        points:
          [
            "Created using package keyword",
            "Helps in modular programming",
            "Follows naming conventions",
            "Used in real-world projects"
          ]
      },
      {
        heading: "Creating and Compiling Packages",
        content: "To create a package, the package statement must be written at the top of the Java file. After writing the code, it must be compiled using a special command so that the proper folder structure is created.",
        points: [
          "Compilation:javac -d . ClassName.java",
          "Execution:java packageName.ClassName",
          "Explanation:-d . creates directory structure",
          "Files are stored in corresponding folders"
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Package must be declared first",
          "Use correct compilation command",
          "Folder structure is automatically created",
          "Required for proper execution"
        ]
      },
      {
        heading: "Accessing Packages using import",
        content: "To use classes from another package, we use the import keyword. It allows us to access classes without writing the full package name every time.",
        points: [
          "Types of import:",
          "Single class import",
          "Entire package import",
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Used to access classes from other packages",
          "Reduces code length",
          "Improves readability",
          "Can import specific or all classes"
        ]
      },
      {
        heading: "Fully Qualified Name (FQN)",
        content: "Instead of using import, Java allows us to use the full path of the class directly. This is called the Fully Qualified Name.",
        points: [
          "Example: java.util.Scanner sc = new java.util.Scanner(System.in);",
          "Here, we directly specify the package and class name."
        ]
      },
      {
        heading: "Key Points",
        points: [
          "No need for import",
          "Avoids naming conflicts",
          "Useful when same class names exist",
          "Makes code longer but clearer"
        ]
      },
      {
        heading: "Access Control in Packages",
        content: "Packages work closely with access modifiers to control visibility. This helps in protecting data and restricting access.",
        points: [
          "Access levels:",
          "public → accessible everywhere",
          "protected → within package + subclasses",
          "default → within same package",
          "private → within same class"
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Provides security",
          "Controls visibility",
          "Works with OOP concepts",
          "Prevents unauthorized access"
        ]
      },
      {
        heading: "Subpackages",
        content: "Java allows packages to contain other packages, known as subpackages. This creates a hierarchical structure and improves organization further.",
        points: [
          "Example: com.company.project.module"
        ]
      },
      {
        heading: "Key Points",
        points: [
          "Package inside another package",
          "Creates hierarchical structure",
          "Improves large project organization",
          "Common in enterprise applications"
        ]
      },
      {
        heading: "Advantages of Packages",
        content: "Packages provide many benefits that make Java development easier and more efficient.",
        points: [
          "Better organization of code",
          "Avoids naming conflicts",
          "Improves reusability",
          "Enhances security",
          "Makes large projects manageable"
        ]
      },
      {
        heading: "Limitations of Packages",
        content: "Despite their advantages, packages can be slightly complex for beginners and require proper structure.",
        points: [
          "Requires proper directory structure",
          "Compilation commands can be confusing",
          "Needs correct naming conventions",
          "Misuse may lead to errors"
        ]
      }
    ],
    code: "// Creating a package\npackage com.mycompany.mypack;\n\npublic class MyClass {\n  public void display() {\n    System.out.println(\"This is my package!\");\n  }\n}\n\n// Accessing from another file\nimport com.mycompany.mypack.MyClass;"
  },

  // OOP Concepts
  "Data Abstraction": {
    description: "Abstraction is the process of hiding internal details and showing only the functionality to the user.",
    keyPoints: [
      "Focuses on 'what' the object does instead of 'how' it does it.",
      "Achieved using Abstract Classes and Interfaces.",
      "Reduces complexity and increases system maintainability."
    ],
    sections: [
      {
        heading: "What is Data Abstraction?",
        content: "Data abstraction in Java is the concept of hiding internal implementation details and showing only the essential features to the user. It allows the user to interact with the system without knowing how the internal logic works. This helps in reducing complexity and improving code clarity.",
        points: [
          "In simple terms:",
          "Abstraction = Show what is needed, hide how it works",
          "Example ",
          "When you use a mobile phone, you press buttons to make a call, but you don’t know how the internal circuits work.",
          "Hides internal details",
          "Shows only essential features",
          "Reduces complexity",
          "Improves code readability",
        ],
      },
      {
        heading: "Why Data Abstraction is Important",
        content: "In large applications, showing all internal details can make the system complex and difficult to use. Abstraction helps in simplifying the interaction between user and system by exposing only necessary functionalities. It also improves security by hiding sensitive implementation details.",
      },
      {
        heading: "Benefits of Data Abstraction",
        content: "Data abstraction offers several benefits in Java development.",
        points: [
          "Simplifies complex systems",
          "Improves security",
          "Makes code easier to use",
          "Enhances maintainability"
        ]
      },
      {
        heading: "Why Data Abstraction is Important",
        content: "In large applications, showing all internal details can make the system complex and difficult to use. Abstraction helps in simplifying the interaction between user and system by exposing only necessary functionalities. It also improves security by hiding sensitive implementation details.",
        points: [
          "Simplifies complex systems",
          "Improves security",
          "Makes code easier to use",
          "Enhances maintainability"
        ]
      },
      {
        heading: "Achieving Abstraction in Java",
        content: "In Java, abstraction is mainly achieved using:",
        points: [
          "Abstract Classes",
          "Interfaces",
          "These provide a way to define methods without implementation and allow subclasses or implementing classes to define the actual behavior."
        ]
      },
      {
        heading: "Key Points:",
        points: [
          "Achieved using abstract classes and interfaces",
          "Provides method definitions without implementation",
          "Supports code flexibility"
        ]
      },
      {
        heading: "Abstract Classes",
        content: "An abstract class is a class that is declared using the abstract keyword. It can contain both abstract methods (without body) and non-abstract methods (with body). Abstract classes cannot be instantiated, meaning you cannot create objects directly from them.",
        points: [
          "It acts as a blueprint for other classes.",
          "Declared using abstract keyword",
          "Can have abstract and normal methods",
          "Cannot create objects directly",
          "Must be extended by another class"
        ]
      },
      {
        heading: "Interface",
        content: "An interface is a completely abstract structure that contains only method declarations (by default abstract) and constants. It is used to achieve 100% abstraction. A class implements an interface using the implements keyword.",
        points: [
          "Interfaces allow multiple inheritance in Java.",
          "Achieves full abstraction",
          "Methods are abstract by default",
          "Supports multiple inheritance",
          "Implemented using implements"
        ]
      },
      {
        heading: "Advantages of Data Abstraction",
        content: "Data abstraction provides several benefits in software development, especially in object-oriented programming.",
        points: [
          "Reduces code complexity",
          "Improves security",
          "Enhances flexibility",
          "Makes code easier to maintain",
          "Promotes modular design"
        ]
      }

    ],
    code: "abstract class Animal {\n  public abstract void animalSound();\n  public void sleep() {\n    System.out.println(\"Zzz\");\n  }\n}"
  },
  "Encapsulation": {
    description: "Encapsulation is the technique of making the fields in a class private and providing access to the fields via public methods.",
    keyPoints: [
      "Data Hiding: Restricts direct access to data members.",
      "Getter and Setter methods are used to read and update data.",
      "Improved flexibility and reusability."
    ],
    sections: [
      {
        heading: "What is Encapsulation?",
        content: "Encapsulation in Java is the concept of wrapping data (variables) and code (methods) together into a single unit, usually a class. It is one of the core principles of object-oriented programming (OOP). Encapsulation helps in restricting direct access to data and allows it to be accessed only through specific methods.",
        points: [
          "In simple terms:  Encapsulation = Data hiding + Controlled access",
          "Wraps data and methods together",
          "Restricts direct access to variables",
          "Provides controlled access",
          "Achieved using classes "
        ]
      },
      {
        heading: "Why Encapsulation is Important",
        content: "Encapsulation is important because it protects data from unauthorized access and misuse. By hiding internal details, it ensures that data can only be modified in a controlled way. This improves security, flexibility, and maintainability of the program.",
        points: [
          "Improves data security",
          "Prevents unauthorized access",
          "Makes code flexible",
          "Enhances maintainability"
        ]
      },
      {
        heading: "How Encapsulation is Achieved in Java",
        content: "Encapsulation in Java is achieved by:",
        points: [
          "Declaring variables as private",
          "Providing public getter and setter methods to access and update the data",
          "Use private variables",
          "Use public methods to access data",
          "Control how data is modified",
          "Follows OOP principles"
        ]
      },
      {
        heading: "Getter and Setter Methods",
        content: "Getter and setter methods are used to read and update private variables. A getter method returns the value of a variable, while a setter method updates its value.",
        points: [
          "Naming convention:",
          "Getter → getVariableName()",
          "Setter → setVariableName()"
        ]
      },
      {
        heading: "Key Points",
        points:
          [
            "Getter → used to get value",
            "Setter → used to set value",
            "Provides controlled access",
            "Helps in validation"
          ]
      },
      {
        heading: "Data Hiding",
        content: "Data hiding is a key part of encapsulation. It means restricting direct access to class variables so that they cannot be modified without permission. This prevents accidental or unauthorized changes.",
        points: [
          "Variables are kept private",
          "Access only through methods",
          "Protects data integrity",
          "Prevents misuse"
        ]
      },
      {
        heading: "Advantages of Encapsulation",
        content: "Encapsulation provides several benefits that make programs more secure and easy to manage.",
        points: [
          "Improves security",
          "Increases flexibility",
          "Makes code reusable",
          "Easy to maintain and update",
          "Supports data validation"
        ]
      },
    ],
    code: "public class Person {\n  private String name;\n  public String getName() {\n    return name;\n  }\n  public void setName(String newName) {\n    this.name = newName;\n  }\n}"
  },

  "Polymorphism": {
    description: "Polymorphism means 'many forms' and occurs when we have many classes that are related to each other by inheritance.",
    keyPoints: [
      "Compile-time Polymorphism (Static Binding): Achieved via Method Overloading.",
      "Run-time Polymorphism (Dynamic Binding): Achieved via Method Overriding.",
      "Allows performing a single action in different ways."
    ],
    sections: [
      {
        heading: "What is Polymorphism?",
        content: "Polymorphism in Java is the concept of one object or method behaving in multiple ways. The word “polymorphism” means “many forms”. It allows the same method name or object to perform different tasks depending on the situation. This is one of the core principles of object-oriented programming (OOP) and helps in writing flexible and reusable code.",
        points: [
          "Polymorphism = One name → Many behaviors",
          " One method behaves in multiple ways",
          "Increases flexibility",
          "Supports code reusability",
          "Core concept of OOP"
        ]
      },
      {
        heading: "Types of Polymorphism",
        content: "There are two main types of polymorphism in Java: Compile-time Polymorphism and Run-time Polymorphism.",
        points: [
          "Compile-time Polymorphism (Static Binding): Achieved through method overloading. The method to be called is determined at compile time based on the method signature.",
          "Run-time Polymorphism (Dynamic Binding): Achieved through method overriding. The method to be called is determined at runtime based on the object type."
        ]
      },
      {
        heading: "key points",
        points: [
          "Two main types",
          "Based on when method behavior is decided",
          "Widely used in real-world applications"
        ]
      },
      {
        heading: "Compile-time Polymorphism (Method Overloading)",
        content: "Compile-time polymorphism is achieved using method overloading, where multiple methods have the same name but different parameters (type, number, or order). The method to be executed is determined at compile time.",
        points: [
          "Achieved using method overloading",
          "Same method name, different parameters",
          "Decided at compile time",
          "Improves readability"
        ]
      },
      {
        heading: "Run-time Polymorphism (Method Overriding)",
        content: "Run-time polymorphism is achieved using method overriding, where a subclass provides a specific implementation of a method that is already defined in its superclass. The method to be executed is determined at runtime using dynamic method dispatch.",
        points: [
          "Achieved using method overriding",
          "Same method name and parameters",
          "Decided at runtime",
          "Supports dynamic behavior"
        ]
      },
      {
        heading: "Advantages of Polymorphism",
        content: "Polymorphism provides several advantages that make programs more flexible and efficient.",
        points: [
          "Improves code reusability",
          "Makes code flexible and scalable",
          "Reduces code duplication",
          "Enhances readability",
          "Supports dynamic behavior"
        ]
      }

    ],
    code: "class Animal { public void sound() { System.out.println(\"Some sound\"); } }\nclass Dog extends Animal { public void sound() { System.out.println(\"Bark\"); } }"
  },
  "Inheritance": {
    description: "Inheritance is the mechanism in Java by which one class is allowed to inherit the features (fields and methods) of another class.",
    keyPoints: [
      "Superclass (Parent): The class whose features are inherited.",
      "Subclass (Child): The class that inherits the other class.",
      "Supports code reusability and method overriding."
    ],
    sections: [
      {
        heading: "What is Inheritance?",
        content: "Inheritance in Java is a mechanism through which one class (child/subclass) acquires the properties and behaviors of another class (parent/superclass). This means the child class can use variables and methods of the parent class without rewriting them. It helps in building relationships between classes and promotes code reuse. Inheritance is implemented using the extends keyword and is one of the core concepts of object-oriented programming.",
        points: [
          "Inheritance = Reusing existing code from another class",
          "Child class inherits parent class properties",
          "Reduces code duplication",
          "Uses extends keyword",
          "Supports OOP design"
        ],
      },
      {
        heading: "Types of Inheritance",
        content: "Java supports several types of inheritance based on the relationship between classes.",
        points: [
          "Single Inheritance: A subclass inherits from one superclass.",
          "Multilevel Inheritance: A subclass inherits from a superclass, which in turn inherits from another superclass.",
          "Hierarchical Inheritance: Multiple subclasses inherit from a single superclass.",
          "Multiple Inheritance (through interfaces): A class can implement multiple interfaces, allowing it to inherit behavior from multiple sources."
        ]
      },
      {
        heading: "single Inheritance",
        content: "Single inheritance is the simplest form of inheritance where one child class inherits from one parent class. In this type, the child class directly uses the features of the parent class and can also add its own features. It is easy to understand and widely used in basic programs.",
        points: [
          "Structure: One Parent → One Child",
          "One parent and one child",
          "Simple and easy",
          "Promotes reuse"
        ]
      },
      {
        heading: "Multilevel Inheritance",
        content: "Multilevel inheritance occurs when a class inherits from another class, which itself inherits from another class, forming a chain. This means the child class can access features from both its parent and grandparent classes. It helps in creating a hierarchy of classes.",
        points: [
          "Structure: Grandparent → Parent → Child",
          "Multiple levels of inheritance",
          "Forms a chain structure",
          "Child gets features from all levels"
        ]
      },
      {
        heading: "Hierarchical Inheritance",
        content: "Hierarchical inheritance is a type where multiple child classes inherit from a single parent class. Each child class can use the common properties of the parent class while having its own specific features. This helps in reducing duplication of common code.",
        points: [
          "Structure: One Parent → Many Children",
          "One parent, multiple children",
          "Common features shared",
          "Reduces duplication"
        ]
      },
      {
        heading: "Multiple Inheritance (through interfaces)",
        content: "Java does not support multiple inheritance using classes because it can create ambiguity problems. However, it supports multiple inheritance using interfaces, where a class can implement multiple interfaces and inherit their methods. This allows a class to gain features from multiple sources safely.",
        points: [
          "Multiple Interfaces → One Class",
          "Not allowed with classes",
          "Allowed using interfaces",
          "Avoids ambiguity problem"
        ]
      },
      {
        heading: "Advantages of Inheritance",
        content: "Inheritance provides many benefits in programming by improving code reuse and structure. It helps in reducing redundancy and makes programs easier to understand and maintain.",
        points: [
          "Reusability of code",
          "Reduces duplication",
          "Improves structure",
          "Supports scalability"
        ]
      },
      {
        heading: "Limitations of Inheritance",
        content: "Although inheritance is useful, it also has some limitations. If not used properly, it can increase complexity and create strong dependencies between classes.",
        points: [
          "Increases complexity",
          "Tight coupling between classes",
          "Not always suitable",
          "Hard to maintain deep hierarchies"
        ]
      }

    ],
    code: "class Vehicle { protected String brand = \"Ford\"; }\nclass Car extends Vehicle { private String modelName = \"Mustang\"; }"
  },
  "Class and Object": {
    description: "A Class is a blueprint for creating objects. An Object is an instance of a class.",
    keyPoints: [
      "Class: Defines the properties (attributes) and behaviors (methods).",
      "Object: Contains state and behavior corresponding to the class.",
      "Created using the 'new' keyword."
    ],
    sections: [
      {
        heading: "What is a Class?",
        content: "A class in Java is a blueprint or template used to create objects. It defines the properties (variables) and behaviors (methods) that an object will have. A class itself does not represent a real-world entity, but it describes how objects should be structured and behave.",
        points: [
          "Class = Design / Blueprint",
          "Blueprint for creating objects",
          "Contains variables (data) and methods (functions)",
          "Does not occupy memory until object is created",
          "Used to define structure"
        ]
      },
      {
        heading: "What is an Object?",
        content: "An object is an instance of a class. It represents a real-world entity and contains actual values. When an object is created, memory is allocated, and it can access the properties and methods defined in the class.",
        points: [
          "Object = Real instance of class",
          "Instance of a class",
          "Represents real-world entity",
          "Occupies memory",
          "Can use class methods and variables"
        ]
      },
      {
        heading: "How Class and Object Work Together",
        content: "A class defines the structure, and an object uses that structure to store actual data and perform actions. Multiple objects can be created from a single class, and each object can have different values.",
        points: [
          "Class → Object → Use data and methods",
          "One class → many objects",
          "Objects share structure but have different data",
          "Helps in code reuse"
        ]
      },
      {
        heading: "Creating a Class",
        content: "A class is created using the class keyword. Inside the class, we define variables and methods.",
        points: [
          "Declared using class keyword",
          "Contains variables and methods",
          "Acts as template"
        ]
      },
      {
        heading: "Creating an Object",
        content: "An object is created using the new keyword. This allocates memory and allows access to class members.",
        points: [
          "Created using new keyword",
          "Allocates memory",
          "Access using dot (.) operator"
        ]
      },
      {
        heading: "Accessing Members of Class",
        content: "Once an object is created, we can access its variables and methods using the dot operator (.).",
        points: [
          "Use dot (.) operator",
          "Access variables and methods",
          "Works through object"
        ]
      },
      {
        heading: "Multiple Objects",
        content: "We can create multiple objects from the same class. Each object can have different values, but they all follow the same structure.",
        points: [
          "One class → many objects",
          "Each object has separate data",
          "Independent memory"
        ]
      },
      {
        heading: "Constructors",
        content: "A constructor is a special method used to initialize objects. It is automatically called when an object is created.",
        points: [
          "Same name as class",
          "No return type",
          "Used to initialize objects",
          "Called automatically",
          "Same name as class"
        ]
      },

    ],
    code: "class Car { String color; }\nCar myCar = new Car();\nmyCar.color = \"Red\";"
  },
  "Abstract Classes": {
    description: "Abstract classes are classes that contain one or more abstract methods (methods without a body).",
    keyPoints: [
      "Cannot be instantiated directly (cannot use 'new').",
      "Can have both abstract and non-abstract methods.",
      "Used to provide a base for subclasses to extend and implement the abstract methods."
    ],
    sections: [
      {
        heading: "What is an Abstract Class?",
        content: "An abstract class in Java is a class that is declared using the abstract keyword and is used to provide a base or blueprint for other classes. It can contain both abstract methods (methods without a body) and concrete methods (methods with implementation). Abstract classes are used when we want to define common behavior but leave some details to be implemented by child classes.",
        points: [
          "Abstract Class = Partial blueprint (incomplete class),",
          "Declared using abstract keyword",
          "Cannot be instantiated (no objects directly)",
          "Can contain abstract + non-abstract methods",
          "Used as a base class"

        ]
      },
      {
        heading: "Why Use Abstract Classes?",
        content: "Abstract classes are used when we want to achieve partial abstraction. They allow us to define common functionality while forcing subclasses to implement specific behaviors. This improves code structure and ensures consistency across related classes.",
        points: [
          "Avoids code duplication",
          "Provides common structure",
          "Forces implementation in child classes",
          "Improves maintainability"
        ]
      },
      {
        heading: "Abstract Methods",
        content: "An abstract method is a method that is declared without a body. It only contains the method signature, and its implementation is provided by the subclass.",
        points: [
          "The subclass must override this method; otherwise, it will also become abstract.",
          "No method body",
          "Must be implemented in child class",
          "Declared using abstract keyword",
          "Used to define behavior"
        ]
      },
      {
        heading: "Concrete Methods in Abstract Class",
        content: "An abstract class can also have normal methods with complete implementation. These methods can be directly used by child classes without overriding.",
        points: [
          "Have method body",
          "Can be used directly",
          "Provide common functionality",
          "Optional to override"
        ]
      },
      {
        heading: "Creating an Abstract Class",
        content: "To create an abstract class, we use the abstract keyword before the class name. It can contain variables, constructors, abstract methods, and normal methods.",
        points: [
          "Use abstract keyword",
          "Cannot create objects directly",
          "Can contain both types of methods"
        ]
      },
      {
        heading: "Extending an Abstract Class",
        content: "A subclass extends an abstract class using the extends keyword. It must provide implementations for all abstract methods; otherwise, it must also be declared abstract.",
        points: [
          "Use extends keyword",
          "Must implement abstract methods",
          "Can override normal methods"
        ]
      },
      {
        heading: "Rules of Abstract Classes",
        content: "Abstract classes follow certain rules that must be understood clearly.",
        points: [
          "Cannot create objects directly",
          "Can have constructors",
          "Can have static and final methods",
          "If a class has an abstract method, it must be abstract",
          "Subclass must implement all abstract methods"
        ]
      },
      {
        heading: "Advantages of Abstract Classes",
        points:
          [
            "Provides partial abstraction",
            "Reduces code duplication",
            "Improves code structure",
            "Supports code reuse",
            "Helps in designing large applications"
          ]
      }

    ],
    code: "abstract class Shape {\n  abstract void draw(); // abstract method\n}\nclass Circle extends Shape {\n  void draw() { System.out.println(\"Drawing Circle\"); }\n}"
  },
  "Interfaces": {
    description: "An interface in Java is a blueprint of a class that has static constants and abstract methods.",
    keyPoints: [
      "Used to achieve total abstraction.",
      "Supports multiple inheritance.",
      "All methods are public and abstract by default (prior to Java 8)."
    ],
    sections: [
      {
        heading: "What is an Interface?",
        content: "An interface in Java is a completely abstract structure that is used to define a set of methods that a class must implement. It acts like a contract, meaning any class that implements the interface must provide implementations for all its methods. Interfaces are used to achieve 100% abstraction and support multiple inheritance in Java.",
        points: [
          "Interface = Contract (rules to follow)",
          "Fully abstract (by default)",
          "Contains method declarations",
          "Cannot create objects directly",
          "Used to achieve abstraction"
        ]
      },
      {
        heading: "Why Use Interfaces?",
        content: "Interfaces are used to define a common structure that multiple classes can follow. They allow different classes to behave in a consistent way while having different implementations. They also solve the problem of multiple inheritance in Java.",
        points: [
          "Provides common structure",
          "Supports multiple inheritance",
          "Improves flexibility",
          "Promotes loose coupling"
        ]
      },
      {
        heading: "How to Declare an Interface",
        content: "An interface is declared using the interface keyword. Methods inside an interface are by default public and abstract, and variables are public, static, and final.",
        points: [
          "Declared using interface keyword",
          "Methods are abstract by default",
          "Variables are constants",
          "No method body (usually)"
        ]
      },

      {
        heading: "Implementing Interfaces",
        content: "A class implements an interface using the implements keyword. The class must provide implementation for all methods declared in the interface.",
        points: [
          "Use 'implements' keyword",
          "Must implement all methods",
          "One class can implement multiple interfaces"
        ]
      },
      {
        heading: "Multiple Inheritance Using Interfaces",
        content: "Java does not support multiple inheritance using classes, but it allows a class to implement multiple interfaces. This enables a class to inherit behavior from multiple sources.",
        points: [
          "One class can implement multiple interfaces",
          "Solves multiple inheritance problem",
          "Avoids ambiguity"
        ]
      },
      {
        heading: "Default and Static Methods (Java 8+)",
        content: "From Java 8 onwards, interfaces can contain default methods (with body) and static methods. This allows adding new functionality without breaking existing code.",
        points: [
          "Default methods have body",
          "Static methods belong to interface",
          "Improve flexibility"
        ]
      },
      {
        heading: "Functional Interfaces",
        content: "A functional interface is an interface that contains only one abstract method. It is mainly used in lambda expressions.",
        points: [
          "Only one abstract method",
          "Used in lambda expressions",
          "Improves code simplicity"
        ]
      },
      {
        heading: "Advantages of Interfaces",
        points: [
          "Achieves full abstraction",
          "Supports multiple inheritance",
          "Promotes loose coupling",
          "Improves code flexibility",
          "Encourages modular design"
        ]
      }

    ],
    code: "interface Animal {\n  public void animalSound(); // interface method (does not have a body)\n  public void sleep(); // interface method (does not have a body)\n}\n\nclass Pig implements Animal {\n  public void animalSound() {\n    System.out.println(\"The pig says: wee wee\");\n  }\n  public void sleep() {\n    System.out.println(\"Zzz\");\n  }\n}"
  },
  "Overloading/Overriding": {
    description: "Method Overloading and Method Overriding are two ways Java implements Polymorphism.",
    keyPoints: [
      "Overloading: Multiple methods with the same name but different parameters (compile-time).",
      "Overriding: Subclass provides a specific implementation for a method defined in its superclass (run-time).",
      "Overriding requires the same method signature."
    ],
    sections: [
      {
        heading: "What is Method Overloading?",
        content: "Method overloading is a feature in Java where multiple methods have the same name but different parameters (type, number, or order) within the same class. The method that gets executed is decided at compile time, based on the arguments passed. It is used to perform similar operations with different inputs.",
        points: [
          "Same method name → Different inputs → Different behavior",
          "example: add(int a, int b) and add(int a, int b, int c)",
          "Same method name",
          "Different parameters",
          "Occurs in same class",
          "Decided at compile time"
        ]
      },
      {
        heading: "How Method Overloading Works",
        content: "When a method is called, the compiler checks the method signature (name + parameters) and decides which method to execute. The return type alone cannot differentiate overloaded methods.",
        points: [
          "Based on method signature",
          "Return type alone is not enough",
          "Improves readability",
          "No inheritance required"
        ]
      },
      {
        heading: "Advantages of Method Overloading",
        points: [
          "Improves code readability",
          "Allows reuse of method name",
          "Makes code cleaner",
          "Supports compile-time polymorphism"
        ]
      },
      {
        heading: "What is Method Overriding?",
        content: "Method overriding occurs when a child class provides a specific implementation of a method that is already defined in the parent class. The method name and parameters must be the same. The method that gets executed is decided at runtime, based on the object type.",
        points: [
          "Same method → New behavior in child class",
          "Parent → sound()",
          "Child → sound() (different implementation)",
          "Same method name and parameters",
          "Requires inheritance",
          "Decided at runtime",
          "Supports dynamic behavior"
        ]
      },
      {
        heading: "How Method Overriding Works",
        content: "When a parent reference points to a child object, Java decides which method to call at runtime using dynamic method dispatch. The method of the actual object (child class) is executed, not the reference type.",
        points: [
          "Uses dynamic method dispatch",
          "Based on object type",
          "Enables runtime polymorphism",
          "Requires inheritance"
        ]
      },
      {
        heading: "Advantages of Method Overriding",
        points: [
          "Supports runtime polymorphism",
          "Allows method customization",
          "Improves flexibility",
          "Enables dynamic behavior"
        ]
      }

    ],
    code: "// Overloading\nint add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\n\n// Overriding\n@Override\npublic void display() { System.out.println(\"Overridden Method\"); }"
  },
  "Super and Super()": {
    description: "The 'super' keyword in Java is a reference variable used to refer to the immediate parent class object.",
    keyPoints: [
      "super.variable: Accesses the parent class variable.",
      "super.method(): Invokes the parent class method.",
      "super(): Invokes the parent class constructor (must be the first line in the child constructor)."
    ],
    sections: [
      {
        heading: "What is super Keyword?",
        content: "The super keyword in Java is used to refer to the immediate parent (superclass) object. It is mainly used when a child class wants to access variables or methods of its parent class, especially when both parent and child have the same names. It helps in avoiding confusion between parent and child members.",
        points: [
          "super = Access parent class members",
          "Refers to parent class",
          "Used inside child class",
          "Access parent variables and methods",
          "Resolves naming conflicts"
        ]
      },
      {
        heading: "Using super to Access Parent Variables",
        content: "When both parent and child classes have variables with the same name, the super keyword is used to access the parent class variable.",
        points: [
          "Avoids confusion between variables",
          "Access parent variable explicitly",
          "Used when names are same"
        ]
      },
      {
        heading: "Using super to Call Parent Methods",
        content: "When a child class overrides a method, it can still call the parent class version of that method using super.",
        points: [
          "Used in method overriding",
          "Calls parent class method",
          "Helps reuse parent logic"
        ]
      },
      {
        heading: "What is super() Constructor?",
        content: "The super() keyword is used to call the constructor of the parent class. It is mainly used to initialize parent class properties when an object of the child class is created. By default, Java automatically calls the parent class constructor, but we can explicitly call it using super().",
        points: [
          "super() = Call parent constructor",
          "Calls parent class constructor",
          "Must be the first statement in constructor",
          "Used for initialization",
          "Automatically called if not written"
        ]
      },
      {
        heading: "Using super() with Parameters",
        content: "We can pass arguments to the parent class constructor using super(parameters).",
        points: [
          "Used when parent constructor has parameters",
          "Helps initialize parent data",
          "Improves flexibility"
        ]
      },
    ],
    code: "class Parent { Parent() { System.out.println(\"Parent Constructor\"); } }\nclass Child extends Parent {\n  Child() {\n    super(); // Calls Parent()\n    System.out.println(\"Child Constructor\");\n  }\n}"
  },

  // Exception Handling
  "Fundamentals": {
    description: "An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions.",
    keyPoints: [
      "Exceptions can be caught and handled using try-catch blocks.",
      "The 'finally' block always executes after try-catch.",
      "Exceptions are objects of subclasses of Throwable."
    ],
    sections: [
      {
        heading: "What is Exception Handling?",
        content: "Exception handling in Java is a mechanism used to handle unexpected runtime errors in a controlled way so that the program does not terminate abruptly. When an error occurs during execution, instead of stopping the program, Java transfers control to a special block of code designed to handle that error. This ensures that the remaining part of the program can continue executing smoothly. Exception handling improves the reliability and robustness of applications by managing abnormal situations effectively.",
        points: [
          "Exception Handling = Managing runtime errors",
          "Handles runtime errors",
          "Prevents program crash",
          "Maintains normal flow",
          "Improves program reliability"
        ]
      },
      {
        heading: "What is an Exception?",
        content: "An exception is an object that represents an abnormal condition or error that occurs during the execution of a program. When such a condition arises, Java creates an exception object and throws it. This disrupts the normal flow of the program unless it is handled properly. Exceptions can occur due to logical errors, invalid inputs, or improper use of resources.",
        points: [
          "Represents runtime error",
          "Created automatically by JVM",
          "Interrupts program flow",
          "Must be handled properly"
        ]
      },
      {
        heading: "Advantages of Exception Handling",
        points: [
          "Prevents abnormal termination",
          "Improves program reliability",
          "Separates error handling code",
          "Makes debugging easier",
          "Enhances user experience"
        ]
      },
      {
        heading: "What is a Custom Exception?",
        content: "A custom exception in Java is a user-defined exception created by the programmer to handle specific conditions in an application. Java provides many built-in exceptions, but sometimes they are not enough to describe certain errors clearly. In such cases, we create our own exception class by extending the Exception class or RuntimeException class.",
        points: [
          "Custom Exception = Your own error type",
          "User-defined exception",
          "Created by extending Exception class",
          "Used for specific conditions",
          "Improves clarity of errors"
        ]
      },
      {
        heading: "Why Use Custom Exceptions?",
        content: "Custom exceptions are used when built-in exceptions are not sufficient to describe a particular error condition. They make the program more meaningful and easier to debug because the error message clearly explains the problem.",
        points: [
          "Makes errors meaningful",
          "Improves readability",
          "Helps in debugging",
          "Used in real-world applications"
        ]
      },
      {
        heading: "How to Create a Custom Exception",
        content: "To create a custom exception, we define a class that extends Exception (for checked) or RuntimeException (for unchecked). We can also define a constructor to pass error messages.",
        points: [
          "Extend Exception class",
          "Create constructor",
          "Use super(message)",
          "Define custom logic"
        ]
      },
      {
        heading: "Using Custom Exception",
        content: "Once the custom exception is created, we can use the throw keyword to raise it when needed.",
        points: [
          "Use throw to raise exception",
          "Handle using try-catch",
          "Use throws in method declaration"
        ]
      },
      {
        heading: "What is Exception Hierarchy?",
        content: "Exception hierarchy in Java is the structured classification of all exceptions and errors in a tree-like format. All exceptions are derived from the base class Throwable. It helps in understanding how exceptions are related and how they can be handled.",
        points: [
          "Throwable is the root class",
          "Structure",
          " Throwable",
          " ├── Error",
          "└── Exception",
          "   ├── Checked",
          " └── Unchecked",
          "Organized in tree structure",
          "Root class is Throwable",
          "Divided into Error and Exception",
          "Helps in proper handling"
        ]
      },
      {
        heading: "Throwable Class",
        content: "Throwable is the root class of all exceptions and errors in Java. Every exception or error is a subclass of this class.",
        points: [
          "Parent of all exceptions",
          "Contains error information",
          "Has methods like getMessage()"
        ]
      },
      {
        heading: "Error Class",
        content: "Errors represent serious problems that cannot be handled by the program. They are usually caused by system failures.",
        points: [
          "OutOfMemoryError",
          "StackOverflowError",
          "Occur at system level",
          "Cannot be handled easily",
          "Not recommended to catch"
        ]
      },
      {
        heading: "Exception Class",
        content: "Exceptions represent conditions that can be handled by the program. They are divided into checked and unchecked exceptions.",
        points: [
          "Can be handled using try-catch",
          "Subclass of Throwable",
          "Used in normal programs"
        ]
      },
      {
        heading: "Checked Exceptions",
        content: "Checked exceptions are checked at compile time and must be handled.",
        points: [
          "IOException",
          "SQLException",
          "Must handle or declare",
          "Compile-time checking",
          "Safer programs"
        ]
      },
      {
        heading: "Unchecked Exceptions",
        content: "Unchecked exceptions occur at runtime and are not checked by the compiler.",
        points: [
          "ArithmeticException",
          "NullPointerException",
          "Runtime errors",
          "Not mandatory to handle",
          "Caused by programming mistakes"
        ]
      }
    ],

    code: "try {\n  int[] myNumbers = {1, 2, 3};\n  System.out.println(myNumbers[10]);\n} catch (Exception e) {\n  System.out.println(\"Something went wrong.\");\n} finally {\n  System.out.println(\"The 'try catch' is finished.\");\n}"
  },

  "Exception Types": {
    description: "In Java, exceptions are classified into different types based on how and when they occur. All exceptions come under the Throwable class and are mainly divided into Checked Exceptions, Unchecked Exceptions, and Errors.",
    keyPoints: [
      "Categorized based on occurrence",
      "Helps in proper error handling",
      "Derived from Throwable",
      "Three main types"
    ],
    sections: [
      {
        heading: "What are Checked Exceptions?",
        content: "Checked exceptions are exceptions that are checked by the compiler at compile time. This means the programmer is required to handle them using a try-catch block or declare them using the throws keyword. These exceptions usually occur due to conditions that are outside the control of the program, such as file handling, network operations, or database access.",
        points: [
          "Checked at compile time",
          "Must be handled or declared",
          "Caused by external factors",
          "Improves program reliability"
        ]
      },
      {
        heading: "IOException",
        content: "IOException occurs when there is a problem during input/output operations, such as reading from or writing to a file. For example, if a file does not exist or cannot be accessed, this exception is thrown.",
        points: [
          "Related to file operations",
          "Occurs during reading/writing",
          "Must be handled"
        ]
      },
      {
        heading: "SQLException",
        content: "SQLException occurs when there is an error while interacting with a database. This can happen due to invalid queries, connection issues, or incorrect database operations.",
        points: [
          "Related to database operations",
          "Occurs during SQL execution",
          "Must be handled"
        ]
      },
      {
        heading: "ClassNotFoundException",
        content: "This exception occurs when Java is unable to find a required class during runtime, usually when using dynamic class loading.",
        points: [
          "Occurs during class loading",
          "Happens in dynamic loading",
          "Must be handled"
        ]
      },
      {
        heading: "What are Unchecked Exceptions?",
        content: "Unchecked exceptions are exceptions that occur during program execution (runtime) and are not checked by the compiler. These exceptions are usually caused by programming mistakes such as incorrect logic, invalid operations, or improper handling of data. Handling these exceptions is not mandatory, but it is recommended to avoid program crashes.",
        points: [
          "Occur at runtime",
          "Not checked by compiler",
          "Caused by programming errors",
          "Optional to handle"
        ]
      },
      {
        heading: "ArithmeticException",
        content: "ArithmeticException occurs when an invalid mathematical operation is performed, such as dividing a number by zero.",
        points: [
          "Occurs in arithmetic operations",
          "Common error in calculations",
          "Caused by invalid math"
        ]
      },
      {
        heading: "NullPointerException",
        content: "NullPointerException occurs when we try to use an object that has not been initialized (null). It is one of the most common runtime exceptions.",
        points: [
          "Occurs when object is null",
          "Very common error",
          "Caused by improper object handling"
        ]
      },
      {
        heading: "ArrayIndexOutOfBoundsException",
        content: "This exception occurs when we try to access an invalid index of an array, i.e., an index that is outside the array size.",
        points: [
          "Occurs in arrays",
          "Invalid index access",
          "Index must be within range"
        ]
      },
      {
        heading: "NumberFormatException",
        content: "This exception occurs when a string is converted into a number incorrectly, such as trying to convert non-numeric text into an integer.",
        points: [
          "Occurs during type conversion",
          "Invalid string to number",
          "Common in user input"
        ]
      },
      {
        heading: "What are Errors?",
        content: "Errors are serious problems that occur at the system or JVM level and are not meant to be handled by the program. These issues are usually beyond the control of the programmer and indicate critical failures such as memory issues or system crashes.",
        points: [
          "Occur at system level",
          "Not recoverable",
          "Not handled using try-catch",
          "Rare but critical"
        ]
      },
      {
        heading: "OutOfMemoryError",
        content: "This error occurs when the Java Virtual Machine (JVM) runs out of memory and cannot allocate space for new objects.",
        points: [
          "Memory-related issue",
          "JVM cannot allocate memory",
          "Serious problem"
        ]
      },
      {
        heading: "StackOverflowError",
        content: "This error occurs when there is excessive recursion, causing the call stack to overflow.",
        points: [
          "Caused by deep recursion",
          "Stack memory overflow"
        ]
      }
    ],
    code: "// Unchecked Exception example\nint result = 10 / 0; // ArithmeticException\n\n// Checked Exception example\nFileReader file = new FileReader(\"test.txt\"); // Requires try-catch or throws"
  },
  "try-catch-finally Blocks": {
    description: "The try, catch, and finally blocks are the core mechanisms for catching and handling exceptions to prevent program termination.",
    keyPoints: [
      "try: Contains code that might throw an exception.",
      "catch: Contains code to handle the exception.",
      "finally: Contains code that is ALWAYS executed, regardless of whether an exception occurred."
    ],
    sections: [
      {
        heading: "What is a try Block?",
        content: "The try block in Java is used to enclose the code that might generate an exception during program execution. This block contains statements that are considered risky, such as division, file handling, or array access. When Java executes the code inside the try block, it continuously monitors for any exceptions. If an exception occurs, the remaining statements in the try block are skipped, and control is immediately transferred to the appropriate catch block.\nIn simple terms:\ntry = Put risky code here\nImportant idea:\nOnly the code inside try is monitored for exceptions.",
        points: [
          "Contains risky or error-prone code",
          "Must be followed by catch or finally",
          "Cannot exist alone",
          "If exception occurs → control jumps to catch"
        ]
      },
      {
        heading: "What is a catch Block?",
        content: "The catch block is used to handle exceptions that occur in the try block. When an exception happens, Java searches for a matching catch block based on the type of exception. If a matching catch block is found, the code inside it is executed. This prevents the program from crashing and allows it to continue execution normally. The catch block also receives an exception object, which can be used to get details about the error.\nIn simple terms:\ncatch = Handle the error\nImportant idea:\nEach catch block handles a specific type of exception.",
        points: [
          "Handles exceptions from try block",
          "Executes only when exception occurs",
          "Can have multiple catch blocks",
          "Receives exception object"
        ]
      },
      {
        heading: "What is a finally Block?",
        content: "The finally block is used to execute important code that must run whether an exception occurs or not. It is commonly used for cleanup operations such as closing files, releasing resources, or database connections. Even if an exception is not thrown, or even if it is caught, the finally block will always execute (except in rare cases like system shutdown).\nIn simple terms:\nfinally = Always runs\nImportant idea:\nUsed for cleanup tasks.",
        points: [
          "Always executes",
          "Runs after try/catch",
          "Used for cleanup operations",
          "Optional block"
        ]
      },
      {
        heading: "How try-catch-finally Work Together",
        content: "The try, catch, and finally blocks work together to ensure smooth program execution. First, the code inside the try block is executed. If no exception occurs, the catch block is skipped, and the finally block is executed. If an exception occurs, the control immediately moves to the matching catch block, executes it, and then the finally block runs.\nFlow:\ntry → executes\nException? → go to catch\nfinally → always executes",
        points: [
          "try runs first",
          "catch runs only if exception occurs",
          "finally always runs",
          "Ensures safe execution"
        ]
      },
      {
        heading: "Multiple catch Blocks",
        content: "Java allows multiple catch blocks to handle different types of exceptions. This helps in handling each error differently based on its type.\nImportant rule:\nSpecific exception → first\nGeneral exception → last",
        points: [
          "Handles different exceptions separately",
          "Improves clarity",
          "Order matters"
        ]
      },
      {
        heading: "Nested try-catch Blocks",
        content: "A try block can be placed inside another try block. This is called a nested try-catch. It is useful when different parts of code require separate handling.",
        points: [
          "try inside another try",
          "Handles complex situations",
          "Provides detailed control"
        ]
      },
      {
        heading: "Important Rules of try-catch-finally",
        points: [
          "try must be followed by catch or finally",
          "Multiple catch blocks allowed",
          "finally block is optional but useful",
          "Order must be correct",
          "Cannot write code between try and catch"
        ]
      }
    ],
    code: "try {\n  int data = 50 / 0;\n} catch (ArithmeticException e) {\n  System.out.println(e);\n} finally {\n  System.out.println(\"Finally block executed\");\n}"
  },
  "throw/throws Keywords": {
    description: "The throw keyword in Java is used to explicitly create and throw an exception object during program execution, while the throws keyword delegates exception handling to the calling method.",
    keyPoints: [
      "throw interrupts normal flow and transfers control to the exception handler.",
      "throw works with exception objects only and can be used anywhere in code.",
      "throws is used in method declarations to specify potential exceptions.",
      "throws separates error-handling logic from business logic."
    ],
    sections: [
      {
        heading: "What is throw?",
        content: "Normally, exceptions are generated automatically by the JVM when an error occurs, but with throw, the programmer can manually trigger an exception whenever a specific condition is violated. This is especially useful for validating inputs and enforcing business rules in applications.",
        points: [
          "Simple idea: You create and send the error",
          "Example situation: If a user enters a negative amount, you throw an exception."
        ]
      },
      {
        heading: "How throw Works Internally",
        content: "When the throw statement is executed, Java immediately stops the normal execution flow of the program. It then searches for a matching catch block to handle the exception. If a suitable handler is found, it executes that block; otherwise, the program terminates and shows an error message.",
        points: [
          "Condition fails",
          "throw executes",
          "Control jumps to catch",
          "If no catch program crashes"
        ]
      },
      {
        heading: "Syntax of throw",
        content: "throw new ExceptionType(\"Error Message\");",
        points: [
          "new keyword is mandatory",
          "Must create an exception object"
        ]
      },
      {
        heading: "Using throw for Validation",
        content: "One of the most important uses of throw is input validation. It ensures that incorrect data is not accepted.\nExample: The program itself checks a condition and throws an exception."
      },
      {
        heading: "Checked vs Unchecked with throw",
        content: "When using throw, the type of exception matters:",
        points: [
          "If you throw a checked exception, you must handle it or declare it using throws.",
          "If you throw an unchecked exception, no need to declare or handle (optional)."
        ]
      },
      {
        heading: "Important Rules of throw",
        points: [
          "Only one exception can be thrown at a time",
          "Must be followed by an object",
          "Can throw both built-in and custom exceptions",
          "Stops execution immediately after execution"
        ]
      },
      {
        heading: "throws Keyword",
        content: "The throws keyword in Java is used in a method declaration to specify that the method may produce one or more exceptions. Instead of handling the exception inside the method, it delegates the responsibility of handling to the calling method. This helps in separating error-handling logic from business logic.",
        points: [
          "Simple idea: I might cause an error, you handle it"
        ]
      },
      {
        heading: "How throws Works Internally",
        content: "When a method declares throws, it does not handle the exception itself. Instead, it passes the exception up the call stack. The calling method must either handle it using try-catch or further declare it using throws.",
        points: [
          "Method declares throws",
          "Exception occurs inside method",
          "Passed to caller",
          "Caller handles it"
        ]
      },
      {
        heading: "Key Points of throws",
        points: [
          "Does not stop execution",
          "Only declares exception",
          "Used mainly with checked exceptions",
          "Improves code modularity"
        ]
      },
      {
        heading: "Syntax of throws",
        content: "returnType methodName() throws ExceptionType {\n    // code\n}"
      },
      {
        heading: "Example of throws (Step-by-Step Flow)",
        content: "1. readData() declares throws IOException.\n2. Exception occurs, passed to main().\n3. main() handles it."
      },
      {
        heading: "Multiple Exceptions with throws",
        content: "A method can declare multiple exceptions separated by commas.\nExample: void test() throws IOException, SQLException { ... }",
        points: [
          "Multiple exceptions allowed",
          "Separated by comma",
          "Improves clarity"
        ]
      },
      {
        heading: "When to Use throws",
        points: [
          "You don't want to handle the exception in the current method",
          "You want the caller to handle it",
          "Working with checked exceptions"
        ]
      }
    ],
    code: "import java.io.*;\n\nclass Demo {\n    // Using throws to delegate exception handling\n    static void readData() throws IOException {\n        FileReader file = new FileReader(\"test.txt\");\n    }\n\n    public static void main(String[] args) {\n        // Using throw for validation\n        int amount = -500;\n        if (amount < 0) {\n            throw new IllegalArgumentException(\"Amount cannot be negative\");\n        }\n\n        // Handling the delegated exception from readData()\n        try {\n            readData();\n        } catch (IOException e) {\n            System.out.println(\"File not found\");\n        }\n    }\n}"
  },
  "Custom Exceptions": {
    description: "A custom exception in Java is a user-defined exception created by the programmer to represent specific error conditions that are not covered by Java's built-in exceptions.",
    keyPoints: [
      "Created by the programmer to represent specific conditions.",
      "Improves clarity of errors and makes messages meaningful.",
      "Extends existing exception classes (Exception or RuntimeException).",
      "Helps deeply in debugging and business logic validation."
    ],
    sections: [
      {
        heading: "What is a Custom Exception?",
        content: "While Java provides many predefined exceptions like ArithmeticException or NullPointerException, sometimes applications require more meaningful and domain-specific error handling. In such cases, developers create their own exception classes to clearly describe the problem.\n\nIn simple terms: Custom Exception = Your own defined error.",
        points: [
          "Example: InvalidAgeException",
          "Example: InsufficientBalanceException"
        ]
      },
      {
        heading: "Why Custom Exceptions are Needed",
        content: "In real-world applications, built-in exceptions are often too general and do not clearly explain the actual problem. Custom exceptions allow developers to define meaningful error messages and handle business logic more effectively. They make code more readable, easier to debug, and user-friendly.\n\nExample:\nInstead of showing 'Error occurred', we show 'Age must be above 18'."
      },
      {
        heading: "Types of Custom Exceptions",
        content: "Custom exceptions can be broadly classified into two types based on the class they extend:\n\n1. Checked Custom Exceptions\nThese exceptions extend the Exception class and are checked at compile time. The programmer must handle them using try-catch or declare them using throws. Use when the error must be handled strictly according to important application rules.\n\n2. Unchecked Custom Exceptions\nThese exceptions extend the RuntimeException class and occur at runtime. They are not mandatory to handle. Use when the error is due to a programming mistake or when optional handling is acceptable.",
        points: [
          "Checked: Extends Exception, checked at compile time, mandatory to handle.",
          "Unchecked: Extends RuntimeException, checked at runtime, optional to handle."
        ]
      },
      {
        heading: "How to Create a Custom Exception",
        content: "To create a custom exception, we define a class that extends either Exception or RuntimeException. We usually create a constructor to pass a custom error message using super(message) to pass it to the parent class.",
        points: [
          "Create a new class",
          "Extend Exception or RuntimeException",
          "Define a constructor accepting a String message"
        ]
      },
      {
        heading: "How to Use Custom Exception",
        content: "Once the custom exception is created, it can be used with the throw keyword to raise the exception when a condition fails. The calling method will handle it using try-catch blocks or declare it using throws."
      },
      {
        heading: "How Custom Exception Works (Flow Explanation)",
        points: [
          "Condition fails (e.g., age < 18)",
          "throw creates the custom exception object",
          "Method declares it using throws (if checked)",
          "Control moves to the caller",
          "catch block handles it (or program stops if not handled)"
        ]
      },
      {
        heading: "Advantages of Custom Exceptions",
        points: [
          "Improves code readability",
          "Makes error messages extremely clear",
          "Drastically helps during debugging",
          "Supports clean code and Domain-Driven Design",
          "Highly useful in real-world enterprise applications"
        ]
      },
      {
        heading: "Best Practices",
        points: [
          "Use meaningful names (e.g., InvalidAgeException)",
          "Provide clear, actionable messages",
          "Extend the correct class (Exception vs RuntimeException)",
          "Avoid overuse",
          "Follow standard Java naming conventions"
        ]
      },
      {
        heading: "Real-Time Example",
        content: "Consider a banking system:\nIf balance < withdrawal amount, the code throws InsufficientBalanceException.\nThis clearly tells the precise problem instead of a generic overall error. This improves user experience and system clarity."
      }
    ],
    code: "class InvalidAgeException extends Exception {\n    InvalidAgeException(String message) {\n        // Passes message to parent Exception class\n        super(message);\n    }\n}\n\nclass InvalidAmountException extends RuntimeException {\n    InvalidAmountException(String msg) {\n        super(msg);\n    }\n}\n\nclass Test {\n    static void checkAge(int age) throws InvalidAgeException {\n        if (age < 18) {\n            throw new InvalidAgeException(\"Age must be 18 or above\");\n        } else {\n            System.out.println(\"Valid age\");\n        }\n    }\n\n    public static void main(String[] args) {\n        // Example 1: Handled Checked Exception\n        try {\n            checkAge(15);\n        } catch (InvalidAgeException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n\n        // Example 2: Unchecked Exception (Optional Handling)\n        double amount = -50;\n        if (amount < 0) {\n            throw new InvalidAmountException(\"Amount cannot be negative\");\n        }\n    }\n}"
  },

  // Default Package Features - java.lang
  "The java.lang Overview": {
    description: "The java.lang package is one of the core and most fundamental packages in Java. It provides essential classes and interfaces that are required for basic programming.",
    keyPoints: [
      "Automatically imported in every Java program.",
      "Contains core classes like String, System, Math, and Object.",
      "Provides essential functionalities like string handling, input/output, and mathematical operations.",
      "No need for manual import statements."
    ],
    sections: [
      {
        heading: "What is the java.lang Package?",
        content: "The java.lang package is the default package in Java containing basic features. It provides the building blocks required for Java programming. Without it, even simple programs cannot run.",
        points: [
          "Default package with basic Java features",
          "Example: Classes like String, System, Math come from this package."
        ]
      },
      {
        heading: "Importance of java.lang Package",
        content: "The java.lang package is important because it provides the basic building blocks required for Java programming. It includes essential functionalities like string handling, input/output, and mathematical operations.",
        points: [
          "Provides fundamental classes",
          "Used in all programs",
          "Simplifies development",
          "Essential for Java execution"
        ]
      },
      {
        heading: "Object Class",
        content: "The Object class is the root class of the entire Java class hierarchy. Every class in Java automatically extends this class, either directly or indirectly. It provides common methods that are available to all objects, such as toString() (for string representation), equals() (for comparison), and hashCode() (for hashing). This class forms the base for all Java objects and ensures consistency across the system.",
        points: [
          "Parent of all classes (All classes → child of Object)",
          "Provides common methods",
          "Supports inheritance",
          "Base of Java object model"
        ]
      },
      {
        heading: "String Class",
        content: "The String class is used to represent sequences of characters (text). Strings in Java are immutable, meaning once created, their value cannot be changed. Any modification results in a new object. This immutability improves security and performance.",
        points: [
          "Immutable",
          "Stores text data",
          "Widely used",
          "Stored in string pool"
        ]
      },
      {
        heading: "StringBuilder Class",
        content: "StringBuilder is used for mutable string operations, meaning you can modify the same object without creating new ones. It is faster than String when performing multiple modifications.",
        points: [
          "Mutable",
          "Faster than String",
          "Not thread-safe",
          "Used for performance"
        ]
      },
      {
        heading: "StringBuffer Class",
        content: "StringBuffer is similar to StringBuilder but is thread-safe, meaning it can be used in multi-threaded environments safely. However, it is slower than StringBuilder.",
        points: [
          "Mutable",
          "Thread-safe",
          "Slower than StringBuilder",
          "Used in multithreading"
        ]
      },
      {
        heading: "System Class",
        content: "The System class provides access to system resources such as input, output, and environment variables. It contains static members like System.out, System.in, and System.err.",
        points: [
          "Used for input/output",
          "Provides system-level operations",
          "Contains static methods"
        ]
      },
      {
        heading: "Math Class",
        content: "The Math class provides mathematical functions such as square root, power, rounding, and random numbers. All methods in this class are static, so no object creation is required.",
        points: [
          "Static methods",
          "Used for calculations",
          "No object needed"
        ]
      },
      {
        heading: "Wrapper Classes",
        content: "Wrapper classes are used to convert primitive data types into objects. They are useful when working with collections or object-based APIs.\n\nExamples: int → Integer, double → Double, char → Character.",
        points: [
          "Convert primitives to objects",
          "Support autoboxing/unboxing",
          "Used in collections"
        ]
      },
      {
        heading: "Exception Class",
        content: "The Exception class is the base class for all checked exceptions. It is used to handle errors during runtime using exception handling mechanisms like try-catch.",
        points: [
          "Base for checked exceptions",
          "Used in error handling",
          "Subclass of Throwable"
        ]
      },
      {
        heading: "RuntimeException Class",
        content: "RuntimeException is a subclass of Exception and represents unchecked exceptions. These occur due to programming errors and are not checked at compile time.",
        points: [
          "Unchecked exceptions",
          "Occur at runtime",
          "Optional to handle"
        ]
      },
      {
        heading: "Thread Class",
        content: "The Thread class is used for multithreading, allowing multiple parts of a program to run simultaneously. It helps improve performance and efficiency.",
        points: [
          "Used for concurrent execution",
          "Supports multithreading",
          "Improves performance"
        ]
      },
      {
        heading: "Runnable Interface",
        content: "The Runnable interface is used to define a thread's task. It contains a single method run() and is commonly used to create threads.",
        points: [
          "Functional interface",
          "Used in threading",
          "Better design than extending Thread"
        ]
      },
      {
        heading: "Class Class",
        content: "The Class class provides runtime information about classes and objects. It is used in reflection to inspect and manipulate classes dynamically.",
        points: [
          "Provides metadata",
          "Used in reflection",
          "Supports dynamic programming"
        ]
      },
      {
        heading: "Enum Class",
        content: "The Enum class is used to define fixed sets of constants. It provides type safety and better readability.",
        points: [
          "Represents constants",
          "Type-safe",
          "Improves code clarity"
        ]
      },
      {
        heading: "Process & Void Classes",
        content: "The Process class is used to execute external programs and interact with system processes. The Void class is a special class used to represent the void return type in reflection.",
        points: [
          "Process: Executes OS processes, used in advanced applications",
          "Void: Represents no return value, used in reflection"
        ]
      }
    ],
    code: "public class LangPackageDemo {\n    public static void main(String[] args) {\n        // String and StringBuilder\n        String name = \"Java\";\n        StringBuilder sb = new StringBuilder(\"Hello \");\n        sb.append(name);\n        System.out.println(sb.toString());\n\n        // Math Class\n        System.out.println(\"Square root of 16 is: \" + Math.sqrt(16));\n        System.out.println(\"2 to the power of 3 is: \" + Math.pow(2, 3));\n\n        // Wrapper Class and Object Class\n        Integer num = 10;\n        Object obj = num;\n        System.out.println(\"Object string representation: \" + obj.toString());\n\n        // Enum Class\n        enum Day { MONDAY, TUESDAY }\n        System.out.println(\"Enum constant: \" + Day.MONDAY);\n    }\n}"
  },
  "The Object Class": {
    description: "The Object class in Java is the root (top-most) class of the entire Java class hierarchy. All Java objects have access to the methods defined in this class.",
    keyPoints: [
      "Root class of Java, automatically inherited by all classes.",
      "Provides common methods essential for object manipulation.",
      "Ensures a unified object model across Java.",
      "Supports polymorphism and enables code reuse."
    ],
    sections: [
      {
        heading: "What is the Object Class?",
        content: "Every class in Java automatically inherits from the Object class, either directly or indirectly. It provides a set of fundamental methods that are essential for object manipulation, comparison, and representation.\n\nIn simple terms: Object = Parent of all classes. Every object in Java → is an Object.",
        points: [
          "Root class of Java",
          "Automatically inherited",
          "Provides common methods",
          "Base of OOP in Java"
        ]
      },
      {
        heading: "Why Object Class is Important",
        content: "The Object class is important because it ensures common behavior across all objects in Java. It allows different classes to share basic functionalities like comparison, cloning, and string representation. Without this class, Java would not have a unified object model.",
        points: [
          "Provides standard methods",
          "Supports polymorphism",
          "Enables code reuse",
          "Essential for Java structure"
        ]
      },
      {
        heading: "toString() Method",
        content: "The toString() method is used to convert an object into a string representation (Object → String format). By default, it returns the class name followed by the hashcode, but it can be overridden to provide meaningful output.",
        points: [
          "Converts object to string",
          "Can be overridden",
          "Used for printing"
        ]
      },
      {
        heading: "equals() Method",
        content: "The equals() method is used to compare two objects. By default, it compares memory addresses (reference comparison), but it can be overridden to compare actual values.",
        points: [
          "Compares objects",
          "Default → reference comparison",
          "Can override for value comparison"
        ]
      },
      {
        heading: "hashCode() Method",
        content: "The hashCode() method returns a unique integer value (hash code) for an object. It is used in hashing-based collections like HashMap.\n\nImportant rule: If two objects are equal → their hashCode must be the same.",
        points: [
          "Returns integer value",
          "Used in hashing",
          "Works with equals()"
        ]
      },
      {
        heading: "clone() Method",
        content: "The clone() method is used to create a copy of an object. It creates a duplicate object with the same values.",
        points: [
          "Creates duplicate object",
          "Requires Cloneable interface",
          "Used in object copying"
        ]
      },
      {
        heading: "getClass() Method",
        content: "The getClass() method returns the runtime class information of an object. It is used in reflection to know an object's type at runtime.",
        points: [
          "Returns class info",
          "Used in reflection",
          "Helps dynamic programming"
        ]
      },
      {
        heading: "finalize() Method",
        content: "The finalize() method is called by the garbage collector before destroying an object. It is used for cleanup activities, but it is rarely used in modern Java.",
        points: [
          "Called before object destruction",
          "Used for cleanup",
          "Not recommended in modern Java"
        ]
      },
      {
        heading: "Thread Communication Methods",
        content: "The methods wait(), notify(), and notifyAll() are used for thread communication in multithreading. They allow threads to coordinate with each other safely.",
        points: [
          "Used in synchronization",
          "wait() → pauses thread",
          "notify() → wakes one thread",
          "notifyAll() → wakes all threads"
        ]
      },
      {
        heading: "Default Behavior of Object Class",
        content: "If we do not override methods like toString() or equals(), Java uses the default implementation from the Object class.\n\nExample Output of default toString(): `Test@15db9742`"
      },
      {
        heading: "Advantages of Object Class",
        points: [
          "Provides common functionality",
          "Supports polymorphism",
          "Enables method overriding",
          "Simplifies Java design",
          "Improves reusability"
        ]
      }
    ],
    code: "class Student {\n    String name = \"Haritha\";\n\n    // Overriding toString()\n    public String toString() {\n        return name;\n    }\n}\n\npublic class ObjectDemo {\n    public static void main(String[] args) {\n        // toString() example\n        Student s = new Student();\n        System.out.println(\"toString(): \" + s); // Calls overridden toString()\n\n        // equals() example\n        String a = \"Hello\";\n        String b = \"Hello\";\n        System.out.println(\"equals(): \" + a.equals(b)); // true\n\n        // hashCode() example\n        System.out.println(\"hashCode(): \" + \"Hello\".hashCode());\n\n        // getClass() example\n        String str = \"Java\";\n        System.out.println(\"getClass(): \" + str.getClass());\n    }\n}"
  },
  "Wrapper Classes": {
    description: "Wrapper classes in Java are used to convert primitive data types into objects. Each primitive type has a corresponding wrapper class in the java.lang package.",
    keyPoints: [
      "Converts primitive to object.",
      "Belongs to the java.lang package.",
      "Required for using object-based features like collections.",
      "Supports object-based operations and utilities."
    ],
    sections: [
      {
        heading: "What are Wrapper Classes?",
        content: "Java is an object-oriented language, but primitive types like int, char, and double are not objects. To use these primitives in object-based features such as collections (ArrayList, HashMap), Java provides wrapper classes.\n\nIn simple terms: Wrapper Class translates Primitive → Object.\nExample: int → Integer, double → Double",
        points: [
          "Converts primitive to object",
          "Belongs to java.lang package",
          "Required for collections",
          "Supports object-based operations"
        ]
      },
      {
        heading: "Why Wrapper Classes are Needed",
        content: "Wrapper classes are important because many Java features work only with objects, not primitives. For example, the Java Collections Framework stores only objects. Wrapper classes also provide utility methods for conversion, parsing, and comparison.\n\nWithout wrapper classes, you cannot use primitives in collections, which limits functionality.",
        points: [
          "Required for collections (ArrayList, etc.)",
          "Provides utility methods",
          "Supports object manipulation",
          "Enables advanced operations"
        ]
      },
      {
        heading: "List of Primitive Types and Wrapper Classes",
        content: "int → Integer\nfloat → Float\ndouble → Double\nchar → Character\nbyte → Byte\nshort → Short\nlong → Long\nboolean → Boolean",
        points: [
          "Each primitive has one wrapper class",
          "Naming convention: Capitalized",
          "Located in java.lang"
        ]
      },
      {
        heading: "Autoboxing (Primitive → Object)",
        content: "Autoboxing is the process of automatically converting a primitive type into its corresponding wrapper object. Java performs this conversion automatically, so no manual coding is required.",
        points: [
          "Automatic conversion",
          "No need to use the 'new' keyword",
          "Simplifies coding"
        ]
      },
      {
        heading: "Unboxing (Object → Primitive)",
        content: "Unboxing is the reverse process of autoboxing, where a wrapper object is converted back into a primitive type automatically.",
        points: [
          "Automatic conversion",
          "Improves performance",
          "Reduces manual work"
        ]
      },
      {
        heading: "Utility Methods in Wrapper Classes",
        content: "Wrapper classes provide several useful methods for performing operations like conversion, comparison, and parsing.\n\n1. parse Methods: Used to convert strings into primitive types.\n2. valueOf() Method: Converts primitive or string into a wrapper object.\n3. toString() Method: Converts primitive or object into a string.\n4. compareTo() Method: Used to compare two wrapper objects.",
        points: [
          "parse Methods (e.g., Integer.parseInt())",
          "valueOf() Method",
          "toString() Method",
          "compareTo() Method"
        ]
      },
      {
        heading: "Advantages of Wrapper Classes",
        points: [
          "Enables use of primitives in collections",
          "Provides utility methods",
          "Supports object-oriented features",
          "Simplifies data handling",
          "Improves code flexibility"
        ]
      }
    ],
    code: "public class WrapperDemo {\n    public static void main(String[] args) {\n        // Autoboxing: Primitive to Object\n        int a = 10;\n        Integer obj = a; // Automatic conversion\n\n        // Unboxing: Object to Primitive\n        Integer obj2 = 20;\n        int b = obj2; // Automatic conversion\n\n        // Utility Methods\n        int num = Integer.parseInt(\"100\");\n        Integer val = Integer.valueOf(50);\n        String s = Integer.toString(10);\n\n        // Comparison\n        Integer x = 10;\n        Integer y = 20;\n        System.out.println(\"Comparison (10 vs 20): \" + x.compareTo(y)); // Output: -1\n    }\n}"
  },
  "System Class": {
    description: "The System class in Java is a final class present in the java.lang package that provides access to system-level resources and utilities. It is widely used for input/output operations, accessing environment variables, and handling system properties.",
    keyPoints: [
      "Final class (cannot be inherited).",
      "Part of the java.lang package.",
      "Provides system-level features.",
      "Automatically available without manual import."
    ],
    sections: [
      {
        heading: "What is the System Class?",
        content: "The System class acts as a bridge between the Java program and the OS. Since it belongs to java.lang, it is automatically available in every Java program.\n\nExample:\nSystem.out.println() → prints output to the console.",
        points: [
          "Bridge between Java program and OS",
          "Used in every Java program",
          "Handles system-level operations"
        ]
      },
      {
        heading: "Why System Class is Important",
        content: "The System class is essential because it allows Java programs to interact with the operating system. It provides features like reading input, printing output, accessing system properties, and managing memory or program execution. Without this class, performing basic operations like displaying output would be difficult.",
        points: [
          "Enables input/output operations",
          "Provides system information",
          "Controls execution",
          "Used in every Java program"
        ]
      },
      {
        heading: "System.out (Standard Output)",
        content: "System.out is a static object of the PrintStream class used to display output on the console. It is most commonly used with methods like println(), print(), and printf().",
        points: [
          "Used for displaying output",
          "Static member",
          "Most commonly used"
        ]
      },
      {
        heading: "System.in (Standard Input)",
        content: "System.in is used to take input from the keyboard. It is an object of the InputStream class. Usually, it is combined with the Scanner class for easy input handling.",
        points: [
          "Used for keyboard input",
          "Works with Scanner class",
          "Reads data from the user"
        ]
      },
      {
        heading: "System.err (Error Output)",
        content: "System.err is used to display error messages. It is similar to System.out but is specifically used to highlight error outputs often in red text depending on the console.",
        points: [
          "Used for error messages",
          "Helps debugging",
          "Separate output stream"
        ]
      },
      {
        heading: "currentTimeMillis() Method",
        content: "This method returns the current time in milliseconds since January 1, 1970. It is heavily used for measuring time and performance.",
        points: [
          "Returns time in milliseconds",
          "Used for performance testing",
          "Static method"
        ]
      },
      {
        heading: "exit() Method",
        content: "The exit() method is used to terminate the program immediately. It stops the JVM execution.\n\nExample: System.exit(0);",
        points: [
          "Stops program execution",
          "0 → normal termination",
          "Non-zero → abnormal termination"
        ]
      },
      {
        heading: "gc() Method",
        content: "The gc() method is used to request garbage collection, which removes unused objects from memory. Note that execution of the garbage collector is not guaranteed immediately.\n\nExample: System.gc();",
        points: [
          "Calls garbage collector",
          "Frees memory",
          "Execution not guaranteed immediately"
        ]
      },
      {
        heading: "getProperty() & setProperty() Methods",
        content: "getProperty() is used to get system properties such as OS name, Java version, etc. setProperty() is used to modify system properties dynamically.\n\nExample: System.getProperty(\"os.name\");",
        points: [
          "Retrieves system information",
          "Useful for environment details",
          "Works with key-value pairs"
        ]
      },
      {
        heading: "arraycopy() Method",
        content: "The arraycopy() method is used to copy elements from one array to another extremely efficiently.",
        points: [
          "Faster than standard loops",
          "Used for array operations",
          "Highly efficient copying"
        ]
      },
      {
        heading: "Characteristics of System Class",
        points: [
          "Final class (cannot extend)",
          "All members are static",
          "No object creation required",
          "Provides system-level OS access"
        ]
      },
      {
        heading: "Real-Time Usage",
        content: "In almost every program, the System class is used.\n\nOutput → System.out.println()\nInput → System.in\nError → System.err",
        points: [
          "Login system: prints messages, takes input, handles errors"
        ]
      }
    ],
    code: "import java.util.Scanner;\n\npublic class SystemDemo {\n    public static void main(String[] args) {\n        // System.out and System.err\n        System.out.println(\"Standard Output: Program started.\");\n        System.err.println(\"Standard Error: No actual error, just testing System.err!\");\n\n        // System.currentTimeMillis()\n        long startTime = System.currentTimeMillis();\n\n        // System.getProperty()\n        System.out.println(\"OS Name: \" + System.getProperty(\"os.name\"));\n\n        // System.arraycopy()\n        int[] a = {1, 2, 3, 4, 5};\n        int[] b = new int[5];\n        System.arraycopy(a, 0, b, 0, 5);\n        System.out.println(\"Copied Array: \" + java.util.Arrays.toString(b));\n\n        // Performance metric\n        long endTime = System.currentTimeMillis();\n        System.out.println(\"Time taken: \" + (endTime - startTime) + \" ms\");\n\n        // System.in with Scanner\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter your name: \");\n        String name = sc.nextLine();\n        System.out.println(\"Hello, \" + name);\n    }\n}"
  },
  "Math Class": {
    description: "The Math class in Java is a built-in utility class used to perform various mathematical operations such as arithmetic calculations, trigonometry, logarithms, and rounding. It belongs to the java.lang package.",
    keyPoints: [
      "No object creation is required because all methods are static.",
      "Provides highly accurate mathematical calculations.",
      "Automatically available without importing (part of java.lang).",
      "Widely used in scientific, financial, and real-time applications."
    ],
    sections: [
      {
        heading: "Overview of Math Class",
        content: "The Math class is essentially a collection of static methods and constants. Since the class is declared as final, it cannot be inherited. Its methods are accessed directly using the class name (e.g., Math.methodName(parameters)). This makes the Math class simple, efficient, and very powerful.",
        points: [
          "Syntax: Math.methodName(parameters)"
        ]
      },
      {
        heading: "Absolute Value - Math.abs()",
        content: "The Math.abs() method returns the absolute (positive) value of a given number. It is extremely useful when you only need the magnitude of a value regardless of its sign. It supports multiple data types such as int, float, double, and long.",
        points: [
          "Syntax: Math.abs(value)",
          "Removes the negative sign",
          "Used in distance and difference calculations"
        ]
      },
      {
        heading: "Maximum and Minimum - Math.max() and Math.min()",
        content: "The Math.max() method returns the largest of two values, while Math.min() returns the smallest. These methods simplify comparison operations and avoid writing complex if-else conditional statements.",
        points: [
          "Syntax: Math.max(a, b) and Math.min(a, b)",
          "Greatly reduces the need for if-else blocks",
          "Works with all continuous numeric data types"
        ]
      },
      {
        heading: "Power and Square Root - Math.pow() and Math.sqrt()",
        content: "The Math.pow() method is used to raise a base number to a specified exponent, while Math.sqrt() efficiently calculates the square root of a number. The result is always returned as a double value.",
        points: [
          "Syntax: Math.pow(base, exponent) and Math.sqrt(number)",
          "Returns a double type",
          "Essential in scientific programs and geometry"
        ]
      },
      {
        heading: "Rounding Methods - round(), ceil(), floor()",
        content: "The Math class provides specific methods for rounding decimal numbers:\n- round() to the absolute nearest integer\n- ceil() to always round upward\n- floor() to always round downward\n\nThese methods are heavily used in financial calculations, billing systems, and UI display formatting.",
        points: [
          "Math.round(value) → nearest value",
          "Math.ceil(value) → highest next value",
          "Math.floor(value) → lowest previous value"
        ]
      },
      {
        heading: "Random Numbers - Math.random()",
        content: "The Math.random() method generates a random decimal number between 0.0 (inclusive) and 1.0 (exclusive). By multiplying the result, you can generate random numbers within a specific range.\n\nExample: int num = (int)(Math.random() * 100);",
        points: [
          "Syntax: Math.random()",
          "Range: 0.0 to 1.0",
          "Widely used for random generation and game logic"
        ]
      },
      {
        heading: "Trigonometric Methods - sin(), cos(), tan()",
        content: "The Math class includes standard trigonometric methods which calculate angles and relationships in triangles. These methods take input exclusively in radians, so degree values must be converted using Math.toRadians().",
        points: [
          "Syntax: Math.sin(angle), Math.cos(angle), Math.tan(angle)",
          "Input MUST be in radians",
          "Used heavily in graphics and physics simulations"
        ]
      },
      {
        heading: "Logarithmic Methods - log() and log10()",
        content: "The Math.log() method calculates the natural logarithm (base e) of a given value, while Math.log10() calculates the base 10 logarithms. These are important algorithms in data science, predictive tracking, and statistics.",
        points: [
          "Syntax: Math.log(value) and Math.log10(value)",
          "Crucial in growth and decay problems",
          "Used heavily in data science and analytics"
        ]
      },
      {
        heading: "Angle Conversion - toRadians() and toDegrees()",
        content: "Used to convert angle values natively between degrees and radians. Since all trigonometric functions mathematically use radians, these conversions are absolutely essential.",
        points: [
          "Syntax: Math.toRadians(degree) and Math.toDegrees(radian)",
          "Converts angles rapidly",
          "Improves functional accuracy"
        ]
      },
      {
        heading: "Advanced Methods - cbrt(), hypot(), signum()",
        content: "The Math class also helps perform specialized calculations directly.\n- cbrt(): Finds the cube root\n- hypot(): Calculates the hypotenuse equation without dangerous intermediate overflow\n- signum(): Identifies whether a number is positive, negative, or precisely zero",
        points: [
          "Syntax: Math.cbrt(value), Math.hypot(x, y), Math.signum(value)",
          "Helpful for geometry and specialized calculus equivalents"
        ]
      },
      {
        heading: "Constants - PI and E",
        content: "The Math class provides high-precision mathematical constants mathematically represented as Math.PI and Math.E. These constants guarantee ultimate accuracy inside analytical formulas instead of manually typing approximate values (like 3.14).",
        points: [
          "Syntax: Math.PI and Math.E",
          "High precision final constants",
          "Avoids manual typing errors"
        ]
      }
    ],
    code: "public class MathDemo {\n    public static void main(String[] args) {\n        // Basic Operations\n        System.out.println(\"Absolute Value: \" + Math.abs(-25)); // 25\n        System.out.println(\"Maximum: \" + Math.max(10, 20)); // 20\n        System.out.println(\"Minimum: \" + Math.min(10, 20)); // 10\n\n        // Power and Roots\n        System.out.println(\"Power: \" + Math.pow(2, 3)); // 8.0\n        System.out.println(\"Square Root: \" + Math.sqrt(16)); // 4.0\n        System.out.println(\"Cube Root: \" + Math.cbrt(27)); // 3.0\n\n        // Rounding\n        System.out.println(\"Round: \" + Math.round(5.6)); // 6\n        System.out.println(\"Ceil: \" + Math.ceil(5.1)); // 6.0\n        System.out.println(\"Floor: \" + Math.floor(5.9)); // 5.0\n\n        // Trigonometry using Constants\n        double radians = Math.toRadians(90);\n        System.out.println(\"Sine of 90 degrees: \" + Math.sin(radians)); // 1.0\n\n        // Random Number (0 - 100)\n        int randomNum = (int)(Math.random() * 101);\n        System.out.println(\"Random Number: \" + randomNum);\n    }\n}"
  },
  "String & String Buffer": {
    description: "The String class represents an immutable sequence of characters, while StringBuffer provides a mutable, thread-safe alternative for efficient string manipulation.",
    keyPoints: [
      "String: Immutable sequence of characters. Belongs to java.lang.",
      "String Immutability: Value cannot be changed; modifications create new objects.",
      "StringBuffer: Mutable sequence of characters. Automatically adjusts capacity.",
      "StringBuffer Mutability: Thread-safe and modifies the same object directly."
    ],
    sections: [
      {
        heading: "Overview of String Class",
        content: "The String class in Java represents a sequence of characters and is one of the most widely used classes in programming. It belongs to the java.lang package, so it is automatically available without importing. A key feature of the String class is that it is immutable, meaning once a string object is created, its value cannot be changed. If any modification is performed, Java creates a new string object instead of modifying the existing one. This immutability improves security, memory efficiency (through the String Constant Pool), and thread safety.",
        points: [
          "Syntax: String str = \"Hello\";",
          "String Immutability: Values cannot be changed after creation, creating safety in multi-threaded environments"
        ]
      },
      {
        heading: "Essential String Methods (Part 1)",
        content: "Common methods used to inspect strings:\n\n1. length(): Finds the total number of characters present in a string.\n2. charAt(int index): Returns the character located at a specific 0-based index.\n3. toUpperCase() & toLowerCase(): Returns a new string with all converted characters, leaving the original intact.\n4. equals(): Compares two strings based on their exact values and sequence.\n5. equalsIgnoreCase(): Compares two strings while ignoring uppercase/lowercase differences.",
        points: [
          "s.length(); // e.g., returns 4 for 'Java'",
          "s.charAt(2); // e.g., returns 'v' for 'Java'",
          "s.equals(s2); // checks exact value equality"
        ]
      },
      {
        heading: "Essential String Methods (Part 2)",
        content: "Methods used for manipulation and searching:\n\n6. substring(start, end): Extracts a part of a string based on index positions. Ending index is exclusive.\n7. concat(): Joins two strings together into a single string.\n8. contains(): Checks whether a string contains a specified sequence of characters.\n9. replace('a','o'): Replaces characters or substrings with new values.\n10. trim(): Removes unwanted spaces from the beginning and end.\n11. isEmpty(): Checks whether a string is empty (length 0).\n12. indexOf('a'): Returns the position of the first occurrence of a character or substring (-1 if not found).",
        points: [
          "s.substring(1,3); // extracts specific portion",
          "s.concat(\" Programming\"); // joins strings",
          "s.trim(); // removes bounding whitespace"
        ]
      },
      {
        heading: "Overview of StringBuffer",
        content: "The StringBuffer class is used to create mutable strings, meaning the content of the string can be changed without creating new computational objects. It is also part of the java.lang package. StringBuffer is thread-safe, as its methods are synchronized, making it highly suitable for multi-threaded applications.",
        points: [
          "Syntax: StringBuffer sb = new StringBuffer(\"Hello\");",
          "Mutability: Changes are made directly to the same object, making it vastly more efficient than String when frequent modifications are required."
        ]
      },
      {
        heading: "StringBuffer Methods (Part 1)",
        content: "Key methods to interact with StringBuffer:\n\n1. append(): Adds new data to the end of the existing string. Modifies the same object to improve performance.\n2. insert(index, string): Adds data at a specific position within the string, shifting characters to accommodate.\n3. replace(start, end, string): Replaces a portion of the string between specified indexes with new text.",
        points: [
          "sb.append(\" World\"); // adds to end",
          "sb.insert(5, \" Java\"); // inserts at index",
          "sb.replace(0, 5, \"Hi\"); // replaces bounds"
        ]
      },
      {
        heading: "StringBuffer Methods (Part 2)",
        content: "Other essential StringBuffer methods:\n\n4. delete(start, end): Removes characters between given start and end indexes.\n5. reverse(): Reverses the entire string directly in memory.\n6. capacity(): Returns the current allocated memory capacity (how many characters it can hold before forcing a resize).\n7. length(): Returns the number of characters currently present.",
        points: [
          "sb.delete(0, 2); // removes chunk",
          "sb.reverse(); // reverses entire buffer",
          "sb.capacity(); // checks allocated size"
        ]
      }
    ],
    code: "public class StringDemo {\n    public static void main(String[] args) {\n        // --- STRING ---\n        String s1 = \"Java\";\n        System.out.println(\"Length: \" + s1.length()); // 4\n        System.out.println(\"Char at 2: \" + s1.charAt(2)); // v\n        System.out.println(\"Upper: \" + s1.toUpperCase()); // JAVA\n        System.out.println(\"Substring(1, 3): \" + s1.substring(1, 3)); // av\n        System.out.println(\"Concat: \" + s1.concat(\" Programming\")); // Java Programming\n        System.out.println(\"Original s1 remains unchanged: \" + s1); // Java\n\n        // --- STRING BUFFER ---\n        StringBuffer sb = new StringBuffer(\"Hello\");\n        sb.append(\" World\");\n        System.out.println(\"\\nAppended: \" + sb); // Hello World\n        sb.insert(5, \" Java\");\n        System.out.println(\"Inserted: \" + sb); // Hello Java World\n        sb.replace(0, 5, \"Hi\");\n        System.out.println(\"Replaced: \" + sb); // Hi Java World\n        sb.reverse();\n        System.out.println(\"Reversed: \" + sb);\n    }\n}"
  },

  // Java Streams - java.io
  "Streams Overview": {
    description: "In Java, a stream is a flow of data between a source and a destination. It handles data sequentially, either one byte or one character at a time.",
    keyPoints: [
      "Represents a continuous flow of data (Input → Program → Output).",
      "Used for all Input and Output (I/O) operations.",
      "Works sequentially and supports multiple data sources.",
      "A core part of Java I/O, packaged under java.io."
    ],
    sections: [
      {
        heading: "What are Streams in Java?",
        content: "A stream is used to perform I/O operations, such as reading data from a file, keyboard, or network, and writing data to a file or console.\n\nReal-life comparison: Like water flowing through a pipe → data flows through streams.",
        points: [
          "Represents flow of data",
          "Used for input and output",
          "Works sequentially",
          "Core part of Java I/O"
        ]
      },
      {
        heading: "Why Streams are Important",
        content: "Streams are important because they provide a standard way to handle data transfer in Java programs. Whether data comes from a file, user input, or network, streams allow developers to process it efficiently. They also support buffering and improve performance.",
        points: [
          "Simplifies I/O operations",
          "Works with multiple data sources",
          "Improves performance",
          "Supports large data handling"
        ]
      },
      {
        heading: "Input Stream",
        content: "Input streams are used to read data from a source such as a file, keyboard, or network. They bring data into the program.\n\nFlow: Source → Program",
        points: [
          "Reads data",
          "Used for input operations",
          "Sources: File, Keyboard, Network"
        ]
      },
      {
        heading: "Output Stream",
        content: "Output streams are used to write data to a destination such as a file or console.\n\nFlow: Program → Destination",
        points: [
          "Writes data",
          "Program → Output",
          "Used for output operations"
        ]
      },
      {
        heading: "Byte Streams",
        content: "Byte streams are used to handle binary data (8-bit bytes). They are mainly used for raw data like images, videos, or audio files. Key classes include InputStream and OutputStream.",
        points: [
          "Works with 8-bit bytes",
          "Used for binary data",
          "Supports all file types",
          "Examples: FileInputStream, FileOutputStream"
        ]
      },
      {
        heading: "Character Streams",
        content: "Character streams are used to handle text data (16-bit Unicode characters). They are mainly used for efficiently reading and writing text files. Key classes include Reader and Writer.",
        points: [
          "Works with 16-bit characters",
          "Used for text data",
          "Supports Unicode encoding",
          "Examples: FileReader, FileWriter"
        ]
      },
      {
        heading: "Buffered Streams",
        content: "Buffered streams are used to improve performance by reducing the number of I/O operations. They store data temporarily in memory (buffer) and process it in chunks instead of one byte/character at a time.",
        points: [
          "Improves performance",
          "Reduces I/O operations via temporary storage",
          "Examples: BufferedReader, BufferedWriter, BufferedInputStream"
        ]
      },
      {
        heading: "File, Data & Object Streams",
        content: "- File Streams: Read/write to files directly.\n- Data Streams: Read/write primitive data types (int, float) in a machine-independent way (DataInputStream, DataOutputStream).\n- Object Streams: Used for serialization, saving whole Java objects to a file or network (ObjectInputStream, ObjectOutputStream).",
        points: [
          "File: Standard file operations",
          "Data: Handles primitive data types",
          "Object: Supports full object serialization"
        ]
      },
      {
        heading: "Advantages of Streams",
        points: [
          "Simplifies I/O operations",
          "Supports multiple data sources",
          "Efficient data handling",
          "Improves performance with buffering",
          "Works with both binary and text data"
        ]
      }
    ],
    code: "import java.io.*;\n\npublic class StreamDemo {\n    public static void main(String[] args) {\n        try {\n            // Example 1: Output Stream (Writing data to a file)\n            FileOutputStream fos = new FileOutputStream(\"test.txt\");\n            fos.write(72); // ASCII for 'H'\n            fos.write(105); // ASCII for 'i'\n            fos.close();\n            System.out.println(\"Data successfully written to test.txt\");\n\n            // Example 2: Input Stream (Reading data from a file)\n            FileInputStream fis = new FileInputStream(\"test.txt\");\n            System.out.print(\"Reading data from test.txt: \");\n            int data;\n            while ((data = fis.read()) != -1) {\n                System.out.print((char)data);\n            }\n            fis.close();\n            System.out.println();\n\n            // Example 3: Character Stream (Reading text data)\n            BufferedReader br = new BufferedReader(new FileReader(\"test.txt\"));\n            String line = br.readLine();\n            System.out.println(\"Buffered Reader output: \" + line);\n            br.close();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}"
  },
  "Byte vs Character Streams": {
    description: "Java provides two main categorizations of streams based on the type of data they handle. Byte streams handle binary raw data, while Character streams specifically handle readable text data.",
    keyPoints: [
      "Byte streams work with 8-bit bytes and have base classes InputStream and OutputStream.",
      "Character streams work with 16-bit Unicode characters and have base classes Reader and Writer.",
      "Byte streams handle binary files like images; Character streams handle strings and text files."
    ],
    sections: [
      {
        heading: "What are Byte Streams?",
        content: "Byte streams in Java are used to handle binary data (raw data). They read and write data in the form of 8-bit bytes. These streams are extremely suitable for processing files like images, audio, videos, and other non-text files where data is not character-based. Byte streams are built upon the abstract classes InputStream and OutputStream.",
        points: [
          "In simple terms: Handles raw/binary data",
          "Example uses: Images, Audio files, PDFs",
          "Works exclusively with bytes (8 bits)",
          "Does not handle or support character encoding"
        ]
      },
      {
        heading: "What are Character Streams?",
        content: "Character streams in Java are designed specifically to handle text data. They read and write data natively in the form of 16-bit Unicode characters, making them highly suitable for text files. These streams automatically handle character encoding and decoding, ensuring correct representation of complex text. Character streams are built upon the abstract classes Reader and Writer.",
        points: [
          "In simple terms: Handles text data",
          "Example uses: Text files, Reading/writing strings",
          "Works deeply with characters (Unicode)",
          "Handles system encoding automatically and transparently"
        ]
      },
      {
        heading: "Key Difference: Data Handling",
        content: "Byte streams deal strictly with raw binary data, meaning they do not interpret the logical data; they simply read/write bytes.\n\nIn profound contrast, character streams actively interpret data as text and seamlessly convert bytes natively into characters using underlying encoding schemes like UTF-8 or UTF-16.",
        points: [
          "Byte → raw uninterpreted data",
          "Character → readable interpreted text"
        ]
      },
      {
        heading: "Key Difference: Encoding & Performance",
        content: "Since byte streams do not handle encoding, they may produce wildcard or incorrect output when dealing directly with text.\n\nHowever, from a sheer performance perspective, Byte streams are generally faster because they interact directly with the raw data footprint. Character streams may process slightly slower due to the requisite encoding and decoding operations occurring heavily behind the scenes.",
        points: [
          "Byte streams: Do not handle encoding; Faster execution time.",
          "Character streams: Automatically structure encoding; Slightly slower processing."
        ]
      },
      {
        heading: "When to Use Which? (Concept Summary)",
        content: "Byte streams should be strictly implemented when working with binary files or when raw data must be handled exactly as it arrived without any algorithmic modification.\n\nConversely, Character streams should heavily be used when working directly with text-based data, as they guarantee proper decoding and text structural readability.",
        points: [
          "Use Byte Stream for: Binary files, Multimedia files, Raw system parsing",
          "Use Character Stream for: Text files, Reading/writing structural strings, Standard Unicode handling"
        ]
      }
    ],
    code: "import java.io.*;\n\npublic class StreamTypesDemo {\n    public static void main(String[] args) {\n        try {\n            // --- Byte Stream Example ---\n            FileOutputStream fos = new FileOutputStream(\"binary.dat\");\n            fos.write(65); // Writes binary equivalent of 'A'\n            fos.close();\n\n            FileInputStream fis = new FileInputStream(\"binary.dat\");\n            System.out.println(\"Byte Stream read: \" + (char)fis.read());\n            fis.close();\n\n            // --- Character Stream Example ---\n            FileWriter fw = new FileWriter(\"text.txt\");\n            fw.write(\"Hello Java Character Streams\");\n            fw.close();\n\n            FileReader fr = new FileReader(\"text.txt\");\n            System.out.print(\"Character Stream read: \");\n            int data;\n            while((data = fr.read()) != -1) {\n                System.out.print((char)data);\n            }\n            fr.close();\n            System.out.println();\n\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}"
  },
  "Input/Output Streams": {
    description: "In Java, streams are used to perform input and output (I/O) operations, which means reading data from a source and writing data to a destination sequentially.",
    keyPoints: [
      "Used for data transfer iteratively and sequentially.",
      "Input: Source → Program (Reading).",
      "Output: Program → Destination (Writing).",
      "Supports multiple sources/destinations (files, console, network)."
    ],
    sections: [
      {
        heading: "What are Input and Output Streams?",
        content: "A stream represents a continuous flow of data, and this data can come from various sources like files, keyboards, or networks. Streams allow Java programs to handle data efficiently in a sequential manner.\n\nFlow logic:\nInput → Source → Program\nOutput → Program → Destination",
        points: [
          "Used for reading/writing data transfer",
          "Works sequentially across sources",
          "Core component of Java I/O"
        ]
      },
      {
        heading: "Input Streams",
        content: "An input stream is used specifically to read data from a source into a Java program. The source can be a file, keyboard, or network connection. Input streams bring data into the program linearly one unit at a time (byte or character) and pass it to the program for processing.",
        points: [
          "Reads data from Source into the Program",
          "Used for all input operations",
          "Processes data sequentially via read()"
        ]
      },
      {
        heading: "Types of Input Streams",
        content: "1. Byte Input Streams: Used to read binary raw data (8-bit bytes). Based on the abstract InputStream class. (e.g., FileInputStream, BufferedInputStream).\n\n2. Character Input Streams: Used to read text data natively. Based on the abstract Reader class. (e.g., FileReader, BufferedReader).\n\n3. Buffered Input Streams: Improve performance drastically by reading data in larger chunks into memory instead of one unit at a time.",
        points: [
          "Byte: Reads raw binary data without encoding",
          "Character: Reads text data and supports Unicode encoding",
          "Buffered: Dramatically faster reading using memory buffers"
        ]
      },
      {
        heading: "Output Streams",
        content: "An output stream is used to write data from a Java program directly to a destination such as a file, API, or console. It effectively sends processed data completely out of the program.",
        points: [
          "Writes data from the Program exactly to the Destination",
          "Used for output operations",
          "Functions sequentially via write()"
        ]
      },
      {
        heading: "Types of Output Streams",
        content: "1. Byte Output Streams: Used to accurately write binary data. Based on the abstract OutputStream class. (e.g., FileOutputStream, BufferedOutputStream).\n\n2. Character Output Streams: Used to serialize and write formatted text data. Based on the abstract Writer class. (e.g., FileWriter, BufferedWriter).\n\n3. Buffered Output Streams: Scale up performance heavily by writing bulk data chunks from a buffer to storage.",
        points: [
          "Byte: Writes raw binary streams natively",
          "Character: Writes text files intelligently mapping encoding",
          "Buffered: Greatly reduces I/O lag by buffering outputs"
        ]
      },
      {
        heading: "Input vs Output Stream Summary",
        points: [
          "Input Stream: Source → Program (Reads data from InputStream/Reader)",
          "Output Stream: Program → Destination (Writes data via OutputStream/Writer)"
        ]
      },
      {
        heading: "Advantages of Java Streams",
        points: [
          "Simplifies I/O operations",
          "Works globally with files, keyboards, network sockets",
          "Highly efficient sequential data handling",
          "Supports scaling performance with Buffer wrappers",
          "Handles both binary blobs and highly structured text data natively"
        ]
      }
    ],
    code: "import java.io.*;\n\npublic class StreamIODemo {\n    public static void main(String[] args) {\n        try {\n            // --- Output Stream Example ---\n            FileWriter fw = new FileWriter(\"data.txt\");\n            fw.write(\"Hello Java I/O Streams\");\n            fw.close();\n            System.out.println(\"Output written successfully.\");\n\n            // --- Input Stream Example ---\n            FileReader fr = new FileReader(\"data.txt\");\n            int data;\n            System.out.print(\"Input read successfully: \");\n            \n            while ((data = fr.read()) != -1) {\n                System.out.print((char)data);\n            }\n            fr.close();\n            System.out.println();\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}"
  },
  "File Streams": {
    description: "File streams in Java are used to read data from files and write data to files. They treat a file as a stream of data, meaning data is read or written sequentially, one unit at a time (byte or character).",
    keyPoints: [
      "Used for permanent data storage and file handling.",
      "Reads and writes data sequentially.",
      "Enables continuous data persistence.",
      "A core part of the standard Java I/O system."
    ],
    sections: [
      {
        heading: "What are File Streams?",
        content: "A file stream allows programs to interact seamlessly with files stored on a system file tree by establishing a bridge from the file to the active program. Real-life idea: It operates like reading from or writing to a physical notebook.",
        points: [
          "File Stream literally = Read/Write data from/to a file",
          "Without file streams, data would be lost once the program ends",
          "Widely used in applications like logging systems and standard persistence"
        ]
      },
      {
        heading: "FileInputStream (Byte Input Stream)",
        content: "FileInputStream is used to comprehensively read data from a file natively in the form of raw bytes. It is explicitly suitable for reading binary files like system images, audio blocks, and raw videos.",
        points: [
          "Flow: File → Program (byte by byte)",
          "Works entirely with raw 8-bit bytes",
          "Extends the abstract InputStream parent structure"
        ]
      },
      {
        heading: "FileOutputStream (Byte Output Stream)",
        content: "FileOutputStream is used to dynamically write data specifically into a binary file in raw byte format. It can instantly create a brand new file entirely or aggressively overwrite existing sequential data.",
        points: [
          "Flow: Program → File (byte by byte)",
          "Writes sequential data cleanly to a binary structure",
          "Extends the abstract OutputStream super class"
        ]
      },
      {
        heading: "FileReader (Character Input Stream)",
        content: "FileReader is used to meticulously read text data back out from a file identically in the form of characters. It is highly suitable for parsing structural text files and implicitly supports localized Unicode.",
        points: [
          "Flow: File → Program (character by character)",
          "Works flawlessly with 16-bit characters",
          "Understands standard file encoding automatically"
        ]
      },
      {
        heading: "FileWriter (Character Output Stream)",
        content: "FileWriter is used gracefully to write readable text data intelligently into a file. It automatically and transparently handles complex underlying character encoding variables internally.",
        points: [
          "Flow: Program → File (characters)",
          "Writes strict text data formats",
          "Extends the abstract Writer parent structure"
        ]
      },
      {
        heading: "Buffered File Streams",
        content: "Buffered file streams are utilized strategically to improve mass performance globally by reading or writing data in heavy chunks instead of solely one trivial unit at a time. They explicitly use an internal memory block (buffer) to reduce the sheer number of I/O hardware system operations.",
        points: [
          "Faster than normal individual streams",
          "Relies on temporary storage (buffer memory) for extreme performance",
          "Virtually mandatory for interacting efficiently with massively large scale files",
          "Classes: BufferedReader, BufferedWriter"
        ]
      },
      {
        heading: "Important I/O Operations Methods",
        content: "- read(): Used iteratively to dynamically read data off the end-file. Usually returns -1 when pointing correctly at the definitive end of the file.\n- write(): Injects data effectively into the trailing file pipeline sequentially.\n- close(): Immediately seals off the active data stream and unconditionally frees up valuable memory resources to prevent leaks.",
        points: [
          "Always logically close active standard streams securely to intelligently bypass system memory leaks."
        ]
      }
    ],
    code: "import java.io.*;\n\npublic class FileStreamsDemo {\n    public static void main(String[] args) {\n        try {\n            // Write to file (Character Output Stream)\n            FileWriter fw = new FileWriter(\"data.txt\");\n            fw.write(\"Hello File streams in Java\");\n            fw.close();\n            System.out.println(\"Write complete.\\n\");\n\n            // Read from file Character (Input Stream)\n            FileReader fr = new FileReader(\"data.txt\");\n            int charData;\n            System.out.print(\"Reading characters: \");\n            while ((charData = fr.read()) != -1) {\n                System.out.print((char)charData);\n            }\n            fr.close();\n            System.out.println();\n\n            // Read with Buffer (Buffered Input)\n            BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"));\n            String line = br.readLine();\n            System.out.println(\"\\nReading full buffered line: \" + line);\n            br.close();\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}"
  },

  // Multithreading
  "Creating a Thread": {
    description: "A thread in Java is the smallest unit of execution within a program. It allows multiple tasks to run concurrently within a single program, improving overall application performance and efficiency.",
    keyPoints: [
      "In simple terms: A thread is a lightweight independent process.",
      "Multithreading enables parallel execution natively.",
      "Improves performance by utilizing CPU capacity properly.",
      "Supports robust concurrent tasks like server requests."
    ],
    sections: [
      {
        heading: "What is a Thread?",
        content: "Java natively supports multithreading, which means a program can perform multiple distinct operations simultaneously. Threads are used to perform multiple tasks simultaneously rapidly without ever waiting for one task to entirely complete before starting another one.",
        points: [
          "Real-life example: Listening to music while downloading a file → multiple tasks running at once.",
          "Especially useful in deep applications like active games, intense web servers, and complex background processing."
        ]
      },
      {
        heading: "Ways to Create a Thread: 1. Extending Thread Class",
        content: "In this method, a new class simply extends the core Thread class and actively overrides its integrated run() method. The run() method fundamentally contains the code that should be executed individually by the thread. To actually start the live thread, we call the parent start() method, which natively internally calls run().",
        points: [
          "Simple idea: Extend Thread → define run() → call start().",
          "You must inherit the parent Thread class.",
          "Strictly override the run() method where logic goes."
        ]
      },
      {
        heading: "Ways to Create a Thread: 2. Implementing Runnable Interface",
        content: "In this decoupled method, a dedicated class heavily implements the Runnable interface and formally defines the run() method. Then, a Thread container object is actively created by passing in the Runnable object reference.\n\nThis approach is vastly more flexible because Java deeply supports multiple inheritance essentially through modular interfaces.",
        points: [
          "Simple idea: Implement Runnable → pass object instance to Thread → start thread.",
          "More fundamentally flexible over extending the rigid Thread class directly.",
          "Highly considered the universally preferred method."
        ]
      },
      {
        heading: "Overview: Thread Life Cycle",
        content: "A managed thread fluidly goes through fundamentally different systemic states completely during its active execution loop:\n\n1. New → The basic Thread object is successfully created in memory.\n2. Runnable → System is ready to run and pending CPU allocation.\n3. Running → Total execution algorithm natively starts.\n4. Blocked/Waiting → Actively waiting for blocked system resources or I/O locks.\n5. Terminated → The execution loop formally ends securely.",
        points: [
          "Multiple complex states directly dictate flow control.",
          "Aggressively controlled and managed invisibly by the internal JVM."
        ]
      },
      {
        heading: "Important Thread Core Methods",
        content: "- start(): Spins up the sub-process thread and calls the run() core method natively internally.\n- run(): Contains the specific logic block to be formally executed heavily by the single thread.\n- sleep(time): Rigidly pauses current executing thread completely for a highly specified time (ms).\n- join(): Explicitly waits patiently for a bound thread to entirely finish securely before linearly continuing.\n- getName() / setName(): Programmatically utilized to get or dynamically establish visual thread naming variables.",
        points: [
          "Key Difference: Calling start() starts a totally parallel parallelized thread. Calling run() executes structurally like a completely normal sequential method."
        ]
      }
    ],
    code: "class MyRunnable implements Runnable {\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(Thread.currentThread().getName() + \" is executing step \" + i);\n            try {\n                Thread.sleep(500); // Pauses thread for 500ms\n            } catch (InterruptedException e) {\n                System.out.println(e.getMessage());\n            }\n        }\n    }\n}\n\npublic class ThreadDemo {\n    public static void main(String[] args) {\n        // Preferred Method: Passing Runnable into Thread\n        Thread t1 = new Thread(new MyRunnable());\n        Thread t2 = new Thread(new MyRunnable());\n\n        t1.setName(\"Worker-A\");\n        t2.setName(\"Worker-B\");\n\n        System.out.println(\"Starting parallel background tasks...\");\n        t1.start();\n        t2.start();\n    }\n}"
  },
  "Thread Lifecycle": {
    description: "The Thread Life Cycle in Java describes the different stages a thread goes through from creation to termination. Understanding this pipeline helps in explicitly controlling thread execution, improving macro performance, and completely avoiding dangerous system deadlocks.",
    keyPoints: [
      "Thread starts fresh with the new Thread object (New).",
      "Executes logic using the structured run() method (Running).",
      "Can dynamically pause using explicit commands like sleep() (Waiting).",
      "Can unconditionally wait for other parallel threads using join() (Blocked).",
      "Ends securely after logic execution finishes (Terminated)."
    ],
    sections: [
      {
        heading: "1. NEW State",
        content: "The New state is the fundamental initial stage of a thread. In this state, a thread object is cleanly created but has inherently not yet started execution. The thread is completely simply defined in memory, and absolutely no system resources are allocated for execution.",
        points: [
          "Syntax: Thread t = new Thread();",
          "At this stage, the thread exists strictly only as a virtual object.",
          "It will move forward to the next state ONLY when start() is called."
        ]
      },
      {
        heading: "2. RUNNABLE State",
        content: "The Runnable state occurs strictly when the start() method is aggressively called on a mapped thread object. In this state, the thread is formally ready to run and waiting patiently for active CPU execution allocation. It is placed securely in the operating thread scheduler queue.",
        points: [
          "Syntax: t.start();",
          "The thread does NOT explicitly run immediately after calling start().",
          "It fundamentally waits for the CPU hardware to assign execution time before jumping to Running."
        ]
      },
      {
        heading: "3. RUNNING State",
        content: "The Running state is exclusively when the thread is actively and directly executing its task layout. The deep thread scheduler selects a thread directly from the runnable pool list and rigidly assigns physical CPU time.",
        points: [
          "In this state, the thread linearly executes the code natively inside the run() block.",
          "Mechanically, only one dedicated thread officially runs at a localized time per active physical CPU core.",
          "Thread is actively performing its task."
        ]
      },
      {
        heading: "4. WAITING / BLOCKED State",
        content: "The Waiting or Blocked state explicitly occurs when a running thread is temporarily rendered heavily inactive. This reliably happens when a thread is forced to wait for busy system resources, locked by another external thread, or awaiting a specific conditional parameter.",
        points: [
          "sleep() → completely pauses thread execution for a specific exact time limit",
          "wait() → waits dynamically indefinitely for another thread's return signal",
          "join() → fundamentally forces execution blocking until another target thread securely finishes",
          "After the lock condition is perfectly satisfied, the thread invariably returns cleanly back to the Runnable queue."
        ]
      },
      {
        heading: "5. TERMINATED State",
        content: "The Terminated state is the final, irrevocable formal stage of a thread's journey. It exclusively occurs natively when the thread cleanly completes its execution code or forcefully stops unexpectedly due to a system error.",
        points: [
          "Once the run() block finishes structurally, the thread enters this rigid destination.",
          "The thread object mathematically becomes dead memory.",
          "You absolutely cannot securely restart a formally terminated thread object again."
        ]
      },
      {
        heading: "Critical Thread Life Cycle Core Flow",
        content: "Basic Pipeline:\n\nNew Object → Runnable Queue → CPU Running → (Optional: Waiting/Blocked) → Back to Runnable → Terminated (Dead)",
        points: [
          "Controlled heavily and invisibly by the internal JVM Thread Scheduler execution system."
        ]
      }
    ],
    code: "public class LifecycleDemo extends Thread {\n    public void run() {\n        System.out.println(\"Thread logic executing! (Running State)\");\n        try {\n            System.out.println(\"Thread going to sleep... (Waiting State)\");\n            Thread.sleep(1000);\n        } catch (InterruptedException e) {\n            System.out.println(e.getMessage());\n        }\n    }\n\n    public static void main(String[] args) {\n        // NEW State\n        LifecycleDemo thread1 = new LifecycleDemo();\n        System.out.println(\"State after creation: \" + thread1.getState());\n\n        // RUNNABLE State\n        thread1.start();\n        System.out.println(\"State after start(): \" + thread1.getState());\n        \n        try {\n            // Tell main thread to block until thread1 finishes to observe completion\n            thread1.join(); \n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n\n        // TERMINATED State\n        System.out.println(\"State after completion: \" + thread1.getState());\n    }\n}"
  },
  "Multithreading Advantages": {
    description: "Multithreading in Java is a feature that allows a program to execute multiple threads (tasks) simultaneously. Instead of performing tasks one after another, multithreading heavily enables parallel execution, making programs drastically faster and more efficient.",
    keyPoints: [
      "Faster overall execution and logic evaluation.",
      "Maximizes localized CPU and system utilization deeply.",
      "Handles multiple complex tasks at the exact same systemic time.",
      "Creates smooth UI experiences heavily preventing application freezing."
    ],
    sections: [
      {
        heading: "1. Improves Performance",
        content: "Multithreading significantly improves the performance of a program by actively allowing multiple tasks to intelligently run at the very same time. Instead of waiting patiently for one monolithic task to complete before starting another, threads literally execute concurrently, intrinsically reducing total execution time.",
        points: [
          "Real-life Example: Downloading large files seamlessly while simultaneously playing HD music.",
          "Results directly in drastically faster execution speeds and strict parallel processing."
        ]
      },
      {
        heading: "2. Better CPU Utilization",
        content: "In a basic single-threaded program, the core CPU may tragically remain idle while waiting linearly for tasks like basic I/O operations (reading a file). Multithreading smartly ensures that the CPU is physically always busy by actively executing other waiting threads when a specific thread is temporarily blocked/waiting.",
        points: [
          "CPU virtually never stays idle.",
          "Reduces absolute baseline idle time and heavily maximizes active processing power limits."
        ]
      },
      {
        heading: "3. Supports Concurrent Execution",
        content: "Multithreading dynamically allows multiple tasks to literally be executed exactly at the same time, which is unconditionally useful in large real-time applications such as interactive gaming, modern banking systems, and heavy web servers.",
        points: [
          "Real-time processing handling dynamic multiple users asynchronously in a website concurrently.",
          "Immediately heavily improves localized responsiveness."
        ]
      },
      {
        heading: "4. Improves Application Responsiveness",
        content: "Multithreading actively helps complex user applications purposefully remain uniquely responsive, especially strictly in graphical user interfaces. For example, a heavy GUI application can easily continue quickly responding to user clicking actions while silently performing background download tasks.",
        points: [
          "Prevents heavy UI freezing of the primary application frame.",
          "Background processing isolates logic visually."
        ]
      },
      {
        heading: "5. Efficient Resource Sharing",
        content: "Threads inherently share the exact same underlying parent memory space, which heavily actively allows efficient localized communication and strict data sharing between linked threads. This seamlessly strategically reduces the need for creating duplicate memory resources.",
        points: [
          "Threads share logical resources → substantially less memory bloat usage.",
          "Dramatically reduces JVM resource allocation overhead."
        ]
      },
      {
        heading: "6. Simplifies Complex Programs",
        content: "Multithreading strictly logically makes it much easier to actively cleanly divide a massive problem physically into much smaller tasks, each safely handled sequentially by a separate dedicated thread. This elegantly simplifies total program design and greatly improves engineering maintainability.",
        points: [
          "Example: Spawning completely different localized threads sequentially for secure login, hard data processing, and visual output.",
          "Creates much better underlying structural code architecture."
        ]
      },
      {
        heading: "7. Saves Time in Long Operations & Scalability",
        content: "Long-running hard tasks like heavy file downloading, deep database mapping operations, or strict complex calculations can reliably be effortlessly executed in separate asynchronous threads, completely allowing other tasks to predictably continue predictably without delay.\n\nMultithreaded modular programs intelligently can easily seamlessly dynamically scale directly with the underlying active number of total system processors.",
        points: [
          "More processor cores physically → much more native threads natively → dramatically more speed natively.",
          "Constructs entirely future-ready scalable software programs."
        ]
      }
    ],
    code: "public class AdvantageDemo {\n    public static void main(String[] args) {\n        // Real-Time Example: Bank Simulation\n        \n        Thread login = new Thread(() -> {\n            System.out.println(\"Thread 'Login' checking user credentials...\");\n        });\n        \n        Thread databaseUpdate = new Thread(() -> {\n             System.out.println(\"Thread 'DB' updating records securely...\");\n        });\n        \n        Thread uiRender = new Thread(() -> {\n             System.out.println(\"Thread 'UI' keeping application responsive...\");\n        });\n\n        System.out.println(\"--- Single Core App would do these one by one ---\");\n        System.out.println(\"--- Multithreaded App executes simultaneously ---\\n\");\n\n        // All tasks trigger simultaneously for a vastly faster user experience\n        login.start();\n        databaseUpdate.start();\n        uiRender.start();\n    }\n}"
  },
  "Multithreading Methods": {
    description: "Multi-threading models describe how user-level threads map to OS kernel threads. These models define how threads are created, scheduled, and executed by the operating system. Understanding them helps improve performance and resource utilization.",
    keyPoints: [
      "User Threads: Managed by a user-level library in Java space.",
      "Kernel Threads: Managed by the core Operating System.",
      "Model: Defines how user threads are scheduled across OS threads."
    ],
    sections: [
      {
        heading: "1. MANY-TO-ONE MODEL",
        content: "In the Many-to-One model, multiple user-level threads map to a single kernel thread. All threads created by the program are handled by only one thread at the OS level.",
        points: [
          "Working: If one thread blocks, all threads block.",
          "Concept: Multiple tasks in a queue, but only one available worker.",
          "Advantages: Simple to implement; fast thread switching.",
          "Disadvantages: Cannot use multi-core CPUs; poor parallel performance."
        ]
      },
      {
        heading: "2. ONE-TO-ONE MODEL",
        content: "In the One-to-One model, each user thread maps to a separate kernel thread. Every thread created by the program has its own specific thread in the OS.",
        points: [
          "Working: Enables true hardware parallelism across multiple CPU cores.",
          "Concept: Each task has its own dedicated worker.",
          "Advantages: No blocking issues; full use of CPU cores; better responsiveness.",
          "Disadvantages: Higher system overhead; thread creation is slower."
        ]
      },
      {
        heading: "3. MANY-TO-MANY MODEL",
        content: "In the Many-to-Many model, multiple user threads map dynamically to multiple kernel threads. Provides excellent flexibility.",
        points: [
          "Working: The thread library manages user threads and multiplexes them across active kernel threads.",
          "Concept: Large task pool managed dynamically across a scalable worker pool.",
          "Advantages: Great scalability; seamless multiplexed parallelism.",
          "Disadvantages: Complex OS implementation required."
        ]
      }
    ],
    code: "public class ModelsDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Java on modern Windows/Linux uses the One-to-One model.\");\n        System.out.println(\"Every Thread.start() requests a native OS worker.\\n\");\n        \n        new Thread(() -> {\n            System.out.println(\"Worker running mapped dynamically to OS Thread ID: \" + Thread.currentThread().threadId());\n        }).start();\n    }\n}"
  },
  "Runnable Interface": {
    description: "The Runnable interface in Java is used to define a task that can be executed concurrently by a thread. Instead of extending the Thread class, implementing the Runnable interface is the heavily preferred and more flexible way of creating threads in Java.",
    keyPoints: [
      "Runnable represents the task to be executed by a thread.",
      "Thread executes the task → Runnable provides the logic.",
      "It is a functional interface (contains only one method: run()).",
      "Vastly more flexible than directly extending the rigid Thread class."
    ],
    sections: [
      {
        heading: "Why Use Runnable Interface?",
        content: "The Runnable interface is highly preferred because Java strictly does not support multiple inheritance with basic classes. By implementing Runnable, a custom class can seamlessly extend another parent class while still being actively used for multithreading. It also logically separates the task (logic) cleanly from the thread (execution context).",
        points: [
          "Fundamentally supports multiple inheritance via interfaces.",
          "Considered a completely superior OOP design approach.",
          "Separates business logic cleanly from execution scaffolding.",
          "Produces highly reusable modular code."
        ]
      },
      {
        heading: "How Runnable Explicitly Works",
        content: "To dynamically use the Runnable interface, we formally follow three structural steps:\n1. Create a class that implements Runnable\n2. Consistently override the run() execution method\n3. Pass the object directly to a Thread container and securely call start()",
        points: [
          "Flow: Runnable Task → Pass to Thread → Call Thread.start() → OS executes run()",
          "You must precisely define the execution task inside the run() block."
        ]
      },
      {
        heading: "Runnable vs Thread Class",
        content: "Comparing the core fundamental approaches to Java multithreading.",
        points: [
          "Type: Runnable is an Interface; Thread is a Class.",
          "Inheritance: Runnable supports extending another class entirely; Thread forcefully blocks extending another class.",
          "Flexibility: Runnable has incredibly high flexibility; Thread is extremely rigid.",
          "Design: Runnable provides a much better separation of concerns."
        ]
      },
      {
        heading: "Multiple Threads Using Single Runnable",
        content: "A massive advantage of Runnable is that the exact same Runnable state object can actually be shared and used natively by multiple parallel threads simultaneously, sharing the exact same memory references seamlessly.",
        points: [
          "Declare one Runnable task instance.",
          "Pass the instance into multiple Thread() wrappers.",
          "Launch parallel processing sharing identical state logic."
        ]
      },
      {
        heading: "Lambda Expression with Runnable (Modern Java 8+)",
        content: "Since Runnable is formally a functional interface (having only one abstract method), it can realistically be beautifully implemented using a modern inline lambda expression to drastically simplify localized codebase.",
        points: [
          "Thread t = new Thread(() -> { logic }); t.start();",
          "Completely removes the heavy need for a separate physical class definition."
        ]
      }
    ],
    code: "public class RunnableDemo {\n    public static void main(String[] args) {\n        // Approach 1: Standard Instance Object binding to Multiple Threads\n        Runnable sharedTask = new Runnable() {\n            public void run() {\n                System.out.println(\"Runnable Task operating on Thread: \" + Thread.currentThread().getName());\n            }\n        };\n        \n        Thread workerA = new Thread(sharedTask, \"Worker-A\");\n        Thread workerB = new Thread(sharedTask, \"Worker-B\");\n\n        System.out.println(\\\"Starting Standard Runnable Threads...\\\");\n        workerA.start();\n        workerB.start();\n        \n        // Approach 2: Modern Lambda Expression (Java 8+)\n        Thread lambdaThread = new Thread(() -> {\n             System.out.println(\"Modern Lambda Task operating on Thread: \" + Thread.currentThread().getName());\n        }, \"Lambda-Worker\");\n\n        System.out.println(\"Starting Lambda Runnable Thread...\");\n        lambdaThread.start();\n    }\n}"
  },
  "Thread Communication": {
    description: "Thread communication in Java is a mechanism that allows multiple threads to communicate and coordinate with each other while working on shared resources. Instead of running independently, threads can signal each other about certain conditions like data availability or task completion.",
    keyPoints: [
      "Avoids problems like unnecessary waiting, CPU wastage, and inconsistent data.",
      "Achieved using methods from the java.lang package, especially through the Object class.",
      "Requires explicit synchronization to work properly."
    ],
    sections: [
      {
        heading: "Need for Thread Communication",
        content: "In multi-threaded programs, multiple threads may depend on each other. For example, one thread produces data and another consumes it. Without communication, the consumer may try to access data before it is available, leading to incorrect results.",
        points: [
          "Coordinates execution between threads.",
          "Avoids busy waiting (continuous checking).",
          "Improves performance and maintains data consistency."
        ]
      },
      {
        heading: "Core Methods",
        content: "Thread communication relies entirely on three foundational methods defined in the Object class (not Thread class):",
        points: [
          "wait(): Immediately pauses thread execution and releases the object lock.",
          "notify(): Wakes up only one randomly selected waiting thread.",
          "notifyAll(): Wakes up all waiting threads."
        ]
      },
      {
        heading: "Important Rules for Thread Communication",
        content: "Thread communication methods must follow strict rules to work correctly. These methods must always be used inside a synchronized block or method, otherwise Java throws an exception. Also, they must be called on the same object that is being synchronized.",
        points: [
          "Must use inside synchronized block.",
          "Use same object for locking.",
          "Avoid calling outside synchronization.",
          "Prevents IllegalMonitorStateException."
        ]
      },
      {
        heading: "Advantages vs Disadvantages",
        content: "Analyzing the trade-offs of using programmatic inter-thread communication.",
        points: [
          "Advantages: Efficient CPU usage; Avoids unnecessary waiting; Ensures proper data coordination.",
          "Disadvantages: Highly complex to implement properly; Massive risk of application Deadlock if misused; Very hard to debug."
        ]
      }
    ],
    code: "class SharedResource {\n    int data;\n    boolean available = false;\n\n    synchronized void produce(int value) throws InterruptedException {\n        while (available) {\n            wait(); // Wait until data is consumed\n        }\n        data = value;\n        available = true;\n        System.out.println(\"Produced: \" + data);\n        notify(); // Notify consumer\n    }\n\n    synchronized void consume() throws InterruptedException {\n        while (!available) {\n            wait(); // Wait until data is produced\n        }\n        System.out.println(\"Consumed: \" + data);\n        available = false;\n        notify(); // Notify producer\n    }\n}\n\npublic class ProducerConsumerDemo {\n    public static void main(String[] args) {\n        SharedResource resource = new SharedResource();\n\n        // Producer Thread\n        new Thread(() -> {\n            try {\n                for (int i = 1; i <= 3; i++) resource.produce(i);\n            } catch (InterruptedException e) {}\n        }).start();\n\n        // Consumer Thread\n        new Thread(() -> {\n            try {\n                for (int i = 1; i <= 3; i++) resource.consume();\n            } catch (InterruptedException e) {}\n        }).start();\n    }\n}"
  },

  "Collections Overview": {
    description: "The Java Collections Framework (JCF) is a unified architecture introduced to store, manage, and manipulate groups of objects efficiently, providing dynamic data structures along with powerful utility methods.",
    keyPoints: [
      "Collections are used to store multiple objects dynamically and perform common data operations.",
      "The framework consists of Interfaces, Implementation Classes, and Algorithms.",
      "Collections overcome array limitations like fixed size and lack of built-in methods.",
      "Improves code reusability, maintainability, and performance."
    ],
    sections: [
      {
        heading: "1. What is a Collection?",
        content: "A Collection represents a group of objects treated as a single unit. Before collections were introduced, Java mainly used arrays to store multiple elements, which had severe limitations such as a fixed size and a lack of built-in methods for searching, sorting, or updating data.\n\nExamples of Collections:\n- List of students\n- Set of unique numbers\n- Map of employee IDs and names"
      },
      {
        heading: "2. Java Collections Framework Structure",
        content: "The Collections Framework mainly consists of three core parts:\n1. Interfaces: Define the structure and behavior of collections.\n2. Implementation Classes: Provide actual working implementations of the interfaces.\n3. Algorithms (Utility Methods): Reusable methods provided by the Collections class to operate on data."
      },
      {
        heading: "3. Core Collection Interfaces",
        content: "The root interface of the framework is Collection, which defines common methods like add(), remove(), size(), clear(), and contains().\n\nList Interface:\nA List represents an ordered collection that allows duplicate elements. It maintains insertion order and allows index-based access. Implementations: ArrayList, LinkedList, Vector, Stack.\n\nSet Interface:\nA Set represents a collection that does not allow duplicate elements. It is mostly unordered and offers faster searching. Implementations: HashSet, LinkedHashSet, TreeSet.\n\nQueue Interface:\nA Queue stores elements for processing in a specific order. It typically follows FIFO (First In First Out) and is used in task scheduling. Implementations: PriorityQueue, ArrayDeque.\n\nMap Interface (Separate Hierarchy):\nA Map stores data as key-value pairs. Keys are unique, but values may be duplicated. It is not part of the Collection root interface. Implementations: HashMap, LinkedHashMap, TreeMap, Hashtable."
      },
      {
        heading: "4. Implementation Classes",
        content: "These classes provide the actual data structures you allocate in code.",
        points: [
          "ArrayList: Dynamic array, provides fast read access but slower insertions in the middle of the list.",
          "LinkedList: Doubly linked structure, provides fast insertion/deletion but slower random access.",
          "HashSet: Uses hashing, maintains no specific order, fast access.",
          "TreeSet: Sorted elements, uses a Red-Black Tree internally.",
          "HashMap: Fast key-value storage, allows exactly one null key."
        ]
      },
      {
        heading: "5. Algorithms (Utility Methods)",
        content: "The java.util.Collections class provides highly useful static algorithmic methods to manipulate collections.",
        points: [
          "Collections.sort(list); - Sorts the list elements.",
          "Collections.reverse(list); - Reverses the order of elements.",
          "Collections.shuffle(list); - Randomly shuffles the elements.",
          "Collections.min(list); & Collections.max(list); - Finds minimum and maximum elements."
        ]
      },
      {
        heading: "6. Collections vs Arrays",
        content: "Feature | Arrays | Collections\n1. Size: Arrays are Fixed, Collections are Dynamic.\n2. Data Type: Arrays hold elements of the same type (Primitives/Objects), Collections hold Objects only.\n3. Methods: Arrays have limited utility, Collections have many built-in methods.\n4. Flexibility: Arrays are low, Collections are highly flexible."
      },
      {
        heading: "7. Common Operations and Traversal",
        content: "Common Operations:\nAdding elements, Removing elements, Searching, Sorting, Traversing, Filtering, and Updating data.",
        points: [
          "Traversal Methods: Collections can be looped over using several techniques.",
          "1. For loop and Enhanced for loop (foreach)",
          "2. Iterator and ListIterator (for directional traversal)",
          "3. forEach() method (Java 8+)",
          "4. Stream API (Functional, Java 8+)"
        ]
      },
      {
        heading: "8. Generics in Collections",
        content: "Generics heavily ensure type safety at compile time. It completely prevents the common issue of storing the wrong data types in a collection.\n\nExample:\nList<String> list = new ArrayList<>();\nThis explicitly guarantees that only String objects can be successfully added to the list."
      },
      {
        heading: "9. Important Points and Applications",
        content: "Real-Time Applications: Student management systems, Banking applications, Inventory management, Social media feeds, Data analytics, and Web applications.",
        points: [
          "Collections formally store Object references only (primitives are autoboxed).",
          "Map is NOT a direct subtype of the Collection interface.",
          "Supports functional programming patterns seamlessly with Streams.",
          "Improves overall application code reusability and software maintainability."
        ]
      }
    ],
    code: "import java.util.*;\n\npublic class CollectionsOverviewDemo {\n    public static void main(String[] args) {\n        // List Example (Ordered, Duplicates Allowed)\n        List<String> list = new ArrayList<>();\n        list.add(\"Java\");\n        list.add(\"Java\"); // Duplicate allowed\n\n        // Set Example (Unordered, No Duplicates)\n        Set<Integer> set = new HashSet<>();\n        set.add(10);\n        set.add(10); // Duplicate ignored\n\n        // Map Example (Key-Value pairs)\n        Map<Integer, String> map = new HashMap<>();\n        map.put(1, \"Alice\");\n        map.put(2, \"Bob\");\n\n        System.out.println(\"List: \" + list);\n        System.out.println(\"Set: \" + set);\n        System.out.println(\"Map: \" + map);\n    }\n}"
  },
  "Collection Interface": {
    description: "The Collection interface is the root foundation of the Java Collections Framework (except Map). It defines the standard behavior and common operations that all collection classes must follow to store and manipulate groups of objects.",
    keyPoints: [
      "Acts as a contract specifying core collection operations.",
      "Promotes code flexibility, reusability, and strong data abstraction.",
      "Supports storing object references only.",
      "Serves as the parent interface for List, Set, Queue, and Deque."
    ],
    sections: [
      {
        heading: "1. Collection Interface (Root)",
        content: "The Collection interface is the core root of the framework (Map is separate). Almost all collection types inherit from this interface. It provides the basic common operations required for manipulating elements, such as inserting, deleting, checking size, verifying elements, and clearing the collection.",
        points: [
          "Common Methods:",
          "add() - Inserts an element.",
          "remove() - Deletes an element.",
          "size() - Returns the total element count.",
          "contains() - Checks if an element exists.",
          "isEmpty() - Returns true if collection has no elements.",
          "clear() - Removes all elements entirely."
        ]
      },
      {
        heading: "2. List Interface",
        content: "The List interface represents an ordered collection of elements. It crucially maintains the insertion order of elements and officially allows duplicate values. Lists are commonly used when explicit element positioning and index-based tracking are important (like student records or playlists).",
        points: [
          "Maintains insertion order and securely allows duplicates.",
          "Supports index-based array-like positional access.",
          "Allows storing null elements securely.",
          "Popular Implementations: ArrayList (fast retrieval), LinkedList (efficient insertion/deletion), Vector, Stack."
        ]
      },
      {
        heading: "3. Set Interface",
        content: "The Set interface precisely represents a collection that strictly does not allow duplicate elements. It models mathematical sets where each underlying element must unequivocally be unique (like tracking unique User IDs).",
        points: [
          "Does not allow duplicate elements (duplicates are automatically ignored).",
          "Generally does not maintain insertion order (except certain specific implementations).",
          "Provides substantially faster searching operations compared to Lists.",
          "Popular Implementations: HashSet (fastest performance), LinkedHashSet (maintains order), TreeSet (stores elements cleanly sorted)."
        ]
      },
      {
        heading: "4. Queue & Deque Interfaces",
        content: "Queue Interface:\nThe Queue interface is designed for holding distinct elements natively prior to processing. It generally strictly follows the FIFO (First In First Out) principle. Commonly used in heavy task scheduling or request processing systems.\n\nDeque Interface (Double Ended Queue):\nExtends Queue and actively allows dynamic insertion and removal of elements from both ends. Can behave both as a strict Queue and a Stack natively.",
        points: [
          "Queue Methods: offer() to insert safely, poll() to remove safely, peek() to inspect the head.",
          "Queue Implementations: PriorityQueue, ArrayDeque.",
          "Deque: Supports both FIFO and LIFO. ArrayDeque is the vastly superior choice over the legacy Stack class."
        ]
      },
      {
        heading: "5. Map Interface (Separate Hierarchy)",
        content: "Although officially part of the Collections Framework ecosystem, Map actually does not cleanly extend the root Collection interface. Instead of storing single individual elements natively, it distinctly stores grouped data strictly as key-value pairs.",
        points: [
          "Each key must be strictly unique, while mapped values may gracefully be duplicated.",
          "Allows extremely efficient targeted searching natively using strictly tracked exact keys.",
          "Map Implementations: HashMap (fast basic), LinkedHashMap (ordered), TreeMap (sorted automatically), Hashtable (legacy thread-safe)."
        ]
      },
      {
        heading: "6. Hierarchy and Advantages",
        content: "The hierarchical design deliberately seamlessly branches Iterable -> Collection -> (List, Set, Queue) while Map stands alone. This explicitly empowers developers to aggressively write generalized interface-based abstract code while actively dynamically choosing the best specific backing implementation at absolute runtime.",
        points: [
          "Standardized data handling methods massively boost software maintainability.",
          "Dynamic seamless memory management prevents rigid array crashing.",
          "Incredible built-in integration completely empowering modern Java functional Streams and Lambdas."
        ]
      }
    ],
    code: "import java.util.*;\n\npublic class CollectionInterfacesDemo {\n    public static void main(String[] args) {\n        // 1. Root Collection logic demonstrated using a List\n        Collection<String> myCollection = new ArrayList<>();\n        myCollection.add(\"Apple\");\n        myCollection.add(\"Banana\");\n        System.out.println(\"Collection size: \" + myCollection.size());\n\n        // 2. Queue (FIFO)\n        Queue<String> queue = new ArrayDeque<>();\n        queue.offer(\"First Request\");\n        queue.offer(\"Second Request\");\n        System.out.println(\"Queue processing: \" + queue.poll()); // Removes First\n\n        // 3. Set (Uniqueness)\n        Set<Integer> uniqueIds = new HashSet<>();\n        uniqueIds.add(101);\n        uniqueIds.add(101); // Won't be added\n        System.out.println(\"Set elements securely stored: \" + uniqueIds);\n    }\n}"
  },
  "List, Set, Map Interfaces": {
    description: "In the Java Collections Framework, the most important interfaces used to store and manage data are List, Set, and Map. These interfaces define different ways of organizing and accessing collections of objects, each solving a specific type of data storage problem.",
    keyPoints: [
      "The List interface is used when order matters and duplicates are allowed.",
      "The Set interface is used when data uniqueness is strictly required.",
      "The Map interface is used when data must be stored in Key-Value pairs."
    ],
    sections: [
      {
        heading: "1. List Interface Overview",
        content: "The List interface extends Collection and represents an ordered collection of elements where duplicates are explicitly allowed. Elements stored in a list can be directly accessed using their exact position, known as an index.\n\nLists are fundamentally similar to standard arrays but provide immense dynamic resizing and countless built-in methods for advanced data manipulation.",
        points: [
          "Maintains the strict insertion order of elements natively.",
          "Explicitly allows storing duplicate values.",
          "Supports powerful index-based rapid access.",
          "Provides complex positional operations (insert, update, delete at specific indexes)."
        ]
      },
      {
        heading: "List Implementations & Real-World Uses",
        content: "Common uses for Lists include Student records, Online shopping carts, Playlist management, and Ordered data processing sequences.",
        points: [
          "ArrayList: Uses a dynamic underlying array. Extremely fast retrieval; slower insertions/deletions in the middle.",
          "LinkedList: Uses a heavily doubly linked structure. Highly efficient insertion/deletion; slower random access.",
          "Vector: Legacy class similar to ArrayList but heavily synchronized (thread-safe).",
          "Stack: Legacy subclass of Vector following strict LIFO (Last-In-First-Out) principles."
        ]
      },
      {
        heading: "2. Set Interface Overview",
        content: "The strictly unique Set interface models pure mathematical sets where every absolute element must be dynamically unique. It prevents duplicates natively, making Sets incredibly useful when data repetition must vigorously be avoided.\n\nWhen duplicate data is aggressively added, the Set simply silently ignores it.",
        points: [
          "Duplicate elements are fundamentally completely prohibited.",
          "Does not guarantee strict insertion order natively (except specialized implementations).",
          "Allows storing at most exactly one null element.",
          "Provides substantially faster targeted searching operations."
        ]
      },
      {
        heading: "Set Implementations & Real-World Uses",
        content: "Common uses for Sets explicitly include tracking Unique User IDs, securing Email storage uniqueness, Removing duplicate aggregate data, and massive Database result filtering.",
        points: [
          "HashSet: Default choice. Stores elements using blazing-fast hashing. No order guarantees.",
          "LinkedHashSet: Maintains strict exact insertion order while heavily preventing all duplicates.",
          "TreeSet: Highly advanced; physically stores elements in strongly sorted underlying memory structures."
        ]
      },
      {
        heading: "3. Map Interface Overview",
        content: "The Map interface exclusively stores relational data in distinct strict key-value pairs. Unlike List and Set, Map dramatically does NOT extend the root Collection interface natively, though it remains a vital core part of the Java Collections Framework.\n\nEach Key must unequivocally be totally unique, while linked Values can casually be freely duplicated. Maps actively allow remarkably fast advanced searching using strict keys.",
        points: [
          "Designed explicitly for maintaining relational structured data bindings.",
          "Every single Key strictly uniquely maps to at most exactly one specific Value.",
          "Only one null Key is safely allowed in most standard implementations.",
          "Keys are unique; explicit values may gracefully strictly duplicate."
        ]
      },
      {
        heading: "Map Implementations & Real-World Uses",
        content: "Common uses for Maps logically include 'Employee ID -> Name' mappings, 'Product ID -> Price' lookups, 'Username -> Password' dictionaries, and complex system configuration settings registries.",
        points: [
          "HashMap: Tremendously fast most common implementation. Allows exactly one null key.",
          "LinkedHashMap: Heavily maintains the exact original insertion order of relational entries.",
          "TreeMap: Automatically forcefully strictly stores entries heavily sorted dynamically strictly based completely on keys.",
          "Hashtable: Legacy fully heavily synchronized explicitly thread-safe native map alternative."
        ]
      },
      {
        heading: "Comparison: List vs Set vs Map",
        content: "Understanding strict differences defines robust architectural data choice dynamics:\n\nFeature | List | Set | Map\n1. Order Maintained: List (Yes), Set (Usually No), Map (Depends)\n2. Duplicates Allowed: List (Yes), Set (No), Map (Keys No, Values Yes)\n3. Index Access Used: List (Yes), Set (No), Map (No, Uses Keys)\n4. Data Type Handled: List (Elements), Set (Unique Elements), Map (Key-Value Pairs)\n5. Extends Root Collection: List (Yes), Set (Yes), Map (No)"
      }
    ],
    code: "import java.util.*;\n\npublic class InterfaceDeepDive {\n    public static void main(String[] args) {\n        // LIST Demo\n        List<String> list = new ArrayList<>();\n        list.add(\"Java\"); list.add(\"Python\"); list.add(\"Java\"); // duplicate allowed\n        System.out.println(\"List: \" + list);\n\n        // SET Demo\n        Set<Integer> set = new HashSet<>();\n        set.add(10); set.add(20); set.add(10); // duplicate ignored\n        System.out.println(\"Set: \" + set);\n\n        // MAP Demo\n        Map<Integer, String> map = new HashMap<>();\n        map.put(1, \"Java\"); map.put(2, \"Python\"); // Keys are unique\n        System.out.println(\"Map: \" + map);\n    }\n}"
  },
  "List Implementations": {
    description: "The List interface in Java represents an ordered collection that allows duplicate elements and maintains insertion order. The actual storage and working mechanisms are provided by its implementation classes: ArrayList, LinkedList, Vector, and Stack.",
    keyPoints: [
      "Implementations differ in internal data structure, performance, and synchronization.",
      "ArrayList is best for fast random retrieval.",
      "LinkedList is ideal for frequent dynamic insertions and deletions.",
      "Vector is thread-safe, and Stack provides LIFO functionality."
    ],
    sections: [
      {
        heading: "1. ArrayList Overview",
        content: "ArrayList is the most widely used implementation of the List interface. Internally, it gracefully uses a dynamic contiguous array to store actual elements. Unlike traditional fixed arrays, ArrayList automatically implicitly resizes itself efficiently when new elements are actively added.",
        points: [
          "Working Mechanism: Elements are stored sequentially in memory. If capacity fills, a larger array is created and elements are automatically copied.",
          "Characteristics: Maintains insertion order, allows duplicates and nulls. Random access get(index) is extremely fast.",
          "Advantages: Fast searching and retrieval. Consumes physically less memory than LinkedList.",
          "Limitations: Inserting or deleting elements squarely in the middle is inherently slow because subsequent elements must physically shift.",
          "Usage: Heavily preferred when reading operations are substantially more frequent than updates."
        ]
      },
      {
        heading: "2. LinkedList Overview",
        content: "LinkedList uses a complex doubly linked list data structure where each physical element (node) contains raw data along with two strictly maintained references pointing to the previous and next sequential elements.",
        points: [
          "Working Mechanism: Instead of contiguous block memory, elements are connected dynamically through memory links.",
          "Characteristics: Maintains insertion order, allows duplicates. Inserting or deleting elements is practically instantaneous because only neighboring reference pointers safely change.",
          "Advantages: Highly efficient dynamic insertions/deletions. Flexible immediate memory allocation. Supports native Deque/Queue operations.",
          "Limitations: Accessing specific elements strictly by index brutally requires slow linear traversal, making random access massively slow. Higher memory per-node footprint.",
          "Usage: Ideal when frequent immediate insertion and deletion operations are required across the collection."
        ]
      },
      {
        heading: "3. Vector Overview",
        content: "Vector is a heavy legacy baseline class that dynamically implements the List interface. It is physically structurally similar to ArrayList but natively synchronized, completely meaning it is strictly thread-safe and safely heavily suitable for multi-threaded parallel environments.",
        points: [
          "Working Mechanism: Uses a dynamic array internally but explicitly strictly synchronizes every single core method entirely to guarantee safe access by exactly one thread at a time.",
          "Characteristics: Maintains strict order, allows duplicates, resizes automatically.",
          "Advantages: Built-in thread safety natively without writing additional manual synchronization blocks.",
          "Limitations: Massive performance overhead severely generated by method-level synchronization makes it essentially obsolete in purely modern single-threaded standard applications."
        ]
      },
      {
        heading: "4. Stack Overview",
        content: "Stack is a legacy targeted subclass explicitly safely extending the Vector class that specifically narrowly represents a pure Last In First Out (LIFO) robust data structure.",
        points: [
          "Working Mechanism: Elements securely violently added using push() and exclusively removed securely strictly using pop(). The absolute last element strictly pushed is always identically popped first.",
          "Characteristics: Provides specific rigid methods for stack structural manipulations: push(), pop(), and peek().",
          "Advantages: Extremely useful structurally for nested recursion handling, complex mathematical expression evaluation, standard undo functionality, and deep algorithmic backtracking.",
          "Limitations: Considered completely legacy code; heavily modern standard Java aggressively prefers explicitly using Deque (specifically ArrayDeque) instead of Stack."
        ]
      },
      {
        heading: "Choosing the Correct List Implementation",
        content: "Selecting the correct structural generic implementation depends entirely on specific strict application processing needs:\n\n- Fast Read Access & Searching: Use ArrayList.\n- Frequent Modifications (Insert/Delete): Use LinkedList.\n- Multi-Threaded Native Synchronization: Use CopyOnWriteArrayList (Modern) or Vector (Legacy).\n- Strict Explicit LIFO Operations: Use ArrayDeque (Modern) or Stack (Legacy)."
      }
    ],
    code: "import java.util.*;\n\npublic class ListImplementationsDemo {\n    public static void main(String[] args) {\n        // ArrayList: Fast Read Access\n        List<String> arrayList = new ArrayList<>();\n        arrayList.add(\"Java\"); arrayList.add(\"Python\");\n        System.out.println(\"ArrayList Read: \" + arrayList.get(0));\n\n        // LinkedList: Fast Insert/Delete\n        List<Integer> linkedList = new LinkedList<>();\n        linkedList.add(10); linkedList.add(20);\n        linkedList.add(1, 15); // Efficient Middle Insert\n        System.out.println(\"LinkedList: \" + linkedList);\n\n        // Vector: Thread-Safe Legacy\n        List<String> vector = new Vector<>();\n        vector.add(\"A\"); vector.add(\"B\");\n        System.out.println(\"Vector: \" + vector);\n\n        // Stack: LIFO Structure\n        Stack<Double> stack = new Stack<>();\n        stack.push(10.5);\n        stack.push(20.5);\n        System.out.println(\"Stack Popped Element: \" + stack.pop()); // Prints 20.5\n    }\n}"
  },
  "Set Implementations": {
    description: "The Set interface in Java represents a collection that does strictly not allow duplicate elements, mathematically modeling a unique set. The actual behavior, performance, and ordering strictly depend completely on its specific implementation classes: HashSet, LinkedHashSet, and TreeSet.",
    keyPoints: [
      "Implementations differ mainly in internal storage mechanics, ordering guarantees, and operation efficiency.",
      "HashSet provides blazing fast performance but no guaranteed ordering.",
      "LinkedHashSet powerfully maintains chronological insertion order while ensuring uniqueness.",
      "TreeSet forcefully sorts elements natively but operates slightly slower."
    ],
    sections: [
      {
        heading: "1. HashSet Overview",
        content: "HashSet is overwhelmingly the most commonly used default implementation of the Set interface. It fundamentally stores elements using an advanced internal hashing mechanism, specifically backed by a native HashMap instance where elements act merely as keys.",
        points: [
          "Working Mechanism: When an element is added, Java calculates its Hash Code and dynamically places it securely into a specific memory bucket.",
          "Characteristics: Allows strictly only unique elements, aggressively ignoring duplicates. Allows exactly one null element. Does not guarantee any predictive ordering.",
          "Advantages: Tremendously fast constant-time performance O(1) for adding, searching, and deleting under ideal non-colliding conditions.",
          "Limitations: Iteration produces elements in entirely random unpredictable order. Not thread-safe by default."
        ]
      },
      {
        heading: "2. LinkedHashSet Overview",
        content: "LinkedHashSet safely extends HashSet and elegantly combines the massive speed advantages of hashing with a predictable linked list memory structure. This uniquely fundamentally maintains the strict chronological insertion order.",
        points: [
          "Working Mechanism: Actively uses a hash table for core storage but critically maintains a doubly linked list seamlessly connecting all elements precisely in the order they were inserted.",
          "Characteristics: Precludes duplicates, strictly preserves insertion order, allows exactly one null element.",
          "Advantages: Extremely useful when explicit uniqueness is required alongside predictable, reliable iteration order output (e.g., displaying a unique list exactly as users provided it).",
          "Limitations: Measurably consumes slightly more underlying memory than HashSet strictly due to maintaining the extra doubly-linked pointers."
        ]
      },
      {
        heading: "3. TreeSet Overview",
        content: "TreeSet is a highly advanced Set implementation that meticulously stores elements in forcefully sorted order. Internally, it is robustly powered by a self-balancing binary search structure famously known as a Red-Black Tree.",
        points: [
          "Working Mechanism: Upon specific insertion, elements are rigorously positioned structurally according to their natural sorting rules (or explicit custom Comparator logic).",
          "Characteristics: Excludes all duplicates cleanly. Absolutely does not allow any null values (would cause NullPointerException during sorting). Always dynamically sorted.",
          "Advantages: Ideal when auto-sorted data is heavily required purely by default. Supports highly advanced navigation methods (e.g., higher, lower, ceiling, floor).",
          "Limitations: Notably slower than general HashSet explicitly because it constantly forcefully maintains the strictly sorted tree structure logarithmically O(log n)."
        ]
      },
      {
        heading: "Comparing Key Implementations",
        content: "Choosing the precisely correct structure is essentially evaluating standard structural tradeoffs:\n\n- HashSet is overwhelmingly strictly preferred fundamentally when absolute performance matters and dynamic insertion ordering fundamentally does not.\n- LinkedHashSet becomes strictly practically vital when explicitly maintaining strict insertion order while heavily maintaining absolute uniqueness is completely required.\n- TreeSet dynamically becomes an absolute necessity explicitly when data completely rigorously demands strict sorting or complex relative navigation.",
        points: [
          "Real-Time Applications: Used when duplicates strictly must cleanly intelligently be proactively avoided across applications: maintaining explicitly completely unique User IDs, securely storing specific unique emails naturally, dynamically processing heavily distinct values securely in analytics ecosystems."
        ]
      }
    ],
    code: "import java.util.*;\n\npublic class SetImplementationsDemo {\n    public static void main(String[] args) {\n        // HashSet: Unordered, Unique\n        Set<String> hashSet = new HashSet<>();\n        hashSet.add(\"Java\"); hashSet.add(\"Python\"); hashSet.add(\"Java\");\n        System.out.println(\"HashSet: \" + hashSet);\n\n        // LinkedHashSet: Ordered, Unique\n        Set<Integer> linkedHashSet = new LinkedHashSet<>();\n        linkedHashSet.add(10); linkedHashSet.add(20); linkedHashSet.add(30);\n        System.out.println(\"LinkedHashSet: \" + linkedHashSet);\n\n        // TreeSet: Sorted (Natural/Comparator), Unique\n        Set<String> treeSet = new TreeSet<>();\n        treeSet.add(\"Banana\"); treeSet.add(\"Apple\"); treeSet.add(\"Mango\");\n        System.out.println(\"TreeSet Sorted Output: \" + treeSet); // Order: Apple, Banana, Mango\n    }\n}"
  },
  "Map Implementations": {
    description: "The Map interface in Java represents a specialized collection that stores data strictly as Key-Value pairs rather than individual elements. While it does not extend the root Collection interface, it serves as a critical pillar of the Java Collections Framework. Its behavior and performance heavily rely on its implementations: HashMap, LinkedHashMap, TreeMap, and Hashtable.",
    keyPoints: [
      "Every absolute key inherently must be strictly unique; values can be freely duplicated.",
      "HashMap dynamically provides the fastest raw retrieval and insertion speeds but zero order.",
      "LinkedHashMap smoothly maintains the exact chronological order of inserted entries.",
      "TreeMap strictly sorts all entries inherently chronologically based solely on the keys."
    ],
    sections: [
      {
        heading: "1. HashMap Overview",
        content: "HashMap is universally the most heavily utilized implementation of the Map interface. It stores its underlying entries using fast hashing mechanics natively. It does not maintain any explicit sorting or structural insertion order.",
        points: [
          "Working Mechanism: Calculates the Hash Code of the provided Key to securely optimize bucket storage location mapping.",
          "Characteristics: Precludes duplicate keys (overwrites natively on duplicate insertion). Strongly allows one exact null key and unlimited null values.",
          "Advantages: Overwhelmingly fast execution speed with general constant-time O(1) retrieval operations natively.",
          "Limitations: Iteration produces an explicitly unordered, unpredictable set inherently."
        ]
      },
      {
        heading: "2. LinkedHashMap Overview",
        content: "LinkedHashMap seamlessly merges the lightning-fast HashMap architecture with a dynamic doubly linked list backbone. This essentially guarantees that the entire map maintains predictable insertion ordering securely.",
        points: [
          "Working Mechanism: Mirrors standard HashMap functionality but structurally weaves a linked reference pointer effectively between sequenced entries.",
          "Characteristics: Prevents duplicated keys. Distinctly preserves strict chronological insertion order natively.",
          "Advantages: Excellent native structural choice when predictive consistent iteration is logically necessary.",
          "Limitations: Marginally noticeably slower and fundamentally naturally consumes slightly more active memory bandwidth than a raw HashMap."
        ]
      },
      {
        heading: "3. TreeMap Overview",
        content: "TreeMap provides an inherently sorted Map data structure powered by a robust self-balancing Red-Black Tree. Entries are sorted by either natural ordering or a custom Comparator.",
        points: [
          "Working Mechanism: Insertion operations compare the generic Key to dynamically actively rebalance and properly orient the tree.",
          "Characteristics: Null keys are strictly forbidden (throws NullPointerException). Entries are natively sorted by Key.",
          "Advantages: Ideal for range-based map queries and strictly ordered iteration.",
          "Limitations: Logarithmic O(log n) algorithmic access time, notably slower than standard HashMaps."
        ]
      },
      {
        heading: "4. Hashtable Overview",
        content: "Hashtable is a legacy class that implements the Map interface. It is synchronized, meaning it is entirely thread-safe and suitable for multi-threaded applications.",
        points: [
          "Working Mechanism: Similar to HashMap but internally synchronizes every method.",
          "Characteristics: Precludes duplicate keys. Critically, it does not allow ANY null keys or null values.",
          "Advantages: Built-in thread safety for legacy Java environments.",
          "Limitations: High performance overhead due to synchronization. Modern applications aggressively prefer ConcurrentHashMap instead."
        ]
      },
      {
        heading: "Choosing the Correct Map Implementation",
        content: "Understanding strict differences defines robust architectural data choice dynamics:\n\n- Fast Read Access & Unordered: Use HashMap.\n- Insertion Order Preservation: Use LinkedHashMap.\n- Sorted Keys Required: Use TreeMap.\n- Thread-Safe Modern Systems: Use ConcurrentHashMap.",
        points: [
          "Real-Time Applications: Employee ID to Employee Data mapping, product pricing dictionaries, application context property environments, caching user session dictionaries natively."
        ]
      }
    ],
    code: "import java.util.*;\n\npublic class MapImplementationsDemo {\n    public static void main(String[] args) {\n        // HashMap: Unordered, Keys Unique\n        Map<String, Integer> hashMap = new HashMap<>();\n        hashMap.put(\"Java\", 1); hashMap.put(\"Python\", 2); hashMap.put(\"Java\", 3); // Overwrites Java\n        System.out.println(\"HashMap: \" + hashMap);\n\n        // LinkedHashMap: Ordered randomly by insertions, Keys Unique\n        Map<String, Integer> linkedHashMap = new LinkedHashMap<>();\n        linkedHashMap.put(\"A\", 10); linkedHashMap.put(\"B\", 20); linkedHashMap.put(\"C\", 30);\n        System.out.println(\"LinkedHashMap: \" + linkedHashMap);\n\n        // TreeMap: Sorted by Keys automatically\n        Map<String, Integer> treeMap = new TreeMap<>();\n        treeMap.put(\"Banana\", 15); treeMap.put(\"Apple\", 5); treeMap.put(\"Mango\", 25);\n        System.out.println(\"TreeMap Sorted Output: \" + treeMap); // Order: Apple, Banana, Mango\n    }\n}"
  },
  "Date/Calendar Classes": {
    description: "Handling date and time is an important part of software development. Earlier versions of Java mainly used Date and Calendar classes from the java.util package to represent dates, manipulate time values, perform calculations, and format date information.",
    keyPoints: [
      "The Date class represents an instant in time but many of its manipulation methods are deprecated.",
      "The Calendar class provides flexible date manipulation, field-based access, and time calculations.",
      "Modern Java applications prefer the java.time package introduced in Java 8 (LocalDate, LocalTime, etc.)."
    ],
    sections: [
      {
        heading: "1. Date Class Overview",
        content: "The Date class represents a specific instant in time measured in milliseconds from January 1, 1970 (Unix Epoch Time). It is used to store and retrieve date and time information.",
        points: [
          "Working Mechanism: Internally stores time as a long value representing elapsed milliseconds. Automatically captures current system date and time upon creation.",
          "Characteristics: Represents both date and time together. Widely used for storing timestamps in legacy systems and APIs.",
          "Important Methods: getTime() (returns milliseconds), before() (checks earlier date), after() (checks later date), equals() (compares), toString() (converts to readable format).",
          "Advantages: Simple to use and useful for basic timestamp storage and comparisons.",
          "Limitations: Most manipulation methods are deprecated due to lack of flexibility for internationalization and time zones."
        ]
      },
      {
        heading: "2. Calendar Class Overview",
        content: "The Calendar class is an abstract class introduced to overcome the limitations of the Date class. It provides powerful methods for date manipulation, allowing programmers to work with individual components (year, month, day, hour, minute, second).",
        points: [
          "Working Mechanism: Uses the Calendar.getInstance() method to return a calendar object configured with the current date, time, and default time zone.",
          "Characteristics: Separates date into multiple fields, allowing modification of individual parts. Supports localization, time-zones, and date arithmetic.",
          "Important Methods: get() (retrieves field value), set() (changes field), add() (modifies date value), roll() (modifies field without changing larger fields), getTime() (converts Calendar to Date object).",
          "Advantages: Flexible date manipulation, handles leap years automatically, and supports arithmetic operations.",
          "Limitations: API is complex and less readable than the modern Java 8 time API."
        ]
      },
      {
        heading: "Difference Between Date and Calendar",
        content: "Date mainly represents a timestamp, whereas Calendar provides detailed control over date components. Date is simpler but less powerful, while Calendar offers advanced manipulation features.\n\nDate objects are mostly used for simply storing time values, whereas Calendar is used for complex calculations and modifications."
      },
      {
        heading: "Modern Alternative (Java 8 Time API)",
        content: "Although Date and Calendar are still supported, modern demand strictly prefers the java.time package introduced in Java 8. Classes like LocalDate, LocalTime, and LocalDateTime provide better design, built-in thread safety, and vastly improved readability.",
        points: [
          "Real-Time Applications: Used across applications for attendance systems, billing software, log management timestamps, reservation booking scheduling, and event tracking tools."
        ]
      }
    ],
    code: "import java.util.Date;\nimport java.util.Calendar;\n\npublic class DateCalendarDemo {\n    public static void main(String[] args) {\n        // 1. Date Class Usage\n        Date date = new Date();\n        System.out.println(\"Current Timestamp: \" + date.getTime());\n        System.out.println(\"Readable Date: \" + date.toString());\n\n        // 2. Calendar Class Usage\n        Calendar cal = Calendar.getInstance();\n        System.out.println(\"Current Year: \" + cal.get(Calendar.YEAR));\n        System.out.println(\"Current Month: \" + (cal.get(Calendar.MONTH) + 1)); // 0-based\n        \n        // Modifying Calendar\n        cal.add(Calendar.DATE, 5); // Add 5 days\n        System.out.println(\"Future Date (5 days later): \" + cal.getTime());\n    }\n}"
  },

  // Java 8 Features
  "Lambda Expressions": {
    description: "Lambda expressions are anonymous functions introduced in Java 8 to implement functional interfaces, replacing anonymous inner classes.",
    keyPoints: [
      "Improve readability and reduce code size.",
      "Work only with Functional Interfaces.",
      "Enable passing behavior as data.",
      "Widely used with Collections, Streams, and Multithreading."
    ],
    sections: [
      {
        heading: "Introduction to Lambda Expressions",
        content: "Lambda Expressions were introduced in Java 8 as part of Java’s move toward functional programming. Before Java 8, developers used anonymous inner classes to implement interfaces containing a single method. These implementations required more lines of code and reduced readability. Lambda expressions solve this problem by allowing methods to be written in a compact and expressive form.\n\nA lambda expression represents an anonymous function, meaning a function without a name that can be passed as an argument, stored in variables, or returned from another method. Instead of writing full class implementations, developers can directly provide behavior using lambda syntax.\n\nIn simple words:\nLambda Expression = Short way to implement interface methods",
        points: [
          "Reduce boilerplate code",
          "Improve readability",
          "Support functional programming",
          "Enable passing behavior as data",
          "Simplify collection operations"
        ]
      },
      {
        heading: "Functional Programming Concept in Java",
        content: "Functional programming focuses on what to do rather than how to do it. Lambda expressions allow Java programs to treat functions like objects.\n\nBefore Lambda:\nBehavior defined using classes\n\nAfter Lambda:\nBehavior written directly as expressions\n\nThis makes Java closer to modern programming languages that support functional concepts."
      },
      {
        heading: "Functional Interface (Very Important Concept)",
        content: "Lambda expressions work only with Functional Interfaces.\n\nA Functional Interface is an interface containing exactly one abstract method. The lambda expression provides the implementation for that method.\n\nEven though only one abstract method is allowed, functional interfaces can contain:\nDefault methods, Static methods, Private methods (Java 9+)\n\nExample Functional Interface:\n@FunctionalInterface\ninterface Message {\n    void sayHello();\n}\n\nLambda implementation:\nMessage msg = () -> System.out.println(\"Hello\");\nmsg.sayHello();",
        points: [
          "Contains one abstract method",
          "Can use @FunctionalInterface annotation",
          "Enables lambda usage",
          "Supports polymorphism"
        ]
      },
      {
        heading: "Syntax of Lambda Expression",
        content: "General form:\n(parameters) -> expression\nor\n(parameters) -> { statements }\n\nSyntax Components Explained:\n\n1. Parameters\nInput values passed to the lambda expression.\nExamples: (), (x), (a, b)\n\n2. Arrow Operator (->)\nSeparates parameters from the body of the lambda expression.\n\n3. Body\nContains logic or statements to execute.\nExamples: x -> x * x, (a, b) -> a + b"
      },
      {
        heading: "Types of Lambda Expressions",
        content: "1. Lambda with No Parameters\nUsed when the method does not require input.\nRunnable r = () -> System.out.println(\"Task Running\");\nr.run();\n\n2. Lambda with Single Parameter\nParentheses are optional.\nx -> System.out.println(x);\n\n3. Lambda with Multiple Parameters\nParentheses are mandatory.\n(a, b) -> a + b;\n\n4. Lambda with Multiple Statements\nCurly braces required when more than one statement exists.\n(a, b) -> {\n    int sum = a + b;\n    return sum;\n};"
      },
      {
        heading: "Type Inference in Lambda Expressions",
        content: "Java compiler automatically determines parameter data types. This feature is called Type Inference.\n\nExample:\n(a, b) -> a + b\n\nInstead of:\n(int a, int b) -> a + b",
        points: [
          "Reduces code size",
          "Improves readability",
          "Compiler handles type checking"
        ]
      },
      {
        heading: "Lambda Expressions vs Anonymous Inner Classes",
        content: "Anonymous Class:\nRunnable r = new Runnable() {\n    public void run() {\n        System.out.println(\"Running\");\n    }\n};\n\nLambda Expression:\nRunnable r = () -> System.out.println(\"Running\");",
        points: [
          "Code Length: Lambda is Short, Anonymous Class is Long",
          "Readability: Lambda is High, Anonymous Class is Low",
          "Performance: Lambda is Faster, Anonymous Class is Slightly slower",
          "Syntax: Lambda is Simple, Anonymous Class is Complex"
        ]
      },
      {
        heading: "Lambda Expressions with Collections",
        content: "Lambda expressions are heavily used with Java Collections Framework.\n\nExample using forEach():\nList<String> list = Arrays.asList(\"Java\",\"Python\",\"C\");\nlist.forEach(name -> System.out.println(name));",
        points: [
          "Iteration",
          "Filtering",
          "Sorting",
          "Searching",
          "Mapping data"
        ]
      },
      {
        heading: "Lambda Expressions in Multithreading",
        content: "Before Java 8:\nnew Thread(new Runnable(){\n    public void run(){\n        System.out.println(\"Thread Running\");\n    }\n}).start();\n\nUsing Lambda:\nnew Thread(() -> System.out.println(\"Thread Running\")).start();",
        points: [
          "Cleaner thread creation",
          "Less boilerplate code",
          "Easier concurrency programming"
        ]
      },
      {
        heading: "Method References (Related Concept)",
        content: "Sometimes lambda expressions only call an existing method. Instead of writing a lambda, method references can be used.\n\nLambda:\nx -> System.out.println(x)\n\nMethod Reference:\nSystem.out::println"
      },
      {
        heading: "Advantages of Lambda Expressions",
        points: [
          "Reduces coding effort",
          "Improves maintainability",
          "Encourages functional style",
          "Simplifies APIs",
          "Better performance in stream operations",
          "Easier parallel processing"
        ]
      },
      {
        heading: "Limitations of Lambda Expressions",
        points: [
          "Works only with functional interfaces",
          "Cannot define instance variables",
          "Not suitable for very complex logic",
          "Debugging can be harder"
        ]
      },
      {
        heading: "Real-World Applications",
        content: "Lambda expressions are used in various scenarios across modern Java applications.",
        points: [
          "GUI event handling",
          "Stream API processing",
          "Data filtering",
          "Database operations",
          "Multithreading",
          "Sorting collections"
        ]
      }
    ],
    code: "interface Calculator {\n    int calculate(int a, int b);\n}\n\npublic class LambdaExample {\n    public static void main(String[] args) {\n        Calculator add = (a, b) -> a + b;\n        Calculator sub = (a, b) -> a - b;\n\n        System.out.println(\"Addition: \" + add.calculate(10,5));\n        System.out.println(\"Subtraction: \" + sub.calculate(10,5));\n    }\n}"
  },
  "Method References": {
    description: "Method References are a compact form of lambda expression that refer directly to existing methods or constructors.",
    keyPoints: [
      "Use the :: operator.",
      "Work only with functional interfaces.",
      "Provide a simpler and more readable shortcut for Lambda Expressions.",
      "Improves readability and reduces code complexity."
    ],
    sections: [
      {
        heading: "Introduction to Method References",
        content: "Method References were introduced in Java 8 as an extension of Lambda Expressions. They provide a simpler and more readable way to refer to an existing method without writing a full lambda expression. When a lambda expression only calls an already defined method, method references can replace the lambda expression.\n\nInstead of writing code to call a method, we directly reference the method using the :: operator.",
        points: [
          "Shortcut for Lambda Expression",
          "Lambda Expression: x -> System.out.println(x)",
          "Method Reference: System.out::println",
          "Both perform the same task, but method references make code cleaner."
        ]
      },
      {
        heading: "Why Method References Are Needed",
        content: "Before Java 8: Required anonymous classes, more boilerplate code, reduced readability.\nWith Lambda Expressions: Code became shorter.\nWith Method References: Code becomes even simpler when method already exists.",
        points: [
          "Improves readability",
          "Reduces unnecessary lambda code",
          "Cleaner syntax",
          "Promotes code reuse",
          "Easier maintenance"
        ]
      },
      {
        heading: "Syntax of Method References",
        content: "General syntax:\nClassName::methodName\nor\nobjectName::methodName\n\nSyntax Components:\nClassName / ObjectName → Where method exists\n:: Operator → Method reference operator\nmethodName → Existing method"
      },
      {
        heading: "Types of Method References",
        content: "Java supports four types of method references:\n\n1. Reference to Static Method\nUsed when a lambda expression calls a static method.\nLambda Expression: (a, b) -> Math.max(a, b)\nMethod Reference: Math::max\n\n2. Reference to Instance Method of Particular Object\nRefers to a method belonging to a specific object.\nLambda Expression: x -> System.out.println(x)\nMethod Reference: System.out::println\n\n3. Reference to Instance Method of Arbitrary Object\nUsed when method belongs to an object, but object is supplied later.\nLambda Expression: (a, b) -> a.compareTo(b)\nMethod Reference: String::compareTo\n\n4. Reference to Constructor\nAllow object creation using method reference syntax.\nLambda Expression: () -> new Student()\nMethod Reference: Student::new",
        points: [
          "Reference to Static Method",
          "Reference to Instance Method of Particular Object",
          "Reference to Instance Method of Arbitrary Object",
          "Reference to Constructor"
        ]
      },
      {
        heading: "Method Reference vs Lambda Expression",
        content: "Comparison:\n\nCode Length:\nLambda Expression: Short\nMethod Reference: Very Short\n\nReadability:\nLambda Expression: Good\nMethod Reference: Excellent\n\nUsage:\nLambda Expression: Any logic\nMethod Reference: Existing methods only\n\nFlexibility:\nLambda Expression: High\nMethod Reference: Limited"
      },
      {
        heading: "When to Use Method References",
        content: "Use method references when:\nLambda only calls an existing method\nNo additional logic is required\nCode readability is important\n\nDo NOT use when:\nMultiple statements needed\nComplex logic exists",
        points: [
          "Only for existing methods",
          "For cleaner code",
          "Not for complex logic"
        ]
      },
      {
        heading: "Method References with Functional Interfaces",
        content: "Method references work only with functional interfaces.\nCommon interfaces: Runnable, Comparator, Consumer, Supplier, Function\n\nExample:\nRunnable r = System.out::println;"
      },
      {
        heading: "Real-World Uses",
        content: "Method references are commonly used in various areas of a Java application.",
        points: [
          "Stream API operations",
          "Collection processing",
          "Sorting data",
          "Event handling",
          "Object creation",
          "Parallel programming"
        ]
      }
    ],
    code: "import java.util.*;\n\npublic class MethodRefDemo {\n    public static void print(String s){\n        System.out.println(s);\n    }\n\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList(\"Java\",\"Python\",\"C++\");\n        list.forEach(MethodRefDemo::print);\n    }\n}"
  },
  "Functional Interfaces": {
    description: "A Functional Interface in Java is an interface that contains exactly one abstract method. They were introduced in Java 8 to support Lambda Expressions and Method References.",
    keyPoints: [
      "Contains only one abstract method.",
      "Can contain multiple default and static methods.",
      "Used as the foundation for Lambda Expressions and Method References.",
      "Java provides many built-in functional interfaces in the java.util.function package."
    ],
    sections: [
      {
        heading: "Introduction to Functional Interfaces",
        content: "Before Java 8, interfaces were mainly used for abstraction and inheritance. After Java 8, interfaces also became a way to represent functions using lambda expressions. Functional interfaces enable Java to follow functional programming concepts by allowing behavior (methods) to be passed as parameters.\n\nSimple Definition:\nA functional interface is an interface that contains only one abstract method. It can contain multiple default and static methods and is used with Lambda Expressions."
      },
      {
        heading: "Why Functional Interfaces Are Needed",
        content: "Traditional Java programming required creating separate classes or anonymous inner classes to implement interfaces. This resulted in lengthy and complex code. Functional interfaces simplify this process by allowing direct method implementation using lambda expressions.\n\nFunctional interfaces make Java programs more concise, more readable, more flexible, and easier to maintain."
      },
      {
        heading: "Characteristics of Functional Interfaces",
        points: [
          "Contains only one abstract method",
          "Can have any number of default methods",
          "Can have static methods",
          "Supports lambda expressions",
          "Can extend another interface (if only one abstract method remains)"
        ]
      },
      {
        heading: "@FunctionalInterface Annotation",
        content: "Java provides a special annotation called @FunctionalInterface. This annotation ensures that the interface contains only one abstract method. If more than one abstract method is added, the compiler generates an error.",
        points: [
          "Prevents accidental errors",
          "Improves code clarity",
          "Ensures functional interface rules"
        ]
      },
      {
        heading: "Functional Interface and Lambda Expressions",
        content: "Lambda expressions work only with functional interfaces because the compiler needs exactly one method to implement. The lambda provides the implementation for that single abstract method."
      },
      {
        heading: "Types of Functional Interfaces",
        content: "Functional interfaces are broadly classified into User-Defined Functional Interfaces and Built-in Functional Interfaces.\n\n1. User-Defined Functional Interfaces\nProgrammers can create their own functional interfaces for custom behavior definition.\n\n2. Built-in Functional Interfaces (java.util.function Package)\nJava provides many predefined functional interfaces such as Predicate, Function, Consumer, and Supplier."
      },
      {
        heading: "Built-in Functional Interfaces Summary",
        content: "Predicate: Condition checking (boolean test(T t))\nFunction: Input to Output mapping (R apply(T t))\nConsumer: Input only, no return value (void accept(T t))\nSupplier: Output only, no input (T get())",
        points: [
          "Predicate: Condition checking",
          "Function: Input -> Output",
          "Consumer: Input only",
          "Supplier: Output only"
        ]
      },
      {
        heading: "Functional Interface vs Normal Interface",
        content: "Functional Interface: One abstract method, supports lambda, used for functional programming, less code.\nNormal Interface: Multiple abstract methods, no lambda support, used for abstraction, more code."
      },
      {
        heading: "Advantages and Limitations",
        content: "Advantages:\nEnables lambda expressions, reduces boilerplate code, improves readability, encourages functional programming, simplifies event handling, and supports Stream API.\n\nLimitations:\nOnly one abstract method allowed, not suitable for large interfaces, requires understanding of lambda concepts."
      },
      {
        heading: "Real-World Applications",
        content: "Functional interfaces are widely used in Stream API processing, collection filtering, event listeners, multithreading, data transformation, and sorting/searching."
      }
    ],
    code: "@FunctionalInterface\ninterface Calculator {\n    int operate(int a, int b);\n}\n\npublic class FunctionalDemo {\n    public static void main(String[] args) {\n        Calculator add = (a, b) -> a + b;\n        Calculator mul = (a, b) -> a * b;\n\n        System.out.println(\"Addition: \" + add.operate(5,3));\n        System.out.println(\"Multiplication: \" + mul.operate(5,3));\n    }\n}"
  },
  "Stream API": {
    description: "The Stream API in Java 8 provides a modern approach for processing collections of data in a functional and efficient way through a pipeline of operations.",
    keyPoints: [
      "Stream represents a sequence of elements supporting sequential and parallel aggregate operations.",
      "Streams do not store data; they process data from a source.",
      "Operations are lazy and only execute when a terminal operation is called.",
      "Improves performance by supporting parallel processing."
    ],
    sections: [
      {
        heading: "Introduction to Stream API",
        content: "The Stream API was introduced in Java 8 to process collections of data in a functional and efficient way. It provides a modern approach for performing operations such as filtering, sorting, searching, mapping, and aggregation on collections like Lists, Sets, and Arrays.\n\nA stream represents a sequence of elements that supports various operations to perform computations. Unlike collections, streams do not store data; instead, they process data from a source.\n\nStream = Data processing pipeline"
      },
      {
        heading: "Why Stream API is Needed",
        content: "Before Java 8, collection processing required loops, iterators, temporary variables, and complex logic. This made programs lengthy and less readable. Stream API solves these problems by reducing boilerplate code, supporting functional programming, enabling parallel processing, and improving performance."
      },
      {
        heading: "Features of Stream API",
        points: [
          "Does not modify original data",
          "Supports functional programming",
          "Uses lambda expressions",
          "Supports parallel execution",
          "Improves performance",
          "Internal iteration (automatic looping)"
        ]
      },
      {
        heading: "Stream Processing Concept",
        content: "Stream operations work like a pipeline, consisting of Source, Intermediate Operations, and a Terminal Operation.\n\n1. Source\nData source from where the stream is created (e.g., List, Set, Array, File).\n\n2. Intermediate Operations\nTransform the stream and return another stream. These are lazy operations. Examples: filter(), map(), sorted(), distinct(), limit().\n\n3. Terminal Operation\nProduces a final result or output. Examples: forEach(), collect(), count(), reduce(), findFirst()."
      },
      {
        heading: "Creating Streams",
        content: "From Collection: list.stream()\nFrom Array: Arrays.stream(arr)\nUsing Stream.of(): Stream.of(1,2,3,4)\nParallel Stream: list.parallelStream()"
      },
      {
        heading: "Common Intermediate Operations",
        content: "Intermediate operations transform streams:\n\n1. filter(): Used to select elements based on condition. Removes unwanted elements, returns filtered stream.\n\n2. map(): Transforms elements. Converts data, used for transformation.\n\n3. sorted(): Sorts elements.\n\n4. distinct(): Removes duplicate elements.\n\n5. limit(): Limits number of elements."
      },
      {
        heading: "Common Terminal Operations",
        content: "Terminal operations produce a result:\n\n1. forEach(): Iterates elements.\n\n2. collect(): Converts stream to collection.\n\n3. count(): Counts elements.\n\n4. reduce(): Performs aggregation operation.\n\n5. findFirst(): Returns first element."
      },
      {
        heading: "Lazy Evaluation Concept",
        content: "Intermediate operations are not executed immediately. Execution happens only when a terminal operation is called. This improves performance, avoids unnecessary computation, and ensures efficient memory usage."
      },
      {
        heading: "Sequential Stream vs Parallel Stream",
        content: "Sequential Stream: Executes one by one on a single thread.\nParallel Stream: Executes multiple elements simultaneously using multiple threads.\n\nAdvantages of Parallel Streams: Faster processing, better CPU utilization, and suitable for large data."
      },
      {
        heading: "Stream API vs Collection",
        content: "Collection: Designed to store data, uses external iteration, allows modification, normal performance.\nStream: Designed to process data, uses internal iteration, allows no modification, optimized performance."
      },
      {
        heading: "Real-World Uses",
        content: "Stream API is widely used in data filtering, database result processing, analytics operations, log processing, large dataset manipulation, and web applications."
      }
    ],
    code: "import java.util.*;\nimport java.util.stream.*;\n\npublic class StreamExample {\n    public static void main(String[] args) {\n        List<Integer> list = Arrays.asList(1,2,3,4,5,6);\n\n        List<Integer> result = list.stream()\n                .filter(x -> x % 2 == 0)\n                .map(x -> x * x)\n                .collect(Collectors.toList());\n\n        System.out.println(result); // [4, 16, 36]\n    }\n}"
  },
  "Stream Filter": {
    description: "The filter() method is an intermediate Stream API operation used to select elements from a collection based on a specified condition.",
    keyPoints: [
      "Selects required elements from data.",
      "Uses the Predicate Functional Interface.",
      "Executes lazily and does not modify the original collection.",
      "Supports chaining with other filters and operations."
    ],
    sections: [
      {
        heading: "Introduction to Stream Filters",
        content: "In the Java Stream API, filtering is one of the most important operations used to select elements from a collection based on specific conditions. The filter() method allows programmers to process only those elements that satisfy a given condition.\n\nFiltering helps remove unwanted data and keep only required elements during stream processing. It is commonly used in searching, validation, data analysis, and collection manipulation."
      },
      {
        heading: "filter() Method Definition",
        content: "The filter operation uses a Predicate Functional Interface, which returns either true or false. If the condition is true, the element is included; if false, it is removed.\n\nSyntax: stream.filter(condition) or stream.filter(element -> condition)"
      },
      {
        heading: "How filter() Works",
        content: "The filter method checks each element in the stream. If condition = TRUE, element is included. If condition = FALSE, element is removed.\n\nProcessing Flow: Collection -> Stream -> Filter Condition -> Filtered Stream -> Output"
      },
      {
        heading: "Characteristics of Stream Filters",
        points: [
          "Intermediate operation",
          "Lazy execution",
          "Does not modify original collection",
          "Returns new stream",
          "Uses Predicate interface",
          "Supports chaining"
        ]
      },
      {
        heading: "Using filter() with Lambda Expression",
        content: "Lambda expressions define filtering conditions easily.\n\nExample:\nlist.stream().filter(x -> x % 2 == 0).forEach(System.out::println);\n\nThis checks for even numbers and prints only matching elements."
      },
      {
        heading: "Filtering Strings",
        content: "Filtering is commonly used with String data. Useful for searching data, case-based filtering, and pattern matching.\n\nExample:\nnames.stream().filter(name -> name.startsWith(\"R\")).forEach(System.out::println);"
      },
      {
        heading: "Multiple Filters (Chaining)",
        content: "Streams allow applying multiple filters sequentially. Applying multiple filters cleans up the code, ensures step-by-step filtering, and provides flexible conditions.\n\nExample:\nlist.stream().filter(x -> x > 10).filter(x -> x < 30).forEach(System.out::println);"
      },
      {
        heading: "Filtering Maps or Objects",
        content: "Filtering objects based on fields is very common. You can check a field value within the lambdas. e.g. stream().filter(s -> s.age >= 18)"
      },
      {
        heading: "Combining filter() with Other Operations",
        content: "Filter is often combined with other operations like map() and collect(). By combining filter and collect, the results can be stored into another collection. By combining filter and map, the filtered results can be transformed before being collected or output."
      },
      {
        heading: "Lazy Evaluation in filter()",
        content: "The filter operation executes only when a terminal operation is called. Execution starts when operations like forEach(), collect(), or count() are invoked. This approach results in better performance and efficient memory usage."
      },
      {
        heading: "Predicate Functional Interface in filter()",
        content: "filter() internally uses Predicate. The Predicate method boolean test(T t) evaluates each element. You can also extract Predicate to a variable."
      },
      {
        heading: "Real-World Uses of Stream Filters",
        content: "Filtering is widely used in employee salary filtering, student result processing, product searching, database record selection, log analysis, and user validation systems."
      },
      {
        heading: "Advantages and Limitations",
        content: "Advantages: Reduces loop usage, improves readability, functional programming style, easy condition checking, supports parallel processing, clean data manipulation.\n\nLimitations: Cannot modify elements directly, stream cannot be reused, debugging chain operations sometimes harder."
      }
    ],
    code: "import java.util.*;\nimport java.util.stream.*;\n\npublic class StreamFilterDemo {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Java\",\"Python\",\"C\",\"JavaScript\");\n\n        List<String> result = names.stream()\n                 .filter(n -> n.length() > 3)\n                 .collect(Collectors.toList());\n\n        System.out.println(result); // [Java, Python, JavaScript]\n    }\n}"
  },
  "Interface Changes": {
    description: "Starting in Java 8, interfaces received major updates including Default and Static methods, and Private methods in Java 9, allowing them to provide method implementations.",
    keyPoints: [
      "Java 8 introduced Default and Static methods in interfaces.",
      "Java 9 introduced Private methods to support code reuse inside interfaces.",
      "These changes allowed interfaces to evolve without breaking backward compatibility.",
      "Functional interfaces were also formalized in Java 8."
    ],
    sections: [
      {
        heading: "Introduction to Interface Changes",
        content: "Before Java 8, interfaces in Java were very limited. They were used only for abstraction and allowed only abstract methods and public static final variables. If a new method was added to an interface, all implementing classes were forced to implement it, breaking existing programs.\n\nTo solve this, Java introduced major improvements starting from Java 8, making interfaces more powerful and flexible by allowing them to include method implementations."
      },
      {
        heading: "Default Methods in Interfaces (Java 8)",
        content: "A default method is a method inside an interface that has a body. It allows interfaces to provide default implementation without forcing implementing classes to override it. Default methods are declared using the 'default' keyword.\n\nThey contain method implementation, are optional to override, support backward compatibility, and enable interface evolution."
      },
      {
        heading: "Static Methods in Interfaces (Java 8)",
        content: "Java 8 allows interfaces to contain static methods with implementations. These methods belong to the interface itself, not to objects. Static methods are accessed using the interface name.\n\nThey cannot be overridden, are called using the interface name, act as utility/helper methods, and improve code organization."
      },
      {
        heading: "Functional Interface Support (Java 8)",
        content: "Java 8 formalized functional interfaces (interfaces with only one abstract method), enabling lambda expressions. This enables functional programming, simplifies event handling, and is heavily used across Java."
      },
      {
        heading: "Private Methods in Interfaces (Java 9)",
        content: "Java 9 added private methods in interfaces. Private methods allow code reuse inside interface methods. They help avoid duplication between default and static methods.\n\nThey are accessible only inside the interface, cannot be overridden, improve code reuse, and enhance encapsulation."
      },
      {
        heading: "Interface vs Abstract Class (After Changes)",
        content: "While interfaces can now have method implementations like abstract classes, they still differ. Interfaces support multiple inheritance, while abstract classes do not. Abstract classes can have constructors and instance variables, whereas interfaces cannot."
      },
      {
        heading: "Real-World Uses",
        content: "Modern interfaces are used in the Stream API, Collection framework, Lambda expressions, Framework design, API development, and Event handling systems."
      }
    ],
    code: "interface Animal {\n    default void eat() {\n        System.out.println(\"Animal Eating\");\n    }\n    static void info() {\n        System.out.println(\"Animal Interface\");\n    }\n    private void sleep() {\n        System.out.println(\"Animal Sleeping\");\n    }\n    default void action() {\n        sleep();\n    }\n}\n\nclass Dog implements Animal {}\n\npublic class Demo {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();\n        d.action();\n        Animal.info();\n    }\n}"
  },
  "For Each Method": {
    description: "The forEach() method was introduced in Java 8 as part of the Iterable interface and Stream API. It simplifies iteration using Lambda Expressions.",
    keyPoints: [
      "Introduced in Java 8.",
      "Used to iterate over elements sequentially.",
      "Accepts Consumer Functional Interface.",
      "Improves readability and reduces code length."
    ],
    sections: [
      {
        heading: "Introduction to forEach()",
        content: "The forEach() method was introduced in Java 8 as part of the Iterable interface and Stream API. It is mainly used to iterate over elements of a collection or stream in a simple and modern way.\n\nBefore Java 8, programmers used traditional loops like the for loop or enhanced for loop to traverse elements. The forEach() method simplifies iteration using Lambda Expressions, making code shorter, cleaner, and easier to read."
      },
      {
        heading: "Definition and Syntax",
        content: "The forEach() method executes a specified operation on every element present in a collection or stream.\n\nHere, 'action' represents a lambda expression or method reference.\nSyntax (Collection): collection.forEach(action);\nSyntax (Stream): stream.forEach(action);"
      },
      {
        heading: "How forEach() Works",
        content: "The forEach() method internally loops through all elements and applies the provided function to each item one by one.",
        points: [
          "Collection elements are accessed sequentially",
          "Lambda expression receives each element",
          "Operation is executed",
          "Process repeats until all elements are processed"
        ]
      },
      {
        heading: "Advantages of forEach() Method",
        content: "1. Simple Syntax: Reduces boilerplate looping code.\n2. Readable Code: Improves clarity compared to traditional loops.\n3. Functional Programming Support: Works smoothly with Lambda Expressions.\n4. Less Error-Prone: No need to manage loop counters manually.\n5. Works with Streams: Supports modern data processing techniques."
      },
      {
        heading: "forEach() vs Traditional Loop",
        content: "forEach() provides a much shorter code length and higher readability compared to a traditional loop. It fully supports functional style coding. However, it does not provide index access (which a for loop does), but it easily supports parallel streams."
      },
      {
        heading: "forEach() vs forEachOrdered()",
        content: "forEach(): May process elements in any order in parallel streams.\nforEachOrdered(): Maintains the original order even in parallel streams."
      },
      {
        heading: "Important Points and Limitations",
        content: "Important Points:\n- Belongs to Iterable and Stream interfaces.\n- Accepts Consumer Functional Interface.\n- Cannot break or continue like traditional loops.\n- Mainly used for performing operations (printing, updating, logging).\n\nLimitations:\n- No index access.\n- Cannot stop iteration midway.\n- Not ideal when complex loop control is required."
      },
      {
        heading: "Real-Time Uses",
        content: "Printing collection data, processing database records, applying operations on lists, logging information, stream data handling."
      }
    ],
    code: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Ram\", \"Ravi\", \"Sita\");\n\n        // Using Lambda Expression\n        names.forEach(name -> System.out.println(name));\n\n        // Using Method Reference\n        names.forEach(System.out::println);\n    }\n}"
  },
  "Stream Collectors": {
    description: "Stream Collectors are utilities in Java 8 that gather processed stream elements into specific formats like Lists, Sets, Maps, or summarize them.",
    keyPoints: [
      "Collectors perform a mutable reduction operation on stream elements.",
      "The Collectors class provides many predefined methods like toList, toSet, groupingBy, etc.",
      "collect() is a terminal operation that ends the stream pipeline.",
      "Used to convert stream results into meaningful outputs and data structures."
    ],
    sections: [
      {
        heading: "Introduction to Stream Collectors",
        content: "In Java 8, the Stream API introduced powerful data processing capabilities. After performing operations like filtering, mapping, or sorting on streams, the processed data must usually be converted back into a collection or final result. This is where Collectors are used.\n\nCollectors help in gathering stream elements into different forms such as List, Set, Map, String, Summary values, and Grouped data. Collectors provide a flexible way to transform stream results into meaningful output."
      },
      {
        heading: "What is a Collector?",
        content: "A Collector is a utility that performs a mutable reduction operation on stream elements. In simple words: Collectors collect processed stream data into a final container or result.\n\nThe Collectors class belongs to: java.util.stream.Collectors and contains many predefined methods used with streams.\n\nBasic Syntax: stream.collect(Collectors.method());\nGeneral Flow: Collection -> Stream -> Operations -> Collectors -> Result"
      },
      {
        heading: "Basic Collector Methods",
        points: [
          "toList(): Collects stream elements into a List. Most commonly used.",
          "toSet(): Collects elements into a Set, removing duplicate elements automatically.",
          "toMap(): Converts stream elements into a Map, useful for Key-value data storage."
        ]
      },
      {
        heading: "Grouping and Partitioning",
        points: [
          "groupingBy(): Groups elements based on a condition or property (e.g., grouping words by length).",
          "partitioningBy(): Divides elements into two distinct groups (true/false) based on a condition."
        ]
      },
      {
        heading: "String and Summary Collectors",
        points: [
          "joining(): Combines stream elements into a single String (e.g., comma-separated).",
          "counting(): Counts the total elements in a stream.",
          "summarizingInt(): Provides a statistical summary containing Count, Sum, Average, Min, and Max.",
          "averagingInt(): Calculates average value.",
          "mapping(): Transforms elements before collecting."
        ]
      },
      {
        heading: "Collector Processing Flow",
        content: "Data Source -> Stream Creation -> Intermediate Operations (filter, map, sort) -> Collector (Terminal Operation) -> Final Result."
      },
      {
        heading: "Important Points",
        points: [
          "collect() is a terminal operation.",
          "Stream cannot be reused after collect().",
          "Collectors support parallel processing.",
          "Used after stream operations.",
          "Makes data aggregation easy."
        ]
      },
      {
        heading: "Advantages of Collectors",
        points: [
          "Converts streams into usable data structures",
          "Reduces manual looping and boilerplate",
          "Supports functional programming",
          "Improves readability",
          "Enables complex data transformations easily"
        ]
      },
      {
        heading: "Real-World Applications",
        content: "Database result processing, report generation, data grouping, statistics calculation, log analysis, and API response transformation."
      }
    ],
    code: "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Ram\",\"Ravi\",\"Sita\");\n\n        // Using toList()\n        List<String> resultList = names.stream()\n                     .collect(Collectors.toList());\n\n        // Using joining()\n        String resultString = names.stream()\n                     .collect(Collectors.joining(\", \"));\n\n        System.out.println(resultList);\n        System.out.println(\"Joined: \" + resultString);\n    }\n}"
  },

  // HTML
  "Introduction": {
    description: "HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages.",
    keyPoints: [
      "Describes the structure of a Web page.",
      "Consists of a series of elements.",
      "Elements tell the browser how to display the content."
    ],
    code: "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>"
  },

  // CSS
  "Selectors": {
    description: "CSS selectors are used to 'find' (or select) the HTML elements you want to style.",
    keyPoints: [
      "Element Selector: Styles all elements of a type (e.g., p).",
      "ID Selector: Styles a unique element (#id).",
      "Class Selector: Styles elements with a specific class (.class).",
      "Universal Selector: Styles all elements (*)."
    ],
    code: "p {\n  text-align: center;\n  color: red;\n}\n\n.my-class {\n  font-weight: bold;\n}\n\n#my-id {\n  background-color: blue;\n}"
  },

  // SQL
  "JDBC Overview": {
    description: "JDBC (Java Database Connectivity) is a standard Java API that enables Java applications to communicate with databases. It provides methods and interfaces to execute SQL queries, retrieve results, and act as a bridge between Java programs and databases like MySQL or Oracle.",
    keyPoints: [
      "Acts as an API for database connectivity and executes SQL queries.",
      "Flows through the JDBC Driver to connect Java programs to databases.",
      "Requires a database-specific driver to operate.",
      "Uses core interfaces like DriverManager, Connection, Statement, and ResultSet."
    ],
    sections: [
      {
        heading: "1. JDBC Architecture Components",
        content: "JDBC follows a layered architecture. The Java application uses the JDBC API, which interacts with a database-specific JDBC Driver that communicates directly with the database.",
        points: [
          "JDBC API: Standard interfaces in java.sql package (Connection, Statement, ResultSet).",
          "JDBC Driver: Converts Java calls to DB-specific calls (e.g., MySQL Connector/J).",
          "Database: Stores data and executes queries returning result sets."
        ]
      },
      {
        heading: "2. Types of JDBC Drivers",
        content: "Drivers handle communication between the API and the database.",
        points: [
          "Type 1 (JDBC-ODBC Bridge): Outdated, slow, platform-dependent.",
          "Type 2 (Native API): Faster but uses native database libraries.",
          "Type 3 (Network Protocol): Uses middleware server.",
          "Type 4 (Thin Driver): Written entirely in pure Java. Fastest, platform-independent, and most widely used."
        ]
      },
      {
        heading: "3. JDBC Core Interfaces",
        content: "The java.sql package forms the foundation of JDBC operations.",
        points: [
          "DriverManager: Manages drivers and establishes connections.",
          "Connection: Represents the database session and controls transactions.",
          "Statement: Executes standard SQL queries. PreparedStatement is used for precompiled queries preventing SQL injection.",
          "ResultSet: Acts as a cursor-based table storing data row by row."
        ]
      },
      {
        heading: "4. JDBC Execution Steps",
        content: "Executing operations requires a standard internal flow:",
        points: [
          "Step 1: Load Driver (Class.forName)",
          "Step 2: Establish Connection (DriverManager.getConnection)",
          "Step 3: Create Statement (con.createStatement or con.prepareStatement)",
          "Step 4: Execute Query (executeQuery for SELECT, executeUpdate for DML)",
          "Step 5: Process ResultSet data",
          "Step 6: Close Resources securely (con.close())"
        ]
      },
      {
        heading: "5. PreparedStatement & Transaction Management",
        content: "PreparedStatement secures database operations by preventing SQL injection and improving execution speeds for repeated queries. Transaction Management logically wraps queries.",
        points: [
          "Transactions: Ensures data integrity via commit() to save and rollback() to undo changes.",
          "Exceptions: SQLException inherently captures and handles all database-related errors cleanly."
        ]
      },
      {
        heading: "Advantages and Limitations",
        content: "JDBC empowers complex full-stack Java applications.",
        points: [
          "Advantages: Platform-independent, versatile across multiple databases, heavily secure.",
          "Limitations: Requires extensive manual boilerplate code and strict active resource management natively."
        ]
      }
    ],
    code: "import java.sql.*;\n\npublic class Demo {\n    public static void main(String[] args) {\n        try {\n            // Step 1: Load Driver (Optional in newer JDBC versions)\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n\n            // Step 2: Establish Connection\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/test\", \"root\", \"password\"\n            );\n\n            // Step 3: Create PreparedStatement\n            PreparedStatement ps = con.prepareStatement(\"SELECT * FROM student\");\n\n            // Step 4: Execute Query\n            ResultSet rs = ps.executeQuery();\n\n            // Step 5: Process Result\n            while(rs.next()) {\n                System.out.println(\"ID: \" + rs.getInt(1) + \", Name: \" + rs.getString(2));\n            }\n            \n            // Step 6: Close Connection\n            con.close();\n        } catch(Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}"
  },
  "SQL Basics": {
    description: "SQL (Structured Query Language) is a standard programming language used to store, manage, and manipulate data in relational databases. It forms the backbone of data-driven applications by allowing users to interact with databases like MySQL, Oracle, SQL Server, and PostgreSQL.",
    keyPoints: [
      "SQL provides standard commands to define, manipulate, and query database data.",
      "A database safely organizes a collection of electronically stored data.",
      "A relational database inherently stores data in structured tables using rows and columns.",
      "Relationships act as critical links between tables securely using primary and foreign keys."
    ],
    sections: [
      {
        heading: "1. What is a Database?",
        content: "A database safely stores an organized collection of data electronically to be accessed efficiently. It fundamentally helps maintain absolute data consistency, dramatically reduces redundancy, and greatly improves management.",
        points: [
          "Real-World Examples: A college storing student details, marks, and attendance; a bank managing customer accounts and balances."
        ]
      },
      {
        heading: "2. SQL Command Categories",
        content: "SQL structurally provides specialized command categories heavily optimized to perform various operations seamlessly.",
        points: [
          "DDL (Data Definition Language): Defines or modifies the database structure.",
          "DML (Data Manipulation Language): Manipulates existing data inside tables.",
          "DQL (Data Query Language): Specifically queries and retrieves stored data.",
          "DCL (Data Control Language): Controls user access and database security.",
          "TCL (Transaction Control Language): Safely manages database transactions."
        ]
      },
      {
        heading: "3. DDL (Data Definition Language)",
        content: "DDL operations inherently affect the underlying table or database structure exclusively, explicitly rather than the data itself.",
        points: [
          "CREATE: Dynamically creates a new database or table.",
          "ALTER: Modifies an existing table structure (e.g., adding a column).",
          "DROP: Completely deletes a table or database permanently.",
          "TRUNCATE: Safely removes absolutely all records from a table while keeping the structure."
        ]
      },
      {
        heading: "4. DML (Data Manipulation Language)",
        content: "DML crucially allows users to work directly with the actual populated data.",
        points: [
          "INSERT: Automatically adds new records into a defined table.",
          "UPDATE: Modifies existing data cleanly within a table.",
          "DELETE: Distinctly removes specific records."
        ]
      },
      {
        heading: "5. DQL, DCL, and TCL Commands",
        points: [
          "SELECT (DQL): Used heavily to fetch, sort, filter, and logically group data.",
          "GRANT / REVOKE (DCL): Determines specific user permissions securely.",
          "COMMIT / ROLLBACK (TCL): Saves critical changes cleanly or undoes actions strictly to gracefully ensure database integrity natively."
        ]
      },
      {
        heading: "6. Constraints and Data Types",
        content: "Constraints act as active rules specifically applied to table columns purely to strictly maintain data integrity natively.",
        points: [
          "Data Types: INT (Integers), VARCHAR/CHAR (Text), DATE (Dates), FLOAT/DOUBLE (Decimals).",
          "PRIMARY KEY: Strongly mandates uniqueness and strictly prohibits null values.",
          "FOREIGN KEY: Definitively links multiple distinct tables functionally.",
          "UNIQUE / NOT NULL / CHECK: Validates structural precision cleanly."
        ]
      },
      {
        heading: "7. Clauses and Joins",
        content: "Clauses intelligently filter queried data natively, while Joins seamlessly combine relational data cleanly.",
        points: [
          "Clauses: WHERE logically filters, ORDER BY strictly sorts, GROUP BY inherently groups.",
          "Joins: INNER precisely matches common data, LEFT/RIGHT completely pulls one side powerfully, FULL aggregates everything universally."
        ]
      },
      {
        heading: "Advantages and Disadvantages of SQL",
        content: "Understanding native SQL capabilities helps developers build efficient database architectures safely.",
        points: [
          "Advantages: Industry standard natively, intuitively easy to learn, strongly structurally ensures explicit atomic integrity.",
          "Disadvantages: Often notably natively lacks advanced programmatic loop flows compared to traditional programming execution."
        ]
      }
    ],
    code: "-- DDL Example: Create a new Table\nCREATE TABLE Employees (\n    ID INT PRIMARY KEY,\n    Name VARCHAR(50) NOT NULL,\n    Department VARCHAR(50)\n);\n\n-- DML Example: Insert Data\nINSERT INTO Employees (ID, Name, Department) VALUES (1, 'Jane Smith', 'Engineering');\n\n-- DQL Example: Query Data\nSELECT Name, Department FROM Employees WHERE Department = 'Engineering';\n\n-- TCL Example: Transaction Control\nSTART TRANSACTION;\nUPDATE Employees SET Department = 'Management' WHERE ID = 1;\nCOMMIT;"
  },
  "JDBC Programming": {
    description: "JDBC (Java Database Connectivity) is an API in Java that is used to connect and interact with databases. It allows Java programs to execute SQL queries, retrieve results, and update records, acting as a bridge between Java applications and database systems.",
    keyPoints: [
      "Provides a common standard interface for Java applications to communicate with any database.",
      "Eliminates the need for writing separate database-specific connection code natively.",
      "Relies structurally on the java.sql package for classes and core interfaces.",
      "Supports core enterprise operations like banking systems and robust data management tools."
    ],
    sections: [
      {
        heading: "1. JDBC Architecture",
        content: "JDBC follows a layered architecture to ensure flexibility and database independence. The Java application sends generic requests using the JDBC API. The standard Driver Manager then intelligently selects the appropriate JDBC Driver to communicate directly with the database engine.",
        points: [
          "Java Application: Initiates database calls.",
          "JDBC API: Standardized Java database connectivity library.",
          "JDBC Driver Manager: Selects the correct driver for the database URL.",
          "Database: Stores data and executes the underlying SQL requests."
        ]
      },
      {
        heading: "2. Types of JDBC Drivers",
        content: "JDBC drivers are the underlying software components that actively translate Java API calls into database-specific instructions.",
        points: [
          "Type 1 (JDBC-ODBC Bridge): Uses ODBC. Outdated and heavily deprecated.",
          "Type 2 (Native Driver): Uses local native database libraries.",
          "Type 3 (Network Protocol): Uses a middleware server.",
          "Type 4 (Thin Driver): Directly connects to the database using pure Java. It is the fastest, platform-independent, and most widely used."
        ]
      },
      {
        heading: "3. Steps in JDBC Programming",
        content: "Standard JDBC programming fundamentally requires a strict sequence of execution steps to natively ensure database stability and connection reliability.",
        points: [
          "Step 1: Load the Driver securely (Class.forName).",
          "Step 2: Establish the precise Connection (DriverManager.getConnection).",
          "Step 3: Create the exact Statement object.",
          "Step 4: Execute the SQL Query successfully.",
          "Step 5: Process the returned ResultSet data.",
          "Step 6: Safely Close the Connection to prevent memory leaks."
        ]
      },
      {
        heading: "4. Core JDBC Interfaces",
        content: "The java.sql package contains core components required for robust database logic.",
        points: [
          "DriverManager: Specifically manages drivers and creates the initial database connections.",
          "Connection: Represents the active session. Controls transaction scopes securely.",
          "Statement: Executes standard static SQL queries natively against the database.",
          "PreparedStatement: Executes precompiled dynamic SQL queries perfectly ensuring structural protection against SQL Injection.",
          "ResultSet: Sequentially stores data returned from a query for precise row-by-row navigation."
        ]
      },
      {
        heading: "5. Types of Statements and ResultSets",
        content: "Selecting the correct statement object prevents overhead, whereas selecting the correct ResultSet type controls navigation flexibility.",
        points: [
          "Statement: Optimized for exclusively executing basic, static queries safely once.",
          "PreparedStatement: Heavily optimized for natively executing identical dynamic queries safely multiple times natively.",
          "CallableStatement: Used explicitly to tightly execute stored procedures.",
          "ResultSet Types: Forward Only (default), Scrollable (moves forward and backward dynamically), Updatable (allows direct structural modifications)."
        ]
      },
      {
        heading: "Exception Handling, Advantages, and Limitations",
        content: "JDBC strictly relies on structured Exception Handling to precisely catch and log database errors.",
        points: [
          "SQLException: Catches and extracts explicit database-level error states.",
          "Advantages: Platform-independent interface supporting multiple relational databases.",
          "Limitations: Requires extensive manual boilerplate coding and active resource management."
        ]
      }
    ],
    code: "import java.sql.*;\n\npublic class JdbcDemo {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost:3306/test\";\n        String user = \"root\";\n        String password = \"password\";\n\n        try {\n            // Step 1: Load Driver\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n\n            // Step 2: Establish Connection\n            Connection con = DriverManager.getConnection(url, user, password);\n\n            // Step 3: Create PreparedStatement for security\n            PreparedStatement ps = con.prepareStatement(\"SELECT * FROM students WHERE id = ?\");\n            ps.setInt(1, 101); // parameterized query\n\n            // Step 4: Execute Query\n            ResultSet rs = ps.executeQuery();\n\n            // Step 5: Process Result\n            while(rs.next()) {\n                System.out.println(\"Student ID: \" + rs.getInt(1) + \", Name: \" + rs.getString(2));\n            }\n            \n            // Step 6: Close Connection\n            con.close();\n        } catch(Exception e) {\n            System.out.println(\"Database Error: \" + e.getMessage());\n        }\n    }\n}"
  },
  "Query Execution": {
    description: "Query execution in JDBC refers to the process of sending SQL queries from a Java program to a database and receiving the result. After establishing a connection and creating a statement, queries are executed using specific methods provided by JDBC to retrieve data, insert records, update values, and delete data.",
    keyPoints: [
      "executeQuery() is specifically used exclusively for SELECT statements.",
      "executeUpdate() is heavily utilized for INSERT, UPDATE, and DELETE operations.",
      "execute() is a generic method capable of handling any unknown SQL natively.",
      "ResultSet fundamentally captures and stores the data returned by SELECT operations.",
      "PreparedStatement systematically prevents SQL injection while dramatically improving structural execution speed."
    ],
    sections: [
      {
        heading: "1. Types of SQL Queries in JDBC",
        content: "In JDBC, SQL queries fundamentally map to the standard SQL categories depending entirely on their distinct functionality.",
        points: [
          "DDL (Data Definition Language): Executed using executeUpdate(). Examples: CREATE, ALTER, DROP.",
          "DML (Data Manipulation Language): Executed using executeUpdate(). Examples: INSERT, UPDATE, DELETE.",
          "DQL (Data Query Language): Executed uniquely using executeQuery(). Example: SELECT."
        ]
      },
      {
        heading: "2. executeQuery() Method",
        content: "The executeQuery() method exclusively executes SELECT queries that retrieve data natively from the database schema. It dynamically returns a robust ResultSet object containing the retrieved rows.",
        points: [
          "Syntax: ResultSet rs = stmt.executeQuery(\"SELECT * FROM table_name\");",
          "Used explicitly for SELECT statements only.",
          "Does not modify the database; strictly used for reading operations natively."
        ]
      },
      {
        heading: "3. executeUpdate() Method",
        content: "The executeUpdate() method exclusively handles structural operational queries that deliberately modify the underlying database directly (such as INSERT, UPDATE, DELETE).",
        points: [
          "Syntax: int rows = stmt.executeUpdate(\"INSERT INTO table VALUES(...)\");",
          "Returns an exact integer value cleanly representing the total number of rows physically affected.",
          "Essential for standard DML and DDL operational commands inherently."
        ]
      },
      {
        heading: "4. execute() Method",
        content: "The execute() method provides a flexible, general-purpose command execution pipeline capable of successfully handling virtually any unknown SQL query type natively.",
        points: [
          "Syntax: boolean result = stmt.execute(\"SQL Query\");",
          "Returns TRUE if the result produces a valid ResultSet (e.g., SELECT standard queries).",
          "Returns FALSE if the explicit query returned an update count (e.g., INSERT operations).",
          "Typically utilized functionally when dynamic queries are not explicitly known natively in advance."
        ]
      },
      {
        heading: "5. ResultSet Processing Workflow",
        content: "After executing a SELECT query successfully, the generated result sits logically in a ResultSet object.",
        points: [
          "Functions like a table cursor allowing row-by-row navigation natively.",
          "The next() method moves the active cursor to the next row.",
          "Methods like getInt() and getString() retrieve specific column values from the active row."
        ]
      },
      {
        heading: "6. Using PreparedStatement",
        content: "PreparedStatement secures database operations by preventing SQL injection and improving execution speeds for repeated queries.",
        points: [
          "Precompiles SQL queries on the database side for speed.",
          "Uses parameter binding (?) to prevent string concatenation attacks.",
          "Syntax example: PreparedStatement ps = con.prepareStatement(\"SELECT * FROM student WHERE id=?\");"
        ]
      }
    ],
    code: "import java.sql.*;\n\npublic class QueryExample {\n    public static void main(String[] args) {\n        try {\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/test\", \"root\", \"password\");\n\n            Statement stmt = con.createStatement();\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM student\");\n\n            while(rs.next()) {\n                System.out.println(rs.getInt(1) + \" \" + rs.getString(2));\n            }\n\n            con.close();\n        } catch(Exception e) {\n            System.out.println(\"Query failed: \" + e.getMessage());\n        }\n    }\n}"
  },
  "Result Sets": {
    description: "In JDBC, a ResultSet is an object that holds the data retrieved from a database after executing a SELECT query. It acts as a cursor pointing to its current row of data, allowing navigation and secure data retrieval.",
    keyPoints: [
      "By default, a ResultSet is forward-only and read-only.",
      "Scrollable ResultSets allow movement in any direction.",
      "Updatable ResultSets allow modifying database data directly from the code without executing separate UPDATE queries."
    ],
    sections: [
      {
        heading: "1. Scrollable ResultSet Overview",
        content: "A Scrollable ResultSet fundamentally allows the cursor to move forward, backward, and to specific absolute positions. This solves the strict limitation of the default forward-only cursor.",
        points: [
          "TYPE_FORWARD_ONLY: Moves cursor forward exclusively (Default mechanism).",
          "TYPE_SCROLL_INSENSITIVE: Scrollable, but does not reflect concurrent changes made to the database while open.",
          "TYPE_SCROLL_SENSITIVE: Scrollable, and actively reflects underlying database table changes as they happen."
        ]
      },
      {
        heading: "2. Scrollable ResultSet Methods",
        content: "These navigation functions systematically control the cursor dynamically.",
        points: [
          "next() / previous(): Moves the active cursor sequentially.",
          "first() / last(): Jumps specifically to the absolute start or end of the result set.",
          "absolute(int row): Moves reliably to a specifically defined, exact row number.",
          "relative(int rows): Moves forward or backward relative to the current position."
        ]
      },
      {
        heading: "3. Updatable ResultSet Overview",
        content: "An Updatable ResultSet securely allows modification of the active data natively directly in the ResultSet, which inherently updates it synchronously in the backend database.",
        points: [
          "Eliminates the necessity to manually script isolated UPDATE SQL statements.",
          "Requires the CONCUR_UPDATABLE flag during Statement creation.",
          "updateInt() / updateString(): Structurally modifies the loaded column values in memory.",
          "updateRow(): Safely commits all pending changes structurally back to the physical database.",
          "insertRow() / deleteRow(): Securely adds new rows or safely deletes the current active row."
        ]
      },
      {
        heading: "Advantages and Limitations",
        content: "Understanding these cursor types allows building responsive database management systems quickly.",
        points: [
          "Advantages: Highly flexible navigation, direct explicit data modification capabilities, and greatly reduced SQL complexity.",
          "Limitations: Requires robust database driver support natively, causes slightly slower read performance, and carries potential beginner complexity overhead."
        ]
      }
    ],
    code: "import java.sql.*;\n\npublic class ResultSetExample {\n    public static void main(String[] args) {\n        try {\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/test\", \"root\", \"password\"\n            );\n\n            Statement stmt = con.createStatement(\n                ResultSet.TYPE_SCROLL_SENSITIVE,\n                ResultSet.CONCUR_UPDATABLE\n            );\n\n            ResultSet rs = stmt.executeQuery(\"SELECT * FROM student\");\n\n            // Scrollable Navigation: Move to last row explicitly\n            rs.last();\n            System.out.println(\"Last Row ID: \" + rs.getInt(1));\n\n            // Updatable Mechanism: Update value and write back to database\n            rs.first();\n            rs.updateString(2, \"UpdatedName\");\n            rs.updateRow();\n\n            con.close();\n        } catch(Exception e) {\n            System.out.println(\"ResultSet Error: \" + e.getMessage());\n        }\n    }\n}"
  },
  "Batch Updates": {
    description: "Batch Updates in JDBC execute multiple SQL statements together as a single unit instead of executing them sequentially. This significantly improves performance by ensuring the database is accessed fewer times.",
    keyPoints: [
      "Highly efficient for inserting or updating large amounts of data.",
      "Reduces database calls and network traffic.",
      "Typically paired with Transaction Management (rollback on failure)."
    ],
    sections: [
      {
        heading: "1. The Need for Batch Updates",
        content: "In normal JDBC execution, each SQL statement is sent separately to the external database layer. This increases execution time and overall network overhead. Batch updates explicitly map multiple operations into one payload.",
        points: [
          "Reduces execution time.",
          "Optimized for bulk inserts, data migration, and transaction processing."
        ]
      },
      {
        heading: "2. Core Batch Processing Methods",
        content: "JDBC provides specific methods bounded to Statement objects for batch logic.",
        points: [
          "addBatch(String sql): Adds a static query to the current list of pending commands.",
          "executeBatch(): Executes all accumulated queries natively in one call, returning an array of update counts.",
          "clearBatch(): Removes all accumulated queries inside the current batch cache."
        ]
      },
      {
        heading: "3. Using Statement for Batch Updates",
        content: "Statement allows batch execution using standard, non-parameterized SQL commands.",
        points: [
          "Best used for combining completely different SQL sequences (e.g. an INSERT followed by an UPDATE).",
          "Syntax: stmt.addBatch(\"INSERT INTO student VALUES(1, 'A')\");",
          "Returns: int[] array indicating affected rows per query."
        ]
      },
      {
        heading: "4. Using PreparedStatement for Batch Updates",
        content: "PreparedStatement provides the fastest and most secure environment for batch processing identical SQL structures.",
        points: [
          "Preferred over Statement because it precompiles the query and prevents SQL injection.",
          "Allows updating parameters dynamically using parameter binding before calling addBatch().",
          "Executes the same query structure repeatedly with massive performance gains."
        ]
      },
      {
        heading: "5. Transaction Management Integration",
        content: "Batch updates often pair natively with Transaction Management to enforce data integrity.",
        points: [
          "con.setAutoCommit(false): Pauses implicit commits.",
          "ps.executeBatch(): Dispatches the payload.",
          "con.commit() / con.rollback(): Saves explicitly or reverses data gracefully upon failure."
        ]
      },
      {
        heading: "Advantages and Limitations",
        content: "Batch functionality acts as an advanced performance tuning layer.",
        points: [
          "Advantages: High performance, efficient bulk operations, reduced network footprint.",
          "Limitations: Harder to debug failing elements. If one query fails, it can fail the entire batch."
        ]
      }
    ],
    code: "import java.sql.*;\n\npublic class BatchExample {\n    public static void main(String[] args) {\n        try {\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/test\", \"root\", \"password\"\n            );\n\n            // Ensure manual transaction handling\n            con.setAutoCommit(false);\n\n            PreparedStatement ps = con.prepareStatement(\"INSERT INTO student (id, name) VALUES (?, ?)\");\n\n            // Prepare Operation 1\n            ps.setInt(1, 10);\n            ps.setString(2, \"Alex\");\n            ps.addBatch();\n\n            // Prepare Operation 2\n            ps.setInt(1, 11);\n            ps.setString(2, \"Bob\");\n            ps.addBatch();\n\n            // Execute the Batch Array and save\n            int[] results = ps.executeBatch();\n            con.commit();\n\n            System.out.println(\"Inserted \" + results.length + \" records.\");\n            con.close();\n        } catch(Exception e) {\n            System.out.println(\"Batch Error: \" + e.getMessage());\n        }\n    }\n}"
  },
  "Procedures/Functions": {
    description: "In JDBC, Stored Procedures and Functions are predefined SQL programs stored directly inside the database. Calling these stored programs instead of writing duplicate SQL queries in Java improves overall application performance and reusability.",
    keyPoints: [
      "Stored Programs are executed in JDBC using the CallableStatement interface.",
      "A Stored Procedure executes a block of statements and can take input/output parameters.",
      "A Function always returns a specific value and is typically used for calculations.",
      "Reduces network traffic by keeping business logic execution directly on the database server."
    ],
    sections: [
      {
        heading: "1. Stored Procedures and Functions Overview",
        content: "Procedures and Functions differ primarily in their return capabilities and usage.",
        points: [
          "Stored Procedure: A single unit of SQL statements. It can accept IN/OUT parameters and return ResultSet datasets.",
          "Function: Similar to a procedure but explicitly mandates returning a single scalar value. Used heavily in mathematical or string expressions."
        ]
      },
      {
        heading: "2. The CallableStatement Interface",
        content: "JDBC specifically relies on the CallableStatement from the java.sql package to securely execute stored database programs.",
        points: [
          "cs = con.prepareCall(\"{call procedure_name(?, ?)}\") creates a callable statement.",
          "cs.setXXX() assigns values to the designated IN parameters.",
          "cs.registerOutParameter() informs the driver to capture database OUT parameters.",
          "cs.getXXX() reads the final output sent back from the driver.",
          "cs.execute() / cs.executeQuery() actually dispatches the final command to the database."
        ]
      },
      {
        heading: "3. Calling a Stored Procedure (IN Parameters)",
        content: "When a procedure only requires inputs, it acts very similar to a standard PreparedStatement.",
        points: [
          "Syntax: CallableStatement cs = con.prepareCall(\"{call getStudent(?)}\");",
          "cs.setInt(1, 101); binds that parameter.",
          "ResultSet rs = cs.executeQuery(); fetches the resulting data table."
        ]
      },
      {
        heading: "4. Calling a Stored Procedure (OUT Parameters)",
        content: "When a procedure returns explicit individual parameters, those output indices must be registered first.",
        points: [
          "Syntax: CallableStatement cs = con.prepareCall(\"{call getName(?, ?)}\");",
          "Input: cs.setInt(1, 101);",
          "Output Registry: cs.registerOutParameter(2, Types.VARCHAR); binds index 2 to a String result.",
          "Extraction: String name = cs.getString(2);"
        ]
      },
      {
        heading: "5. Calling a Database Function",
        content: "Functions must map their explicit return value to the very first placeholder index (?) in the prepareCall statement string.",
        points: [
          "Syntax: CallableStatement cs = con.prepareCall(\"{? = call getSquare(?)}\");",
          "The first index {?} is strictly the return value. The second index is the input parameter.",
          "Registry: cs.registerOutParameter(1, Types.INTEGER);",
          "Binding: cs.setInt(2, 5);",
          "Extraction: int result = cs.getInt(1);"
        ]
      },
      {
        heading: "Advantages and Limitations",
        content: "While very powerful, tightly coupling Java to explicit database logic carries distinct trade-offs.",
        points: [
          "Advantages: Improves execution speeds, provides highly reusable logic layers, heavily minimizes network traffic, and enhances application security.",
          "Limitations: Highly database-dependent (migration is structurally difficult). Logic is significantly harder to debug outside the JVM."
        ]
      }
    ],
    code: "import java.sql.*;\n\npublic class CallableExample {\n    public static void main(String[] args) {\n        try {\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/test\", \"root\", \"password\"\n            );\n\n            // --- Example 1: Calling a Function ---\n            // Assuming a DB function: getSquare(num)\n            CallableStatement fn = con.prepareCall(\"{? = call getSquare(?)}\");\n            fn.registerOutParameter(1, Types.INTEGER); // Return type\n            fn.setInt(2, 5); // Input param\n            fn.execute();\n            System.out.println(\"Square of 5 is: \" + fn.getInt(1));\n            fn.close();\n\n            // --- Example 2: Calling a Procedure with an OUT param ---\n            // Assuming a DB procedure: getStudentName(IN id, OUT name)\n            CallableStatement sp = con.prepareCall(\"{call getStudentName(?, ?)}\");\n            sp.setInt(1, 101); // Input param\n            sp.registerOutParameter(2, Types.VARCHAR); // Output Registry\n            sp.execute();\n            System.out.println(\"Student Name: \" + sp.getString(2));\n            sp.close();\n\n            con.close();\n        } catch(Exception e) {\n            System.out.println(\"CallableStatement Error: \" + e.getMessage());\n        }\n    }\n}"
  },
  "Transactions": {
    description: "A Transaction in JDBC is a group of one or more SQL operations that are executed as a single unit. These operations must either all succeed or all fail together, ensuring data integrity and consistency.",
    keyPoints: [
      "Atomicity: Ensures all operations in a transaction either complete fully or none are applied.",
      "Consistency: Guarantees that the database transitions from one valid state to another.",
      "Isolation: Ensures concurrently running transactions do not interfere with each other.",
      "Durability: Guarantees that once a transaction is committed, it remains saved even in case of system failure."
    ],
    sections: [
      {
        heading: "1. Need for Transactions",
        content: "Transactions are essential in applications like banking or e-commerce where partial updates can lead to incorrect data.",
        points: [
          "Ensures complete execution of multiple related operations.",
          "Prevents inconsistent data states caused by partial failures.",
          "Maintains data reliability across complex workflows.",
          "Provides a safety net for error handling via rollback."
        ]
      },
      {
        heading: "2. AutoCommit Mode",
        content: "By default, JDBC uses auto-commit mode, which treats every single SQL statement as an independent transaction. To group operations, this must be disabled.",
        points: [
          "con.setAutoCommit(false); - Disables automatic saving to allow grouping multiple statements.",
          "Crucial first step for manual transaction management."
        ]
      },
      {
        heading: "3. Transaction Control Methods",
        content: "JDBC provides specific methods on the Connection object to manage the transaction lifecycle.",
        points: [
          "commit(): Permanently saves all changes made during the current transaction.",
          "rollback(): Cancels all pending operations and restores the database to its last committed state.",
          "setSavepoint(): Creates a checkpoint (Savepoint) for partial rollbacks within a transaction."
        ]
      },
      {
        heading: "4. ACID Properties Breakdown",
        content: "Every reliable transaction system must adhere to the ACID principles:",
        points: [
          "Atomicity (All or Nothing): If one step fails, everything is undone. Example: Deducting money from Account A must succeed only if adding it to Account B also succeeds.",
          "Consistency (Valid State): Data must follow all constraints and rules. Example: Bank balance should never be negative if not allowed.",
          "Isolation (No Interference): Concurrent transactions should not 'see' each other's intermediate states. Example: Two people booking the same seat simultaneously.",
          "Durability (Permanent Save): Once confirmed, the data is safe from crashes. Example: An online payment confirmation must persist even if the server restarts."
        ]
      },
      {
        heading: "5. Summary Table (ACID)",
        points: [
          "Atomicity -> All or nothing (Bank transfer)",
          "Consistency -> Valid data only (Marks ≤ 100)",
          "Isolation -> No interference (Ticket booking)",
          "Durability -> Permanent storage (Payment success)"
        ]
      },
      {
        heading: "Advantages and Limitations",
        points: [
          "Advantages: Maintains data integrity, prevents inconsistency, supports robust error handling.",
          "Limitations: Slight performance overhead, requires careful coding logic, increased complexity in large systems."
        ]
      }
    ],
    code: "import java.sql.*;\n\npublic class TransactionExample {\n    public static void main(String[] args) {\n        Connection con = null;\n        try {\n            con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/test\", \"root\", \"password\");\n\n            // Step 1: Disable Auto-Commit\n            con.setAutoCommit(false);\n\n            Statement stmt = con.createStatement();\n\n            // Step 2: Execute multiple operations\n            stmt.executeUpdate(\"UPDATE account SET balance = balance - 100 WHERE id=1\");\n            stmt.executeUpdate(\"UPDATE account SET balance = balance + 100 WHERE id=2\");\n\n            // Step 3: Commit the transaction if everything is successful\n            con.commit();\n            System.out.println(\"Transaction Successful: Money Transferred.\");\n\n        } catch(Exception e) {\n            try {\n                if (con != null) {\n                    // Step 4: Rollback if any error occurs\n                    con.rollback();\n                    System.out.println(\"Transaction Failed: Changes Rolled Back.\");\n                }\n            } catch (SQLException ex) {\n                ex.printStackTrace();\n            }\n        } finally {\n            try {\n                if (con != null) con.close();\n            } catch (SQLException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}"
  },

  "Web App Life Cycle": {
    description: "The Website Application Life Cycle refers to the systematic process of designing, developing, deploying, and maintaining a web application, ensuring it meets user requirements efficiently.",
    keyPoints: [
      "Requirement Analysis: Identifying needs and goals.",
      "Planning: Creating a roadmap and technology stack.",
      "Design Phase: Focuses on UI/UX and visual structure.",
      "Deployment & Maintenance: Going live and regular updates."
    ],
    sections: [
      {
        heading: "1. Requirement Analysis",
        content: "The foundational stage where developers and clients define the scope, target audience, and core functionality.",
        points: [
          "Identifying key features (e.g., login, payment gateway, product search).",
          "Understanding the user's problems and expected solutions.",
          "Clear analysis helps prevent scope creep later."
        ]
      },
      {
        heading: "2. Planning & Technology Stack",
        content: "Establishing a roadmap, choosing the right tools, and defining development timelines.",
        points: [
          "Selection of Frontend (HTML/CSS/JS) and Backend (Java, Spring) technologies.",
          "Database selection (MySQL, MongoDB) based on data requirements.",
          "Task assignment and milestone definition."
        ]
      },
      {
        heading: "3. Design Phase (UI/UX)",
        content: "Visualizing the application's interface and overall user experience.",
        points: [
          "UI Design: Focuses on aesthetics, colors, and typography.",
          "UX Design: Focuses on logical flow and ease of navigation.",
          "Creation of wireframes and interactive prototypes."
        ]
      },
      {
        heading: "4. Development (Coding)",
        content: "The core phase where the actual features are built and integrated.",
        points: [
          "Frontend: Building the user-facing interface.",
          "Backend: Implementing server-side logic and API integration.",
          "Database: Setting up schemas and data storage logic."
        ]
      },
      {
        heading: "5. Testing & Quality Assurance",
        content: "Ensuring the application is bug-free and performs as expected.",
        points: [
          "Functional Testing: Verifying features work correctly.",
          "Performance Testing: Checking load times and stability.",
          "Security Testing: Protecting user data and preventing vulnerabilities."
        ]
      },
      {
        heading: "6. Deployment, Maintenance & Enhancement",
        content: "Launching the site and ensuring its long-term health and growth.",
        points: [
          "Deployment: Moving from local servers to cloud/web hosting.",
          "Maintenance: Fixing bugs and performing regular updates.",
          "Enhancement: Improving the app based on user feedback and new trends."
        ]
      },
      {
        heading: "Life Cycle Flow",
        content: "Requirement → Planning → Design → Development → Testing → Deployment → Maintenance → Enhancement"
      },
      {
        heading: "Key Benefits",
        points: [
          "Organized development process",
          "Better quality application",
          "Reduced errors",
          "Efficient project management"
        ]
      }
    ]
  },

  "Web Modules": {
    description: "A Web Module is a basic unit of a web application that organizes resources like web pages, servlets, configuration files, and static assets. In Java, it is typically packaged as a WAR (Web Application Archive) file.",
    keyPoints: [
      "Modular Structure: Organizes the web application into manageable sections.",
      "Standard Directory: Follows a specific hierarchy (WEB-INF, classes, lib).",
      "Resource Hosting: Contains both static (HTML/CSS) and dynamic (Servlets/JSP) components.",
      "Packaging: Compiled and deployed as a single .war file."
    ],
    sections: [
      {
        heading: "1. Purpose of Web Modules",
        content: "Web modules separate concerns and provide a structured environment for web components to interact with the server.",
        points: [
          "Better Organization: Clear separation of UI, logic, and configuration.",
          "Easy Maintenance: Centralized location for static and dynamic resources.",
          "Reusability: Components can be shared across different modules.",
          "Simplified Deployment: The entire module can be moved as a single archive."
        ]
      },
      {
        heading: "2. Directory Structure",
        content: "A standard Java Web Module (WAR) follows this hierarchy:",
        points: [
          "Root/ - Static files (index.html, css/, js/, images/)",
          "WEB-INF/ - Protected directory (contains configuration and classes)",
          "WEB-INF/web.xml - Deployment Descriptor",
          "WEB-INF/classes/ - Compiled Java/Servlet classes",
          "WEB-INF/lib/ - External JAR dependencies"
        ]
      },
      {
        heading: "3. Core Components",
        points: [
          "HTML / JSP: Structure and dynamic content generation.",
          "Servlets: java programs that handle HTTP requests and business logic.",
          "CSS & JavaScript: Presentation and client-side interactivity.",
          "Static Resources: Images, icons, and media files.",
          "Configuration (web.xml): Maps servlets and defines application settings."
        ]
      },
      {
        heading: "4. Types of Web Modules",
        points: [
          "Static Web Module: Contains only HTML, CSS, and client-side JS. No server-side logic.",
          "Dynamic Web Module: Includes Servlets, JSPs, and database connectivity for interactive features."
        ]
      },
      {
        heading: "Working Mechanism",
        content: "The workflow of a web module follows: Browser Request → Web Server → Servlet Processing (Fetch data from DB) → Response (HTML/JSP) → Browser."
      },
      {
        heading: "Advantages and Limitations",
        points: [
          "Advantages: Organized structure, easy deployment (WAR), reusable components, maintainability.",
          "Limitations: Requires server environment (Tomcat/GlassFish), configuration overhead, complexity for beginners."
        ]
      }
    ]
  },

  "Configuring Web Apps": {
    description: "Configuring a web application involves setting up components such as servlets, filters, and listeners to ensure the application runs correctly on a web server. This is achieved using XML-based configuration (web.xml) or Java annotations.",
    keyPoints: [
      "Deployment Descriptor (web.xml): The central configuration file in the WEB-INF folder.",
      "Servlet Mapping: Defining how URLs are processed by specific servlet classes.",
      "Context & Init Parameters: Managing global and servlet-specific settings.",
      "Annotation-Based Config: Using @WebServlet, @WebFilter, etc., for cleaner code."
    ],
    sections: [
      {
        heading: "1. Need for Configuration",
        content: "Configuration tells the server which component handles which request and how resources are managed.",
        points: [
          "Defining Servlet-to-URL mappings.",
          "Configuring global application parameters (Context Params).",
          "Setting up security, session timeouts, and error handling.",
          "Managing lifecycle events via Listeners and Filters."
        ]
      },
      {
        heading: "2. The web.xml File",
        content: "Located in WEB-INF/web.xml, this is the 'brain' of traditional Java web applications.",
        points: [
          "Defines servlet names and their fully qualified Java classes.",
          "Maps URL patterns (e.g., /login) to specific servlets.",
          "Sets the welcome-file-list (default homepage).",
          "Configures custom error pages for specific HTTP status codes (e.g., 404, 500)."
        ]
      },
      {
        heading: "3. Initialization and Context Parameters",
        points: [
          "Init Parameters: Specific to a single servlet (defined inside <servlet> tag).",
          "Context Parameters: Global settings available to all servlets in the application.",
          "Commonly used for database URLs, API keys, or environment settings."
        ]
      },
      {
        heading: "4. Session and Error Management",
        points: [
          "Session Configuration: Defines timeout periods for user inactivity (e.g., 30 minutes).",
          "Error Page Configuration: Maps HTTP errors or Java exceptions to user-friendly HTML pages."
        ]
      },
      {
        heading: "5. Filters and Listeners",
        points: [
          "Filters: Intercept requests/responses for tasks like authentication or logging.",
          "Listeners: Monitor application-level events like session creation or attribute changes."
        ]
      },
      {
        heading: "6. Annotation-Based Configuration",
        content: "Modern Java EE/Jakarta EE versions allow replacing web.xml with annotations for simplified development.",
        points: [
          "@WebServlet('/path'): Maps a servlet to a URL.",
          "@WebFilter('/*'): Applies a filter to specific URL patterns.",
          "@WebListener: Registers a listener class automatically."
        ]
      },
      {
        heading: "Advantages and Limitations",
        points: [
          "Advantages: Controls application behavior, improves flexibility, and makes maintenance manageable.",
          "Limitations: XML files can become lengthy, and errors in configuration can break the application."
        ]
      }
    ],
    code: "<!-- Example web.xml Structural Snippet -->\n<web-app>\n  <!-- Servlet Definition -->\n  <servlet>\n    <servlet-name>UserServlet</servlet-name>\n    <servlet-class>com.masterclass.UserServlet</servlet-class>\n    <init-param>\n      <param-name>adminEmail</param-name>\n      <param-value>admin@example.com</param-value>\n    </init-param>\n  </servlet>\n\n  <!-- URL Mapping -->\n  <servlet-mapping>\n    <servlet-name>UserServlet</servlet-name>\n    <url-pattern>/users</url-pattern>\n  </servlet-mapping>\n\n  <!-- Global Context Param -->\n  <context-param>\n    <param-name>dbURL</param-name>\n    <param-value>jdbc:mysql://localhost:3306/mydb</param-value>\n  </context-param>\n\n  <!-- Session Timeout (Minutes) -->\n  <session-config>\n    <session-timeout>30</session-timeout>\n  </session-config>\n</web-app>"
  },

  "Database Access": {
    description: "Database access in web applications involves connecting the application (Servlets, JSP) to a database (MySQL, Oracle) to perform CRUD operations. This enables dynamic functionalities like login systems and data management.",
    keyPoints: [
      "Dynamic Content: Moving from static pages to data-driven applications.",
      "JDBC Bridge: Using the java.sql package to interact with the database.",
      "Statement Execution: Sending SQL queries via Statement or PreparedStatement objects.",
      "Result Processing: Iterating through ResultSet to display database records."
    ],
    sections: [
      {
        heading: "1. Need for Database Access",
        content: "Databases are essential for storing persistent information that applications use to provide personalized and interactive experiences.",
        points: [
          "Storing user profiles, login credentials, and session data.",
          "Saving transactional records such as orders or student records.",
          "Retrieving and displaying data dynamically based on user requests.",
          "Maintaining structured data consistency across the application."
        ]
      },
      {
        heading: "2. The JDBC Workflow",
        content: "Accessing a database follows a standard six-step sequence in Java web applications.",
        points: [
          "Step 1: Load Driver (e.g., Class.forName('com.mysql.cj.jdbc.Driver')).",
          "Step 2: Establish Connection using DriverManager.getConnection().",
          "Step 3: Create Statement or PreparedStatement for sending SQL.",
          "Step 4: Execute Query (executeQuery() for SELECT, executeUpdate() for DML).",
          "Step 5: Process Result using a ResultSet loop.",
          "Step 6: Close Connection to release database resources."
        ]
      },
      {
        heading: "3. Connection Pooling",
        content: "In production, creating a new connection for every request is expensive and slows down the application.",
        points: [
          "Connection reusability reduces the overhead of opening/closing sockets.",
          "Improves performance and response time for high-traffic applications.",
          "Managed by the Application Server (e.g., Tomcat, JBoss)."
        ]
      },
      {
        heading: "4. Best Practice: MVC Architecture",
        content: "Enterprise applications isolate database logic from the presentation and control layers.",
        points: [
          "Model: Contains the database logic (JDBC / DAO patterns).",
          "View: User interface built with JSP or HTML.",
          "Controller: Servlets that handle requests and orchestrate interactions between Model and View."
        ]
      },
      {
        heading: "Security and Efficiency",
        points: [
          "Always use PreparedStatement to prevent SQL Injection attacks.",
          "Ensure resources are closed in a 'finally' block or using Try-with-resources to avoid memory leaks.",
          "Handle exceptions appropriately to avoid leaking database details to the users."
        ]
      }
    ],
    code: "import java.io.*;\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.sql.*;\n\npublic class LoginServlet extends HttpServlet {\n    protected void doPost(HttpServletRequest req, HttpServletResponse res)\n            throws ServletException, IOException {\n        String user = req.getParameter(\"username\");\n        String pass = req.getParameter(\"password\");\n\n        try {\n            // Load Driver and Connection\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/test\", \"root\", \"password\");\n\n            // Secure Query using PreparedStatement\n            PreparedStatement ps = con.prepareStatement(\n                \"SELECT * FROM users WHERE username=? AND password=?\");\n            ps.setString(1, user);\n            ps.setString(2, pass);\n\n            ResultSet rs = ps.executeQuery();\n            PrintWriter out = res.getWriter();\n\n            if(rs.next()) {\n                out.println(\"Login Successful: Welcome \" + user);\n            } else {\n                out.println(\"Invalid Credentials\");\n            }\n            con.close();\n        } catch(Exception e) {\n            e.printStackTrace();\n        }\n    }\n}"
  },

  "Jar, War, Ear": {
    description: "In Java, applications are bundled into specialized archive files to simplify deployment and distribution. The most common formats are JAR (Java Archive), WAR (Web Archive), and EAR (Enterprise Archive).",
    keyPoints: [
      "JAR: Packages classes and resources for standalone applications or reusable libraries.",
      "WAR: Packages web components (HTML, JSP, Servlets) for web servers like Tomcat.",
      "EAR: Packages multiple JAR and WAR modules for large-scale enterprise systems.",
      "Archive Structure: Bundles code, resources, and configuration into a single portable unit."
    ],
    sections: [
      {
        heading: "1. JAR (Java Archive)",
        content: "A JAR file is a platform-independent file format used to aggregate multiple Java class files and associated metadata into one file.",
        points: [
          "MyApp.jar /com/ - contains compiled .class files.",
          "MyApp.jar /META-INF/ - contains MANIFEST.MF with project metadata.",
          "JARs are used for core modules and external libraries.",
          "Syntax: jar cvf MyApp.jar *.class (creates an archive from current classes)."
        ]
      },
      {
        heading: "2. WAR (Web Archive)",
        content: "A WAR file is used to package a complete web application, including its frontend components and backend logic.",
        points: [
          "MyWebApp.war / - Root directory for static assets (index.html, css/, js/).",
          "MyWebApp.war /WEB-INF/ - Protected folder containing configuration files.",
          "MyWebApp.war /WEB-INF/web.xml - The primary deployment descriptor.",
          "MyWebApp.war /WEB-INF/classes/ - Compiled servlets and backend classes."
        ]
      },
      {
        heading: "3. EAR (Enterprise Archive)",
        content: "An EAR file encapsulates an entire enterprise system, potentially containing multiple application modules.",
        points: [
          "MyApp.ear /META-INF/ - Contains application.xml for enterprise deployment.",
          "Can bundle multiple WAR files (web modules) and JAR files (logic/EJB modules).",
          "Managed by robust Application Servers like JBoss, WebLogic, or GlassFish.",
          "Enables complex applications to be managed as a single deployment unit."
        ]
      },
      {
        heading: "4. Summary Table: JAR vs WAR vs EAR",
        points: [
          "Full Form: Java Archive | Web Archive | Enterprise Archive",
          "Primary Usage: Standalone / Libraries | Web Apps | Enterprise Systems",
          "Contains: Compiled Classes | JSP, Servlets, HTML | Bundled JARs + WARs",
          "Deployment Target: JVM | Web Server (Tomcat) | Application Server (GlassFish)"
        ]
      },
      {
        heading: "Real-Time Relationship",
        points: [
          "JAR → Miniature module (e.g., a Log Logger Utility).",
          "WAR → A complete micro-site (e.g., a Banking Login Portal).",
          "EAR → The entire Banking Enterprise System that uses both the Portal (WAR) and the Utility (JAR)."
        ]
      }
    ]
  },

  "Web/App Servers": {
    description: "Web Servers and Application Servers are essential software components for hosting and running web applications. A Web Server primarily serves static content, while an Application Server manages dynamic logic and database interactions.",
    keyPoints: [
      "Web Server: Fast delivery of static content (HTML, CSS, images, JS).",
      "Application Server: Executes complex business logic and manages database connectivity.",
      "Efficiency: Web Servers are lightweight; Application Servers are robust platforms for enterprise logic.",
      "Full Stack Flow: User → Web Server → Application Server → Database → Response."
    ],
    sections: [
      {
        heading: "1. Web Server Overview",
        content: "A web server's primary role is to process HTTP requests and deliver static files directly to the client's browser.",
        points: [
          "Handles HTTP/HTTPS communication protocols.",
          "Serves static resources like HTML, CSS, JavaScript, and Images.",
          "Designed for speed and lightweight content delivery.",
          "Example servers: Apache HTTP Server, NGINX."
        ]
      },
      {
        heading: "2. Application Server Overview",
        content: "An application server provides the environment to run back-end logic and interact with databases and other enterprise services.",
        points: [
          "Processes dynamic content using Java technologies like Servlets, JSP, or Spring.",
          "Executes complex business logic, session management, and login validation.",
          "Provides built-in services for transaction management and security.",
          "Example servers: Apache Tomcat (Web Container), WildFly (JBoss), GlassFish."
        ]
      },
      {
        heading: "3. Key Differences",
        points: [
          "Content Focus: Web Servers focus on static content; Application Servers specialize in dynamic generation.",
          "Database Access: Web Servers generally do not handle DB logic; Application Servers manage full-scale JDBC interactions.",
          "Performance: Web Servers are optimized for high-speed file delivery; Application Servers are optimized for logic execution.",
          "Protocols: Web Servers use HTTP; Application Servers can support multiple protocols like RMI and EJB."
        ]
      },
      {
        heading: "4. Real-Time Request Flow",
        content: "In production, these servers often work in tandem to balance the load and optimize response times.",
        points: [
          "Step 1: User sends a request from their browser.",
          "Step 2: Web Server receives the request and serves any static files immediately.",
          "Step 3: If the request is dynamic (e.g., a login form), the Web Server forwards it to the Application Server.",
          "Step 4: Application Server executes the Java process, interacts with the Database, and prepares the result.",
          "Step 5: The dynamic response is passed back through the web server to the browser."
        ]
      }
    ],
    code: "HTTP Request/Response Example:\n\n// --- Browser Request ---\nGET /index.html HTTP/1.1\nHost: www.example.com\n\n// --- Web Server Response (Static) ---\nHTTP/1.1 200 OK\nContent-Type: text/html\n\n<html>\n  <body>Hello World Static Page</body>\n</html>\n\n// --- Application Server Implementation (Dynamic Servlet) ---\n@WebServlet(\"/greet\")\npublic class GreetServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) {\n        try {\n            res.getWriter().println(\"Hello from the Application Server Logic!\");\n        } catch(Exception e) {\n            e.printStackTrace();\n        }\n    }\n}"
  },

  "Servlets Overview": {
    description: "A Servlet is a server-side Java program that handles client requests and generates dynamic responses. Running within a web container, it processes HTTP requests (GET, POST) and interacts with back-end services.",
    keyPoints: [
      "Server-Side Logic: Acts as a web-tier component to process user requests.",
      "Efficiency: Uses multithreading instead of separate processes for each request.",
      "Platform Independence: Built on Java, allowing portability across different servers.",
      "Jakarta EE / Java EE: Part of the standard enterprise Java specifications."
    ],
    sections: [
      {
        heading: "1. Why use Servlets?",
        content: "Servlets were designed to overcome the performance and scalability limitations of static web pages and older technologies like CGI (Common Gateway Interface).",
        points: [
          "Dynamic Response: Generates content on-the-fly based on user input or database data.",
          "High Performance: Unlike CGI, servlets use threads, which consume less memory and CPU.",
          "Robustness: Leverages Java's strong type-checking and exception handling.",
          "Scalability: Can handle hundreds of concurrent requests efficiently."
        ]
      },
      {
        heading: "2. Servlet Architecture",
        content: "The servlet architecture bridges the gap between the client browser and the back-end application logic.",
        points: [
          "Client (Browser) sends an HTTP request to the Web Server.",
          "Web Server forwards the request to the Servlet Container (Web Container).",
          "Container manages the life cycle of the servlet and dispatches the request.",
          "Servlet processes data (with Model/DB) and generates an HTTP response."
        ]
      },
      {
        heading: "3. The Servlet Life Cycle",
        content: "The container controls the entire lifecycle of a servlet through three primary methods:",
        points: [
          "init(): Called once when the servlet is first initialized. Ideal for one-time setups.",
          "service(): Invoked for every incoming request to process logic and send responses.",
          "destroy(): Called once before the servlet is taken out of service to release resources."
        ]
      },
      {
        heading: "4. Types of Servlets",
        points: [
          "GenericServlet: A protocol-independent servlet that handles general-purpose requests.",
          "HttpServlet: The most common type, specifically optimized for the HTTP protocol (GET, POST, etc.)."
        ]
      },
      {
        heading: "5. The Servlet API",
        content: "The API provides essential interfaces and classes within the javax.servlet and javax.servlet.http packages.",
        points: [
          "ServletRequest / HttpServletRequest: Encapsulates incoming client data.",
          "ServletResponse / HttpServletResponse: Used to construct the response sent to the client.",
          "ServletConfig / ServletContext: Provide configuration and environment data."
        ]
      },
      {
        heading: "Servlet vs CGI",
        points: [
          "Memory Usage: Servlets use threads (shared memory); CGI uses processes (separate memory).",
          "Speed: Servlets are significantly faster due to reduced initialization overhead.",
          "Platform: Servlets are platform-independent; CGI often depends on the OS shell."
        ]
      },
      {
        heading: "Advantages and Limitations",
        points: [
          "Advantages: Secure, reusable, high performance, and efficient multithreading.",
          "Limitations: Complex to develop UI (logic and HTML are mixed), requires Java expertise."
        ]
      }
    ],
    code: "import java.io.*;\nimport javax.servlet.*;\nimport javax.servlet.http.*;\n\n// --- Deployment via Annotation ---\n@WebServlet(\"/test\")\npublic class MyServlet extends HttpServlet {\n    \n    public void init() {\n        System.out.println(\"Servlet Initialized\");\n    }\n\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) \n            throws ServletException, IOException {\n        // Logic to handle GET request\n        res.setContentType(\"text/html\");\n        res.getWriter().println(\"<h1>Hello from Servlet Overview</h1>\");\n    }\n\n    public void destroy() {\n        System.out.println(\"Servlet Destroyed - Resources Released\");\n    }\n}"
  },

  "Servlet Life Cycle": {
    description: "The Servlet life cycle refers to the step-by-step process of loading, initializing, handling requests, and destroying a servlet, managed entirely by the servlet container (e.g., Apache Tomcat).",
    keyPoints: [
      "Container Management: The container controls the creation and destruction of servlet instances.",
      "Efficiency: Ensures resources are loaded only once (init) and cleaned up before removal (destroy).",
      "Request Handling: The service() method is invoked repeatedly for each client request.",
      "State Management: Defines the transition from 'Loaded' to 'Initialized' to 'Active' and finally 'Destroyed'."
    ],
    sections: [
      {
        heading: "1. Initialization Phase - init()",
        content: "The init() method is called exactly once by the container when the servlet is first loaded into memory.",
        points: [
          "Used for configuration tasks like database connection setup or loading properties.",
          "Must complete successfully before the servlet can handle any user requests.",
          "Takes a ServletConfig object as a parameter to access configuration parameters."
        ]
      },
      {
        heading: "2. Request Processing Phase - service()",
        content: "The service() method is the core execution block, called for every incoming client request.",
        points: [
          "For every HTTP request (GET, POST, etc.), the container spawns or reuses a thread to execute service().",
          "In HttpServlet, the service() method automatically dispatches requests to doGet(), doPost(), etc.",
          "Handles request data (HttpServletRequest) and constructs the response (HttpServletResponse)."
        ]
      },
      {
        heading: "3. Destruction Phase - destroy()",
        content: "The destroy() method is called once before the container removes the servlet instance from memory.",
        points: [
          "Used for cleanup activities like closing database connections, file handles, or stopping background threads.",
          "Once destroy() is called, the servlet cannot process any more requests.",
          "Garbage collection eventually reclaims the memory used by the servlet object."
        ]
      },
      {
        heading: "4. Life Cycle Flow Diagram",
        content: "Loading Class → Instance Creation → init() → multiple service() calls → destroy() → Removal.",
        points: [
          "1. Loading: Container finds the servlet class.",
          "2. Instantiation: Container creates a new instance.",
          "3. init(): Initialization tasks (once).",
          "4. service(): Handling requests (repeatedly).",
          "5. destroy(): Cleanup (once)."
        ]
      },
      {
        heading: "Important Notes",
        points: [
          "init() and destroy() run only once in the entire lifetime of a servlet.",
          "The container uses a Thread Pool to handle multiple concurrent service() calls efficiently.",
          "Developers usually override doGet() or doPost() instead of the generic service() method."
        ]
      }
    ],
    code: "// --- Servlet Life Cycle Example ---\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.IOException;\n\npublic class LifeCycleServlet extends HttpServlet {\n\n    // 1. Initialization\n    @Override\n    public void init() throws ServletException {\n        System.out.println(\"Servlet is entering the 'Initialized' state.\");\n    }\n\n    // 2. Request Handling (via specific methods)\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) \n            throws ServletException, IOException {\n        System.out.println(\"Processing a GET request in the 'Service' phase.\");\n        res.getWriter().println(\"Check the server console for life cycle logs!\");\n    }\n\n    // 3. Destruction\n    @Override\n    public void destroy() {\n        System.out.println(\"Servlet is entering the 'Destroyed' state - Resources cleaned up.\");\n    }\n}"
  },

  "Sharing Information": {
    description: "Sharing information in servlets involves passing data between different web components (Servlets, JSPs) or between the client and server. This is essential for maintaining state and building dynamic, user-aware applications.",
    keyPoints: [
      "Scope Management: Controlling how long data lives and who can access it.",
      "Persistence: Maintaining user data across multiple requests or the entire application.",
      "Collaboration: Enabling different servlets to work together on a single task.",
      "Communication: Passing parameters from the client to the server and back."
    ],
    sections: [
      {
        heading: "1. Understanding Scopes",
        content: "Data in a web application can be shared at different levels of visibility and duration, referred to as 'Scopes'.",
        points: [
          "Request Scope: Data is valid for a single HTTP request only. Used for forwarding from one servlet to another.",
          "Session Scope: Data persists across multiple requests from the same user. Used for login sessions and shopping carts.",
          "Application Scope: Data is shared globally across all users and servlets. Used for global settings or system constants.",
          "Cookies: Small pieces of data stored on the client side (browser) for session tracking."
        ]
      },
      {
        heading: "2. Request and Session Data",
        content: "These are the most common ways to manage user-specific data during their interaction with the site.",
        points: [
          "Request: request.setAttribute('key', value) / request.getAttribute('key').",
          "Session: HttpSession session = request.getSession(); session.setAttribute('user', 'John').",
          "Sessions remain active until they timeout (e.g., 30 mins) or are invalidated manually."
        ]
      },
      {
        heading: "3. Application-Wide Sharing",
        content: "The ServletContext provides a global storage area for the entire web application.",
        points: [
          "Accessed via getServletContext() from any servlet.",
          "Ideal for shared resources like database URLs or application-wide versions.",
          "ServletContext context = getServletContext(); context.setAttribute('appName', 'MasterclassApp');"
        ]
      },
      {
        heading: "4. Client-Side Tracking: Cookies",
        content: "Cookies are text files stored in the user's browser, used for persistent tracking across sessions.",
        points: [
          "Creation: Cookie c = new Cookie('pref', 'dark'); response.addCookie(c);",
          "Reading: Cookie[] cookies = request.getCookies(); (requires looping to find a specific key).",
          "Cookies can be set with an expiry time (Max-Age) to persist even after the browser is closed."
        ]
      },
      {
        heading: "5. Alternative Techniques",
        points: [
          "Hidden Form Fields: Storing data in <input type='hidden'> to pass state during form submissions without showing it to the user.",
          "URL Rewriting: Appending parameters to the URL (e.g., ?user=101) as a fallback when cookies are disabled.",
          "Query Parameters: Sending data directly in the URL during GET requests."
        ]
      },
      {
        heading: "Summary of Scopes",
        points: [
          "Request -> Duration: Single Request | Location: Server | Use: Forwarding data.",
          "Session -> Duration: Multiple Requests | Location: Server | Use: User-specific data.",
          "Application -> Duration: Server Lifetime | Location: Server | Use: Global application data.",
          "Cookies -> Duration: Until Expiry | Location: Client | Use: User tracking and personalization."
        ]
      }
    ],
    code: "// --- Examples of Scope Usage ---\n\n// 1. Request Scope (Forwarding data to JSP)\nrequest.setAttribute(\"message\", \"Data for current request\");\nRequestDispatcher rd = request.getRequestDispatcher(\"display.jsp\");\nrd.forward(request, response);\n\n// 2. Session Scope (Maintaining Login State)\nHttpSession session = request.getSession();\nsession.setAttribute(\"user_id\", 1001);\n\n// 3. Application Scope (Global Setting)\nServletContext context = getServletContext();\ncontext.setAttribute(\"site_theme\", \"Classic\");\n\n// 4. Working with Cookies\nCookie userCookie = new Cookie(\"lastVisit\", \"2023-10-01\");\nuserCookie.setMaxAge(60*60*24); // 24 hours\nresponse.addCookie(userCookie);"
  },

  "Service Methods": {
    description: "The service() method is the primary execution point within a Servlet. It handles incoming client requests and generates dynamic responses by leveraging the HttpServletRequest and HttpServletResponse objects.",
    keyPoints: [
      "Execution Phase: Invoked for every HTTP request (GET, POST, etc.) after initialization.",
      "Dispatching: In HttpServlet, it automatically dispatches requests to specialized methods like doGet() or doPost().",
      "Request/Response Context: Provides access to client parameters and server output streams.",
      "Multithreading: Each request is processed in its own thread for concurrent handling."
    ],
    sections: [
      {
        heading: "1. The service() Method Workflow",
        content: "When a client sends a request, the container manages the entire execution through the service() method.",
        points: [
          "Step 1: Container receives the incoming HTTP request from the browser.",
          "Step 2: Creates instances of HttpServletRequest and HttpServletResponse.",
          "Step 3: Calls the service(request, response) method of the identified servlet.",
          "Step 4: Servlet processes the logic and constructs the dynamic output.",
          "Step 5: The generated content is sent back to the browser for display."
        ]
      },
      {
        heading: "2. GenericServlet vs. HttpServlet Implementation",
        points: [
          "GenericServlet: The service() method is abstract. It must be manually overridden to handle all requests protocol-independently.",
          "HttpServlet: The service() method is already implemented. It parses the HTTP method type (GET, POST) and targets the correct handler (doGet, doPost)."
        ]
      },
      {
        heading: "3. Handling Common HTTP Methods",
        points: [
          "doGet(): Used for retrieving data where parameters are sent in the URL (Query String).",
          "doPost(): Used for submitting sensitive or large data hidden in the request body.",
          "doPut() & doDelete(): Used in REST-style architectures for updating and deleting database resources."
        ]
      },
      {
        heading: "4. Processing Client Input",
        content: "Servlets extract user-submitted data using the request object's built-in methods.",
        points: [
          "String value = request.getParameter('fieldName'); - Retrieves a single field value.",
          "String[] values = request.getParameterValues('hobby'); - Retrieves multiple values from check boxes.",
          "Crucial for dynamic behavior like login validation, search queries, and form processing."
        ]
      },
      {
        heading: "5. Constructing the Output response",
        content: "The response object provides the necessary stream to send text or HTML back to the user.",
        points: [
          "Set Content Type: response.setContentType('text/html'); - Identifies the data format.",
          "Get Writer: PrintWriter out = response.getWriter(); - Obtains the character stream.",
          "Execute: out.println('<h2>Welcome User</h2>'); - Sends the actual data."
        ]
      },
      {
        heading: "Implementation Best Practices",
        points: [
          "Always override doGet() or doPost() rather than the base service() method whenever possible.",
          "Ensure content type is set before calling getWriter() to avoid encoding issues.",
          "Avoid using instance variables for request-specific data to maintain thread safety."
        ]
      }
    ],
    code: "// --- Practical Servlet Service Implementation ---\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.*;\n\npublic class UserGatewayServlet extends HttpServlet {\n\n    // Overriding specific handler method (Best Practice)\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) \n            throws ServletException, IOException {\n        \n        // 1. Set Response Type\n        res.setContentType(\"text/html\");\n\n        // 2. Read Request Parameter from URL\n        String username = req.getParameter(\"user\");\n        if (username == null) username = \"Guest\";\n\n        // 3. Send HTML Response\n        PrintWriter out = res.getWriter();\n        out.println(\"<html><body>\");\n        out.println(\"<h2>Hello, \" + username + \"!</h2>\");\n        out.println(\"<p>Your request has been processed via the doGet() service method.</p>\");\n        out.println(\"</body></html>\");\n    }\n}"
  },

  "Filtering": {
    description: "Filtering in servlets is a mechanism used for pre-processing requests and post-processing responses. Filters intercept requests before they reach the servlet and responses before they reach the client, enabling modular application logic like authentication, logging, and data transformation.",
    keyPoints: [
      "Interception: Acts as a powerful middle-layer between the client and the target servlet.",
      "Modularity: Allows extraction of common tasks (logging, security) into reusable components.",
      "Chain of Responsibility: Multiple filters can be applied sequentially via a FilterChain.",
      "Life Cycle: Filters have their own initialization and destruction phases (init, doFilter, destroy)."
    ],
    sections: [
      {
        heading: "1. The Filter Life Cycle",
        content: "Managed by the servlet container, Filters follow a standard lifecycle to ensure efficient resource management.",
        points: [
          "init(FilterConfig): Called once when the filter is first created to load configuration settings.",
          "doFilter(Request, Response, Chain): The main logic method called for every matched request to perform filtering tasks.",
          "destroy(): Called once before the filter is decommissioned to release system resources like database connections."
        ]
      },
      {
        heading: "2. How Filtering Works: The execution flow",
        content: "Filters wrap around the target resource, processing the request on the way in and the response on the way out.",
        points: [
          "1. Request enters the Filter from the client.",
          "2. Pre-processing: Filter performs logic like checking logs, authentication, or modifying headers.",
          "3. chain.doFilter(): The request is passed to the next filter or the target Servlet if the check passes.",
          "4. Servlet processes and returns the response.",
          "5. Post-processing: Filter performs trailing logic like compression or adding security headers.",
          "6. Response is sent to the Client."
        ]
      },
      {
        heading: "3. Using the FilterChain",
        content: "The FilterChain object is essential for maintaining the communication flow of the web application.",
        points: [
          "Crucial Rule: Without calling chain.doFilter(req, res), the request is blocked and never reaches the servlet.",
          "Enables multiple filters (e.g., Logging → Security → Logic) to work together as a chain.",
          "Bypassing: Allows a filter to return a response immediately (e.g., if authentication fails, the filter stops the chain)."
        ]
      },
      {
        heading: "4. Common Filtering Use Cases",
        points: [
          "Authentication & Authorization: Validating user identity and permissions.",
          "Logging & Auditing: Tracking user behavior and request performance metrics.",
          "Data Compression: GZipping the response to reduce bandwidth usage.",
          "Localization & Encoding: Setting character encodings for global application support."
        ]
      },
      {
        heading: "5. Filter Configuration",
        content: "Filters can be registered either in the web.xml or using modern Java annotations.",
        points: [
          "Annotation: @WebFilter('/secured/*') automatically registers the filter for matching URL patterns.",
          "web.xml: The traditional approach using <filter> and <filter-mapping> for centralized management."
        ]
      },
      {
        heading: "Implementation Best Practices",
        points: [
          "Always ensure chain.doFilter() is called unless you are intentionally blocking access.",
          "Filters are generic (ServletRequest) and often need to be cast to HttpServletRequest for protocol-specific data.",
          "Maintain the order of filters carefully, as they execute in the order they are mapped."
        ]
      }
    ],
    code: "// --- Practical Authentication Filter Example ---\nimport javax.servlet.*;\nimport javax.servlet.annotation.WebFilter;\nimport java.io.IOException;\n\n@WebFilter(\"/admin/*\")\npublic class AuthFilter implements Filter {\n\n    @Override\n    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) \n            throws IOException, ServletException {\n\n        System.out.println(\"Pre-processing: Checking Admin Authentication\");\n\n        // Simulate simple user role check\n        String user = req.getParameter(\"userRole\");\n\n        if (\"admin\".equals(user)) {\n            // Pass the request along the filter chain to the servlet\n            chain.doFilter(req, res);\n        } else {\n            // Block access and send error response directly\n            res.getWriter().println(\"Access Denied: Admin role required to access this resource.\");\n        }\n\n        System.out.println(\"Post-processing: Request cycle complete\");\n    }\n}"
  },

  "Session Tracking": {
    description: "Session tracking is the mechanism used to maintain state in the otherwise stateless HTTP protocol. It allows web applications to identify individual users and store their data (login status, preferences, carts) across multiple requests.",
    keyPoints: [
      "State Management: Overcomes the limitation of HTTP where each request is independent.",
      "Identification: Assigns a unique Session ID to each user to track their interaction flow.",
      "Persistence: Stores data on the server or client side during the user's visit.",
      "Techniques: Includes Cookies, URL Rewriting, Hidden Form Fields, and HttpSession."
    ],
    sections: [
      {
        heading: "1. The Need for Session Tracking",
        content: "Without session tracking, a server treats every request from the same user as a completely new and unknown interaction.",
        points: [
          "Essential for secure areas (e.g., remaining logged in after the initial check).",
          "Required for linear workflows like multi-step registration or shopping carts.",
          "Enables personalization based on previous actions during the current visit.",
          "Maintains continuity in the user experience."
        ]
      },
      {
        heading: "2. Key Tracking Techniques",
        points: [
          "Cookies: Small data snippets stored in the browser; sent back automatically with every request.",
          "URL Rewriting: Appending parameters (e.g., ;jsessionid=...) to links in case cookies are disabled.",
          "Hidden Form Fields: Storing state within <input type='hidden'> tags in HTML forms.",
          "HttpSession API: The standard Java EE way to manage state on the server side using a secure ID."
        ]
      },
      {
        heading: "3. Working with HttpSession",
        content: "HttpSession is the most robust and secure method for session management in Java web apps.",
        points: [
          "request.getSession(): Retrieves the existing session or creates a new one if none exists.",
          "session.setAttribute(key, value): Stores objects on the server memory identified by a key.",
          "session.getAttribute(key): Retrieves stored objects for the current user's session.",
          "session.invalidate(): Immediately destroys the session and clears all its data (e.g., on Logout)."
        ]
      },
      {
        heading: "4. Session Lifecycle and Timeout",
        content: "Sessions are temporary and are cleared based on user activity or server configuration.",
        points: [
          "Creation: Starts when the user first triggers a getSession() call.",
          "Inactivity Timeout: The server automatically invalidates sessions after a set period of idle time (e.g., 30 mins).",
          "Configuration: Timeout is set in web.xml using the <session-timeout> tag or via code.",
          "Destruction: Ends via timeout, manual invalidation, or server shutdown."
        ]
      },
      {
        heading: "5. Session Tracking Flow",
        points: [
          "1. User sends an initial request to the server.",
          "2. Server creates an HttpSession and generates a unique Session ID.",
          "3. Server sends the ID to the client (usually as a cookie named JSESSIONID).",
          "4. Client includes this ID in all subsequent requests automatically.",
          "5. Server uses the ID to look up the correct Session object and its attributes."
        ]
      },
      {
        heading: "6. Advantages and Limitations",
        points: [
          "Advantages: Secure server-side storage, handles complex data, easy user identification.",
          "Limitations: Consumes server RAM, relies on client-side cookies or complex URL rewriting fallback."
        ]
      }
    ],
    code: "// --- Comprehensive Session Management Example ---\nimport javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.IOException;\n\npublic class SessionPortalServlet extends HttpServlet {\n\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) \n            throws ServletException, IOException {\n        \n        // 1. Get or Create Session\n        HttpSession session = req.getSession(true);\n\n        // 2. Manage Attributes\n        Integer visitCount = (Integer) session.getAttribute(\"visitCount\");\n        if (visitCount == null) {\n            visitCount = 1;\n        } else {\n            visitCount += 1;\n        }\n        session.setAttribute(\"visitCount\", visitCount);\n\n        // 3. Inform User\n        res.getWriter().println(\"You have visited this page \" + visitCount + \" times in this session.\");\n        res.getWriter().println(\"Your Session ID is: \" + session.getId());\n    }\n\n    @Override\n    protected void doPost(HttpServletRequest req, HttpServletResponse res) \n            throws ServletException, IOException {\n        // Perform Logout\n        HttpSession session = req.getSession(false);\n        if (session != null) {\n            session.invalidate();\n        }\n    }\n}"
  },

  "JSP Overview": {
    description: "JSP (JavaServer Pages) is a server-side technology used to create dynamic, data-driven web pages by embedding Java code directly into HTML. It simplifies UI development by focusing on the presentation layer while delegating business logic to Servlets.",
    keyPoints: [
      "HTML-Centric: Allows developers to write standard HTML with embedded Java logic.",
      "Servlet-Based: Every JSP is internally translated into a Java Servlet by the web container.",
      "Performance: Compiled into bytecode once, then reused for all subsequent requests.",
      "Ease of Use: Provides implicit objects and custom tags to reduce boilerplate Java code."
    ],
    sections: [
      {
        heading: "1. JSP Architecture and Execution",
        content: "JSP follows a seamless translation-to-execution workflow managed by the web container (e.g., Tomcat).",
        points: [
          "Translation: The JSP file is converted into a Java Servlet source file (.java).",
          "Compilation: The Java file is compiled into a servlet class file (.class).",
          "Loading: The container loads the class and creates an instance.",
          "Execution: The _jspService() method is invoked to handle the client's request."
        ]
      },
      {
        heading: "2. The JSP Life Cycle",
        content: "The lifecycle ensures efficient management of the JSP from the first request until its removal from the server.",
        points: [
          "jspInit(): Called once per lifetime for initialization tasks.",
          "_jspService(): Called for every request to process data and generate HTML.",
          "jspDestroy(): Called once for cleanup before the JSP is removed from memory."
        ]
      },
      {
        heading: "3. Core JSP Elements",
        points: [
          "Directives: Instructions for the container (e.g., <%@ page import='java.util.*' %>).",
          "Scriptlets: Blocks of Java code executed at request time (e.g., <% int x = 5; %>).",
          "Expressions: Shorthand for outputting data directly to the page (e.g., <%= x %>).",
          "Declarations: Defining variables or methods at the class level (e.g., <%! int y = 10; %>).",
          "Standard Actions: Predefined tags for common tasks like including files or using JavaBeans."
        ]
      },
      {
        heading: "4. Implicit Objects",
        content: "JSP provides nine built-in objects available in every page without explicit declaration.",
        points: [
          "request: Provides access to client parameters and headers.",
          "response: Used to configure the response (cookies, headers).",
          "session: Manages user-specific data across multiple requests.",
          "application: Stores global data for all users of the web application.",
          "out: The JspWriter stream used to send content to the browser."
        ]
      },
      {
        heading: "JSP vs. Servlets",
        points: [
          "Primary Role: JSP handles Presentation (UI); Servlets handle Business Logic (Control).",
          "Syntax: JSP uses HTML + Java; Servlets use pure Java with embedded HTML strings.",
          "Development: JSP is faster for UI changes; Servlets are more robust for data processing."
        ]
      },
      {
        heading: "Advantages and Limitations",
        points: [
          "Advantages: Fast UI development, built-in objects, support for Expression Language (EL).",
          "Limitations: Mixing logic with HTML can reduce readability; difficult to debug complex Java code."
        ]
      }
    ],
    code: "<!-- Example JSP Page Structure -->\n<%@ page language=\"java\" contentType=\"text/html; charset=UTF-8\" pageEncoding=\"UTF-8\"%>\n<%@ page import=\"java.util.Date\" %>\n\n<html>\n<head>\n    <title>JSP Discovery</title>\n</head>\n<body>\n    <h2>Current Server Time:</h2>\n    <%-- Scripting Element: Expression --%>\n    <p><%= new Date() %></p>\n\n    <%-- Scripting Element: Scriptlet --%>\n    <%\n        String user = request.getParameter(\"name\");\n        if (user != null) {\n            out.println(\"Welcome back, \" + user + \"!\");\n        } else {\n            out.println(\"Hello, Guest User!\");\n        }\n    %>\n</body>\n</html>"
  },

  "JSP Life Cycle": {
    description: "The JSP life cycle defines the entire process from its initial translation by the container to its final destruction, following a servlet-based execution model.",
    keyPoints: [
      "Translation: The JSP is converted into a Java source file.",
      "Compilation: The source file is compiled into a bytecode servlet.",
      "Execution: The servlet handles client requests via _jspService().",
      "One-Time Setup: Initialization happens only once per lifecycle."
    ],
    sections: [
      {
        heading: "1. Translation and Compilation Phases",
        content: "When a client requests a JSP, the container checks if the servlet class is already present and up-to-date.",
        points: [
          "Translation: The .jsp file is parsed and converted into a .java servlet class.",
          "Compilation: The Java compiler generates a .class file from the translated source.",
          "Loading & Instantiation: The class is loaded into memory, and an instance is created."
        ]
      },
      {
        heading: "2. The Initialization Phase - jspInit()",
        content: "Similar to a regular Servlet's init() method, jspInit() is called only once.",
        points: [
          "Used for loading configuration parameters and setting up shared resources.",
          "Executed before the JSP handles its first user request.",
          "Can be overridden by the developer using a JSP Declaration element."
        ]
      },
      {
        heading: "3. The Service Phase - _jspService()",
        content: "This is the core execution phase, called for every individual client request.",
        points: [
          "Handles the incoming HttpServletRequest and constructs the HttpServletResponse.",
          "This method is automatically generated by the container and should not be overridden.",
          "Executes the HTML content and embedded Java logic to produce dynamic output."
        ]
      },
      {
        heading: "4. The Destruction Phase - jspDestroy()",
        content: "Called once by the container before removing the JSP instance from service.",
        points: [
          "Used for releasing resources such as database connections or file handles.",
          "Finalizes the lifecycle before the object is garbage-collected."
        ]
      },
      {
        heading: "JSP Life Cycle Flow Summary",
        content: "JSP requested by client → JSP translated into servlet → Servlet compiled → jspInit() called → _jspService() called repeatedly → jspDestroy() called → Servlet removed from memory."
      }
    ],
    code: "// --- Overriding Life Cycle Methods in JSP ---\n<%! \n    public void jspInit() {\n        System.out.println(\"JSP Initialization logic here\");\n    }\n\n    public void jspDestroy() {\n        System.out.println(\"JSP Cleanup logic here\");\n    }\n%>\n\n<html>\n<body>\n    <h2>JSP Life Cycle Demo</h2>\n    <p>Current Time: <%= new java.util.Date() %></p>\n</body>\n</html>"
  },

  "Action Tags": {
    description: "JSP Action Tags are runtime-executed XML-based tags used to perform server-side tasks such as including resources, forwarding requests, or interacting with JavaBeans without writing explicit Java code.",
    keyPoints: [
      "Runtime execution: Unlike directives, action tags are executed when the page is requested by the client.",
      "XML Syntax: Tags follow the <jsp:tagName> format, leading to cleaner and more maintainable pages.",
      "Java Shortcuts: They act as high-level abstractions for common request dispatcher and JavaBean operations.",
      "MVC Support: Action tags help separate the presentation level (JSP) from business logic (Java classes)."
    ],
    sections: [
      {
        heading: "1. Inclusion with <jsp:include>",
        content: "Dynamically includes another resource during the request processing phase.",
        points: [
          "Mechanism: Internally uses RequestDispatcher.include() to merge outputs at runtime.",
          "Dynamic Content: Unlike the static include directive, this tag always displays the latest content from the included page.",
          "Workflow: Main JSP executes → Tag encountered → Included file executed → Output inserted → Main JSP continues."
        ]
      },
      {
        heading: "2. Navigation with <jsp:forward>",
        content: "Transfers the entire application control to another specified resource.",
        points: [
          "Mechanism: Uses RequestDispatcher.forward() internally; execution of the original JSP stops immediately.",
          "Browser behavior: The URL in the address bar remains unchanged as the operation happens on the server.",
          "Safety: The response buffer is cleared before the forward operation to ensure a clean transition."
        ]
      },
      {
        heading: "3. Dynamic Parameters with <jsp:param>",
        content: "Appends extra request parameters dynamically during an include or forward operation.",
        points: [
          "Syntax: <jsp:param name='user' value='Haritha' />.",
          "Retrieval: The target resource can fetch these values normally using request.getParameter()."
        ]
      },
      {
        heading: "4. Working with JavaBeans",
        content: "Three core actions allow JSPs to interact with reusable Java components easily.",
        points: [
          "<jsp:useBean>: Locates an existing bean instance in a given scope (page, request, session, app) or creates a new one if not found.",
          "<jsp:setProperty>: Sets data into bean properties via setter methods. property='*' can automatically map form fields to properties.",
          "<jsp:getProperty>: Retrieves data from bean properties via getter methods and outputs it directly to the response writer."
        ]
      },
      {
        heading: "Advantages of Action Tags",
        points: [
          "They significantly reduce the need for raw Java scriptlets, improving page readability.",
          "Enable high-level modularity and code reusability across multiple pages.",
          "Support the MVC architecture by delegating heavy lifting to JavaBeans."
        ]
      }
    ],
    code: "<!-- Example: Advanced Action Tags and Bean Interaction -->\n<jsp:include page=\"header.jsp\">\n    <jsp:param name=\"pageTitle\" value=\"Advanced Dashboard\" />\n</jsp:include>\n\n<%-- Locating or Creating a User Profile Bean --%>\n<jsp:useBean id=\"profile\" class=\"com.masterclass.UserProfile\" scope=\"session\" />\n\n<%-- Automatically mapping all form fields from a profile editor --%>\n<jsp:setProperty name=\"profile\" property=\"*\" /> \n\n<h3>Welcome, <jsp:getProperty name=\"profile\" property=\"userName\" />!</h3>\n\n<%-- Conditional Forwarding based on status --%>\n<%\n    if (\"admin\".equals(profile.getRole())) {\n%>\n    <jsp:forward page=\"admin_panel.jsp\" />\n<%\n    }\n%>"
  },

  "Directives": {
    description: "JSP Directives are instructions for the JSP container that define global settings for the entire page. They are processed during the translation phase and do not produce any visible output on the client side.",
    keyPoints: [
      "Process Instructions: They tell the container how to translate the JSP into a servlet.",
      "Global Configuration: Define settings like imports, error handling, and character sets.",
      "Static Inclusion: Allow merging of files at translation time for better modularity.",
      "Syntax: Uses the <%@ tagName attribute='value' %> format."
    ],
    sections: [
      {
        heading: "1. The Page Directive",
        content: "Defines attributes that apply to the entire JSP page. It is usually placed at the very top.",
        points: [
          "import: Specifies Java classes and packages to be used (e.g., <%@ page import='java.util.*' %>).",
          "contentType: Sets the MIME type and character encoding (default is text/html).",
          "errorPage: Redirects the user to a specific page if an uncaught exception occurs.",
          "isErrorPage: Declares that the current page is designed to handle exceptions.",
          "session: Specifies if the page requires an HttpSession (default: true).",
          "isELIgnored: Determines whether Expression Language (EL) is ignored on the page."
        ]
      },
      {
        heading: "2. The Include Directive",
        content: "Used to include the contents of another file (HTML, JSP, or text) into the current page during translation.",
        points: [
          "Static Inclusion: The code is literally copied into the parent JSP before being compiled into a servlet.",
          "Syntax: <%@ include file='header.jsp' %>.",
          "Reusability: Perfect for common headers, footers, or navigation bars that change rarely.",
          "Note: Changes to the included file require the parent JSP to be re-translated."
        ]
      },
      {
        heading: "3. The Taglib Directive",
        content: "Declares a tag library that contains custom tags the JSP can use.",
        points: [
          "Modern Utility: Essential for using JSTL (JSP Standard Tag Library) or custom UI components.",
          "Syntax: <%@ taglib uri='URI' prefix='p' %>.",
          "uri: A unique identifier for the tag library.",
          "prefix: A shorthand name used to access tags in the page (e.g., <p:tagName />)."
        ]
      }
    ],
    code: "<%-- Example of Detailed Directives --%>\n<%@ page language=\"java\" contentType=\"text/html; charset=UTF-8\" \n         import=\"java.util.*, java.sql.*\" \n         session=\"true\" \n         errorPage=\"oops.jsp\" %>\n\n<%-- Static Inclusion --%>\n<%@ include file=\"/WEB-INF/common/header.jsp\" %>\n\n<%-- Tag Library Declaration --%>\n<%@ taglib uri=\"http://java.sun.com/jsp/jstl/core\" prefix=\"c\" %>\n\n<!DOCTYPE html>\n<html>\n<body>\n    <h2>Directives configuration applied.</h2>\n</body>\n</html>"
  },

  "Implicit Objects": {
    description: "JSP Implicit Objects are pre-defined Java variables that are automatically available in every JSP page without the need for manual declaration or instantiation. They are initialized by the container when the JSP is translated into a servlet.",
    keyPoints: [
      "No Declaration Needed: Ready to use variables provided by the Servlet/JSP container.",
      "Servlet Mapping: Each object maps to a core part of the underlying Servlet API.",
      "Efficiency: Simplifies common tasks like reading parameters, setting headers, and managing sessions.",
      "Access: Available within scriptlets, expressions, and EL."
    ],
    sections: [
      {
        heading: "1. Client Communication Objects",
        points: [
          "request: (HttpServletRequest) - Represents the client's HTTP request. Used for reading parameters, headers, and cookies.",
          "response: (HttpServletResponse) - Represents the server's response. Used for setting content types, adding cookies, and redirecting users.",
          "out: (JspWriter) - The character output stream used to send HTML or text directly to the browser client."
        ]
      },
      {
        heading: "2. Session and Application Objects",
        points: [
          "session: (HttpSession) - Used to store user-specific data that persists across multiple requests.",
          "application: (ServletContext) - A global object for sharing data across all users and pages in the entire web application.",
          "config: (ServletConfig) - Provides access to initialization parameters defined in the web.xml for that specific page."
        ]
      },
      {
        heading: "3. Page and Error Context Objects",
        points: [
          "pageContext: (PageContext) - The central hub providing access to all other implicit objects and attributes at all scopes.",
          "page: (Object) - A reference to the current instance of the generated servlet class (equivalent to 'this' in Java).",
          "exception: (Throwable) - Only available in pages declared as isErrorPage='true'. Used to capture and display the root cause of an error."
        ]
      }
    ],
    code: "<%-- Implicit Objects: Hands-on Demo --%>\n<% \n    // 1. Reading request data\n    String browser = request.getHeader(\"User-Agent\");\n\n    // 2. Accessing Session identity\n    String user = (String) session.getAttribute(\"username\");\n\n    // 3. Global application context\n    String serverInfo = application.getServerInfo();\n%>\n\n<div class=\"dashboard\">\n    <p>User Browser: <%= browser %></p>\n    <p>Logged in: <%= (user != null) ? user : \"Guest\" %></p>\n    <p>Server Version: <%= serverInfo %></p>\n</div>\n\n<%-- Using the 'out' implicit object manually --%>\n<% out.println(\"Response generated at: \" + new java.util.Date()); %>"
  },

  "Scope in JSP": {
    description: "Scope in JSP determines the visibility and duration of data attributes across different parts of a web application. It defines how long an object remains in memory and which components can access its data.",
    keyPoints: [
      "Visibility Levels: Defines who can see the data (current page, request chain, user session, or all users).",
      "Duration: Defines how long the data lives in memory before being garbage collected.",
      "Attribute API: Uses setAttribute(), getAttribute(), and removeAttribute() for data management.",
      "Implicit Mapping: Each scope corresponds to a specific implicit object (pageContext, request, session, application)."
    ],
    sections: [
      {
        heading: "1. Page Scope",
        content: "The most restricted scope, unique to a single JSP page.",
        points: [
          "Visibility: Only within the current JSP file where the attribute is set.",
          "Lifetime: The object is destroyed once the page finishes processing or is left via forward/include.",
          "Object: Handled by the 'pageContext' implicit object."
        ]
      },
      {
        heading: "2. Request Scope",
        content: "Data travels with the HTTP request object through the application.",
        points: [
          "Visibility: Accessible to all resources (JSPs, Servlets) that are part of the same request cycle.",
          "Lifetime: Ends when the final response is sent back to the client browser.",
          "Object: Handled by the 'request' implicit object. Used frequently with RequestDispatcher."
        ]
      },
      {
        heading: "3. Session Scope",
        content: "Maintains data for a specific user across multiple requests and pages.",
        points: [
          "Visibility: Shared across all pages visited by a single user during their active session.",
          "Lifetime: Ends when the session times out, is manually invalidated (logout), or the browser is closed.",
          "Object: Handled by the 'session' implicit object. Ideal for user profiles and shopping carts."
        ]
      },
      {
        heading: "4. Application Scope",
        content: "Global data shared across the entire web application and all its users.",
        points: [
          "Visibility: Accessible to every user and every page in the deployed web application.",
          "Lifetime: Exists from the moment the server starts until it is shut down.",
          "Object: Handled by the 'application' implicit object. Used for shared constants and database configurations."
        ]
      }
    ],
    code: "<%-- Scope Management: Lifecycle Comparison --%>\n<% \n    // Storing the same key at different levels\n    pageContext.setAttribute(\"info\", \"Visible only on this page\", PageContext.PAGE_SCOPE);\n    request.setAttribute(\"info\", \"Visible until response is sent\", PageContext.REQUEST_SCOPE);\n    session.setAttribute(\"info\", \"Visible throughout user session\", PageContext.SESSION_SCOPE);\n    application.setAttribute(\"info\", \"Visible to everyone on the site\", PageContext.APPLICATION_SCOPE);\n%>\n\n<div class=\"scope-box\">\n    <h3>Data Audit:</h3>\n    <p>Local Value: <%= pageContext.getAttribute(\"info\") %></p>\n    <p>Context Value: <%= application.getAttribute(\"info\") %></p>\n</div>"
  },

  "Scripting Elements": {
    description: "JSP Scripting Elements allow developers to embed pure Java code directly into a JSP page. They are used to generate dynamic content, handle logic, and declare variables or methods.",
    keyPoints: [
      "Dynamic Content: Enables the execution of Java logic at request time.",
      "Scriptlets: Used for blocks of Java code (loops, conditionals).",
      "Expressions: Used for simple values or method results that go directly to the output.",
      "Declarations: Used for defining class-level variables and methods."
    ],
    sections: [
      {
        heading: "1. JSP Scriptlets (<% ... %>)",
        content: "Scriptlets contain Java code that is executed every time the JSP is requested.",
        points: [
          "Syntax: <% java_code %>.",
          "Placement: Translated inside the _jspService() method of the generated servlet.",
          "Usage: Ideal for business logic, database queries, and control flow (if/else, for/while)."
        ]
      },
      {
        heading: "2. JSP Expressions (<%= ... %>)",
        content: "Used to insert a value directly into the HTML output stream.",
        points: [
          "Syntax: <%= expression %>.",
          "Note: Do not include a semicolon at the end of the expression.",
          "Internal: Translated to out.print(expression) inside the service method."
        ]
      },
      {
        heading: "3. JSP Declarations (<%! ... %>)",
        content: "Used to declare variables and methods at the class level of the generated servlet.",
        points: [
          "Syntax: <%! java_declaration %>.",
          "Scope: These variables are instance variables and are shared across multiple requests.",
          "Usage: Best for utility methods and constant values used across the page."
        ]
      }
    ],
    code: "<%-- Scripting Elements: Practical Example --%>\n<%! \n    // Declaration: Method to compute square\n    int square(int n) { return n * n; }\n%>\n\n<% \n    // Scriptlet: Logic\n    int num = 5;\n    int result = square(num);\n%>\n\n<html>\n<body>\n    <h3>Calculation Results:</h3>\n    <%-- Expression: Direct Output --%>\n    <p>The square of <%= num %> is: <%= result %></p>\n</body>\n</html>"
  },

  "JSP Exception Handling": {
    description: "JSP provides a built-in mechanism to handle runtime exceptions gracefully through error pages. This prevents users from seeing technical stack traces and provides a professional user experience.",
    keyPoints: [
      "Graceful Errors: Redirects users to a custom 'oops' page instead of showing crash details.",
      "Error Page Directive: Configured using the errorPage attribute in the page directive.",
      "isErrorPage: Defines a page as an exception handler that can access the 'exception' implicit object.",
      "Standard Management: Centralized error handling across the entire application."
    ],
    sections: [
      {
        heading: "1. Configuring the Error Page",
        content: "The source page must specify which page to redirect to in case of an application crash.",
        points: [
          "Syntax: <%@ page errorPage='error_handler.jsp' %>.",
          "Trigger: Any uncaught RuntimeException in scriptlets or expressions will trigger the redirect automatically."
        ]
      },
      {
        heading: "2. Creating the Handler Page",
        content: "The handler page must declare itself as an error-handling resource to be recognized by the container.",
        points: [
          "Syntax: <%@ page isErrorPage='true' %>.",
          "Implicit Object: Only these pages can use the built-in 'exception' object to log details or display user-friendly messages."
        ]
      }
    ],
    code: "<%-- error_demo.jsp --%>\n<%@ page errorPage=\"handler.jsp\" %>\n<%\n    // Logic error to demonstrate redirection\n    int result = 50 / 0;\n%>\n\n<%-- handler.jsp --%>\n<%@ page isErrorPage=\"true\" %>\n<html>\n<body>\n    <h2>We encountered a technical issue</h2>\n    <p>Message: <%= exception.getMessage() %></p>\n    <p>Please contact support if this persists.</p>\n</body>\n</html>"
  },

  "Expression Language (EL)": {
    description: "Expression Language (EL) is a simplified syntax used to access data stored in Java objects (Beans, Maps, Lists) and scopes without writing Java scriptlets. It is the modern standard for presentation in JSP pages.",
    keyPoints: [
      "No Scriptlets Required: Uses a clean ${object.property} syntax instead of Java expressions.",
      "Null Safety: EL automatically handles null values by displaying nothing rather than throwing errors.",
      "Implicit Objects: Includes specialized objects for parameters, headers, and cookies.",
      "Readability: Makes JSP code shorter and much easier for web designers to read."
    ],
    sections: [
      {
        heading: "1. Basic EL Syntax",
        points: [
          "Pattern: The expression is wrapped in ${ }.",
          "Accessors: Uses the dot (.) operator for object properties and brackets ([]) for collections."
        ]
      },
      {
        heading: "2. Automatic Scope Search",
        content: "EL intelligently searches through attributes in a specific order: Page → Request → Session → Application.",
        points: [
          "${currentUser}: Searches all four scopes for an attribute named 'currentUser'.",
          "${sessionScope.currentUser}: Specifically targets the user's session data."
        ]
      },
      {
        heading: "3. Implicit Objects in EL",
        points: [
          "param: Accesses request URL parameters (e.g., ${param.id}).",
          "header: Accesses HTTP request headers (e.g., ${header['browser']}).",
          "cookie: Direct access to browser cookies.",
          "initParam: Accesses application-wide context parameters."
        ]
      }
    ],
    code: "<%-- Modern JSP using Expression Language --%>\n<div class=\"user-profile\">\n    <h3>User Name: ${sessionScope.user.profileName}</h3>\n    <p>Viewing Record ID: ${param.uid}</p>\n    <p>Browser Info: ${header['User-Agent']}</p>\n</div>"
  }
};
