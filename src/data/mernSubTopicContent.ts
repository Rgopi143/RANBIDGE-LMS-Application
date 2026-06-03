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

const internetBasics = {
  description:
    "The Internet is a global network of interconnected computers and devices that communicate with each other using standard communication protocols. It enables users to access information, communicate, share resources, perform online transactions, and use web-based services from anywhere in the world.",

  sections: [

    {
      heading: "Introduction to Internet",

      content:
        "The Internet is the world's largest computer network connecting millions of devices globally. It allows users to exchange information and access various online services such as websites, emails, social media, cloud applications, and streaming platforms."
    },

    {
      heading: "Definition of Internet",

      content:
        "The Internet is a worldwide network of networks that uses the TCP/IP protocol suite to connect computers and enable communication and data exchange."
    },

    {
      heading: "History of Internet",

      points: [

        "The Internet originated from ARPANET in 1969.",

        "ARPANET was developed by the United States Department of Defense.",

        "TCP/IP protocol became the standard communication protocol in 1983.",

        "The World Wide Web (WWW) was introduced by Tim Berners-Lee in 1989.",

        "Internet usage rapidly expanded in the 1990s."
      ]
    },

    {
      heading: "Evolution of Internet",

      points: [

        "ARPANET Era",

        "TCP/IP Adoption",

        "World Wide Web Introduction",

        "Commercial Internet Growth",

        "Mobile Internet",

        "Cloud Computing",

        "Internet of Things (IoT)"
      ]
    },

    {
      heading: "How the Internet Works",

      content:
        "The Internet works by transferring data between devices through a network of routers, servers, and communication channels using TCP/IP protocols.",

      points: [

        "User enters a website URL.",

        "DNS converts domain name into IP address.",

        "Browser sends request to server.",

        "Server processes request.",

        "Response is returned to browser.",

        "Browser displays webpage."
      ]
    },

    {
      heading: "Components of Internet",

      subSections: [

        {
          title: "Client",

          description:
            "A client is a device or application that requests services from servers.",

          examples: [
            "Web Browser",
            "Mobile Application",
            "Desktop Application"
          ]
        },

        {
          title: "Server",

          description:
            "A server provides resources, services, and data requested by clients."
        },

        {
          title: "Router",

          description:
            "A router directs data packets between networks."
        },

        {
          title: "ISP",

          description:
            "Internet Service Provider provides Internet connectivity to users."
        }
      ]
    },

    {
      heading: "Internet Protocols",

      content:
        "Protocols are standardized rules that govern communication over the Internet.",

      points: [

        "TCP (Transmission Control Protocol)",

        "IP (Internet Protocol)",

        "HTTP (HyperText Transfer Protocol)",

        "HTTPS (Secure HTTP)",

        "FTP (File Transfer Protocol)",

        "SMTP (Simple Mail Transfer Protocol)",

        "DNS (Domain Name System)"
      ]
    },

    {
      heading: "TCP/IP Model",

      points: [

        "Application Layer",

        "Transport Layer",

        "Internet Layer",

        "Network Access Layer"
      ]
    },

    {
      heading: "IP Address",

      content:
        "An IP Address is a unique numerical identifier assigned to every device connected to the Internet.",

      subSections: [

        {
          title: "IPv4",

          description:
            "32-bit addressing system."
        },

        {
          title: "IPv6",

          description:
            "128-bit addressing system designed to overcome IPv4 limitations."
        }
      ]
    },

    {
      heading: "Domain Name System (DNS)",

      content:
        "DNS translates human-readable domain names into machine-readable IP addresses.",

      examples: [

        "google.com",

        "github.com",

        "openai.com"
      ]
    },

    {
      heading: "World Wide Web (WWW)",

      content:
        "The World Wide Web is a collection of interconnected web pages and resources accessible through the Internet."
    },

    {
      heading: "Internet Services",

      points: [

        "Web Browsing",

        "Email Communication",

        "Online Banking",

        "Cloud Storage",

        "Video Streaming",

        "Social Media",

        "Online Shopping"
      ]
    },

    {
      heading: "Advantages of Internet",

      points: [

        "Instant communication",

        "Access to information",

        "Online education",

        "Global connectivity",

        "Remote work",

        "Digital business growth",

        "Cloud services access"
      ]
    },

    {
      heading: "Disadvantages of Internet",

      points: [

        "Cybersecurity threats",

        "Data privacy issues",

        "Online fraud",

        "Internet addiction",

        "Misinformation"
      ]
    },

    {
      heading: "Internet Security",

      points: [

        "Strong Passwords",

        "Two-Factor Authentication",

        "Firewalls",

        "Antivirus Software",

        "HTTPS Encryption",

        "Secure Browsing"
      ]
    },

    {
      heading: "Internet in Web Development",

      content:
        "The Internet is the foundation of web development because websites, APIs, databases, cloud servers, and applications communicate through Internet technologies."
    },

    {
      heading: "Modern Internet Technologies",

      points: [

        "Cloud Computing",

        "5G Networks",

        "Internet of Things (IoT)",

        "Artificial Intelligence",

        "Edge Computing",

        "Blockchain"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "When a user opens an online shopping website, the browser sends a request through the Internet to the server. The server retrieves product information from the database and returns the data to the browser for display."
    }
  ],

  keyPoints: [

    "Internet is a global network of connected devices.",

    "TCP/IP is the foundation of Internet communication.",

    "DNS converts domain names into IP addresses.",

    "The World Wide Web operates on the Internet.",

    "The Internet enables communication, information sharing, and online services."
  ],

  codeExamples: [

    {
      title: "Check IP Address in Node.js",

      code: `
const os = require('os');

console.log(os.networkInterfaces());`
    },

    {
      title: "Simple HTTP Request",

      code: `
const https = require('https');

https.get('https://example.com', (res) => {

    console.log(res.statusCode);

});`
    }
  ]
};

mernSubTopicData["Internet Basics"] = internetBasics;

const worldWideWeb = {
  description:
    "The World Wide Web (WWW) is a system of interconnected web pages, websites, documents, images, videos, and other resources that are accessed through the Internet using web browsers. The WWW is one of the most widely used services of the Internet and enables users to access information from anywhere in the world.",

  sections: [

    {
      heading: "Introduction to WWW",

      content:
        "The World Wide Web is a collection of linked web pages and resources that can be accessed through the Internet. It allows users to browse websites, search for information, communicate online, and use web applications."
    },

    {
      heading: "Definition of WWW",

      content:
        "The World Wide Web (WWW) is an information system that enables documents and web resources to be accessed over the Internet using web browsers."
    },

    {
      heading: "History of WWW",

      points: [

        "Invented by Tim Berners-Lee in 1989.",

        "Developed at CERN (European Organization for Nuclear Research).",

        "First website was launched in 1991.",

        "Created to facilitate information sharing among researchers.",

        "Became publicly available and rapidly expanded worldwide."
      ]
    },

    {
      heading: "Need for WWW",

      points: [

        "Easy access to information",

        "Global communication",

        "Online services",

        "Digital learning",

        "Business and e-commerce",

        "Research and knowledge sharing"
      ]
    },

    {
      heading: "How WWW Works",

      points: [

        "User enters a website URL in browser.",

        "Browser sends request to DNS server.",

        "DNS converts domain name into IP address.",

        "Request reaches web server.",

        "Web server processes request.",

        "Server sends webpage files back to browser.",

        "Browser renders webpage for user."
      ]
    },

    {
      heading: "Components of WWW",

      subSections: [

        {
          title: "Web Browser",

          description:
            "Software used to access and display web pages.",

          examples: [
            "Google Chrome",
            "Mozilla Firefox",
            "Microsoft Edge",
            "Safari"
          ]
        },

        {
          title: "Web Server",

          description:
            "A server that stores and delivers web pages to users."
        },

        {
          title: "Website",

          description:
            "A collection of related web pages under a domain name."
        },

        {
          title: "Web Page",

          description:
            "A single document displayed in a web browser."
        }
      ]
    },

    {
      heading: "Technologies Behind WWW",

      points: [

        "HTML (Structure)",

        "CSS (Styling)",

        "JavaScript (Interactivity)",

        "HTTP/HTTPS (Communication)",

        "URLs (Resource Identification)"
      ]
    },

    {
      heading: "URL (Uniform Resource Locator)",

      content:
        "A URL is the address of a resource available on the World Wide Web.",

      example:
        "https://www.example.com"
    },

    {
      heading: "HTTP and HTTPS",

      subSections: [

        {
          title: "HTTP",

          description:
            "HyperText Transfer Protocol used for communication between browser and server."
        },

        {
          title: "HTTPS",

          description:
            "Secure version of HTTP that encrypts communication."
        }
      ]
    },

    {
      heading: "Features of WWW",

      points: [

        "Hyperlink Navigation",

        "Multimedia Support",

        "Global Accessibility",

        "Interactive Applications",

        "Easy Information Sharing",

        "Cross-Platform Access"
      ]
    },

    {
      heading: "Advantages of WWW",

      points: [

        "Quick access to information",

        "Online communication",

        "E-learning support",

        "Global connectivity",

        "Business opportunities",

        "Entertainment services"
      ]
    },

    {
      heading: "Disadvantages of WWW",

      points: [

        "Cybersecurity risks",

        "Fake information",

        "Privacy concerns",

        "Internet dependency",

        "Online scams"
      ]
    },

    {
      heading: "WWW vs Internet",

      subSections: [

        {
          title: "Internet",

          points: [
            "Global network of computers",
            "Infrastructure for communication",
            "Supports many services"
          ]
        },

        {
          title: "WWW",

          points: [
            "Service running on Internet",
            "Collection of websites and web pages",
            "Uses HTTP and browsers"
          ]
        }
      ]
    },

    {
      heading: "Applications of WWW",

      points: [

        "Online Shopping",

        "Social Media",

        "Online Banking",

        "Educational Platforms",

        "Cloud Applications",

        "Government Services"
      ]
    },

    {
      heading: "WWW in Web Development",

      content:
        "Web developers create websites and web applications that operate on the World Wide Web using technologies such as HTML, CSS, JavaScript, Node.js, databases, and APIs."
    },

    {
      heading: "Future of WWW",

      points: [

        "Web 3.0",

        "Artificial Intelligence Integration",

        "Virtual Reality Websites",

        "Decentralized Applications",

        "Advanced Cloud Services"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "When a user visits an online learning website, the browser requests the webpage through the WWW, retrieves resources from the web server, and displays them for learning activities."
    }
  ],

  keyPoints: [

    "WWW stands for World Wide Web.",

    "Invented by Tim Berners-Lee in 1989.",

    "WWW is a service that runs on the Internet.",

    "Web browsers are used to access WWW resources.",

    "HTML, CSS, JavaScript, and HTTP are core WWW technologies."
  ],

  codeExamples: [

    {
      title: "Basic HTML Web Page",

      code: `
<!DOCTYPE html>

<html>

<head>

    <title>My First Web Page</title>

</head>

<body>

    <h1>Welcome to World Wide Web</h1>

    <p>This page is accessible through WWW.</p>

</body>

</html>`
    },

    {
      title: "Sample URL",

      code: `
https://www.example.com`
    }
  ]
};

mernSubTopicData["World Wide Web (WWW)"] = worldWideWeb;

const webBrowsersAndRendering = {
  description:
    "A web browser is a software application used to access, retrieve, interpret, and display web pages from the World Wide Web. Rendering is the process by which a browser converts HTML, CSS, and JavaScript code into a visual webpage that users can see and interact with.",

  sections: [

    {
      heading: "Introduction to Web Browsers",

      content:
        "Web browsers act as intermediaries between users and web servers. They send requests to servers, receive web resources, and render them into visually understandable web pages."
    },

    {
      heading: "Definition of Web Browser",

      content:
        "A web browser is a software application that allows users to access, navigate, and interact with websites and web applications on the Internet."
    },

    {
      heading: "Popular Web Browsers",

      points: [

        "Google Chrome",

        "Mozilla Firefox",

        "Microsoft Edge",

        "Safari",

        "Opera",

        "Brave"
      ]
    },

    {
      heading: "Functions of Web Browsers",

      points: [

        "Access web pages",

        "Display website content",

        "Execute JavaScript",

        "Manage cookies",

        "Store cache",

        "Provide security features",

        "Support multimedia content"
      ]
    },

    {
      heading: "Main Components of a Browser",

      subSections: [

        {
          title: "User Interface",

          description:
            "Contains address bar, navigation buttons, tabs, bookmarks, and menus."
        },

        {
          title: "Browser Engine",

          description:
            "Coordinates communication between user interface and rendering engine."
        },

        {
          title: "Rendering Engine",

          description:
            "Responsible for displaying webpage content."
        },

        {
          title: "JavaScript Engine",

          description:
            "Executes JavaScript code in the browser."
        },

        {
          title: "Networking Module",

          description:
            "Handles HTTP and HTTPS communication."
        },

        {
          title: "Storage Module",

          description:
            "Manages local storage, session storage, and cookies."
        }
      ]
    },

    {
      heading: "What is Rendering?",

      content:
        "Rendering is the process of converting website source code into a graphical webpage that users can view and interact with."
    },

    {
      heading: "Rendering Process",

      points: [

        "Browser receives HTML document.",

        "HTML is parsed to create DOM.",

        "CSS files are loaded and parsed.",

        "CSSOM is created.",

        "DOM and CSSOM combine to form Render Tree.",

        "Layout calculation is performed.",

        "Painting process draws elements on screen.",

        "JavaScript executes and updates page if required."
      ]
    },

    {
      heading: "Document Object Model (DOM)",

      content:
        "DOM is a tree-like representation of HTML elements created by the browser after parsing HTML."
    },

    {
      heading: "CSS Object Model (CSSOM)",

      content:
        "CSSOM is a tree structure containing all CSS styling information for webpage elements."
    },

    {
      heading: "Render Tree",

      content:
        "Render Tree combines DOM and CSSOM to determine how webpage elements should appear on screen."
    },

    {
      heading: "Layout Phase",

      content:
        "The browser calculates the size and position of every visible element on the page."
    },

    {
      heading: "Painting Phase",

      content:
        "The browser draws text, images, colors, borders, and other visual elements onto the screen."
    },

    {
      heading: "Reflow",

      content:
        "Reflow occurs when the browser recalculates layout due to changes in page structure or dimensions."
    },

    {
      heading: "Repaint",

      content:
        "Repaint occurs when visual styles change without affecting layout."
    },

    {
      heading: "Browser Rendering Engines",

      subSections: [

        {
          title: "Blink",

          description:
            "Used in Google Chrome, Microsoft Edge, Opera, and Brave."
        },

        {
          title: "Gecko",

          description:
            "Used in Mozilla Firefox."
        },

        {
          title: "WebKit",

          description:
            "Used in Safari."
        }
      ]
    },

    {
      heading: "JavaScript Rendering",

      content:
        "JavaScript can dynamically modify the DOM, causing browsers to update rendered content."
    },

    {
      heading: "Factors Affecting Rendering Performance",

      points: [

        "Large DOM structures",

        "Heavy JavaScript execution",

        "Complex CSS selectors",

        "Large images",

        "Frequent reflows and repaints"
      ]
    },

    {
      heading: "Browser Caching",

      content:
        "Browsers store frequently accessed resources locally to improve loading speed and reduce network requests."
    },

    {
      heading: "Advantages of Modern Browsers",

      points: [

        "Fast rendering",

        "Security features",

        "Extension support",

        "Developer tools",

        "Cross-platform compatibility"
      ]
    },

    {
      heading: "Web Browsers in Web Development",

      content:
        "Web developers use browsers to test, debug, optimize, and ensure compatibility of websites across different platforms."
    },

    {
      heading: "Real-Time Example",

      content:
        "When a user opens a shopping website, the browser downloads HTML, CSS, JavaScript, and images, processes them through the rendering engine, and displays the complete webpage."
    }
  ],

  keyPoints: [

    "Web browsers display websites and web applications.",

    "Rendering converts code into visible webpages.",

    "DOM and CSSOM create the Render Tree.",

    "Layout and Painting generate final webpage output.",

    "Modern browsers use advanced rendering engines."
  ],

  codeExamples: [

    {
      title: "Simple HTML Page",

      code: `
<!DOCTYPE html>

<html>

<head>

    <title>Browser Rendering</title>

</head>

<body>

    <h1>Hello Browser</h1>

    <p>This content will be rendered by the browser.</p>

</body>

</html>`
    },

    {
      title: "JavaScript DOM Update",

      code: `
document.getElementById("title").innerText =
"Content Updated by Browser Rendering";`
    }
  ]
};

mernSubTopicData["Web Browsers and Rendering"] = webBrowsersAndRendering;

const clientServerArchitecture = {
  description:
    "Client-Server Architecture is a networking model in which clients request services, resources, or data from servers, and servers process those requests and return responses. It is the foundation of modern web applications, mobile applications, cloud computing systems, and enterprise software.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Almost every website and web application follows the client-server architecture model. The client acts as the requester, while the server acts as the provider of resources and services."
    },

    {
      heading: "Definition",

      content:
        "Client-Server Architecture is a distributed computing model where a client sends requests to a server, and the server processes those requests and sends back appropriate responses."
    },

    {
      heading: "Need for Client-Server Architecture",

      points: [

        "Resource sharing",

        "Centralized data management",

        "Efficient communication",

        "Scalable application development",

        "Improved security",

        "Easy maintenance"
      ]
    },

    {
      heading: "Components of Client-Server Architecture",

      subSections: [

        {
          title: "Client",

          description:
            "A client is a device or software application that requests services or resources from a server.",

          examples: [
            "Web Browser",
            "Mobile Application",
            "Desktop Application"
          ]
        },

        {
          title: "Server",

          description:
            "A server is a computer or software system that processes requests and provides services or resources to clients."
        },

        {
          title: "Database",

          description:
            "A database stores application data and provides information requested by the server."
        },

        {
          title: "Network",

          description:
            "The communication medium that connects clients and servers."
        }
      ]
    },

    {
      heading: "How Client-Server Architecture Works",

      points: [

        "User opens a web browser.",

        "Browser acts as a client.",

        "Client sends HTTP request to server.",

        "Server receives and processes request.",

        "Server communicates with database if required.",

        "Database returns requested data.",

        "Server generates response.",

        "Response is sent back to client.",

        "Client displays information to user."
      ]
    },

    {
      heading: "Client Request Example",

      content:
        "When a user searches for a product on an e-commerce website, the browser sends a request to the server. The server retrieves product details from the database and sends them back to the browser."
    },

    {
      heading: "Types of Client-Server Architecture",

      subSections: [

        {
          title: "Two-Tier Architecture",

          description:
            "Client directly communicates with database server."
        },

        {
          title: "Three-Tier Architecture",

          description:
            "Includes client layer, application server layer, and database layer."
        },

        {
          title: "Multi-Tier Architecture",

          description:
            "Uses multiple layers for security, scalability, and maintainability."
        }
      ]
    },

    {
      heading: "Features of Client-Server Architecture",

      points: [

        "Centralized management",

        "Resource sharing",

        "Network communication",

        "Scalable architecture",

        "Data consistency",

        "Security control"
      ]
    },

    {
      heading: "Advantages",

      points: [

        "Centralized administration",

        "Improved security",

        "Easy maintenance",

        "Efficient resource management",

        "Supports multiple users",

        "Scalable applications"
      ]
    },

    {
      heading: "Disadvantages",

      points: [

        "Server failure affects clients",

        "Network dependency",

        "Higher setup cost",

        "Server overload possibility",

        "Maintenance complexity"
      ]
    },

    {
      heading: "Protocols Used",

      points: [

        "HTTP",

        "HTTPS",

        "TCP/IP",

        "FTP",

        "WebSocket"
      ]
    },

    {
      heading: "Client Responsibilities",

      points: [

        "Sending requests",

        "Displaying data",

        "User interaction",

        "Client-side validation"
      ]
    },

    {
      heading: "Server Responsibilities",

      points: [

        "Processing requests",

        "Authentication",

        "Business logic execution",

        "Database operations",

        "Sending responses"
      ]
    },

    {
      heading: "Client-Server Architecture in Web Development",

      content:
        "In web development, browsers act as clients and backend technologies such as Node.js, Express.js, Java Spring Boot, or Python Django act as servers."
    },

    {
      heading: "Real-Time Applications",

      points: [

        "Social Media Platforms",

        "Banking Systems",

        "E-Commerce Websites",

        "Learning Management Systems",

        "Online Ticket Booking Systems",

        "Food Delivery Applications"
      ]
    },

    {
      heading: "Modern Client-Server Systems",

      points: [

        "Cloud Computing",

        "Microservices",

        "REST APIs",

        "Mobile Backends",

        "Real-Time Applications"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "When a user logs into an online banking website, the browser sends login credentials to the server. The server verifies them from the database and returns a success or failure response."
    }
  ],

  keyPoints: [

    "Client requests services from server.",

    "Server processes requests and sends responses.",

    "Database stores application data.",

    "HTTP and HTTPS are commonly used protocols.",

    "Client-server architecture is the foundation of web applications."
  ],

  codeExamples: [

    {
      title: "Simple Client-Server Example Using Node.js",

      code: `
const http = require('http');

const server = http.createServer((req, res) => {

    res.write('Response from Server');

    res.end();
});

server.listen(3000, () => {

    console.log('Server Running on Port 3000');
});`
    },

    {
      title: "Client Access URL",

      code: `
http://localhost:3000`
    }
  ]
};

mernSubTopicData["Client–Server Architecture"] = clientServerArchitecture;

const frontendAndBackend = {
  description:
    "Frontend and Backend are the two major components of web development. The frontend is responsible for the visual appearance and user interaction of a website, while the backend manages business logic, databases, authentication, APIs, and server-side processing. Both work together to create complete web applications.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Every modern website and web application consists of a frontend and a backend. Users interact with the frontend, while the backend processes requests, manages data, and provides services."
    },

    {
      heading: "What is Frontend?",

      content:
        "Frontend is the client-side part of a web application that users directly see and interact with through a web browser."
    },

    {
      heading: "Frontend Responsibilities",

      points: [

        "Designing web pages",

        "Creating user interfaces",

        "Handling user interactions",

        "Displaying data",

        "Form validation",

        "Responsive design",

        "Improving user experience"
      ]
    },

    {
      heading: "Frontend Technologies",

      points: [

        "HTML",

        "CSS",

        "JavaScript",

        "React.js",

        "Angular",

        "Vue.js",

        "Bootstrap",

        "Tailwind CSS"
      ]
    },

    {
      heading: "Features of Frontend",

      points: [

        "Interactive user interface",

        "Responsive design",

        "Client-side execution",

        "Fast user interaction",

        "Visual presentation"
      ]
    },

    {
      heading: "What is Backend?",

      content:
        "Backend is the server-side part of a web application responsible for processing requests, handling business logic, managing databases, and providing APIs."
    },

    {
      heading: "Backend Responsibilities",

      points: [

        "Processing client requests",

        "Database management",

        "Authentication and authorization",

        "Business logic implementation",

        "API development",

        "Data storage and retrieval",

        "Security management"
      ]
    },

    {
      heading: "Backend Technologies",

      points: [

        "Node.js",

        "Express.js",

        "Java",

        "Spring Boot",

        "Python",

        "Django",

        "PHP",

        "MongoDB",

        "MySQL"
      ]
    },

    {
      heading: "Features of Backend",

      points: [

        "Server-side execution",

        "Database connectivity",

        "Security implementation",

        "API management",

        "Business logic processing"
      ]
    },

    {
      heading: "How Frontend and Backend Work Together",

      points: [

        "User interacts with frontend.",

        "Frontend sends request to backend.",

        "Backend processes request.",

        "Backend accesses database if needed.",

        "Database returns data.",

        "Backend sends response.",

        "Frontend displays result."
      ]
    },

    {
      heading: "Frontend Architecture",

      content:
        "Frontend architecture focuses on designing, rendering, state management, and user interactions within the browser."
    },

    {
      heading: "Backend Architecture",

      content:
        "Backend architecture focuses on servers, APIs, databases, authentication, and business logic."
    },

    {
      heading: "Advantages of Frontend",

      points: [

        "Improves user experience",

        "Interactive applications",

        "Attractive designs",

        "Responsive interfaces"
      ]
    },

    {
      heading: "Advantages of Backend",

      points: [

        "Secure data processing",

        "Centralized management",

        "Scalable systems",

        "Efficient data storage"
      ]
    },

    {
      heading: "Frontend Challenges",

      points: [

        "Browser compatibility",

        "Responsive design issues",

        "Performance optimization",

        "User experience consistency"
      ]
    },

    {
      heading: "Backend Challenges",

      points: [

        "Database optimization",

        "Security threats",

        "Server scalability",

        "Performance management"
      ]
    },

    {
      heading: "Frontend vs Backend",

      subSections: [

        {
          title: "Frontend",

          points: [

            "Runs in browser",

            "Visible to users",

            "Handles UI",

            "Uses HTML, CSS, JavaScript"
          ]
        },

        {
          title: "Backend",

          points: [

            "Runs on server",

            "Not directly visible",

            "Handles logic and data",

            "Uses Node.js, databases"
          ]
        }
      ]
    },

    {
      heading: "Full Stack Development",

      content:
        "A Full Stack Developer works with both frontend and backend technologies to build complete applications."
    },

    {
      heading: "Real-Time Example",

      content:
        "In an online shopping application, the frontend displays products, shopping carts, and payment forms, while the backend manages products, user accounts, orders, payments, and databases."
    }
  ],

  keyPoints: [

    "Frontend is the client-side part of a website.",

    "Backend is the server-side part of a website.",

    "Frontend focuses on user interface and experience.",

    "Backend focuses on data processing and business logic.",

    "Both frontend and backend are required for complete web applications."
  ],

  codeExamples: [

    {
      title: "Frontend Example (HTML)",

      code: `
<!DOCTYPE html>

<html>

<body>

    <h1>Welcome to Frontend</h1>

    <button>Click Me</button>

</body>

</html>`
    },

    {
      title: "Backend Example (Node.js)",

      code: `
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Welcome to Backend');
});

app.listen(3000);`
    }
  ]
};

mernSubTopicData["Frontend vs Backend"] = frontendAndBackend;

const fullStackDevelopment = {
  description:
    "Full Stack Development is the process of developing both the frontend (client-side) and backend (server-side) parts of a web application. A Full Stack Developer has knowledge of user interface design, server-side programming, databases, APIs, deployment, and application management.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Modern web applications require both frontend and backend technologies. Full Stack Development combines these technologies to build complete, end-to-end applications."
    },

    {
      heading: "Definition",

      content:
        "Full Stack Development refers to the development of both the frontend and backend components of a web application, including databases, APIs, and deployment."
    },

    {
      heading: "Who is a Full Stack Developer?",

      content:
        "A Full Stack Developer is a software developer who can work on frontend, backend, databases, APIs, version control, and deployment processes."
    },

    {
      heading: "Components of Full Stack Development",

      points: [

        "Frontend Development",

        "Backend Development",

        "Database Management",

        "API Development",

        "Version Control",

        "Deployment and Hosting"
      ]
    },

    {
      heading: "Frontend Development",

      content:
        "Frontend development focuses on designing and building the user interface that users directly interact with."
    },

    {
      heading: "Frontend Technologies",

      points: [

        "HTML",

        "CSS",

        "JavaScript",

        "React.js",

        "Angular",

        "Vue.js",

        "Bootstrap",

        "Tailwind CSS"
      ]
    },

    {
      heading: "Backend Development",

      content:
        "Backend development handles server-side logic, request processing, authentication, APIs, and database interactions."
    },

    {
      heading: "Backend Technologies",

      points: [

        "Node.js",

        "Express.js",

        "Java",

        "Spring Boot",

        "Python",

        "Django",

        "PHP"
      ]
    },

    {
      heading: "Database Technologies",

      points: [

        "MongoDB",

        "MySQL",

        "PostgreSQL",

        "Oracle Database",

        "SQL Server"
      ]
    },

    {
      heading: "API Development",

      content:
        "APIs enable communication between frontend applications and backend services."
    },

    {
      heading: "Version Control",

      content:
        "Version control systems help developers track and manage source code changes."
    },

    {
      heading: "Tools for Version Control",

      points: [

        "Git",

        "GitHub",

        "GitLab",

        "Bitbucket"
      ]
    },

    {
      heading: "Deployment and Hosting",

      content:
        "Deployment makes applications accessible to users through servers and cloud platforms."
    },

    {
      heading: "Popular Hosting Platforms",

      points: [

        "Render",

        "Vercel",

        "Netlify",

        "AWS",

        "Azure",

        "Google Cloud"
      ]
    },

    {
      heading: "How Full Stack Development Works",

      points: [

        "User interacts with frontend.",

        "Frontend sends request to backend.",

        "Backend processes request.",

        "Database stores or retrieves data.",

        "Backend sends response.",

        "Frontend displays result to user."
      ]
    },

    {
      heading: "Popular Full Stack Technology Stacks",

      subSections: [

        {
          title: "MERN Stack",

          description:
            "MongoDB, Express.js, React.js, Node.js"
        },

        {
          title: "MEAN Stack",

          description:
            "MongoDB, Express.js, Angular, Node.js"
        },

        {
          title: "Java Full Stack",

          description:
            "HTML, CSS, JavaScript, Java, Spring Boot, MySQL"
        },

        {
          title: ".NET Full Stack",

          description:
            "HTML, CSS, JavaScript, ASP.NET, SQL Server"
        }
      ]
    },

    {
      heading: "Skills Required for Full Stack Development",

      points: [

        "HTML and CSS",

        "JavaScript",

        "Frontend Frameworks",

        "Backend Development",

        "Database Management",

        "REST APIs",

        "Git and GitHub",

        "Deployment"
      ]
    },

    {
      heading: "Advantages of Full Stack Development",

      points: [

        "Complete application development",

        "Better project understanding",

        "Higher career opportunities",

        "Cost-effective development",

        "Faster development process"
      ]
    },

    {
      heading: "Disadvantages of Full Stack Development",

      points: [

        "Large learning curve",

        "Requires knowledge of multiple technologies",

        "Continuous learning needed"
      ]
    },

    {
      heading: "Career Opportunities",

      points: [

        "Full Stack Developer",

        "Frontend Developer",

        "Backend Developer",

        "Web Developer",

        "Software Engineer",

        "Application Developer"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "An e-commerce website uses React.js for frontend, Node.js and Express.js for backend, MongoDB for database storage, and APIs for communication between all components."
    }
  ],

  keyPoints: [

    "Full Stack Development includes frontend and backend.",

    "Full Stack Developers build complete applications.",

    "Databases and APIs are important components.",

    "MERN and MEAN are popular full stack stacks.",

    "Full Stack Development provides broad career opportunities."
  ],

  codeExamples: [

    {
      title: "Frontend Example",

      code: `
<h1>Welcome to Full Stack Development</h1>

<button>Submit</button>`
    },

    {
      title: "Backend Example",

      code: `
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Backend Running');
});

app.listen(3000);`
    },

    {
      title: "Database Example",

      code: `
db.users.insertOne({

    username: "user1",

    role: "student"
});`
    }
  ]
};

mernSubTopicData["Full Stack Development"] = fullStackDevelopment;

const staticAndDynamicWebsites = {
  description:
    "Websites can be classified into Static Websites and Dynamic Websites based on how their content is created and displayed. Static websites show fixed content to all users, while dynamic websites generate content dynamically based on user requests, database data, and business logic.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Every website available on the internet is either static or dynamic. Understanding the difference between them helps developers choose the right approach for web application development."
    },

    {
      heading: "What is a Static Website?",

      content:
        "A static website consists of fixed web pages where the content remains the same for every user. The pages are pre-built using HTML, CSS, and JavaScript and are delivered directly to the browser."
    },

    {
      heading: "Characteristics of Static Websites",

      points: [

        "Fixed content",

        "Same content for all users",

        "No database required",

        "Fast loading speed",

        "Simple development",

        "Low hosting cost"
      ]
    },

    {
      heading: "Technologies Used in Static Websites",

      points: [

        "HTML",

        "CSS",

        "JavaScript",

        "Bootstrap"
      ]
    },

    {
      heading: "How Static Websites Work",

      points: [

        "User requests a webpage.",

        "Web server locates HTML file.",

        "Server sends file directly to browser.",

        "Browser renders webpage."
      ]
    },

    {
      heading: "Advantages of Static Websites",

      points: [

        "Simple to create",

        "Fast performance",

        "Low maintenance",

        "Better security",

        "Cost-effective hosting"
      ]
    },

    {
      heading: "Disadvantages of Static Websites",

      points: [

        "Content updates require manual changes",

        "Limited functionality",

        "No user-specific content",

        "Not suitable for large applications"
      ]
    },

    {
      heading: "Examples of Static Websites",

      points: [

        "Portfolio Websites",

        "Company Information Sites",

        "Personal Resume Websites",

        "Landing Pages"
      ]
    },

    {
      heading: "What is a Dynamic Website?",

      content:
        "A dynamic website generates content in real time based on user requests, database information, and server-side processing."
    },

    {
      heading: "Characteristics of Dynamic Websites",

      points: [

        "Content changes dynamically",

        "Database integration",

        "User-specific content",

        "Interactive functionality",

        "Server-side processing",

        "Real-time updates"
      ]
    },

    {
      heading: "Technologies Used in Dynamic Websites",

      points: [

        "Node.js",

        "Express.js",

        "PHP",

        "Java",

        "Python",

        "MongoDB",

        "MySQL"
      ]
    },

    {
      heading: "How Dynamic Websites Work",

      points: [

        "User sends request.",

        "Server processes request.",

        "Database retrieves data.",

        "Server generates dynamic content.",

        "Response sent to browser.",

        "Browser displays generated webpage."
      ]
    },

    {
      heading: "Advantages of Dynamic Websites",

      points: [

        "Interactive features",

        "Personalized content",

        "Database support",

        "Easy content management",

        "Scalable applications"
      ]
    },

    {
      heading: "Disadvantages of Dynamic Websites",

      points: [

        "Complex development",

        "Higher hosting cost",

        "Requires database management",

        "Can be slower than static websites"
      ]
    },

    {
      heading: "Examples of Dynamic Websites",

      points: [

        "E-Commerce Websites",

        "Social Media Platforms",

        "Online Banking Systems",

        "Learning Management Systems",

        "News Portals"
      ]
    },

    {
      heading: "Static Website Architecture",

      content:
        "The browser directly receives HTML, CSS, and JavaScript files from the web server without database interaction."
    },

    {
      heading: "Dynamic Website Architecture",

      content:
        "The browser communicates with the server, which interacts with databases and generates content dynamically."
    },

    {
      heading: "Static vs Dynamic Websites",

      subSections: [

        {
          title: "Static Websites",

          points: [

            "Fixed content",

            "No database",

            "Fast loading",

            "Simple architecture",

            "Low maintenance cost"
          ]
        },

        {
          title: "Dynamic Websites",

          points: [

            "Changing content",

            "Database integration",

            "User interaction",

            "Complex architecture",

            "High scalability"
          ]
        }
      ]
    },

    {
      heading: "When to Use Static Websites",

      points: [

        "Portfolio websites",

        "Landing pages",

        "Company profiles",

        "Documentation sites"
      ]
    },

    {
      heading: "When to Use Dynamic Websites",

      points: [

        "Online stores",

        "Social media applications",

        "Banking systems",

        "Educational platforms",

        "Real-time applications"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "A personal portfolio website displaying fixed information is a static website. An online shopping website where products, orders, and user information change dynamically is a dynamic website."
    }
  ],

  keyPoints: [

    "Static websites contain fixed content.",

    "Dynamic websites generate content dynamically.",

    "Static websites are faster and simpler.",

    "Dynamic websites support databases and user interaction.",

    "Modern web applications are mostly dynamic websites."
  ],

  codeExamples: [

    {
      title: "Static Website Example",

      code: `
<!DOCTYPE html>

<html>

<body>

    <h1>Welcome to My Website</h1>

    <p>This content remains the same for all users.</p>

</body>

</html>`
    },

    {
      title: "Dynamic Website Example (Node.js)",

      code: `
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Dynamic Content Generated by Server');
});

app.listen(3000);`
    }
  ]
};

mernSubTopicData["Static vs Dynamic Websites"] = staticAndDynamicWebsites;

const developmentTools = {
  description:
    "Development Tools are software applications and utilities used by developers to design, write, test, debug, manage, and deploy software applications. In web and backend development, these tools improve productivity, simplify coding tasks, automate workflows, and help build high-quality applications efficiently.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Modern software development requires various tools for coding, testing, version control, database management, API testing, debugging, and deployment. These tools help developers create applications faster and more efficiently."
    },

    {
      heading: "Definition",

      content:
        "Development tools are software programs that assist developers throughout the software development life cycle, from coding and testing to deployment and maintenance."
    },

    {
      heading: "Why Development Tools are Important",

      points: [

        "Increase productivity",

        "Reduce development time",

        "Improve code quality",

        "Simplify debugging",

        "Automate repetitive tasks",

        "Support team collaboration"
      ]
    },

    {
      heading: "Categories of Development Tools",

      points: [

        "Code Editors",

        "Version Control Tools",

        "Database Tools",

        "API Testing Tools",

        "Package Managers",

        "Deployment Tools",

        "Debugging Tools"
      ]
    },

    {
      heading: "Code Editors and IDEs",

      content:
        "Code editors and IDEs are used for writing, editing, and managing source code."
    },

    {
      heading: "Popular Code Editors",

      points: [

        "Visual Studio Code (VS Code)",

        "Sublime Text",

        "Atom",

        "Notepad++"
      ]
    },

    {
      heading: "Popular IDEs",

      points: [

        "IntelliJ IDEA",

        "Eclipse",

        "NetBeans",

        "WebStorm"
      ]
    },

    {
      heading: "Visual Studio Code (VS Code)",

      content:
        "VS Code is the most popular editor for web development because of its lightweight design, extension support, debugging features, and integrated terminal."
    },

    {
      heading: "Version Control Tools",

      content:
        "Version control systems help track source code changes and enable team collaboration."
    },

    {
      heading: "Popular Version Control Tools",

      points: [

        "Git",

        "GitHub",

        "GitLab",

        "Bitbucket"
      ]
    },

    {
      heading: "Database Tools",

      content:
        "Database tools help developers create, manage, query, and monitor databases."
    },

    {
      heading: "Popular Database Tools",

      points: [

        "MongoDB Compass",

        "MySQL Workbench",

        "pgAdmin",

        "DBeaver"
      ]
    },

    {
      heading: "API Testing Tools",

      content:
        "API testing tools allow developers to send requests and verify API responses."
    },

    {
      heading: "Popular API Testing Tools",

      points: [

        "Postman",

        "Thunder Client",

        "Insomnia"
      ]
    },

    {
      heading: "Package Managers",

      content:
        "Package managers install and manage libraries and dependencies used in projects."
    },

    {
      heading: "Popular Package Managers",

      points: [

        "npm",

        "Yarn",

        "pnpm"
      ]
    },

    {
      heading: "Debugging Tools",

      content:
        "Debugging tools help identify and fix errors in applications."
    },

    {
      heading: "Popular Debugging Tools",

      points: [

        "VS Code Debugger",

        "Chrome Developer Tools",

        "Node.js Inspector"
      ]
    },

    {
      heading: "Deployment Tools",

      content:
        "Deployment tools help publish applications to production environments."
    },

    {
      heading: "Popular Deployment Tools",

      points: [

        "Render",

        "Vercel",

        "Netlify",

        "Docker",

        "AWS"
      ]
    },

    {
      heading: "Development Tools for Node.js",

      points: [

        "Node.js",

        "npm",

        "VS Code",

        "Postman",

        "MongoDB Compass",

        "Git",

        "GitHub"
      ]
    },

    {
      heading: "Advantages of Development Tools",

      points: [

        "Faster development",

        "Better collaboration",

        "Improved code quality",

        "Efficient testing",

        "Easy deployment",

        "Automated workflows"
      ]
    },

    {
      heading: "Challenges",

      points: [

        "Learning curve",

        "Tool compatibility issues",

        "Frequent updates",

        "Configuration complexity"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "A backend developer uses VS Code for coding, GitHub for version control, Postman for API testing, MongoDB Compass for database management, and Render for deployment."
    }
  ],

  keyPoints: [

    "Development tools improve productivity and code quality.",

    "VS Code is a popular code editor.",

    "Git and GitHub are used for version control.",

    "Postman is used for API testing.",

    "Development tools support the entire software development process."
  ],

  codeExamples: [

    {
      title: "Check Node.js Version",

      code: `
node -v`
    },

    {
      title: "Check npm Version",

      code: `
npm -v`
    },

    {
      title: "Initialize Git Repository",

      code: `
git init`
    },

    {
      title: "Create Node.js Project",

      code: `
npm init -y`
    }
  ]
};

mernSubTopicData["Development Tools"] = developmentTools;

const vscodeSetup = {
  description:
    "Visual Studio Code (VS Code) Setup is the process of installing, configuring, and preparing VS Code for web and backend development. VS Code is one of the most popular code editors because it provides syntax highlighting, IntelliSense, debugging tools, extension support, integrated terminal, and Git integration.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Before starting web or backend development, developers need a proper coding environment. VS Code provides a lightweight and powerful development environment for writing, testing, and debugging code."
    },

    {
      heading: "What is VS Code?",

      content:
        "Visual Studio Code (VS Code) is a free source-code editor developed by Microsoft that supports multiple programming languages and development frameworks."
    },

    {
      heading: "Why Use VS Code?",

      points: [

        "Free and Open Source",

        "Lightweight and Fast",

        "Cross Platform Support",

        "Integrated Terminal",

        "Extension Marketplace",

        "Built-in Debugging",

        "Git Integration"
      ]
    },

    {
      heading: "System Requirements",

      points: [

        "Windows 10/11",

        "Linux",

        "macOS",

        "Minimum 4GB RAM",

        "Internet Connection"
      ]
    },

    {
      heading: "Steps to Install VS Code",

      points: [

        "Visit official VS Code website.",

        "Download VS Code installer.",

        "Run setup file.",

        "Accept license agreement.",

        "Select installation location.",

        "Enable additional tasks.",

        "Complete installation."
      ]
    },

    {
      heading: "Important Installation Options",

      points: [

        "Add to PATH",

        "Register Code as Editor",

        "Create Desktop Icon",

        "Add Open with Code Option"
      ]
    },

    {
      heading: "VS Code User Interface",

      subSections: [

        {
          title: "Activity Bar",

          description:
            "Contains Explorer, Search, Source Control, Run, and Extensions."
        },

        {
          title: "Editor Area",

          description:
            "Main area used for writing and editing code."
        },

        {
          title: "Side Bar",

          description:
            "Displays files, folders, and project structure."
        },

        {
          title: "Status Bar",

          description:
            "Shows project information and notifications."
        },

        {
          title: "Integrated Terminal",

          description:
            "Allows execution of commands without leaving VS Code."
        }
      ]
    },

    {
      heading: "Useful Extensions for Web Development",

      points: [

        "Prettier",

        "ESLint",

        "Live Server",

        "JavaScript Snippets",

        "HTML CSS Support",

        "Auto Rename Tag"
      ]
    },

    {
      heading: "Useful Extensions for Node.js",

      points: [

        "Node.js Extension Pack",

        "npm IntelliSense",

        "REST Client",

        "Thunder Client",

        "MongoDB for VS Code"
      ]
    },

    {
      heading: "Integrated Terminal",

      content:
        "VS Code provides a built-in terminal to execute Node.js, Git, npm, and system commands."
    },

    {
      heading: "Opening Terminal",

      points: [

        "Terminal → New Terminal",

        "Shortcut: Ctrl + `"
      ]
    },

    {
      heading: "Creating a Project Folder",

      points: [

        "Create new folder.",

        "Open folder in VS Code.",

        "Create project files.",

        "Start coding."
      ]
    },

    {
      heading: "Configuring Node.js in VS Code",

      points: [

        "Install Node.js.",

        "Open terminal.",

        "Verify node version.",

        "Verify npm version."
      ]
    },

    {
      heading: "Debugging in VS Code",

      content:
        "VS Code provides debugging tools that help identify and fix errors efficiently."
    },

    {
      heading: "Git Integration",

      content:
        "VS Code includes built-in Git support for version control and source code management."
    },

    {
      heading: "Advantages of VS Code",

      points: [

        "Fast performance",

        "Large extension ecosystem",

        "Excellent debugging support",

        "Easy project management",

        "Cross-platform compatibility"
      ]
    },

    {
      heading: "Common VS Code Shortcuts",

      points: [

        "Ctrl + S → Save File",

        "Ctrl + P → Open File",

        "Ctrl + Shift + P → Command Palette",

        "Ctrl + / → Comment Line",

        "Ctrl + ` → Open Terminal"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "A Node.js developer uses VS Code for coding APIs, npm for dependency management, GitHub for version control, and the integrated terminal for executing server commands."
    }
  ],

  keyPoints: [

    "VS Code is a popular code editor.",

    "Provides integrated terminal and debugging.",

    "Supports extensions for web development.",

    "Works with Node.js, Git, and databases.",

    "Improves development productivity."
  ],

  codeExamples: [

    {
      title: "Check Node.js Version",

      code: `
node -v`
    },

    {
      title: "Check npm Version",

      code: `
npm -v`
    },

    {
      title: "Create Node.js Project",

      code: `
npm init -y`
    },

    {
      title: "Run JavaScript File",

      code: `
node app.js`
    }
  ]
};

mernSubTopicData["VS Code Setup"] = vscodeSetup;

const browserDeveloperTools = {
  description:
    "Browser Developer Tools (DevTools) are built-in tools available in modern web browsers that help developers inspect, debug, test, analyze, and optimize websites and web applications. They provide detailed information about HTML, CSS, JavaScript, network requests, storage, and performance.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Browser Developer Tools are essential for web developers because they allow real-time inspection and modification of web pages without changing the actual source code."
    },

    {
      heading: "Definition",

      content:
        "Browser Developer Tools are a collection of debugging and analysis utilities integrated into web browsers for examining and troubleshooting web applications."
    },

    {
      heading: "Why Developer Tools are Important",

      points: [

        "Debug HTML and CSS",

        "Test JavaScript code",

        "Analyze network requests",

        "Monitor website performance",

        "Inspect browser storage",

        "Optimize web applications"
      ]
    },

    {
      heading: "Popular Browsers with DevTools",

      points: [

        "Google Chrome",

        "Microsoft Edge",

        "Mozilla Firefox",

        "Safari"
      ]
    },

    {
      heading: "How to Open Developer Tools",

      points: [

        "F12 Key",

        "Ctrl + Shift + I",

        "Right Click → Inspect"
      ]
    },

    {
      heading: "Main Components of Developer Tools",

      points: [

        "Elements Panel",

        "Console Panel",

        "Sources Panel",

        "Network Panel",

        "Application Panel",

        "Performance Panel",

        "Memory Panel"
      ]
    },

    {
      heading: "Elements Panel",

      content:
        "The Elements panel allows developers to inspect and modify HTML and CSS in real time.",

      features: [

        "View HTML structure",

        "Edit HTML elements",

        "Modify CSS styles",

        "Inspect page layout"
      ]
    },

    {
      heading: "Console Panel",

      content:
        "The Console panel displays JavaScript output, warnings, and errors.",

      features: [

        "Run JavaScript commands",

        "View console logs",

        "Debug application errors",

        "Monitor variables"
      ]
    },

    {
      heading: "Sources Panel",

      content:
        "The Sources panel allows developers to inspect and debug JavaScript source files."
    },

    {
      heading: "Features of Sources Panel",

      points: [

        "Set breakpoints",

        "Step through code",

        "Debug JavaScript",

        "Monitor variable values"
      ]
    },

    {
      heading: "Network Panel",

      content:
        "The Network panel monitors requests and responses between browser and server."
    },

    {
      heading: "Information Available in Network Panel",

      points: [

        "HTTP Requests",

        "API Calls",

        "Response Time",

        "Status Codes",

        "Headers",

        "Payload Data"
      ]
    },

    {
      heading: "Application Panel",

      content:
        "The Application panel manages browser storage and application-related data."
    },

    {
      heading: "Storage Types",

      points: [

        "Cookies",

        "Local Storage",

        "Session Storage",

        "IndexedDB"
      ]
    },

    {
      heading: "Performance Panel",

      content:
        "The Performance panel analyzes website speed and rendering performance."
    },

    {
      heading: "Performance Metrics",

      points: [

        "Page Load Time",

        "Rendering Performance",

        "CPU Usage",

        "Frame Rate"
      ]
    },

    {
      heading: "Memory Panel",

      content:
        "The Memory panel helps detect memory leaks and optimize application memory usage."
    },

    {
      heading: "Common Uses of DevTools",

      points: [

        "Debugging websites",

        "Testing APIs",

        "Inspecting CSS",

        "Optimizing performance",

        "Monitoring network traffic",

        "Checking storage data"
      ]
    },

    {
      heading: "Advantages of Developer Tools",

      points: [

        "Real-time debugging",

        "Performance analysis",

        "Easy troubleshooting",

        "Improved development efficiency",

        "Built directly into browser"
      ]
    },

    {
      heading: "Developer Tools in Frontend Development",

      content:
        "Frontend developers use DevTools to inspect HTML, test CSS changes, debug JavaScript, and optimize user interfaces."
    },

    {
      heading: "Developer Tools in Backend Development",

      content:
        "Backend developers use DevTools to monitor API requests, check response data, verify status codes, and troubleshoot server communication."
    },

    {
      heading: "Real-Time Example",

      content:
        "When an API fails to return data, developers use the Network panel to inspect the request, verify the status code, and identify the source of the error."
    }
  ],

  keyPoints: [

    "Developer Tools are built into modern browsers.",

    "Used for debugging HTML, CSS, and JavaScript.",

    "Network panel helps inspect API requests.",

    "Console panel displays errors and logs.",

    "Essential for web development and troubleshooting."
  ],

  codeExamples: [

    {
      title: "Console Example",

      code: `
console.log("Hello Developer Tools");

console.error("Something went wrong");

console.warn("Warning Message");`
    },

    {
      title: "Inspecting Local Storage",

      code: `
localStorage.setItem("username", "developer");

console.log(

    localStorage.getItem("username")
);`
    },

    {
      title: "Simple API Request",

      code: `
fetch("https://api.example.com/users")

.then(response => response.json())

.then(data => console.log(data));`
    }
  ]
};

mernSubTopicData["Browser Developer Tools"] = browserDeveloperTools;

const htmlOverview = {
  description:
    "HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages. It provides the basic building blocks of websites by defining elements such as headings, paragraphs, images, links, tables, forms, and multimedia content. Every webpage on the World Wide Web is built using HTML.",

  sections: [

    {
      heading: "Introduction to HTML",

      content:
        "HTML is the foundation of web development. It is used to structure content on web pages and works together with CSS for styling and JavaScript for interactivity."
    },

    {
      heading: "Definition",

      content:
        "HTML stands for HyperText Markup Language. It is a markup language used to describe the structure and content of web pages."
    },

    {
      heading: "What Does HTML Stand For?",

      subSections: [

        {
          title: "HyperText",

          description:
            "Text that contains links to other web pages or resources."
        },

        {
          title: "Markup",

          description:
            "Special tags used to define webpage elements."
        },

        {
          title: "Language",

          description:
            "A set of rules used to create web documents."
        }
      ]
    },

    {
      heading: "History of HTML",

      points: [

        "Developed by Tim Berners-Lee in 1991.",

        "Created for sharing scientific documents.",

        "HTML evolved through multiple versions.",

        "HTML5 is the latest major version."
      ]
    },

    {
      heading: "Why HTML is Important",

      points: [

        "Creates webpage structure",

        "Displays content in browsers",

        "Supports multimedia",

        "Provides hyperlinks",

        "Works with CSS and JavaScript",

        "Foundation of all websites"
      ]
    },

    {
      heading: "Features of HTML",

      points: [

        "Simple and easy to learn",

        "Platform independent",

        "Supports hyperlinks",

        "Supports multimedia",

        "Compatible with all browsers",

        "Works with CSS and JavaScript"
      ]
    },

    {
      heading: "HTML Document Structure",

      content:
        "Every HTML document follows a standard structure containing declarations, head section, and body section."
    },

    {
      heading: "Main Parts of HTML Document",

      subSections: [

        {
          title: "<!DOCTYPE html>",

          description:
            "Defines the document type and HTML version."
        },

        {
          title: "<html>",

          description:
            "Root element of an HTML document."
        },

        {
          title: "<head>",

          description:
            "Contains metadata, title, styles, and scripts."
        },

        {
          title: "<title>",

          description:
            "Defines webpage title displayed in browser tab."
        },

        {
          title: "<body>",

          description:
            "Contains visible webpage content."
        }
      ]
    },

    {
      heading: "HTML Elements",

      content:
        "HTML elements are building blocks of webpages. They are defined using tags."
    },

    {
      heading: "Types of HTML Elements",

      points: [

        "Headings",

        "Paragraphs",

        "Links",

        "Images",

        "Lists",

        "Tables",

        "Forms",

        "Multimedia Elements"
      ]
    },

    {
      heading: "HTML Tags",

      content:
        "Tags are special keywords enclosed within angle brackets used to define webpage elements."
    },

    {
      heading: "HTML Attributes",

      content:
        "Attributes provide additional information about HTML elements."
    },

    {
      heading: "Common HTML Attributes",

      points: [

        "id",

        "class",

        "src",

        "href",

        "alt",

        "style"
      ]
    },

    {
      heading: "HTML Versions",

      points: [

        "HTML 1.0",

        "HTML 2.0",

        "HTML 3.2",

        "HTML 4.01",

        "XHTML",

        "HTML5"
      ]
    },

    {
      heading: "HTML5 Features",

      points: [

        "Semantic Elements",

        "Audio Support",

        "Video Support",

        "Canvas",

        "Local Storage",

        "Geolocation API"
      ]
    },

    {
      heading: "Advantages of HTML",

      points: [

        "Easy to learn",

        "Free and open standard",

        "Supported by all browsers",

        "SEO friendly",

        "Works across platforms"
      ]
    },

    {
      heading: "Limitations of HTML",

      points: [

        "Cannot create dynamic functionality alone",

        "Needs CSS for styling",

        "Needs JavaScript for interactivity",

        "Limited logic capabilities"
      ]
    },

    {
      heading: "HTML in Web Development",

      content:
        "HTML forms the structure of websites. CSS improves appearance, and JavaScript adds behavior and interactivity."
    },

    {
      heading: "Real-Time Example",

      content:
        "An online shopping website uses HTML to create product pages, navigation menus, forms, buttons, and content sections displayed to users."
    }
  ],

  keyPoints: [

    "HTML stands for HyperText Markup Language.",

    "HTML is the foundation of web development.",

    "HTML defines webpage structure.",

    "HTML works with CSS and JavaScript.",

    "HTML5 is the latest major version."
  ],

  codeExamples: [

    {
      title: "Basic HTML Document",

      code: `
<!DOCTYPE html>

<html>

<head>

    <title>My First Web Page</title>

</head>

<body>

    <h1>Welcome to HTML</h1>

    <p>This is a simple HTML page.</p>

</body>

</html>`
    },

    {
      title: "HTML Element Example",

      code: `
<h1>Main Heading</h1>

<p>This is a paragraph.</p>

<a href="https://example.com">
    Visit Website
</a>`
    }
  ]
};

mernSubTopicData["HTML Overview"] = htmlOverview;

const historyOfHTML = {
  description:
    "HTML (HyperText Markup Language) is the standard markup language used to create web pages. The history of HTML began with the invention of the World Wide Web and has evolved through several versions to support modern web applications, multimedia, and interactive content.",

  sections: [

    {
      heading: "Introduction",

      content:
        "HTML was created to enable the sharing of documents over the Internet. Over time, it evolved from a simple document-formatting language into the foundation of modern web development."
    },

    {
      heading: "Origin of HTML",

      content:
        "HTML was invented by Tim Berners-Lee, a scientist at CERN, in 1991. He created HTML along with the World Wide Web (WWW) to allow researchers to share and access documents easily through hyperlinks."
    },

    {
      heading: "Need for HTML",

      points: [

        "Share information across computers",

        "Create linked documents",

        "Access information through browsers",

        "Support global communication",

        "Develop websites and web applications"
      ]
    },

    {
      heading: "Timeline of HTML Evolution",

      points: [

        "1991 - HTML was introduced by Tim Berners-Lee",

        "1995 - HTML 2.0 became the first standard version",

        "1997 - HTML 3.2 introduced tables and scripting support",

        "1997 - HTML 4.0 added CSS support and improved structure",

        "1999 - HTML 4.01 became a widely adopted version",

        "2000 - XHTML introduced stricter markup rules",

        "2014 - HTML5 officially released",

        "Present - HTML5 is the standard version used worldwide"
      ]
    },

    {
      heading: "HTML 1.0 (1991)",

      content:
        "HTML 1.0 was the first version of HTML. It provided only basic document structure and simple text formatting.",

      features: [

        "Headings",

        "Paragraphs",

        "Hyperlinks",

        "Basic document structure"
      ]
    },

    {
      heading: "HTML 2.0 (1995)",

      content:
        "HTML 2.0 became the first official standard HTML specification.",

      features: [

        "Standardized HTML elements",

        "Forms support",

        "Improved interoperability",

        "Better browser compatibility"
      ]
    },

    {
      heading: "HTML 3.2 (1997)",

      content:
        "HTML 3.2 introduced more advanced webpage design features.",

      features: [

        "Tables",

        "Images",

        "Applets",

        "Enhanced formatting"
      ]
    },

    {
      heading: "HTML 4.0 (1997)",

      content:
        "HTML 4.0 focused on separating content from presentation and introduced support for CSS.",

      features: [

        "CSS integration",

        "Frames",

        "Improved forms",

        "Accessibility support",

        "Scripting improvements"
      ]
    },

    {
      heading: "HTML 4.01 (1999)",

      content:
        "HTML 4.01 fixed bugs and improved the HTML 4.0 specification.",

      features: [

        "Better standards compliance",

        "Improved browser support",

        "Enhanced accessibility"
      ]
    },

    {
      heading: "XHTML (2000)",

      content:
        "XHTML (Extensible HyperText Markup Language) combined HTML with XML rules, requiring stricter syntax.",

      features: [

        "Well-formed documents",

        "Strict tag closing",

        "Case-sensitive markup"
      ]
    },

    {
      heading: "HTML5 (2014)",

      content:
        "HTML5 is the latest major version of HTML and supports modern web applications, multimedia, and advanced browser features.",

      features: [

        "Semantic Elements",

        "Audio Support",

        "Video Support",

        "Canvas Graphics",

        "Local Storage",

        "Geolocation",

        "Drag and Drop",

        "Improved Forms"
      ]
    },

    {
      heading: "Why HTML5 Became Popular",

      points: [

        "Supports multimedia without plugins",

        "Mobile-friendly features",

        "Better performance",

        "Improved user experience",

        "Modern web application support"
      ]
    },

    {
      heading: "Contributors to HTML Development",

      points: [

        "Tim Berners-Lee",

        "CERN",

        "W3C (World Wide Web Consortium)",

        "WHATWG (Web Hypertext Application Technology Working Group)"
      ]
    },

    {
      heading: "Impact of HTML on Web Development",

      points: [

        "Foundation of websites",

        "Enabled global information sharing",

        "Supported e-commerce growth",

        "Powered modern web applications",

        "Created the modern Internet experience"
      ]
    },

    {
      heading: "Current State of HTML",

      content:
        "Today, HTML5 is used in almost every website and web application. It works together with CSS and JavaScript to build modern responsive websites."
    },

    {
      heading: "Future of HTML",

      points: [

        "Better browser capabilities",

        "Enhanced multimedia support",

        "Improved accessibility",

        "Advanced web application features",

        "Integration with emerging technologies"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "Modern platforms such as e-commerce websites, educational portals, social media applications, and streaming services all rely on HTML5 as their structural foundation."
    }
  ],

  keyPoints: [

    "HTML was invented by Tim Berners-Lee in 1991.",

    "HTML evolved through multiple versions.",

    "HTML5 is the latest major version.",

    "HTML forms the foundation of all websites.",

    "HTML works together with CSS and JavaScript."
  ],

  codeExamples: [

    {
      title: "HTML 1.0 Style Example",

      code: `
<html>

<body>

    <h1>Welcome</h1>

    <p>Basic HTML Document</p>

</body>

</html>`
    },

    {
      title: "HTML5 Example",

      code: `
<!DOCTYPE html>

<html>

<head>

    <title>HTML5 Page</title>

</head>

<body>

    <header>

        <h1>HTML5 Website</h1>

    </header>

    <main>

        <p>Modern HTML5 Content</p>

    </main>

</body>

</html>`
    }
  ]
};

mernSubTopicData["History of HTML"] = historyOfHTML;

const featuresOfHTML = {
  description:
    "HTML (HyperText Markup Language) provides various features that make it the foundation of web development. It helps developers create structured web pages, display multimedia content, connect documents through hyperlinks, and build modern websites that work across different devices and browsers.",

  sections: [

    {
      heading: "Introduction",

      content:
        "HTML is the standard markup language used to create web pages. Its features allow developers to structure content, create links, display media, and build user-friendly web applications."
    },

    {
      heading: "Simple and Easy to Learn",

      content:
        "HTML uses simple tags and syntax, making it one of the easiest languages for beginners to learn in web development."
    },

    {
      heading: "Platform Independent",

      content:
        "HTML documents can run on any operating system such as Windows, Linux, or macOS as long as a web browser is available."
    },

    {
      heading: "Browser Compatibility",

      content:
        "HTML is supported by all major web browsers including Chrome, Firefox, Edge, Safari, and Opera."
    },

    {
      heading: "Supports Hyperlinks",

      content:
        "HTML allows linking between web pages using hyperlinks, enabling easy navigation across websites and web resources."
    },

    {
      heading: "Supports Multimedia",

      content:
        "HTML supports the integration of multimedia elements such as images, audio, videos, animations, and graphics."
    },

    {
      heading: "Provides Structured Content",

      content:
        "HTML organizes webpage content using headings, paragraphs, sections, articles, and other structural elements."
    },

    {
      heading: "Supports Forms",

      content:
        "HTML provides form elements that allow users to enter and submit data through web pages."
    },

    {
      heading: "Integration with CSS",

      content:
        "HTML works with CSS to improve the appearance, layout, and design of web pages."
    },

    {
      heading: "Integration with JavaScript",

      content:
        "HTML works with JavaScript to add interactivity, dynamic content, and advanced functionality to web pages."
    },

    {
      heading: "Semantic Elements",

      content:
        "HTML5 introduced semantic elements that improve webpage structure, readability, accessibility, and SEO.",

      examples: [

        "<header>",

        "<nav>",

        "<section>",

        "<article>",

        "<footer>"
      ]
    },

    {
      heading: "SEO Friendly",

      content:
        "HTML provides proper document structure and semantic tags that help search engines understand webpage content."
    },

    {
      heading: "Supports Responsive Design",

      content:
        "HTML works with CSS frameworks and responsive techniques to create websites that adapt to different screen sizes."
    },

    {
      heading: "Open Standard",

      content:
        "HTML is an open standard maintained by W3C and WHATWG, making it freely available for everyone."
    },

    {
      heading: "Lightweight",

      content:
        "HTML files are lightweight and load quickly because they contain only structural information."
    },

    {
      heading: "Accessibility Support",

      content:
        "HTML provides features that make websites accessible to users with disabilities through screen readers and assistive technologies."
    },

    {
      heading: "Cross-Platform Support",

      content:
        "HTML webpages can be accessed from desktops, laptops, tablets, and mobile devices."
    },

    {
      heading: "Offline Storage Support",

      content:
        "HTML5 provides local storage features that allow web applications to store data in the browser."
    },

    {
      heading: "Geolocation Support",

      content:
        "HTML5 supports location-based services using browser geolocation APIs."
    },

    {
      heading: "Canvas and Graphics Support",

      content:
        "HTML5 includes the canvas element for drawing graphics, charts, games, and animations directly in the browser."
    },

    {
      heading: "Drag and Drop Support",

      content:
        "HTML5 provides built-in drag-and-drop functionality for interactive web applications."
    },

    {
      heading: "Advantages of HTML Features",

      points: [

        "Easy development",

        "Improved user experience",

        "Better SEO",

        "Multimedia integration",

        "Cross-browser support",

        "Responsive web design"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "An online learning platform uses HTML to create page structure, forms for registration, videos for tutorials, hyperlinks for navigation, and semantic elements for better accessibility and SEO."
    }
  ],

  keyPoints: [

    "HTML is easy to learn and use.",

    "Supports hyperlinks and multimedia.",

    "Works with CSS and JavaScript.",

    "HTML5 provides advanced web features.",

    "HTML is the foundation of every website."
  ],

  codeExamples: [

    {
      title: "Hyperlink Example",

      code: `
<a href="https://example.com">

    Visit Website

</a>`
    },

    {
      title: "Image Example",

      code: `
<img src="image.jpg"

     alt="Sample Image">`
    },

    {
      title: "HTML5 Semantic Elements",

      code: `
<header>

    Website Header

</header>

<nav>

    Navigation Menu

</nav>

<section>

    Main Content

</section>

<footer>

    Website Footer

</footer>`
    },

    {
      title: "Video Element",

      code: `
<video controls>

    <source src="video.mp4"
            type="video/mp4">

</video>`
    }
  ]
};

mernSubTopicData["Features of HTML"] = featuresOfHTML;

const htmlVersions = {
  description:
    "HTML (HyperText Markup Language) has evolved through several versions since its creation in 1991. Each version introduced new features, improved standards, better browser support, multimedia capabilities, and enhanced web development functionality. Understanding HTML versions helps developers appreciate how modern web technologies have developed over time.",

  sections: [

    {
      heading: "Introduction",

      content:
        "HTML has undergone continuous improvements to meet the growing needs of web development. From simple text documents to modern interactive web applications, each version contributed important features and capabilities."
    },

    {
      heading: "Why HTML Versions Were Introduced",

      points: [

        "Improve web page structure",

        "Support advanced features",

        "Enhance browser compatibility",

        "Add multimedia capabilities",

        "Improve accessibility",

        "Support modern web applications"
      ]
    },

    {
      heading: "HTML 1.0 (1991)",

      content:
        "HTML 1.0 was the first version of HTML introduced by Tim Berners-Lee. It provided only basic webpage structure and simple document formatting.",

      features: [

        "Basic text formatting",

        "Headings",

        "Paragraphs",

        "Hyperlinks",

        "Simple document structure"
      ],

      limitations: [

        "No tables",

        "No forms",

        "Very limited design capabilities"
      ]
    },

    {
      heading: "HTML 2.0 (1995)",

      content:
        "HTML 2.0 became the first official HTML standard recognized by the Internet Engineering Task Force (IETF).",

      features: [

        "Standardized HTML specification",

        "Forms support",

        "Improved interoperability",

        "Better browser compatibility"
      ],

      improvements: [

        "Data input forms",

        "User interaction support"
      ]
    },

    {
      heading: "HTML 3.2 (1997)",

      content:
        "HTML 3.2 introduced more advanced webpage design features and became widely adopted by browsers.",

      features: [

        "Tables",

        "Images",

        "Applets",

        "Text formatting",

        "Enhanced layout options"
      ],

      advantages: [

        "Better presentation",

        "Improved user experience"
      ]
    },

    {
      heading: "HTML 4.0 (1997)",

      content:
        "HTML 4.0 focused on separating content from presentation and introduced support for CSS and scripting.",

      features: [

        "CSS support",

        "Frames",

        "Scripting support",

        "Accessibility features",

        "Internationalization"
      ],

      improvements: [

        "Cleaner document structure",

        "Better design flexibility"
      ]
    },

    {
      heading: "HTML 4.01 (1999)",

      content:
        "HTML 4.01 was a revised version of HTML 4.0 that fixed errors and improved standards compliance.",

      features: [

        "Bug fixes",

        "Enhanced browser support",

        "Improved accessibility",

        "Better standards compliance"
      ]
    },

    {
      heading: "XHTML 1.0 (2000)",

      content:
        "XHTML (Extensible HyperText Markup Language) combined HTML with XML rules to create stricter and more structured documents.",

      features: [

        "Strict syntax rules",

        "Well-formed documents",

        "Case-sensitive tags",

        "Mandatory closing tags"
      ],

      advantages: [

        "Cleaner code",

        "Better compatibility with XML technologies"
      ]
    },

    {
      heading: "HTML5 (2014)",

      content:
        "HTML5 is the latest major version of HTML and is designed to support modern web applications, multimedia, mobile devices, and advanced browser capabilities.",

      features: [

        "Semantic Elements",

        "Audio Support",

        "Video Support",

        "Canvas Graphics",

        "Local Storage",

        "Session Storage",

        "Geolocation",

        "Drag and Drop",

        "Improved Forms",

        "Offline Applications"
      ],

      advantages: [

        "Mobile friendly",

        "Plugin-free multimedia",

        "Better performance",

        "Modern web application support"
      ]
    },

    {
      heading: "HTML Version Comparison",

      subSections: [

        {
          title: "HTML 1.0",

          points: [
            "Basic structure",
            "Text and links only"
          ]
        },

        {
          title: "HTML 2.0",

          points: [
            "Forms support",
            "First official standard"
          ]
        },

        {
          title: "HTML 3.2",

          points: [
            "Tables",
            "Images",
            "Improved design"
          ]
        },

        {
          title: "HTML 4.0",

          points: [
            "CSS support",
            "Frames",
            "Accessibility"
          ]
        },

        {
          title: "XHTML",

          points: [
            "XML-based rules",
            "Strict syntax"
          ]
        },

        {
          title: "HTML5",

          points: [
            "Multimedia",
            "Semantic tags",
            "Modern web applications"
          ]
        }
      ]
    },

    {
      heading: "Importance of HTML5",

      points: [

        "Industry standard",

        "Supports responsive websites",

        "Works on mobile devices",

        "Provides modern APIs",

        "Improves SEO",

        "Supports rich multimedia"
      ]
    },

    {
      heading: "Organizations Maintaining HTML",

      points: [

        "W3C (World Wide Web Consortium)",

        "WHATWG (Web Hypertext Application Technology Working Group)"
      ]
    },

    {
      heading: "Future of HTML",

      points: [

        "Better browser integration",

        "Enhanced web APIs",

        "Improved accessibility",

        "Support for emerging technologies"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "Modern applications such as social media platforms, e-commerce websites, online learning systems, and streaming services use HTML5 because it provides multimedia support, responsive design capabilities, and modern browser features."
    }
  ],

  keyPoints: [

    "HTML was introduced in 1991.",

    "HTML evolved through multiple versions.",

    "HTML 2.0 was the first official standard.",

    "HTML 4.0 introduced CSS support.",

    "HTML5 is the latest major version used in modern web development."
  ],

  codeExamples: [

    {
      title: "HTML 1.0 Example",

      code: `
<html>

<body>

    <h1>Welcome</h1>

    <p>Basic HTML Page</p>

</body>

</html>`
    },

    {
      title: "HTML 4.0 Example",

      code: `
<html>

<head>

    <style>

        h1 {

            color: blue;

        }

    </style>

</head>

<body>

    <h1>HTML 4.0 Page</h1>

</body>

</html>`
    },

    {
      title: "HTML5 Example",

      code: `
<!DOCTYPE html>

<html>

<body>

    <header>

        Website Header

    </header>

    <section>

        Main Content

    </section>

    <footer>

        Footer Content

    </footer>

</body>

</html>`
    }
  ]
};

mernSubTopicData["HTML Versions"] = htmlVersions;

const htmlPageStructure = {
  description:
    "An HTML Page Structure defines the basic layout and organization of a web page. Every HTML document follows a standard structure that helps browsers understand, interpret, and display webpage content correctly. A well-structured HTML page improves readability, maintainability, accessibility, and SEO.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Every webpage starts with a standard HTML document structure. This structure contains essential elements such as DOCTYPE declaration, html tag, head section, and body section."
    },

    {
      heading: "Definition",

      content:
        "HTML Page Structure is the arrangement of HTML elements that define the layout and content organization of a web page."
    },

    {
      heading: "Basic HTML Page Structure",

      content:
        "A standard HTML document consists of the following major components:",

      points: [

        "<!DOCTYPE html>",

        "<html>",

        "<head>",

        "<title>",

        "<body>"
      ]
    },

    {
      heading: "DOCTYPE Declaration",

      content:
        "The <!DOCTYPE html> declaration informs the browser that the document uses HTML5.",

      purpose: [

        "Defines document type",

        "Enables standards mode",

        "Ensures proper browser rendering"
      ]
    },

    {
      heading: "HTML Element",

      content:
        "The <html> element is the root element of an HTML document and contains all other HTML elements.",

      purpose: [

        "Represents entire webpage",

        "Contains head and body sections"
      ]
    },

    {
      heading: "Head Section",

      content:
        "The <head> section contains metadata and information about the webpage that is not directly displayed on the page.",

      commonElements: [

        "<title>",

        "<meta>",

        "<link>",

        "<style>",

        "<script>"
      ]
    },

    {
      heading: "Title Element",

      content:
        "The <title> element specifies the title displayed in the browser tab.",

      importance: [

        "Browser tab identification",

        "SEO optimization",

        "Bookmark naming"
      ]
    },

    {
      heading: "Meta Tags",

      content:
        "Meta tags provide information about the webpage such as character encoding, author, keywords, and viewport settings.",

      examples: [

        "Charset",

        "Description",

        "Keywords",

        "Viewport"
      ]
    },

    {
      heading: "Link Element",

      content:
        "The <link> tag connects external resources such as CSS files to the webpage."
    },

    {
      heading: "Script Element",

      content:
        "The <script> tag includes JavaScript code or external JavaScript files."
    },

    {
      heading: "Body Section",

      content:
        "The <body> section contains all visible webpage content displayed to users."
    },

    {
      heading: "Common Body Elements",

      points: [

        "Headings",

        "Paragraphs",

        "Images",

        "Links",

        "Lists",

        "Tables",

        "Forms",

        "Videos"
      ]
    },

    {
      heading: "HTML5 Semantic Structure",

      content:
        "HTML5 introduced semantic elements that clearly define different parts of a webpage.",

      semanticElements: [

        "<header>",

        "<nav>",

        "<main>",

        "<section>",

        "<article>",

        "<aside>",

        "<footer>"
      ]
    },

    {
      heading: "Header Element",

      content:
        "Represents introductory content such as logos, headings, and navigation menus."
    },

    {
      heading: "Navigation Element",

      content:
        "The <nav> element contains navigation links used to move between pages."
    },

    {
      heading: "Main Element",

      content:
        "The <main> element contains the primary content of the webpage."
    },

    {
      heading: "Section Element",

      content:
        "The <section> element groups related content into logical sections."
    },

    {
      heading: "Article Element",

      content:
        "The <article> element represents independent content such as blog posts or news articles."
    },

    {
      heading: "Aside Element",

      content:
        "The <aside> element contains supplementary content such as advertisements or sidebars."
    },

    {
      heading: "Footer Element",

      content:
        "The <footer> element contains copyright information, contact details, and additional links."
    },

    {
      heading: "Benefits of Proper HTML Structure",

      points: [

        "Improved readability",

        "Better SEO",

        "Enhanced accessibility",

        "Easy maintenance",

        "Consistent design"
      ]
    },

    {
      heading: "Common Mistakes",

      points: [

        "Missing DOCTYPE",

        "Improper nesting of tags",

        "Missing closing tags",

        "Using non-semantic elements excessively"
      ]
    },

    {
      heading: "HTML Structure and SEO",

      content:
        "Search engines use page structure and semantic elements to understand webpage content and improve search rankings."
    },

    {
      heading: "Real-Time Example",

      content:
        "An e-commerce website uses a header for branding, navigation for product categories, main content for products, sections for offers, and a footer for contact information."
    }
  ],

  keyPoints: [

    "Every HTML page follows a standard structure.",

    "DOCTYPE declares the HTML version.",

    "Head section contains metadata.",

    "Body section contains visible content.",

    "HTML5 semantic elements improve structure and SEO."
  ],

  codeExamples: [

    {
      title: "Basic HTML Page Structure",

      code: `
<!DOCTYPE html>

<html>

<head>

    <title>My Web Page</title>

</head>

<body>

    <h1>Welcome to HTML</h1>

    <p>This is a webpage.</p>

</body>

</html>`
    },

    {
      title: "HTML5 Semantic Structure",

      code: `
<!DOCTYPE html>

<html>

<body>

    <header>

        Website Header

    </header>

    <nav>

        Navigation Menu

    </nav>

    <main>

        Main Content

    </main>

    <footer>

        Copyright 2026

    </footer>

</body>

</html>`
    }
  ]
};

mernSubTopicData["HTML Page Structure"] = htmlPageStructure;

const htmlSyntax = {
  description:
    "HTML Syntax refers to the rules and structure used to write HTML code correctly. HTML uses tags, elements, attributes, and values to define the structure and content of a web page. Understanding HTML syntax is essential because browsers interpret web pages based on these rules.",

  sections: [

    {
      heading: "Introduction",

      content:
        "HTML syntax defines how HTML elements are written and organized within a web page. Following proper syntax ensures that browsers display web pages correctly and consistently."
    },

    {
      heading: "Definition",

      content:
        "HTML Syntax is a set of rules that specifies how HTML tags, elements, attributes, and content should be written in a document."
    },

    {
      heading: "Basic Structure of HTML Syntax",

      content:
        "Most HTML elements consist of an opening tag, content, and a closing tag.",

      format: [

        "Opening Tag",

        "Content",

        "Closing Tag"
      ]
    },

    {
      heading: "HTML Tags",

      content:
        "Tags are special keywords enclosed within angle brackets used to define HTML elements."
    },

    {
      heading: "Opening Tag",

      content:
        "An opening tag marks the beginning of an HTML element.",

      example:
        "<p>"
    },

    {
      heading: "Closing Tag",

      content:
        "A closing tag marks the end of an HTML element and contains a forward slash.",

      example:
        "</p>"
    },

    {
      heading: "HTML Elements",

      content:
        "An HTML element consists of an opening tag, content, and a closing tag."
    },

    {
      heading: "HTML Attributes",

      content:
        "Attributes provide additional information about HTML elements and are written inside opening tags."
    },

    {
      heading: "Attribute Structure",

      content:
        "Attributes are written as name-value pairs.",

      format:
        "attribute='value'"
    },

    {
      heading: "Common HTML Attributes",

      points: [

        "id",

        "class",

        "href",

        "src",

        "alt",

        "style",

        "title"
      ]
    },

    {
      heading: "Nested Elements",

      content:
        "HTML elements can be placed inside other elements. This is called nesting."
    },

    {
      heading: "Proper Nesting",

      content:
        "Elements should be closed in the reverse order in which they were opened."
    },

    {
      heading: "Empty Elements",

      content:
        "Some HTML elements do not require closing tags because they do not contain content.",

      examples: [

        "<br>",

        "<hr>",

        "<img>",

        "<input>"
      ]
    },

    {
      heading: "Case Sensitivity",

      content:
        "HTML tags are not case-sensitive, but lowercase tags are recommended for consistency and readability."
    },

    {
      heading: "Comments in HTML",

      content:
        "Comments are used to add notes within HTML code and are ignored by browsers."
    },

    {
      heading: "Whitespace in HTML",

      content:
        "Browsers ignore extra spaces, tabs, and line breaks in HTML documents."
    },

    {
      heading: "Quotation Marks",

      content:
        "Attribute values should be enclosed within quotation marks."
    },

    {
      heading: "HTML Document Rules",

      points: [

        "Begin with <!DOCTYPE html>",

        "Use html as root element",

        "Include head section",

        "Include body section",

        "Close tags properly",

        "Use proper nesting"
      ]
    },

    {
      heading: "Common Syntax Errors",

      points: [

        "Missing closing tags",

        "Improper nesting",

        "Missing quotation marks",

        "Misspelled tags",

        "Missing required attributes"
      ]
    },

    {
      heading: "Benefits of Proper HTML Syntax",

      points: [

        "Correct browser rendering",

        "Better readability",

        "Improved maintenance",

        "SEO optimization",

        "Accessibility support"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Use lowercase tags",

        "Indent code properly",

        "Close all tags",

        "Use meaningful attribute names",

        "Follow semantic structure"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "When creating a registration page, developers use proper HTML syntax to define forms, input fields, buttons, and validation attributes to ensure the page functions correctly."
    }
  ],

  keyPoints: [

    "HTML syntax defines how HTML code is written.",

    "Most elements use opening and closing tags.",

    "Attributes provide additional information.",

    "Proper nesting is important.",

    "Correct syntax ensures proper webpage rendering."
  ],

  codeExamples: [

    {
      title: "Basic HTML Element",

      code: `
<p>

    Welcome to HTML

</p>`
    },

    {
      title: "HTML Element with Attribute",

      code: `
<a href="https://example.com">

    Visit Website

</a>`
    },

    {
      title: "Nested Elements",

      code: `
<div>

    <h1>Heading</h1>

    <p>Paragraph Content</p>

</div>`
    },

    {
      title: "HTML Comment",

      code: `
<!-- This is a comment -->`
    },

    {
      title: "Complete HTML Syntax Example",

      code: `
<!DOCTYPE html>

<html>

<head>

    <title>HTML Syntax</title>

</head>

<body>

    <h1>Welcome</h1>

    <p>Learning HTML Syntax</p>

</body>

</html>`
    }
  ]
};

mernSubTopicData["HTML Syntax"] = htmlSyntax;

const htmlComments = {
  description:
    "HTML Comments are special notes or messages written inside HTML code that are ignored by web browsers and are not displayed on the webpage. Comments help developers explain code, document functionality, organize sections, and temporarily disable HTML elements during development and testing.",

  sections: [

    {
      heading: "Introduction",

      content:
        "While developing websites, developers often need to add explanations, reminders, or notes within the code. HTML comments provide a way to include such information without affecting the webpage output."
    },

    {
      heading: "Definition",

      content:
        "An HTML comment is a piece of text enclosed between <!-- and --> that is ignored by the browser during rendering."
    },

    {
      heading: "Syntax of HTML Comments",

      content:
        "HTML comments begin with <!-- and end with -->."
    },

    {
      heading: "Purpose of HTML Comments",

      points: [

        "Explain code functionality",

        "Document webpage sections",

        "Improve code readability",

        "Provide reminders for developers",

        "Temporarily disable code",

        "Support team collaboration"
      ]
    },

    {
      heading: "Characteristics of HTML Comments",

      points: [

        "Not visible on webpage",

        "Ignored by browser",

        "Can contain text or notes",

        "Can span multiple lines",

        "Used only for developers"
      ]
    },

    {
      heading: "Single-Line Comments",

      content:
        "Single-line comments are used for short explanations or notes."
    },

    {
      heading: "Multi-Line Comments",

      content:
        "Multi-line comments are used for longer descriptions and documentation."
    },

    {
      heading: "Using Comments for Section Identification",

      content:
        "Comments help identify different sections of a webpage such as header, navigation, content area, and footer."
    },

    {
      heading: "Using Comments for Debugging",

      content:
        "Developers can temporarily comment out HTML code to test specific sections without deleting them."
    },

    {
      heading: "Advantages of HTML Comments",

      points: [

        "Improves code readability",

        "Makes maintenance easier",

        "Helps team collaboration",

        "Useful for debugging",

        "Provides documentation"
      ]
    },

    {
      heading: "Disadvantages of HTML Comments",

      points: [

        "Excessive comments can clutter code",

        "Sensitive information should not be stored in comments",

        "Visible in page source code"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Write meaningful comments",

        "Keep comments concise",

        "Update comments when code changes",

        "Avoid unnecessary comments",

        "Do not store passwords or sensitive data"
      ]
    },

    {
      heading: "Common Uses of HTML Comments",

      points: [

        "Project documentation",

        "Section labeling",

        "Temporary code disabling",

        "Developer notes",

        "Code organization"
      ]
    },

    {
      heading: "HTML Comments vs Visible Content",

      subSections: [

        {
          title: "HTML Comments",

          points: [
            "Visible only in source code",
            "Ignored by browser",
            "Used for documentation"
          ]
        },

        {
          title: "Visible Content",

          points: [
            "Displayed on webpage",
            "Visible to users",
            "Part of webpage output"
          ]
        }
      ]
    },

    {
      heading: "Security Considerations",

      content:
        "Comments can be viewed by anyone through page source inspection. Therefore, confidential information such as passwords, API keys, or private details should never be included in comments."
    },

    {
      heading: "Real-Time Example",

      content:
        "A web developer may use comments to separate the header, navigation menu, product section, and footer while building an e-commerce website."
    }
  ],

  keyPoints: [

    "HTML comments are ignored by browsers.",

    "Comments help document and organize code.",

    "Comments are not displayed on webpages.",

    "Useful for debugging and maintenance.",

    "Sensitive information should never be placed in comments."
  ],

  codeExamples: [

    {
      title: "Single-Line Comment",

      code: `
<!-- This is a single-line comment -->`
    },

    {
      title: "Multi-Line Comment",

      code: `
<!--

This is a multi-line comment.

Used for documentation.

-->`
    },

    {
      title: "Section Comment Example",

      code: `
<!-- Header Section -->

<header>

    <h1>Website Header</h1>

</header>

<!-- Navigation Section -->

<nav>

    Menu Items

</nav>`
    },

    {
      title: "Commenting Out HTML Code",

      code: `
<!--

<p>This paragraph is disabled.</p>

-->`
    }
  ]
};

mernSubTopicData["HTML Comments"] = htmlComments;

const headingTags = {
  description:
    "HTML Heading Tags are used to define headings and subheadings on a web page. Headings help organize content into a structured hierarchy, making web pages easier to read, understand, and navigate. They are also important for Search Engine Optimization (SEO) and accessibility.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Headings are one of the most commonly used HTML elements. They provide titles and subtitles for different sections of a webpage and help users quickly understand the content structure."
    },

    {
      heading: "Definition",

      content:
        "Heading tags are HTML elements used to define headings. HTML provides six levels of headings ranging from <h1> to <h6>."
    },

    {
      heading: "Types of Heading Tags",

      points: [

        "<h1> - Main Heading",

        "<h2> - Sub Heading",

        "<h3> - Section Heading",

        "<h4> - Sub Section Heading",

        "<h5> - Minor Heading",

        "<h6> - Smallest Heading"
      ]
    },

    {
      heading: "Hierarchy of Headings",

      content:
        "Heading tags follow a hierarchical structure where <h1> is the most important heading and <h6> is the least important."
    },

    {
      heading: "H1 Tag",

      content:
        "The <h1> tag represents the main heading of a webpage. Usually, a webpage should contain only one primary H1 heading."
    },

    {
      heading: "H2 Tag",

      content:
        "The <h2> tag is used for major sections within a webpage."
    },

    {
      heading: "H3 Tag",

      content:
        "The <h3> tag is used for subsections under an H2 heading."
    },

    {
      heading: "H4 Tag",

      content:
        "The <h4> tag is used for smaller divisions within an H3 section."
    },

    {
      heading: "H5 Tag",

      content:
        "The <h5> tag is used for less important subheadings."
    },

    {
      heading: "H6 Tag",

      content:
        "The <h6> tag is the smallest heading level and is used for minor content sections."
    },

    {
      heading: "Importance of Heading Tags",

      points: [

        "Improves content organization",

        "Enhances readability",

        "Supports accessibility",

        "Improves SEO rankings",

        "Helps search engines understand content"
      ]
    },

    {
      heading: "Heading Tags and SEO",

      content:
        "Search engines analyze heading tags to understand webpage content. Proper heading hierarchy helps improve search engine visibility."
    },

    {
      heading: "Heading Tags and Accessibility",

      content:
        "Screen readers use heading structures to help visually impaired users navigate web pages efficiently."
    },

    {
      heading: "Default Appearance of Heading Tags",

      points: [

        "H1 is largest",

        "H2 is slightly smaller",

        "Size decreases progressively until H6"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Use only one H1 per page",

        "Follow proper heading hierarchy",

        "Do not skip heading levels unnecessarily",

        "Use meaningful headings",

        "Keep headings concise and descriptive"
      ]
    },

    {
      heading: "Common Mistakes",

      points: [

        "Using multiple H1 tags unnecessarily",

        "Skipping heading levels",

        "Using headings only for styling",

        "Creating overly long headings"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "An online course website may use H1 for the course title, H2 for modules, H3 for lessons, and H4 for lesson topics."
    }
  ],

  keyPoints: [

    "HTML provides six heading levels from H1 to H6.",

    "H1 is the most important heading.",

    "Heading tags improve structure and readability.",

    "Headings are important for SEO and accessibility.",

    "Proper hierarchy should always be followed."
  ],

  codeExamples: [

    {
      title: "All Heading Tags Example",

      code: `
<h1>Main Heading</h1>

<h2>Sub Heading</h2>

<h3>Section Heading</h3>

<h4>Sub Section Heading</h4>

<h5>Minor Heading</h5>

<h6>Smallest Heading</h6>`
    },

    {
      title: "Web Page Structure Example",

      code: `
<h1>Web Development Course</h1>

<h2>HTML Module</h2>

<h3>Introduction to HTML</h3>

<h3>HTML Tags</h3>

<h2>CSS Module</h2>

<h3>CSS Selectors</h3>`
    }
  ]
};

mernSubTopicData["HTML Heading Tags"] = headingTags;

const paragraphTags = {
  description:
    "The HTML Paragraph Tag (<p>) is used to define paragraphs in a web page. Paragraphs are blocks of text that help organize content into readable sections. The <p> tag is one of the most commonly used HTML elements because most web pages contain textual information presented in paragraph form.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Text is the primary method of presenting information on websites. HTML uses the paragraph tag to display text content in a structured and readable format."
    },

    {
      heading: "Definition",

      content:
        "The <p> tag is an HTML element used to create and display paragraphs on a web page."
    },

    {
      heading: "Purpose of Paragraph Tags",

      points: [

        "Display textual content",

        "Improve readability",

        "Organize information",

        "Separate content into sections",

        "Provide structured presentation"
      ]
    },

    {
      heading: "Syntax",

      content:
        "A paragraph starts with an opening <p> tag and ends with a closing </p> tag."
    },

    {
      heading: "Characteristics of Paragraph Tags",

      points: [

        "Block-level element",

        "Starts on a new line",

        "Adds automatic spacing",

        "Supports text formatting",

        "Can contain inline elements"
      ]
    },

    {
      heading: "Block-Level Element",

      content:
        "Paragraphs occupy the full available width and always begin on a new line."
    },

    {
      heading: "Automatic Spacing",

      content:
        "Browsers automatically add space before and after paragraphs to improve readability."
    },

    {
      heading: "Text Formatting Inside Paragraphs",

      content:
        "Paragraphs can contain formatting elements such as bold, italic, underline, links, and inline styles."
    },

    {
      heading: "Nested Elements in Paragraphs",

      points: [

        "<b> Bold Text",

        "<i> Italic Text",

        "<u> Underlined Text",

        "<a> Hyperlinks",

        "<span> Inline Styling"
      ]
    },

    {
      heading: "Multiple Paragraphs",

      content:
        "Web pages can contain multiple paragraph elements to separate content into different sections."
    },

    {
      heading: "Paragraphs and Whitespace",

      content:
        "HTML ignores extra spaces and line breaks inside paragraph tags. Multiple spaces appear as a single space in the browser."
    },

    {
      heading: "Line Breaks vs Paragraphs",

      subSections: [

        {
          title: "Paragraph Tag (<p>)",

          points: [

            "Creates a new paragraph",

            "Adds spacing automatically",

            "Used for larger text blocks"
          ]
        },

        {
          title: "Line Break Tag (<br>)",

          points: [

            "Moves content to next line",

            "No paragraph spacing",

            "Used within paragraphs"
          ]
        }
      ]
    },

    {
      heading: "Advantages of Paragraph Tags",

      points: [

        "Improves readability",

        "Organizes content",

        "Provides consistent formatting",

        "Easy to maintain",

        "SEO friendly structure"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Keep paragraphs concise",

        "Use meaningful content",

        "Avoid excessively long paragraphs",

        "Maintain proper spacing",

        "Use semantic structure"
      ]
    },

    {
      heading: "Common Mistakes",

      points: [

        "Forgetting closing tag",

        "Using paragraphs for layout design",

        "Adding excessive text in one paragraph",

        "Improper nesting of elements"
      ]
    },

    {
      heading: "Paragraph Tags and SEO",

      content:
        "Well-structured paragraphs improve content readability and help search engines understand webpage content."
    },

    {
      heading: "Paragraph Tags and Accessibility",

      content:
        "Screen readers use paragraph structures to present content logically to users with visual impairments."
    },

    {
      heading: "Real-Time Example",

      content:
        "An online learning website uses paragraphs to display lesson explanations, descriptions, instructions, and educational content."
    }
  ],

  keyPoints: [

    "The <p> tag is used to create paragraphs.",

    "Paragraphs improve content readability.",

    "Paragraphs are block-level elements.",

    "Browsers automatically add spacing around paragraphs.",

    "Paragraph tags help organize webpage content."
  ],

  codeExamples: [

    {
      title: "Basic Paragraph Example",

      code: `
<p>

    This is a simple paragraph.

</p>`
    },

    {
      title: "Multiple Paragraphs",

      code: `
<p>

    First paragraph content.

</p>

<p>

    Second paragraph content.

</p>`
    },

    {
      title: "Paragraph with Formatting",

      code: `
<p>

    HTML is a <b>markup language</b>
    used for creating web pages.

</p>`
    },

    {
      title: "Paragraph with Link",

      code: `
<p>

    Visit

    <a href="https://example.com">

        Example Website

    </a>

</p>`
    }
  ]
};

mernSubTopicData["HTML Paragraph Tags"] = paragraphTags;

const lineBreakTag = {
  description:
    "The HTML Line Break Tag (<br>) is used to move content to the next line without starting a new paragraph. It is an empty HTML element that creates a single line break within text content. The <br> tag is useful when displaying addresses, poems, song lyrics, or any content where line separation is required.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Normally, browsers ignore extra spaces and line breaks in HTML code. The <br> tag is used when developers want text to appear on a new line without creating a new paragraph."
    },

    {
      heading: "Definition",

      content:
        "The <br> (Break) tag is an HTML element used to insert a line break within content."
    },

    {
      heading: "Syntax",

      content:
        "The <br> tag is an empty element, meaning it does not require a closing tag."
    },

    {
      heading: "Characteristics of <br> Tag",

      points: [

        "Empty element",

        "No closing tag required",

        "Creates a new line",

        "Does not create a new paragraph",

        "Lightweight and simple"
      ]
    },

    {
      heading: "Purpose of Line Break",

      points: [

        "Move text to next line",

        "Format addresses",

        "Display poems",

        "Display song lyrics",

        "Improve content presentation"
      ]
    },

    {
      heading: "How Line Break Works",

      content:
        "When the browser encounters a <br> tag, it immediately moves the following content to the next line."
    },

    {
      heading: "Line Break vs Paragraph",

      subSections: [

        {
          title: "Line Break (<br>)",

          points: [

            "Moves text to next line",

            "No extra spacing",

            "Used within content"
          ]
        },

        {
          title: "Paragraph (<p>)",

          points: [

            "Creates a new paragraph",

            "Adds spacing before and after",

            "Used for text blocks"
          ]
        }
      ]
    },

    {
      heading: "Advantages of <br> Tag",

      points: [

        "Simple formatting",

        "Easy line separation",

        "Useful for structured text",

        "No additional styling needed"
      ]
    },

    {
      heading: "Common Uses",

      points: [

        "Addresses",

        "Poetry",

        "Contact Information",

        "Song Lyrics",

        "Formatted Messages"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Use <br> only when line breaks are required",

        "Do not use multiple <br> tags for page layout",

        "Use CSS for spacing instead of excessive line breaks",

        "Use paragraph tags for large content sections"
      ]
    },

    {
      heading: "Common Mistakes",

      points: [

        "Using <br> for page layout",

        "Adding too many line breaks",

        "Replacing paragraphs with line breaks"
      ]
    },

    {
      heading: "Accessibility Considerations",

      content:
        "Line breaks should be used only for meaningful content formatting because excessive usage can affect readability for assistive technologies."
    },

    {
      heading: "Real-Time Example",

      content:
        "A contact page may use line breaks to display address details on separate lines without creating multiple paragraphs."
    }
  ],

  keyPoints: [

    "The <br> tag creates a new line.",

    "It is an empty element.",

    "No closing tag is required.",

    "Used for addresses, poems, and formatted text.",

    "Does not create a new paragraph."
  ],

  codeExamples: [

    {
      title: "Basic Line Break Example",

      code: `
Hello World<br>

Welcome to HTML`
    },

    {
      title: "Address Example",

      code: `
123 Main Street<br>

City Center<br>

State - 500001<br>

Country`
    },

    {
      title: "Poem Example",

      code: `
Roses are red,<br>

Violets are blue,<br>

HTML is simple,<br>

And useful too.`
    },

    {
      title: "Line Break Inside Paragraph",

      code: `
<p>

    Welcome to HTML.<br>

    Learning web development is fun.<br>

    Practice regularly.

</p>`
    }
  ]
};

mernSubTopicData["HTML Line Break Tag (<br>)"] = lineBreakTag;

const horizontalRuleTag = {
  description:
    "The HTML Horizontal Rule Tag (<hr>) is used to create a horizontal line across a webpage. It represents a thematic break or separation between different sections of content. The <hr> tag helps organize content and improves readability by visually dividing information.",

  sections: [

    {
      heading: "Introduction",

      content:
        "When a webpage contains multiple sections, it is often useful to separate them visually. The <hr> tag creates a horizontal line that acts as a divider between content sections."
    },

    {
      heading: "Definition",

      content:
        "The <hr> (Horizontal Rule) tag is an HTML element used to insert a horizontal line or thematic break in a webpage."
    },

    {
      heading: "Syntax",

      content:
        "The <hr> tag is an empty element and does not require a closing tag."
    },

    {
      heading: "Characteristics of <hr> Tag",

      points: [

        "Empty element",

        "No closing tag required",

        "Creates horizontal line",

        "Separates content sections",

        "Improves page organization"
      ]
    },

    {
      heading: "Purpose of Horizontal Rule",

      points: [

        "Separate content sections",

        "Improve readability",

        "Create visual breaks",

        "Organize webpage content",

        "Highlight section changes"
      ]
    },

    {
      heading: "Advantages of <hr> Tag",

      points: [

        "Simple to use",

        "Improves content structure",

        "Provides visual separation",

        "Enhances user experience"
      ]
    },

    {
      heading: "Common Uses",

      points: [

        "Blog articles",

        "News websites",

        "Documentation pages",

        "Portfolio websites",

        "Section separators"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Use for meaningful content separation",

        "Avoid excessive usage",

        "Use CSS for custom styling",

        "Keep page structure clean"
      ]
    },

    {
      heading: "HTML5 Meaning",

      content:
        "In HTML5, the <hr> tag represents a thematic break between sections rather than just a decorative horizontal line."
    },

    {
      heading: "Real-Time Example",

      content:
        "A blog page may use a horizontal rule to separate the introduction, main content, and conclusion sections."
    }
  ],

  keyPoints: [

    "The <hr> tag creates a horizontal line.",

    "It is an empty element.",

    "No closing tag is required.",

    "Used to separate webpage sections.",

    "Represents a thematic break in HTML5."
  ],

  codeExamples: [

    {
      title: "Basic Horizontal Rule",

      code: `
<h1>Introduction</h1>

<p>This is the introduction section.</p>

<hr>

<h1>Main Content</h1>

<p>This is the main content section.</p>`
    },

    {
      title: "Multiple Section Separation",

      code: `
<h2>Chapter 1</h2>

<p>Content of Chapter 1</p>

<hr>

<h2>Chapter 2</h2>

<p>Content of Chapter 2</p>

<hr>

<h2>Chapter 3</h2>

<p>Content of Chapter 3</p>`
    }
  ]
};

mernSubTopicData["HTML Horizontal Rule Tag (<hr>)"] = horizontalRuleTag;

const textFormattingTags = {
  description:
    "HTML Text Formatting Tags are used to change the appearance, importance, emphasis, and presentation of text on a webpage. These tags help highlight important information, improve readability, and provide semantic meaning to content.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Web pages contain different types of content that may require special formatting. HTML provides various text formatting tags to make text bold, italic, underlined, highlighted, deleted, inserted, and more."
    },

    {
      heading: "Definition",

      content:
        "Text Formatting Tags are HTML elements used to modify the appearance and meaning of text within a webpage."
    },

    {
      heading: "Why Use Text Formatting Tags?",

      points: [

        "Improve readability",

        "Highlight important information",

        "Provide emphasis",

        "Enhance user experience",

        "Add semantic meaning"
      ]
    },

    {
      heading: "Bold Tag (<b>)",

      content:
        "The <b> tag displays text in bold style without adding extra importance.",

      purpose: [

        "Visual emphasis",

        "Highlight keywords"
      ]
    },

    {
      heading: "Strong Tag (<strong>)",

      content:
        "The <strong> tag indicates that the text is important and displays it in bold by default.",

      purpose: [

        "Important information",

        "Semantic emphasis"
      ]
    },

    {
      heading: "Italic Tag (<i>)",

      content:
        "The <i> tag displays text in italic style without adding semantic importance."
    },

    {
      heading: "Emphasis Tag (<em>)",

      content:
        "The <em> tag emphasizes text and displays it in italic format by default.",

      purpose: [

        "Stress on words",

        "Semantic emphasis"
      ]
    },

    {
      heading: "Underline Tag (<u>)",

      content:
        "The <u> tag underlines text to draw attention to specific content."
    },

    {
      heading: "Mark Tag (<mark>)",

      content:
        "The <mark> tag highlights text with a colored background.",

      purpose: [

        "Highlight search results",

        "Important notes"
      ]
    },

    {
      heading: "Small Tag (<small>)",

      content:
        "The <small> tag displays text in a smaller font size."
    },

    {
      heading: "Deleted Tag (<del>)",

      content:
        "The <del> tag represents deleted text and displays it with a strike-through line."
    },

    {
      heading: "Inserted Tag (<ins>)",

      content:
        "The <ins> tag represents inserted text and usually displays it with an underline."
    },

    {
      heading: "Subscript Tag (<sub>)",

      content:
        "The <sub> tag displays text slightly below the normal line.",

      commonUses: [

        "Chemical formulas",

        "Mathematical expressions"
      ]
    },

    {
      heading: "Superscript Tag (<sup>)",

      content:
        "The <sup> tag displays text slightly above the normal line.",

      commonUses: [

        "Mathematical powers",

        "Footnotes"
      ]
    },

    {
      heading: "Code Tag (<code>)",

      content:
        "The <code> tag is used to display programming code snippets."
    },

    {
      heading: "Preformatted Tag (<pre>)",

      content:
        "The <pre> tag preserves spaces, tabs, and line breaks exactly as written."
    },

    {
      heading: "Advantages of Text Formatting Tags",

      points: [

        "Better readability",

        "Improved content presentation",

        "Enhanced accessibility",

        "Semantic meaning",

        "Professional appearance"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Use semantic tags when appropriate",

        "Avoid excessive formatting",

        "Use formatting for meaningful emphasis",

        "Maintain consistency"
      ]
    },

    {
      heading: "Difference Between Formatting Tags",

      subSections: [

        {
          title: "<b> vs <strong>",

          points: [

            "<b> provides visual bold effect",

            "<strong> indicates importance and provides semantic meaning"
          ]
        },

        {
          title: "<i> vs <em>",

          points: [

            "<i> provides visual italic effect",

            "<em> provides emphasis and semantic meaning"
          ]
        }
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "An online learning platform may use bold text for headings, highlighted text for important notes, subscript for chemical formulas, and superscript for mathematical expressions."
    }
  ],

  keyPoints: [

    "Text formatting tags improve text presentation.",

    "HTML provides multiple formatting options.",

    "Semantic tags add meaning to content.",

    "Formatting improves readability.",

    "Proper usage enhances user experience."
  ],

  codeExamples: [

    {
      title: "Bold and Strong Tags",

      code: `
<b>Bold Text</b>

<strong>Important Text</strong>`
    },

    {
      title: "Italic and Emphasis Tags",

      code: `
<i>Italic Text</i>

<em>Emphasized Text</em>`
    },

    {
      title: "Underline and Highlight",

      code: `
<u>Underlined Text</u>

<mark>Highlighted Text</mark>`
    },

    {
      title: "Deleted and Inserted Text",

      code: `
<del>Old Price ₹1000</del>

<ins>New Price ₹800</ins>`
    },

    {
      title: "Subscript and Superscript",

      code: `
H<sub>2</sub>O

x<sup>2</sup>`
    },

    {
      title: "Code and Preformatted Text",

      code: `
<code>

console.log("Hello");

</code>

<pre>

Line 1

    Line 2

Line 3

</pre>`
    }
  ]
};

mernSubTopicData["HTML Text Formatting Tags"] = textFormattingTags;

const anchorTag = {
  description:
    "The HTML Anchor Tag (<a>) is used to create hyperlinks that connect one webpage to another webpage, section, file, email address, or external resource. Hyperlinks are the foundation of web navigation and allow users to move between different pages and websites easily.",

  sections: [

    {
      heading: "Introduction",

      content:
        "The World Wide Web is built on hyperlinks. The Anchor Tag allows users to navigate between web pages by clicking on links."
    },

    {
      heading: "Definition",

      content:
        "The <a> (Anchor) tag is an HTML element used to create hyperlinks that connect resources on the web."
    },

    {
      heading: "Syntax",

      content:
        "The anchor tag uses the href attribute to specify the destination URL."
    },

    {
      heading: "Purpose of Anchor Tag",

      points: [

        "Navigate between pages",

        "Open external websites",

        "Link to files",

        "Send emails",

        "Navigate within a page",

        "Download resources"
      ]
    },

    {
      heading: "href Attribute",

      content:
        "The href (Hypertext Reference) attribute specifies the destination of the hyperlink."
    },

    {
      heading: "Types of Links",

      subSections: [

        {
          title: "External Links",

          description:
            "Links that navigate to another website."
        },

        {
          title: "Internal Links",

          description:
            "Links that navigate to another page within the same website."
        },

        {
          title: "Bookmark Links",

          description:
            "Links that navigate to a specific section within the same page."
        },

        {
          title: "Email Links",

          description:
            "Links that open the user's email application."
        },

        {
          title: "Download Links",

          description:
            "Links used to download files."
        }
      ]
    },

    {
      heading: "target Attribute",

      content:
        "The target attribute specifies where the linked document should open."
    },

    {
      heading: "Common target Values",

      points: [

        "_self → Opens in same tab",

        "_blank → Opens in new tab",

        "_parent → Opens in parent frame",

        "_top → Opens in full window"
      ]
    },

    {
      heading: "title Attribute",

      content:
        "The title attribute provides additional information displayed as a tooltip when hovering over a link."
    },

    {
      heading: "Anchor Tag States",

      points: [

        "Unvisited Link",

        "Visited Link",

        "Hover State",

        "Active State"
      ]
    },

    {
      heading: "Advantages of Anchor Tags",

      points: [

        "Easy navigation",

        "Connect web resources",

        "Improve user experience",

        "Support website structure",

        "Enable information sharing"
      ]
    },

    {
      heading: "Best Practices",

      points: [

        "Use meaningful link text",

        "Avoid generic text like 'Click Here'",

        "Use target='_blank' carefully",

        "Provide descriptive titles",

        "Check broken links regularly"
      ]
    },

    {
      heading: "Common Mistakes",

      points: [

        "Missing href attribute",

        "Broken URLs",

        "Using unclear link text",

        "Opening too many new tabs"
      ]
    },

    {
      heading: "Anchor Tags and SEO",

      content:
        "Search engines use hyperlinks to discover and index webpages. Meaningful anchor text improves SEO and navigation."
    },

    {
      heading: "Anchor Tags and Accessibility",

      content:
        "Descriptive links help screen reader users understand where a link will take them."
    },

    {
      heading: "Real-Time Example",

      content:
        "An e-commerce website uses anchor tags to navigate between Home, Products, Cart, Orders, and Contact pages."
    }
  ],

  keyPoints: [

    "The <a> tag creates hyperlinks.",

    "href specifies the destination URL.",

    "Links can be internal or external.",

    "target controls where links open.",

    "Anchor tags are essential for web navigation."
  ],

  codeExamples: [

    {
      title: "Basic Anchor Tag",

      code: `
<a href="https://example.com">

    Visit Website

</a>`
    },

    {
      title: "Open Link in New Tab",

      code: `
<a href="https://example.com"

   target="_blank">

    Open Website

</a>`
    },

    {
      title: "Internal Link",

      code: `
<a href="about.html">

    About Us

</a>`
    },

    {
      title: "Email Link",

      code: `
<a href="mailto:contact@example.com">

    Send Email

</a>`
    },

    {
      title: "Bookmark Link",

      code: `
<a href="#contact">

    Go to Contact Section

</a>

<h2 id="contact">

    Contact Information

</h2>`
    },

    {
      title: "Download File",

      code: `
<a href="document.pdf"

   download>

    Download PDF

</a>`
    }
  ]
};

mernSubTopicData["HTML Anchor Tag (<a>)"] = anchorTag;

const internalLinks = {
  description:
    "Internal Links are hyperlinks that connect one page to another page within the same website. They help users navigate between different sections and pages of a website without leaving the website domain. Internal linking is important for navigation, user experience, and SEO.",

  sections: [

    {
      heading: "Introduction",

      content:
        "A website usually contains multiple pages such as Home, About, Services, Contact, and Gallery. Internal links connect these pages and allow users to move easily within the website."
    },

    {
      heading: "Definition",

      content:
        "An Internal Link is a hyperlink that points to another page or resource within the same website."
    },

    {
      heading: "Purpose of Internal Links",

      points: [

        "Website navigation",

        "Connect related pages",

        "Improve user experience",

        "Help search engines crawl pages",

        "Organize website structure"
      ]
    },

    {
      heading: "How Internal Links Work",

      points: [

        "User clicks a link.",

        "Browser requests another page from the same website.",

        "Server sends the requested page.",

        "Browser displays the new page."
      ]
    },

    {
      heading: "Types of Internal Links",

      subSections: [

        {
          title: "Page-to-Page Links",

          description:
            "Links that connect one webpage to another webpage within the same website."
        },

        {
          title: "Navigation Links",

          description:
            "Links used in menus and navigation bars."
        },

        {
          title: "Section Links",

          description:
            "Links that move to a specific section within the same page."
        }
      ]
    },

    {
      heading: "Relative Path Links",

      content:
        "Relative paths specify the location of files relative to the current webpage."
    },

    {
      heading: "Absolute Path Links",

      content:
        "Absolute paths specify the complete URL including protocol and domain name."
    },

    {
      heading: "Advantages of Internal Links",

      points: [

        "Easy website navigation",

        "Improved user engagement",

        "Better website structure",

        "Improved SEO",

        "Reduced bounce rate"
      ]
    },

    {
      heading: "Internal Links and SEO",

      content:
        "Search engines use internal links to discover pages and understand website structure. Proper internal linking improves search engine rankings."
    },

    {
      heading: "Best Practices",

      points: [

        "Use descriptive link text",

        "Maintain logical navigation",

        "Avoid broken links",

        "Connect related content",

        "Keep navigation simple"
      ]
    },

    {
      heading: "Common Website Pages Connected Using Internal Links",

      points: [

        "Home",

        "About",

        "Services",

        "Products",

        "Contact",

        "Blog"
      ]
    },

    {
      heading: "Common Mistakes",

      points: [

        "Broken links",

        "Incorrect file paths",

        "Too many links on one page",

        "Poor navigation structure"
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "A college website may contain Home, Courses, Admissions, Faculty, and Contact pages. Internal links connect all these pages so users can navigate easily."
    }
  ],

  keyPoints: [

    "Internal links connect pages within the same website.",

    "They improve navigation and user experience.",

    "Internal links help SEO.",

    "Relative paths are commonly used.",

    "Internal linking improves website structure."
  ],

  codeExamples: [

    {
      title: "Basic Internal Link",

      code: `
<a href="about.html">

    About Us

</a>`
    },

    {
      title: "Navigation Menu",

      code: `
<nav>

    <a href="index.html">Home</a>

    <a href="about.html">About</a>

    <a href="contact.html">Contact</a>

</nav>`
    },

    {
      title: "Internal Link to Folder",

      code: `
<a href="pages/services.html">

    Services

</a>`
    },

    {
      title: "Link to Section in Same Page",

      code: `
<a href="#courses">

    View Courses

</a>

<h2 id="courses">

    Available Courses

</h2>`
    }
  ]
};

mernSubTopicData["HTML Internal Links"] = internalLinks;

const externalLinks = {
  description:
    "External Links are hyperlinks that connect a webpage to another website or domain outside the current website. They allow users to access resources, references, documents, and services available on different websites across the Internet.",

  sections: [

    {
      heading: "Introduction",

      content:
        "The World Wide Web is interconnected through hyperlinks. External links help users move from one website to another website to access additional information and resources."
    },

    {
      heading: "Definition",

      content:
        "An External Link is a hyperlink that points to a webpage, resource, or document located on a different website or domain."
    },

    {
      heading: "Purpose of External Links",

      points: [

        "Access external resources",

        "Provide references",

        "Share useful information",

        "Connect related websites",

        "Improve user experience"
      ]
    },

    {
      heading: "How External Links Work",

      points: [

        "User clicks an external link.",

        "Browser sends a request to another website.",

        "The destination server processes the request.",

        "The requested webpage is displayed."
      ]
    },

    {
      heading: "Characteristics of External Links",

      points: [

        "Point to another domain",

        "Use complete URLs",

        "Can open in same tab or new tab",

        "Require internet connection"
      ]
    },

    {
      heading: "Absolute URL",

      content:
        "External links usually use absolute URLs containing the protocol, domain name, and path.",

      example:
        "https://www.example.com"
    },

    {
      heading: "Target Attribute",

      content:
        "The target attribute determines where the linked page will open."
    },

    {
      heading: "Common Target Values",

      points: [

        "_self → Opens in current tab",

        "_blank → Opens in new tab",

        "_parent → Opens in parent frame",

        "_top → Opens in full browser window"
      ]
    },

    {
      heading: "Advantages of External Links",

      points: [

        "Provide additional information",

        "Increase resource accessibility",

        "Support research and learning",

        "Connect related content",

        "Enhance user experience"
      ]
    },

    {
      heading: "Disadvantages of External Links",

      points: [

        "Users may leave the website",

        "Broken external links may occur",

        "Dependence on third-party websites"
      ]
    },

    {
      heading: "External Links and SEO",

      content:
        "Quality external links help establish credibility and provide value to users. Search engines may consider relevant external references as useful content."
    },

    {
      heading: "Best Practices",

      points: [

        "Use trusted websites",

        "Provide descriptive anchor text",

        "Check links regularly",

        "Use target='_blank' when appropriate",

        "Avoid linking to unreliable sources"
      ]
    },

    {
      heading: "Security Considerations",

      content:
        "When opening external links in a new tab, developers often use rel='noopener noreferrer' for improved security and performance."
    },

    {
      heading: "Common Uses of External Links",

      points: [

        "Official documentation",

        "Reference materials",

        "Social media profiles",

        "Government websites",

        "Educational resources"
      ]
    },

    {
      heading: "Internal Links vs External Links",

      subSections: [

        {
          title: "Internal Links",

          points: [

            "Connect pages within same website",

            "Improve site navigation",

            "Use relative paths"
          ]
        },

        {
          title: "External Links",

          points: [

            "Connect different websites",

            "Provide outside resources",

            "Use absolute URLs"
          ]
        }
      ]
    },

    {
      heading: "Real-Time Example",

      content:
        "A web development tutorial website may provide external links to official documentation, learning resources, and technology websites for further reading."
    }
  ],

  keyPoints: [

    "External links connect different websites.",

    "They use absolute URLs.",

    "The <a> tag is used to create external links.",

    "External links improve resource accessibility.",

    "Trusted sources should always be preferred."
  ],

  codeExamples: [

    {
      title: "Basic External Link",

      code: `
<a href="https://www.google.com">

    Visit Google

</a>`
    },

    {
      title: "Open External Link in New Tab",

      code: `
<a href="https://www.google.com"

   target="_blank">

    Open Google

</a>`
    },

    {
      title: "Secure External Link",

      code: `
<a href="https://www.google.com"

   target="_blank"

   rel="noopener noreferrer">

    Open Google Securely

</a>`
    },

    {
      title: "External Documentation Link",

      code: `
<a href="https://developer.mozilla.org">

    MDN Documentation

</a>`
    }
  ]
};

mernSubTopicData["HTML External Links"] = externalLinks;

const emailLinks = {
  description:
    "HTML Email Links are hyperlinks that allow users to open their default email application and compose a new email directly to a specified email address. Email links are created using the mailto: protocol inside the anchor (<a>) tag.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Websites often provide contact information for users. Instead of manually copying an email address, users can simply click an email link to open their email application and start composing a message."
    },

    {
      heading: "Definition",

      content:
        "An Email Link is a hyperlink that uses the mailto: protocol to open an email client and create a new email message."
    },

    {
      heading: "Purpose of Email Links",

      points: [

        "Contact website owners",

        "Send support requests",

        "Provide feedback",

        "Business communication",

        "Customer service inquiries"
      ]
    },

    {
      heading: "How Email Links Work",

      points: [

        "User clicks the email link.",

        "Browser detects the mailto: protocol.",

        "Default email application opens.",

        "Recipient email address is filled automatically.",

        "User writes and sends the email."
      ]
    },

    {
      heading: "Syntax",

      content:
        "The mailto: protocol is placed inside the href attribute of the anchor tag."
    },

    {
      heading: "Components of Email Links",

      subSections: [

        {
          title: "mailto:",

          description:
            "Protocol used to create email hyperlinks."
        },

        {
          title: "Email Address",

          description:
            "Specifies the recipient of the email."
        },

        {
          title: "Subject",

          description:
            "Optional predefined email subject."
        },

        {
          title: "Body",

          description:
            "Optional predefined email message content."
        }
      ]
    },

    {
      heading: "Advantages of Email Links",

      points: [

        "Easy communication",

        "Quick email composition",

        "Improved user experience",

        "Simple implementation",

        "No additional software required"
      ]
    },

    {
      heading: "Common Uses",

      points: [

        "Contact Us pages",

        "Support pages",

        "Business websites",

        "Portfolio websites",

        "Educational websites"
      ]
    },

    {
      heading: "Adding Subject to Email",

      content:
        "Developers can automatically fill the email subject using query parameters."
    },

    {
      heading: "Adding Message Body",

      content:
        "Developers can prefill the email body with default text."
    },

    {
      heading: "Multiple Recipients",

      content:
        "Email links can send emails to multiple recipients by separating addresses with commas."
    },

    {
      heading: "Best Practices",

      points: [

        "Use valid email addresses",

        "Provide clear link text",

        "Test email links regularly",

        "Avoid exposing sensitive emails publicly"
      ]
    },

    {
      heading: "Limitations",

      points: [

        "Requires email application",

        "May not work if no email client is configured",

        "Behavior varies across devices"
      ]
    },

    {
      heading: "Email Links and Accessibility",

      content:
        "Descriptive link text helps users understand that clicking the link will open an email application."
    },

    {
      heading: "Real-Time Example",

      content:
        "A company's Contact Us page may include an email link that opens the user's email application with a predefined support email address and subject line."
    }
  ],

  keyPoints: [

    "Email links use the mailto: protocol.",

    "They open the default email application.",

    "Recipient addresses can be predefined.",

    "Subjects and message bodies can be added.",

    "Commonly used on Contact Us pages."
  ],

  codeExamples: [

    {
      title: "Basic Email Link",

      code: `
<a href="mailto:support@example.com">

    Send Email

</a>`
    },

    {
      title: "Email Link with Subject",

      code: `
<a href="mailto:support@example.com?subject=Support Request">

    Contact Support

</a>`
    },

    {
      title: "Email Link with Subject and Body",

      code: `
<a href="mailto:support@example.com?subject=Feedback&body=Hello Team">

    Send Feedback

</a>`
    },

    {
      title: "Multiple Recipients",

      code: `
<a href="mailto:user1@example.com,user2@example.com">

    Email Team

</a>`
    }
  ]
};

mernSubTopicData["HTML Email Links"] = emailLinks;

const bookmarkLinks = {
  description:
    "HTML Bookmark Links are special hyperlinks that allow users to jump directly to a specific section within the same webpage or another webpage. They are useful for navigating long pages quickly without excessive scrolling.",

  sections: [

    {
      heading: "Introduction",

      content:
        "Large webpages often contain a lot of content. Bookmark links help users move directly to important sections such as Introduction, Services, FAQ, Contact, or Conclusion."
    },

    {
      heading: "Definition",

      content:
        "A Bookmark Link is an internal hyperlink that navigates to a specific location identified by an id attribute."
    },

    {
      heading: "Purpose of Bookmark Links",

      points: [

        "Quick navigation",

        "Reduce scrolling",

        "Improve user experience",

        "Access specific sections",

        "Organize long webpages"
      ]
    },

    {
      heading: "How Bookmark Links Work",

      points: [

        "A target element is assigned an id.",

        "An anchor tag references the id using #.",

        "When clicked, the browser scrolls to the target section."
      ]
    },

    {
      heading: "Components of Bookmark Links",

      subSections: [

        {
          title: "id Attribute",

          description:
            "Defines a unique identifier for an HTML element."
        },

        {
          title: "Anchor Tag",

          description:
            "Creates the clickable link."
        },

        {
          title: "# Symbol",

          description:
            "References the target id."
        }
      ]
    },

    {
      heading: "Syntax",

      content:
        "Bookmark links use the href attribute with the # symbol followed by the target id."
    },

    {
      heading: "Advantages of Bookmark Links",

      points: [

        "Faster navigation",

        "Improved usability",

        "Better organization",

        "Useful for long pages",

        "Enhances user experience"
      ]
    },

    {
      heading: "Common Uses",

      points: [

        "Table of Contents",

        "Documentation Pages",

        "FAQs",

        "Tutorial Websites",

        "Single Page Applications"
      ]
    },

    {
      heading: "Bookmark Links Within Same Page",

      content:
        "The most common use is moving to another section of the current webpage."
    },

    {
      heading: "Bookmark Links Between Pages",

      content:
        "Bookmark links can also navigate to a specific section of another webpage."
    },

    {
      heading: "Best Practices",

      points: [

        "Use meaningful id names",

        "Ensure ids are unique",

        "Provide descriptive link text",

        "Test all bookmark links"
      ]
    },

    {
      heading: "Common Mistakes",

      points: [

        "Missing id attribute",

        "Incorrect id reference",

        "Duplicate ids",

        "Broken bookmark links"
      ]
    },

    {
      heading: "Bookmark Links and Accessibility",

      content:
        "Bookmark links improve accessibility by allowing users and assistive technologies to navigate large pages efficiently."
    },

    {
      heading: "Real-Time Example",

      content:
        "An online course webpage may contain a Table of Contents at the top. Clicking a chapter name instantly moves the user to that chapter section."
    }
  ],

  keyPoints: [

    "Bookmark links navigate to specific sections.",

    "They use the id attribute and # symbol.",

    "Useful for long webpages.",

    "Improve navigation and usability.",

    "Commonly used in documentation and tutorials."
  ],

  codeExamples: [

    {
      title: "Basic Bookmark Link",

      code: `
<a href="#contact">

    Go to Contact Section

</a>

<h2 id="contact">

    Contact Information

</h2>`
    },

    {
      title: "Multiple Bookmark Links",

      code: `
<a href="#intro">Introduction</a>

<a href="#services">Services</a>

<a href="#contact">Contact</a>

<h2 id="intro">Introduction</h2>

<h2 id="services">Services</h2>

<h2 id="contact">Contact</h2>`
    },

    {
      title: "Table of Contents Example",

      code: `
<h1>Contents</h1>

<a href="#chapter1">Chapter 1</a><br>

<a href="#chapter2">Chapter 2</a><br>

<a href="#chapter3">Chapter 3</a>

<h2 id="chapter1">Chapter 1</h2>

<p>Content...</p>

<h2 id="chapter2">Chapter 2</h2>

<p>Content...</p>

<h2 id="chapter3">Chapter 3</h2>

<p>Content...</p>`
    },

    {
      title: "Bookmark Link to Another Page",

      code: `
<a href="about.html#team">

    View Team Section

</a>`
    }
  ]
};

mernSubTopicData["HTML Bookmark Links"] = bookmarkLinks;
