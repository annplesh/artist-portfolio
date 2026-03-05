# Artist Portfolio

A lightweight portfolio application for showcasing artwork in a clean and structured way. It includes a gallery, category-based filtering, and a simple contact form, built with a modern frontend stack focused on clarity, maintainability, and easy expansion.

---

## Features

- Artwork gallery rendered from a local data source
- Category-based filtering (painting, digital, sketch, etc.)
- Contact form with name, email, and message fields
- Minimal, readable component structure
- Tailwind CSS for styling without external UI libraries
- Code organized for clarity and easy onboarding

---

## Tech Stack

- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **ESLint**
- **PostCSS**

---

## Project Structure

```
artist-portfolio/
│
├── src/
│   ├── components/
│   │   ├── Gallery.tsx
│   │   ├── Filters.tsx
│   │   └── ContactForm.tsx
│   │
│   ├── data/
│   │   └── artworks.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```


## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

This project is intended for educational and portfolio purposes.
