# E-Viral — Digital Growth Agency Website

**Next.js 14 · TypeScript · NeonDB · Tailwind CSS**

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: NeonDB (PostgreSQL) via Drizzle ORM
- **i18n**: next-intl (English + German)
- **Animations**: CSS transitions + Framer Motion ready
- **Icons**: Lucide React

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local

# 3. Add your NeonDB connection string to .env.local
DATABASE_URL=postgresql://...

# 4. Create database tables (run in NeonDB SQL editor)
# See: scripts/create-tables.sql

# 5. Start development server
npm run dev
```

## Environment Variables

```env
DATABASE_URL=          # NeonDB connection string (required)
SMTP_HOST=             # Email SMTP host (optional, for contact form)
SMTP_PORT=587          # SMTP port
SMTP_USER=             # SMTP username
SMTP_PASS=             # SMTP password
CONTACT_EMAIL=info@e-viral.de
NEXT_PUBLIC_BOOKING_URL=https://www.e-viral.de/booking-calendar/kostenlose-beratung
NEXT_PUBLIC_LOGIN_URL=https://app.e-viral.de/#/login
NEXT_PUBLIC_BASE_URL=https://e-viral.de
```

## Pages

| Route | Description |
|-------|-------------|
| `/[locale]` | Homepage |
| `/[locale]/services/reputation-management` | Reputation Management |
| `/[locale]/services/websites` | Website Packages + Domain Checker |
| `/[locale]/services/ai-phone-assistant` | AI Phone Assistant |
| `/[locale]/partner` | Become a Partner |
| `/[locale]/about` | About Us |
| `/[locale]/blog` | Blog listing |
| `/[locale]/blog/[slug]` | Blog post |
| `/[locale]/contact` | Contact form |
| `/[locale]/imprint` | Imprint / Impressum |
| `/[locale]/privacy` | Privacy Policy |
| `/[locale]/terms` | Terms & Conditions |

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/domain-check?domain=x.de` | GET | Check domain availability (RDAP) |
| `/api/contact` | POST | Submit contact form |
| `/api/blog?locale=en` | GET | Get blog posts from DB |

## Database Setup (NeonDB)

1. Create a project at [neon.tech](https://neon.tech)
2. Copy the connection string to `DATABASE_URL`
3. Run `scripts/create-tables.sql` in the NeonDB SQL editor
4. (Optional) Run `npm run seed:blog` to populate blog posts

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Add all env variables in the Vercel dashboard.

## Languages

- **DE** (German): default locale at `/de/...`
- **EN** (English): at `/en/...`
- Language toggle in the navbar
- All translations in `messages/en.json` and `messages/de.json`

## Design System

- **Font**: Inter (Google Fonts)
- **Letter spacing**: -0.03em on headings (SaaS style)
- **Colors**: Black/White/Light Grey (#F5F5F5)
- **Cards**: White with border, border-radius 16px (Climbo-style sticker cards)
- **Buttons**: Black → hover white (or vice versa)

## Key Components

- `PricingCards` — 3-column pricing with monthly/yearly toggle + service description modals
- `ComparisonTable` — Feature comparison table (Fonio.ai style)
- `ProcessRoadmap` — 4-step numbered roadmap
- `PlatformIntegrations` — Review platform logo grid
- `DomainChecker` — Live domain availability check
- `FAQAccordion` — Collapsible FAQ sections
- `ServiceDescriptionModal` — Full legal service description in modal

## Pricing Summary

### Reputation Management
- Basic: €49.90/mo
- Pro: €99.90/mo
- Premium: €169.90/mo

### Websites (+ €299 setup)
- Pro: €109.90/mo
- Premium: €149.90/mo
- Enterprise: €199.90/mo

### AI Phone Assistant
- AI Voice Assist: €399/mo (2,000 min, €0.16/extra min)
- AI Voice Professional: €499/mo (3,500 min, €0.14/extra min)
- AI Voice Enterprise: €699/mo (5,500 min, €0.13/extra min)

All plans: 24-month minimum, 3-month cancellation notice.
