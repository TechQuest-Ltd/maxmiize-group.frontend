# Maxmiize Group Frontend

A modern, responsive web application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** React 19.2.0
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.18
- **Routing:** React Router DOM 7.11.0
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd maxmiize-group-frontent
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run format` - Format code using Prettier

## Project Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI components
│   └── ui/        # Base UI components (buttons, cards, etc.)
├── lib/           # Utility functions and helpers
├── pages/         # Page components and routes
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles and Tailwind directives
```

## Features

- Modern React 19 with TypeScript for type safety
- Tailwind CSS for utility-first styling
- Radix UI for accessible, unstyled component primitives
- React Router for client-side routing
- Motion for smooth animations
- ESLint and Prettier for code quality and consistency
- Fast development experience with Vite

## Development Guidelines

### Code Formatting

This project uses Prettier for code formatting. Format your code before committing:

```bash
npm run format
```

### Linting

Run ESLint to catch potential issues:

```bash
npm run lint
```

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Browser Support

This application supports all modern browsers that are compatible with ES2020+ JavaScript features.

## License

Private - All rights reserved
