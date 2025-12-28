# Copilot Agents

Guidance for automated agents working in this repo:

- Goals: keep the UI consistent (Tailwind + shadcn-style), maintain accessibility, and protect routing/tests. Favor small, reviewable changes with clear rationale.
- Safe commands: `npm ci`, `npm run lint`, `npm run test`, `npm run typecheck`, `npm run build`. Avoid destructive git operations or force pushes.
- Testing expectations: add/update tests with Vitest + Testing Library. Use `MemoryRouter` for components that rely on routing. Prefer role/label queries; add `data-testid` only when unavoidable.
- Code style: TypeScript, functional React components, hooks over classes. Keep utilities in `src/lib`, sections in `src/components/sections`, layout in `src/components/layout`, pages under `src/pages`.
- Accessibility: ensure navigational elements use links; actions use buttons. Provide `aria` labels for icon-only controls. Maintain focus-visible styles.
- Security & privacy: do not embed secrets, keys, or credentials. Do not call external services unless explicitly required.
- Review notes: when modifying CI/workflows, keep steps minimal (lint, test, typecheck, build) and reuse Node 20 with npm cache.
