export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export const quizzes: Record<string, Quiz> = {
  "core-java-quiz": {
    id: "core-java-quiz",
    title: "Core Java Mastery Quiz",
    questions: [
      {
        id: "cj-q1",
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "0"],
        correctAnswer: 1,
        explanation: "In Java, the default value of a boolean primitive is false."
      },
      {
        id: "cj-q2",
        question: "Which of these is not a primitive data type in Java?",
        options: ["int", "char", "boolean", "String"],
        correctAnswer: 3,
        explanation: "String is a class in Java, not a primitive data type."
      },
      {
        id: "cj-q3",
        question: "What is the size of an int variable in Java?",
        options: ["8-bit", "16-bit", "32-bit", "64-bit"],
        correctAnswer: 2,
        explanation: "An int in Java is a 32-bit signed two's complement integer."
      },
      {
        id: "cj-q4",
        question: "Which keyword is used to prevent a variable from being modified?",
        options: ["static", "final", "abstract", "volatile"],
        correctAnswer: 1,
        explanation: "The 'final' keyword makes a variable a constant, meaning its value cannot be changed once assigned."
      },
      {
        id: "cj-q5",
        question: "What is the parent class of all classes in Java?",
        options: ["Main", "System", "Object", "Class"],
        correctAnswer: 2,
        explanation: "The 'Object' class is the root of the class hierarchy. Every class has Object as a superclass."
      }
    ]
  },
  "oop-quiz": {
    id: "oop-quiz",
    title: "Object-Oriented Programming Quiz",
    questions: [
      {
        id: "oop-q1",
        question: "Which OOP concept is used to hide internal details and show only functionality?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        correctAnswer: 3,
        explanation: "Abstraction is the concept of hiding internal details and showing only essential features."
      },
      {
        id: "oop-q2",
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "extends", "inherits", "using"],
        correctAnswer: 1,
        explanation: "The 'extends' keyword is used to inherit a class in Java."
      },
      {
        id: "oop-q3",
        question: "What is polymorphism?",
        options: ["One name many forms", "Hiding data", "Code reusability", "Restricting access"],
        correctAnswer: 0,
        explanation: "Polymorphism means 'many forms'. It allows one interface to be used for a general class of actions."
      },
      {
        id: "oop-q4",
        question: "Which of the following is NOT a type of inheritance in Java?",
        options: ["Single", "Multiple", "Multilevel", "Hierarchical"],
        correctAnswer: 1,
        explanation: "Java does not support multiple inheritance with classes to avoid ambiguity (Diamond Problem), but it can be achieved through interfaces."
      },
      {
        id: "oop-q5",
        question: "What is encapsulation?",
        options: ["Hiding data using private variables", "Inheriting properties", "Overloading methods", "Creating objects"],
        correctAnswer: 0,
        explanation: "Encapsulation is the wrapping of data (variables) and code (methods) into a single unit (class) and restricting direct access to data."
      }
    ]
  },
  "spring-boot-quiz": {
    id: "spring-boot-quiz",
    title: "Spring Boot & Microservices Quiz",
    questions: [
      {
        id: "sb-q1",
        question: "What is the main advantage of Spring Boot?",
        options: ["It is faster than Java", "It provides auto-configuration", "It replaces the JVM", "It is only for frontend"],
        correctAnswer: 1,
        explanation: "Spring Boot's main advantage is auto-configuration, which reduces the need for manual setup."
      },
      {
        id: "sb-q2",
        question: "Which annotation is used to mark a class as a REST controller?",
        options: ["@Controller", "@RestController", "@Service", "@Repository"],
        correctAnswer: 1,
        explanation: "@RestController is a specialized version of @Controller that includes @ResponseBody."
      },
      {
        id: "sb-q3",
        question: "Which port does Spring Boot use by default?",
        options: ["80", "443", "8080", "3000"],
        correctAnswer: 2,
        explanation: "Spring Boot uses port 8080 by default for its embedded Tomcat server."
      },
      {
        id: "sb-q4",
        question: "What does @SpringBootApplication annotation do?",
        options: ["Enables auto-configuration", "Enables component scanning", "Defines a configuration class", "All of the above"],
        correctAnswer: 3,
        explanation: "@SpringBootApplication is a convenience annotation that adds @Configuration, @EnableAutoConfiguration, and @ComponentScan."
      },
      {
        id: "sb-q5",
        question: "Which file is used to configure properties in Spring Boot?",
        options: ["config.xml", "settings.json", "application.properties", "web.xml"],
        correctAnswer: 2,
        explanation: "Spring Boot uses application.properties (or application.yml) for externalized configuration."
      }
    ]
  },
  "sql-quiz": {
    id: "sql-quiz",
    title: "SQL & Databases Quiz",
    questions: [
      {
        id: "sql-q1",
        question: "Which SQL clause is used to filter records?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"],
        correctAnswer: 2,
        explanation: "The WHERE clause is used to filter records that fulfill a specified condition."
      },
      {
        id: "sql-q2",
        question: "Which join returns all records when there is a match in either left or right table?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        correctAnswer: 3,
        explanation: "FULL OUTER JOIN returns all records from both tables when there is a match in either table."
      },
      {
        id: "sql-q3",
        question: "What is a Primary Key?",
        options: ["A key that allows nulls", "A unique identifier for a record", "A key used for sorting", "A foreign reference"],
        correctAnswer: 1,
        explanation: "A Primary Key uniquely identifies each record in a table and cannot contain NULL values."
      },
      {
        id: "sql-q4",
        question: "Which command is used to remove all records from a table without deleting the table structure?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        correctAnswer: 2,
        explanation: "TRUNCATE removes all rows from a table, but the table structure and its columns, constraints, indexes, etc., remain."
      }
    ]
  },
  "frontend-quiz": {
    id: "frontend-quiz",
    title: "Frontend Development Quiz",
    questions: [
      {
        id: "fe-q1",
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Text Management", "Home Tool Markup Language"],
        correctAnswer: 0,
        explanation: "HTML stands for Hyper Text Markup Language."
      },
      {
        id: "fe-q2",
        question: "Which CSS property is used to change the text color?",
        options: ["text-style", "font-color", "color", "background-color"],
        correctAnswer: 2,
        explanation: "The 'color' property is used to set the color of the text."
      },
      {
        id: "fe-q3",
        question: "What is the purpose of 'useState' in React?",
        options: ["To fetch APIs", "To manage component state", "To route pages", "To style components"],
        correctAnswer: 1,
        explanation: "useState is a Hook that allows you to add React state to function components."
      },
      {
        id: "fe-q4",
        question: "Which company developed React?",
        options: ["Google", "Microsoft", "Meta (Facebook)", "Amazon"],
        correctAnswer: 2,
        explanation: "React was created and is maintained by Meta (formerly Facebook)."
      }
    ]
  }
};
