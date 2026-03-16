import type { Metadata } from 'next';
import { ArrowRight, Handshake, Check } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ProcessRoadmap from '@/components/sections/ProcessRoadmap';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { Link } from '@/lib/navigation';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Partner werden' : 'Become a Partner' };
}

export default function PartnerPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';

  const steps = isDE ? [
    { icon: '📩', title: 'Kontakt aufnehmen', desc: 'Sie schreiben uns oder buchen ein Gespräch' },
    { icon: '📋', title: 'Service kennenlernen', desc: 'Wir erklären Ihnen alles im Detail' },
    { icon: '🎯', title: 'Live-Demo erleben', desc: 'Wir präsentieren Ihnen das System live' },
    { icon: '🚀', title: 'Durchstarten', desc: 'Sie verkaufen die Lösung an Ihre Kunden' },
  ] : [
    { icon: '📩', title: 'Contact us', desc: 'Write to us or book a call' },
    { icon: '📋', title: 'Learn the service', desc: 'We explain everything in detail' },
    { icon: '🎯', title: 'See a live demo', desc: 'We present the system live to you' },
    { icon: '🚀', title: 'Get started', desc: 'You start selling the solution to your clients' },
  ];

  const included = isDE ? [
    'White-Label Plattformzugang — Ihre Marke, unsere Technologie',
    'Onboarding und Schulung durch unser Team',
    'Verkaufsunterlagen und Marketingmaterialien',
    'Flexibles Provisionsmodell (individuell verhandelt)',
    'Laufender technischer Support durch unser Team',
    'Zugang zu allen drei Produkten: Reputationsmanagement, Websites, KI-Telefon',
  ] : [
    'White-label platform access — your brand, our technology',
    'Onboarding and training by our team',
    'Sales materials and marketing resources',
    'Flexible commission model (individually negotiated)',
    'Ongoing technical support from our team',
    'Access to all three products: Reputation Management, Websites, AI Phone',
  ];

  const targets = isDE ? [
    { icon: '📊', label: 'Marketing-Agenturen' },
    { icon: '💻', label: 'IT-Berater & Systemhäuser' },
    { icon: '📈', label: 'Unternehmensberater' },
    { icon: '🎨', label: 'Web-Designer & Freelancer' },
    { icon: '🤝', label: 'Vertriebsprofis' },
    { icon: '🌐', label: 'Digitale Dienstleister' },
  ] : [
    { icon: '📊', label: 'Marketing agencies' },
    { icon: '💻', label: 'IT consultants & system houses' },
    { icon: '📈', label: 'Business consultants' },
    { icon: '🎨', label: 'Web designers & freelancers' },
    { icon: '🤝', label: 'Sales professionals' },
    { icon: '🌐', label: 'Digital service providers' },
  ];

  const faqs = isDE ? [
    { q: 'Fallen Kosten an, um Partner zu werden?', a: 'Nein, die Partnerschaft selbst ist kostenfrei. Die Konditionen besprechen wir individuell in einem persönlichen Gespräch.' },
    { q: 'Wie wird die Provision berechnet?', a: 'Die Provision wird individuell verhandelt. Es gibt keinen festen Prozentsatz – wir passen das Modell an Ihre Situation und Ihren Vertriebsansatz an.' },
    { q: 'Benötige ich technisches Wissen?', a: 'Nein. Wir übernehmen die gesamte technische Seite. Sie konzentrieren sich auf den Vertrieb, wir kümmern uns um die Umsetzung.' },
    { q: 'Kann ich die Lösung unter meiner eigenen Marke verkaufen?', a: 'Ja, das White-Label-Modell ermöglicht es Ihnen, die Plattform unter Ihrer eigenen Marke anzubieten. Ihre Kunden sehen Ihren Markenauftritt.' },
    { q: 'Wie schnell kann ich als Partner starten?', a: 'Nach dem Erstgespräch und einer kurzen Onboarding-Phase können Sie in der Regel innerhalb weniger Tage mit dem Vertrieb beginnen.' },
  ] : [
    { q: 'Is there a cost to become a partner?', a: 'No, the partnership itself is free. We discuss the conditions individually in a personal conversation.' },
    { q: 'How is the commission structured?', a: 'The commission is individually negotiated. There is no fixed percentage — we tailor the model to your situation and sales approach.' },
    { q: 'Do I need technical knowledge?', a: 'No. We handle all the technical aspects. You focus on sales, we take care of implementation.' },
    { q: 'Can I sell the solution under my own brand?', a: 'Yes, the white-label model allows you to offer the platform under your own brand. Your clients see your branding.' },
    { q: 'How quickly can I start as a partner?', a: 'After the initial call and a brief onboarding phase, you can typically start selling within a few days.' },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="badge mb-6" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Handshake size={12} className="mr-1" /> {isDE ? 'Partnerprogramm' : 'Partner Programme'}
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 max-w-4xl">
              {isDE ? 'Partner werden — KI-Lösungen unter Ihrer eigenen Marke verkaufen' : 'Become a Partner — Sell AI Solutions Under Your Brand'}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              {isDE
                ? 'Unsere Entwickler haben die Plattform gebaut. Sie verkaufen sie unter Ihrer eigenen Marke an Ihre Kunden – wir kümmern uns um alles im Hintergrund.'
                : 'Our developers built the platform. You sell it to your clients as your own solution — we handle everything behind the scenes.'}
            </p>
            <Link href="/booking"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Partner-Gespräch buchen' : 'Book a Partner Call'} <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <h2 className="section-title mb-6">{isDE ? 'Die Chance' : 'The Opportunity'}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isDE
                  ? 'Möchten Sie Geld verdienen, indem Sie KI-Lösungen an Ihre eigenen Kunden und Ihr Geschäftsnetzwerk verkaufen? Unsere Plattform ist vollständig entwickelt und einsatzbereit. Sie übernehmen den Vertrieb unter Ihrer Marke — wir liefern die Technologie.'
                  : 'Would you like to earn money by selling AI solutions to your own clients and business network? Our platform is fully built and ready to go. You handle sales under your brand — we deliver the technology.'}
              </p>
              <div className="card-sticker">
                <div className="text-2xl mb-3">🏷️</div>
                <h3 className="font-bold text-lg mb-2">{isDE ? 'Unsere Plattform. Ihre Marke.' : 'Our platform. Your brand.'}</h3>
                <p className="text-sm text-gray-500">
                  {isDE
                    ? 'Das White-Label-Modell ermöglicht es Ihnen, die Plattform vollständig unter Ihrem eigenen Namen und Ihrer eigenen Marke anzubieten. Ihre Kunden sehen nur Ihre Marke.'
                    : 'The white-label model allows you to offer the platform entirely under your own name and brand. Your clients only see your brand.'}
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="space-y-4">
              {[
                { val: '3', label: isDE ? 'Produkte zum Weiterverkauf' : 'Products to resell' },
                { val: '∞', label: isDE ? 'Verdienstpotenzial' : 'Earning potential' },
                { val: '100%', label: isDE ? 'White-Label fähig' : 'White-label capable' },
                { val: '0€', label: isDE ? 'Einstiegskosten' : 'Entry costs' },
              ].map((s, i) => (
                <div key={i} className="card-sticker flex items-center gap-5">
                  <div className="text-4xl font-black tracking-tighter w-20 flex-shrink-0">{s.val}</div>
                  <div className="text-sm font-semibold text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessRoadmap steps={steps} title={isDE ? 'So funktioniert die Partnerschaft' : 'How Partnership Works'} />
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-title text-center mb-12">{isDE ? 'Was inklusive ist' : "What's Included"}</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {included.map((item, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="flex items-start gap-3 card-sticker py-4">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center mb-10">{isDE ? 'Für wen ist das geeignet?' : 'Who Is This For?'}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {targets.map((t, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="card-sticker flex items-center gap-4 hover:scale-[1.02] transition-transform">
                  <span className="text-2xl">{t.icon}</span>
                  <span className="font-semibold text-sm">{t.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion items={faqs} title={isDE ? 'Partner FAQ' : 'Partner FAQ'} />
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-black tracking-tighter mb-5">
              {isDE ? 'Bereit loszulegen?' : 'Ready to get started?'}
            </h2>
            <p className="text-gray-400 mb-4">
              {isDE ? 'Buchen Sie ein Partner-Gespräch und wir erklären Ihnen alles.' : 'Book a partner call and we\'ll walk you through everything.'}
            </p>
            <p className="text-gray-500 text-sm mb-10">
              info@e-viral.de
            </p>
            <Link href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all">
              {isDE ? 'Partner-Gespräch buchen' : 'Book a Partner Call'} <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
