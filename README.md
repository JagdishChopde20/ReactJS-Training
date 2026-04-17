# React Training - Class 9 - useState Hook

This repository contains the source code for Class 9 of my React training series on YouTube.

In this class, the focus is on understanding the useState Hook in React by exploring what hooks are, the purpose of useState, its syntax, and how to manage state in functional components. We cover everything from basic state management to practical examples using useState in React components.

## What We Covered In This Class

- what hooks are in React
- what is the purpose of useState hook
- its syntax and how to use it
- how to manage state in functional components
- examples and demos of useState in action
- best practices for using useState in React

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand useState hook concepts in real usage.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- a reusable `Header` component
- a reusable `CourseItem` component
- a reusable UI-only `Card` component in `src/components/ui/card/`
- a `Demo` component in `src/components/demo/` showcasing useState examples
- examples of state management patterns using useState

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

- contains examples of useState hook in React
- demonstrates how to use useState for managing component state
- shows updating state with setState function
- practical usage of useState in a React component

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

State management is a fundamental part of building dynamic React applications. Understanding how to use the useState hook is crucial for creating interactive user interfaces that respond to user actions and data changes.

This class helps learners understand:

- the basics of hooks and the useState hook in React
- how to declare and initialize state variables
- how to update state and trigger component re-renders
- best practices for state management in React components

## Current Output

At this stage, the app renders:

- a `Header` component with "useState Hook" title
- a greeting message that updates with state changes
- interactive buttons demonstrating state updates
- a counter that increments using state
- examples of using useState with strings and numbers

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

- how to use the useState hook in React components
- the syntax for declaring and initializing state variables
- how to update state and trigger re-renders
- practical implementation of state management in real React apps

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and follow along with Class 9 step by step while practicing useState hook concepts and building stateful components on your own.
