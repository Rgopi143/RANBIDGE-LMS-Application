import { SubTopicContent } from "./subTopicContent";

export const backendSubTopicData: Record<string, SubTopicContent> = {};

// Helper function to generate standardized Backend content
const generateContent = (title: string, category: string): SubTopicContent => ({
  description: `Detailed overview of ${title} in the ${category} module.`,
  keyPoints: [
    `Understand the fundamental concepts of ${title}.`,
    `Learn how to apply ${title} in backend development scenarios.`,
    `Explore best practices and performance optimizations for ${title}.`
  ],
  sections: [
    {
      heading: `Introduction to ${title}`,
      content: `This section provides a comprehensive introduction to ${title}. You will learn the theoretical foundations, basic syntax, and structural rules that govern its usage in modern backend development.`
    },
    {
      heading: "Core Concepts & Implementation",
      points: [
        `Key principle 1: Setup and Initialization for ${title}`,
        `Key principle 2: Syntax and Structural patterns`,
        `Key principle 3: Integration with other backend technologies`
      ]
    },
    {
      heading: "Best Practices",
      content: `When working with ${title}, it is crucial to follow industry-standard best practices to ensure code maintainability, performance, and security.`
    }
  ]
});

const backendTopics = [
  // Intro
  "Introduction to Web Development", "Frontend vs Backend", "Client-Server Architecture", "How Websites Work", "Introduction to APIs", "Introduction to Node.js", "Features of Node.js", "Installing Node.js & npm", "Working with VS Code", "Node.js Environment Setup", "Installing Development Tools", "Running First Node.js Program", "Creating Basic Applications",
  // JS Fundamentals
  "Variables and Data Types", "Operators", "Conditional Statements", "Loops", "Functions", "Arrays and Objects", "String Methods", "JSON", "ES6 Features", "Arrow Functions", "Template Literals", "Destructuring", "Spread & Rest Operators", "Logic Building Programs", "Mini JavaScript Tasks", "Backend Utility Programs",
  // Advanced JS
  "Callbacks", "Promises", "Async/Await", "Event Loop", "Closures", "Higher Order Functions", "Modules in JavaScript", "Import & Export", "Error Handling", "Exception Handling", "Asynchronous Programming Tasks", "Promise-Based Applications", "Error Handling Examples",
  // Node Core
  "Node.js Architecture", "REPL", "npm Package Manager", "Package.json", "Core Modules", "File System Module", "Path Module", "OS Module", "HTTP Module", "Events Module", "Streams & Buffers", "File Handling Applications", "HTTP Server Creation", "Node.js Utility Projects",
  // Express
  "Introduction to Express.js", "Installing Express", "Creating Express Server", "Routing", "Route Parameters", "Middleware", "Request & Response Handling", "Static Files", "Express Router", "Error Handling Middleware", "Express Server Development", "Routing Applications", "Middleware Implementation",
  // REST API
  "Introduction to REST APIs", "CRUD Operations", "API Methods (GET, POST, PUT, DELETE)", "API Testing", "JSON Handling", "REST Architecture", "Status Codes", "API Validation", "CRUD API Development", "API Testing using Postman", "JSON-Based Applications",
  // MongoDB
  "Introduction to Databases", "SQL vs NoSQL", "MongoDB Installation", "MongoDB Compass", "Collections & Documents", "CRUD Operations in MongoDB", "MongoDB Queries", "Database Creation", "MongoDB CRUD Operations", "Data Management Applications",
  // Mongoose
  "Introduction to Mongoose", "Connecting MongoDB with Node.js", "Schemas", "Models", "Validation", "Relationships", "Query Methods", "Database Integration Projects", "Schema-Based Applications", "User Management System",
  // Auth
  "User Authentication", "JWT Authentication", "bcrypt Password Encryption", "Login & Registration System", "Protected Routes", "Authorization", "Role-Based Access", "Environment Variables", "Secure Login System", "Authentication APIs", "Protected Backend Applications",
  // File & Email
  "File Upload using Multer", "Image Upload APIs", "Cloud Storage Basics", "Email Services", "Nodemailer", "OTP Verification System", "File Upload Projects", "Email Sending Applications", "OTP Authentication System",
  // Real-Time
  "Introduction to Socket.io", "Real-Time Communication", "WebSockets", "Live Notifications", "Chat Applications", "Real-Time Chat Application", "Live Notification System",
  // Security
  "API Security", "CORS", "Helmet", "Rate Limiting", "Data Validation", "Error Logging", "Backend Best Practices", "Secure API Development", "Backend Optimization",
  // Git
  "Introduction to Git", "Git Commands", "GitHub Basics", "Repository Management", "Branching", "Version Control", "GitHub Project Hosting", "Team Collaboration Practice",
  // Deployment
  "Deployment Basics", "Hosting Backend Applications", "Render Deployment", "Vercel Basics", "Environment Configuration", "PM2 Basics", "Live Project Deployment", "Production Hosting",
  // Projects
  "Student Management API", "Authentication System", "Blog Backend", "Notes Management API", "E-Commerce Backend System", "Hospital Management Backend", "Employee Management System", "Online Course Backend", "Real-Time Chat Backend"
];

backendTopics.forEach(topic => {
  backendSubTopicData[topic] = generateContent(topic, "Backend Development");
});
