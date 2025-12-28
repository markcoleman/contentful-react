# Copilot Instructions

These preferences help generate contributions that match the repo:

- Stack: React 19 + Vite (TS), Tailwind with shadcn-style primitives, React Router. Use functional components and hooks; prefer composable UI sections over monoliths.
- Styling: keep using Tailwind tokens and utilities; avoid inline styles unless necessary. Favor semantic HTML, accessible roles/names, and responsive layouts (mobile-first with modern patterns).
- Testing: use Vitest + Testing Library (jsdom). For components, wrap in `MemoryRouter` when links/routes are present. Query by role/label before test IDs; only add test IDs when necessary.
- Commands to verify locally: `npm run lint`, `npm run test`, `npm run typecheck`, `npm run build` (or `npm run check`).
- Content tone: concise, member-first voice; avoid placeholder lorem ipsum. Keep copy aligned with financial-services context and compliance-friendly language.
- Accessibility: ensure interactive elements have clear names, focus styles, and keyboard support. Prefer links for navigation and buttons for actions.
- Files: keep new assets in `src/` and respect existing folder structure (`components/layout`, `components/sections`, `pages`). Avoid introducing non-ASCII unless required.
