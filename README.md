# React Training - Class 1

This repository contains the source code for the first class of my React training series on YouTube.

In this class, we covered:

- what React is and why it is used
- the significance of components in React applications
- the tools required to start React development
- how to create a new React + JavaScript project using Vite
- how to remove the default boilerplate and keep the project clean

## What You Will Find In This Repo

This codebase is intentionally simple because it is meant for beginners.

It includes:

- a fresh React app created with Vite
- React wired through `src/main.jsx`
- a basic `App` component in `src/App.jsx`
- minimal global styling in `src/index.css`
- boilerplate files cleaned up for easier learning

## Prerequisites

Before starting React development, make sure you have:

- Node.js installed
- Visual Studio Code installed

Node.js is needed to install packages and run the development server.
VS Code is recommended as the code editor used to write and manage the project.

## Tech Stack

- React
- JavaScript
- Vite
- ESLint

## Project Structure

```text
udemy/
|-- public/
|-- src/
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   |-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
```

## Important Files

`src/main.jsx`

- entry point of the React application
- renders the root `App` component

`src/App.jsx`

- contains the main component shown in this lesson
- demonstrates a simple React component structure

`src/index.css`

- contains the current global styles for the page

`index.html`

- provides the root element where the React app mounts

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

## Current Output

At this stage, the app renders a simple heading and paragraph so learners can focus on understanding:

- how React boots up
- how components are created
- where application code lives
- how a cleaned project looks after removing starter boilerplate

## Learning Goal Of This Class

The goal of this first class is to build a strong foundation before moving to more advanced React topics.

After this class, learners should understand:

- what React does
- why components are important
- which tools are required to begin
- how to create and run a React project locally
- how to start with a clean project structure

## Notes

- This project uses React with JavaScript, not TypeScript.
- The default Vite starter content has been removed for clarity.
- This repository is part of a beginner-friendly React learning series.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and use it as your starting point while learning React step by step.
