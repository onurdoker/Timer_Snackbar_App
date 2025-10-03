# Timer & Snackbar (Vite Multi‑Page App)

This repository contains a simple multi‑page vanilla JavaScript app built with Vite. It demonstrates two small exercises:

- 01-timer: a countdown timer using flatpickr for date/time picking.
- 02-snackbar: promise notifications using iziToast.

The project is configured as a multi‑page Vite app: every HTML file in src/*.html is treated as an entry point and built separately.


## Stack / Tooling
- Language: JavaScript (ES Modules)
- Bundler/Dev server: Vite 6.3.4
- Package manager: npm (see package-lock.json)
- Plugins:
  - vite-plugin-html-inject
  - vite-plugin-full-reload
  - postcss + postcss-sort-media-queries
- UI libraries:
  - flatpickr (date picker)
  - iziToast (notifications)
- Module format: type: module (see package.json)


## Requirements
- Node.js LTS installed (recommend v18+ or v20+)
- npm (comes with Node.js)


## Getting Started
1. Install dependencies:
   - npm install
2. Start the dev server:
   - npm run dev
   - Open http://localhost:5173
3. Build for production:
   - npm run build
4. Preview the production build locally:
   - npm run preview


## npm Scripts
- dev: vite
- build: vite build --base=/goit-js-hw-10/
- preview: vite preview

Note about --base: The base path is set for GitHub Pages deployment under the repository name goit-js-hw-10. If you fork/rename the repo or deploy under a different path, adjust this value accordingly in package.json.


## Project Structure
Top-level directories/files of interest:

- src/
  - index.html — landing page linking to exercises
  - 01-timer.html — page entry for the timer
  - 02-snackbar.html — page entry for the snackbar
  - js/
    - 01-timer.js — timer logic using flatpickr and iziToast
    - 02-snackbar.js — example showing success/error notifications based on a promise
  - css/
    - styles.css — styles for the index page
    - 01-timer.css — styles for the timer page
    - 02-snackbar.css — styles for the snackbar page
  - img/ — images (if any)
  - public/ — static assets to be served as-is (if needed)
- vite.config.js — Vite configuration (root set to src, multi-entry via glob)
- package.json / package-lock.json — dependencies and scripts
- assets/ — repository images used in documentation (optional)
- vite-project/ — a sample Vite scaffold not used by the current build (root is src). You can ignore or remove if unnecessary.

Entry points: All HTML files that match src/*.html are used as independent entries and will be emitted to dist/ accordingly.

Output directory: dist/ (configured via outDir in vite.config.js)


## Environment Variables
- None are required for local development or build at this time.
- TODO: If future features require API keys or configuration, document expected variables here and how to load them (e.g., .env files read by Vite).


## Running & Development Notes
- Hot Module Replacement (HMR) works out of the box with Vite; saving files under src/ will refresh the browser.
- CSS is processed with postcss-sort-media-queries using a mobile‑first strategy (see vite.config.js).


## Tests
- No automated tests are present in this repository.
- TODO: Add tests (e.g., using Vitest/Jest + Playwright) and document how to run them here.


## Deployment (GitHub Pages)
This project is ready to be deployed to GitHub Pages as a static site.

1. Ensure the build base path matches your repository name in package.json:
   "build": "vite build --base=/goit-js-hw-10/"
2. Build the project: npm run build
3. Host the contents of dist/ via GitHub Pages. Common approaches:
   - Push dist/ to a gh-pages branch.
   - Use a GitHub Action to build on push and deploy to gh-pages.

If you see a blank page after deployment, check the browser console for 404s related to CSS/JS paths; an incorrect --base value is the most common cause.

Note: The previous template screenshots and descriptions in assets/ relate to a generic deployment flow; they may not reflect any configured GitHub Action in this repo. Configure CI/CD as needed.


## License
ISC © Alexander Repeta


## Changelog & Maintenance
- Updated README on 2025-10-03 to reflect the current stack, scripts, structure, and deployment notes.

## TODOs
- Add CI (e.g., GitHub Actions) for build/deploy and tests.
- Document environment variables if/when added.
- Decide whether to keep or remove vite-project/ scaffold.
