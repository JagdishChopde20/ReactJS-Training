# React Training - Class 3

This repository contains the source code for Class 3 of my React training series on YouTube.

In this class, the focus is on adding CSS styling inside components. We created a separate `Header.css` file, imported it into `Header.jsx`, and used it to style the app bar.

## What We Covered In This Class

- creating a separate CSS file for a component
- importing a CSS file inside a React component
- applying class names in JSX
- styling the `Header` component as an app bar
- keeping component code and component styles organized together

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand how styling works in a React component-based structure.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- a `Header` component in `src/components/header/Header.jsx`
- a component-specific stylesheet in `src/components/header/Header.css`
- global styling files such as `src/App.css` and `src/index.css`

## Project Structure

```text
udemy/
|-- public/
|-- src/
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

`src/components/header/Header.jsx`

- contains the `Header` component
- imports `Header.css`
- applies class names used for styling the app bar and heading

`src/components/header/Header.css`

- contains the styles for the `Header` component
- styles the app bar background and heading text

`src/App.jsx`

- imports and renders the `Header` component
- keeps the example simple so learners can focus on styling concepts

`src/index.css`

- contains global styles for the project

## Why This Class Is Important

When building React applications, styling components properly is just as important as creating them.

This class helps learners understand:

- how to keep styles in a separate CSS file
- how to connect CSS files with React components
- how `className` is used in JSX
- how to organize component files and styles in the same folder

## Current Output

At this stage, the app renders:

- a `Header` component with the title `Udemy`
- a styled app bar with background color and heading text color
- a paragraph in the main app below the header

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

- how to create a component-level CSS file
- how to import CSS into a React component
- how to apply styles using `className`
- how to keep React component code and styling organized

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and use it to follow along with Class 3 step by step.
