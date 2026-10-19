/* =============================================================================
 * SKILLS
 *
 * A cross-project view of every skill and concept exercised across the seven
 * products. `usedIn` is a manually maintained project count, not a list of
 * project references or an automatically verified coverage metric.
 *
 * Sourced from the project case studies in ./projects.js
 * ========================================================================== */

export const SKILL_GROUPS = [
  {
    id: 'architecture',
    title: 'Platform Architecture',
    blurb: 'The structural decisions that decide whether a system scales or collapses.',
    items: [
      { name: 'Multi-tenancy', note: 'Tenant isolation resolved once in middleware, enforced again as a query filter', usedIn: '6 of 7' },
      { name: 'Role-based access control', note: 'Grants, scopes, purpose-scoped tokens and manager-approval override queues', usedIn: '6 of 7' },
      { name: 'Monorepos', note: 'pnpm workspaces + Turborepo across 17-package and 8-package trees', usedIn: '3 of 7' },
      { name: 'API gateway & reverse proxy', note: 'Stateless gateways, order-sensitive route registration, WebSocket-before-HTTP catch-all', usedIn: '4 of 7' },
      { name: 'State machines', note: 'Trip, booking and order lifecycles with explicit status logs', usedIn: '3 of 7' },
      { name: 'Offline-first architecture', note: 'SQLite WAL cache so the till keeps selling through a network drop', usedIn: '1 of 7' },
      { name: 'Audit trails', note: 'Append-only ledgers and event logs for money and access changes', usedIn: '4 of 7' },
      { name: 'API versioning & docs', note: 'Swagger at /api/docs, versioned public surfaces', usedIn: '2 of 7' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    blurb: 'Serving layer: routing, validation, realtime and defensive engineering.',
    items: [
      { name: 'Node.js', note: 'Backend runtime across five portfolio products', usedIn: '5 of 7' },
      { name: 'TypeScript', note: 'Strict typing across all 17 XOVO packages and the Turborepo apps', usedIn: '6 of 7' },
      { name: 'Express', note: 'Route composition, middleware chains, shared router factories', usedIn: '4 of 7' },
      { name: 'Fastify', note: 'Plugin architecture, correlation IDs, standardised envelopes', usedIn: '2 of 7' },
      { name: 'REST API design', note: 'Module directories per business domain, not flat route files', usedIn: '7 of 7' },
      { name: 'Realtime', note: 'Socket.IO on a shared HTTP server with a lazy, testable accessor', usedIn: '4 of 7' },
      { name: 'Idempotency', note: 'Replay protection on checkout, webhooks and settlement jobs', usedIn: '3 of 7' },
      { name: 'Rate limiting & CSRF', note: 'Redis-backed throttling and CSRF enforcement at the edge', usedIn: '2 of 7' },
      { name: 'Zod validation', note: 'Shared schema package so contract changes break API and clients together', usedIn: '3 of 7' },
      { name: 'Code reuse patterns', note: 'Router factories turning 600-line implementations into 11-line modules', usedIn: '2 of 7' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Storage',
    blurb: 'Modelling, migration and the query work that keeps pages fast.',
    items: [
      { name: 'PostgreSQL', note: 'Primary relational store with Sequelize and Umzug migrations', usedIn: '3 of 7' },
      { name: 'Prisma', note: '103-model schema with the tenancy spine on every transactional table', usedIn: '1 of 7' },
      { name: 'MongoDB & Mongoose', note: '126 models on XOVO; aggregation pipelines elsewhere', usedIn: '4 of 7' },
      { name: 'SQLite', note: 'better-sqlite3 WAL mode for the offline retail cache', usedIn: '1 of 7' },
      { name: 'Redis', note: 'Caching, surge stress values, rate limits, job coordination', usedIn: '5 of 7' },
      { name: 'Data modelling', note: '103 + 126 + 64 models designed across the portfolio', usedIn: '7 of 7' },
      { name: 'Schema migrations', note: '53 versioned Sequelize migrations in PORTZ alone', usedIn: '2 of 7' },
      { name: 'Analytics queries', note: 'Health analytics computed server-side from aggregate queries', usedIn: '3 of 7' },
      { name: 'Encryption at rest', note: 'AES-256-GCM for user media, key material kept out of the client', usedIn: '2 of 7' },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Finance',
    blurb: 'The money paths — correct even when everything else is on fire.',
    items: [
      { name: 'Stripe Connect', note: 'Vendor sub-merchant onboarding, PaymentIntents, Apple Pay', usedIn: '3 of 7' },
      { name: 'Webhook engineering', note: 'Signature verification, durable event records, double idempotency layers', usedIn: '3 of 7' },
      { name: 'Adyen & PayPal', note: 'Multi-rail checkout with provider-specific flows', usedIn: '1 of 7' },
      { name: 'SoftPOS / EMV', note: 'ZCS SmartPos Android AARs, serial TLV, WebSocket terminal bridge', usedIn: '1 of 7' },
      { name: 'Wallets & local rails', note: 'Apple Pay, FPS transfers, Airwallex beneficiary payouts', usedIn: '1 of 7' },
      { name: 'Split payouts', note: 'Passenger / owner / platform ledgers reconciling a single trip', usedIn: '2 of 7' },
      { name: 'Billing & subscriptions', note: 'Tiered SaaS pricing, mixed baskets, prepaid routing rules', usedIn: '2 of 7' },
      { name: 'Settlement & payouts', note: 'Weekly merchant settlement made idempotent per period', usedIn: '1 of 7' },
      { name: 'Tax & compliance', note: 'EU VAT inclusive/exclusive, OSS, reverse charge, CSV/XML filings', usedIn: '1 of 7' },
    ],
  },
  {
    id: 'frontend',
    title: 'Interface Engineering',
    blurb: 'The surface people actually touch.',
    items: [
      { name: 'React', note: 'Composition, shared UI packages, role-separated portals', usedIn: '5 of 7' },
      { name: 'Vite', note: 'Dev server and bundler across every web surface', usedIn: '5 of 7' },
      { name: 'React Native & Expo', note: 'Four mobile apps, EAS build profiles and store submission config', usedIn: '4 of 7' },
      { name: 'Electron', note: 'Desktop shell with its own offline database', usedIn: '1 of 7' },
      { name: 'Tailwind', note: 'Utility styling across the web frontends', usedIn: '3 of 7' },
      { name: 'Zustand & React Query', note: 'Client state and server-state separation', usedIn: '2 of 7' },
      { name: 'Design systems', note: 'Shared UI packages, tile grids, magnetic and reveal micro-interactions', usedIn: '3 of 7' },
      { name: 'Visual site builders', note: 'A standalone 24k-LOC layout engine, block builders and page-settings editors', usedIn: '1 of 7' },
      { name: 'Accessibility & ARIA', note: 'Labelled carousels, tab semantics, keyboard navigation', usedIn: '2 of 7' },
      { name: 'Lenis smooth scroll', note: 'Momentum scrolling wired to the page transition system', usedIn: '1 of 7' },
    ],
  },
  {
    id: 'realtime',
    title: 'Realtime & Hardware',
    blurb: 'Live state, devices and bridges that have to work in the field.',
    items: [
      { name: 'WebSockets', note: 'Live set streaming, room status, terminal bridges', usedIn: '4 of 7' },
      { name: 'Background location', note: 'Driver duty toggle surviving mobile OS backgrounding rules', usedIn: '2 of 7' },
      { name: 'BLE native modules', note: 'Custom Bluetooth Low Energy bridge for wearable vitals', usedIn: '1 of 7' },
      { name: 'QR & receipt printing', note: 'QZ Tray over a local WebSocket bridge', usedIn: '1 of 7' },
      { name: 'Realtime GPS', note: 'Captain tracking with territory and surge attached', usedIn: '3 of 7' },
      { name: 'Transactional email', note: 'SES outbound, inbound receipt rules into S3/SNS, vendor-editable templates', usedIn: '2 of 7' },
      { name: 'i18n & translation', note: 'AWS Translate plus a custom extraction CLI, no i18n framework dependency', usedIn: '2 of 7' },
      { name: 'Push & messaging', note: 'Twilio and SendGrid across transactional surfaces', usedIn: '4 of 7' },
      { name: 'OCR ingestion', note: 'Document intake over inbound email with multi-team routing', usedIn: '1 of 7' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Spatial',
    blurb: 'Applied intelligence where it earns its place in the product.',
    items: [
      { name: 'LLM agents', note: 'Tenant-configured assistants and natural-language access requests', usedIn: '3 of 7' },
      { name: 'AWS Bedrock', note: 'Model-backed onboarding and grounded support assistants', usedIn: '1 of 7' },
      { name: 'RAG', note: 'Answers grounded on per-tenant FAQ rules rather than general knowledge', usedIn: '2 of 7' },
      { name: 'Computer vision', note: 'Textract OCR for document intake and compliance scanning', usedIn: '1 of 7' },
      { name: 'AR / WebXR', note: 'ARCore heritage wayfinding with POIs as first-class entities', usedIn: '1 of 7' },
      { name: 'Geospatial', note: 'H3 zone indexing, territory partitioning, surge stress values', usedIn: '2 of 7' },
      { name: 'Gamification', note: 'Passport stamps and XP loops as retention, not badges', usedIn: '1 of 7' },
      { name: 'Optimisation', note: 'Hungarian algorithm over a cost matrix for batch dispatch', usedIn: '1 of 7' },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud, DevOps & Security',
    blurb: 'Shipping it, running it, and not leaking the keys.',
    items: [
      { name: 'AWS', note: 'Bedrock, Textract, SES, Translate, Secrets Manager, ElastiCache, S3, SNS', usedIn: '2 of 7' },
      { name: 'One-click provisioning', note: 'Tenant deploys dispatched through CI with the plan tier as its input', usedIn: '1 of 7' },
      { name: 'Docker', note: 'Containerised services with nginx and health-checked startup', usedIn: '5 of 7' },
      { name: 'nginx & TLS', note: 'Reverse proxying, TLSv1.2/1.3 and Let’s Encrypt automation', usedIn: '4 of 7' },
      { name: 'CI/CD', note: 'GitHub Actions pipelines, 14 Playwright E2E specs, release automation', usedIn: '3 of 7' },
      { name: 'Vercel & Netlify', note: 'SPA deploys with rewrite configuration', usedIn: '3 of 7' },
      { name: 'Process supervision', note: 'pm2 ecosystem configs running nine services', usedIn: '1 of 7' },
      { name: 'Authentication', note: 'JWT issuance, refresh rotation, MFA and password-setup tokens', usedIn: '6 of 7' },
      { name: 'SSO & federation', note: 'SAML, OIDC, OAuth on-behalf-of and scoped API keys', usedIn: '4 of 7' },
      { name: 'GDPR', note: 'Consent ledgers, DSR tooling, audit export and data minimisation', usedIn: '1 of 7' },
      { name: 'Secret hygiene', note: 'Moving keys into environment config and EAS secrets, rotating live credentials', usedIn: '2 of 7' },
      { name: 'Observability', note: 'Pino logging with tokens and PII redacted', usedIn: '2 of 7' },
    ],
  },
  {
    id: 'product',
    title: 'Product & Operations',
    blurb: 'Domain knowledge that shaped the data model.',
    items: [
      { name: 'POS & retail operations', note: 'End-of-day, cash drawer, multi-register, X/Z reports, stock valuation', usedIn: '1 of 7' },
      { name: 'Property management', note: 'Reservations, room blocks, guest folios, night audit', usedIn: '1 of 7' },
      { name: 'Restaurant operations', note: 'Table service, kitchen expediting, recipe and menu costing', usedIn: '1 of 7' },
      { name: 'Dispatch & logistics', note: 'Territories, surge, batch assignment and in-house delivery', usedIn: '3 of 7' },
      { name: 'Marketplace mechanics', note: 'Three-sided supply, memberships, trust tiers and entitlement shapes', usedIn: '3 of 7' },
      { name: 'Travel & tourism', note: 'Traveller journeys, eSIM, local commerce and place discovery', usedIn: '1 of 7' },
      { name: 'Fitness coaching', note: 'Programming, Epley 1RM, PAR-Q gating and check-in loops', usedIn: '1 of 7' },
      { name: 'Enterprise access', note: 'Time-bound grants, capability bundles and approval chains', usedIn: '1 of 7' },
    ],
  },
];

/** Flat list of every skill name, de-duplicated. */
export const ALL_SKILLS = Array.from(
  new Set(SKILL_GROUPS.flatMap((g) => g.items.map((i) => i.name)))
);

export const SKILL_COUNT = ALL_SKILLS.length;

export default SKILL_GROUPS;
