export const reactData = [
  {
    title: "React Basics",
    category: "React",
    short:
      "Learn the basics of React, including components, JSX, rendering, and working with npm and the React ecosystem.",
    long: "This session covers the foundational concepts of React, a JavaScript library for building user interfaces. You will learn how to write declarative code using JSX, create and use React components, understand the React rendering process, and differentiate between imperative and declarative programming. Additionally, the session explores the npm ecosystem for managing packages, how to scaffold a new React project using Create React App, and an introduction to semantic versioning.",
    skills: [
      "What is React and why do we use it?",
      "Using JSX",
      "React Components",
      "Imperative vs. Declarative Programming",
      "How React Renders",
      "Nice to know: React, JSX, Transpilers and Bundlers",
      "npm",
      "`package.json`",
      "Semantic Versioning",
      "Project Scaffolding with `Create React App`",
    ],
  },
  {
    title: "React Props",
    category: "React",
    short:
      "Learn how to use props to pass data to child components in React, how to pass and use props in a component, and how to implement conditional rendering.",
    long: "This session introduces props in React, which allow you to pass data to child components as a way to make them dynamic and reusable. You'll learn how to pass different types of props to a component, how to use destructuring for better readability, and how to handle props with different data types, including strings, numbers, arrays, and functions. Additionally, the session covers conventions for naming props, treating them as immutable, and techniques for conditional rendering to control what gets displayed based on prop values.",
    skills: [
      "Using Props",
      "Passing Props to a Component",
      "Conditional Rendering",
    ],
  },
  {
    title: "React Nesting",
    category: "React",
    short:
      "Learn how to create a hierarchy of custom components in React, use the `children` prop for nesting, and understand component composition.",
    long: "This session covers how to build a component hierarchy in React by nesting custom components and passing JSX as props. It introduces the `children` prop, which allows nested elements to be rendered within parent components, and shows how to return multiple elements using `Fragments`. The session also covers the concept of composition, where complex components are constructed from simpler components to form a cohesive application design.",
    skills: [
      "Passing JSX as Props",
      "Using the `children` Prop",
      "Fragments",
      "Composition",
    ],
  },
  {
    title: "React Project Setup",
    category: "React",
    short:
      "Learn how to scaffold a React project using Vite, understand its folder structure, and work with npm scripts.",
    long: "This session covers setting up a React project using Vite, which simplifies project scaffolding. It includes understanding the folder structure Vite creates and the common npm scripts used to run, lint, and preview the project.",
    skills: ["Project Scaffolding", "Vite", "Folder Structure"],
  },
  {
    title: "React State",
    category: "React",
    short:
      "Learn how to use state in React to manage data that changes over time.",
    long: "This session explains the concept of state in React, how to use the `useState` hook to manage data that changes over time, and how React components re-render when state changes. It covers examples such as toggling a 'like' on a social media post and handling multiple states within a component.",
    skills: [
      "Understanding the concept of state in React",
      "Using `useState()` to handle state",
      "Understanding how state changes trigger re-renders",
    ],
  },
  {
    title: "React with Arrays",
    category: "React",
    short:
      "Learn how to use .map() to render lists in JSX, render items from an array of objects, and add unique keys for list items.",
    long: "This session covers using the .map() method to transform and render arrays in JSX, the importance of adding a unique key property when rendering lists, and using keyed fragments to wrap items that aren't enclosed in a single JSX tag. You will understand how React utilizes keys to track changes when re-rendering and how to correctly apply these practices to manage lists efficiently.",
    skills: ["Arrays in JSX", "Key Property", "Keyed Fragments"],
  },
  {
    title: "React State 2",
    category: "React",
    short:
      "Learn how to handle form fields, share state between components through lifting state up, handle form submission events, and understand hooks and their rules.",
    long: "This session focuses on sharing state between React components by passing state and functions down as props, lifting state up to share it across components, and handling form data using controlled and uncontrolled inputs. You'll learn how to use React's `useState` for state management, understand how state updates are asynchronous, and explore what hooks are and how to properly use them in React applications.",
    skills: [
      "Sharing State Between Components",
      "Handling Form Data",
      "State Updates are not Immediate",
      "React Hooks",
    ],
  },
  {
    title: "React State 3",
    category: "React",
    short:
      "Learn how to handle arrays and objects in React state effectively and avoid state mutation.",
    long: "This session teaches how to update arrays and objects in React state without mutating them, ensuring state immutability. You'll explore techniques for adding, removing, replacing, and sorting elements in arrays and objects within state. The session also covers strategies for grouping related state, avoiding redundant state, and preventing duplicate state, with best practices for structuring complex state effectively.",
    skills: [
      "Avoiding State Mutation",
      "Updating Objects in State",
      "Updating Arrays in State",
      "Updating Arrays of Objects in State",
      "Choosing the State Structure",
    ],
  },
  {
    title: "React Effects and Fetch",
    category: "React",
    short:
      "Learn how to use the `useEffect` hook to manage side effects like fetching data and synchronizing React components with external systems.",
    long: "This session covers how to use the `useEffect` hook to handle side effects in React, such as fetching data from APIs, manipulating the DOM, and working with timers. You'll learn how to define effect functions, manage effect dependencies, and handle cleanup functions for better performance and synchronization. The session also introduces different scenarios where `useEffect` is useful, such as fetching data on component mount or on changes in props or state.",
    skills: [
      "Effects in React",
      "useEffect",
      "Effect Dependencies",
      "Cleanup Function",
      "How to Fetch Data in React",
    ],
  },
  {
    title: "React with Local Storage",
    category: "React",
    short:
      "Learn to use the Web Storage API to persist data in the browser and work with `localStorage` in React apps.",
    long: "This session introduces the Web Storage API, focusing on `localStorage` to store data persistently in the browser across sessions. It covers how to store, retrieve, remove, and clear data in `localStorage`, as well as handling complex data with JSON serialization. The session also explains how to integrate `localStorage` with React state for persistence and introduces the `use-local-storage-state` library as an easy way to handle state with `localStorage`. Additionally, you'll learn the basics of creating React custom hooks for abstraction.",
    skills: [
      "The Web Storage API",
      "Storing Data",
      "Retrieving Data",
      "Removing Data",
      "Clearing All Data",
      "Storing Complex Data",
      "Helper Functions",
      "React with Local Storage",
      "use-local-storage-state",
      "React Custom Hooks",
    ],
  },
  {
    title: "React Custom Hooks",
    category: "React",
    short:
      "Learn how to create and use custom hooks in React to abstract stateful logic and reuse functionality across components.",
    long: "This session covers creating custom hooks in React, which are functions that start with 'use' and encapsulate stateful logic, such as managing state or synchronizing with window events. Custom hooks can return single values, arrays, or objects, and may accept parameters for flexibility. Examples include hooks for counters, fetching data, and managing state in various formats. The session also discusses when it's appropriate to create custom hooks and how to structure them for reuse across multiple components.",
    skills: [
      "Introduction",
      "Counter Example",
      "Custom Hook Return Values",
      "Hook Parameters",
      "Hooks and Modules",
    ],
  },
  {
    title: "React Component Testing",
    category: "React",
    short:
      "Learn how to write and run component tests in React to ensure functionality, simulate user interactions, and verify UI behavior.",
    long: "This session introduces the concept of component testing in React, which focuses on testing individual components by rendering them in isolation, simulating user interactions, and checking the expected output. The session covers how to render components, search for expected elements, simulate user events, and use matchers to formulate expected results using the Testing Library. It also includes information on creating mock functions for testing event handlers and handling Next.js components that use the `useRouter` hook.",
    skills: ["Testing Library", "Mocks"],
  },
  {
    title: "React Styled Components",
    category: "React",
    short:
      "Learn how to use styled components to write CSS within JavaScript, with dynamic styling, nested styles, and global styling support.",
    long: "This session focuses on using the styled-components library in React, a CSS-in-JS library that allows for writing component-level styles in JavaScript. Topics covered include creating styled components, extending styles for custom components, adapting styles based on props, and utilizing nested styles with pseudoelements and pseudoselectors. The session also covers setting up global styles in Next.js and integrating Google Fonts for improved performance and compliance.",
    skills: [
      "What is CSS-in-JS and why do we use it?",
      "Styling with styled components",
    ],
  },
  {
    title: "React Global State",
    category: "React",
    short:
      "Learn about lifting state up, prop drilling, naming conventions with prop drilling, and the concept of global state.",
    long: "This session covers how to manage state across components in React, focusing on lifting state up, understanding the challenges of prop drilling, proper naming conventions when passing props and functions, and introducing the concept of global state using state management libraries.",
    skills: [
      "Lifting State Up",
      "Prop drilling",
      "Naming conventions for props and functions",
      "State management libraries",
    ],
  },
  {
    title: "React Immutable State",
    category: "React",
    short:
      "Learn why you should never mutate state directly, how to work with nested arrays and objects in state, and how to use the `useImmer` hook for managing immutable state in React.",
    long: "This session explains the importance of treating state as immutable in React. It covers best practices for updating nested state objects and arrays without direct mutation, and introduces the `useImmer` hook as a convenient way to handle complex state updates.",
    skills: [
      "Never mutate state",
      "Updating nested states",
      "Using `immer` in React: `useImmer` hook",
      "Working with objects in arrays",
    ],
  },
  {
    title: "React Data Fetching",
    category: "React",
    short:
      "Learn to efficiently fetch and manage data in React using the SWR library.",
    long: "This session covers the use of the SWR library for data fetching in React, demonstrating how it simplifies processes like caching, refetching, error handling, and loading state management, compared to using the `useEffect` hook and native `fetch` API. It also explores techniques for integrating local state with server-fetched data.",
    skills: [
      "Why a data fetching library over `useEffect` and `fetch`?",
      "How to SWR",
      "Loading and Error State",
      "Fetch on Interval and Button Click",
      "Data is Cached",
      "SWR Response API",
      "Combine Fetched Data with Local State",
    ],
  },
];
