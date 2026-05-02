# React Training - Class 11 - Rendering List in JSX using Map Method

This repository contains the source code for Class 11 of my React training series on YouTube.

In this class, the focus is on mastering how to render dynamic lists in JSX using the JavaScript `.map()` method. We cover how to work with arrays of data, render list items dynamically, use the key prop for optimal rendering, create reusable list item components, and display dynamic content efficiently. This class demonstrates essential patterns for rendering collections of data in React applications.

## What We Covered In This Class

- how to create and store lists of data in arrays
- rendering lists in JSX using the map() method
- iterating over arrays to generate JSX elements
- using the key prop for list rendering optimization
- creating reusable components for list items
- accessing array data within map() callbacks
- rendering dynamic content based on array items
- best practices for rendering lists in React

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand list rendering in JSX using the map() method with practical examples.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- an array of course data stored as a constant in the App component
- the map() method used to iterate over the courses array
- a reusable `CourseItem` component for rendering individual list items
- a reusable `Header` component
- a reusable UI-only `Card` component in `src/components/ui/card/`
- proper use of the key prop for list rendering optimization
- demonstrations of dynamic list rendering patterns
- examples of passing data from arrays to reusable components

## Project Structure

```text
udemy/
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|-- src/
|   |-- components/
|   |   |-- course-item/
|   |   |   |-- CourseItem.css
|   |   |   |-- CourseItem.jsx
|   |   |-- demo/
|   |   |   |-- Demo.jsx
|   |   |-- header/
|   |   |   |-- Header.css
|   |   |   |-- Header.jsx
|   |   |-- ui/
|   |   |   |-- card/
|   |   |   |   |-- Card.css
|   |   |   |   |-- Card.jsx
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

- stores an array of course names in a constant called `courses`
- demonstrates the use of the map() method to iterate over the array
- renders multiple `CourseItem` components dynamically using map()
- passes each course name as a prop to the `CourseItem` component
- shows proper use of the key prop for React list rendering optimization
- renders other components like `Header` and `Card` alongside the dynamic list
- demonstrates that components can receive and pass data to other components

`src/components/course-item/CourseItem.jsx`

- receives the `courseName` prop from the parent component
- wraps each course item inside the reusable `Card` component
- displays the course name passed as a prop
- demonstrates how to build reusable components that work with dynamic data
- shows how components designed to display individual items can be rendered in lists

`src/components/header/Header.jsx`

- contains the reusable `Header` component
- is rendered at the top of the app
- receives children content to display

`src/components/ui/card/Card.jsx`

- defines the reusable `Card` wrapper component
- renders `props.children` inside a styled `div`
- acts as a UI-only component that can wrap any content

## Why This Class Is Important

Rendering lists is one of the most common tasks you'll encounter in React development. Whether you're displaying a list of products, users, comments, or any other collection of items, understanding how to efficiently render lists using the map() method is essential for any developer.

This class helps learners understand:

- how to work with arrays of data in React components
- how to use the JavaScript map() method to render dynamic lists in JSX
- the importance of the key prop for React's list rendering optimization
- how to create reusable components that work with dynamic data
- how to pass data from arrays to child components
- common list rendering patterns used in real-world React applications
- best practices for organizing and rendering collections of data
- how to avoid common mistakes when rendering lists in React

## Current Output

At this stage, the app renders:

- a `Header` component with "Udemy" title
- a dynamically rendered list of course items using the map() method
- course items for: HTML, CSS, JavaScript, React, Python, and AWS
- each course item wrapped inside a reusable `Card` component
- proper key props applied to each list item for React optimization
- an unordered list structure that displays all courses
- a reusable `Card` component with login content below the course list

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

- how to store data in arrays within React components
- how to use the JavaScript map() method to render lists in JSX
- why the key prop is essential when rendering lists
- how to create components designed for rendering individual list items
- how to pass data from arrays to reusable components
- practical list rendering patterns used in real-world React applications
- how to avoid common pitfalls like missing keys or incorrect props
- how to organize and structure data for efficient list rendering

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and follow along with Class 10 step by step while practicing form submission concepts and building interactive forms with React on your own.
