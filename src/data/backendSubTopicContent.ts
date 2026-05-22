import { SubTopicContent } from "./subTopicContent";

export const backendSubTopicData: Record<string, SubTopicContent> = {};

// Helper function to generate standardized, high-quality Backend content
const generateContent = (title: string, category: string): SubTopicContent => ({
  description: `${title} is a fundamental concept within the ${category} ecosystem. Mastering this topic is essential for building robust, scalable, and professional-grade backend applications and services.`,
  keyPoints: [
    `Comprehensive understanding of the core principles underlying ${title}.`,
    `Hands-on implementation strategies for integrating ${title} into production environments.`,
    `Deep dive into efficiency, optimization, and industry-standard best practices for ${title}.`,
    `Advanced troubleshooting and debugging techniques specific to ${title} implementations.`
  ],
  sections: [
    {
      heading: `Theoretical Foundations of ${title}`,
      content: `In the context of modern backend engineering, ${title} serves as a critical pillar. This section explores the conceptual framework, architectural implications, and the technical necessity of ${title} in the broader web development lifecycle.`,
      points: [
        `Evolution and history of ${title} in software development.`,
        `Fundamental rules and syntax governing ${title}.`,
        `The relationship between ${title} and other backend components.`
      ]
    },
    {
      heading: "Practical Implementation Strategy",
      content: `Transitioning from theory to practice requires a structured approach. Implementing ${title} involves several standardized steps aimed at ensuring code readability and system stability.`,
      points: [
        `Step 1: Environment configuration and initialization for ${title}.`,
        `Step 2: Core logic development and pattern implementation.`,
        `Step 3: Integration with asychnronous workflows and middleware.`,
        `Step 4: Testing and validation of the ${title} logic.`
      ]
    },
    {
      heading: "Performance & Scalability",
      content: `When deploying ${title} in a high-traffic environment, performance optimization becomes paramount. Developers must consider resource allocation, execution time, and horizontal scaling capabilities.`,
      points: [
        `Minimizing overhead during the execution of ${title}.`,
        `Memory management and garbage collection considerations.`,
        `Ensuring ${title} does not become a bottleneck in the event loop.`
      ]
    },
    {
      heading: "Industry Best Practices",
      content: `Adhering to community-standard patterns ensures that your implementation of ${title} remains maintainable, secure, and compatible with modern libraries.`,
      points: [
        "Consistent naming conventions and modular design.",
        "Comprehensive error handling and meaningful fallback mechanisms.",
        "Security-first approach to data processing and input validation."
      ]
    }
  ]
});

const backendTopics = [
  // Module 1 (Intro)
  "Web Development Basics", "Frontend", "Backend", "Client", "Server", "Architecture", "HTTP", "DNS", "Servers", "API Basics", "REST", "Endpoints", "Node.js Overview", "Runtime Environment", "Asynchronous", "Event-Driven", "Cross-Platform", "Installation", "npm Setup", "Verification", "VS Code Setup", "Extensions", "Configuration", "Environment Variables", "Project Setup", "Dependencies", "Development Tools", "Package Managers", "Debugging Tools", "Hello World", "Execution", "Node CLI", "Basic App", "Modules", "File Structure",
  // Module 2 (JS Fundamentals)
  "var, let, const", "Primitive Types", "Reference Types", "Arithmetic", "Assignment", "Comparison", "Logical", "if", "if else", "switch", "nested if", "for loop", "while loop", "do while", "break and continue", "Function Declaration", "Function Expression", "Arrow Functions", "Parameters", "Array Methods", "Object Properties", "Nested Structures", "String Operations", "Template Strings", "String Methods", "JSON Parse", "JSON Stringify", "JSON Structure", "ES6 Overview", "New Features", "Syntax Updates", "Arrow Syntax", "this Context", "Use Cases", "Expressions", "Multi-line Strings", "Array Destructuring", "Object Destructuring", "Default Values", "Spread Operator", "Rest Parameters", "Problem Solving", "Algorithm Design", "Logic Implementation", "Exercises", "Practice Problems", "Code Challenges", "Utility Functions", "Helper Modules", "Code Reusability",
  // Module 3 (Advanced JS)
  "Callback Basics", "Callback Hell", "Best Practices", "Promise States", "then/catch", "Chaining", "async Functions", "await Keyword", "Error Handling", "Call Stack", "Callback Queue", "Microtasks", "Closure Basics", "Scope Chain", "map", "filter", "reduce", "Custom HOFs", "ES6 Modules", "CommonJS", "Module Systems", "Named Exports", "Default Exports", "Dynamic Imports", "try-catch", "throw", "Error Objects", "Custom Errors", "Global Handlers", "Error Propagation", "Async Exercises", "Promise Tasks", "Async/Await Practice", "Error Scenarios", "Handling Patterns",
  // Module 4 (Node Core)
  "Node.js Architecture", "REPL", "npm Package Manager", "Package.json", "Core Modules", "File System Module", "Path Module", "OS Module", "HTTP Module", "Events Module", "Streams & Buffers", "File Handling Applications", "HTTP Server Creation", "Node.js Utility Projects",
  // Module 5 (Express)
  "Introduction to Express.js", "Installing Express", "Creating Express Server", "Routing", "Route Parameters", "Middleware", "Request & Response Handling", "Static Files", "Express Router", "Error Handling Middleware", "Express Server Development", "Routing Applications", "Middleware Implementation",
  // Module 6 (REST API)
  "Introduction to REST APIs", "CRUD Operations", "API Methods (GET, POST, PUT, DELETE)", "API Testing", "JSON Handling", "REST Architecture", "Status Codes", "API Validation", "CRUD API Development", "API Testing using Postman", "JSON-Based Applications",
  // Module 7 (MongoDB)
  "Introduction to Databases", "SQL vs NoSQL", "MongoDB Installation", "MongoDB Compass", "Collections & Documents", "CRUD Operations in MongoDB", "MongoDB Queries", "Database Creation", "MongoDB CRUD Operations", "Data Management Applications",
  // Module 8 (Mongoose)
  "Introduction to Mongoose", "Connecting MongoDB with Node.js", "Schemas", "Models", "Validation", "Relationships", "Query Methods", "Database Integration Projects", "Schema-Based Applications", "User Management System",
  // Module 9 (Auth)
  "User Authentication", "JWT Authentication", "bcrypt Password Encryption", "Login & Registration System", "Protected Routes", "Authorization", "Role-Based Access", "Environment Variables", "Secure Login System", "Authentication APIs", "Protected Backend Applications",
  // Module 10 (File/Email)
  "File Upload using Multer", "Image Upload APIs", "Cloud Storage Basics", "Email Services", "Nodemailer", "OTP Verification System", "File Upload Projects", "Email Sending Applications", "OTP Authentication System",
  // Module 11 (Real-Time)
  "Introduction to Socket.io", "Real-Time Communication", "WebSockets", "Live Notifications", "Chat Applications", "Real-Time Chat Application", "Live Notification System",
  // Module 12 (Security)
  "API Security", "CORS", "Helmet", "Rate Limiting", "Data Validation", "Error Logging", "Backend Best Practices", "Secure API Development", "Backend Optimization",
  // Module 13 (Git)
  "Introduction to Git", "Git Commands", "GitHub Basics", "Repository Management", "Branching", "Version Control", "GitHub Project Hosting", "Team Collaboration Practice",
  // Module 14 (Deployment)
  "Deployment Basics", "Hosting Backend Applications", "Render Deployment", "Vercel Basics", "Environment Configuration", "PM2 Basics", "Live Project Deployment", "Production Hosting",
  // Module 15 (Projects)
  "Student Management API", "Authentication System", "Blog Backend", "Notes Management API", "E-Commerce Backend System", "Hospital Management Backend", "Employee Management System", "Online Course Backend", "Real-Time Chat Backend"
];

const specificBackendData: Record<string, SubTopicContent> = {
  // === MODULE 1 mappings ===
  "Web Development Basics": {
    description: "Web development is the process of creating, designing, building, and maintaining websites and web applications that run on the internet or intranet. It involves frontend development, backend development, databases, APIs, servers, deployment, and security. Web development is one of the most important fields in modern software engineering because almost every business and service depends on web applications.",
    keyPoints: [
      "Web development creates websites and web applications.",
      "Frontend manages user interface.",
      "Backend handles server-side logic and databases.",
      "Modern applications use APIs and cloud services.",
      "Web development is essential for modern businesses."
    ],
    sections: [
      {
        heading: "Definition of Web Development",
        content: "Web development refers to the development of websites and web-based applications using different technologies and programming languages. It includes everything from creating a simple static webpage to building complex enterprise applications, e-commerce platforms, social media websites, cloud systems, and real-time applications."
      },
      {
        heading: "History of Web Development",
        points: [
          "The World Wide Web (WWW) was introduced by Tim Berners-Lee in 1989.",
          "Initially websites were static and built only using HTML.",
          "CSS was introduced for styling webpages.",
          "JavaScript added interactivity to websites.",
          "Backend technologies evolved for dynamic websites and databases.",
          "Modern web development now includes cloud computing, APIs, real-time systems, and full stack applications."
        ]
      },
      {
        heading: "Types of Web Development",
        points: [
          "Frontend Development: Focuses on the visual and interactive part of websites that users directly interact with.",
          "Backend Development: Manages server-side logic, databases, authentication, APIs, and application processing.",
          "Full Stack Development: Combines both frontend and backend development together."
        ]
      },
      {
        heading: "How Web Applications Work",
        points: [
          "User opens browser and enters website URL.",
          "Browser sends HTTP request to server.",
          "Server processes the request.",
          "Database interaction happens if needed.",
          "Server sends response back to browser.",
          "Browser renders webpage to user."
        ]
      }
    ],
    code: "// Simple HTML Example\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Web Development</title>\n</head>\n<body>\n  <h1>Welcome to Web Development</h1>\n</body>\n</html>\n\n// Simple Node.js Backend Example\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n    res.write('Backend Server Running');\n    res.end();\n});\nserver.listen(3000);"
  },
  "Frontend": {
    description: "Frontend development is the client-side part of web development responsible for designing and creating the user interface (UI) and user experience (UX) of websites and applications. It controls everything users see and interact with inside the browser.",
    keyPoints: ["Runs in browser", "Handles UI", "Visible to users", "Uses HTML, CSS, JavaScript"],
    sections: [
      {
        heading: "Technologies",
        points: ["HTML", "CSS", "JavaScript", "React.js", "Angular", "Vue.js", "Bootstrap", "Tailwind CSS"]
      },
      {
        heading: "Responsibilities",
        points: ["Designing webpages", "Creating responsive layouts", "Handling user interactions", "Building UI components", "Client-side validation"]
      }
    ]
  },
  "Backend": {
    description: "Backend development is the server-side part of web development responsible for handling databases, APIs, business logic, authentication, server communication, and data processing.",
    keyPoints: ["Runs on server", "Handles data processing", "Not directly visible", "Uses Node.js, databases"],
    sections: [
      {
        heading: "Technologies",
        points: ["Node.js", "Express.js", "Java", "Python", "PHP", "MongoDB", "MySQL", "PostgreSQL"]
      },
      {
        heading: "Responsibilities",
        points: ["Managing databases", "Creating REST APIs", "Handling authentication", "Business logic processing", "Server-side validation"]
      }
    ],
    code: "const express = require('express');\nconst app = express();\napp.get('/', (req, res) => {\n    res.send('Backend Server Running');\n});\napp.listen(3000);"
  },
  "Client": {
    description: "A client is a device or application that sends requests to the server for resources or services. In the MERN stack, the React application acts as the client.",
    keyPoints: ["Sends requests", "Renders UI", "User interface"],
    sections: [
      {
        heading: "Common Client Types",
        points: ["Web Browsers (Chrome, Firefox, Safari)", "Mobile Applications (iOS, Android)", "Desktop Applications", "IoT Devices"]
      }
    ]
  },
  "Server": {
    description: "A server is a computer or software system that receives requests, processes them, and sends responses back to clients. In our backend, Node.js and Express act as the server.",
    keyPoints: ["Receives requests", "Processes data", "Sends responses"],
    sections: [
      {
        heading: "Types of Servers",
        points: ["Web Server (hosts files)", "Database Server (stores data)", "Application Server (runs logic)", "Proxy Server (forwards requests)"]
      }
    ]
  },
  "Architecture": {
    description: "Client-Server Architecture is a computing model where clients request resources from servers, and servers provide responses.",
    sections: [
      {
        heading: "Tiers",
        points: [
          "Two-Tier Architecture: Client directly communicates with database.",
          "Three-Tier Architecture: Includes Client, App Server, and Database layers.",
          "Multi-Tier Architecture: Scalable layers for complex systems."
        ]
      }
    ]
  },
  "API Basics": {
    description: "API (Application Programming Interface) allows different software applications, systems, and services to communicate and exchange data. APIs are vital for connecting modern web frontend, backend, and third-party services.",
    keyPoints: [
      "APIs allow communication between applications.",
      "REST APIs are most widely used in modern web.",
      "JSON is the common API data format.",
      "HTTP methods define API operations.",
      "APIs are essential for modular development."
    ],
    sections: [
      {
        heading: "Definition & Importance",
        content: "An API is a set of rules and protocols for building and interacting with software applications. It acts as an intermediary that allows two applications to talk to each other, sharing data and functionality without needing to know how the other system is implemented."
      },
      {
        heading: "Core API Components",
        points: [
          "Endpoint: The specific URL where requests are sent.",
          "Request: The data sent to the API by the client.",
          "Response: The data returned by the API to the client.",
          "HTTP Methods: GET (Read), POST (Create), PUT (Update), DELETE (Delete)."
        ]
      },
      {
        heading: "Common Status Codes",
        points: [
          "200 OK: Request succeeded.",
          "201 Created: Resource created successfully.",
          "400 Bad Request: Invalid input data.",
          "404 Not Found: Resource not found.",
          "500 Internal Server Error: Something went wrong on the server."
        ]
      }
    ],
    code: "// Sample API Route (Express)\napp.get('/api/message', (req, res) => {\n  res.json({ message: 'API Working Successfully' });\n});"
  },
  "REST": {
    description: "REpresentational State Transfer (REST) is the most widely used architectural style for web APIs. It is a set of principles that govern how web services should be designed to be scalable and interoperable.",
    keyPoints: ["Stateless communication", "Client-Server separation", "Uniform interface", "Resource-based"],
    sections: [
      {
        heading: "The 6 Constraints of REST",
        points: [
          "Stateless: Each request from client to server must contain all information to understand the request.",
          "Client-Server: Separate concerns between UI and data storage.",
          "Uniform Interface: Standardized communication using URIs and HTTP methods.",
          "Cacheable: Responses must define themselves as cacheable or not.",
          "Layered System: Client cannot tell if it is connected directly to the end server or an intermediate.",
          "Code on Demand (Optional): Server can temporarily extend client functionality by transferring executable code."
        ]
      }
    ]
  },
  "REST Architecture": {
    description: "REST Architecture focuses on resources, which are identified by persistent identifiers (URIs) and manipulated using standard HTTP operations.",
    keyPoints: ["Scalability", "Simplicity", "Modularity", "Standardization"],
    sections: [
      {
        heading: "Key Components",
        points: [
          "Resources: The fundamental concept (e.g., /users, /books).",
          "Representations: The format of the data (JSON, XML, HTML).",
          "State Transfer: Moving the state of a resource between client and server."
        ]
      }
    ]
  },
  "Node.js Overview": {
    description: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It allows developers to execute JavaScript code outside the browser, primarily for server-side logic and APIs.",
    keyPoints: [
      "Built on Chrome's V8 JS engine.",
      "Uses an asynchronous, event-driven architecture.",
      "Highly efficient and lightweight.",
      "Suited for data-intensive real-time applications.",
      "Shared code base (JavaScript) for both frontend and backend."
    ],
    sections: [
      {
        heading: "What is Node.js?",
        content: "Node.js is a runtime that provides an environment for JavaScript to interact with system resources like the filesystem, network, and memory. It is not a programming language but a platform for executing JavaScript code on the server."
      },
      {
        heading: "Architecture",
        points: [
          "Single-Threaded: Manages heavy load using a single main thread.",
          "Event Loop: Continuously processes callbacks asynchronously.",
          "Non-Blocking: Never waits for I/O tasks to finish before moving to the next task."
        ]
      }
    ],
    code: "const http = require('http');\nconst server = http.createServer((req, res) => {\n    res.write('Node.js Server Running');\n    res.end();\n});\nserver.listen(3000);"
  },
  "Runtime Environment": {
    description: "A runtime environment provides the necessary resources and libraries to execute programs. Node.js is a runtime for JS that allows it to run on the server side.",
    sections: [
      {
        heading: "Node.js Environment Components",
        points: ["V8 Engine (High-performance JS engine)", "Libuv (Library for asynchronous I/O)", "Native C++ Modules", "JavaScript Core Library"]
      }
    ]
  },
  "Asynchronous": {
    description: "Node.js features an asynchronous architecture, allowing tasks to execute without blocking the main thread. This is a core advantage of Node.js for high-performance applications.",
    keyPoints: [
      "Handles multiple requests concurrently.",
      "Prevents I/O operations from stalling the server.",
      "Essential for real-time systems.",
      "Improves overall system throughput."
    ],
    sections: [
      {
        heading: "Non-Blocking I/O",
        content: "In traditional models, a thread waits for a database or file operation to complete. In Node.js, the 'Asynchronous' model allows the thread to continue processing other requests while waiting for the I/O operation to finish via callbacks and events."
      }
    ],
    code: "// Asynchronous Example\nconsole.log('Processing Request 1');\nsetTimeout(() => console.log('I/O Completion Notification'), 1000);\nconsole.log('Processing Request 2');"
  },
  "Event-Driven": {
    description: "The event-driven model is at the heart of Node.js. It allows the server to scale by responding to events rather than creating new threads for every connection.",
    keyPoints: [
      "Central EventEmitter class.",
      "Highly scalable for many concurrent connections.",
      "Logic flows based on events (e.g., file opened, request received)."
    ],
    sections: [
      {
        heading: "The Event Loop",
        content: "The Event Loop is the mechanism that orchestrates the execution of asynchronous tasks. It monitors the call stack and handles events as they arrive, ensuring the single thread remains productive."
      }
    ],
    code: "const EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\nemitter.on('dataReceived', (data) => {\n  console.log('Processing:', data);\n});\n\nemitter.emit('dataReceived', { id: 101, status: 'Success' });"
  },
  "Cross-Platform": {
    description: "Node.js applications are cross-platform, meaning they can run on multiple operating systems like Windows, Linux, and macOS without modification to the core logic.",
    sections: [
      {
        heading: "Portability Benefits",
        content: "This feature allows developers to build applications on their local Windows/macOS machines and deploy them to Linux servers with zero changes to the application code, thanks to the standardized runtime environment."
      }
    ]
  },
  "Installation": {
    description: "Installing Node.js and npm is the primary step in setting up a professional backend development environment.",
    keyPoints: [
      "Node.js provides the runtime environment.",
      "npm manages all external libraries and dependencies.",
      "LTS (Long Term Support) is recommended for production.",
      "Verification confirms a successful setup."
    ],
    sections: [
      {
        heading: "Installation Steps",
        points: [
          "Visit the official website: nodejs.org.",
          "Download the LTS version installer for your OS (Windows, macOS, Linux).",
          "Follow the installation wizard prompts (defaults are usually optimal).",
          "Open your terminal (CMD, PowerShell, or Bash).",
          "Run 'node -v' to check the Node.js version.",
          "Run 'npm -v' to check the npm version."
        ]
      },
      {
        heading: "Development Tools Setup",
        points: [
          "Install Visual Studio Code (VS Code) as your primary IDE.",
          "Configure extensions for JavaScript and Node.js linting.",
          "Ensure your terminal is accessible from within VS Code."
        ]
      }
    ],
    code: "// Check Installations\nnode -v\nnpm -v\n\n// Test Program\nconsole.log('Node.js Environment Setup Complete');"
  },
  "npm Setup": {
    description: "npm (Node Package Manager) is the default package manager for Node.js used to manage dependencies.",
    keyPoints: ["Large package ecosystem", "npm init for project setup", "npm install for dependencies"],
    code: "npm init\nnpm install express"
  },
  "MongoDB Queries": {
    description: "MongoDB provides a rich query language that allows you to filter and sort through large volumes of data with precision using JSON-like query objects.",
    keyPoints: [
      "Flexible and expressive syntax.",
      "Supports powerful comparison and logical operators.",
      "Used extensively within the MERN stack.",
      "Query results can be limited, sorted, and projected."
    ],
    sections: [
      {
        heading: "Comparison Operators",
        points: [
          "$eq: Matches values that are equal.",
          "$ne: Matches all values that are not equal.",
          "$gt: Matches values greater than a specified value.",
          "$gte: Matches values greater than or equal.",
          "$lt: Matches values less than.",
          "$lte: Matches values less than or equal."
        ]
      },
      {
        heading: "Logical Operators",
        points: [
          "$or: Joins query clauses with a logical OR.",
          "$and: Joins query clauses with a logical AND.",
          "$not: Inverts the effect of a query expression.",
          "$nor: Joins query clauses with a logical NOR."
        ]
      }
    ],
    code: "// Complex Query Example\ndb.users.find({\n  age: { $gte: 18 },\n  status: 'active',\n  $or: [\n    { city: 'New York' },\n    { city: 'London' }\n  ]\n}).sort({ name: 1 }).limit(10);"
  },
  "CORS": {
    description: "Cross-Origin Resource Sharing (CORS) is a security feature implemented by browsers that prevents web pages from making requests to a different domain than the one that served the page.",
    keyPoints: [
      "Crucial for security in modern web apps.",
      "Managed through HTTP headers.",
      "Controlled by the server, enforced by the browser.",
      "Requires careful configuration in production."
    ],
    sections: [
      {
        heading: "How it Works",
        content: "When a frontend (e.g., localhost:3000) tries to call a backend (e.g., localhost:5000), the browser sends a 'Preflight' request (OPTIONS) to check if the server permits the cross-origin request."
      },
      {
        heading: "Key Headers",
        points: [
          "Access-Control-Allow-Origin: Specifies which origins are allowed.",
          "Access-Control-Allow-Methods: Specifies which HTTP methods are permitted.",
          "Access-Control-Allow-Headers: Specifies which custom headers can be sent."
        ]
      }
    ],
    code: "// Express CORS Middleware usage\nconst cors = require('cors');\n\n// Basic: Allow all\napp.use(cors());\n\n// Advanced: Whitelist specific origins\napp.use(cors({\n  origin: 'https://mywebsite.com',\n  methods: ['GET', 'POST']\n}));"
  },

  // Existing technical data for other modules
  "Introduction to Express.js": {
    description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is the de facto standard server framework for Node.js.",
    keyPoints: [
      "Lightweight, unopinionated, and fast.",
      "Simplifies the creation of web servers and RESTful APIs.",
      "Extensive middleware ecosystem.",
      "High performance with minimal overhead."
    ],
    sections: [
      {
        heading: "Core Philosophy",
        content: "Express follows a 'minimalist' philosophy. Unlike frameworks that provide everything out of the box, Express provides a thin layer of fundamental web application features, without obscuring Node.js features that developers already know and love."
      },
      {
        heading: "Key Features",
        points: [
          "Robust Routing: Manage different HTTP methods and URLs easily.",
          "Middleware Support: Intercept and process requests before they reach handlers.",
          "Template Engines: Generate dynamic HTML using engines like EJS, Pug, or Handlebars.",
          "Content Negotiation: Automatically handle different types of responses (JSON, HTML, etc.)."
        ]
      },
      {
        heading: "Performance Benefits",
        content: "Because Express is so lightweight, it introduces very little latency compared to raw Node.js, making it suitable for high-traffic applications that require sub-millisecond response times."
      }
    ],
    code: "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from Express!');\n});\n\napp.listen(3000, () => {\n  console.log('Express server running on port 3000');\n});"
  },
  "Middleware": {
    description: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.",
    keyPoints: [
      "Can execute any code.",
      "Can make changes to the request and the response objects.",
      "Can end the request-response cycle.",
      "Calls the next middleware function in the stack using next()."
    ],
    sections: [
      {
        heading: "The Middleware Pipeline",
        content: "Express is essentially a series of middleware function calls. When a request hits your server, it passes through each middleware in the order they are defined until a response is sent or the cycle is terminated."
      },
      {
        heading: "Types of Middleware",
        points: [
          "Application-level: Bound to an instance of the app object using app.use().",
          "Router-level: Bound to an instance of express.Router().",
          "Error-handling: Defined with four arguments instead of three (err, req, res, next).",
          "Built-in: Middleware provided by Express (e.g., express.json(), express.static()).",
          "Third-party: Installed via npm (e.g., cookie-parser, morgan, cors)."
        ]
      },
      {
        heading: "Common Use Cases",
        points: [
          "Logging: Recording request details for debugging (Morgan).",
          "Authentication: Verifying user identity before allowing access to routes.",
          "Body Parsing: Parsing incoming request bodies (express.json()).",
          "Cross-Origin Resource Sharing (CORS): Managing access from different domains."
        ]
      }
    ],
    code: "// Custom Middleware Example\napp.use((req, res, next) => {\n  console.log(`${req.method} request to ${req.url} at ${new Date()}`);\n  next(); // Essential to call next()\n});"
  },
  "CRUD Operations": {
    description: "CRUD is an acronym for Create, Read, Update, and Delete. These are the four basic functions of persistent storage and the foundation of most web services.",
    keyPoints: [
      "Maps directly to HTTP methods (POST, GET, PUT/PATCH, DELETE).",
      "Essential for managing data in any database system.",
      "Standardizes API design across different platforms.",
      "Foundation of RESTful architecture."
    ],
    sections: [
      {
        heading: "1. Create (POST)",
        content: "Used to submit data to be processed to a specified resource. It results in the creation of a new resource on the server."
      },
      {
        heading: "2. Read (GET)",
        content: "Used to retrieve data from a server at a specified resource. GET requests should only retrieve data and have no other effect on the data."
      },
      {
        heading: "3. Update (PUT/PATCH)",
        content: "PUT is used to update or replace an entire resource. PATCH is used to apply partial modifications to a resource."
      },
      {
        heading: "4. Delete (DELETE)",
        content: "Used to remove a specific resource from the server storage."
      },
      {
        heading: "Best Practices",
        points: [
          "Use plural nouns for endpoints (e.g., /users instead of /getUser).",
          "Return appropriate status codes (201 for Create, 204 for Delete).",
          "Ensure GET requests are idempotent (calling them multiple times has no side effects)."
        ]
      }
    ],
    code: "// CRUD Routes Sample\napp.get('/items', (req, res) => res.json(items)); // READ\napp.post('/items', (req, res) => res.status(201).json(newItem)); // CREATE\napp.put('/items/:id', (req, res) => res.json(updatedItem)); // UPDATE\napp.delete('/items/:id', (req, res) => res.status(204).send()); // DELETE"
  },
  "SQL vs NoSQL": {
    description: "Choosing the right database is critical. Relational (SQL) and Non-Relational (NoSQL) databases differ in how they store data, handle relationships, and scale.",
    keyPoints: [
      "SQL uses tables; NoSQL uses documents, key-value, or graphs.",
      "SQL requires fixed schemas; NoSQL is schema-less and flexible.",
      "SQL scales vertically; NoSQL scales horizontally.",
      "SQL is better for complex queries; NoSQL is better for large hierarchical data."
    ],
    sections: [
      {
        heading: "When to use SQL?",
        points: [
          "When data structure is consistent and predictable.",
          "When data integrity (ACID compliance) is critical (e.g., banking).",
          "When complex joins and relationships are required."
        ]
      },
      {
        heading: "When to use NoSQL?",
        points: [
          "When dealing with large volumes of unstructured or semi-structured data.",
          "When rapid development and frequent schema changes are needed.",
          "When horizontal scalability and high availability are priorities."
        ]
      }
    ]
  },
  "User Authentication": {
    description: "Authentication is the act of proving an assertion, such as the identity of a computer system user. It is the cornerstone of secure web applications.",
    keyPoints: [
      "Verifies user identity (Credentials check).",
      "Protects sensitive data from unauthorized access.",
      "Uses techniques like Sessions, Cookies, and JWT.",
      "Requires secure password handling (Hashing)."
    ],
    sections: [
      {
        heading: "Authentication Flow",
        points: [
          "1. User submits login form (Email & Password).",
          "2. Server retrieves hashed password from database.",
          "3. Server compares submitted password with stored hash.",
          "4. If matched, server generates a session or token (JWT).",
          "5. Client stores token for future authenticated requests."
        ]
      },
      {
        heading: "Security Considerations",
        points: [
          "Always use HTTPS to prevent Man-in-the-Middle attacks.",
          "Implement rate limiting on login routes to prevent brute-force attacks.",
          "Use HttpOnly cookies to store tokens to prevent XSS attacks.",
          "Implement Multi-Factor Authentication (MFA) for high-security areas."
        ]
      }
    ]
  },
  "JWT Authentication": {
    description: "JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.",
    keyPoints: [
      "Stateless: No session data stored on server.",
      "Compact: Can be sent via URL, POST parameter, or inside HTTP header.",
      "Self-contained: Contains all necessary information about the user.",
      "Digitally signed: Can be verified and trusted."
    ],
    sections: [
      {
        heading: "Structure of a JWT",
        points: [
          "Header: Contains token type and signing algorithm (e.g., HS256).",
          "Payload: Contains claims (user data like ID, Role, Expiry).",
          "Signature: Created by signing the encoded header and payload with a secret key."
        ]
      },
      {
        heading: "JWT Lifecycle",
        content: "Once authenticated, the server returns a JWT. The client includes this token in the header of subsequent requests (Authorization: Bearer <token>). The server validates the signature without needing to query the database for session state."
      }
    ],
    code: "const jwt = require('jsonwebtoken');\n\n// Generate Token\nconst token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });\n\n// Verify Token\njwt.verify(token, 'secret_key', (err, decoded) => {\n  if (err) return console.log('Invalid Token');\n  console.log('User ID:', decoded.id);\n});"
  },
  "bcrypt Password Encryption": {
    description: "bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher. It is the gold standard for storing passwords.",
    keyPoints: [
      "Uses a Salt to protect against Rainbow Table attacks.",
      "Adaptive cost factor to resist brute-force attacks over time.",
      "Slower by design: makes it extremely hard for attackers to guess passwords.",
      "Natively handles salt generation and comparison."
    ],
    sections: [
      {
        heading: "Why Hashing over Encryption?",
        content: "Encryption is two-way (can be decrypted). Hashing is one-way (cannot be reversed). For passwords, we only need to verify if the input hash matches the stored hash; we never need the original password back."
      }
    ],
    code: "const bcrypt = require('bcrypt');\n\n// Hashing during signup\nconst salt = await bcrypt.genSalt(10);\nconst hash = await bcrypt.hash('mypassword123', salt);\n\n// Comparison during login\nconst isMatch = await bcrypt.compare('mypassword123', hash);\nconsole.log('Login Success:', isMatch);"
  },

  // === MODULE 2: JS Fundamentals Expansion ===
  "var, let, const": {
    description: "Understanding the difference between the three ways to declare variables is crucial for managing scope and memory in JavaScript.",
    keyPoints: ["var is function-scoped", "let/const are block-scoped", "const prevents reassignment", "let is for variable values"],
    sections: [
      {
        heading: "Scope Comparison",
        content: "Before ES6, 'var' was the only way to declare variables. However, it had issues with hoisting and global scope pollution. 'let' and 'const' introduced block scoping, which provides more predictable behavior."
      }
    ],
    code: "let score = 10;\nconst gravity = 9.8;\n\nif (true) {\n  let blockVar = 'I only exist here';\n}\n// console.log(blockVar); // ReferenceError"
  },
  "Arrow Functions": {
    description: "Arrow functions provide a shorter syntax for writing function expressions and handle the 'this' keyword differently than regular functions.",
    keyPoints: ["Cleaner syntax", "Lexical 'this' binding", "Implicit return", "Not suited for methods needing 'this'"],
    code: "// Standard\nconst add = (a, b) => a + b;\n\n// Multiline\nconst greet = (name) => {\n  const message = `Hello ${name}`;\n  return message;\n};"
  },
  "Array Methods": {
    description: "JavaScript provides powerful built-in methods to manipulate and iterate over arrays effectively.",
    keyPoints: ["map: transform each item", "filter: select items", "reduce: aggregate data", "find/findIndex: locate items"],
    code: "const nums = [1, 2, 3, 4];\nconst squared = nums.map(x => x * x);\nconst evens = nums.filter(x => x % 2 === 0);"
  },

  // === MODULE 3: Advanced JS Expansion ===
  "Promises": {
    description: "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
    keyPoints: ["States: Pending, Fulfilled, Rejected", "Avoids callback hell", "Supports chaining", "Consumable with then/catch or async/await"],
    sections: [
      {
        heading: "Lifecycle",
        content: "When a promise is created, it is in 'pending' state. When it succeeds, it reaches 'fulfilled'. If it fails, it is 'rejected'. Once settled, it stays in that state."
      }
    ],
    code: "const myPromise = new Promise((resolve, reject) => {\n  const success = true;\n  if (success) resolve('Data Loaded');\n  else reject('Error');\n});"
  },
  "async Functions": {
    description: "Async functions allow you to write promise-based asynchronous code as if it were synchronous, making it much more readable.",
    keyPoints: ["Requires 'async' keyword", "Can use 'await' inside", "Implicitly returns a promise", "Handled with try/catch"],
    code: "async function getUser() {\n  try {\n    const user = await db.users.find({ id: 1 });\n    console.log(user);\n  } catch (err) {\n    console.log('Failed:', err);\n  }\n}"
  },

  // === MODULE 4: Node.js Core Expansion ===
  "File System Module": {
    description: "The 'fs' module provides an API for interacting with the file system in a manner modeled on standard POSIX functions.",
    keyPoints: ["Asynchronous and Synchronous methods", "Promise-based API available", "Crucial for logging and data processing"],
    sections: [
      {
        heading: "Reading and Writing",
        content: "You can read files using readFile and write using writeFile. Always prefer the asynchronous version (fs.promises) to avoid blocking the event loop in high-traffic applications."
      }
    ],
    code: "const fs = require('fs').promises;\n\nasync function manageFile() {\n  await fs.writeFile('hello.txt', 'Hello Node!');\n  const content = await fs.readFile('hello.txt', 'utf8');\n  console.log(content);\n}"
  },
  "HTTP Module": {
    description: "The HTTP module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). It is the base for Express.js.",
    keyPoints: ["Create servers", "Create clients", "Handle headers and status codes"],
    code: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello from raw Node.js Server');\n});\nserver.listen(3000);"
  },

  // === MODULE 8: Mongoose Expansion ===
  "Schemas": {
    description: "A Mongoose schema defines the structure of the document, default values, validators, etc., in a MongoDB collection.",
    keyPoints: ["Provides structure to NoSQL", "Supports type validation", "Middleware support (pre/post save)"],
    code: "const userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true },\n  age: { type: Number, min: 18 }\n});"
  },
  "Models": {
    description: "Models are fancy constructors compiled from Schema definitions. An instance of a model is a document.",
    keyPoints: ["Provides interface for CRUD", "Connects schema to collection", "Supports static and instance methods"],
    code: "const User = mongoose.model('User', userSchema);\nconst newUser = new User({ name: 'Alice', email: 'a@a.com' });\nawait newUser.save();"
  },

  // === MODULE 10: File Upload ===
  "File Upload using Multer": {
    description: "Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.",
    keyPoints: ["Disk storage", "Memory storage", "File filtering", "Validation (size, type)"],
    code: "const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\n\napp.post('/upload', upload.single('image'), (req, res) => {\n  console.log(req.file);\n  res.send('Uploaded');\n});"
  },

  // === MODULE 11: Real-Time ===
  "Introduction to Socket.io": {
    description: "Socket.io enables real-time, bidirectional and event-based communication between the browser and the server.",
    keyPoints: ["WebSockets wrapper", "Automatic fallback to long-polling", "Rooms and Namespaces support", "Event-based"],
    code: "const io = require('socket.io')(server);\n\nio.on('connection', (socket) => {\n  console.log('User connected');\n  socket.on('chat-message', (msg) => {\n    io.emit('chat-message', msg);\n  });\n});"
  },

  // === MODULE 12: Security Expansion ===
  "Helmet": {
    description: "Helmet helps you secure your Express apps by setting various HTTP headers. It's a small but powerful security win.",
    keyPoints: ["Prevents XSS", "Hides technology stack (X-Powered-By)", "Configures CSP", "Strict Transport Security"],
    code: "const helmet = require('helmet');\napp.use(helmet());"
  },
  "Rate Limiting": {
    description: "Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.",
    keyPoints: ["Prevents DDoS", "Prevents Brute-force", "Protects server resources"],
    code: "const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100 // limit each IP to 100 requests per windowMs\n});\napp.use(limiter);"
  },

  // === MODULE 13 & 14: Git & Deployment ===
  "Git Commands": {
    description: "Mastering Git commands is essential for version control and collaborating in modern software development teams.",
    keyPoints: ["init, clone", "add, commit", "push, pull", "branch, merge"],
    code: "git init\ngit add .\ngit commit -m 'Initial commit'\ngit push origin main"
  },
  "Render Deployment": {
    description: "Render is a unified cloud to build and run all your apps and websites with free SSL, a global CDN, private networks and auto deploys from Git.",
    keyPoints: ["Simple to use", "Auto-deploys", "Free tier available", "Supports static sites and web services"],
    sections: [
      {
        heading: "Deployment Steps",
        points: ["Create a Render account", "Connect GitHub repo", "Select Web Service", "Configure Environment Variables", "Deploy!"]
      }
    ]
  },

  // === MODULE 5+: Express & REST Expansion ===
  "Route Parameters": {
    description: "Route parameters are named URL segments that are used to capture the values specified at their position in the URL.",
    keyPoints: ["Dynamic segments", "Captured in req.params", "Essential for resource-based routing"],
    code: "// /users/:userId/books/:bookId\napp.get('/users/:id', (req, res) => {\n  const id = req.params.id;\n  res.send(`User ID: ${id}`);\n});"
  },
  "Static Files": {
    description: "Serving static assets like images, CSS files, and JavaScript files is a common requirement for web applications.",
    code: "app.use(express.static('public'));\n// Files in /public are now accessible via URL"
  },
  "Express Router": {
    description: "The express.Router class allows you to create modular, mountable route handlers.",
    keyPoints: ["Modular design", "Mini-app behavior", "Clean code organization"],
    code: "const router = express.Router();\nrouter.get('/profile', (req, res) => ...);\napp.use('/user', router);"
  },
  "Status Codes": {
    description: "HTTP status codes indicate whether a specific HTTP request has been successfully completed.",
    sections: [
      {
        heading: "Primary Ranges",
        points: ["2xx: Success", "3xx: Redirection", "4xx: Client Error", "5xx: Server Error"]
      }
    ]
  },
  "API Validation": {
    description: "Ensuring that the incoming data to your API is correct and safe is a critical part of backend development.",
    keyPoints: ["Sanitization", "Type checking", "Schema validation (Joi/Zod)"]
  },

  // === MODULE 7+: MongoDB & Mongoose Expansion ===
  "MongoDB Compass": {
    description: "Compass is the GUI for MongoDB, allowing you to visualize and manage your data without writing queries manually."
  },
  "CRUD Operations in MongoDB": {
    description: "Direct interaction with MongoDB using the shell or drivers.",
    code: "db.collection.insertOne({ name: 'test' });\ndb.collection.find({ age: { $gt: 20 } });"
  },
  "Relationships": {
    description: "Modeling relationships between data is a key skill in database design.",
    keyPoints: ["One-to-One: A single document linked to another.", "One-to-Many: A single document linked to multiple others.", "Many-to-Many: Multiple documents linked across collections."],
    sections: [
      {
        heading: "Mongoose Population",
        content: "Mongoose allows you to reference documents in other collections and 'populate' them automatically during a query."
      }
    ]
  },

  // === MODULE 9+: Auth & Authorization ===
  "Protected Routes": {
    description: "Routes that require a valid token or session to access.",
    code: "const auth = (req, res, next) => {\n  // check token\n  next();\n};\napp.get('/admin', auth, (req, res) => ...);"
  },
  "Role-Based Access": {
    description: "Granting permissions based on user roles (e.g., Admin, Moderator, User).",
    keyPoints: ["Access Control Lists (ACL)", "Middleware verification", "Secure API design"]
  },

  // === MODULE 15: Capstone Projects ===
  "Student Management API": {
    description: "A full-featured API for educational institutions to manage student records.",
    sections: [
      {
        heading: "Features",
        points: ["Student profile CRUD", "Department filtering", "Grade tracking", "Attendance logs"]
      }
    ]
  },
  "E-Commerce Backend System": {
    description: "A production-grade backend for an online marketplace.",
    sections: [
      {
        heading: "Core Modules",
        points: ["Product Management & Inventory", "Order Processing Pipeline", "Payment Gateway Integration", "Discount/Coupon engine"]
      }
    ]
  },
  "Hospital Management Backend": {
    description: "System for managing medical records, appointments, and doctors.",
    sections: [
      {
        heading: "Components",
        points: ["Patient history tracking", "Doctor availability scheduling", "Billing and Insurance modules"]
      }
    ]
  },
  "Real-Time Chat Backend": {
    description: "Scalable backend for instant messaging applications.",
    sections: [
      {
        heading: "Tech Stack",
        points: ["Socket.io for bi-directional socket comms", "Redis for message queuing", "MongoDB for permanent logs"]
      }
    ]
  },

  // Career and Certification (mapped to possible keys if needed)
  "Career Opportunities": {
    description: "The backend development landscape is rich with opportunities for skilled Node.js engineers. Companies ranging from startups to tech giants rely on robust server-side systems.",
    sections: [
      {
        heading: "Potential Roles",
        points: ["Node.js Developer: Specializing in server-side JS logic.", "API Architect: Designing complex, scalable communication layers.", "DevOps Engineer: Focusing on deployment and infrastructure.", "Full Stack Developer: Handling both UI and backend systems."]
      }
    ]
  },
  "Certification": {
    description: "Upon successful completion of the course and final projects, you will receive the 'Node.js Backend Development Certification'."
  }
};

backendTopics.forEach(topic => {
  backendSubTopicData[topic] = specificBackendData[topic] || generateContent(topic, "Backend Development");
});
