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

## Tooling

- React 19, Vite, and Vitest configured for jsdom
- Tailwind CSS v3 with shadcn/ui primitives (button, card, badge) and design tokens
- ESLint 9 flat config + Prettier, lint-staged, Husky pre-commit hook
- Typed utilities (`cn` with tailwind-merge) and ready-to-style tokens in `src/index.css`

## Notes

- Tailwind configuration lives in `tailwind.config.ts` and is paired with PostCSS via `postcss.config.js`
- Tests load `src/test/setup.ts` to register `@testing-library/jest-dom`
- Adjust the palette and radii in `src/index.css` to quickly change the theme
