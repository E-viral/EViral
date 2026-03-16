import type { Metadata } from 'next';
import { ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ProcessRoadmap from '@/components/sections/ProcessRoadmap';
import PricingCards from '@/components/sections/PricingCards';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { Link } from '@/lib/navigation';
import { aiPlanContent } from '../../../../lib/ai-plan-content';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'KI-Telefonassistent' : 'AI Phone Assistant' };
}

export default function AIPhonePage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  const localeKey: 'de' | 'en' = isDE ? 'de' : 'en';

  const capabilities = isDE ? [
    { icon: '📞', label: 'Anrufe 24/7 annehmen' },
    { icon: '🗓️', label: 'Terminwünsche erfassen' },
    { icon: '❓', label: 'FAQ automatisch beantworten' },
    { icon: '📋', label: 'Anruferdaten aufnehmen' },
    { icon: '🔀', label: 'An Mitarbeiter weiterleiten' },
    { icon: '📩', label: 'Strukturierte Zusammenfassung' },
  ] : [
    { icon: '📞', label: 'Answer calls 24/7' },
    { icon: '🗓️', label: 'Capture appointment requests' },
    { icon: '❓', label: 'Answer FAQs automatically' },
    { icon: '📋', label: 'Record caller information' },
    { icon: '🔀', label: 'Transfer to staff if needed' },
    { icon: '📩', label: 'Structured call summaries' },
  ];

  const steps = isDE ? [
    { icon: '📱', title: 'Nummer verbinden', desc: 'Weiterleitung Ihrer bestehenden Rufnummer' },
    { icon: '⚙️', title: 'KI konfigurieren', desc: 'Wir richten den Assistenten mit Ihren Infos ein' },
    { icon: '🤖', title: 'KI übernimmt Anrufe', desc: 'Vollautomatische Anrufbearbeitung startet' },
    { icon: '📊', title: 'Zusammenfassungen erhalten', desc: 'Strukturierte Gesprächsinfos direkt zu Ihnen' },
  ] : [
    { icon: '📱', title: 'Connect your number', desc: 'Forward your existing business number' },
    { icon: '⚙️', title: 'Configure the AI', desc: 'We set up the assistant with your info' },
    { icon: '🤖', title: 'AI handles calls', desc: 'Fully automated call processing starts' },
    { icon: '📊', title: 'Receive summaries', desc: 'Structured call info delivered to you' },
  ];

  const plans = [
    {
      name: 'AI Voice Assist',
      price: 399,
      yearlyPrice: 359.1,
      minutes: 2000,
      extraMin: '€0.16',
      description: aiPlanContent.assist.fullDescription[localeKey],
      cardHighlights: aiPlanContent.assist.cardHighlights[localeKey],
      features: [
        { label: isDE ? '2.000 Gesprächsminuten/Monat' : '2,000 conversation minutes/month', included: true },
        { label: isDE ? 'Anrufannahme & Bearbeitung' : 'Call answering & handling', included: true },
        { label: isDE ? 'Basis-FAQ-Antworten' : 'Basic FAQ responses', included: true },
        { label: isDE ? 'Anruferdaten erfassen' : 'Caller info capture', included: true },
        { label: isDE ? 'Anrufweiterleitung' : 'Call transfer capability', included: true },
        { label: isDE ? '1x Jahreskonfiguration' : '1x annual configuration update', included: true },
        { label: isDE ? 'Technischer Support' : 'Technical support included', included: true },
        { label: isDE ? 'Kalender-Integration' : 'Calendar integration', included: false },
      ],
    },
    {
      name: 'AI Voice Professional',
      price: 499,
      yearlyPrice: 449.1,
      minutes: 3500,
      extraMin: '€0.14',
      badge: isDE ? 'Beliebteste Wahl' : 'Most Popular',
      description: aiPlanContent.professional.fullDescription[localeKey],
      cardHighlights: aiPlanContent.professional.cardHighlights[localeKey],
      features: [
        { label: isDE ? '3.500 Gesprächsminuten/Monat' : '3,500 conversation minutes/month', included: true },
        { label: isDE ? 'Vollständiges Anrufmanagement' : 'Full inbound call management', included: true },
        { label: isDE ? 'Strukturierte Datenerfassung' : 'Structured caller data capture', included: true },
        { label: isDE ? 'Terminerfassung & -änderungen' : 'Appointment & schedule capture', included: true },
        { label: isDE ? 'Kalender-Integration (optional)' : 'Calendar integration (if applicable)', included: true },
        { label: isDE ? 'Erweiterte Gesprächsabläufe' : 'Advanced conversation flows', included: true },
        { label: isDE ? '1x Jahreskonfiguration' : '1x annual configuration update', included: true },
        { label: isDE ? 'Technischer Support' : 'Technical support included', included: true },
      ],
    },
    {
      name: 'AI Voice Enterprise',
      price: 699,
      yearlyPrice: 629.1,
      minutes: 5500,
      extraMin: '€0.13',
      description: aiPlanContent.enterprise.fullDescription[localeKey],
      cardHighlights: aiPlanContent.enterprise.cardHighlights[localeKey],
      features: [
        { label: isDE ? '5.500 Gesprächsminuten/Monat' : '5,500 conversation minutes/month', included: true },
        { label: isDE ? 'Hochvolumen-Anrufautomatisierung' : 'High-volume call automation', included: true },
        { label: isDE ? 'Automatische FAQ-Beantwortung' : 'Automatic FAQ answering', included: true },
        { label: isDE ? 'Terminmanagement' : 'Appointment management', included: true },
        { label: isDE ? 'Anrufweiterleitung & Dokumentation' : 'Call transfer & documentation', included: true },
        { label: isDE ? 'Individuelle Konfiguration' : 'Custom business configuration', included: true },
        { label: isDE ? '1x Jahreskonfiguration' : '1x annual configuration update', included: true },
        { label: isDE ? 'Prioritäts-Support' : 'Priority technical support', included: true },
      ],
    },
  ];

  const tableRows = [
    { feature: isDE ? 'Gesprächsminuten/Monat' : 'Conversation minutes/month', values: ['2,000', '3,500', '5,500'] },
    { feature: isDE ? 'Zusatzminuten' : 'Extra minutes', values: ['€0.16/min', '€0.14/min', '€0.13/min'] },
    { feature: isDE ? 'Anrufannahme 24/7' : 'Call answering 24/7', values: [true, true, true] },
    { feature: isDE ? 'Anruferdaten erfassen' : 'Caller info capture', values: [true, true, true] },
    { feature: isDE ? 'Anrufweiterleitung' : 'Call transfer', values: [true, true, true] },
    { feature: isDE ? 'Erweiterte Gesprächsabläufe' : 'Advanced conversation flows', values: [false, true, true] },
    { feature: isDE ? 'Kalender-Integration' : 'Calendar integration', values: [false, true, true] },
    { feature: isDE ? 'Hochvolumen-Automatisierung' : 'High-volume automation', values: [false, false, true] },
    { feature: isDE ? 'Individuelle Konfiguration' : 'Custom configuration', values: [false, false, true] },
    { feature: isDE ? 'Jahreskonfiguration' : 'Annual configuration update', values: ['1x', '1x', '1x'] },
    { feature: isDE ? 'Support' : 'Support', values: [isDE ? 'Standard' : 'Standard', isDE ? 'Standard' : 'Standard', isDE ? 'Priorität' : 'Priority'] },
    { feature: isDE ? 'Mindestlaufzeit' : 'Minimum term', values: [isDE ? '24 Monate' : '24 months', isDE ? '24 Monate' : '24 months', isDE ? '24 Monate' : '24 months'] },
  ];

  const faqs = isDE ? [
    { q: 'Wie verbinde ich meine bestehende Telefonnummer?', a: 'Wir richten eine Anrufweiterleitung von Ihrer bestehenden Nummer zu unserem KI-System ein. Die ursprüngliche Nummer bleibt erhalten.' },
    { q: 'Kann der KI-Assistent Deutsch und Englisch sprechen?', a: 'Ja, der Assistent kann in mehreren Sprachen konfiguriert werden, darunter Deutsch und Englisch.' },
    { q: 'Was passiert, wenn das Minutenkontingent erschöpft ist?', a: 'Bei Überschreitung werden zusätzliche Minuten zum vereinbarten Minutenpreis (0,16 €, 0,14 € oder 0,13 €) abgerechnet. Nicht verbrauchte Minuten verfallen.' },
    { q: 'Kann ich die Konfiguration des Assistenten ändern?', a: 'Ja, einmal pro Jahr ist eine kostenlose Aktualisierung der Konfiguration enthalten. Zusätzliche Anpassungen können separat beauftragt werden.' },
    { q: 'Ist das System DSGVO-konform?', a: 'Ja, das System ist DSGVO-konform. Alle Daten werden datenschutzkonform verarbeitet und gespeichert.' },
    { q: 'Was passiert, wenn der KI-Assistent eine Frage nicht beantworten kann?', a: 'Der Assistent kann so konfiguriert werden, dass er in solchen Fällen den Anrufer an einen Mitarbeiter weiterleitet oder Rückrufwünsche aufnimmt.' },
  ] : [
    { q: 'How do I connect my existing phone number?', a: 'We set up call forwarding from your existing number to our AI system. Your original number remains intact.' },
    { q: 'Can the AI assistant speak German and English?', a: 'Yes, the assistant can be configured in multiple languages including German and English.' },
    { q: 'What happens when the minute allowance runs out?', a: 'Additional minutes are billed at the agreed rate (€0.16, €0.14 or €0.13/min). Unused minutes expire at month end.' },
    { q: 'Can I change the assistant\'s configuration?', a: 'Yes, one configuration update per year is included. Additional customisations can be arranged separately.' },
    { q: 'Is this GDPR compliant?', a: 'Yes, the system is GDPR compliant. All data is processed and stored in accordance with data protection regulations.' },
    { q: 'What if the AI can\'t answer a question?', a: 'The assistant can be configured to transfer the caller to a staff member or record a callback request in such cases.' },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Phone size={12} className="mr-1" /> {isDE ? 'KI-Telefonassistent' : 'AI Phone Assistant'}
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 max-w-4xl">
              {isDE ? 'Kein Anruf bleibt mehr unbeantwortet — Ihr KI-Rezeptionist arbeitet 24/7' : 'Never Miss a Call — Your AI Receptionist Works 24/7'}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              {isDE ? 'Unser KI-Telefonassistent nimmt Kundenanrufe entgegen, erfasst Anfragen und bucht Termine – vollautomatisch.' : 'Our AI phone assistant answers customer calls, captures inquiries, and books appointments — automatically.'}
            </p>
            <Link href="/booking"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Demo buchen' : 'Book a Demo'} <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-title text-center mb-12">{isDE ? 'Was Ihr KI-Assistent kann' : 'What Your AI Assistant Can Do'}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {capabilities.map((c, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="card-sticker flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                <span className="font-semibold text-sm">{c.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessRoadmap steps={steps} title={isDE ? 'So funktioniert es' : 'How It Works'} />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">{isDE ? 'KI-Telefonassistent Pakete' : 'AI Phone Assistant Plans'}</h2>
            <p className="section-subtitle mx-auto">{isDE ? '24 Monate Mindestlaufzeit · Keine Einrichtungsgebühr' : '24-month minimum term · No setup fee'}</p>
          </div>
        </AnimatedSection>
        <PricingCards plans={plans} bookingHref="/booking" />
      </section>

      {/* Comparison Table */}
      <section className="py-10 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center mb-10">{isDE ? 'Vollständiger Funktionsvergleich' : 'Full Feature Comparison'}</h2>
            <ComparisonTable headers={['AI Voice Assist', 'AI Voice Professional', 'AI Voice Enterprise']} rows={tableRows} />
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
              {isDE ? 'Bereit für Ihren KI-Telefonassistenten?' : 'Ready for your AI phone assistant?'}
            </h2>
            <p className="text-gray-400 mb-8">{isDE ? 'Buchen Sie eine Demo und erleben Sie es live.' : 'Book a demo and experience it live.'}</p>
            <Link href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Demo buchen' : 'Book Demo'} <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
