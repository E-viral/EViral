/**
 * Blog seeder — runs with: npx tsx scripts/seed-blog.ts
 * Requires DATABASE_URL in .env.local
 */
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { blogPosts } from '../lib/schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const posts = [
  {
    slug: 'why-online-reviews-matter-2025',
    locale: 'en',
    title: 'Why Online Reviews Can Make or Break Your Business in 2025',
    excerpt: 'Online reviews have become the digital word-of-mouth that shapes purchasing decisions. Discover why reputation management is no longer optional.',
    category: 'reputation',
    content: `## The Review Economy\n\nOnline reviews have become the cornerstone of modern purchasing decisions. 97% of consumers read reviews before making a buying decision. This is not a trend that will fade — it is the new reality of business.\n\n## Why It Matters\n\nBusinesses with a 4.5-star average see up to 40% more conversions. A single negative review left unaddressed can drive away 30 potential customers.\n\n## The Solution\n\nAutomated reputation management platforms help you collect, monitor, and respond to reviews at scale — without consuming your team's time.`,
    published: true,
  },
  {
    slug: 'ai-phone-assistants-customer-service',
    locale: 'en',
    title: 'How AI Phone Assistants Are Transforming Customer Service',
    excerpt: 'Every missed call is a missed opportunity. AI phone assistants are changing how businesses handle inbound calls.',
    category: 'ai',
    content: `## The Cost of a Missed Call\n\n85% of customers who cannot reach a business on their first attempt will not call back. AI phone assistants solve this by answering 24/7.\n\n## What Modern AI Can Do\n\n- Answer calls instantly\n- Capture appointment requests\n- Answer common FAQs\n- Transfer to staff when needed\n- Send structured call summaries`,
    published: true,
  },
  {
    slug: '5-reasons-professional-website',
    locale: 'en',
    title: '5 Reasons Every Local Business Needs a Professional Website in 2025',
    excerpt: 'Still without a professional website? Here\'s why it\'s costing your business more than you think.',
    category: 'websites',
    content: `## 1. First Impressions Happen Online\n\nOver 70% of consumers research a business online before contacting them.\n\n## 2. Google Rankings\n\nBusinesses with professional websites consistently outrank those without in local search results.\n\n## 3. Works 24/7\n\nYour website generates leads around the clock without a salary.\n\n## 4. Builds Trust\n\nA professional website signals credibility and converts visitors into customers.\n\n## 5. Centralises Marketing\n\nAll your marketing activities should lead back to your professional website.`,
    published: true,
  },
  {
    slug: 'automation-saves-10-hours',
    locale: 'en',
    title: 'How Automation Helps Small Businesses Save 10+ Hours Per Week',
    excerpt: 'Time is your most valuable resource. Discover how smart automation can give you back hours every week.',
    category: 'ai',
    content: `## The Time Problem\n\nSmall business owners wear many hats. Between customer service, admin, marketing, and operations, there's little time for strategic growth.\n\n## Where Automation Helps Most\n\n- Review collection and responses (AI handles this)\n- Inbound call management (AI phone assistant)\n- Follow-up emails and notifications (automated)\n- Reporting and analytics (automated dashboards)\n\n## The Numbers\n\nBusinesses using automated reputation management report saving an average of 3-5 hours per week on review-related tasks alone.`,
    published: true,
  },
  {
    slug: 'google-reviews-guide',
    locale: 'en',
    title: 'The Complete Guide to Getting More Google Reviews',
    excerpt: 'Google reviews are the most powerful trust signal for local businesses. Here\'s how to systematically grow yours.',
    category: 'reputation',
    content: `## Why Google Reviews Matter Most\n\nGoogle reviews directly influence local search rankings and click-through rates. A business with 100+ reviews and a 4.7 average will consistently outperform competitors.\n\n## Proven Strategies\n\n1. Ask at the right moment (right after a positive interaction)\n2. Make it easy (direct link or QR code)\n3. Follow up with email/SMS requests\n4. Respond to every review\n5. Automate the process\n\n## The Automation Advantage\n\nManual review collection is inconsistent. Automated systems send requests at the optimal time and follow up automatically.`,
    published: true,
  },
  {
    slug: 'digital-presence-local-business',
    locale: 'en',
    title: 'Building a Complete Digital Presence for Local Businesses',
    excerpt: 'A complete digital presence is more than a website. Here\'s what every local business needs in 2025.',
    category: 'marketing',
    content: `## The Three Pillars of Digital Presence\n\n1. **A professional website** — your digital headquarters\n2. **Strong online reviews** — your social proof and trust signals\n3. **Responsive communication** — answering calls, emails, and messages promptly\n\n## Why Most Businesses Fall Short\n\nBuilding and maintaining all three pillars manually is time-consuming and inconsistent. The businesses that win in local markets are those that have systematised all three.\n\n## The Integrated Approach\n\nE-Viral offers all three pillars in one place: professional websites, reputation management, and AI phone assistance.`,
    published: true,
  },
  // German posts
  {
    slug: 'warum-online-bewertungen-entscheidend',
    locale: 'de',
    title: 'Warum Online-Bewertungen über Ihren Unternehmenserfolg entscheiden',
    excerpt: 'Online-Bewertungen sind das digitale Mund-zu-Mund-Propaganda unserer Zeit.',
    category: 'reputation',
    content: `## Die Bewertungswirtschaft\n\n97 Prozent der Verbraucher lesen Bewertungen, bevor sie eine Kaufentscheidung treffen. Bewertungen sind heute wichtiger als Empfehlungen von Freunden.\n\n## Die Zahlen\n\n- +40% mehr Konversionen mit 4,5+ Sternen\n- 89% der Kunden lesen Antworten auf Bewertungen\n- Eine unbeantwortete negative Bewertung kann 30 Kunden abschrecken\n\n## Die Lösung\n\nAutomatisiertes Reputationsmanagement hilft Ihnen, Bewertungen systematisch zu sammeln, zu überwachen und professionell zu beantworten.`,
    published: true,
  },
  {
    slug: 'ki-telefonassistenten-zukunft',
    locale: 'de',
    title: 'KI-Telefonassistenten: Warum kein Anruf mehr unbeantwortet bleiben sollte',
    excerpt: 'Jeder verpasste Anruf ist ein verlorener Kunde.',
    category: 'ai',
    content: `## Die Kosten eines verpassten Anrufs\n\n85 Prozent der Kunden, die beim ersten Versuch kein Unternehmen erreichen, rufen nicht zurück. Das ist enormer Umsatzverlust.\n\n## Was KI heute kann\n\n- Anrufe sofort entgegennehmen (24/7)\n- Häufige Fragen automatisch beantworten\n- Terminwünsche erfassen\n- Strukturierte Zusammenfassungen senden\n\n## Der entscheidende Vorteil\n\nEin KI-Assistent schläft nie. Er erfasst Leads um 23 Uhr am Sonntag, die sonst dauerhaft verloren wären.`,
    published: true,
  },
  {
    slug: 'professionelle-website-5-gruende',
    locale: 'de',
    title: '5 Gründe, warum jedes Unternehmen eine professionelle Website braucht',
    excerpt: 'Noch ohne professionelle Website? So viel kostet Sie das.',
    category: 'websites',
    content: `## 1. Erster Eindruck online\n\nÜber 70% der Kunden recherchieren Unternehmen online, bevor sie Kontakt aufnehmen.\n\n## 2. Google-Sichtbarkeit\n\nUnternehmen mit professionellen Websites ranken in lokalen Suchergebnissen deutlich besser.\n\n## 3. Rund-um-die-Uhr aktiv\n\nIhre Website generiert Anfragen kontinuierlich – auch außerhalb der Geschäftszeiten.\n\n## 4. Vertrauen aufbauen\n\nEine professionelle Website vermittelt Seriosität und wandelt Besucher in Kunden um.\n\n## 5. Marketing zentralisieren\n\nAlle Marketingaktivitäten sollten auf Ihre Website führen.`,
    published: true,
  },
  {
    slug: 'automatisierung-zeitersparnis',
    locale: 'de',
    title: 'Wie Automatisierung kleinen Unternehmen 10+ Stunden pro Woche spart',
    excerpt: 'Zeit ist Ihr wertvollstes Gut. Entdecken Sie, wie Automatisierung wertvolle Stunden zurückgibt.',
    category: 'ai',
    content: `## Das Zeitproblem\n\nKleinunternehmer tragen viele Hüte. Zwischen Kundendienst, Verwaltung, Marketing und Betrieb bleibt wenig Zeit für strategisches Wachstum.\n\n## Wo Automatisierung am meisten hilft\n\n- Bewertungssammlung und -beantwortung (KI übernimmt)\n- Eingehende Anrufverwaltung (KI-Telefonassistent)\n- Follow-up E-Mails und Benachrichtigungen\n- Reporting und Analysen (automatische Dashboards)\n\n## Das Ergebnis\n\nUnternehmen mit automatisiertem Reputationsmanagement sparen durchschnittlich 3-5 Stunden pro Woche allein bei bewertungsbezogenen Aufgaben.`,
    published: true,
  },
  {
    slug: 'google-bewertungen-mehr-sammeln',
    locale: 'de',
    title: 'So generieren Sie mehr Google-Bewertungen für Ihr Unternehmen',
    excerpt: 'Google-Bewertungen sind das wichtigste Vertrauenssignal für lokale Unternehmen.',
    category: 'reputation',
    content: `## Warum Google-Bewertungen am wichtigsten sind\n\nGoogle-Bewertungen beeinflussen direkt das lokale Suchranking und die Klickrate. Ein Unternehmen mit 100+ Bewertungen und 4,7 Sternen übertrifft Wettbewerber regelmäßig.\n\n## Bewährte Strategien\n\n1. Zum richtigen Zeitpunkt fragen (direkt nach einer positiven Interaktion)\n2. Es einfach machen (direkter Link oder QR-Code)\n3. Mit E-Mail/SMS nachfassen\n4. Auf jede Bewertung antworten\n5. Den Prozess automatisieren\n\n## Der Automatisierungsvorteil\n\nManuelles Bewertungssammeln ist inkonsistent. Automatisierte Systeme senden Anfragen zum optimalen Zeitpunkt und fassen automatisch nach.`,
    published: true,
  },
  {
    slug: 'digitale-praesenz-aufbauen',
    locale: 'de',
    title: 'Vollständige digitale Präsenz für lokale Unternehmen aufbauen',
    excerpt: 'Eine vollständige digitale Präsenz ist mehr als nur eine Website.',
    category: 'marketing',
    content: `## Die drei Säulen der digitalen Präsenz\n\n1. **Eine professionelle Website** — Ihr digitales Hauptquartier\n2. **Starke Online-Bewertungen** — Ihr sozialer Beweis und Vertrauenssignal\n3. **Reaktionsschnelle Kommunikation** — Anrufe, E-Mails und Nachrichten zeitnah beantworten\n\n## Warum die meisten Unternehmen scheitern\n\nAlle drei Säulen manuell aufzubauen und zu pflegen ist zeitaufwendig und inkonsistent.\n\n## Der integrierte Ansatz\n\nE-Viral bietet alle drei Säulen an einem Ort: professionelle Websites, Reputationsmanagement und KI-Telefon-Assistenz.`,
    published: true,
  },
];

async function seed() {
  console.log('Seeding blog posts...');
  for (const post of posts) {
    try {
      await db.insert(blogPosts).values(post).onConflictDoNothing();
      console.log(`✓ ${post.slug}`);
    } catch (e) {
      console.warn(`✗ ${post.slug}:`, e);
    }
  }
  console.log('Done!');
  process.exit(0);
}

seed();
