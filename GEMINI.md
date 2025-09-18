# Project Overview

This is a Next.js project bootstrapped with `create-next-app`. It uses TypeScript, Tailwind CSS, and ESLint. The project is configured to use Turbopack for development and builds.

The goal is to build a modern, stylish movie and TV show tracking website with a Netflix-like color palette (black and red), using the TMDB API for data.

## Core Features

*   Display trending and top-rated movies and series.
*   User features: Watchlist, Favorites, Reviews, and Ratings.
*   Detailed views for movies/shows including credits, cast, and related content.
*   A modern, animated, and highly polished user interface.

## Building and Running

To build the project, run:

```bash
npm run build
```

To run the development server, run:

```bash
npm run dev
```

To start the application in production mode, run:

```bash
npm run start
```

To run the linter, run:

```bash
npm run lint
```

## Development Conventions & Best Practices

### Architecture & Design Principles

*   **Single Responsibility Principle (SRP):** Every component, hook, or utility should have one, and only one, reason to change.
*   **Separation of Concerns:** Logic should be clearly separated into different parts of the application.
*   **Clean Code:** The code must be kept clean, readable, and maintainable.
*   **Performance:** Algorithmic logic should strive for optimal performance, ideally O(n) complexity where applicable.

### Project Structure

Organize files into the following structure as the project grows:

*   `src/app/`: Main application routes.
*   `src/components/`: Reusable UI components.
    *   `ui/`: Small, generic components (Button, Input, etc.), often from Shadcn.
    *   `layout/`: Components that define parts of the page structure.
    *   `features/`: Components related to a specific feature (e.g., `movie-card`, `review-form`).
*   `src/lib/`: Core logic and utilities.
    *   `constants/`: Static data, enums, or configuration values.
    *   `utils/`: Pure, reusable utility functions.
    *   `hooks/`: Custom hooks encapsulating business logic and state management.
    *   `contexts/`: React Context providers for global state.
    *   `types/` or `interfaces/`: TypeScript type definitions and interfaces.
    *   `api/`: Functions for interacting with the TMDB API.

### Component Design

*   **Small & Reusable:** Create small components with a single purpose.
*   **Composition:** Build complex UIs by composing smaller components. The main component for a view should primarily handle layout and composition of smaller, feature-specific components.
*   **Custom Hooks:** Extract complex state logic, side effects, or data fetching into custom hooks to keep components lean.

### Code Quality & Standards

*   **Naming:** Use descriptive and consistent names for files, variables, functions, and components.
*   **TypeScript:**
    *   **Strict Typing:** Avoid the `any` type. All functions, props, and state must be fully typed.
    *   **Interfaces/Types:** Use interfaces or types for defining the shape of objects (e.g., API responses, component props).
*   **Props:** Component props should be clearly defined and strongly typed.
*   **Error Handling:** Gracefully handle potential errors, API failures, and edge cases.
*   **Accessibility:** Ensure the application is accessible by using semantic HTML and ARIA attributes where necessary.
*   **Performance:**
    *   Avoid unnecessary re-renders using `React.memo`, `useCallback`, and `useMemo` where appropriate.
    *   Analyze and optimize component rendering cycles.

### Styling

*   **Tailwind CSS:** Use Tailwind for all styling.
*   **Shadcn/ui & Aceternity UI:** Leverage these libraries for base components and modern UI patterns/animations.
*   **Color Palette:** Adhere to a Netflix-inspired theme (black, dark grays, and red accents).

### Animation

*   **Libraries:** Use Aceternity UI and Framer Motion for all UI animations.
*   **Optimization:** All animations must be optimized for performance. Use hardware-accelerated CSS properties (`transform`, `opacity`) wherever possible.
*   **Animation Wrappers:** For common effects (e.g., fade-in, slide-in), create reusable wrapper components. For example, a `BlurFade` component could wrap any element to apply that specific animation. This promotes reusability and consistency.
*   **View-Based Triggering:** Animations should trigger when an element enters the viewport. Implement a custom hook like `useInView` (from Framer Motion or a similar library) to efficiently detect when a component is visible on screen and run the animation only once.

### Aceternity UI

*   **Documentation:** [https://ui.aceternity.com/components](https://ui.aceternity.com/components)
*   **Installation:** Most components from Aceternity UI are meant to be copied and pasted directly into your project. They are self-contained and often live in `src/components/ui/`.
    *   For components that have dependencies (like `framer-motion`), ensure those are installed.
    *   To add a component, click the "Code" button on the component's page in the documentation and copy the code into a new file in your project.