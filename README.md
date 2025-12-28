# Contentful React Starter

Modern React 19 starter powered by Vite, Tailwind CSS, and shadcn/ui. Includes testing (Vitest + Testing Library), formatting (Prettier), linting (ESLint flat config), and Git hooks (Husky + lint-staged) for a smooth developer experience.

## Quick start

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – type-check and build the app
- `npm run preview` – preview the production build
- `npm run lint` – ESLint with zero warnings allowed
- `npm run lint:fix` – auto-fix lint issues
- `npm run format` / `format:write` – Prettier check/write
- `npm run typecheck` – TypeScript project check
- `npm run test` / `test:watch` – Vitest + Testing Library (jsdom)
- `npm run check` – lint + format + typecheck + tests

## CI (GitHub Actions)

- The workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs on pushes and pull requests to `main`.
- Steps: install with `npm ci`, then lint, test, typecheck, and build to mirror local `npm run check` coverage.
- Uses Node 20 with npm caching; adjust the version in the workflow if your runtime changes.
- Run `npm run check` locally before opening a PR to match CI expectations.
- On every commit, Husky runs a `pre-commit` hook that uses lint-staged to lint and format staged files automatically.

## Docker Deployment

This project includes Docker support for containerized deployment with security best practices:

- Runs on nginx:alpine with a non-root user
- Includes security headers (CSP, X-Frame-Options, etc.)
- Health checks and SPA routing support
- Can be triggered via GitHub Actions workflow_dispatch

See [DOCKER.md](DOCKER.md) for complete documentation, or quick start:

```bash
npm run build
docker build -f Dockerfile.simple -t contentful-react .
docker run -d -p 8080:8080 contentful-react
```

Test locally with: `./test-docker.sh`

## Tooling

- React 19, Vite, and Vitest configured for jsdom
- Tailwind CSS v3 with shadcn/ui primitives (button, card, badge) and design tokens
- ESLint 9 flat config + Prettier, lint-staged, Husky pre-commit hook
- Typed utilities (`cn` with tailwind-merge) and ready-to-style tokens in `src/index.css`

## Notes

- Tailwind configuration lives in `tailwind.config.ts` and is paired with PostCSS via `postcss.config.js`
- Tests load `src/test/setup.ts` to register `@testing-library/jest-dom`
- Adjust the palette and radii in `src/index.css` to quickly change the theme
