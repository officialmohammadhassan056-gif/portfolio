/* =============================================================================
 * SITE CONFIG — single source of truth for identity & contact details.
 * Everything user-facing (name, role, location, links) lives here.
 * Edit this file only; the components read from it.
 *
 * ========================================================================== */

// -----------------------------------------------------------------------------
// Identity
// -----------------------------------------------------------------------------
export const SITE = {
  // Full name (used on Contact, About, meta tags)
  name: 'Mohammad Hassan Liyakathullah',

  // Short name used in the hero marquee + nav credit
  shortName: 'Mohammad Hassan',

  // Name shown on the About page card
  roleLine1: 'Full-Stack',
  roleLine2: 'Engineer',

  // Hero subtitle (the small line above the big marquee name)
  heroRole: 'Product & Platform Engineer',

  // Intro headline on Home (two lines, wrapped in span-lines)
  introLine1: 'Building platforms that',
  introLine2: 'people actually rely on.',

  // Home intro paragraph
  introBody:
    'I design and build multi-tenant SaaS platforms and consumer super-apps — from the API and data layer all the way through to the interface people touch. Most of my work lives at the seam between hard infrastructure and polished product.',

  // About page headline (two lines)
  aboutLine1: 'Helping teams ship',
  aboutLine2: 'serious platforms',

  // About page intro paragraphs
  aboutBody:
    'I build production-grade platforms for commerce, mobility, hospitality and enterprise operations — multi-tenant backends, payment and billing rails, realtime systems and the mobile apps that sit on top of them.',
  aboutBody2:
    'My focus is the part most teams underestimate: the seam between the infrastructure and the interface. A platform is only as good as the experience of the person operating it.',
  aboutBody3:
    'Seven products so far, and they are genuinely different: a subscription-commerce SaaS, a unified POS for European retail and hotels, two luxury mobility platforms, a fitness marketplace, a traveller-facing travel app, and an enterprise access fabric. What they share is the same problem — many users, one codebase, and money on the line.',
  aboutBody4:
    'I like the unglamorous parts. Deciding where a tenant boundary actually gets enforced. Making a webhook safe to retry twice. Modelling a trip so that one booking reconciles across three ledgers. Choosing to build dispatch in-house after an architecture decision record said the third party capped our rider modes and leaked customer phone numbers. That work is invisible until it is missing, and then it is the only thing anyone notices.',

  // "How I work" — approach pillars on the About page
  approach: [
    {
      title: 'Boundaries first',
      body: 'Multi-tenancy is a design decision made once, in one place, and then enforced again on every query. If a tenant filter is something a developer has to remember, it will eventually be forgotten.',
    },
    {
      title: 'The money path is sacred',
      body: 'Payments, ledgers and webhooks get signature verification, durable event records, idempotency keys and replay protection before anything else gets built. Everything else can be rebuilt; a double payout cannot.',
    },
    {
      title: 'Reuse over repetition',
      body: 'Shared router factories turned 600-line implementations into 11-line modules. Deliberate reuse reads better than a fourth copy-paste of a module that already exists.',
    },
    {
      title: 'Ship the whole surface',
      body: 'A backend with no interface is half a product. The till UI, the driver app, the merchant portal and the admin desk are all part of the same system, and they get designed together.',
    },
    {
      title: 'Real offline behaviour',
      body: 'A shop floor loses its network. If the till stops selling when the connection drops, the product is broken at exactly the moment it matters most.',
    },
    {
      title: 'Secrets stay out of the repo',
      body: 'Live keys in a tracked .env and hardcoded publish keys in build profiles are the difference between a security review and a security incident. Configuration belongs in environment config.',
    },
  ],

  // Project-spanning timeline on the About page
  timeline: [
    { period: '2023', title: 'Skyalle', body: 'A three-repository vendor platform: website studio, email system, subscription engine, bookings, OCR documents and AI, over one multi-tenant backend. ~350,000 LOC. Live at skyalle.com.' },
    { period: '2024', title: 'XOVO POS', body: 'Retail, Hotel, Restaurant and Super Admin on one 17-package TypeScript monorepo. 126 models, four independent tenancy layers, EU VAT as a first-class domain.' },
    { period: '2026', title: 'PORTZ', body: 'Luxury mobility across limousine, aviation and marine charter. Three separately-distributed Expo apps, three append-only ledgers, production-configured for store submission via EAS.' },
    { period: '2026', title: 'Transporterz', body: 'Rides, quick commerce and parcels on one Fastify backend. Rejected a third-party delivery partner on four grounds and built dispatch in-house, Hungarian algorithm included.' },
    { period: '2026', title: 'StreetPulse → Meelii', body: 'AR heritage navigation and an LLM travel assistant, then re-localised end to end for Tamil Nadu. Chennai first, then the rest of the state.' },
    { period: '2026', title: 'FitCore', body: 'Trainer–client marketplace built against Hevy Coach and TrueCoach. Asymmetric per-connection permissions, live set streaming, a custom BLE module for wearables.' },
    { period: '2025', title: 'AgentX', body: 'Vendor-agnostic enterprise access fabric. Time-bound, audited grants across cloud, ITSM, DevOps, identity, security and data systems.' },
  ],

  // Location and local time.
  location: 'Chennai, India',

  // IANA timezone used by the footer clock. Keep it in sync with `location`.
  timezone: 'Asia/Kolkata',
  timezoneLabel: 'IST',

  email: 'officialmohammadhassan056@gmail.com',
  phone: '+91 6379845626',
  phoneHref: '+916379845626',

  // Public profiles.
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohammadhassan018/',
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:officialmohammadhassan056@gmail.com',
      external: false,
    },
  ],

  // Studio portraits generated from Mohammad's own reference photos.
  heroImage: '/assets/mohammad-portrait-corrected.png',
  aboutPortrait: '/assets/mohammad-portrait-corrected.png',
  avatar: '/assets/mohammad-portrait-corrected.png',

  metaDescription:
    'Portfolio of Mohammad Hassan Liyakathullah — full-stack engineer building multi-tenant SaaS platforms, commerce systems and consumer super-apps.',
};

/**
 * Contact links used by the footer, drawer menu and contact page.
 * Derived from SITE so there is a single place to edit.
 */
export const CONTACT_LINKS = SITE.socials;

export default SITE;
