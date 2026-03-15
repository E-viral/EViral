import type { Metadata } from 'next';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';

const blogContent: Record<string, { title: string; locale: string; category: string; date: string; content: string }> = {
  'why-online-reviews-matter-2025': {
    title: 'Why Online Reviews Can Make or Break Your Business in 2025',
    locale: 'en', category: 'Reputation', date: '2025-01-15',
    content: `## The Review Economy

Online reviews have become the cornerstone of modern purchasing decisions. Before visiting a restaurant, hiring a plumber, or booking a hotel, the overwhelming majority of consumers check what others have to say online.

This is not a trend that will fade — it is the new reality of business.

## The Numbers That Matter

**97% of consumers** read reviews before making a purchasing decision. This single statistic should reshape how every business owner thinks about their online presence.

More importantly:
- Businesses with a 4.5-star average or higher see up to **40% more conversions** compared to competitors with lower ratings
- **89% of customers** read business responses to reviews before making a decision
- A single negative review left unaddressed can drive away **30 potential customers**

## Why Your Response Strategy Matters as Much as the Reviews

Most businesses focus on collecting reviews — but the real competitive advantage lies in how you respond to them. A thoughtful, professional response to a negative review can actually **increase trust** in your brand. It shows prospective customers that you care, that you listen, and that you take quality seriously.

## The Problem: Manual Management Doesn't Scale

For most small and medium businesses, managing reviews manually is simply not feasible:
- Multiple platforms (Google, Facebook, Yelp, TripAdvisor) all need monitoring
- Responding promptly requires constant attention
- Crafting professional, personalised responses is time-consuming
- Tracking trends and patterns requires analytical tools most businesses don't have

## The Solution: Automated Reputation Management

This is precisely where reputation management platforms like EViral come in. By automating the collection, monitoring, and response process, businesses can:

1. **Never miss a review** — alerts and automated monitoring across all platforms
2. **Respond consistently and professionally** — AI-generated response suggestions tailored to each review
3. **Generate more reviews** — automated email and SMS requests to satisfied customers
4. **Understand their reputation** — trend analysis, sentiment tracking, and performance dashboards

## Taking Action Today

The competitive landscape of 2025 rewards businesses that take their online reputation seriously. Those who invest in systematic reputation management will stand out from competitors who are still managing reviews manually — or worse, ignoring them entirely.

If you are ready to take control of your online reputation, [book a free consultation](/en/contact) with our team today.`,
  },
  'ai-phone-assistants-customer-service': {
    title: 'How AI Phone Assistants Are Transforming Customer Service',
    locale: 'en', category: 'AI & Automation', date: '2025-01-22',
    content: `## The Cost of a Missed Call

Every missed call is a missed opportunity. Research consistently shows that **85% of customers who cannot reach a business on their first attempt will not call back**. In a competitive market, this is an extraordinary amount of lost revenue.

For most businesses, the problem is structural: staff cannot be available 24 hours a day, 7 days a week. Evenings, weekends, lunch breaks, and busy periods all create gaps in coverage — and those gaps cost money.

## What Has Changed: AI Is Now Good Enough

For years, automated phone systems were frustrating and robotic. The experience of pressing "1 for English, 2 for sales" became synonymous with poor customer service.

That era is over.

Modern AI phone assistants, powered by large language models and natural voice synthesis, can conduct genuine conversations. They understand context, handle follow-up questions, and respond in a natural, professional manner that customers find comfortable.

## What a Modern AI Phone Assistant Can Do

Today's AI phone assistants can:

- **Answer calls instantly** — no hold music, no waiting
- **Greet customers by name** if caller ID data is available
- **Answer common questions** about opening hours, services, pricing and availability
- **Capture appointment requests** and record them for staff review
- **Transfer calls** to the appropriate team member when needed
- **Send structured summaries** of each call so nothing is ever forgotten

## The Industries Benefiting Most

While AI phone assistants are valuable across all sectors, some industries see particularly dramatic results:

- **Medical practices** — appointment management, opening hours enquiries, prescription requests
- **Legal firms** — initial client intake, availability checks
- **Hospitality** — booking enquiries, facility information
- **Trades and services** — quote requests, availability, emergency call routing

## The Real Benefit: It Never Sleeps

The most transformative aspect of AI phone assistance is not what it does during business hours — it is what happens outside them. An AI assistant available at 11pm on a Sunday captures leads that would otherwise be permanently lost.

For businesses that have implemented AI phone systems, the return on investment comes primarily from this extended availability and the consistency of the experience delivered.

## Getting Started

The implementation process is simpler than most business owners expect. With EViral's AI Voice service, setup involves connecting your existing phone number via call forwarding, configuring the AI with your business information, and going live — often within 48 hours.

[Book a demo](/en/contact) to see the system in action.`,
  },
  '5-reasons-professional-website': {
    title: '5 Reasons Every Local Business Needs a Professional Website in 2025',
    locale: 'en', category: 'Websites', date: '2025-02-01',
    content: `## Is Your Business Invisible Online?

In 2025, if your business does not have a professional website, you are effectively invisible to a large segment of your potential customer base. Here are five reasons why this matters more than ever.

## 1. First Impressions Happen Online — Before You Meet

Over **70% of consumers** research a business online before making contact. When they search for you, what do they find?

A professional website sends an immediate signal: this business is legitimate, established, and takes itself seriously. A missing or outdated website sends the opposite signal — and many potential customers simply move on to a competitor.

## 2. Google Ranks Businesses With Websites Higher in Local Search

Local SEO — the practice of appearing prominently in local Google searches — is heavily influenced by whether you have a professional website. Businesses with well-structured websites consistently outrank those without in relevant local searches.

When someone in your city searches "plumber near me" or "best restaurant in [city]", a professional website significantly increases your chances of appearing in the results.

## 3. A Website Works 24/7 — Even When You Don't

Your website is your most tireless employee. It answers questions, showcases your services, collects enquiries, and builds trust around the clock — without a salary.

A well-designed website with a clear contact form and compelling service descriptions can generate leads continuously, converting visitors into enquiries even outside business hours.

## 4. It Builds Credibility and Trust

Trust is the foundation of every business relationship. A professional website — with clear information, a polished design, visible contact details, and legal pages — builds the foundation of credibility that converts visitors into customers.

Conversely, the absence of a website — or a poor one — actively damages trust. In 2025, consumers expect professionalism online, and they judge your business accordingly.

## 5. It Centralises Your Marketing Efforts

Your website is the hub around which all your other marketing activities revolve. Whether you use social media, email marketing, Google advertising, or word-of-mouth referrals, all roads should lead back to your professional website.

A professional site gives you a single, controlled environment where you can tell your story, showcase your work, and convert interest into action.

## What Makes a Website "Professional"?

Not all websites are created equal. A professional business website should be:

- **Mobile-optimised** — over 60% of web traffic is now from smartphones
- **Fast-loading** — users abandon sites that take more than 3 seconds to load
- **Clear and navigable** — visitors should find what they need immediately
- **Legally compliant** — especially important in Germany (Impressum, Datenschutz)
- **Regularly maintained** — outdated content damages credibility

EViral offers complete website packages starting from €109.90/month including hosting, maintenance, and annual content updates. [View our website packages](/en/services/websites).`,
  },
  'warum-online-bewertungen-entscheidend': {
    title: 'Warum Online-Bewertungen über Ihren Unternehmenserfolg entscheiden',
    locale: 'de', category: 'Reputation', date: '2025-01-15',
    content: `## Die Bewertungswirtschaft

Online-Bewertungen sind das digitale Mund-zu-Mund-Propaganda unserer Zeit. Bevor Menschen ein Restaurant besuchen, einen Handwerker beauftragen oder ein Hotel buchen, informieren sie sich online – und Bewertungen spielen dabei die entscheidende Rolle.

## Die Zahlen, die zählen

**97 Prozent der Verbraucher** lesen Bewertungen, bevor sie eine Kaufentscheidung treffen. Diese eine Zahl sollte jeden Unternehmer aufhorchen lassen.

Weitere Fakten:
- Unternehmen mit einem Durchschnitt von 4,5 Sternen oder mehr erzielen bis zu **40 Prozent mehr Konversionen**
- **89 Prozent der Kunden** lesen Unternehmensantworten auf Bewertungen, bevor sie eine Entscheidung treffen
- Eine unbeantwortete negative Bewertung kann bis zu **30 potenzielle Kunden** abschrecken

## Warum Ihre Antwort-Strategie genauso wichtig ist wie die Bewertungen selbst

Die meisten Unternehmen konzentrieren sich darauf, Bewertungen zu sammeln. Der eigentliche Wettbewerbsvorteil liegt jedoch darin, wie sie auf Bewertungen reagieren. Eine durchdachte, professionelle Antwort auf eine negative Bewertung kann das Vertrauen in Ihre Marke sogar **steigern**. Sie zeigt potenziellen Kunden, dass Sie zuhören und Qualität ernst nehmen.

## Die Lösung: Automatisiertes Reputationsmanagement

Genau hier kommt EViral ins Spiel. Durch die Automatisierung des Sammlungs-, Überwachungs- und Antwortprozesses können Unternehmen:

1. **Keine Bewertung mehr verpassen** – automatische Überwachung aller Plattformen
2. **Professionell und konsistent antworten** – KI-generierte Antwortvorschläge
3. **Mehr Bewertungen generieren** – automatische E-Mail- und SMS-Anfragen
4. **Trends verstehen** – Sentiment-Analysen und Performance-Dashboards

[Buchen Sie jetzt eine kostenlose Beratung](/de/contact) und erfahren Sie, wie wir Ihre Reputation stärken können.`,
  },
  'ki-telefonassistenten-zukunft': {
    title: 'KI-Telefonassistenten: Warum kein Anruf mehr unbeantwortet bleiben sollte',
    locale: 'de', category: 'KI & Automatisierung', date: '2025-01-22',
    content: `## Die Kosten eines verpassten Anrufs

Jeder verpasste Anruf ist ein verlorener Kunde. Untersuchungen zeigen, dass **85 Prozent der Kunden, die beim ersten Versuch kein Unternehmen erreichen, nicht zurückrufen**. In einem wettbewerbsintensiven Markt ist das ein erheblicher Umsatzverlust.

## Was sich verändert hat: KI ist heute gut genug

Automatisierte Telefonsysteme der alten Schule waren frustrierend und roboterhaft. Diese Ära ist vorbei.

Moderne KI-Telefonassistenten, die auf großen Sprachmodellen und natürlicher Sprachsynthese basieren, können echte Gespräche führen. Sie verstehen Kontext, beantworten Folgefragen und reagieren auf eine natürliche, professionelle Art und Weise.

## Was ein moderner KI-Telefonassistent kann

- **Anrufe sofort entgegennehmen** – keine Warteschleife
- **Häufige Fragen beantworten** – Öffnungszeiten, Leistungen, Preise
- **Terminwünsche erfassen** – strukturiert und zuverlässig
- **Anrufe weiterleiten** – an den richtigen Ansprechpartner
- **Strukturierte Zusammenfassungen senden** – damit nichts vergessen wird

## Der entscheidende Vorteil: Er schläft nie

Der transformativste Aspekt eines KI-Telefonassistenten ist nicht das, was er während der Geschäftszeiten leistet – es ist das, was außerhalb davon passiert. Ein KI-Assistent, der um 23 Uhr an einem Sonntag verfügbar ist, erfasst Leads, die sonst dauerhaft verloren wären.

[Buchen Sie jetzt eine Demo](/de/services/ai-phone-assistant) und erleben Sie das System live.`,
  },
  'professionelle-website-5-gruende': {
    title: '5 Gründe, warum jedes Unternehmen eine professionelle Website braucht',
    locale: 'de', category: 'Websites', date: '2025-02-01',
    content: `## Ist Ihr Unternehmen online unsichtbar?

Im Jahr 2025 sind Unternehmen ohne professionelle Website für einen erheblichen Teil ihrer potenziellen Kunden schlicht unsichtbar. Hier sind fünf Gründe, warum das wichtiger ist denn je.

## 1. Der erste Eindruck entsteht online – noch vor dem ersten Kontakt

Über **70 Prozent der Verbraucher** recherchieren ein Unternehmen online, bevor sie Kontakt aufnehmen. Eine professionelle Website sendet sofort ein Signal: Dieses Unternehmen ist seriös und nimmt sich ernst.

## 2. Google bevorzugt Unternehmen mit Websites in lokalen Suchergebnissen

Lokales SEO – die Kunst, bei lokalen Google-Suchen prominent zu erscheinen – wird maßgeblich davon beeinflusst, ob Sie eine professionelle Website haben. Unternehmen mit gut strukturierten Websites übertreffen in relevanten lokalen Suchanfragen regelmäßig solche ohne.

## 3. Eine Website arbeitet 24/7 – auch wenn Sie es nicht tun

Ihre Website ist Ihr fleißigster Mitarbeiter. Sie beantwortet Fragen, präsentiert Ihre Leistungen und sammelt Anfragen rund um die Uhr – ohne Gehalt.

## 4. Sie schafft Glaubwürdigkeit und Vertrauen

Vertrauen ist das Fundament jeder Geschäftsbeziehung. Eine professionelle Website – mit klaren Informationen, ansprechendem Design und sichtbaren Kontaktdaten – schafft die Grundlage dieser Glaubwürdigkeit.

## 5. Sie zentralisiert Ihre Marketingaktivitäten

Ihre Website ist der Knotenpunkt, um den herum alle anderen Marketingaktivitäten kreisen. Egal ob Social Media, E-Mail-Marketing oder Mundpropaganda – alle Wege sollten zu Ihrer professionellen Website führen.

EViral bietet komplette Website-Pakete ab **109,90 €/Monat** inklusive Hosting, Wartung und jährlicher Inhaltsaktualisierung. [Jetzt Pakete ansehen](/de/services/websites).`,
  },
};

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const post = blogContent[params.slug];
  return { title: post?.title || 'Blog Post' };
}

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const post = blogContent[params.slug];
  const isDE = params.locale === 'de';

  if (!post) {
    return (
      <div className="pt-32 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">{isDE ? 'Artikel nicht gefunden' : 'Post not found'}</h1>
        <Link href={`/${params.locale}/blog`} className="btn-primary">{isDE ? 'Zurück zum Blog' : 'Back to Blog'}</Link>
      </div>
    );
  }

  const lines = post.content.split('\n');

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <AnimatedSection>
          <Link href={`/${params.locale}/blog`} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-8 transition-colors">
            <ArrowLeft size={14} /> {isDE ? 'Zurück zum Blog' : 'Back to Blog'}
          </Link>
          <span className="badge-outline text-xs mb-4 block w-fit">{post.category}</span>
          <h1 className="text-4xl font-black tracking-tighter mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-10 pb-8 border-b border-[#E0E0E0]">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString(isDE ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="prose max-w-none">
            {lines.map((line, i) => {
              if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold tracking-tight mt-10 mb-4">{line.slice(3)}</h2>;
              if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold my-2">{line.slice(2, -2)}</p>;
              if (line.startsWith('- ')) return <li key={i} className="ml-5 text-gray-700 mb-1">{line.slice(2)}</li>;
              if (line.trim()) return <p key={i} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
              return null;
            })}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
