import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Star, Globe, Phone } from 'lucide-react';

interface FooterProps { locale: string; }

export default function Footer({ locale }: FooterProps) {
  const isDE = locale === 'de';
  const year = new Date().getFullYear();

  const cols = [
    {
      title: isDE ? 'Leistungen' : 'Services',
      links: [
        { href: `/${locale}/services/reputation-management`, label: isDE ? 'Reputationsmanagement' : 'Reputation Management' },
        { href: `/${locale}/services/websites`, label: isDE ? 'Professionelle Websites' : 'Professional Websites' },
        { href: `/${locale}/services/ai-phone-assistant`, label: isDE ? 'KI-Telefonassistent' : 'AI Phone Assistant' },
      ],
    },
    {
      title: isDE ? 'Unternehmen' : 'Company',
      links: [
        { href: `/${locale}/about`,   label: isDE ? 'Über uns' : 'About Us' },
        { href: `/${locale}/partner`, label: isDE ? 'Partner werden' : 'Become a Partner' },
        { href: `/${locale}/blog`,    label: 'Blog' },
        { href: `/${locale}/contact`, label: isDE ? 'Kontakt' : 'Contact' },
      ],
    },
    {
      title: isDE ? 'Rechtliches' : 'Legal',
      links: [
        { href: `/${locale}/imprint`, label: isDE ? 'Impressum' : 'Imprint' },
        { href: `/${locale}/privacy`, label: isDE ? 'Datenschutz' : 'Privacy Policy' },
        { href: `/${locale}/terms`,   label: isDE ? 'AGB' : 'Terms & Conditions' },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--off-black)] text-white">
      {/* Top CTA bar */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black tracking-tight mb-1">
              {isDE ? 'Bereit, digital zu wachsen?' : 'Ready to grow digitally?'}
            </h3>
            <p className="text-gray-400 text-sm">{isDE ? 'Kostenloses Beratungsgespräch — ohne Verpflichtung.' : 'Free consultation call — no obligation.'}</p>
          </div>
          <a href={process.env.NEXT_PUBLIC_BOOKING_URL || '#'} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[var(--black)] font-bold rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-250 whitespace-nowrap flex-shrink-0">
            {isDE ? 'Jetzt buchen' : 'Book now'} <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-2">
          <Link href={`/${locale}`} className="inline-block mb-5">
            <span className="text-2xl font-black tracking-tighter text-white">e-viral</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            {isDE
              ? 'Die Full-Service-Digitalagentur für smarte Unternehmen. Reputation, Websites und KI aus einer Hand.'
              : 'The full-service digital agency for smart businesses. Reputation, websites and AI from one partner.'}
          </p>
          <a href="mailto:info@e-viral.de" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
            <Mail size={14} className="group-hover:text-[var(--accent)] transition-colors" />
            info@e-viral.de
          </a>
          {/* Service icons */}
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Star,  href: `/${locale}/services/reputation-management` },
              { Icon: Globe, href: `/${locale}/services/websites` },
              { Icon: Phone, href: `/${locale}/services/ai-phone-assistant` },
            ].map(({ Icon, href }, i) => (
              <Link key={i} href={href}
                className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-white/20 transition-all">
                <Icon size={15} className="text-gray-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col, i) => (
          <div key={i}>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link, j) => (
                <li key={j}>
                  <Link href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors hover-underline inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {year} E-Viral. {isDE ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-4">
            <Link href={`/de`} className="text-xs text-gray-600 hover:text-gray-300 uppercase tracking-wider transition-colors">DE</Link>
            <span className="text-gray-700">·</span>
            <Link href={`/en`} className="text-xs text-gray-600 hover:text-gray-300 uppercase tracking-wider transition-colors">EN</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
