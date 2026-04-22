# React Training - Class 10 - Form Submission

This repository contains the source code for Class 10 of my React training series on YouTube.

In this class, the focus is on mastering form submission in React by creating a practical newsletter subscription form. We cover how to handle form events, manage form state, use the onSubmit handler, implement two-way data binding, and reset forms after submission. This class demonstrates real-world form handling patterns used in React applications.

## What We Covered In This Class

- how to create forms in React
- form submission with onSubmit handler
- managing form input fields with state (userName, userEmail, checkbox)
- capturing user input values in form fields
- two-way data binding for form inputs
- resetting form state after submission
- accessing form data in the submit handler
- best practices for handling form submission in React

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand form submission and handling in React with practical examples.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- a reusable `Header` component
- a reusable `CourseItem` component
- a reusable UI-only `Card` component in `src/components/ui/card/`
- a `Demo` component in `src/components/demo/` showcasing a complete form submission example with a newsletter subscription form
- a practical newsletter subscription form with text inputs and a checkbox
- examples of form state management and form submission patterns
- demonstration of two-way data binding for resetting form fields

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

- renders the `Header` component
- renders multiple `CourseItem` components
- uses the reusable `Card` component directly with custom JSX content
- demonstrates that a component can receive whatever is placed between its tags as `children`

`src/components/demo/Demo.jsx`

- contains a complete newsletter subscription form example
- demonstrates form submission with the onSubmit handler
- manages form state for userName, userEmail, and isSubscribe fields using useState
- shows two-way data binding between form inputs and component state
- uses onChange handlers to capture user input in real-time
- demonstrates form reset by clearing all state values after submission
- shows how to handle different input types (text, email, checkbox)
- includes console logging of form data on submission

`src/components/ui/card/Card.jsx`

- defines the reusable `Card` wrapper component
- renders `props.children` inside a styled `div`
- acts as a UI-only component that can wrap any content

`src/components/course-item/CourseItem.jsx`

- receives the `courseName` prop
- wraps each course item inside the reusable `Card`
- shows how `children` props help avoid repeated wrapper markup

`src/components/header/Header.jsx`

- contains the reusable `Header` component
- is rendered at the top of the app

## Why This Class Is Important

Form submission is one of the most fundamental and frequently used features in web applications. Whether you're building a login page, contact form, or subscription service, understanding how to properly handle forms in React is essential for any developer.

This class helps learners understand:

- how to manage form state effectively in React components
- how to capture and handle user input from various input types
- the importance of the onSubmit handler for form submission
- how two-way data binding simplifies form management
- how to reset forms after submission
- common form submission patterns used in real-world React applications
- best practices for organizing form-related code

## Current Output

At this stage, the app renders:

- a `Header` component with "Form Submission" title
- a newsletter subscription form with three input fields
- a text input field for the user's name
- an email input field for the user's email
- a checkbox for newsletter subscription opt-in
- a submit button to trigger form submission
- form validation and data capture on submission
- form reset functionality that clears all fields after submission

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

- how to create and structure forms in React components
- how to manage multiple form input fields with state
- how to use the onSubmit handler to process form submissions
- how to implement two-way data binding between inputs and state
- how to reset form fields after submission
- how to handle different input types (text, email, checkbox)
- practical form submission patterns used in real-world React applications
- how to access and work with form data in React

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and follow along with Class 10 step by step while practicing form submission concepts and building interactive forms with React on your own.
