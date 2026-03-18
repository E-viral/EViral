import React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, Star, Globe, Phone, Check, TrendingUp, Shield, Zap, Users, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { Link, type AppHref } from '@/lib/navigation';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    description: locale === 'de'
      ? 'Reputationsmanagement, professionelle Websites und KI-Telefonassistenten für Ihr Unternehmen.'
      : 'Reputation management, professional websites and AI phone assistants for your business.',
  };
}

const platformLogos = [
  { name: 'Google', bg: '#fff', emoji: '🔵' },
  { name: 'Yelp', bg: '#fff', emoji: '⭐' },
  { name: 'Booking.com', bg: '#fff', emoji: '🏨' },
  { name: 'TripAdvisor', bg: '#fff', emoji: '🦉' },
  { name: 'Trustpilot', bg: '#fff', emoji: '✅' },
  { name: 'Facebook', bg: '#fff', emoji: '📘' },
  { name: 'Airbnb', bg: '#fff', emoji: '🏠' },
  { name: 'Glassdoor', bg: '#fff', emoji: '🚪' },
  { name: 'Kununu', bg: '#fff', emoji: '💼' },
  { name: 'Indeed', bg: '#fff', emoji: '🔍' },
];

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';

  const services: Array<{
    icon: typeof Star;
    href: AppHref;
    color: string;
    tag: string;
    title: string;
    desc: string;
    stat: string;
    statLabel: string;
  }> = [
    {
      icon: Star,
      href: '/services/reputation-management',
      color: 'from-yellow-400 to-orange-400',
      tag: isDE ? 'Reputationsmanagement' : 'Reputation Management',
      title: isDE ? 'Mehr Bewertungen. Mehr Vertrauen.' : 'More Reviews. More Trust.',
      desc: isDE
        ? 'Automatisch Bewertungen sammeln, verwalten und beantworten – auf 15+ Plattformen.'
        : 'Automatically collect, manage and respond to reviews across 15+ platforms.',
      stat: '+340%', statLabel: isDE ? 'mehr Bewertungen' : 'more reviews',
    },
    {
      icon: Globe,
      href: '/services/websites',
      color: 'from-blue-500 to-indigo-500',
      tag: isDE ? 'Professionelle Websites' : 'Professional Websites',
      title: isDE ? 'Ihre Website. Unser Job.' : 'Your Website. Our Job.',
      desc: isDE
        ? 'Wir bauen, hosten und pflegen Ihre Unternehmenswebsite – komplett fertig in 48h.'
        : 'We build, host, and maintain your business website — fully ready in 48 hours.',
      stat: '<48h', statLabel: isDE ? 'bis Go-Live' : 'to go live',
    },
    {
      icon: Phone,
      href: '/services/ai-phone-assistant',
      color: 'from-green-500 to-emerald-500',
      tag: isDE ? 'KI-Telefonassistent' : 'AI Phone Assistant',
      title: isDE ? 'Kein Anruf geht verloren.' : 'Never Miss a Call.',
      desc: isDE
        ? 'KI antwortet 24/7, erfasst Anfragen und bucht Termine – vollautomatisch.'
        : 'AI answers 24/7, captures leads and books appointments — automatically.',
      stat: '24/7', statLabel: isDE ? 'erreichbar' : 'available',
    },
  ];

  const stats = isDE
    ? [
        { val: '97%', label: 'Kunden lesen Bewertungen vor dem Kauf', icon: Star },
        { val: '24/7', label: 'KI-Telefonassistent immer aktiv', icon: Phone },
        { val: '15+', label: 'Bewertungsplattformen integriert', icon: Globe },
        { val: '<48h', label: 'Durchschnittliche Website-Einrichtung', icon: Zap },
      ]
    : [
        { val: '97%', label: 'of customers read reviews before buying', icon: Star },
        { val: '24/7', label: 'AI phone assistant always active', icon: Phone },
        { val: '15+', label: 'review platforms integrated', icon: Globe },
        { val: '<48h', label: 'average website setup time', icon: Zap },
      ];

  const whyPoints = isDE ? [
    { icon: Shield, title: 'DSGVO-konform', desc: 'Alle Daten werden datenschutzkonform auf EU-Servern verarbeitet.' },
    { icon: Zap,    title: 'Sofort aktiv', desc: 'Ihre Lösung ist innerhalb von 48 Stunden betriebsbereit.' },
    { icon: TrendingUp, title: '+340% Bewertungen', desc: 'Durchschnittliche Steigerung der Bewertungsanzahl nach 3 Monaten.' },
    { icon: Users,  title: '98% Zufriedenheit', desc: 'Unsere Kunden empfehlen uns weiter – das ist unser Anspruch.' },
  ] : [
    { icon: Shield, title: 'GDPR Compliant', desc: 'All data is processed on EU servers in full compliance.' },
    { icon: Zap,    title: 'Active in <48h', desc: 'Your solution is live and running within 48 hours.' },
    { icon: TrendingUp, title: '+340% Reviews', desc: 'Average increase in review volume after 3 months.' },
    { icon: Users,  title: '98% Satisfaction', desc: 'Our clients recommend us — that\'s our standard.' },
  ];

  const aiSteps = isDE ? [
    { num: '01', icon: '📞', title: 'Kunde ruft an', desc: 'Ihr Kunde wählt Ihre Rufnummer' },
    { num: '02', icon: '🤖', title: 'KI antwortet sofort', desc: '24/7 – auch nachts & am Wochenende' },
    { num: '03', icon: '📋', title: 'Anfrage erfassen', desc: 'Daten und Terminwünsche aufnehmen' },
    { num: '04', icon: '📩', title: 'Sie erhalten Summary', desc: 'Strukturierte Zusammenfassung' },
  ] : [
    { num: '01', icon: '📞', title: 'Customer calls', desc: 'Your customer dials your number' },
    { num: '02', icon: '🤖', title: 'AI answers instantly', desc: '24/7 — nights and weekends too' },
    { num: '03', icon: '📋', title: 'Captures inquiry', desc: 'Records data and appointment requests' },
    { num: '04', icon: '📩', title: 'You get a summary', desc: 'Structured call summary sent to you' },
  ];

  return (
    <div className="pt-16">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-[96vh] flex items-center overflow-hidden bg-white">
        {/* Background elements */}
        <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,100,42,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="hero-badge inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--border)] bg-white text-xs font-bold text-[var(--muted)] mb-8 shadow-sm uppercase tracking-widest">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                {isDE ? 'Digitale Wachstumsagentur · Deutschland' : 'Digital Growth Agency · Germany'}
              </div>

              <h1 className="hero-title display-title text-[var(--black)] mb-6">
                {isDE ? (
                  <>Digitale<br /><span className="text-gradient-warm">Wachstums</span><br />lösungen.</>
                ) : (
                  <>Digital<br /><span className="text-gradient-warm">Growth</span><br />Solutions.</>
                )}
              </h1>

              <p className="hero-subtitle text-lg text-[var(--muted)] mb-10 max-w-lg leading-relaxed" style={{ fontWeight: 400 }}>
                {isDE
                  ? 'Wir kombinieren KI-Automatisierung, Reputationsmanagement und professionelle Webpräsenz – damit Ihr Unternehmen smarter wächst.'
                  : 'We combine AI automation, reputation management, and professional web presence — so your business grows smarter and faster.'}
              </p>

              <div className="hero-cta flex flex-wrap gap-4 mb-12">
                <Link href="/booking" className="btn-primary text-base px-8 py-4">
                  {isDE ? 'Kostenlose Beratung' : 'Free Consultation'} <ArrowRight size={18} />
                </Link>
                <Link href="/services/reputation-management" className="btn-secondary text-base px-8 py-4">
                  {isDE ? 'Leistungen entdecken' : 'Explore Services'}
                </Link>
              </div>

              {/* Social proof */}
              <div className="hero-cta flex items-center gap-4">
                <div className="flex -space-x-2">
                  {['🧑‍💼','👩‍💼','🧑','👩','🧔'].map((e, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-[var(--surface2)] border-2 border-white flex items-center justify-center text-sm">{e}</div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_,i) => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
                    <span className="text-xs font-bold ml-1.5">5.0</span>
                  </div>
                  <p className="text-xs text-[var(--muted)]">{isDE ? 'Von 500+ Unternehmen vertraut' : 'Trusted by 500+ businesses'}</p>
                </div>
              </div>
            </div>

            {/* Right — floating dashboard visual */}
            <div className="hero-visual relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[520px] ml-auto">
                {/* Main card */}
                <div className="anim-float-card absolute inset-8 bg-[var(--off-black)] rounded-3xl shadow-lift-lg overflow-hidden"
                  style={{ border: '1px solid #2a2a2a' }}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-white font-bold text-sm">Reputation Dashboard</span>
                      <span className="chip-dark text-[10px]">Live</span>
                    </div>
                    {/* Star rating bar */}
                    <div className="space-y-2.5 mb-5">
                      {[
                        { stars: 5, pct: 76, count: 284 },
                        { stars: 4, pct: 18, count: 67 },
                        { stars: 3, pct: 4,  count: 15 },
                        { stars: 2, pct: 1,  count: 4  },
                        { stars: 1, pct: 1,  count: 3  },
                      ].map((r) => (
                        <div key={r.stars} className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400 w-4">{r.stars}</span>
                          <Star size={9} className="fill-yellow-400 text-yellow-400" />
                          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${r.pct}%` }} />
                          </div>
                          <span className="text-[10px] text-gray-400 w-6 text-right">{r.count}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-5xl font-black text-white tracking-tight">4.8</span>
                      <div className="pb-1">
                        <div className="flex gap-0.5 mb-1">
                          {[...Array(5)].map((_,i) => <Star key={i} size={12} className={i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'} />)}
                        </div>
                        <p className="text-[10px] text-gray-400">373 {isDE ? 'Bewertungen' : 'reviews'}</p>
                      </div>
                    </div>
                  </div>
                  {/* Bottom mini chart */}
                  <div className="px-6 pb-4">
                    <div className="flex items-end gap-1 h-12">
                      {[40,55,48,62,58,71,65,80,74,88,82,96].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-yellow-400/70 transition-all" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <p className="text-[9px] text-gray-500 mt-1.5">{isDE ? 'Bewertungen letzte 12 Monate' : 'Reviews last 12 months'}</p>
                  </div>
                </div>

                {/* Floating notification cards */}
                <div className="anim-float1 absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lift border border-[var(--border)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center text-sm">⭐</div>
                  <div>
                    <p className="text-xs font-bold">New 5★ review</p>
                    <p className="text-[10px] text-[var(--muted)]">Google · 2 min ago</p>
                  </div>
                </div>

                <div className="anim-float2 absolute -bottom-2 -left-6 bg-white rounded-2xl px-4 py-3 shadow-lift border border-[var(--border)] flex items-center gap-3" style={{ animationDelay: '2s' }}>
                  <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-sm">🤖</div>
                  <div>
                    <p className="text-xs font-bold">{isDE ? 'KI hat geantwortet' : 'AI replied'}</p>
                    <p className="text-[10px] text-[var(--muted)]">Yelp · auto</p>
                  </div>
                </div>

                <div className="anim-float3 absolute top-1/3 -right-8 bg-[var(--accent)] rounded-2xl px-3 py-2.5 shadow-lg flex items-center gap-2.5" style={{ animationDelay: '1s' }}>
                  <Phone size={14} className="text-white" />
                  <div>
                    <p className="text-[10px] font-bold text-white">AI call handled</p>
                    <p className="text-[9px] text-orange-100">23:41 · Sunday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── MARQUEE PLATFORMS ────────────────────── */}
      <section className="py-5 border-t border-b border-[var(--border)] bg-[var(--surface)] overflow-hidden">
        <p className="text-center text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest mb-4">
          {isDE ? 'Integriert mit allen wichtigen Plattformen' : 'Integrated with every major platform'}
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track anim-marquee-left">
            {[...platformLogos, ...platformLogos].map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2 mx-2 bg-white rounded-xl border border-[var(--border)] flex-shrink-0">
                <span className="text-base">{p.emoji}</span>
                <span className="text-xs font-semibold text-[var(--off-black)] whitespace-nowrap">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 80} direction="up">
              <div className="card-sticker text-center py-8 group">
                <div className="icon-wrap mx-auto mb-4 group-hover:rotate-[-5deg]">
                  <s.icon size={20} className="text-white" />
                </div>
                <div className="stat-number text-[var(--black)] mb-1">{s.val}</div>
                <div className="text-xs text-[var(--muted)] leading-tight">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="badge mb-5">{isDE ? 'Unsere Leistungen' : 'Our Services'}</span>
              <h2 className="section-title mb-0">
                {isDE ? 'Alles, was Ihr Unternehmen braucht' : 'Everything your business needs'}
              </h2>
              <p className="section-subtitle mx-auto text-center">
                {isDE ? 'Drei leistungsstarke Dienste. Ein vertrauensvoller Partner.' : 'Three powerful services. One trusted partner.'}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 120} direction="up">
                <Link href={s.href} className="card-feature group flex flex-col h-full cursor-pointer block">
                  {/* Header */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-[-3deg] transition-transform duration-300`}>
                    <s.icon size={24} className="text-white" />
                  </div>
                  <span className="badge-surface text-[10px] mb-4 self-start">{s.tag}</span>
                  <h3 className="text-2xl font-black tracking-tight mb-3 leading-tight">{s.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1 mb-6">{s.desc}</p>

                  {/* Stat pill */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-black tracking-tighter text-[var(--black)]">{s.stat}</div>
                    <div className="text-xs text-[var(--muted)]">{s.statLabel}</div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--black)] group-hover:gap-3 transition-all">
                    {isDE ? 'Mehr erfahren' : 'Learn more'}
                    <div className="w-7 h-7 rounded-full bg-[var(--black)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                      <ArrowRight size={13} className="text-white" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AI SECTION ───────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="right">
            <span className="badge mb-6">{isDE ? 'Warum KI?' : 'Why AI?'}</span>
            <h2 className="section-title mb-6">
              {isDE ? 'KI macht Ihr Unternehmen unaufhaltbar' : 'AI makes your business unstoppable'}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-10">
              {isDE
                ? 'Automatisierung übernimmt repetitive Aufgaben, damit Ihr Team sich auf das Wesentliche konzentrieren kann.'
                : 'Automation handles the repetitive tasks so your team can focus on what truly matters.'}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {whyPoints.map((pt, i) => (
                <div key={i} className="card-sticker group p-5">
                  <div className="icon-wrap mb-4 w-10 h-10 rounded-xl">
                    <pt.icon size={16} className="text-white" />
                  </div>
                  <h4 className="font-bold text-sm mb-1.5 tracking-tight">{pt.title}</h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} direction="left">
            {/* AI phone assistant visual */}
            <div className="relative">
              <div className="bg-[var(--off-black)] rounded-3xl p-7 border border-[#2a2a2a] shadow-lift-lg">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-bold">AI Phone Log</span>
                  <span className="chip-dark text-[10px]">Today</span>
                </div>
                <div className="space-y-3">
                  {(isDE ? [
                    { time: '09:12', caller: 'Max Müller', intent: 'Terminanfrage', status: 'Erfasst', color: 'bg-green-500' },
                    { time: '11:45', caller: 'Lisa Koch', intent: 'Öffnungszeiten', status: 'Beantwortet', color: 'bg-blue-500' },
                    { time: '14:20', caller: 'Unbekannt', intent: 'Allgemeine Anfrage', status: 'Weitergeleitet', color: 'bg-yellow-500' },
                    { time: '18:55', caller: 'Tom Bauer', intent: 'Preisinfos', status: 'Erfasst', color: 'bg-green-500' },
                    { time: '22:07', caller: 'Anna Klein', intent: 'Terminanfrage', status: 'Erfasst', color: 'bg-green-500' },
                  ] : [
                    { time: '09:12', caller: 'John Smith', intent: 'Appointment request', status: 'Captured', color: 'bg-green-500' },
                    { time: '11:45', caller: 'Sarah Lee', intent: 'Opening hours', status: 'Answered', color: 'bg-blue-500' },
                    { time: '14:20', caller: 'Unknown', intent: 'General inquiry', status: 'Transferred', color: 'bg-yellow-500' },
                    { time: '18:55', caller: 'Mike Chen', intent: 'Pricing info', status: 'Captured', color: 'bg-green-500' },
                    { time: '22:07', caller: 'Emma Davis', intent: 'Appointment request', status: 'Captured', color: 'bg-green-500' },
                  ]).map((call, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors">
                      <span className="text-[10px] text-gray-500 w-10 flex-shrink-0">{call.time}</span>
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${call.color}`} />
                      <span className="text-xs text-gray-300 flex-1 truncate">{call.caller}</span>
                      <span className="text-[10px] text-gray-500 hidden md:block flex-shrink-0">{call.intent}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                        call.color === 'bg-green-500' ? 'bg-green-500/20 text-green-400' :
                        call.color === 'bg-blue-500'  ? 'bg-blue-500/20 text-blue-400' :
                                                         'bg-yellow-500/20 text-yellow-400'
                      }`}>{call.status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{isDE ? '5 Anrufe heute · 0 verpasst' : '5 calls today · 0 missed'}</span>
                  <span className="text-xs font-bold text-green-400">↑ 100%</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="anim-float1 absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-lift border border-[var(--border)]">
                <p className="text-xs font-black text-[var(--black)]">0 {isDE ? 'Verpasste Anrufe' : 'Missed Calls'}</p>
                <p className="text-[10px] text-[var(--muted)]">{isDE ? 'Heute · 24/7 aktiv' : 'Today · 24/7 active'}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── AI PHONE STEPS ───────────────────────── */}
      <section className="py-20 bg-[var(--off-black)] relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(232,100,42,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="badge-glass mb-5">{isDE ? 'So funktioniert es' : 'How it works'}</span>
              <h2 className="section-title text-white">{isDE ? 'In 4 Schritten — vollautomatisch' : '4 steps — fully automated'}</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {aiSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100} direction="up">
                <div className="card-glass text-center p-6 h-full flex flex-col">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <div className="text-[10px] font-black text-[var(--accent)] uppercase tracking-widest mb-3">{step.num}</div>
                  <h4 className="text-white font-bold text-sm mb-2 tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="text-center mt-10">
              <Link href="/services/ai-phone-assistant"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--black)] font-bold rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg">
                {isDE ? 'KI-Assistent entdecken' : 'Explore AI Assistant'} <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── REPUTATION PREVIEW ───────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="up">
            <span className="badge mb-6">{isDE ? 'Reputationsmanagement' : 'Reputation Management'}</span>
            <h2 className="section-title mb-5">
              {isDE ? 'Ihre Online-Reputation auf Autopilot' : 'Your online reputation on autopilot'}
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              {isDE
                ? 'Automatisch Bewertungen sammeln, intelligent beantworten und Trends verfolgen – auf Google, Yelp, Booking.com und 12+ weiteren Plattformen.'
                : 'Automatically collect reviews, intelligently respond, and track trends across Google, Yelp, Booking.com and 12+ more platforms.'}
            </p>
            <ul className="space-y-3 mb-8">
              {(isDE ? [
                'KI erstellt individuelle Antwortvorschläge in Sekunden',
                'Automatische E-Mail & SMS Bewertungsanfragen',
                'Echtzeit-Monitoring auf allen Plattformen',
                'NFC-Karten & QR-Codes für direktes Feedback',
              ] : [
                'AI creates personalised reply suggestions in seconds',
                'Automatic email & SMS review request campaigns',
                'Real-time monitoring across all platforms',
                'NFC cards & QR codes for direct feedback collection',
              ]).map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--black)] flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-white" />
                  </div>
                  <span className="text-sm text-[var(--off-black)]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="/services/reputation-management" className="btn-primary">
                {isDE ? 'Mehr erfahren' : 'Learn more'} <ArrowUpRight size={16} />
              </Link>
              <Link href="/booking" className="btn-secondary">
                {isDE ? 'Demo buchen' : 'Book demo'}
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} direction="left">
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🔵', name: 'Google', stars: 4.9, count: 284 },
                { emoji: '📘', name: 'Facebook', stars: 4.7, count: 156 },
                { emoji: '⭐', name: 'Yelp', stars: 4.6, count: 98  },
                { emoji: '🏨', name: 'Booking', stars: 9.2, count: 412 },
              ].map((plat, i) => (
                <div key={i} className="card-sticker p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{plat.emoji}</span>
                    <span className="font-bold text-sm">{plat.name}</span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-black tracking-tighter">{plat.stars}</span>
                    <span className="text-[var(--muted)] text-xs mb-1">/ {plat.name === 'Booking' ? '10' : '5'}</span>
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_,j) => <Star key={j} size={10} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-[10px] text-[var(--muted)] mt-1.5">{plat.count} {isDE ? 'Bewertungen' : 'reviews'}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────── */}
      <section className="py-24 bg-[var(--black)] relative overflow-hidden">
        <div className="absolute inset-0 diagonal-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,100,42,0.12) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)' }} />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <span className="badge-glass mb-7 inline-flex">{isDE ? '🚀 Jetzt starten' : '🚀 Get started'}</span>
            <h2 className="display-title text-white mb-6">
              {isDE ? 'Bereit zu wachsen?' : 'Ready to grow?'}
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              {isDE
                ? 'Buchen Sie ein kostenloses 30-minütiges Beratungsgespräch und erfahren Sie, wie wir Ihr Unternehmen digital voranbringen.'
                : 'Book a free 30-minute consultation and discover how we take your business to the next level.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking"
                className="inline-flex items-center gap-2 px-9 py-4.5 bg-white text-[var(--black)] font-bold rounded-xl text-base hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300" style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}>
                {isDE ? 'Kostenlose Beratung buchen' : 'Book Free Consultation'} <ArrowRight size={20} />
              </Link>
              <Link href="/partner"
                className="inline-flex items-center gap-2 px-9 py-4.5 text-white border border-white/20 font-semibold rounded-xl text-base hover:bg-white/10 transition-all duration-300" style={{ paddingTop: '1.1rem', paddingBottom: '1.1rem' }}>
                {isDE ? 'Partner werden' : 'Become a Partner'}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
