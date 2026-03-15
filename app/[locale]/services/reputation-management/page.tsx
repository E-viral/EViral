import type { Metadata } from 'next';
import { ArrowRight, Star, BarChart2, MessageSquare, Bell, Mail, Smartphone } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ProcessRoadmap from '@/components/sections/ProcessRoadmap';
import PlatformIntegrations from '@/components/sections/PlatformIntegrations';
import PricingCards from '@/components/sections/PricingCards';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Link from 'next/link';
import { reputationPlanContent } from '../../../../lib/reputation-plan-content';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Reputationsmanagement' : 'Reputation Management' };
}

export default function ReputationPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  const localeKey: 'de' | 'en' = isDE ? 'de' : 'en';

  const steps = isDE ? [
    { icon: '🔗', title: 'Plattformen verbinden', desc: 'Google, Yelp und weitere in Minuten verknüpfen' },
    { icon: '📧', title: 'Automatisch anfragen', desc: 'E-Mail & SMS Anfragen werden automatisch versandt' },
    { icon: '🤖', title: 'KI antwortet', desc: 'KI erstellt individuelle Antwortvorschläge' },
    { icon: '📊', title: 'Wachstum messen', desc: 'Trends und Performance im Dashboard verfolgen' },
  ] : [
    { icon: '🔗', title: 'Connect platforms', desc: 'Link Google, Yelp and others in minutes' },
    { icon: '📧', title: 'Auto-request reviews', desc: 'Email & SMS requests sent automatically' },
    { icon: '🤖', title: 'AI responds', desc: 'AI generates personalised reply suggestions' },
    { icon: '📊', title: 'Measure growth', desc: 'Track trends and performance in your dashboard' },
  ];

  const plans = [
    {
      name: 'Basic',
      price: 49.90,
      yearlyPrice: 44,
      description: reputationPlanContent.basic.fullDescription[localeKey],
      cardHighlights: reputationPlanContent.basic.cardHighlights[localeKey],
      features: [
        { label: isDE ? '3 Bewertungsplattformen' : '3 review platforms', included: true },
        { label: isDE ? '100 E-Mail-Anfragen/Monat' : '100 email requests/month', included: true },
        { label: isDE ? '30 SMS-Anfragen/Monat' : '30 SMS requests/month', included: true },
        { label: isDE ? 'Zentrales Dashboard' : 'Central dashboard', included: true },
        { label: isDE ? 'KI-Antwortvorschläge' : 'AI reply suggestions', included: true },
        { label: isDE ? '1 Unternehmensstandort' : '1 business location', included: true },
        { label: isDE ? 'Monatliche Berichte' : 'Monthly reports', included: true },
        { label: isDE ? 'Sentiment-Analyse' : 'Sentiment analysis', included: false },
        { label: isDE ? 'Mehrere Standorte' : 'Multiple locations', included: false },
      ],
    },
    {
      name: 'Pro',
      price: 99.90,
      yearlyPrice: 89,
      badge: isDE ? 'Beliebteste Wahl' : 'Most Popular',
      description: reputationPlanContent.pro.fullDescription[localeKey],
      cardHighlights: reputationPlanContent.pro.cardHighlights[localeKey],
      features: [
        { label: isDE ? '5 Bewertungsplattformen' : '5 review platforms', included: true },
        { label: isDE ? '300 E-Mail-Anfragen/Monat' : '300 email requests/month', included: true },
        { label: isDE ? '50 SMS-Anfragen/Monat' : '50 SMS requests/month', included: true },
        { label: isDE ? 'Erweitertes Dashboard' : 'Advanced dashboard', included: true },
        { label: isDE ? 'KI-Agent (automatisch)' : 'AI agent (automatic)', included: true },
        { label: isDE ? 'Sentiment-Analyse' : 'Sentiment analysis', included: true },
        { label: isDE ? 'Gmail-Integration' : 'Gmail integration', included: true },
        { label: isDE ? 'Prioritäts-Support' : 'Priority support', included: true },
        { label: isDE ? 'Mehrere Standorte' : 'Multiple locations', included: false },
      ],
    },
    {
      name: 'Premium',
      price: 169.90,
      yearlyPrice: 152,
      description: reputationPlanContent.premium.fullDescription[localeKey],
      cardHighlights: reputationPlanContent.premium.cardHighlights[localeKey],
      features: [
        { label: isDE ? '15+ Bewertungsplattformen' : '15+ review platforms', included: true },
        { label: isDE ? '500 E-Mail-Anfragen/Monat' : '500 email requests/month', included: true },
        { label: isDE ? '75 SMS-Anfragen/Monat' : '75 SMS requests/month', included: true },
        { label: isDE ? 'Premium-Dashboard' : 'Premium dashboard', included: true },
        { label: isDE ? 'Vollautomatischer KI-Agent' : 'Fully automated AI agent', included: true },
        { label: isDE ? 'NFC + QR-Code Integration' : 'NFC + QR code integration', included: true },
        { label: isDE ? 'Bis zu 3 Standorte' : 'Up to 3 locations', included: true },
        { label: isDE ? 'Wettbewerbs-Benchmarking' : 'Competitor benchmarking', included: true },
        { label: isDE ? 'Dedizierter Account-Support' : 'Dedicated account support', included: true },
      ],
    },
  ];

  const paymentLinks = {
    Basic: {
      monthly: 'https://pay.e-viral.de/b/28E7sD7gtbCD5276ot5sA0h',
      yearly: 'https://pay.e-viral.de/b/00wbIT30dgWX7afeUZ5sA0k',
    },
    Pro: {
      monthly: 'https://pay.e-viral.de/b/cNicMX30d367527fZ35sA0m',
      yearly: 'https://pay.e-viral.de/b/5kQ8wH1W922366bcMR5sA0n',
    },
    Premium: {
      monthly: 'https://pay.e-viral.de/b/aFa28j6cpeOP9inbIN5sA0q',
      yearly: 'https://pay.e-viral.de/b/00wfZ99oB5efeCH5kp5sA0r',
    },
  };

  const tableRows = [
    { feature: isDE ? 'Bewertungsplattformen' : 'Review platforms', values: ['3', '5', '15+'] },
    { feature: isDE ? 'E-Mail-Anfragen/Monat' : 'Email requests/month', values: ['100', '300', '500'] },
    { feature: isDE ? 'SMS-Anfragen/Monat' : 'SMS requests/month', values: ['30', '50', '75'] },
    { feature: isDE ? 'Zentrales Dashboard' : 'Central dashboard', values: [true, true, true] },
    { feature: isDE ? 'KI-Antwortvorschläge' : 'AI reply suggestions', values: [true, true, true] },
    { feature: isDE ? 'Automatische KI-Antworten' : 'Automatic AI replies', values: [false, true, true] },
    { feature: isDE ? 'Sentiment-Analyse' : 'Sentiment analysis', values: [false, true, true] },
    { feature: isDE ? 'Gmail-Integration' : 'Gmail integration', values: [false, true, true] },
    { feature: isDE ? 'Mehrere Standorte' : 'Multiple locations', values: [false, false, true] },
    { feature: isDE ? 'NFC/QR-Code Bewertung' : 'NFC/QR code reviews', values: [false, false, true] },
    { feature: isDE ? 'Wettbewerbs-Benchmarking' : 'Competitor benchmarking', values: [false, false, true] },
    { feature: isDE ? 'Support' : 'Support', values: [isDE ? 'E-Mail' : 'Email', isDE ? 'Priorität' : 'Priority', isDE ? 'Dediziert' : 'Dedicated'] },
  ];

  const faqs = isDE ? [
    { q: 'Wie lange ist die Mindestvertragslaufzeit?', a: 'Die Mindestvertragslaufzeit beträgt 24 Monate. Eine Kündigung ist mit einer Frist von 3 Monaten zum Ende der Vertragslaufzeit möglich.' },
    { q: 'Welche Bewertungsplattformen werden unterstützt?', a: 'Je nach Paket unterstützen wir Google, Facebook, Yelp, Booking.com, TripAdvisor, Airbnb, Trustpilot, Glassdoor, Kununu, Indeed, Jameda und weitere Plattformen.' },
    { q: 'Wie funktioniert die KI-Antwortfunktion?', a: 'Die KI analysiert eingehende Bewertungen, erkennt Tonalität und Inhalt und erstellt individuelle Antwortvorschläge. Je nach Paket können Antworten manuell freigegeben oder automatisch veröffentlicht werden.' },
    { q: 'Kann ich mehrere Unternehmensstandorte verwalten?', a: 'Ja, das Premium-Paket unterstützt bis zu 3 Standorte. Eine Erweiterung auf weitere Standorte ist optional möglich.' },
    { q: 'Gibt es eine kostenlose Testphase?', a: 'Gerne bieten wir Ihnen ein kostenloses Beratungsgespräch und eine Demo-Präsentation an. Bitte buchen Sie einen Termin über unseren Kalender.' },
    { q: 'Welche Sprachen werden unterstützt?', a: 'Die Plattform unterstützt mehrere Sprachen. Bewertungsanfragen können auf Wunsch in verschiedenen Sprachen konfiguriert werden.' },
  ] : [
    { q: 'How long is the minimum contract?', a: 'The minimum contract term is 24 months. Cancellation is possible with 3 months notice before the end of the contract period.' },
    { q: 'Which review platforms are supported?', a: 'Depending on the plan: Google, Facebook, Yelp, Booking.com, TripAdvisor, Airbnb, Trustpilot, Glassdoor, Kununu, Indeed, Jameda and more.' },
    { q: 'How does the AI reply feature work?', a: 'The AI analyses incoming reviews, detects tone and content, and creates personalised reply suggestions. Depending on the plan, replies can be manually approved or published automatically.' },
    { q: 'Can I manage multiple locations?', a: 'Yes, the Premium plan supports up to 3 locations. Extension to additional locations is optionally available.' },
    { q: 'Is there a free trial?', a: 'We offer a free consultation call and demo presentation. Please book an appointment via our calendar.' },
    { q: 'What languages are supported?', a: 'The platform supports multiple languages. Review requests can be configured in different languages upon request.' },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Star size={12} className="mr-1" /> {isDE ? 'Reputationsmanagement' : 'Reputation Management'}
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 max-w-4xl">
              {isDE ? 'Übernehmen Sie die Kontrolle über Ihre Online-Reputation' : 'Take Control of Your Online Reputation'}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              {isDE ? 'Automatisch Bewertungen sammeln, verwalten und beantworten – auf Google, Yelp, TripAdvisor und 15+ Plattformen.' : 'Automatically collect, manage, and respond to reviews across Google, Yelp, TripAdvisor, and 15+ platforms.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/booking`}
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
                {isDE ? 'Demo buchen' : 'Book a Demo'} <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">{isDE ? 'Warum Reputationsmanagement so wichtig ist' : 'Why Reputation Management Matters'}</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {(isDE ? [
            { icon: '⭐', val: '97%', label: 'der Verbraucher lesen Bewertungen vor einer Kaufentscheidung' },
            { icon: '📈', val: '+40%', label: 'mehr Konversionen mit einem Durchschnitt von 4,5 Sternen' },
            { icon: '💬', val: '89%', label: 'der Kunden lesen Antworten auf negative Bewertungen' },
          ] : [
            { icon: '⭐', val: '97%', label: 'of consumers read reviews before a purchase decision' },
            { icon: '📈', val: '+40%', label: 'more conversions with a 4.5-star average rating' },
            { icon: '💬', val: '89%', label: 'of customers read responses to negative reviews' },
          ]).map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="card-sticker text-center py-10">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-4xl font-black tracking-tighter mb-2">{s.val}</div>
                <div className="text-sm text-gray-500 leading-relaxed">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessRoadmap steps={steps} title={isDE ? 'So funktioniert es' : 'How It Works'} />
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlatformIntegrations title={isDE ? 'Integrierte Bewertungsplattformen' : 'Integrated Review Platforms'} />
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="section-title">{isDE ? 'Wählen Sie Ihr Paket' : 'Choose Your Plan'}</h2>
              <p className="section-subtitle mx-auto">{isDE ? 'Alle Pakete mit 24 Monaten Mindestlaufzeit.' : 'All plans include a 24-month minimum term.'}</p>
            </div>
          </AnimatedSection>
          <PricingCards plans={plans} bookingHref={`/${locale}/booking`} paymentLinks={paymentLinks} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-title text-center mb-10">{isDE ? 'Vollständiger Funktionsvergleich' : 'Full Feature Comparison'}</h2>
          <ComparisonTable headers={['Basic', 'Pro', 'Premium']} rows={tableRows} />
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="py-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} title={isDE ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="section-title mb-4">{isDE ? 'Jetzt loslegen' : 'Get started today'}</h2>
          <p className="text-gray-500 mb-8">{isDE ? 'Buchen Sie ein kostenloses Beratungsgespräch und erfahren Sie, wie wir Ihre Reputation stärken.' : 'Book a free consultation and discover how we can strengthen your online reputation.'}</p>
          <Link href={`/${locale}/booking`} className="btn-primary">
            {isDE ? 'Kostenlose Beratung buchen' : 'Book Free Consultation'} <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
