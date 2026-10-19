/* =============================================================================
 * PROJECTS
 *
 * Each entry drives the Work index (list + grid views), the Home page cards,
 * the hover-preview thumbnails, and the full case-study page at
 * /work/<id>.
 *
 * Fields
 *   category  must match CATEGORIES below ('development' | 'design')
 *   preview   image shown on hover over a Work card + as the detail hero.
 *             Falls back to `svg` (abstract art) when a live site exists but
 *             was not captured.
 *   live      public URL, if the project is publicly reachable.
 *   capabilities  grouped detail rendered on the case-study page.
 *   metrics   headline numbers rendered in the metrics band.
 *
 * `link` is intentionally null — cards route internally to the detail page.
 * ========================================================================== */

export const CATEGORIES = [
  { id: 'development', label: 'Development' },
  { id: 'design', label: 'Design' },
];

export const PROJECTS = [
  /* --------------------------------------------------------------- SKYALLE */
  {
    id: 'skyalle',
    title: 'Skyalle',
    category: ['development'],
    location: 'Europe',
    services: 'Vendor Platform Ecosystem',
    year: '2023',
    sub: 'Website builder, email and commerce for vendors',
    tags: 'Next.js 16 · Node · Prisma · PostgreSQL · AWS',
    link: null,
    live: 'https://skyalle.com/',
    liveLabel: 'skyalle.com',
    preview: '/assets/shot-skyalle.jpg',
    gallery: [
      { src: '/assets/shot-skyalle.jpg', caption: 'Landing — platform overview' },
      { src: '/assets/shot-skyalle-2.jpg', caption: 'Vendor dashboard — subscriptions, site and operations' },
      { src: '/assets/shot-skyalle-3.jpg', caption: 'One stack for recurring revenue' },
    ],
    svg: '/assets/work-skyalle.svg',
    image: '/assets/shot-skyalle.jpg',
    bgColor: '#0B1220',
    accent: '#7DD3FC',

    overview:
      'Skyalle is a white-label business platform for vendors, delivered as three repositories that share one backend. It is not just a storefront: vendors get a drag-and-drop website studio, a full email system, a subscription and recurring-billing engine, bookings and delivery, document intake with OCR, AI assistants, support inboxes and analytics — all on their own branded subdomain. A vendor signs up, answers an AI questionnaire, connects a domain and goes live.',

    challenge:
      'The whole thing had to be configurable per tenant without a deploy. Twenty-six boolean feature flags decide whether a vendor sells products, delivery slots, visit booking, prepaid plans, referrals or trials — and because they are flat indexable columns rather than a JSON blob, the same backend and the same bundle serve a food delivery service, a gym, a car wash and a coworking space. Underneath that, every transactional table carries a vendor boundary enforced in exactly one middleware.',

    capabilities: [
      {
        title: 'The three repositories',
        items: [
          'Backend — Express + Prisma/PostgreSQL: 716 files, ~157,800 LOC, 103 Prisma models, 52 route modules, 433 endpoints',
          'Storefront and Vendor Studio — Next.js 16: 479 files, ~138,250 LOC, 116 route files, the most frequently changed repo at 743 commits',
          'Vendor onboarding platform — Next.js App Router: 324 files, ~53,570 LOC, 33 routes driving signup through to a live site',
          'Roughly 350,000 LOC and 1,231 commits across the three',
        ],
      },
      {
        title: 'Website studio',
        items: [
          'A standalone 24,000-LOC visual site engine — a real engine with its own surface, not a drag-and-drop form builder',
          'Visual site editor with header, footer and page-settings editors, a block builder panel, and custom pages',
          'Theme and section sizing guarded by a dedicated guard test rather than convention',
          'Tenant-branded rendering where colours, branding and copy come from site configuration, not the bundle',
        ],
      },
      {
        title: 'Email system',
        items: [
          'Outbound on AWS SES with a Nodemailer fallback',
          'Inbound via an SES receipt rule routed to S3 and SNS',
          'Vendor-editable templates in a dedicated email template editor workspace',
          'Marketing campaigns with per-vendor monthly quotas',
        ],
      },
      {
        title: 'Commerce & subscriptions',
        items: [
          'Two distinct money flows: vendors pay the platform a SaaS tier, and each vendor collects from their own customers through their own Stripe Connect account',
          'Four SaaS tiers with hardcoded feature and quota matrices',
          'Idempotency defended at two layers — event level by Stripe event id, business level by session — with a self-healing partial-completion branch',
          'Mixed baskets: products and subscriptions in one cart, with prepaid plans force-routed to one-time checkout',
        ],
      },
      {
        title: 'Documents, AI & ops',
        items: [
          'OCR inbox on AWS Textract: 37 endpoints covering document intake, matching, QR capture, pickup scheduling and a multi-team mail-routing inbox',
          'AI on AWS Bedrock across two regions with a four-model cascade and an IAM-then-bearer auth fallback',
          'AI-assisted tenant bootstrap, an AI support assistant, and image generation on Stability SDXL and Amazon Titan',
          'One-click tenant provisioning through a GitHub Actions workflow dispatch with the SaaS tier as its input',
        ],
      },
    ],

    highlights: [
      'Three repositories sharing one backend — ~350,000 LOC across an Express API, a Next.js storefront and vendor studio, and a Next.js onboarding platform.',
      'A standalone 24,000-LOC visual site engine powering the vendor website builder, with header, footer and page-settings editors rather than a form builder.',
      'A full email system: SES outbound with Nodemailer fallback, inbound receipt rule into S3 and SNS, vendor-editable templates, and quota-limited campaigns.',
      '26 boolean feature flags on a 43-column control plane decide per tenant whether the funnel sells products, delivery slots, visit booking, prepaid plans, referrals or trials — which is why one codebase serves a food delivery service, a gym, a car wash and a coworking space.',
      'Tenant isolation resolved once in host-driven middleware and attached to the request, so the boundary is enforced in one place rather than across 433 handlers.',
      'Idempotency defended at two layers — event level by Stripe event id, business level by session — including a self-healing partial-completion branch and an explicit race catch.',
      'OCR document inbox on AWS Textract: 37 endpoints covering intake, matching, camera QR capture, pickup scheduling and a multi-team mail-routing inbox.',
      'AI on AWS Bedrock spanning two regions with a four-model cascade and an IAM-then-bearer auth fallback, plus image generation on Stability SDXL and Amazon Titan.',
      'One-click tenant provisioning via GitHub Actions workflow dispatch, reusing existing CI rather than bespoke infrastructure tooling.',
      'Security as a middleware stack, not a checklist: helmet, xss-clean, HPP protection, mongo operator sanitisation, rate limiting, SSRF defence by URL-shape validation and canonical SNS signature verification.',
      'Translation through AWS Translate with a custom extraction CLI, keeping the marketing surface dependency-light.',
      '~52 route modules, 433 Express endpoints and 103 Prisma models across a 2,004-line schema, with Swagger docs served at /api/docs.',
    ],

    stack: [
      'Node.js', 'Express', 'Next.js 16', 'React', 'Prisma', 'PostgreSQL',
      'Stripe Connect', 'AWS Bedrock', 'AWS Textract', 'AWS SES', 'AWS S3',
      'AWS Translate', 'AWS Secrets Manager', 'AWS ElastiCache', 'Cloudinary',
      'GitHub Actions', 'Docker',
    ],

    metrics: [
      { value: '3', label: 'Repositories' },
      { value: '350K', label: 'Lines of code' },
      { value: '433', label: 'API endpoints' },
      { value: '24K', label: 'LOC site engine' },
    ],
  },

  /* ------------------------------------------------------------------- XOVO */
  {
    id: 'xovo-pos',
    title: 'XOVO POS',
    category: ['development'],
    location: 'Europe',
    services: 'Unified Commerce Platform',
    year: '2024',
    sub: 'POS, inventory and reservations on one platform',
    tags: 'TypeScript · MongoDB · Turborepo · Electron',
    link: null,
    live: 'https://xovo.masgarti.com/',
    liveLabel: 'xovo.masgarti.com',
    preview: '/assets/shot-xovo.jpg',
    gallery: [
      { src: '/assets/shot-xovo.jpg', caption: 'Unified commerce platform' },
      { src: '/assets/shot-xovo-2.jpg', caption: 'Retail POS, Restaurant and Hotel POS in one platform' },
      { src: '/assets/shot-xovo-3.jpg', caption: 'SmartPOS terminal and live sandbox' },
    ],
    svg: '/assets/work-xovo.svg',
    image: '/assets/shot-xovo.jpg',
    bgColor: '#06281A',
    accent: '#6EE7B7',

    overview:
      'A cloud-hosted, multi-tenant commerce platform sold as SaaS to independent European merchants. XOVO brings point-of-sale, inventory, reservations, front-desk and reporting together on one platform, with multi-location control, role-based access and audit-grade security built in rather than bolted on. One codebase serves four product surfaces — Retail, Hotel (PMS), Restaurant and a Super Admin control plane.',

    challenge:
      'Four genuinely different operational domains — shop floor, front desk, dining room, platform operations — had to share one platform without leaking across tenant or vertical boundaries. EU regulatory requirements (VAT inclusive/exclusive, OSS One-Stop-Shop, reverse charge, quarterly filing periods) had to be first-class rather than bolted on afterwards.',

    capabilities: [
      {
        title: 'Tenancy & security',
        items: [
          'Tenancy enforced in four independent layers: JWT claim shape, vertical module gate, granular feature gate, and a tenant-context requirement — applied once as a gate and again as a query filter',
          'Purpose-scoped tokens explicitly rejected as session tokens, so MFA, password-setup and sandbox-portal tokens cannot be replayed as full sessions',
          'Manager-authorisation override queue with PIN verification and an audit trail',
        ],
      },
      {
        title: 'Platform architecture',
        items: [
          'Thin stateless Express gateway as the single public entrypoint',
          'Order-sensitive route registration so WebSocket paths register before their HTTP catch-all proxies',
          'Shared router factories — most route modules are 11–40 line wrappers around a single implementation',
          '17 packages in a pnpm + Turborepo monorepo',
        ],
      },
      {
        title: 'Commerce & compliance',
        items: [
          'Offline-first Electron retail shell backed by a better-sqlite3 WAL store, so the till keeps selling through a network drop',
          'EU VAT as a first-class domain with CSV and XML filing exports, filing periods and cross-module VAT reporting',
          'Payment rails across Adyen, Stripe, SoePay serial TLV and ZCS SmartPos EMV, including a WebSocket terminal bridge',
        ],
      },
    ],

    highlights: [
      'Tenancy enforced in four independent layers — JWT claim shape, vertical module gate, granular feature gate and a tenant-context requirement — applied once as a gate and again as a query filter.',
      'Purpose-scoped tokens are explicitly rejected as session tokens, so MFA, password-setup and sandbox-portal tokens cannot be replayed as full sessions.',
      'Thin stateless Express gateway as the single public entrypoint, with order-sensitive route registration so WebSocket paths register before their HTTP catch-all proxies.',
      'Shared router factories mean most route modules are 11–40 line wrappers around a single implementation — deliberate reuse rather than copy-paste across four backends.',
      'Offline-first Electron retail shell backed by a better-sqlite3 WAL store, so the till keeps selling through a network drop.',
      'EU VAT compliance as a first-class domain, with CSV and XML filing exports, filing periods and cross-module VAT reporting.',
      'Operational depth across retail: end-of-day wizard with X/Z reports, cash drawer and multi-register oversight, manager-authorisation override queue with PIN verification, gift cards, loyalty, multi-currency and FX, staff performance analytics.',
      'Hotel surface adds reservation lifecycle, group bookings and room blocks, guest folios, pre-authorisation capture/release and channel-manager performance.',
      'Payment rails across Adyen, Stripe, SoePay serial TLV and ZCS SmartPos EMV, including a WebSocket terminal bridge for handheld devices.',
      'Playwright E2E specs, pm2 process supervision, and nginx + Let’s Encrypt deployment.',
    ],

    stack: [
      'TypeScript', 'Node.js 20', 'Express', 'MongoDB', 'Mongoose 8',
      'Turborepo', 'pnpm', 'React', 'Vite', 'Tailwind', 'Electron',
      'React Native', 'Playwright',
    ],

    metrics: [
      { value: '17', label: 'Monorepo packages' },
      { value: '126', label: 'Data models' },
      { value: '4', label: 'Product verticals' },
      { value: '322', label: 'Defined user stories' },
    ],
  },

  /* ------------------------------------------------------------------ PORTZ */
  {
    id: 'portz',
    title: 'PORTZ',
    category: ['development'],
    location: 'Hong Kong',
    services: 'Luxury Mobility Platform',
    year: '2026',
    sub: 'Limousine, aviation and yacht marketplace',
    tags: 'Expo · Express · PostgreSQL · Socket.IO',
    link: null,
    live: 'https://portz.masgarti.com/',
    liveLabel: 'portz.masgarti.com',
    preview: '/assets/shot-portz.jpg',
    gallery: [
      { src: '/assets/shot-portz.jpg', caption: 'Luxury mobility on demand' },
      { src: '/assets/shot-portz-2.jpg', caption: 'One app — sky, road and sea, with live tracking' },
      { src: '/assets/shot-portz-3.jpg', caption: 'Limousine, jet, helicopter and yacht inventory' },
    ],
    svg: '/assets/work-portz.svg',
    image: '/assets/shot-portz.jpg',
    bgColor: '#17102E',
    accent: '#C4B5FD',

    overview:
      'A membership-gated luxury mobility platform — limousines, private jets, yachts and helicopter transfers booked through one marketplace, with a fleet-owner supply side behind it. Not a ride-hailing app: a private-car, aviation and marine charter service with a subscription front door. Three role-separated populations operate it — passengers, drivers and fleet owners.',

    challenge:
      'A driver’s app has to hold a live background location subscription, keep a duty toggle and survive mobile OS backgrounding rules. A passenger’s app has to keep a wallet, saved cards and SOS permanently reachable. Bundling those into one binary would force every passenger to carry driver permissions, so the products were deliberately split across three apps with distinct bundle identifiers.',

    capabilities: [
      {
        title: 'Product surfaces',
        items: [
          'Three separately-distributed Expo apps — passenger, driver and fleet owner — each hard-coding a single role and never rendering another role’s surface',
          'Driver app shipped to a managed device fleet under Managed Google Play, with dedicated review-account runbooks for both listings',
          'Experience surfaces for booking, fleet, services, company and reserve-now, plus loyalty membership tiers',
        ],
      },
      {
        title: 'Booking & finance',
        items: [
          'Full trip state machine from pending through confirmed, assigned, driver_arrived, in_progress and completed, with a TripStatusLog audit trail',
          'Multi-leg itineraries, recurring bookings, daily pickup plans and fixed airport-route products alongside metered rides',
          'Three independent append-only ledgers — passenger, owner and platform — so a single trip fans out into three reconcilable rows',
        ],
      },
      {
        title: 'Payments & safety',
        items: [
          'Hong Kong rails done properly — Stripe PaymentIntents with Apple Pay, Airwallex beneficiary verification for owner payouts, FPS transfers, and NOWPayments as an env-gated crypto rail',
          'Membership tiers (Silver, Gold, Obsidian) enforcing real entitlement shapes: loyalty multipliers, free-cancellation allowances, priority booking and concierge access',
          'Passenger-triggered SOS with triage and resolution, emergency contacts, KYC and licence/document expiry compliance alerts',
        ],
      },
    ],

    highlights: [
      'Three separately-distributed Expo apps — passenger, driver and fleet owner — each hard-coding a single role and never rendering another role’s surface.',
      'Driver app production-configured for Play Store and App Store submission via EAS, with built signed .aab bundles, App Store Connect IDs for all three roles and submit.production profiles in place.',
      'Three independent append-only ledgers — passenger, owner and platform — so a single trip fans out into three reconcilable rows.',
      'Full trip state machine from pending through confirmed, assigned, driver_arrived, in_progress and completed, with a TripStatusLog audit trail and BookingAmendment records for in-trip changes.',
      'Multi-leg itineraries, recurring bookings, daily pickup plans and fixed airport-route products alongside metered rides.',
      'Hong Kong payment rails done properly — Stripe PaymentIntents with Apple Pay, Airwallex beneficiary verification for owner payouts, FPS transfers, and NOWPayments as an env-gated crypto rail.',
      'Membership tiers (Silver, Gold, Obsidian) enforcing real entitlement shapes — loyalty multipliers, free-cancellation allowances, priority booking and concierge access — with lifecycle driven server-side.',
      'Safety surface: passenger-triggered SOS with triage and resolution, emergency contacts, KYC and licence/document expiry compliance alerts.',
      'Socket.IO on the same HTTP server, with a lazy accessor so services stay unit-testable without a live socket.',
      '~212,600 LOC across 8 packages, 271 HTTP routes, 64 Sequelize models and 53 migrations.',
    ],

    stack: [
      'Expo', 'React Native', 'React Navigation', 'Express', 'PostgreSQL',
      'Sequelize', 'Umzug', 'Socket.IO', 'Stripe', 'Airwallex', 'Firebase',
      'EAS Build',
    ],

    metrics: [
      { value: '212K', label: 'Lines of code' },
      { value: '8', label: 'Packages' },
      { value: '271', label: 'API routes' },
      { value: '3', label: 'Mobile apps' },
    ],
  },

  /* ------------------------------------------------------------ TRANSPORTERZ */
  {
    id: 'transporterz',
    title: 'Transporterz',
    category: ['development'],
    location: 'Hong Kong',
    services: 'Mobility & Commerce Platform',
    year: '2026',
    sub: 'Rides, quick commerce and parcels',
    tags: 'Fastify · MongoDB · Redis · Turborepo',
    link: null,
    live: null,
    liveLabel: null,
    preview: null,
    svg: '/assets/work-transporterz.svg',
    image: '/assets/work-transporterz.svg',
    bgColor: '#e8e5df',
    accent: '#FDA4AF',

    overview:
      'A Hong Kong operator running three revenue verticals off one Fastify backend — taxi rides, same-day quick commerce from merchant kitchens, and parcel dispatch — plus the wallet and merchant-settlement ledgers that make them profitable. Four client apps, one API, in-house delivery.',

    challenge:
      'The original PRD specified a third-party delivery partner. An architecture decision record rejected it on four grounds: it capped Hong Kong rider modes to motorbike only, used opaque black-box scoring, charged HKD 30–80 per call, and leaked rider and customer phone numbers to a third party. Owning dispatch in-house meant building a control tower and the dispatch mathematics from scratch.',

    capabilities: [
      {
        title: 'Dispatch',
        items: [
          'Dispatch built as a first-class module, not a helper inside rides — containing the only batch-assignment mathematics in the codebase',
          'Hungarian algorithm implementation over a cost matrix for optimal batch assignment',
          'Three verticals — rides, shop and parcels — sharing one dispatch and territory layer',
        ],
      },
      {
        title: 'Unit economics',
        items: [
          'Fare engine with an explicit model: distance base plus a surge multiplier clamped between 1x and 3.5x',
          'Per-H3-zone stress value cached in Redis, plus capped service fee and a small-order fee',
          'A clean 70/30 split on the distance-and-surge component, leaving service and small-order fees as pure platform margin',
        ],
      },
      {
        title: 'Platform',
        items: [
          'Four clients against one API — customer mobile, rider app, merchant portal and superadmin desk — separated by role, not network partition',
          'Merchant settlement run weekly and made idempotent per merchant and period, so a retried job cannot double-pay',
          'Standardised response envelope, CSRF enforcement, Redis-backed rate limiting, idempotency-key replay protection and correlation IDs across 15 Fastify plugins',
        ],
      },
    ],

    highlights: [
      'Dispatch built as a first-class module, not a helper inside rides — containing the only batch-assignment mathematics in the codebase, including a Hungarian algorithm over a cost matrix.',
      'Fare engine with an explicit unit-economics model: distance base plus a surge multiplier clamped between 1x and 3.5x, a per-H3-zone stress value cached in Redis, capped service fee and a small-order fee.',
      'A clean 70/30 split on the distance-and-surge component, leaving service and small-order fees as pure platform margin.',
      'Three verticals sharing one dispatch and territory layer: rides, shop and parcels.',
      'Merchant settlement run weekly and made idempotent per merchant and period, so a retried job cannot double-pay.',
      'Four clients against one API — customer mobile, rider app, merchant portal and superadmin desk — separated by role, not by network partition.',
      'Standardised response envelope, CSRF enforcement, Redis-backed rate limiting, idempotency-key replay protection and correlation IDs wired across 15 Fastify plugins.',
      'Shared Zod schema package used by API and clients, so a contract change breaks the build on both sides.',
    ],

    stack: [
      'Fastify 5', 'TypeScript', 'MongoDB', 'Redis', 'Socket.IO',
      'Turborepo', 'pnpm', 'Expo', 'Vite', 'React', 'Zod', 'Docker',
    ],

    metrics: [
      { value: '3', label: 'Revenue verticals' },
      { value: '4', label: 'Client apps' },
      { value: '15', label: 'API plugins' },
      { value: '14', label: 'API modules' },
    ],
  },

  /* ------------------------------------------------------------- STREETPULSE */
  {
    id: 'streetpulse',
    title: 'StreetPulse',
    category: ['development', 'design'],
    location: 'Hong Kong → Tamil Nadu',
    services: 'AI, AR & Gamification',
    year: '2026',
    sub: 'Ships as Meelii — travel, local commerce & rides',
    tags: 'Expo · LLM Agents · AR · Realtime',
    link: null,
    live: 'https://street-pulse-web.vercel.app/',
    liveLabel: 'Meelii web app',
    preview: '/assets/shot-streetpulse.jpg',
    gallery: [
      { src: '/assets/shot-streetpulse.jpg', caption: 'Meelii — the real Tamil Nadu, Chennai first' },
    ],
    svg: '/assets/work-streetpulse.svg',
    image: '/assets/shot-streetpulse.jpg',
    bgColor: '#0A1F1C',
    accent: '#5EEAD4',

    overview:
      'A traveller-facing travel and local-commerce platform carrying five capability stacks on one backend: AI trip assistance, AR heritage navigation, ride-hailing, local delivery and e-commerce, and gamified exploration — plus an eSIM top-up line. The Hong Kong build has since been re-localised for Tamil Nadu and shipped as Meelii, a Chennai-first platform for tourists, expats, locals and students, and the shops that host them.',

    challenge:
      'Unlike a pure mobility product, this has to serve a traveller who does not read the local language, does not know the geography, and is optimising for discovery rather than efficiency. That pushed AR wayfinding and an LLM assistant into the core loop rather than treating them as bolt-on features — and it meant every merchant, POI and content surface had to survive being re-pointed at a completely different city, language and currency.',

    capabilities: [
      {
        title: 'Discovery & AI',
        items: [
          'LLM travel assistant embedded in the app, with conversation context, message history and suggested prompt shortcuts',
          'AR heritage navigation — sites, trails and points of interest modelled as first-class admin entities rather than static map annotations',
          'The Meelii rebrand re-pointed the whole platform at Tamil Nadu: Chennai first, then the rest of the state',
        ],
      },
      {
        title: 'Local commerce',
        items: [
          'Five merchant verticals on one Merchant.category discriminator — ecommerce, rooms, food_hotel, attraction and other',
          'Vertical categories mapped onto discovery POI categories so the re-localisation stayed tractable',
          'Shop listing, essentials and partner-shop delivery surfaces alongside the travel product',
        ],
      },
      {
        title: 'Mobility & platform',
        items: [
          'Full mobility spine inherited and reworked from the same lineage — captain app with shift, job offers, live GPS and earnings, plus dispatch, territory and surge',
          'The Meelii passport: every visit earns a stamp, turning exploration into a retention loop rather than a bolt-on badge system',
          'Merchant and admin roles share a single React + Vite bundle and one dev server',
          'Ops dashboards over pre-aggregated daily metrics and revenue-by-category collections rather than live aggregation',
        ],
      },
    ],

    highlights: [
      'AR heritage navigation layer — sites, trails and points of interest modelled as first-class admin entities rather than static map annotations.',
      'An LLM travel assistant embedded in the app, with conversation context, message history and suggested prompt shortcuts.',
      'Re-localised end to end into Meelii for Tamil Nadu — Chennai first, then the rest of the state — across content, merchants, currency and language.',
      'The passport gamification loop: every visit earns a stamp, tying exploration directly to retention.',
      'Five merchant verticals on one Merchant.category discriminator — ecommerce, rooms, food_hotel, attraction and other — mapped onto discovery POI categories so the re-point stayed tractable.',
      'Full mobility spine inherited and reworked from the same lineage — captain app with shift, job offers, live GPS and earnings, plus dispatch, territory and surge.',
      'Merchant and admin roles share a single React + Vite bundle and one dev server, rather than shipping as separate apps.',
      'Affiliate, promotion, voucher and moderation surfaces for the operator side.',
      'Ops-facing dashboards over pre-aggregated daily metrics and revenue-by-category collections rather than live aggregation.',
    ],

    stack: [
      'Expo', 'React Native', 'TypeScript', 'Fastify', 'MongoDB', 'Redis',
      'Socket.IO', 'LLM Agents', 'AR / WebXR', 'React', 'Vite', 'Turborepo',
    ],

    metrics: [
      { value: '5', label: 'Capability stacks' },
      { value: '5', label: 'Merchant verticals' },
      { value: '3', label: 'Client apps' },
      { value: '11', label: 'Scheduled jobs' },
    ],
  },

  /* ---------------------------------------------------------------- FITNESS */
  {
    id: 'fitness-marketplace',
    title: 'FitCore',
    category: ['development'],
    location: 'Multi-tenant',
    services: 'Marketplace & Realtime',
    year: '2026',
    sub: 'Trainer–client coaching platform',
    tags: 'Node.js · MongoDB · Expo · Socket.io',
    link: null,
    live: null,
    liveLabel: null,
    preview: null,
    svg: '/assets/work-fitness.svg',
    image: '/assets/work-fitness.svg',
    bgColor: '#e2e6e9',
    accent: '#93C5FD',

    overview:
      'A multi-tenant B2C fitness marketplace connecting independent personal trainers with clients, built against an explicit feature-parity target of Hevy Coach, TrueCoach, PT Distinction and HubFit. Three roles operate the platform: super admin, trainer and trainee.',

    challenge:
      'Tenancy here is not between organisations — it is between a trainer and a trainee, and it is asymmetric. A trainer may legitimately hold read-only access to a client’s health data while being blocked from everything else, so access has to be modelled as per-connection granular permissions that each trainee can override.',

    capabilities: [
      {
        title: 'Permissions & identity',
        items: [
          'Granular per-connection permissions across workouts, cardio, health and notes',
          'Per-connection privacy toggles on the trainee side that override the default',
          'Approval gate as the spine of the identity lifecycle — signup, email OTP, then super-admin approval before tokens are issued',
        ],
      },
      {
        title: 'Coaching & realtime',
        items: [
          'Live set streaming over WebSockets, so a trainer watches sets land on the trainee’s phone in real time',
          'Trainer-built multi-week programs structured as a day-by-exercise grid, with drag-and-drop assignment',
          'Recurring check-ins supporting 11 question types, with trainer responses and rule-based insights generated nightly',
        ],
      },
      {
        title: 'Analytics & hardware',
        items: [
          'Epley 1RM auto-calculation with personal-record detection firing on every logged set',
          'Real health analytics — 1RM progression, muscle-balance radar, volume by muscle group, sleep and HRV — computed by aggregate queries',
          'Custom native Bluetooth Low Energy module for wearable vitals ingestion',
        ],
      },
    ],

    highlights: [
      'Granular per-connection permissions across workouts, cardio, health and notes, with per-connection privacy toggles on the trainee side that override the default.',
      'Approval gate as the spine of the identity lifecycle — signup, email OTP, then super-admin approval before tokens are ever issued, with an audit-log entry for every auth event.',
      'Live set streaming over WebSockets, so a trainer watches sets land on the trainee’s phone in real time.',
      'Epley 1RM auto-calculation from weight and reps, with personal-record detection firing on every logged set rather than on a nightly batch.',
      'Trainer-built multi-week programs structured as a day-by-exercise grid, with drag-and-drop assignment and a trainee-facing progress tracker.',
      'Recurring check-ins supporting 11 question types, with trainer responses and rule-based insights generated nightly by a Mongo-backed scheduler.',
      'Real health analytics — 1RM progression, muscle-balance radar, volume by muscle group, sleep and HRV series — computed from aggregate database queries instead of client-side arithmetic.',
      'A custom native Bluetooth Low Energy module for wearable vitals ingestion.',
      'PAR-Q health questionnaire gate, idempotent five-step onboarding, MyFitnessPal CSV import, and AES-256-GCM encrypted image storage.',
      'Pino logging configured to redact tokens and personally identifying fields.',
    ],

    stack: [
      'Node.js 20', 'Express', 'MongoDB', 'Mongoose 8', 'Socket.io', 'Expo',
      'React Native', 'Zustand', 'React Query', 'Zod', 'BLE Native Module',
    ],

    metrics: [
      { value: '3', label: 'User roles' },
      { value: '4', label: 'Permission scopes' },
      { value: '11', label: 'Check-in types' },
      { value: '3', label: 'Deployable apps' },
    ],
  },

  /* ------------------------------------------------------------------ AGENTX */
  {
    id: 'agentx',
    title: 'AgentX',
    category: ['development', 'design'],
    location: 'Enterprise',
    services: 'Access Orchestration',
    year: '2025',
    sub: 'Governed access across the enterprise stack',
    tags: 'React · TypeScript · AI Agents · Docker',
    link: null,
    live: 'https://agentx.skyscaleslab.com/',
    liveLabel: 'agentx.skyscaleslab.com',
    preview: '/assets/shot-agentx.jpg',
    gallery: [
      { src: '/assets/shot-agentx.jpg', caption: 'Vendor-agnostic orchestration fabric' },
      { src: '/assets/shot-agentx-2.jpg', caption: 'Step 1 — connect enterprise services' },
      { src: '/assets/shot-agentx-3.jpg', caption: 'Step 2 — configure org policy and scoped capabilities' },
    ],
    svg: '/assets/work-agentx.svg',
    image: '/assets/shot-agentx.jpg',
    bgColor: '#1A1030',
    accent: '#D8B4FE',

    overview:
      'A vendor-agnostic enterprise orchestration fabric for governed access, identity-federated attachment and controlled execution across cloud, ITSM, DevOps, identity, security and data systems. It replaces the email-a-ticket-and-wait-for-approval pattern with a governed, time-bound, audited flow, giving org admins unified visibility and scoped capabilities across the entire enterprise stack.',

    challenge:
      'Requesting access to a system normally means emailing a ticket, waiting days for a human approval chain, then writing a bespoke provisioning script nobody maintains. The hard part is not automating the grant — it is keeping every automated grant time-bound, attributable and auditable across systems that have no shared notion of identity.',

    capabilities: [
      {
        title: 'Governed flow',
        items: [
          'A single flow replacing ticket-then-script: submit, federate identity, evaluate policy, execute provision, then expire and revoke on a timer',
          'Time-bound and fully audited grants, so access is a lease rather than a permanent state change',
          'Natural-language access requests through an in-product AI assistant, with real-time status as the request progresses',
        ],
      },
      {
        title: 'Surfaces',
        items: [
          'Launchpad, Setup Studio, Admin Nexus and Discovery Deck as distinct operator surfaces',
          'Agent creation workflow — defining new agents and the capabilities they are permitted to exercise',
          'Suggested prompt shortcuts and message history so repeat requests are one tap rather than retyped',
        ],
      },
      {
        title: 'Coverage',
        items: [
          'Cross-system targeting spanning cloud, ITSM, DevOps, identity, security and data, without binding to a single vendor',
          'Unified visibility and controlled execution across the whole stack rather than per-system silos',
          'SPA deployment model with Vercel and Netlify rewrite configuration, containerised via Docker and nginx',
        ],
      },
    ],

    highlights: [
      'A single governed flow replacing ticket-then-script: submit, federate identity, evaluate policy, execute provision, then expire and revoke on a timer.',
      'Natural-language access requests through an in-product AI assistant, with real-time status as the request progresses and conversation context carried across the session.',
      'Agent creation workflow — defining new agents and the capabilities they are permitted to exercise.',
      'Cross-system targeting spanning cloud, ITSM, DevOps, identity, security and data, without binding to a single vendor.',
      'Time-bound and fully audited grants, so access is a lease rather than a permanent state change.',
      'Launchpad, Setup Studio, Admin Nexus and Discovery Deck as distinct operator surfaces rather than one undifferentiated console.',
      'Suggested prompt shortcuts and message history so repeat requests are one tap rather than retyped.',
      'SPA deployment model with Vercel and Netlify rewrite configuration, containerised via Docker and nginx.',
    ],

    stack: [
      'React', 'TypeScript', 'AI Agents', 'LLM Integration', 'Docker',
      'nginx', 'Vercel', 'Netlify',
    ],

    metrics: [
      { value: '6', label: 'System families' },
      { value: '5', label: 'Governed stages' },
      { value: '56', label: 'Commits' },
      { value: '100%', label: 'Audited grants' },
    ],
  },
];

/**
 * Ordering: projects with a public live site come first, everything else
 * last. Applied here — in the data — so the Work index, the Home tiles and
 * the previous/next navigation on a case study all agree.
 *
 * Array.prototype.sort is stable, so relative order inside each group is
 * preserved. Remove a `live` URL and a project falls to the back
 * automatically.
 */
PROJECTS.sort((a, b) => Number(Boolean(b.live)) - Number(Boolean(a.live)));

/** Look up a single project by id. */
export function getProject(id) {
  return PROJECTS.find((p) => p.id === id);
}

/** Index of a project by id, used for next/previous navigation. */
export function getProjectIndex(id) {
  return PROJECTS.findIndex((p) => p.id === id);
}

export default PROJECTS;
