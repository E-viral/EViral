import type { Metadata } from 'next';
import { ArrowRight, Globe } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ProcessRoadmap from '@/components/sections/ProcessRoadmap';
import PricingCards from '@/components/sections/PricingCards';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import DomainChecker from '@/components/sections/DomainChecker';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Websites' : 'Professional Websites' };
}

const PRO_DESC = `Paket „Pro Website" — Leistungsbeschreibung

Das Paket „Pro Website" umfasst die Erstellung und Bereitstellung einer professionellen Unternehmenswebsite, die Unternehmen dabei unterstützt, online präsent zu sein und potenziellen Kunden einen modernen und vertrauenswürdigen Eindruck zu vermitteln.

Der Leistungsumfang umfasst unter anderem:
• Erstellung einer professionellen Unternehmenswebsite mit moderner Struktur
• Gestaltung und Aufbau der Website auf Basis eines zeitgemäßen Webdesign-Systems
• Bereitstellung und Einrichtung von Hosting und technischer Infrastruktur
• Verknüpfung der Website mit der Domain des Kunden
• Integration eines Kontaktformulars
• Grundlegende Suchmaschinen-Grundeinstellungen
• Integration rechtlich erforderlicher Inhalte wie Impressum
• Jährliche Inhaltsaktualisierung (1x pro Jahr)
• Technische Betreuung und Sicherheitsupdates

Preise und Vertragsbedingungen
Preis: 109,90 € pro Monat
Einmalige Bereitstellungsgebühr: 299,00 € einmalig
Mindestvertragslaufzeit: 24 Monate
Kündigungsfrist: 3 Monate zum Ende der Vertragslaufzeit`;

const PREMIUM_DESC = `Paket „Premium Website" — Leistungsbeschreibung

Das Paket „Premium Website" richtet sich an Unternehmen, die einen umfangreicheren Internetauftritt mit mehreren Inhaltsseiten und erweiterten Darstellungsmöglichkeiten benötigen.

Der Leistungsumfang umfasst insbesondere:
• Erstellung einer mehrseitigen Unternehmenswebsite mit bis zu 4 Inhaltsseiten
• Individuelle Gestaltung im Rahmen eines professionellen Designsystems
• Bereitstellung und Einrichtung der technischen Infrastruktur inkl. Hosting
• Verknüpfung der Website mit der Domain des Kunden
• Integration von Kontakt- oder Anfrageformularen
• Einbindung externer Dienste (Karten, Bewertungen, Social Media)
• Erweiterte Suchmaschinen-Grundeinstellungen
• Jährliche Inhaltsaktualisierung (1x pro Jahr)
• Wartung und Sicherheitsupdates

Preise und Vertragsbedingungen
Preis: 149,90 € pro Monat
Einmalige Bereitstellungsgebühr: 299,00 € einmalig
Mindestvertragslaufzeit: 24 Monate
Kündigungsfrist: 3 Monate zum Ende der Vertragslaufzeit`;

const ENTERPRISE_DESC = `Paket „Enterprise Website" — Leistungsbeschreibung

Das Paket „Enterprise Website" richtet sich an Unternehmen mit erweiterten Anforderungen an ihren digitalen Auftritt sowie an Betriebe, die ihre Website als umfangreiche Unternehmenspräsentation nutzen möchten.

Der Leistungsumfang umfasst unter anderem:
• Erstellung einer umfangreichen Unternehmenswebsite mit bis zu 7 Inhaltsseiten
• Gestaltung entsprechend moderner Design- und Benutzerführungsstandards
• Bereitstellung und Einrichtung von Hosting und technischer Infrastruktur
• Verknüpfung der Website mit der Domain des Kunden
• Integration verschiedener Kontakt- und Anfragefunktionen
• Verknüpfung mit externen Plattformen (Karten, Bewertungen, Analytics, Social Media)
• Erweiterte technische SEO-Einstellungen
• Zukunftssichere Struktur für Erweiterungen
• Jährliche Inhaltsaktualisierung (1x pro Jahr)
• Vollständige technische Betreuung

Preise und Vertragsbedingungen
Preis: 199,90 € pro Monat
Einmalige Bereitstellungsgebühr: 299,00 € einmalig
Mindestvertragslaufzeit: 24 Monate
Kündigungsfrist: 3 Monate zum Ende der Vertragslaufzeit`;

export default function WebsitesPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';

  const steps = isDE ? [
    { icon: '💬', title: 'Erstgespräch', desc: 'Sie teilen Ihre Ziele und Unternehmensinfos' },
    { icon: '🎨', title: 'Design & Entwicklung', desc: 'Wir erstellen Ihre individuelle Website' },
    { icon: '✅', title: 'Freigabe', desc: 'Sie prüfen und geben die Website frei' },
    { icon: '🚀', title: 'Go Live', desc: 'Wir schalten die Website mit Ihrer Domain live' },
  ] : [
    { icon: '💬', title: 'Initial call', desc: 'You share your goals and business info' },
    { icon: '🎨', title: 'Design & build', desc: 'We create your custom website' },
    { icon: '✅', title: 'Review & approve', desc: 'You review and approve the website' },
    { icon: '🚀', title: 'Go live', desc: 'We launch with your domain connected' },
  ];

  const plans = [
    {
      name: 'Pro Website',
      price: 109.90,
      yearlyPrice: 98,
      setupFee: 299,
      description: PRO_DESC,
      features: [
        { label: isDE ? 'Professionelle Unternehmenswebsite' : 'Professional business website', included: true },
        { label: isDE ? 'Mobil & Desktop optimiert' : 'Mobile & desktop optimized', included: true },
        { label: isDE ? 'Kontaktformular' : 'Contact form', included: true },
        { label: isDE ? 'Hosting & Domain-Verknüpfung' : 'Hosting & domain connection', included: true },
        { label: isDE ? 'Basis-SEO Einstellungen' : 'Basic SEO settings', included: true },
        { label: isDE ? '1x Jahresaktualisierung' : '1x annual content update', included: true },
        { label: isDE ? 'Technische Wartung' : 'Technical maintenance', included: true },
        { label: isDE ? 'Bis zu 4 Seiten' : 'Up to 4 pages', included: false },
        { label: isDE ? 'Externe Integrationen' : 'External integrations', included: false },
      ],
    },
    {
      name: 'Premium Website',
      price: 149.90,
      yearlyPrice: 134,
      setupFee: 299,
      badge: isDE ? 'Beliebteste Wahl' : 'Most Popular',
      description: PREMIUM_DESC,
      features: [
        { label: isDE ? 'Bis zu 4 Inhaltsseiten' : 'Up to 4 content pages', included: true },
        { label: isDE ? 'Individuelles Designsystem' : 'Individual design system', included: true },
        { label: isDE ? 'Kontakt- & Anfrageformulare' : 'Contact & inquiry forms', included: true },
        { label: isDE ? 'Hosting & Domain-Verknüpfung' : 'Hosting & domain connection', included: true },
        { label: isDE ? 'Erweiterte SEO-Einstellungen' : 'Extended SEO settings', included: true },
        { label: isDE ? 'Externe Dienstintegration' : 'External service integration', included: true },
        { label: isDE ? '1x Jahresaktualisierung' : '1x annual content update', included: true },
        { label: isDE ? 'Wartung & Sicherheitsupdates' : 'Maintenance & security updates', included: true },
        { label: isDE ? 'Bis zu 7 Seiten' : 'Up to 7 pages', included: false },
      ],
    },
    {
      name: 'Enterprise Website',
      price: 199.90,
      yearlyPrice: 179,
      setupFee: 299,
      description: ENTERPRISE_DESC,
      features: [
        { label: isDE ? 'Bis zu 7 Inhaltsseiten' : 'Up to 7 content pages', included: true },
        { label: isDE ? 'Full Custom Design & UX' : 'Full custom design & UX', included: true },
        { label: isDE ? 'Alle Kontaktfunktionen' : 'All contact functions', included: true },
        { label: isDE ? 'Hosting & Domain-Verknüpfung' : 'Hosting & domain connection', included: true },
        { label: isDE ? 'Erweiterte technische SEO' : 'Advanced technical SEO', included: true },
        { label: isDE ? 'Umfangreiche Integrationen' : 'Extensive integrations', included: true },
        { label: isDE ? 'Erweiterbare Struktur' : 'Future-proof structure', included: true },
        { label: isDE ? '1x Jahresaktualisierung' : '1x annual content update', included: true },
        { label: isDE ? 'Vollständige technische Betreuung' : 'Full technical maintenance', included: true },
      ],
    },
  ];

  const tableRows = [
    { feature: isDE ? 'Inhaltsseiten' : 'Content pages', values: ['1', '4', '7'] },
    { feature: isDE ? 'Mobil-optimiert' : 'Mobile optimized', values: [true, true, true] },
    { feature: isDE ? 'Kontaktformular' : 'Contact form', values: [true, true, true] },
    { feature: isDE ? 'Hosting inklusive' : 'Hosting included', values: [true, true, true] },
    { feature: isDE ? 'Domain-Verknüpfung' : 'Domain connection', values: [true, true, true] },
    { feature: isDE ? 'SEO-Grundeinstellungen' : 'Basic SEO setup', values: [true, true, true] },
    { feature: isDE ? 'Erweiterte SEO' : 'Advanced SEO', values: [false, true, true] },
    { feature: isDE ? 'Externe Integrationen' : 'External integrations', values: [false, true, true] },
    { feature: isDE ? 'Individuelle Gestaltung' : 'Individual design', values: [false, true, true] },
    { feature: isDE ? 'Zukunftssichere Struktur' : 'Future-proof structure', values: [false, false, true] },
    { feature: isDE ? 'Jahresaktualisierung' : 'Annual content update', values: [true, true, true] },
    { feature: isDE ? 'Technische Wartung' : 'Technical maintenance', values: [true, true, true] },
    { feature: isDE ? 'Bereitstellungsgebühr' : 'Setup fee', values: ['€299', '€299', '€299'] },
    { feature: isDE ? 'Preis/Monat' : 'Price/month', values: ['€109.90', '€149.90', '€199.90'] },
  ];

  const faqs = isDE ? [
    { q: 'Was ist in der einmaligen Bereitstellungsgebühr enthalten?', a: 'Die Bereitstellungsgebühr von 299 € deckt die initiale Einrichtung, das Design, die Entwicklung und die Inbetriebnahme Ihrer Website ab.' },
    { q: 'Kann ich meine bestehende Domain verwenden?', a: 'Ja, Ihre bestehende Domain kann mit der neuen Website verknüpft werden. Alternativ können wir Ihnen bei der Registrierung einer neuen Domain helfen.' },
    { q: 'Wie lange dauert es bis die Website online ist?', a: 'In der Regel ist Ihre Website innerhalb von 2–4 Wochen nach dem Erstgespräch online, abhängig von der Komplexität und der Geschwindigkeit der Inhaltslieferung.' },
    { q: 'Was passiert nach den 24 Monaten?', a: 'Der Vertrag verlängert sich automatisch um die gleiche Laufzeit, sofern nicht fristgerecht gekündigt wird. Die ursprünglichen Konditionen bleiben bestehen.' },
    { q: 'Kann ich später weitere Seiten hinzufügen?', a: 'Ja, weitere Seiten oder Funktionen können als kostenpflichtige Erweiterung hinzugefügt werden. Bitte sprechen Sie uns hierzu an.' },
  ] : [
    { q: 'What is included in the one-time setup fee?', a: 'The €299 setup fee covers the initial design, development and launch of your website.' },
    { q: 'Can I use my existing domain?', a: 'Yes, your existing domain can be connected to the new website. Alternatively, we can help you register a new domain.' },
    { q: 'How long until my website is live?', a: 'Typically within 2–4 weeks of the initial call, depending on complexity and how quickly content is provided.' },
    { q: 'What happens after 24 months?', a: 'The contract automatically extends by the same term unless cancelled with proper notice. The original conditions remain.' },
    { q: 'Can I add more pages later?', a: 'Yes, additional pages or features can be added as paid extensions. Please contact us to discuss.' },
  ];

  const demoTemplates = [
    { name: isDE ? 'Restaurant & Gastronomie' : 'Restaurant & Hospitality', emoji: '🍽️', desc: isDE ? 'Professionelle Website für Restaurants und Cafés' : 'Professional website for restaurants and cafes' },
    { name: isDE ? 'Handwerk & Dienstleistung' : 'Trades & Services', emoji: '🔧', desc: isDE ? 'Für Handwerksbetriebe und Dienstleister' : 'For tradespeople and service businesses' },
    { name: isDE ? 'Medizin & Gesundheit' : 'Medical & Health', emoji: '🏥', desc: isDE ? 'Für Arztpraxen und Gesundheitsdienstleister' : 'For medical practices and health services' },
    { name: isDE ? 'Immobilien' : 'Real Estate', emoji: '🏠', desc: isDE ? 'Für Makler und Immobilienunternehmen' : 'For agents and real estate companies' },
    { name: isDE ? 'Beauty & Wellness' : 'Beauty & Wellness', emoji: '💅', desc: isDE ? 'Für Salons, Spas und Wellnessangebote' : 'For salons, spas and wellness services' },
    { name: isDE ? 'Unternehmensberatung' : 'Business Consulting', emoji: '📊', desc: isDE ? 'Für Berater und professionelle Dienstleister' : 'For consultants and professional service firms' },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Globe size={12} className="mr-1" /> {isDE ? 'Professionelle Websites' : 'Professional Websites'}
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 max-w-4xl">
              {isDE ? 'Professionelle Unternehmenswebsites — von uns für Sie' : 'Professional Business Websites — Done for You'}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              {isDE ? 'Wir gestalten, bauen und pflegen Ihre Website, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.' : 'We design, build, and maintain your website so you can focus on running your business.'}
            </p>
            <a href={process.env.NEXT_PUBLIC_BOOKING_URL || '#'} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Beratung buchen' : 'Book Consultation'} <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">{isDE ? 'Warum Ihre Unternehmenswebsite entscheidend ist' : 'Why Your Business Website Matters'}</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {(isDE ? [
            { icon: '👁️', title: 'Erster Eindruck', desc: 'Über 70% der Kunden besuchen Ihre Website bevor sie Sie kontaktieren. Ein professioneller Auftritt ist entscheidend.' },
            { icon: '🔍', title: 'Google-Sichtbarkeit', desc: 'Unternehmen mit professionellen Websites werden in lokalen Suchergebnissen bevorzugt – mehr Sichtbarkeit, mehr Kunden.' },
            { icon: '💼', title: 'Vertrauen & Glaubwürdigkeit', desc: 'Eine professionelle Website signalisiert Seriosität und stärkt das Vertrauen potenzieller Kunden in Ihre Marke.' },
          ] : [
            { icon: '👁️', title: 'First impressions', desc: 'Over 70% of customers visit your website before contacting you. A professional presence is critical.' },
            { icon: '🔍', title: 'Google visibility', desc: 'Businesses with professional websites rank higher in local search results — more visibility, more customers.' },
            { icon: '💼', title: 'Trust & credibility', desc: 'A professional website signals reliability and builds trust with potential customers.' },
          ]).map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="card-sticker h-full">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessRoadmap steps={steps} title={isDE ? 'So läuft es ab' : 'How It Works'} />
        </div>
      </section>

      {/* Demo templates */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">{isDE ? 'Website-Beispiele für Ihre Branche' : 'Website Examples for Your Industry'}</h2>
            <p className="section-subtitle mx-auto">{isDE ? 'Sehen Sie, wie Ihre Website aussehen könnte' : 'See what your website could look like'}</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {demoTemplates.map((t, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="card-sticker flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-[#F5F5F5] flex items-center justify-center text-2xl flex-shrink-0">{t.emoji}</div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={300}>
          <p className="text-center text-sm text-gray-400 mt-8">{isDE ? '* Demo-Websites verfügbar im Beratungsgespräch' : '* Demo websites available during consultation call'}</p>
        </AnimatedSection>
      </section>

      {/* Domain Checker */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center mb-10">{isDE ? 'Domain-Verfügbarkeit prüfen' : 'Check Domain Availability'}</h2>
            <DomainChecker />
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">{isDE ? 'Website-Pakete' : 'Website Packages'}</h2>
            <p className="section-subtitle mx-auto">{isDE ? '€299 einmalige Bereitstellungsgebühr · 24 Monate Mindestlaufzeit' : '€299 one-time setup fee · 24-month minimum term'}</p>
          </div>
        </AnimatedSection>
        <PricingCards plans={plans} showSetupFee />
      </section>

      {/* Comparison */}
      <section className="py-10 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center mb-10">{isDE ? 'Funktionsvergleich' : 'Feature Comparison'}</h2>
            <ComparisonTable headers={['Pro', 'Premium', 'Enterprise']} rows={tableRows} />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion items={faqs} title={isDE ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-black tracking-tighter mb-5">
              {isDE ? 'Bereit für Ihre neue Website?' : 'Ready for your new website?'}
            </h2>
            <p className="text-gray-400 mb-8">{isDE ? 'Buchen Sie jetzt ein kostenloses Beratungsgespräch.' : 'Book a free consultation call today.'}</p>
            <a href={process.env.NEXT_PUBLIC_BOOKING_URL || '#'} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Jetzt starten' : 'Get started'} <ArrowRight size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
