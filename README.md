# React Training - Class 4

This repository contains the source code for Class 4 of my React training series on YouTube.

In this class, the focus is on understanding expressions in JSX. We used JSX expressions to display variable values, perform arithmetic operations, call functions, render content conditionally, and even return JSX conditionally inside the UI.

## What We Covered In This Class

- extracting variable values using JSX expressions
- performing arithmetic operations inside JSX
- calling JavaScript functions inside JSX
- using conditional expressions in JSX
- rendering JSX conditionally inside expressions
- understanding the limitation of JSX expressions: expressions are allowed, but statements are not

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand how JSX expressions work inside a React component.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- a `Header` component in `src/components/header/Header.jsx`
- examples of variable interpolation in JSX
- examples of arithmetic and function calls in JSX
- examples of conditional rendering using expressions

## Project Structure

```text
udemy/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- header/
|   |   |   |-- Header.css
|   |   |   |-- Header.jsx
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
```

## Important Files

`src/App.jsx`

- contains all the JSX expression examples used in this class
- shows how to display variables inside JSX
- demonstrates arithmetic operations like `2 + 5`
- calls a function directly inside JSX
- uses ternary expressions for conditional output
- shows conditional rendering of buttons using expressions
- highlights that statements such as `if...else` cannot be written directly inside JSX

`src/components/header/Header.jsx`

- contains the reusable `Header` component
- is rendered at the top of the app

`src/components/header/Header.css`

- contains the styles for the `Header` component

`src/index.css`

- contains global styles for the project

## Why This Class Is Important

JSX becomes much more powerful when you understand how to use JavaScript expressions inside it.

This class helps learners understand:

- how to mix JavaScript values with JSX markup
- how to write dynamic UI using expressions
- how to use conditional logic in a React-friendly way
- why JSX allows expressions but does not allow statements directly inside markup

## Current Output

At this stage, the app renders:

- a `Header` component at the top
- a greeting using a variable value
- the result of an arithmetic expression
- the return value of a function call
- conditional text using a ternary operator
- conditional `Login` or `Logout` button rendering using JSX expressions

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Learning Goal Of This Class

After this class, learners should understand:

- how to use JavaScript expressions inside JSX
- how to display variable values dynamically
- how to perform simple calculations inside JSX
- how to call functions from JSX
- how to use conditional expressions for rendering
- the difference between expressions and statements in JSX

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and use it to follow along with Class 4 step by step while practicing JSX expressions on your own.
