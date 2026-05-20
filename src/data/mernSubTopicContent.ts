import { SubTopicContent } from "./subTopicContent";

export const mernSubTopicData: Record<string, SubTopicContent> = {};

// Helper function to generate standardized MERN content
const generateContent = (title: string, category: string): SubTopicContent => ({
  description: `Detailed overview of ${title} in the ${category} module.`,
  keyPoints: [
    `Understand the fundamental concepts of ${title}.`,
    `Learn how to apply ${title} in real-world scenarios.`,
    `Explore best practices and performance optimizations for ${title}.`
  ],
  sections: [
    {
      heading: `Introduction to ${title}`,
      content: `This section provides a comprehensive introduction to ${title}. You will learn the theoretical foundations, basic syntax, and structural rules that govern its usage in modern web development.`
    },
    {
      heading: "Core Concepts & Implementation",
      points: [
        `Key principle 1: Setup and Initialization for ${title}`,
        `Key principle 2: Syntax and Structural patterns`,
        `Key principle 3: Integration with other MERN stack technologies`
      ]
    },
    {
      heading: "Best Practices",
      content: `When working with ${title}, it is crucial to follow industry-standard best practices to ensure code maintainability, performance, and security.`
    }
  ]
});

const mernTopics = [
  // Web Technologies
  "Internet Basics", "World Wide Web (WWW)", "Web Browsers and Rendering", "Client–Server Architecture", "Frontend vs Backend", "Full Stack Development", "Static vs Dynamic Websites", "Development Tools", "VS Code Setup", "Browser Developer Tools",
  
  // HTML
  "HTML Overview", "History of HTML", "Features of HTML", "HTML Versions", "HTML Page Structure", "HTML Syntax", "HTML Comments",
  "Heading Tags", "Paragraph Tag", "Line Break", "Horizontal Rule", "Text Formatting Tags",
  "Anchor Tag", "Internal Links", "External Links", "Email Links", "Bookmark Links",
  "Image Tag", "Audio Tag", "Video Tag", "Iframe",
  "Ordered Lists", "Unordered Lists", "Description Lists", "Nested Lists",
  "Table Structure", "Table Headers", "Rowspan and Colspan",
  "Form Tag", "Input Types", "Textarea", "Dropdown", "Buttons",
  "Header", "Footer", "Section", "Article", "Nav", "Main", "Figure", "Figcaption",

  // CSS
  "CSS Overview", "CSS Syntax", "Inline CSS", "Internal CSS", "External CSS",
  "Element Selector", "Class Selector", "ID Selector", "Universal Selector", "Group Selector",
  "Color", "Background Color", "Background Image", "Background Position", "Background Size",
  "Font Family", "Font Size", "Font Weight", "Text Alignment", "Text Decoration",
  "Width and Height", "Margin", "Padding", "Border", "Border Radius",
  "Display Property", "Block vs Inline", "Float and Clear", "Overflow", "Z-index",
  "Flex Container", "Flex Items", "Justify Content", "Align Items", "Flex Wrap",
  "Grid Container", "Grid Rows and Columns", "Grid Template", "Grid Gap",
  "Viewport", "Media Queries", "Mobile First Design",
  "Transitions", "Transform", "Rotate", "Scale", "Translate", "Keyframes",

  // JS
  "JavaScript Overview", "Features of JavaScript", "JavaScript Syntax", "Output Methods",
  "var, let, const", "Number", "String", "Boolean", "Undefined", "Null", "Object",
  "Arithmetic Operators", "Assignment Operators", "Comparison Operators", "Logical Operators", "Ternary Operator",
  "if", "if else", "switch", "nested if",
  "for loop", "while loop", "do while", "break and continue",
  "Function Declaration", "Function Expression", "Arrow Functions", "Parameters and Return Values",
  "Array Creation", "push()", "pop()", "shift()", "unshift()", "slice()", "splice()",
  "Object Properties", "Object Methods", "Nested Objects",
  "getElementById", "querySelector", "querySelectorAll", "Modify HTML and CSS",
  "onclick", "onmouseover", "onkeydown", "onsubmit", "Event Listeners",
  "Required Validation", "Email Validation", "Password Validation",
  "Template Literals", "Destructuring", "Spread Operator", "Modules",
  "Callbacks", "Promises", "Async/Await", "Fetch API", "JSON", "API Calls",

  // REACT JS
  "What is React", "Features of React", "React Architecture", "Virtual DOM", "SPA Concept",
  "Node.js Installation", "npm and npx", "Create React App", "Vite Setup", "Folder Structure",
  "JSX Syntax", "Embedding Expressions", "JSX Rules", "Rendering Elements",
  "Functional Components", "Class Components", "Component Reusability", "Props",
  "useState Hook", "Updating State", "State vs Props",
  "useEffect", "useRef", "useMemo", "useCallback", "Custom Hooks",
  "React Events", "Form Handling", "Controlled Components",
  "Ternary Operator", "Logical AND Operator",
  "map() Function", "Rendering Lists", "Keys in React",
  "Routing Basics", "BrowserRouter", "Routes and Route", "Link and NavLink", "useNavigate",
  "Axios", "REST API Calls", "Loading States", "Error Handling",
  "Context Creation", "Provider", "Consumer", "Global State Management",
  "Redux Introduction", "Store", "Actions", "Reducers", "Redux Toolkit",
  "Validation", "Formik Basics",
  "CSS Modules", "Styled Components", "Tailwind CSS Basics", "Bootstrap Integration",
  "Build Process", "Hosting using Netlify", "Hosting using Vercel",

  // NODE JS
  "What is Node.js", "Features of Node.js", "Node.js Architecture", "Event Loop",
  "Installing Node.js", "npm Package Manager", "package.json",
  "Built-in Modules", "Custom Modules", "Import and Export",
  "Reading Files", "Writing Files", "Appending Files", "Deleting Files",
  "Creating Server", "Handling Requests and Responses",
  "Installing Express", "Creating Express Server", "Middleware Basics",
  "GET Requests", "POST Requests", "PUT Requests", "DELETE Requests",
  "Custom Middleware", "Third Party Middleware", "Error Handling Middleware",
  "REST Architecture", "CRUD APIs", "API Testing using Postman",
  "JWT Authentication", "Password Hashing", "bcrypt", "Login and Registration APIs",
  "dotenv Package", "Configuration Management",

  // MONGODB
  "What is MongoDB", "Features of MongoDB", "MongoDB vs SQL",
  "Database", "Collection", "Document", "JSON and BSON",
  "MongoDB Server", "MongoDB Compass", "MongoDB Shell",
  "show dbs", "use database", "show collections",
  "Create", "insertOne()", "insertMany()",
  "Read", "find()", "findOne()",
  "Update", "updateOne()", "updateMany()",
  "Delete", "deleteOne()", "deleteMany()",
  "Element Operators",
  "Selecting Specific Fields",
  "sort()",
  "limit()", "skip()",
  "createIndex()", "dropIndex()",
  "Mongoose Introduction", "Schema Creation", "Models", "CRUD with Mongoose",

  // MERN STACK INTEGRATION
  "MERN Stack Overview", "Frontend–Backend Communication", "REST API Architecture",
  "API Calls from React", "Axios Integration", "Handling Responses",
  "Mongoose Connection", "Environment Configuration",
  "User Registration", "Login System", "Protected Routes",
  "Multer", "Uploading Images", "Cloudinary Basics",
  "Socket.io Introduction", "Real-Time Chat Basics", "Notifications",
  "Frontend Deployment", "Backend Deployment", "MongoDB Atlas", "Render Deployment"
];

mernTopics.forEach(topic => {
  mernSubTopicData[topic] = generateContent(topic, "MERN Full Stack");
});
