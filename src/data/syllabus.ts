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
        title: "HTML",
        content: "I. Introduction to HTML\nII. Basic HTML Tags\nIII. HTML Links\nIV. HTML Media\nV. HTML Lists\nVI. HTML Tables\nVII. HTML Forms\nVIII. Semantic HTML",
        subTopics: ["Introduction to HTML", "Basic HTML Tags", "HTML Links", "HTML Media", "HTML Lists", "HTML Tables", "HTML Forms", "Semantic HTML"]
      },
      {
        id: "css-new",
        title: "CSS",
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
    title: "HTML (HyperText Markup Language)",
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
    title: "CSS(Cascading Style Sheets)",
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
  },
  {
    id: "backend-intro",
    title: "Introduction to Web & Backend Development",
    lessons: [
      { id: "backend-m1-l1", title: "Introduction to Web Development", content: "Brief overview of web development fundamentals.", subTopics: ["Web Development Basics"] },
      { id: "backend-m1-l2", title: "Frontend vs Backend", content: "Understanding the difference between frontend and backend development.", subTopics: ["Frontend", "Backend"] },
      { id: "backend-m1-l3", title: "Client-Server Architecture", content: "How client-server architecture works in web applications.", subTopics: ["Client", "Server", "Architecture"] },
      { id: "backend-m1-l4", title: "How Websites Work", content: "The process of how websites function on the internet.", subTopics: ["HTTP", "DNS", "Servers"] },
      { id: "backend-m1-l5", title: "Introduction to APIs", content: "Understanding APIs and their role in web development.", subTopics: ["API Basics", "REST", "Endpoints"] },
      { id: "backend-m1-l6", title: "Introduction to Node.js", content: "Overview of Node.js and its use cases.", subTopics: ["Node.js Overview", "Runtime Environment"] },
      { id: "backend-m1-l7", title: "Features of Node.js", content: "Key features that make Node.js popular for backend development.", subTopics: ["Asynchronous", "Event-Driven", "Cross-Platform"] },
      { id: "backend-m1-l8", title: "Installing Node.js & npm", content: "Step-by-step guide to installing Node.js and npm.", subTopics: ["Installation", "npm Setup", "Verification"] },
      { id: "backend-m1-l9", title: "Working with VS Code", content: "Setting up VS Code for Node.js development.", subTopics: ["VS Code Setup", "Extensions", "Configuration"] },
      { id: "backend-m1-l10", title: "Node.js Environment Setup", content: "Configuring the development environment for Node.js.", subTopics: ["Environment Variables", "Project Setup", "Dependencies"] },
      { id: "backend-m1-l11", title: "Installing Development Tools", content: "Essential tools for Node.js backend development.", subTopics: ["Development Tools", "Package Managers", "Debugging Tools"] },
      { id: "backend-m1-l12", title: "Running First Node.js Program", content: "Creating and executing your first Node.js application.", subTopics: ["Hello World", "Execution", "Node CLI"] },
      { id: "backend-m1-l13", title: "Creating Basic Applications", content: "Building simple applications with Node.js.", subTopics: ["Basic App", "Modules", "File Structure"] }
    ]
  },
  {
    id: "backend-js-fundamentals",
    title: "JavaScript Fundamentals for Backend",
    lessons: [
      { id: "backend-m2-l1", title: "Variables and Data Types", content: "Understanding JavaScript variables and data types.", subTopics: ["var, let, const", "Primitive Types", "Reference Types"] },
      { id: "backend-m2-l2", title: "Operators", content: "JavaScript operators for performing operations.", subTopics: ["Arithmetic", "Assignment", "Comparison", "Logical"] },
      { id: "backend-m2-l3", title: "Conditional Statements", content: "Making decisions in code with conditionals.", subTopics: ["if", "if else", "switch", "nested if"] },
      { id: "backend-m2-l4", title: "Loops", content: "Iterating through data with loops.", subTopics: ["for loop", "while loop", "do while", "break and continue"] },
      { id: "backend-m2-l5", title: "Functions", content: "Creating reusable code blocks with functions.", subTopics: ["Function Declaration", "Function Expression", "Arrow Functions", "Parameters"] },
      { id: "backend-m2-l6", title: "Arrays and Objects", content: "Working with arrays and objects in JavaScript.", subTopics: ["Array Methods", "Object Properties", "Nested Structures"] },
      { id: "backend-m2-l7", title: "String Methods", content: "Manipulating strings with built-in methods.", subTopics: ["String Operations", "Template Strings", "String Methods"] },
      { id: "backend-m2-l8", title: "JSON", content: "Working with JSON data format.", subTopics: ["JSON Parse", "JSON Stringify", "JSON Structure"] },
      { id: "backend-m2-l9", title: "ES6 Features", content: "Modern JavaScript ES6 features.", subTopics: ["ES6 Overview", "New Features", "Syntax Updates"] },
      { id: "backend-m2-l10", title: "Arrow Functions", content: "Concise function syntax with arrow functions.", subTopics: ["Arrow Syntax", "this Context", "Use Cases"] },
      { id: "backend-m2-l11", title: "Template Literals", content: "String interpolation with template literals.", subTopics: ["Template Strings", "Expressions", "Multi-line Strings"] },
      { id: "backend-m2-l12", title: "Destructuring", content: "Extracting values from arrays and objects.", subTopics: ["Array Destructuring", "Object Destructuring", "Default Values"] },
      { id: "backend-m2-l13", title: "Spread & Rest Operators", content: "Using spread and rest operators.", subTopics: ["Spread Operator", "Rest Parameters", "Use Cases"] },
      { id: "backend-m2-l14", title: "Logic Building Programs", content: "Building logical programs with JavaScript.", subTopics: ["Problem Solving", "Algorithm Design", "Logic Implementation"] },
      { id: "backend-m2-l15", title: "Mini JavaScript Tasks", content: "Small JavaScript exercises and tasks.", subTopics: ["Exercises", "Practice Problems", "Code Challenges"] },
      { id: "backend-m2-l16", title: "Backend Utility Programs", content: "Creating utility programs for backend development.", subTopics: ["Utility Functions", "Helper Modules", "Code Reusability"] }
    ]
  },
  {
    id: "backend-js-advanced",
    title: "Advanced JavaScript",
    lessons: [
      { id: "backend-m3-l1", title: "Callbacks", content: "Understanding callback functions in JavaScript.", subTopics: ["Callback Basics", "Callback Hell", "Best Practices"] },
      { id: "backend-m3-l2", title: "Promises", content: "Working with Promises for asynchronous operations.", subTopics: ["Promise States", "then/catch", "Chaining"] },
      { id: "backend-m3-l3", title: "Async/Await", content: "Modern async/await syntax for asynchronous code.", subTopics: ["async Functions", "await Keyword", "Error Handling"] },
      { id: "backend-m3-l4", title: "Event Loop", content: "Understanding JavaScript's event loop mechanism.", subTopics: ["Call Stack", "Callback Queue", "Microtasks"] },
      { id: "backend-m3-l5", title: "Closures", content: "Understanding closures and lexical scoping.", subTopics: ["Closure Basics", "Scope Chain", "Use Cases"] },
      { id: "backend-m3-l6", title: "Higher Order Functions", content: "Functions that take other functions as arguments.", subTopics: ["map", "filter", "reduce", "Custom HOFs"] },
      { id: "backend-m3-l7", title: "Modules in JavaScript", content: "Organizing code with modules.", subTopics: ["ES6 Modules", "CommonJS", "Module Systems"] },
      { id: "backend-m3-l8", title: "Import & Export", content: "Importing and exporting modules.", subTopics: ["Named Exports", "Default Exports", "Dynamic Imports"] },
      { id: "backend-m3-l9", title: "Error Handling", content: "Handling errors in JavaScript applications.", subTopics: ["try-catch", "throw", "Error Objects"] },
      { id: "backend-m3-l10", title: "Exception Handling", content: "Advanced exception handling techniques.", subTopics: ["Custom Errors", "Global Handlers", "Error Propagation"] },
      { id: "backend-m3-l11", title: "Asynchronous Programming Tasks", content: "Practice tasks for asynchronous programming.", subTopics: ["Async Exercises", "Promise Tasks", "Async/Await Practice"] },
      { id: "backend-m3-l12", title: "Promise-Based Applications", content: "Building applications using Promises.", subTopics: ["API Calls", "Data Fetching", "Promise Chains"] },
      { id: "backend-m3-l13", title: "Error Handling Examples", content: "Real-world error handling examples.", subTopics: ["Error Scenarios", "Handling Patterns", "Best Practices"] }
    ]
  },
  {
    id: "backend-node-core",
    title: "Node.js Core Concepts",
    lessons: [
      { id: "backend-m4-l1", title: "Node.js Architecture", content: "Understanding Node.js architecture and design.", subTopics: ["Event Loop", "Single Threaded", "Non-blocking I/O"] },
      { id: "backend-m4-l2", title: "REPL", content: "Using Node.js REPL for interactive programming.", subTopics: ["REPL Basics", "REPL Commands", "Interactive Testing"] },
      { id: "backend-m4-l3", title: "npm Package Manager", content: "Managing packages with npm.", subTopics: ["npm Commands", "Package Installation", "Package Management"] },
      { id: "backend-m4-l4", title: "Package.json", content: "Understanding package.json configuration.", subTopics: ["package.json Structure", "Dependencies", "Scripts"] },
      { id: "backend-m4-l5", title: "Core Modules", content: "Working with Node.js core modules.", subTopics: ["Built-in Modules", "Module System", "Common Modules"] },
      { id: "backend-m4-l6", title: "File System Module", content: "File operations with fs module.", subTopics: ["Reading Files", "Writing Files", "File Operations"] },
      { id: "backend-m4-l7", title: "Path Module", content: "Working with file paths using path module.", subTopics: ["Path Operations", "Path Resolution", "Cross-platform Paths"] },
      { id: "backend-m4-l8", title: "OS Module", content: "Getting operating system information.", subTopics: ["OS Info", "Platform Detection", "System Resources"] },
      { id: "backend-m4-l9", title: "HTTP Module", content: "Creating HTTP servers and clients.", subTopics: ["HTTP Server", "HTTP Client", "Request/Response"] },
      { id: "backend-m4-l10", title: "Events Module", content: "Event-driven programming with events module.", subTopics: ["EventEmitter", "Event Listeners", "Custom Events"] },
      { id: "backend-m4-l11", title: "Streams & Buffers", content: "Working with streams and buffers.", subTopics: ["Stream Types", "Buffer Operations", "Pipe Streams"] },
      { id: "backend-m4-l12", title: "File Handling Applications", content: "Building file handling applications.", subTopics: ["File Managers", "Log Systems", "Data Processing"] },
      { id: "backend-m4-l13", title: "HTTP Server Creation", content: "Creating HTTP servers with Node.js.", subTopics: ["Server Setup", "Routing", "Middleware"] },
      { id: "backend-m4-l14", title: "Node.js Utility Projects", content: "Building utility projects with Node.js.", subTopics: ["CLI Tools", "Automation Scripts", "Utilities"] }
    ]
  },
  {
    id: "backend-express",
    title: "Express.js Framework",
    lessons: [
      { id: "backend-m5-l1", title: "Introduction to Express.js", content: "Overview of Express.js framework.", subTopics: ["Express Overview", "Features", "Use Cases"] },
      { id: "backend-m5-l2", title: "Installing Express", content: "Setting up Express.js in a project.", subTopics: ["Installation", "Setup", "Configuration"] },
      { id: "backend-m5-l3", title: "Creating Express Server", content: "Building your first Express server.", subTopics: ["Server Setup", "Basic Routes", "Listening"] },
      { id: "backend-m5-l4", title: "Routing", content: "Implementing routing in Express.", subTopics: ["Route Methods", "Route Paths", "Route Handlers"] },
      { id: "backend-m5-l5", title: "Route Parameters", content: "Working with route parameters.", subTopics: ["Params", "Query Strings", "URL Parsing"] },
      { id: "backend-m5-l6", title: "Middleware", content: "Understanding and using middleware.", subTopics: ["Middleware Types", "Application-level", "Router-level"] },
      { id: "backend-m5-l7", title: "Request & Response Handling", content: "Handling HTTP requests and responses.", subTopics: ["Request Object", "Response Object", "Status Codes"] },
      { id: "backend-m5-l8", title: "Static Files", content: "Serving static files with Express.", subTopics: ["Static Middleware", "File Serving", "Asset Management"] },
      { id: "backend-m5-l9", title: "Express Router", content: "Using Express Router for modular routing.", subTopics: ["Router Module", "Route Modules", "Modular Apps"] },
      { id: "backend-m5-l10", title: "Error Handling Middleware", content: "Implementing error handling in Express.", subTopics: ["Error Middleware", "Error Handling", "Custom Errors"] },
      { id: "backend-m5-l11", title: "Express Server Development", content: "Developing full Express servers.", subTopics: ["Server Architecture", "API Design", "Best Practices"] },
      { id: "backend-m5-l12", title: "Routing Applications", content: "Building applications with complex routing.", subTopics: ["Nested Routes", "Route Groups", "Route Organization"] },
      { id: "backend-m5-l13", title: "Middleware Implementation", content: "Implementing custom middleware.", subTopics: ["Custom Middleware", "Third-party Middleware", "Middleware Chain"] }
    ]
  },
  {
    id: "backend-rest-api",
    title: "REST API Development",
    lessons: [
      { id: "backend-m6-l1", title: "Introduction to REST APIs", content: "Understanding REST API concepts.", subTopics: ["REST Principles", "API Design", "RESTful Services"] },
      { id: "backend-m6-l2", title: "CRUD Operations", content: "Implementing CRUD operations in APIs.", subTopics: ["Create", "Read", "Update", "Delete"] },
      { id: "backend-m6-l3", title: "API Methods (GET, POST, PUT, DELETE)", content: "HTTP methods for API operations.", subTopics: ["GET", "POST", "PUT", "DELETE", "PATCH"] },
      { id: "backend-m6-l4", title: "API Testing", content: "Testing APIs with various tools.", subTopics: ["Postman", "Insomnia", "Testing Strategies"] },
      { id: "backend-m6-l5", title: "JSON Handling", content: "Working with JSON in APIs.", subTopics: ["JSON Format", "JSON Parsing", "JSON Response"] },
      { id: "backend-m6-l6", title: "REST Architecture", content: "Understanding REST architecture patterns.", subTopics: ["REST Constraints", "Stateless", "Client-Server"] },
      { id: "backend-m6-l7", title: "Status Codes", content: "HTTP status codes for APIs.", subTopics: ["2xx Success", "4xx Client Errors", "5xx Server Errors"] },
      { id: "backend-m6-l8", title: "API Validation", content: "Validating API requests and responses.", subTopics: ["Input Validation", "Output Validation", "Schema Validation"] },
      { id: "backend-m6-l9", title: "CRUD API Development", content: "Building complete CRUD APIs.", subTopics: ["API Endpoints", "Database Integration", "Error Handling"] },
      { id: "backend-m6-l10", title: "API Testing using Postman", content: "Testing APIs with Postman.", subTopics: ["Postman Collections", "Environment Variables", "Automated Tests"] },
      { id: "backend-m6-l11", title: "JSON-Based Applications", content: "Building applications with JSON.", subTopics: ["JSON APIs", "Data Exchange", "JSON Storage"] }
    ]
  },
  {
    id: "backend-mongodb",
    title: "MongoDB Database",
    lessons: [
      { id: "backend-m7-l1", title: "Introduction to Databases", content: "Understanding database fundamentals.", subTopics: ["Database Types", "DBMS", "Data Storage"] },
      { id: "backend-m7-l2", title: "SQL vs NoSQL", content: "Comparing SQL and NoSQL databases.", subTopics: ["Relational DB", "Document DB", "Use Cases"] },
      { id: "backend-m7-l3", title: "MongoDB Installation", content: "Installing MongoDB on your system.", subTopics: ["Installation Steps", "Configuration", "Verification"] },
      { id: "backend-m7-l4", title: "MongoDB Compass", content: "Using MongoDB Compass GUI.", subTopics: ["Compass Interface", "Database Management", "Query Builder"] },
      { id: "backend-m7-l5", title: "Collections & Documents", content: "Understanding MongoDB data structure.", subTopics: ["Collections", "Documents", "BSON"] },
      { id: "backend-m7-l6", title: "CRUD Operations in MongoDB", content: "Performing CRUD operations.", subTopics: ["Create", "Read", "Update", "Delete"] },
      { id: "backend-m7-l7", title: "MongoDB Queries", content: "Writing MongoDB queries.", subTopics: ["Query Syntax", "Filters", "Operators"] },
      { id: "backend-m7-l8", title: "Database Creation", content: "Creating and managing databases.", subTopics: ["Database Commands", "Database Design", "Schema Planning"] },
      { id: "backend-m7-l9", title: "MongoDB CRUD Operations", content: "Advanced CRUD operations practice.", subTopics: ["Bulk Operations", "Atomic Operations", "Transactions"] },
      { id: "backend-m7-l10", title: "Data Management Applications", content: "Building data management apps.", subTopics: ["Data Models", "CRUD Apps", "Data Validation"] }
    ]
  },
  {
    id: "backend-mongoose",
    title: "Mongoose ODM",
    lessons: [
      { id: "backend-m8-l1", title: "Introduction to Mongoose", content: "Overview of Mongoose ODM.", subTopics: ["Mongoose Overview", "ODM Concepts", "Benefits"] },
      { id: "backend-m8-l2", title: "Connecting MongoDB with Node.js", content: "Connecting MongoDB using Mongoose.", subTopics: ["Connection String", "Connection Options", "Connection Events"] },
      { id: "backend-m8-l3", title: "Schemas", content: "Defining Mongoose schemas.", subTopics: ["Schema Definition", "Schema Types", "Schema Options"] },
      { id: "backend-m8-l4", title: "Models", content: "Creating and using Mongoose models.", subTopics: ["Model Creation", "Model Methods", "Model Instances"] },
      { id: "backend-m8-l5", title: "Validation", content: "Validating data with Mongoose.", subTopics: ["Built-in Validators", "Custom Validators", "Validation Middleware"] },
      { id: "backend-m8-l6", title: "Relationships", content: "Modeling relationships in Mongoose.", subTopics: ["References", "Population", "Embedding"] },
      { id: "backend-m8-l7", title: "Query Methods", content: "Querying data with Mongoose.", subTopics: ["Find Queries", "Update Queries", "Delete Queries"] },
      { id: "backend-m8-l8", title: "Database Integration Projects", content: "Building database integration projects.", subTopics: ["CRUD Operations", "Data Models", "API Integration"] },
      { id: "backend-m8-l9", title: "Schema-Based Applications", content: "Building applications with schemas.", subTopics: ["Schema Design", "Data Validation", "Type Safety"] },
      { id: "backend-m8-l10", title: "User Management System", content: "Building a user management system.", subTopics: ["User Schema", "Auth Integration", "User Operations"] }
    ]
  },
  {
    id: "backend-auth",
    title: "Authentication & Authorization",
    lessons: [
      { id: "backend-m9-l1", title: "User Authentication", content: "Understanding user authentication concepts.", subTopics: ["Auth Basics", "Authentication Flow", "Security Principles"] },
      { id: "backend-m9-l2", title: "JWT Authentication", content: "Implementing JWT authentication.", subTopics: ["JWT Structure", "Token Generation", "Token Validation"] },
      { id: "backend-m9-l3", title: "bcrypt Password Encryption", content: "Encrypting passwords with bcrypt.", subTopics: ["Hashing", "Salt", "Password Security"] },
      { id: "backend-m9-l4", title: "Login & Registration System", content: "Building login and registration systems.", subTopics: ["Registration Flow", "Login Flow", "Session Management"] },
      { id: "backend-m9-l5", title: "Protected Routes", content: "Implementing protected routes.", subTopics: ["Route Guards", "Middleware", "Access Control"] },
      { id: "backend-m9-l6", title: "Authorization", content: "Implementing authorization logic.", subTopics: ["Permission Checks", "Access Levels", "Authorization Patterns"] },
      { id: "backend-m9-l7", title: "Role-Based Access", content: "Implementing role-based access control.", subTopics: ["Roles", "Permissions", "RBAC Design"] },
      { id: "backend-m9-l8", title: "Environment Variables", content: "Managing environment variables.", subTopics: ["dotenv", "Config Management", "Security"] },
      { id: "backend-m9-l9", title: "Secure Login System", content: "Building secure login systems.", subTopics: ["Security Best Practices", "Attack Prevention", "Secure Storage"] },
      { id: "backend-m9-l10", title: "Authentication APIs", content: "Creating authentication APIs.", subTopics: ["Auth Endpoints", "Token Management", "Refresh Tokens"] },
      { id: "backend-m9-l11", title: "Protected Backend Applications", content: "Building protected backend applications.", subTopics: ["Secure APIs", "Auth Middleware", "Protected Resources"] }
    ]
  },
  {
    id: "backend-file-email",
    title: "File Upload & Email Services",
    lessons: [
      { id: "backend-m10-l1", title: "File Upload using Multer", content: "Implementing file uploads with Multer.", subTopics: ["Multer Setup", "File Storage", "Upload Handling"] },
      { id: "backend-m10-l2", title: "Image Upload APIs", content: "Creating image upload APIs.", subTopics: ["Image Processing", "File Validation", "API Endpoints"] },
      { id: "backend-m10-l3", title: "Cloud Storage Basics", content: "Understanding cloud storage concepts.", subTopics: ["Cloud Services", "Storage Options", "CDN"] },
      { id: "backend-m10-l4", title: "Email Services", content: "Integrating email services.", subTopics: ["Email APIs", "SMTP", "Email Templates"] },
      { id: "backend-m10-l5", title: "Nodemailer", content: "Sending emails with Nodemailer.", subTopics: ["Nodemailer Setup", "Email Configuration", "Sending Emails"] },
      { id: "backend-m10-l6", title: "OTP Verification System", content: "Building OTP verification systems.", subTopics: ["OTP Generation", "OTP Validation", "Security"] },
      { id: "backend-m10-l7", title: "File Upload Projects", content: "Building file upload projects.", subTopics: ["Upload Features", "File Management", "User Interface"] },
      { id: "backend-m10-l8", title: "Email Sending Applications", content: "Building email sending applications.", subTopics: ["Email Automation", "Bulk Emails", "Email Templates"] },
      { id: "backend-m10-l9", title: "OTP Authentication System", content: "Building OTP authentication systems.", subTopics: ["OTP Flow", "Security Measures", "User Experience"] }
    ]
  },
  {
    id: "backend-real-time",
    title: "Real-Time Applications",
    lessons: [
      { id: "backend-m11-l1", title: "Introduction to Socket.io", content: "Overview of Socket.io for real-time apps.", subTopics: ["Socket.io Basics", "Real-time Concepts", "Use Cases"] },
      { id: "backend-m11-l2", title: "Real-Time Communication", content: "Understanding real-time communication.", subTopics: ["WebSockets", "Events", "Bidirectional Communication"] },
      { id: "backend-m11-l3", title: "WebSockets", content: "Working with WebSockets.", subTopics: ["WebSocket API", "Connection Management", "Data Transfer"] },
      { id: "backend-m11-l4", title: "Live Notifications", content: "Implementing live notifications.", subTopics: ["Push Notifications", "Event Broadcasting", "User Alerts"] },
      { id: "backend-m11-l5", title: "Chat Applications", content: "Building chat applications.", subTopics: ["Chat Architecture", "Message Handling", "User Presence"] },
      { id: "backend-m11-l6", title: "Real-Time Chat Application", content: "Building a real-time chat app.", subTopics: ["Chat Features", "Socket Integration", "UI Implementation"] },
      { id: "backend-m11-l7", title: "Live Notification System", content: "Building a live notification system.", subTopics: ["Notification Types", "Delivery System", "User Preferences"] }
    ]
  },
  {
    id: "backend-security",
    title: "API Security & Best Practices",
    lessons: [
      { id: "backend-m12-l1", title: "API Security", content: "Understanding API security principles.", subTopics: ["Security Basics", "Threats", "Protection"] },
      { id: "backend-m12-l2", title: "CORS", content: "Implementing CORS in Express.", subTopics: ["CORS Configuration", "Cross-Origin", "Security Headers"] },
      { id: "backend-m12-l3", title: "Helmet", content: "Securing Express apps with Helmet.", subTopics: ["Helmet Middleware", "Security Headers", "HTTP Protection"] },
      { id: "backend-m12-l4", title: "Rate Limiting", content: "Implementing rate limiting.", subTopics: ["Rate Limiting Middleware", "DDoS Protection", "Throttling"] },
      { id: "backend-m12-l5", title: "Data Validation", content: "Validating input data.", subTopics: ["Input Sanitization", "Validation Libraries", "Security"] },
      { id: "backend-m12-l6", title: "Error Logging", content: "Implementing error logging.", subTopics: ["Logging Libraries", "Error Tracking", "Monitoring"] },
      { id: "backend-m12-l7", title: "Backend Best Practices", content: "Following backend development best practices.", subTopics: ["Code Quality", "Performance", "Maintainability"] },
      { id: "backend-m12-l8", title: "Secure API Development", content: "Building secure APIs.", subTopics: ["Security Patterns", "Authentication", "Authorization"] },
      { id: "backend-m12-l9", title: "Backend Optimization", content: "Optimizing backend performance.", subTopics: ["Caching", "Database Optimization", "Code Efficiency"] }
    ]
  },
  {
    id: "backend-git",
    title: "Git & GitHub",
    lessons: [
      { id: "backend-m13-l1", title: "Introduction to Git", content: "Understanding Git version control.", subTopics: ["Git Overview", "Version Control", "Distributed VCS"] },
      { id: "backend-m13-l2", title: "Git Commands", content: "Essential Git commands.", subTopics: ["Basic Commands", "Staging", "Committing"] },
      { id: "backend-m13-l3", title: "GitHub Basics", content: "Using GitHub for code hosting.", subTopics: ["GitHub Overview", "Repositories", "Collaboration"] },
      { id: "backend-m13-l4", title: "Repository Management", content: "Managing Git repositories.", subTopics: ["Repo Creation", "Remote Repos", "Cloning"] },
      { id: "backend-m13-l5", title: "Branching", content: "Working with Git branches.", subTopics: ["Branch Creation", "Merging", "Branch Strategies"] },
      { id: "backend-m13-l6", title: "Version Control", content: "Version control workflows.", subTopics: ["Git Workflow", "Commit History", "Reverting"] },
      { id: "backend-m13-l7", title: "GitHub Project Hosting", content: "Hosting projects on GitHub.", subTopics: ["GitHub Pages", "Project Setup", "Deployment"] },
      { id: "backend-m13-l8", title: "Team Collaboration Practice", content: "Collaborating with teams on GitHub.", subTopics: ["Pull Requests", "Code Review", "Issues"] }
    ]
  },
  {
    id: "backend-deployment",
    title: "Deployment & Hosting",
    lessons: [
      { id: "backend-m14-l1", title: "Deployment Basics", content: "Understanding deployment concepts.", subTopics: ["Deployment Process", "Environments", "CI/CD"] },
      { id: "backend-m14-l2", title: "Hosting Backend Applications", content: "Hosting backend applications.", subTopics: ["Hosting Options", "Cloud Providers", "Server Setup"] },
      { id: "backend-m14-l3", title: "Render Deployment", content: "Deploying to Render.", subTopics: ["Render Setup", "Deployment Process", "Configuration"] },
      { id: "backend-m14-l4", title: "Vercel Basics", content: "Using Vercel for deployment.", subTopics: ["Vercel Overview", "Deployment", "Configuration"] },
      { id: "backend-m14-l5", title: "Environment Configuration", content: "Configuring production environments.", subTopics: ["Environment Variables", "Config Files", "Security"] },
      { id: "backend-m14-l6", title: "PM2 Basics", content: "Using PM2 for process management.", subTopics: ["PM2 Setup", "Process Management", "Monitoring"] },
      { id: "backend-m14-l7", title: "Live Project Deployment", content: "Deploying projects to production.", subTopics: ["Production Setup", "Domain Configuration", "SSL"] },
      { id: "backend-m14-l8", title: "Production Hosting", content: "Managing production hosting.", subTopics: ["Server Management", "Scaling", "Monitoring"] }
    ]
  },
  {
    id: "backend-projects",
    title: "Real-Time Industry Projects",
    lessons: [
      { id: "backend-m15-l1", title: "Student Management API", content: "Building a student management API.", subTopics: ["CRUD Operations", "Student Data", "API Endpoints"] },
      { id: "backend-m15-l2", title: "Authentication System", content: "Building a complete authentication system.", subTopics: ["User Auth", "JWT", "Security"] },
      { id: "backend-m15-l3", title: "Blog Backend", content: "Creating a blog backend system.", subTopics: ["Blog Posts", "Comments", "Categories"] },
      { id: "backend-m15-l4", title: "Notes Management API", content: "Building a notes management API.", subTopics: ["Notes CRUD", "User Notes", "Organization"] },
      { id: "backend-m15-l5", title: "E-Commerce Backend System", content: "Building an e-commerce backend.", subTopics: ["Products", "Orders", "Payments"] },
      { id: "backend-m15-l6", title: "Hospital Management Backend", content: "Creating a hospital management system.", subTopics: ["Patients", "Doctors", "Appointments"] },
      { id: "backend-m15-l7", title: "Employee Management System", content: "Building an employee management system.", subTopics: ["Employees", "Departments", "Payroll"] },
      { id: "backend-m15-l8", title: "Online Course Backend", content: "Creating an online course backend.", subTopics: ["Courses", "Enrollments", "Progress"] },
      { id: "backend-m15-l9", title: "Real-Time Chat Backend", content: "Building a real-time chat backend.", subTopics: ["Chat Server", "Messages", "Users"] }
    ]
  }
];
