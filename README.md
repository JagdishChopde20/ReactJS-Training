# React Training - Class 8 - Event Handling

This repository contains the source code for Class 8 of my React training series on YouTube.

In this class, the focus is on understanding Event Handling in React by exploring how to capture events like onClick, onChange, etc., and how to write event handlers. We cover everything from basic event handlers to inline event handlers and practical examples in React components.

## What We Covered In This Class

- what event handling is in React
- different types of events (onClick, onChange, etc.)
- how to write event handlers using defined functions
- inline event handlers and their syntax
- examples and demos of event handling in action
- best practices for using event handlers in React

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand event handling concepts in real usage.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- a reusable `Header` component
- a reusable `CourseItem` component
- a reusable UI-only `Card` component in `src/components/ui/card/`
- a `Demo` component in `src/components/demo/` showcasing event handling examples
- examples of different event handling patterns (defined handlers and inline handlers)

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

- contains examples of event handling in React
- demonstrates how to use onClick and onChange events
- shows both defined event handlers and inline event handlers
- practical usage of event handling in a React component

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

Event handling is a fundamental part of building interactive React applications. Understanding how to capture and respond to user interactions is crucial for creating dynamic user interfaces.

This class helps learners understand:

- the basics of event handling in React
- different event types and their use cases
- how to write clean and effective event handlers
- the difference between defined and inline event handlers
- best practices for event handling in React components

## Current Output

At this stage, the app renders:

- a `Header` component with "Event Handling" title
- a greeting message using a function call
- interactive buttons demonstrating onClick events
- an input field with onChange event handling
- examples of both inline and defined event handlers

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

- how to handle events in React components
- the syntax for attaching event handlers to JSX elements
- when to use defined event handlers vs inline handlers
- how to access event objects and target values
- practical implementation of event handling in real React apps

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and follow along with Class 8 step by step while practicing event handling concepts and building interactive components on your own.
