# Project Portfolio

This project is designed to be a personal web development showcase. It is intended to represent my skills as well as display completed projects. It is currently still in the early stages, but will evolve over time as more content is added.

## Installation

Use npm to install dependencies:

```sh
npm install
```

## Development

Start local server:

```sh
npm run dev
```

## Captures

Desktop - Set dev tools viewport 1350 x 770 and capture area screenshots. Aspect ratio is 135 : 77.

Mobile - Set dev tools viewport 390 x 655 and capture area screenshots. Aspect ratio is 78 : 131.

## Next.js project creation

### 1. Create new project

```sh
npx create-next-app@latest
```

This project was created using v16.2.11 on 2026-07-22.

- Configure with recommended defaults except be sure to include src/
- TypeScript, ESLint, No React Compiler, Tailwind CSS, src/, App Router, AGENTS.md

### 2. Install SASS

```sh
npm install --save-dev sass
```

Rename .css files to scss

### 3. Install Prettier

```sh
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Modify your ESLint configuration file (e.g., eslint.config.mjs) to include Prettier.

Run prettier:

```sh
npx prettier --write .
```
Sync .prettierignore with content from .gitignore

### 4. Organize files

- Move svgs into public/svgs folder