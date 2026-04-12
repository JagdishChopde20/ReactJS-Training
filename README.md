# React Training - Class 5

This repository contains the source code for Class 5 of my React training series on YouTube.

In this class, the focus is on understanding Props (short for Properties) in React. We learned how to pass data from a parent component to a child component, how props are received inside a component, how to work with multiple props and different data types, and why props are read-only.

## What We Covered In This Class

- basic props example with a hands-on demo
- props as function parameters
- passing multiple props
- passing different data types through props
- understanding that props are read-only

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand how props work in React components.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- a reusable `Header` component
- a reusable `CourseItem` component
- examples of passing props from parent to child
- a simple demonstration showing that props cannot be modified inside the child component

## Project Structure

```text
udemy/
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|-- src/
|   |-- components/
|   |   |-- course-item/
|   |   |   |-- CourseItem.jsx
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

- renders the `Header` component
- imports and uses the `CourseItem` component multiple times
- passes the `courseName` prop from parent to child
- demonstrates how props make components reusable

`src/components/course-item/CourseItem.jsx`

- receives props inside the component
- displays `props.courseName` inside a list item
- includes a commented example showing that props are read-only

`src/components/header/Header.jsx`

- contains the reusable `Header` component
- is rendered at the top of the app

## Why This Class Is Important

Props are one of the most important concepts in React because they allow components to communicate with each other.

This class helps learners understand:

- how parent components send data to child components
- how child components receive and use that data
- how the same component can be reused with different values
- why props should never be changed inside the receiving component

## Current Output

At this stage, the app renders:

- a `Header` component at the top
- an ordered list of course names
- repeated `CourseItem` components with different `courseName` prop values

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

- what props are in React
- how to pass props from one component to another
- how to access props inside a child component
- how to pass multiple values and different data types as props
- why props are immutable and read-only

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and follow along with Class 5 step by step while practicing React props on your own.
