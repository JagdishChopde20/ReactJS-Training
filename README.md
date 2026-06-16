# React Training - Class 12 - Child to Parent Component Communication using Props

This repository contains the source code for Class 12 of my React training series on YouTube.

In this class, the focus is on mastering reverse prop flow: how to send data from child components to parent components. We cover how to pass callback functions as props, invoke parent functions from child components, manage state in parent components while accepting updates from children, and implement two-way component communication patterns. This class demonstrates essential communication patterns used in real-world React applications.

## What We Covered In This Class

- understanding parent-to-child props vs child-to-parent communication
- passing callback functions from parent to child components
- invoking parent functions from within child components
- updating parent state based on child component actions
- managing shared state in parent components
- handling events in child components and notifying parents
- best practices for component communication in React
- creating reusable components that communicate with parents through callbacks

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand child-to-parent communication and callback functions with practical examples.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx` that manages shared state
- a state management pattern where parent controls the data
- an `AddCourse` child component that communicates with the parent
- callback functions passed from parent to child as props
- a form component that collects user input and sends it to the parent
- state updates in the parent based on child component actions
- a reusable `CourseItem` component for rendering list items
- a reusable `Header` component
- a reusable UI-only `Card` component in `src/components/ui/card/`
- demonstrations of reverse prop flow and component communication patterns

## Project Structure

```text
udemy/
|-- public/
|   |-- favicon.svg
|   |-- icons.svg
|-- src/
|   |-- components/
|   |   |-- add-course/
|   |   |   |-- AddCourse.jsx
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

- manages the courses state using the useState hook
- defines a callback function `addNewCourseHandler` that updates the state
- passes the callback function to the `AddCourse` child component as the `onAddNewCourse` prop
- demonstrates how parent components manage shared state
- receives data from child components via callback functions
- renders the `AddCourse` component and passes a callback to it
- renders multiple `CourseItem` components using the map() method
- shows how to update parent state based on child component actions
- demonstrates the complete parent-child communication pattern

`src/components/add-course/AddCourse.jsx`

- receives a callback function `onAddNewCourse` as a prop from the parent
- manages its own local state for the new course name input
- uses onChange handler to capture user input in real-time
- calls the parent's callback function when the add button is clicked
- passes the new course data back to the parent component
- clears its local state after successfully sending data to parent
- demonstrates child-to-parent communication using callbacks
- shows how child components trigger parent state updates

`src/components/course-item/CourseItem.jsx`

- receives the `courseName` prop from the parent component
- wraps each course item inside the reusable `Card` component
- displays the course name passed as a prop
- demonstrates how to build reusable components that work with dynamic data

`src/components/header/Header.jsx`

- contains the reusable `Header` component
- is rendered at the top of the app
- receives children content to display

`src/components/ui/card/Card.jsx`

- defines the reusable `Card` wrapper component
- renders `props.children` inside a styled `div`
- acts as a UI-only component that can wrap any content

## Why This Class Is Important

Child-to-parent communication is a fundamental concept in React that enables components to work together effectively. Whether you're building forms, interactive features, or complex applications, understanding how to communicate from child to parent is essential for any developer.

This class helps learners understand:

- how to pass callback functions from parent to child components
- how to invoke parent functions from child components
- how to update parent state based on child actions
- the concept of "lifting state up" in React
- how to create reusable components that communicate with parents
- the importance of keeping data in the parent component that affects multiple children
- common communication patterns used in real-world React applications
- best practices for managing component communication and data flow
- how to avoid common pitfalls like prop drilling and state management issues

## Current Output

At this stage, the app renders:

- a `Header` component with "Udemy" title
- an `AddCourse` form component that allows users to add new courses
- a text input field to enter the new course name
- an "Add Course" button that sends data to the parent
- a dynamically rendered list of course items using the map() method
- initial course items for: HTML, CSS, JavaScript, React, Python, and AWS
- new courses added through the form are instantly displayed in the list
- each course item wrapped inside a reusable `Card` component
- proper key props applied to each list item for React optimization
- demonstrates live data updating from child to parent communication

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

- how to pass callback functions as props from parent to child components
- how to invoke parent functions from within child components
- how to send data from child components to parent components
- how to update parent state based on child component actions
- the concept of "lifting state up" and managing shared state
- how to create reusable components that communicate with parents
- practical component communication patterns used in real-world React applications
- how to structure components for effective parent-child data flow
- how to implement forms that update parent component state
- the importance of keeping data where it's needed

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and follow along with Class 12 step by step while practicing child-to-parent communication and implementing callback functions in React on your own.
