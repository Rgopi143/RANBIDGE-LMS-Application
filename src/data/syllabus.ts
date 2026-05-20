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
        title: "Curriculum Overview",
        content: "I. Core Java Mastery\nII. Web-MVC with Spring\nIII. Microservices Architecture\nIV. Full Stack Integration",
        subTopics: ["Program Goals", "Learning Roadmap", "Capstone Projects"]
      },
      {
        id: "pre-setup",
        title: "Prerequisites & Setup",
        content: "I. Hardware Requirements\nII. Software Installation\nIII. Development Environment",
        subTopics: ["Hardware & OS", "Software Requirements", "IDE Configuration"]
      },
      {
        id: "install-guide-lesson",
        title: "Installation Guide",
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
        title: "Java History",
        content: "I. Introduction to Java\nII. Features of Java",
        subTopics: ["Introduction to Java", "Features of Java"]
      },
      {
        id: "java-basics-new",
        title: "Java Basics",
        content: "I. Data Types\nII. Statements\nIII. Operators\nIV. Control Statements\nV. Type Casting\nVI. Java Arrays\nVII. Command-line Arguments\nVIII. Packages",
        subTopics: ["Data Types", "Statements", "Operators", "Control Statements", "Type Casting", "Java Arrays", "Command-line Arguments", "Packages"]
      },
      {
        id: "java-oop-new",
        title: "Object-Oriented Programming (OOP) Concepts",
        content: "I. Data Abstraction\nII. Encapsulation\nIII. Polymorphism\nIV. Inheritance\nV. Class and Object\nVI. Abstract Classes\nVII. Interfaces\nVIII. Overloading and Overriding\nIX. Super and Super()",
        subTopics: ["Data Abstraction", "Encapsulation", "Polymorphism", "Inheritance", "Class and Object", "Abstract Classes", "Interfaces", "Overloading/Overriding", "Super and Super()"]
      },
      {
        id: "java-exception-new",
        title: "Exception Handling",
        content: "I. Exception Handling Fundamentals\nII. Exception Types\nIII. try-catch-finally Blocks\nIV. throw and throws Keywords\nV. Creating Custom Exceptions",
        subTopics: ["Fundamentals", "Exception Types", "try-catch-finally Blocks", "throw/throws Keywords", "Custom Exceptions"]
      },
      {
        id: "java-lang-new",
        title: "Default Package Features - java.lang",
        content: "I. The java.lang Package Overview\nII. The Object Class\nIII. Wrapper Classes\nIV. System Class\nV. Math Class\nVI. String & String Buffer",
        subTopics: ["The java.lang Overview", "The Object Class", "Wrapper Classes", "System Class", "Math Class", "String & String Buffer"]
      },
      {
        id: "java-io-new",
        title: "Java Streams - java.io",
        content: "I. Streams Overview\nII. Byte Streams vs. Character Streams\nIII. Input/Output Streams\nIV. Reading/Writing from/to Files – The File Streams",
        subTopics: ["Streams Overview", "Byte vs Character Streams", "Input/Output Streams", "File Streams"]
      },
      {
        id: "java-multi-new",
        title: "Multithreading",
        content: "I. Creating a Thread\nII. Thread Lifecycle\nIII. Multithreading Advantages\nIV. Multithreading Methods\nV. Runnable Interface\nVI. Thread Communication",
        subTopics: ["Creating a Thread", "Thread Lifecycle", "Multithreading Advantages", "Multithreading Methods", "Runnable Interface", "Thread Communication"]
      },
      {
        id: "java-util-new",
        title: "Java Collections - java.util",
        content: "I. Collections Overview\nII. Collection Interface\nIII. List, Set, Map Interfaces\nIV. List Implementations\nV. Set Implementations\nVI. Map Implementations\nVII. Date and Calendar Classes",
        subTopics: ["Collections Overview", "Collection Interface", "List, Set, Map Interfaces", "List Implementations", "Set Implementations", "Map Implementations", "Date/Calendar Classes"]
      },
      {
        id: "java-8-new",
        title: "Java 8 FEATURES",
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
        title: "Database Programming",
        content: "i. JDBC Overview\nii. SQL Basics\niii. JDBC Programming Concepts\niv. Query Execution\nv. Scrollable Result Sets\nvi. Batch Updates\nvii. Stored Procedures and Functions\nviii. Transactions",
        subTopics: ["JDBC Overview", "SQL Basics", "JDBC Programming", "Query Execution", "Result Sets", "Batch Updates", "Procedures/Functions", "Transactions"]
      },
      {
        id: "web-apps-basics",
        title: "Getting Started with Web Applications",
        content: "i. Web App Life Cycle\nii. Web Modules\niii. Configuring Web Apps\niv. Database Access\nv. Jar, War, and Ear\nvi. Web Server vs App Server",
        subTopics: ["Web App Life Cycle", "Web Modules", "Configuring Web Apps", "Database Access", "Jar, War, Ear", "Web/App Servers"]
      },
      {
        id: "servlet-tech-new",
        title: "Java Servlet Technology",
        content: "i. Servlets Overview\nii. Servlet Life Cycle\niii. Sharing Information\niv. Service Methods\nvi. Filtering\nviii. Session Tracking",
        subTopics: ["Servlets Overview", "Servlet Life Cycle", "Sharing Information", "Service Methods", "Filtering", "Session Tracking"]
      },
      {
        id: "jsp-tech-new",
        title: "Java Server Pages Technology",
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
        title: "Spring Introduction",
        content: "1.1 Spring Modules\n1.2 Dependency Injection\n1.3 Spring Containers\n1.4 Bean Wiring\n1.5 Bean Life Cycle",
        subTopics: ["Spring Modules", "Dependency Injection", "Spring Containers", "Bean Wiring", "Bean Life Cycle"]
      },
      {
        id: "spring-data-new",
        title: "Spring Data Access",
        content: "2.1 Using JDBC with Spring\n2.2 Working with DataSource\n2.3 Working with JdbcTemplate\n2.4 DML Operations on Data",
        subTopics: ["JDBC with Spring", "DataSource", "JdbcTemplate", "DML Operations"]
      },
      {
        id: "spring-mvc-new",
        title: "Spring Web-MVC",
        content: "3.1 Controllers\n3.2 Handling Web Requests\n3.3 Mapping Requests\n3.4 Form Submissions\n3.5 View Resolvers\n3.6 Validations",
        subTopics: ["Spring Web MVC", "Controllers", "Handling Web Requests", "Mapping Requests", "Form Submissions", "View Resolvers", "Validations"]
      },
      {
        id: "aop-new",
        title: "Aspect Oriented Programming",
        content: "4.1 Join Points\n4.2 Advice\n4.3 Advice Aspects\n4.4 AspectJ Syntax",
        subTopics: ["Join Points", "Advice", "Advice Aspects", "AspectJ Syntax"]
      },
      {
        id: "spring-tx-new",
        title: "Spring Transactions",
        content: "5.1 The Meaning of Transaction\n5.2 Transaction Attributes\n5.3 Spring Transaction Management Support",
        subTopics: ["Transaction Meaning", "Transaction Attributes", "Management Support"]
      },
      {
        id: "spring-orm-new",
        title: "Spring ORM",
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
  },
  {
    id: "mern-web-tech",
    title: "Introduction to Web Technologies",
    lessons: [
      {
        id: "mern-web-tech-m1",
        title: "Introduction to Web Technologies",
        content: "i. Internet Basics\nii. World Wide Web (WWW)\niii. Web Browsers and Rendering\niv. Client–Server Architecture\nv. Frontend vs Backend\nvi. Full Stack Development\nvii. Static vs Dynamic Websites\nviii. Development Tools\nix. VS Code Setup\nx. Browser Developer Tools",
        subTopics: ["Internet Basics", "World Wide Web (WWW)", "Web Browsers and Rendering", "Client–Server Architecture", "Frontend vs Backend", "Full Stack Development", "Static vs Dynamic Websites", "Development Tools", "VS Code Setup", "Browser Developer Tools"]
      }
    ]
  },
  {
    id: "mern-html",
    title: "HTML (HYPERTEXT MARKUP LANGUAGE)",
    lessons: [
      { id: "mern-html-m1", title: "Introduction to HTML", content: "i. HTML Overview\nii. History of HTML\niii. Features of HTML\niv. HTML Versions\nv. HTML Page Structure\nvi. HTML Syntax\nvii. HTML Comments", subTopics: ["HTML Overview", "History of HTML", "Features of HTML", "HTML Versions", "HTML Page Structure", "HTML Syntax", "HTML Comments"] },
      { id: "mern-html-m2", title: "HTML Basic Tags", content: "i. Heading Tags\nii. Paragraph Tag\niii. Line Break\niv. Horizontal Rule\nv. Text Formatting Tags", subTopics: ["Heading Tags", "Paragraph Tag", "Line Break", "Horizontal Rule", "Text Formatting Tags"] },
      { id: "mern-html-m3", title: "HTML Links", content: "i. Anchor Tag\nii. Internal Links\niii. External Links\niv. Email Links\nv. Bookmark Links", subTopics: ["Anchor Tag", "Internal Links", "External Links", "Email Links", "Bookmark Links"] },
      { id: "mern-html-m4", title: "Images and Media", content: "i. Image Tag\nii. Audio Tag\niii. Video Tag\niv. Iframe", subTopics: ["Image Tag", "Audio Tag", "Video Tag", "Iframe"] },
      { id: "mern-html-m5", title: "HTML Lists", content: "i. Ordered Lists\nii. Unordered Lists\niii. Description Lists\niv. Nested Lists", subTopics: ["Ordered Lists", "Unordered Lists", "Description Lists", "Nested Lists"] },
      { id: "mern-html-m6", title: "HTML Tables", content: "i. Table Structure\nii. Table Headers\niii. Rowspan and Colspan", subTopics: ["Table Structure", "Table Headers", "Rowspan and Colspan"] },
      { id: "mern-html-m7", title: "HTML Forms", content: "i. Form Tag\nii. Input Types\niii. Textarea\niv. Dropdown\nv. Buttons", subTopics: ["Form Tag", "Input Types", "Textarea", "Dropdown", "Buttons"] },
      { id: "mern-html-m8", title: "Semantic HTML", content: "i. Header\nii. Footer\niii. Section\niv. Article\nv. Nav\nvi. Main\nvii. Figure\nviii. Figcaption", subTopics: ["Header", "Footer", "Section", "Article", "Nav", "Main", "Figure", "Figcaption"] }
    ]
  },
  {
    id: "mern-css",
    title: "CSS (CASCADING STYLE SHEETS)",
    lessons: [
      { id: "mern-css-m1", title: "Introduction to CSS", content: "i. CSS Overview\nii. CSS Syntax\niii. Inline CSS\niv. Internal CSS\nv. External CSS", subTopics: ["CSS Overview", "CSS Syntax", "Inline CSS", "Internal CSS", "External CSS"] },
      { id: "mern-css-m2", title: "CSS Selectors", content: "i. Element Selector\nii. Class Selector\niii. ID Selector\niv. Universal Selector\nv. Group Selector", subTopics: ["Element Selector", "Class Selector", "ID Selector", "Universal Selector", "Group Selector"] },
      { id: "mern-css-m3", title: "Colors and Backgrounds", content: "i. Color\nii. Background Color\niii. Background Image\niv. Background Position\nv. Background Size", subTopics: ["Color", "Background Color", "Background Image", "Background Position", "Background Size"] },
      { id: "mern-css-m4", title: "Fonts and Text", content: "i. Font Family\nii. Font Size\niii. Font Weight\niv. Text Alignment\nv. Text Decoration", subTopics: ["Font Family", "Font Size", "Font Weight", "Text Alignment", "Text Decoration"] },
      { id: "mern-css-m5", title: "CSS Box Model", content: "i. Width and Height\nii. Margin\niii. Padding\niv. Border\nv. Border Radius", subTopics: ["Width and Height", "Margin", "Padding", "Border", "Border Radius"] },
      { id: "mern-css-m6", title: "Positioning and Layout", content: "i. Display Property\nii. Block vs Inline\niii. Float and Clear\niv. Overflow\nv. Z-index", subTopics: ["Display Property", "Block vs Inline", "Float and Clear", "Overflow", "Z-index"] },
      { id: "mern-css-m7", title: "Flexbox", content: "i. Flex Container\nii. Flex Items\niii. Justify Content\niv. Align Items\nv. Flex Wrap", subTopics: ["Flex Container", "Flex Items", "Justify Content", "Align Items", "Flex Wrap"] },
      { id: "mern-css-m8", title: "CSS Grid", content: "i. Grid Container\nii. Grid Rows and Columns\niii. Grid Template\niv. Grid Gap", subTopics: ["Grid Container", "Grid Rows and Columns", "Grid Template", "Grid Gap"] },
      { id: "mern-css-m9", title: "Responsive Web Design", content: "i. Viewport\nii. Media Queries\niii. Mobile First Design", subTopics: ["Viewport", "Media Queries", "Mobile First Design"] },
      { id: "mern-css-m10", title: "CSS Animations", content: "i. Transitions\nii. Transform\niii. Rotate\niv. Scale\nv. Translate\nvi. Keyframes", subTopics: ["Transitions", "Transform", "Rotate", "Scale", "Translate", "Keyframes"] }
    ]
  },
  {
    id: "mern-js",
    title: "JAVASCRIPT",
    lessons: [
      { id: "mern-js-m1", title: "Introduction to JavaScript", content: "i. JavaScript Overview\nii. Features of JavaScript\niii. JavaScript Syntax\niv. Output Methods", subTopics: ["JavaScript Overview", "Features of JavaScript", "JavaScript Syntax", "Output Methods"] },
      { id: "mern-js-m2", title: "Variables and Data Types", content: "i. var, let, const\nii. Number\niii. String\niv. Boolean\nv. Undefined\nvi. Null\nvii. Object", subTopics: ["var, let, const", "Number", "String", "Boolean", "Undefined", "Null", "Object"] },
      { id: "mern-js-m3", title: "Operators", content: "i. Arithmetic Operators\nii. Assignment Operators\niii. Comparison Operators\niv. Logical Operators\nv. Ternary Operator", subTopics: ["Arithmetic Operators", "Assignment Operators", "Comparison Operators", "Logical Operators", "Ternary Operator"] },
      { id: "mern-js-m4", title: "Control Statements", content: "i. if\nii. if else\niii. switch\niv. nested if", subTopics: ["if", "if else", "switch", "nested if"] },
      { id: "mern-js-m5", title: "Loops", content: "i. for loop\nii. while loop\niii. do while\niv. break and continue", subTopics: ["for loop", "while loop", "do while", "break and continue"] },
      { id: "mern-js-m6", title: "Functions", content: "i. Function Declaration\nii. Function Expression\niii. Arrow Functions\niv. Parameters and Return Values", subTopics: ["Function Declaration", "Function Expression", "Arrow Functions", "Parameters and Return Values"] },
      { id: "mern-js-m7", title: "Arrays", content: "i. Array Creation\nii. push()\niii. pop()\niv. shift()\nv. unshift()\nvi. slice()\nvii. splice()", subTopics: ["Array Creation", "push()", "pop()", "shift()", "unshift()", "slice()", "splice()"] },
      { id: "mern-js-m8", title: "Objects", content: "i. Object Properties\nii. Object Methods\niii. Nested Objects", subTopics: ["Object Properties", "Object Methods", "Nested Objects"] },
      { id: "mern-js-m9", title: "DOM Manipulation", content: "i. getElementById\nii. querySelector\niii. querySelectorAll\niv. Modify HTML and CSS", subTopics: ["getElementById", "querySelector", "querySelectorAll", "Modify HTML and CSS"] },
      { id: "mern-js-m10", title: "Events", content: "i. onclick\nii. onmouseover\niii. onkeydown\niv. onsubmit\nv. Event Listeners", subTopics: ["onclick", "onmouseover", "onkeydown", "onsubmit", "Event Listeners"] },
      { id: "mern-js-m11", title: "Form Validation", content: "i. Required Validation\nii. Email Validation\niii. Password Validation", subTopics: ["Required Validation", "Email Validation", "Password Validation"] },
      { id: "mern-js-m12", title: "ES6 Features", content: "i. Template Literals\nii. Destructuring\niii. Spread Operator\niv. Modules", subTopics: ["Template Literals", "Destructuring", "Spread Operator", "Modules"] },
      { id: "mern-js-m13", title: "Asynchronous JavaScript", content: "i. Callbacks\nii. Promises\niii. Async/Await\niv. Fetch API\nv. JSON\nvi. API Calls", subTopics: ["Callbacks", "Promises", "Async/Await", "Fetch API", "JSON", "API Calls"] }
    ]
  },
  {
    id: "mern-react",
    title: "REACT JS",
    lessons: [
      { id: "mern-react-m1", title: "Introduction to React", content: "i. What is React\nii. Features of React\niii. React Architecture\niv. Virtual DOM\nv. SPA Concept", subTopics: ["What is React", "Features of React", "React Architecture", "Virtual DOM", "SPA Concept"] },
      { id: "mern-react-m2", title: "React Environment Setup", content: "i. Node.js Installation\nii. npm and npx\niii. Create React App\niv. Vite Setup\nv. Folder Structure", subTopics: ["Node.js Installation", "npm and npx", "Create React App", "Vite Setup", "Folder Structure"] },
      { id: "mern-react-m3", title: "JSX", content: "i. JSX Syntax\nii. Embedding Expressions\niii. JSX Rules\niv. Rendering Elements", subTopics: ["JSX Syntax", "Embedding Expressions", "JSX Rules", "Rendering Elements"] },
      { id: "mern-react-m4", title: "Components", content: "i. Functional Components\nii. Class Components\niii. Component Reusability\niv. Props", subTopics: ["Functional Components", "Class Components", "Component Reusability", "Props"] },
      { id: "mern-react-m5", title: "State Management", content: "i. useState Hook\nii. Updating State\niii. State vs Props", subTopics: ["useState Hook", "Updating State", "State vs Props"] },
      { id: "mern-react-m6", title: "React Hooks", content: "i. useEffect\nii. useRef\niii. useMemo\iv. useCallback\nv. Custom Hooks", subTopics: ["useEffect", "useRef", "useMemo", "useCallback", "Custom Hooks"] },
      { id: "mern-react-m7", title: "Event Handling", content: "i. React Events\nii. Form Handling\niii. Controlled Components", subTopics: ["React Events", "Form Handling", "Controlled Components"] },
      { id: "mern-react-m8", title: "Conditional Rendering", content: "i. if else\nii. Ternary Operator\niii. Logical AND Operator", subTopics: ["if else", "Ternary Operator", "Logical AND Operator"] },
      { id: "mern-react-m9", title: "Lists and Keys", content: "i. map() Function\nii. Rendering Lists\niii. Keys in React", subTopics: ["map() Function", "Rendering Lists", "Keys in React"] },
      { id: "mern-react-m10", title: "React Router", content: "i. Routing Basics\nii. BrowserRouter\niii. Routes and Route\niv. Link and NavLink\nv. useNavigate", subTopics: ["Routing Basics", "BrowserRouter", "Routes and Route", "Link and NavLink", "useNavigate"] },
      { id: "mern-react-m11", title: "API Integration", content: "i. Fetch API\nii. Axios\niii. REST API Calls\niv. Loading States\nv. Error Handling", subTopics: ["Fetch API", "Axios", "REST API Calls", "Loading States", "Error Handling"] },
      { id: "mern-react-m12", title: "Context API", content: "i. Context Creation\nii. Provider\niii. Consumer\niv. Global State Management", subTopics: ["Context Creation", "Provider", "Consumer", "Global State Management"] },
      { id: "mern-react-m13", title: "Redux Basics", content: "i. Redux Introduction\nii. Store\niii. Actions\niv. Reducers\nv. Redux Toolkit", subTopics: ["Redux Introduction", "Store", "Actions", "Reducers", "Redux Toolkit"] },
      { id: "mern-react-m14", title: "React Forms", content: "i. Form Handling\nii. Validation\niii. Formik Basics", subTopics: ["Form Handling", "Validation", "Formik Basics"] },
      { id: "mern-react-m15", title: "Styling in React", content: "i. CSS Modules\nii. Styled Components\niii. Tailwind CSS Basics\niv. Bootstrap Integration", subTopics: ["CSS Modules", "Styled Components", "Tailwind CSS Basics", "Bootstrap Integration"] },
      { id: "mern-react-m16", title: "React Project Deployment", content: "i. Build Process\nii. Hosting using Netlify\niii. Hosting using Vercel", subTopics: ["Build Process", "Hosting using Netlify", "Hosting using Vercel"] }
    ]
  },
  {
    id: "mern-node",
    title: "NODE JS",
    lessons: [
      { id: "mern-node-m1", title: "Introduction to Node.js", content: "i. What is Node.js\nii. Features of Node.js\niii. Node.js Architecture\niv. Event Loop", subTopics: ["What is Node.js", "Features of Node.js", "Node.js Architecture", "Event Loop"] },
      { id: "mern-node-m2", title: "Node.js Environment", content: "i. Installing Node.js\nii. npm Package Manager\niii. package.json", subTopics: ["Installing Node.js", "npm Package Manager", "package.json"] },
      { id: "mern-node-m3", title: "Node.js Modules", content: "i. Built-in Modules\nii. Custom Modules\niii. Import and Export", subTopics: ["Built-in Modules", "Custom Modules", "Import and Export"] },
      { id: "mern-node-m4", title: "File System Module", content: "i. Reading Files\nii. Writing Files\niii. Appending Files\niv. Deleting Files", subTopics: ["Reading Files", "Writing Files", "Appending Files", "Deleting Files"] },
      { id: "mern-node-m5", title: "HTTP Module", content: "i. Creating Server\nii. Handling Requests and Responses\niii. Routing Basics", subTopics: ["Creating Server", "Handling Requests and Responses", "Routing Basics"] },
      { id: "mern-node-m6", title: "Node.js Asynchronous Programming", content: "i. Callbacks\nii. Promises\niii. Async/Await", subTopics: ["Callbacks", "Promises", "Async/Await"] },
      { id: "mern-node-m7", title: "Express.js Introduction", content: "i. Installing Express\nii. Creating Express Server\niii. Middleware Basics", subTopics: ["Installing Express", "Creating Express Server", "Middleware Basics"] },
      { id: "mern-node-m8", title: "Express Routing", content: "i. GET Requests\nii. POST Requests\niii. PUT Requests\niv. DELETE Requests", subTopics: ["GET Requests", "POST Requests", "PUT Requests", "DELETE Requests"] },
      { id: "mern-node-m9", title: "Middleware", content: "i. Custom Middleware\nii. Third Party Middleware\niii. Error Handling Middleware", subTopics: ["Custom Middleware", "Third Party Middleware", "Error Handling Middleware"] },
      { id: "mern-node-m10", title: "REST API Development", content: "i. REST Architecture\nii. CRUD APIs\niii. API Testing using Postman", subTopics: ["REST Architecture", "CRUD APIs", "API Testing using Postman"] },
      { id: "mern-node-m11", title: "Authentication Basics", content: "i. JWT Authentication\nii. Password Hashing\niii. bcrypt\niv. Login and Registration APIs", subTopics: ["JWT Authentication", "Password Hashing", "bcrypt", "Login and Registration APIs"] },
      { id: "mern-node-m12", title: "Environment Variables", content: "i. dotenv Package\nii. Configuration Management", subTopics: ["dotenv Package", "Configuration Management"] }
    ]
  },
  {
    id: "mern-mongo",
    title: "MONGODB",
    lessons: [
      { id: "mern-mongo-m1", title: "Introduction to MongoDB", content: "i. What is MongoDB\nii. Features of MongoDB\niii. MongoDB vs SQL", subTopics: ["What is MongoDB", "Features of MongoDB", "MongoDB vs SQL"] },
      { id: "mern-mongo-m2", title: "MongoDB Data Structure", content: "i. Database\nii. Collection\niii. Document\niv. JSON and BSON", subTopics: ["Database", "Collection", "Document", "JSON and BSON"] },
      { id: "mern-mongo-m3", title: "MongoDB Installation", content: "i. MongoDB Server\nii. MongoDB Compass\niii. MongoDB Shell", subTopics: ["MongoDB Server", "MongoDB Compass", "MongoDB Shell"] },
      { id: "mern-mongo-m4", title: "Basic Commands", content: "i. show dbs\nii. use database\niii. show collections", subTopics: ["show dbs", "use database", "show collections"] },
      { id: "mern-mongo-m5", title: "CRUD Operations", content: "i. Create\nii. insertOne()\niii. insertMany()\niv. Read\nv. find()\nvi. findOne()\nvii. Update\nviii. updateOne()\nix. updateMany()\nx. Delete\nxi. deleteOne()\nxii. deleteMany()", subTopics: ["Create", "insertOne()", "insertMany()", "Read", "find()", "findOne()", "Update", "updateOne()", "updateMany()", "Delete", "deleteOne()", "deleteMany()"] },
      { id: "mern-mongo-m6", title: "Query Operators", content: "i. Comparison Operators\nii. Logical Operators\niii. Element Operators", subTopics: ["Comparison Operators", "Logical Operators", "Element Operators"] },
      { id: "mern-mongo-m7", title: "Projection", content: "i. Selecting Specific Fields", subTopics: ["Selecting Specific Fields"] },
      { id: "mern-mongo-m8", title: "Sorting", content: "i. sort()", subTopics: ["sort()"] },
      { id: "mern-mongo-m9", title: "Limit and Skip", content: "i. limit()\nii. skip()", subTopics: ["limit()", "skip()"] },
      { id: "mern-mongo-m10", title: "Indexes", content: "i. createIndex()\nii. dropIndex()", subTopics: ["createIndex()", "dropIndex()"] },
      { id: "mern-mongo-m11", title: "MongoDB with Node.js", content: "i. Mongoose Introduction\nii. Schema Creation\niii. Models\niv. Validation\nv. CRUD with Mongoose", subTopics: ["Mongoose Introduction", "Schema Creation", "Models", "Validation", "CRUD with Mongoose"] }
    ]
  },
  {
    id: "mern-integration",
    title: "MERN STACK INTEGRATION",
    lessons: [
      { id: "mern-integration-m1", title: "Full Stack Architecture", content: "i. MERN Stack Overview\nii. Frontend–Backend Communication\niii. REST API Architecture", subTopics: ["MERN Stack Overview", "Frontend–Backend Communication", "REST API Architecture"] },
      { id: "mern-integration-m2", title: "Connecting React with Node.js", content: "i. API Calls from React\nii. Axios Integration\niii. Handling Responses", subTopics: ["API Calls from React", "Axios Integration", "Handling Responses"] },
      { id: "mern-integration-m3", title: "Connecting Node.js with MongoDB", content: "i. Mongoose Connection\nii. Environment Configuration", subTopics: ["Mongoose Connection", "Environment Configuration"] },
      { id: "mern-integration-m4", title: "Authentication System", content: "i. User Registration\nii. Login System\niii. JWT Authentication\niv. Protected Routes", subTopics: ["User Registration", "Login System", "JWT Authentication", "Protected Routes"] },
      { id: "mern-integration-m5", title: "File Uploads", content: "i. Multer\nii. Uploading Images\niii. Cloudinary Basics", subTopics: ["Multer", "Uploading Images", "Cloudinary Basics"] },
      { id: "mern-integration-m6", title: "Real-Time Features", content: "i. Socket.io Introduction\nii. Real-Time Chat Basics\niii. Notifications", subTopics: ["Socket.io Introduction", "Real-Time Chat Basics", "Notifications"] },
      { id: "mern-integration-m7", title: "Deployment", content: "i. Frontend Deployment\nii. Backend Deployment\niii. MongoDB Atlas\niv. Render Deployment", subTopics: ["Frontend Deployment", "Backend Deployment", "MongoDB Atlas", "Render Deployment"] }
    ]
  }
];
