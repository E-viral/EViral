import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ProcessRoadmap from '@/components/sections/ProcessRoadmap';
import PricingCards from '@/components/sections/PricingCards';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import DomainChecker from '@/components/sections/DomainChecker';
import { websiteDemoCompanies } from '@/lib/website-demo-data';
import { websitePlanContent } from '../../../../lib/website-plan-content';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Websites' : 'Professional Websites' };
}

export default function WebsitesPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  const localeKey: 'de' | 'en' = isDE ? 'de' : 'en';

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
      description: websitePlanContent.pro.fullDescription[localeKey],
      cardHighlights: websitePlanContent.pro.cardHighlights[localeKey],
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
      description: websitePlanContent.premium.fullDescription[localeKey],
      cardHighlights: websitePlanContent.premium.cardHighlights[localeKey],
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
      description: websitePlanContent.enterprise.fullDescription[localeKey],
      cardHighlights: websitePlanContent.enterprise.cardHighlights[localeKey],
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

  const paymentLinks = {
    'Pro Website': {
      monthly: 'https://pay.e-viral.de/b/fZuaEP30d7mndyD5kp5sA0y',
      yearly: 'https://pay.e-viral.de/b/dRm9AL1W95efcuz6ot5sA0z',
    },
    'Premium Website': {
      monthly: 'https://pay.e-viral.de/b/00wcMX30d9uv66b1495sA0A',
      yearly: 'https://pay.e-viral.de/b/eVq00b30dgWX9inbIN5sA0B',
    },
    'Enterprise Website': {
      monthly: 'https://pay.e-viral.de/b/8x2bIT9oBayz7afcMR5sA0C',
      yearly: 'https://pay.e-viral.de/b/8x2dR1cANcGHcuzfZ35sA0D',
    },
  };

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

  const demoTemplates = websiteDemoCompanies.map((demo) => ({
    slug: demo.slug,
    name: isDE ? demo.name.de : demo.name.en,
    emoji: demo.emoji,
    desc: isDE ? demo.cardDescription.de : demo.cardDescription.en,
    accent: demo.theme.accent,
    cardTint: demo.theme.cardTint,
  }));

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
            <Link href={`/${locale}/booking`}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Beratung buchen' : 'Book Consultation'} <ArrowRight size={18} />
            </Link>
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
              <Link
                href={`/${locale}/services/websites/demo/${t.slug}`}
                className="card-sticker flex items-center gap-4 hover:scale-[1.02] transition-transform group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: t.cardTint }}
                >
                  {t.emoji}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.desc}</p>
                  <span
                    className="inline-block mt-2 text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: t.accent }}
                  >
                    {isDE ? 'Demo ansehen' : 'View demo'}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={300}>
          <p className="text-center text-sm text-gray-400 mt-8">
            {isDE
              ? '* Klicken Sie auf eine Karte, um die statische Demo-Landingpage zu sehen.'
              : '* Click any card to open its static demo landing page.'}
          </p>
        </AnimatedSection>
      </section>

      {/* Domain Checker */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center mb-10">{isDE ? 'Domain-Verfügbarkeit prüfen' : 'Check Domain Availability'}</h2>
            <DomainChecker bookingHref={`/${locale}/booking`} />
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
        <PricingCards plans={plans} showSetupFee bookingHref={`/${locale}/booking`} paymentLinks={paymentLinks} />
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
            <Link href={`/${locale}/booking`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Jetzt starten' : 'Get started'} <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
