import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, LayoutTemplate, MonitorSmartphone, Search, MessageSquareQuote } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { Link } from '@/lib/navigation';
import { getWebsiteDemoBySlug, type LocalizedText } from '@/lib/website-demo-data';

interface DemoPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

function t(locale: string, text: LocalizedText): string {
  return locale === 'de' ? text.de : text.en;
}

export async function generateMetadata({ params: { locale, slug } }: DemoPageProps): Promise<Metadata> {
  const localeKey: 'de' | 'en' = locale === 'de' ? 'de' : 'en';
  const demo = getWebsiteDemoBySlug(slug, localeKey);

  if (!demo) {
    return {
      title: locale === 'de' ? 'Demo nicht gefunden' : 'Demo not found',
    };
  }

  const name = t(locale, demo.name);
  return {
    title: locale === 'de' ? `${name} Demo-Website` : `${name} Demo Website`,
    description:
      locale === 'de'
        ? `Statische Demo-Landingpage fuer ${name} mit branchenspezifischem Theme.`
        : `Static demo landing page for ${name} with an industry-specific theme.`,
  };
}

export default function WebsiteDemoPage({ params: { locale, slug } }: DemoPageProps) {
  const localeKey: 'de' | 'en' = locale === 'de' ? 'de' : 'en';
  const demo = getWebsiteDemoBySlug(slug, localeKey);

  if (!demo) {
    notFound();
  }

  const isDE = locale === 'de';
  const companyName = t(locale, demo.name);
  const heroTitle = t(locale, demo.heroTitle);
  const heroSubtitle = t(locale, demo.heroSubtitle);

  const previewSections = isDE
    ? [
        { icon: LayoutTemplate, emoji: '✨', title: 'Startseite', desc: 'Starke Positionierung und klare Botschaft in den ersten Sekunden.' },
        { icon: Search, emoji: '🔎', title: 'Leistungsseiten', desc: 'Uebersichtliche Angebote mit klarem Nutzen und lokaler SEO-Basis.' },
        { icon: MonitorSmartphone, emoji: '📱', title: 'Mobiloptimiert', desc: 'Schnelle Darstellung auf Smartphone, Tablet und Desktop.' },
        { icon: MessageSquareQuote, emoji: '💬', title: 'Kontakt & Conversion', desc: 'Direkte Kontaktwege und klare Calls-to-Action fuer Anfragen.' },
      ]
    : [
        { icon: LayoutTemplate, emoji: '✨', title: 'Homepage', desc: 'Strong positioning and clear messaging from the first seconds.' },
        { icon: Search, emoji: '🔎', title: 'Service Pages', desc: 'Clean offer structure with value clarity and local SEO foundation.' },
        { icon: MonitorSmartphone, emoji: '📱', title: 'Mobile Optimized', desc: 'Fast, responsive experience on phone, tablet, and desktop.' },
        { icon: MessageSquareQuote, emoji: '💬', title: 'Contact & Conversion', desc: 'Direct contact flow and clear call-to-actions for leads.' },
      ];

  const processSteps = isDE
    ? [
        { emoji: '🧭', title: 'Briefing', desc: 'Wir sammeln Ihre Ziele, Leistungen und Markenrichtung.' },
        { emoji: '🎨', title: 'Design', desc: 'Das Layout wird auf Ihre Branche und Zielgruppe abgestimmt.' },
        { emoji: '🚀', title: 'Go-Live', desc: 'Nach Freigabe geht die Seite produktionsbereit online.' },
      ]
    : [
        { emoji: '🧭', title: 'Briefing', desc: 'We gather your goals, services, and brand direction.' },
        { emoji: '🎨', title: 'Design', desc: 'The layout is tailored to your industry and target audience.' },
        { emoji: '🚀', title: 'Go Live', desc: 'After approval, the site goes live and production-ready.' },
      ];

  const heroHighlights = isDE
    ? [
        { emoji: demo.emoji, label: `${companyName} Demo` },
        { emoji: '✨', label: 'Branchenspezifisches Theme' },
        { emoji: '📱', label: 'Mobile First' },
        { emoji: '⚡', label: 'Schneller Fokus auf Anfragen' },
      ]
    : [
        { emoji: demo.emoji, label: `${companyName} Demo` },
        { emoji: '✨', label: 'Industry-specific theme' },
        { emoji: '📱', label: 'Mobile first' },
        { emoji: '⚡', label: 'Fast lead-focused layout' },
      ];

  const previewStats = isDE
    ? [
        { emoji: '🧩', value: '1', label: 'gemeinsame Template-Basis' },
        { emoji: '🌍', value: '2', label: 'integrierte Sprachen' },
        { emoji: '🎯', value: '3', label: 'klare Conversion-Zonen' },
      ]
    : [
        { emoji: '🧩', value: '1', label: 'shared template base' },
        { emoji: '🌍', value: '2', label: 'built-in languages' },
        { emoji: '🎯', value: '3', label: 'clear conversion zones' },
      ];

  const pageOutline = isDE
    ? [
        { emoji: '🖥️', title: 'Hero + Angebot', desc: 'Klare Positionierung, CTA und Branchenvorteile direkt im ersten Screen.' },
        { emoji: '⭐', title: 'Vertrauen + Proof', desc: 'Social Proof, Vorteile und Leistungslogik sorgen fuer mehr Sicherheit.' },
        { emoji: '📩', title: 'Kontakt + Buchung', desc: 'Anfragen werden mit klaren Kontaktwegen sauber in Conversions verwandelt.' },
      ]
    : [
        { emoji: '🖥️', title: 'Hero + Offer', desc: 'Clear positioning, CTA, and industry value from the first screen.' },
        { emoji: '⭐', title: 'Trust + Proof', desc: 'Social proof, value points, and offer clarity build confidence.' },
        { emoji: '📩', title: 'Contact + Booking', desc: 'Leads are guided into action through direct contact and booking paths.' },
      ];

  return (
    <div className="pt-16 overflow-hidden" style={{ background: demo.theme.accentSoft }}>
      <section
        className="py-24 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${demo.theme.heroFrom} 0%, ${demo.theme.heroTo} 100%)` }}
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 0%, transparent 55%)' }} />
        <div className="absolute -top-16 right-[-8%] w-[340px] h-[340px] rounded-full anim-blob opacity-60" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <div className="absolute -bottom-24 left-[-4%] w-[280px] h-[280px] rounded-full anim-blob2 opacity-50" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <AnimatedSection>
              <span className="badge mb-5" style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.35)' }}>
                {demo.emoji} {companyName}
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-5 max-w-4xl">{heroTitle}</h1>
              <p className="text-lg md:text-xl text-white/85 max-w-3xl mb-7">{heroSubtitle}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {heroHighlights.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm"
                    style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.24)' }}
                  >
                    <span>{item.emoji}</span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold"
                  style={{ background: '#ffffff', color: '#111111' }}
                >
                  {isDE ? 'Kostenlose Beratung buchen' : 'Book Free Consultation'} <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services/websites"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border"
                  style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.6)' }}
                >
                  {isDE ? 'Zurueck zu Website-Paketen' : 'Back to Website Packages'}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-2xl">
                {previewStats.map((stat, index) => (
                  <AnimatedSection key={stat.label} delay={index * 90}>
                    <div className="rounded-2xl px-4 py-4 border backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.18)' }}>
                      <div className="text-lg mb-1">{stat.emoji}</div>
                      <div className="text-2xl font-black tracking-tight">{stat.value}</div>
                      <div className="text-xs text-white/75 leading-relaxed">{stat.label}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={160}>
              <div className="relative">
                <div className="anim-float1 absolute -top-4 right-6 rounded-full px-4 py-2 text-sm font-semibold text-white border" style={{ background: 'rgba(255,255,255,0.16)', borderColor: 'rgba(255,255,255,0.22)' }}>
                  ✨ {isDE ? 'Live Vorschau' : 'Live Preview'}
                </div>
                <div className="anim-float2 absolute top-24 -left-6 rounded-full px-4 py-2 text-sm font-semibold text-white border" style={{ background: 'rgba(255,255,255,0.16)', borderColor: 'rgba(255,255,255,0.22)' }}>
                  📱 {isDE ? 'Responsive' : 'Responsive'}
                </div>
                <div className="anim-float3 absolute -bottom-5 right-10 rounded-full px-4 py-2 text-sm font-semibold text-white border" style={{ background: 'rgba(255,255,255,0.16)', borderColor: 'rgba(255,255,255,0.22)' }}>
                  🎯 {isDE ? 'Lead-Fokus' : 'Lead Focus'}
                </div>

                <div className="rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-md p-4 shadow-[0_40px_120px_rgba(0,0,0,0.18)]">
                  <div className="rounded-[28px] overflow-hidden bg-white text-[#111111] shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                      <span className="ml-3 text-xs font-semibold text-gray-400 truncate">{`${slug}.demo`}</span>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="rounded-[26px] p-6 text-white mb-4 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${demo.theme.heroFrom} 0%, ${demo.theme.heroTo} 100%)` }}>
                        <div className="absolute right-[-30px] top-[-30px] w-28 h-28 rounded-full opacity-20" style={{ background: '#ffffff' }} />
                        <span className="badge-glass mb-4">{demo.emoji} {isDE ? 'Demo-Header' : 'Demo Header'}</span>
                        <h3 className="text-2xl font-black tracking-tight max-w-sm">{heroTitle}</h3>
                        <p className="text-white/80 text-sm mt-2 max-w-md">{heroSubtitle}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {pageOutline.slice(0, 2).map((item) => (
                          <div key={item.title} className="rounded-2xl border p-4" style={{ borderColor: demo.theme.cardTint, background: demo.theme.accentSoft }}>
                            <div className="text-xl mb-2">{item.emoji}</div>
                            <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 rounded-2xl border p-4 flex items-start gap-3" style={{ borderColor: demo.theme.cardTint, background: '#ffffff' }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: demo.theme.cardTint }}>
                          <span className="text-lg">{pageOutline[2].emoji}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-1">{pageOutline[2].title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{pageOutline[2].desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="badge-outline mb-4">✨ {isDE ? 'Template-Module' : 'Template Modules'}</span>
            <h2 className="section-title">{isDE ? 'Was diese Demo-Landingpage beinhaltet' : 'What This Demo Landing Page Includes'}</h2>
            <p className="section-subtitle mx-auto">
              {isDE
                ? `Eine wiederverwendbare Struktur fuer ${companyName} mit branchenspezifischem Look.`
                : `A reusable structure for ${companyName} with an industry-specific look.`}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
          <div className="grid md:grid-cols-2 gap-5">
            {previewSections.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 80}>
                <div
                  className="rounded-3xl p-6 border bg-white h-full transition-transform duration-300 hover:-translate-y-1"
                  style={{ borderColor: demo.theme.accent }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: demo.theme.cardTint }}
                    >
                      <item.icon size={18} style={{ color: demo.theme.accent }} />
                    </div>
                    <span className="text-xl">{item.emoji}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={140}>
            <div className="rounded-[32px] border bg-white p-8 shadow-lift-lg" style={{ borderColor: demo.theme.accent }}>
              <span className="badge-surface mb-5">🧩 {isDE ? 'Ein Template, viele Branchen' : 'One Template, Many Industries'}</span>
              <h3 className="text-3xl font-black tracking-tight mb-4">
                {isDE ? 'Gleiche Struktur, andere Persoenlichkeit' : 'Same structure, different personality'}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {isDE
                  ? 'Diese Demo bleibt technisch gleich aufgebaut, wird aber ueber Farben, Emojis, Tonalitaet und Fokusbereiche auf jede Branche angepasst.'
                  : 'This demo keeps the same technical structure while adapting colors, emojis, tone, and focus areas for each industry.'}
              </p>

              <div className="space-y-4">
                {pageOutline.map((item) => (
                  <div key={item.title} className="rounded-2xl p-4" style={{ background: demo.theme.accentSoft }}>
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-0.5">{item.emoji}</span>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-3xl bg-white border p-8" style={{ borderColor: demo.theme.accent }}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="badge-outline">🎨 {isDE ? 'Theme-Fit' : 'Theme Fit'}</span>
              <span className="text-sm font-medium" style={{ color: demo.theme.accent }}>{companyName}</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight mb-6">
              {isDE ? `Warum dieses Theme fuer ${companyName} passt` : `Why This Theme Fits ${companyName}`}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {demo.valuePoints.map((point, index) => (
                <div key={index} className="rounded-2xl p-5 border" style={{ background: demo.theme.accentSoft, borderColor: demo.theme.cardTint }}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={18} style={{ color: demo.theme.accent }} className="mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">{t(locale, point)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="badge-outline mb-4">🚀 {isDE ? 'Ablauf' : 'Process'}</span>
            <h2 className="section-title">{isDE ? 'Einfacher Ablauf' : 'Simple Process'}</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-5">
          {processSteps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 100}>
              <div className="card-sticker h-full">
                <div
                  className="w-10 h-10 rounded-full text-sm font-black flex items-center justify-center mb-4"
                  style={{ background: demo.theme.cardTint, color: demo.theme.accent }}
                >
                  {`0${index + 1}`}
                </div>
                <div className="text-3xl mb-3">{step.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="rounded-[32px] p-10 border text-white relative overflow-hidden" style={{ borderColor: demo.theme.accent, background: `linear-gradient(135deg, ${demo.theme.heroFrom} 0%, ${demo.theme.heroTo} 100%)` }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-20 translate-x-12 -translate-y-12" style={{ background: '#ffffff' }} />
            <div className="flex flex-wrap justify-center gap-3 mb-6 relative z-10">
              {heroHighlights.slice(1).map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.22)' }}>
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-4">
              {isDE ? 'Soll Ihre Seite auch so aussehen?' : 'Want Your Website to Look Like This?'}
            </h2>
            <p className="text-white/85 mb-8 max-w-2xl mx-auto">
              {isDE
                ? 'Buchen Sie ein kostenloses Gespraech. Wir passen dieses Konzept an Ihr Unternehmen an.'
                : 'Book a free call and we will adapt this concept to your business.'}
            </p>
            <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold" style={{ background: '#ffffff', color: '#111111' }}>
              {isDE ? 'Kostenlose Beratung buchen' : 'Book Free Consultation'} <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
