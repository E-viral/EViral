import type { Metadata } from 'next';
import { ArrowRight, Shield, Zap, Users, Heart, Lightbulb, Globe } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { Link } from '@/lib/navigation';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Über uns' : 'About Us' };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';

  const values = isDE ? [
    { icon: Users, title: 'Kunden zuerst', desc: 'Jede Entscheidung, die wir treffen, stellt den Erfolg unserer Kunden in den Mittelpunkt.' },
    { icon: Zap, title: 'KI-gestützte Effizienz', desc: 'Wir setzen modernste Technologie ein, um Ihnen echte Zeitersparnisse zu ermöglichen.' },
    { icon: Shield, title: 'Transparenz', desc: 'Keine versteckten Kosten, keine Überraschungen. Wir kommunizieren offen und ehrlich.' },
    { icon: Heart, title: 'Langfristige Partnerschaften', desc: 'Wir denken nicht kurzfristig. Wir bauen dauerhafte Beziehungen mit unseren Kunden.' },
  ] : [
    { icon: Users, title: 'Client-first approach', desc: 'Every decision we make puts our clients\' success at the centre.' },
    { icon: Zap, title: 'AI-powered efficiency', desc: 'We deploy cutting-edge technology to deliver real time savings for your business.' },
    { icon: Shield, title: 'Transparency', desc: 'No hidden costs, no surprises. We communicate openly and honestly.' },
    { icon: Heart, title: 'Long-term partnerships', desc: 'We don\'t think short-term. We build lasting relationships with our clients.' },
  ];

  const teamValues = isDE ? [
    { icon: Lightbulb, title: 'Innovation im Mittelpunkt', desc: 'Wir arbeiten mit den neuesten Tools und Technologien – KI, Automatisierung und mehr.' },
    { icon: Globe, title: 'Flexible Arbeitsumgebung', desc: 'Remote-freundliche Arbeitskultur mit modernen Kollaborationstools.' },
    { icon: Users, title: 'Zusammenarbeit', desc: 'Ein unterstützendes Team, das gemeinsam Probleme löst und füreinander da ist.' },
    { icon: Zap, title: 'Wachstum & Entwicklung', desc: 'Raum zum Lernen, Experimentieren und beruflichen Wachstum.' },
  ] : [
    { icon: Lightbulb, title: 'Innovation at the core', desc: 'We work with the latest tools and technologies — AI, automation, and more.' },
    { icon: Globe, title: 'Flexible work environment', desc: 'Remote-friendly culture with modern collaboration tools.' },
    { icon: Users, title: 'Collaboration', desc: 'A supportive team that solves problems together and has each other\'s backs.' },
    { icon: Zap, title: 'Growth & development', desc: 'Room to learn, experiment, and grow professionally.' },
  ];

  const tools = ['Next.js', 'TypeScript', 'AI/ML APIs', 'PostgreSQL', 'Node.js', 'React', 'Tailwind CSS', 'Vercel'];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="badge mb-6">{isDE ? 'Über EViral' : 'About EViral'}</div>
              <h1 className="text-5xl font-black tracking-tighter mb-6">
                {isDE ? 'Wir sind Ihr digitaler Wachstumspartner' : 'We Are Your Digital Growth Partner'}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isDE
                  ? 'Wir sind nicht nur ein Reputationsmanagement-Unternehmen – wir sind eine Full-Service-Digitalagentur, die Unternehmen mit KI und Automatisierung smarter wachsen lässt.'
                  : 'We are not just a reputation management company — we are a full-service digital agency helping businesses grow smarter with AI and automation.'}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {isDE
                  ? 'Mit Expertise in Reputationsmanagement, professionellen Websites und KI-Telefonlösungen bieten wir alles aus einer Hand, was moderne Unternehmen für ihren digitalen Erfolg benötigen.'
                  : 'With expertise in reputation management, professional websites, and AI phone solutions, we offer everything modern businesses need for digital success — all from one trusted partner.'}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '500+', label: isDE ? 'Betreute Unternehmen' : 'Businesses served' },
                  { val: '15+', label: isDE ? 'Integrierte Plattformen' : 'Integrated platforms' },
                  { val: '24/7', label: isDE ? 'KI-Unterstützung' : 'AI support' },
                  { val: '3', label: isDE ? 'Kernleistungen' : 'Core services' },
                ].map((s, i) => (
                  <div key={i} className="card-sticker text-center py-8">
                    <div className="text-3xl font-black tracking-tighter mb-1">{s.val}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-title text-center mb-12">{isDE ? 'Was wir tun' : 'What We Do'}</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {(isDE ? [
            { emoji: '⭐', title: 'Reputationsmanagement', desc: 'Wir helfen Unternehmen dabei, ihre Online-Bewertungen zu überwachen, zu verwalten und aktiv zu steuern – vollautomatisiert mit KI.' },
            { emoji: '🌐', title: 'Professionelle Websites', desc: 'Von der Konzeption bis zur Pflege – wir erstellen professionelle Unternehmenswebsites, die Vertrauen schaffen und Kunden überzeugen.' },
            { emoji: '🤖', title: 'KI-Telefonassistent', desc: 'Unser KI-System beantwortet Anrufe 24/7, erfasst Anfragen strukturiert und sorgt dafür, dass kein Lead mehr verloren geht.' },
          ] : [
            { emoji: '⭐', title: 'Reputation Management', desc: 'We help businesses monitor, manage and actively shape their online reviews — fully automated with AI.' },
            { emoji: '🌐', title: 'Professional Websites', desc: 'From concept to maintenance — we build professional business websites that build trust and convert customers.' },
            { emoji: '🤖', title: 'AI Phone Assistant', desc: 'Our AI system answers calls 24/7, captures inquiries in a structured way and ensures no lead is ever lost again.' },
          ]).map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="card-sticker h-full">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="font-bold text-lg mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-center mb-12">
              {isDE ? 'Unsere Werte' : 'Our Values'}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <v.icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">{isDE ? 'Was unser Team schätzt' : 'What Our Team Values'}</h2>
            <p className="section-subtitle mx-auto">{isDE ? 'Was uns als Arbeitgeber auszeichnet' : 'What makes working with us special'}</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {teamValues.map((v, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="card-sticker flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                  <v.icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center mb-10">{isDE ? 'Tools & Technologien' : 'Tools & Technologies'}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span key={tool} className="px-5 py-2.5 bg-white border border-[#E0E0E0] rounded-xl text-sm font-semibold shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="section-title mb-4">{isDE ? 'Gemeinsam wachsen' : "Let's Grow Together"}</h2>
          <p className="text-gray-500 mb-8">{isDE ? 'Buchen Sie ein kostenloses Beratungsgespräch und erfahren Sie, wie wir Ihr Unternehmen voranbringen können.' : 'Book a free consultation and discover how we can take your business to the next level.'}</p>
          <Link href="/booking" className="btn-primary">
            {isDE ? 'Kostenlose Beratung buchen' : 'Book Free Consultation'} <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
