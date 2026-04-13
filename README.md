# React Training - Class 6 - Children Props

This repository contains the source code for Class 6 of my React training series on YouTube.

In this class, the focus is on understanding `children` props in React by building a reusable UI-only `Card` component. Instead of repeating the same wrapper markup again and again, we pass JSX content between opening and closing component tags and render it inside the card using `props.children`.

## What We Covered In This Class

- what `children` props are in React
- how nested JSX is passed automatically to a component
- creating one reusable `Card` UI component
- reusing the same `Card` wrapper with different content
- wrapping both list items and custom JSX inside the same component

## What You Will Find In This Repo

This codebase is intentionally simple and beginner-friendly so learners can clearly understand how `children` props work in real usage.

It includes:

- a React app created with Vite
- the main app component in `src/App.jsx`
- a reusable `Header` component
- a reusable `CourseItem` component
- a reusable UI-only `Card` component in `src/components/ui/card/`
- examples of passing content into `Card` using `props.children`

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

`children` props are an essential React concept because they make components more flexible and reusable.

This class helps learners understand:

- how React automatically passes nested content as `children`
- how to create wrapper components for UI reuse
- how the same component can display completely different content
- how to keep component code cleaner by reducing duplicate markup

## Current Output

At this stage, the app renders:

- a `Header` component at the top
- an ordered list of course names
- each course item wrapped inside a reusable `Card`
- an extra `Card` example with a heading and login button

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

- what `props.children` means in React
- how to pass JSX content between component tags
- how to create a reusable wrapper component
- how to use one UI component in multiple places with different content

## Notes

- This project uses React with JavaScript.
- The project is built using Vite.
- This repository is part of a beginner-friendly React learning series on YouTube.

## Follow Along

If you are coming from YouTube, clone this repository, run the project locally, and follow along with Class 6 step by step while practicing `children` props and reusable wrapper components on your own.
