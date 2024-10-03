export const sessionData = [
  {
    title: "JS Variables and Numbers",
    category: "JavaScript",
    short:
      "Learn how to declare variables, understand data types, use math operations, and handle type coercion and number systems in JavaScript.",
    long: "This session covers JavaScript variable declarations (`var`, `let`, `const`) and their differences, as well as an overview of primitive data types like strings, numbers, and booleans. You will learn best practices for naming variables, perform basic math operations with operators, and understand the concept of type coercion. The session also touches upon different number systems such as binary and hexadecimal.",
    skills: [
      "Variable Declarations",
      "Primitive Data Types",
      "Variable Naming",
      "Math & Operators",
      "Operator Precedence",
      "Assignment Operators",
      "Type Coersion",
      "Number Systems",
    ],
  },
  {
    title: "JavaScript Basics",
    category: "JavaScript",
    short:
      "Learn to connect JavaScript files, log to the console, select HTML elements, and add interactivity with event listeners and CSS class manipulation.",
    long: "This session introduces the basics of JavaScript in the browser, including how to connect a JavaScript file using the `<script>` tag, log messages to the console for debugging, and select HTML elements with `querySelector`. It also covers adding interactivity to web pages using `addEventListener` for handling events like clicks, and manipulating CSS classes on elements by adding, removing, or toggling classes dynamically.",
    skills: [
      "Connect a JavaScript file",
      "Hello World: console.log()",
      "Selecting HTML Elements: .querySelector()",
      "Add Interaction: .addEventListener()",
      "Add/remove & toggle classes: .classList.",
    ],
  },
  {
    title: "JS Conditions and Booleans",
    category: "JavaScript",
    short:
      "Learn to use conditions for program flow, understand booleans and truthy/falsy values, work with comparison and logical operators, and write ternary expressions.",
    long: "This session introduces boolean values and truthy/falsy concepts, explains how to control program flow with conditions like `if/else` statements and `switch` cases, and covers comparison and logical operators for decision-making in code. It also includes using ternary operators for concise conditional expressions and highlights the nuances of type coercion in JavaScript.",
    skills: [
      "Boolean Values",
      "Truthy and Falsy Values",
      "Comparison Operators",
      "Logical Operators",
      "Control Flow: if/else",
      "Switch",
      "Ternary Operator: ? :",
      "Advanced: Boolean Coercion",
    ],
  },
  {
    title: "JS Objects and Arrays",
    category: "JavaScript",
    short:
      "Learn to create, access, and manipulate arrays and objects, including nested structures and their properties.",
    long: "This session covers the fundamentals of working with arrays and objects in JavaScript. It includes creating arrays to store multiple values, accessing their elements, and manipulating arrays with common methods. The session also explores creating objects with key-value pairs, accessing properties using dot and bracket notation, modifying values, and handling nested structures of objects and arrays.",
    skills: [
      "Arrays",
      "Common Array Attributes and Methods",
      "Objects",
      "Nested Objects / Arrays",
    ],
  },
  {
    title: "JS Functions",
    category: "JavaScript",
    short:
      "Learn how to write, call, and use functions in JavaScript, understand function parameters, and explore the concept of scope.",
    long: "This session introduces the fundamentals of JavaScript functions, including how to define and call functions, pass parameters, and use them to perform specific tasks. It also covers the concept of scope, differentiating between global and function scope, and how variables are visible and accessible within and outside of functions.",
    skills: [
      "Functions",
      "Function Declarations",
      "Function Calls",
      "Scope",
      "Function Scope",
      "Global Scope",
    ],
  },
  {
    title: "JS Functions 2",
    category: "JavaScript",
    short:
      "Learn about return statements, early returns, and writing functions using arrow function expressions in JavaScript.",
    long: "This session delves deeper into JavaScript functions, exploring how to return values from functions, use early return statements to improve code readability, and define functions with arrow function expressions for a more concise syntax. Additionally, the session covers implicit return statements in arrow functions and introduces callback functions as a concept.",
    skills: [
      "Return Statements",
      "Early Return Statements",
      "Arrow Function Expressions",
      "Implicit Return Statements",
      "Callback Functions",
    ],
  },
  {
    title: "HTML Forms",
    category: "JavaScript",
    short:
      "Learn the structure of HTML forms, common input types, validation, and techniques to build accessible forms.",
    long: "This session covers the structure and setup of HTML forms, including wrapping form elements with the `<form>` tag, labeling inputs, and using various input types like text, email, number, and more. It explains client-side validation through attributes like `required` and `pattern`, discusses the behavior of form submission, and introduces form buttons for submission and reset. The session also covers accessibility best practices using fieldsets, legends, and `aria` labels.",
    skills: [
      "Basic form setup",
      "Different types of form fields",
      "HTML Form Validation",
      "Default Behavior of Form Submit",
      "Buttons",
      "Form structure and a11y",
    ],
  },
  {
    title: "JS Inputs and Strings",
    category: "JavaScript",
    short:
      "Learn different ways to create and manipulate strings in JavaScript, and work with HTML input elements and their values.",
    long: "This session explores string creation using single, double, and back ticks (template literals) and covers string properties and methods for manipulation. It also discusses working with input fields in HTML, including accessing and updating their values and applying transformations to input values through JavaScript event listeners.",
    skills: [
      "Strings",
      "Template Literals",
      "String Properties and Methods",
      "Input Fields",
    ],
  },
  {
    title: "JS Forms",
    category: "JavaScript",
    short:
      "Learn how to handle form submission, access form values, and enhance user experience with JavaScript.",
    long: "This session covers listening to form `submit` events and preventing their default behavior with `.preventDefault()`. It introduces accessing form elements and their values using `event.target.elements`, `FormData`, and working with checkboxes. The session also discusses the `input` event for real-time updates, focusing input fields programmatically, and resetting forms for better user experience.",
    skills: [
      "Listening to the submit event and preventing the Default Behavior",
      "The event Object and event.target",
      "Accessing Interactive Fields: event.target.elements and the name Attribute",
      "Using Input Values",
      "Exception: Reading Values from Checkboxes",
      "The input Event",
      "Focus Input Fields",
      "Resetting Forms",
    ],
  },
  {
    title: "JS createElement",
    category: "JavaScript",
    short:
      "Learn how to manipulate the DOM by creating and appending HTML elements using JavaScript, and explore element properties and methods.",
    long: "This session introduces the Document Object Model (DOM) as a way to interact with HTML elements using JavaScript. It covers generating elements with `document.createElement`, adding them to the DOM using `.append`, and modifying properties such as `classList` and `textContent`. The session also explains the use of `.innerHTML` to dynamically set or reset HTML content within an element, while noting the potential security concerns.",
    skills: [
      "The DOM",
      "document.createElement",
      "Element Properties and Methods",
      ".innerHTML",
    ],
  },
  {
    title: "JS Loops",
    category: "JavaScript",
    short:
      "Learn how to use different types of loops in JavaScript to repeat tasks until a condition is met.",
    long: "This session introduces the concept of loops in JavaScript, including `while` loops for repeating tasks based on a condition, classic `for` loops for iterating a specific number of times or over elements, `for...in` loops for iterating over object keys, and `for...of` loops for iterating over array elements. Each loop type serves a different use case for handling repetitive tasks efficiently.",
    skills: ["What is a loop", "while", "for", "for...in", "for...of"],
  },
  {
    title: "JS Callback Functions",
    category: "JavaScript",
    short:
      "Learn about callback functions, how to use them, and understand higher order functions in JavaScript.",
    long: "This session covers the concept of callback functions, which are functions passed as arguments to other functions. It explores how to use anonymous and named functions as callbacks and introduces higher order functions like `addEventListener` that utilize callbacks to execute code under specific conditions. The session also explains how callbacks can accept parameters, and briefly mentions common higher order functions like `.then`, `.forEach`, `.map`, and `.filter`.",
    skills: [
      "Callback Functions",
      "Named Callback Functions",
      "Higher Order Functions",
      "Parameters in Callback Functions",
    ],
  },
  {
    title: "JS Array Methods",
    category: "JavaScript",
    short:
      "Learn to iterate over arrays using `forEach`, `map`, and `filter`, and handle elements in the DOM with `document.querySelectorAll`.",
    long: "This session focuses on JavaScript array methods, including `forEach` for executing side effects on each array element, `map` for transforming arrays into new arrays, and `filter` for creating subsets of arrays based on conditions. It also covers chaining these methods to achieve complex transformations efficiently and introduces `document.querySelectorAll` to select multiple DOM elements and iterate over them.",
    skills: [
      "Introduction to array methods",
      "forEach",
      "map",
      "filter",
      "Chaining array methods",
      "document.querySelectorAll",
    ],
  },
  {
    title: "JS Structure",
    category: "JavaScript",
    short:
      "Learn how to structure JavaScript projects using modules, and understand the concepts of importing, exporting, and organizing code efficiently.",
    long: "This session introduces JavaScript modules, which allow code to be separated into different files using `import` and `export` statements. You'll learn how to use named and default exports, and how to mix them when importing code. The session also covers best practices for structuring JavaScript projects, including creating utility functions, constants, and vanilla JavaScript components to keep code modular and reusable.",
    skills: [
      "JavaScript Modules",
      "Exporting using `export` Statements",
      "Importing using `import` Statements",
      "Structuring JavaScript Code",
    ],
  },
  {
    title: "JS Array Methods 2",
    category: "JavaScript",
    short:
      "Explore advanced JavaScript array methods like `includes`, `find`, `sort`, `some`, `every`, and `reduce` to manipulate and evaluate array contents.",
    long: "This session covers advanced array methods such as `includes` for checking if an element exists, `find` and `findIndex` to locate elements based on conditions, and `sort` and `reverse` to arrange array elements. It also introduces `slice()` to avoid mutating the original array, `some` and `every` to evaluate elements against conditions, and `reduce` to accumulate array elements into a single value. The session emphasizes understanding how these methods alter or create new arrays while maintaining code readability and efficiency.",
    skills: [
      "`includes`",
      "`find` and `findIndex`",
      "`sort` and `reverse`",
      "`slice` to make a copy",
      "`some` and `every`",
      "`reduce`",
    ],
  },
  {
    title: "JS Async Functions",
    category: "JavaScript",
    short:
      "Learn how to work with asynchronous JavaScript, handle promises, and use `async` and `await` for cleaner code.",
    long: "This session introduces asynchronous programming in JavaScript, focusing on how to use promises to handle code that runs in the background, like network requests or animations. You will learn about properties and methods of promises (`then`, `catch`, `finally`), and how to write async functions using the `async` and `await` keywords to simplify chaining asynchronous operations. Error handling is covered using `try`, `catch`, and `finally`, along with methods like `Promise.all()` for running multiple promises in parallel.",
    skills: [
      "Understanding asynchronous code",
      "Working with promises",
      "Using `async` and `await` keywords",
      "Handling errors with `try`/`catch`",
      "Executing parallel promises with `Promise.all()`",
    ],
  },
  {
    title: "JS Fetch",
    category: "JavaScript",
    short:
      "Learn how to work with asynchronous code using the Fetch API to interact with RESTful services, handle JSON data, and manage HTTP responses.",
    long: "This session focuses on working with the Fetch API in JavaScript to make asynchronous requests to web services. You will learn how to use Promises and `async/await` to handle the completion of these requests effectively, parse JSON data, and handle HTTP response codes. The session also covers error handling strategies for both network and response-related errors, as well as a basic introduction to RESTful API concepts.",
    skills: [
      "Understanding asynchronous code",
      "Using Promises and `async/await`",
      "Working with the Fetch API",
      "Parsing JSON data",
      "Handling HTTP response codes",
      "Understanding REST APIs",
      "Error handling in async operations",
    ],
  },
  {
    title: "JS Modern Syntax",
    category: "JavaScript",
    short:
      "Learn about modern JavaScript syntax including destructuring assignment, rest and spread syntax, optional chaining, and nullish coalescing.",
    long: "This session covers the latest features and syntax in JavaScript, providing insight into how the language is evolving. You will learn how to use destructuring for easier access to array and object values, rest and spread syntax to manage collections of data, optional chaining to safely access nested properties, and nullish coalescing to handle null or undefined values more effectively.",
    skills: [
      "Destructuring arrays and objects",
      "Using rest and spread syntax",
      "Optional chaining for safe property access",
      "Nullish coalescing for default values",
      "Understanding JavaScript's evolving syntax",
    ],
  },
  {
    title: "JS Unit Testing",
    category: "JavaScript",
    short:
      "Learn the basics of unit testing, how to write and run tests with Jest, and understand Test Driven Development (TDD).",
    long: "This session introduces unit testing, a process of testing individual units of code to ensure they work as expected. You will learn how to write automated tests for functions using Jest, an easy-to-use testing framework. You will also explore the concept of Test Driven Development (TDD), a methodology in which tests are written before the actual code. By the end of this session, you will know how to structure test files, write meaningful test cases, use Jest matchers to compare expected results, and run tests locally via the command line.",
    skills: [
      "Writing and running Jest unit tests",
      "Using TDD to guide development",
      "Understanding automated testing",
      "Structuring test files effectively",
      "Using Jest matchers for assertions",
    ],
  },
];
