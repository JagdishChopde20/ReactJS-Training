# React Training - Class 2

This repository contains the source code for Class 2 of my React training series on YouTube.

In this class, we focused on understanding the project structure in detail and creating a new reusable component by building a `Header` component.

## What We Covered In This Class

- understanding the overall React project structure
- learning the purpose of important files and folders
- understanding how `main.jsx` connects React to the DOM
- understanding the role of `App.jsx` in the application
- creating a new component inside a separate folder
- importing and using the `Header` component inside `App.jsx`

## What You Will Find In This Repo

This codebase is still beginner-friendly and intentionally simple so learners can clearly understand how a React project is organized.

It includes:

- a React app created with Vite
- the React entry point in `src/main.jsx`
- the main app component in `src/App.jsx`
- a new `Header` component in `src/components/header/Header.jsx`
- basic styling files such as `src/App.css` and `src/index.css`

## Project Structure

```text
udemy/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- header/
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

`src/main.jsx`

- entry point of the React application
- renders the `App` component inside the root element

`src/App.jsx`

- acts as the main component of the app
- imports and displays the `Header` component

`src/components/header/Header.jsx`

- contains the `Header` component created in this class
- shows how to organize components in separate folders

`src/index.css`

- contains global styles for the project

`index.html`

- provides the root element where the React app mounts

## Why This Class Is Important

Before building bigger React applications, it is important to understand where files should live and how components are organized.

This class helps learners understand:

- how a React project is structured
- why components should be separated into their own files
- how to keep code cleaner and easier to manage
- how one component can be imported into another

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

At this stage, the app renders:

- a `Header` component with the title `Udemy`
- a paragraph inside the main `App` component

This keeps the example simple so learners can focus on component structure and file organization.

## Learning Goal Of This Class

After this class, learners should understand:

- the basic folder structure of a React project
- the role of `main.jsx`, `App.jsx`, and component files
- how to create a new component
- how to import and use that component inside the app
- how to organize beginner React projects in a clean way

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and use it to follow along with Class 2 step by step.
