'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, Star, Globe, Phone, ArrowRight } from 'lucide-react';

interface NavbarProps { locale: string; }

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeServicesTimeoutRef = useRef<number | null>(null);
  const otherLocale = locale === 'de' ? 'en' : 'de';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const openServicesMenu = () => {
    if (closeServicesTimeoutRef.current !== null) {
      window.clearTimeout(closeServicesTimeoutRef.current);
      closeServicesTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const closeServicesMenu = () => {
    if (closeServicesTimeoutRef.current !== null) {
      window.clearTimeout(closeServicesTimeoutRef.current);
    }

    closeServicesTimeoutRef.current = window.setTimeout(() => {
      setServicesOpen(false);
      closeServicesTimeoutRef.current = null;
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeServicesTimeoutRef.current !== null) {
        window.clearTimeout(closeServicesTimeoutRef.current);
      }
    };
  }, []);

  const services = [
    { href: `/${locale}/services/reputation-management`, icon: Star, color: 'bg-amber-400', label: t('reputation'), desc: locale === 'de' ? 'Bewertungen automatisch verwalten' : 'Manage reviews automatically' },
    { href: `/${locale}/services/websites`, icon: Globe, color: 'bg-blue-500', label: t('websites'), desc: locale === 'de' ? 'Professionelle Unternehmenswebsites' : 'Professional business websites' },
    { href: `/${locale}/services/ai-phone-assistant`, icon: Phone, color: 'bg-emerald-500', label: t('aiPhone'), desc: locale === 'de' ? 'KI-Telefonassistent 24/7' : 'AI receptionist 24/7' },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className="relative px-4 py-2 text-sm font-medium text-[#555] hover:text-[#080808] transition-colors duration-200 group rounded-lg hover:bg-[#f4f3f1]">
      {label}
      <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#080808] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-[#e2e0dc] shadow-[0_4px_24px_rgba(0,0,0,0.06)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[66px]">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#080808] rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
              <span className="text-white text-xs font-black">e.</span>
            </div>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }} className="text-lg font-bold tracking-tight text-[#080808]">
              eviral<span className="text-[#e8642a]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5">
            <div className="relative" onMouseEnter={openServicesMenu} onMouseLeave={closeServicesMenu}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((prev) => !prev)}
                className="relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#555] hover:text-[#080808] rounded-lg hover:bg-[#f4f3f1] transition-all duration-200 group"
              >
                {t('services')}
                <ChevronDown size={13} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#080808] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              {/* Dropdown */}
              <div
                onMouseEnter={openServicesMenu}
                onMouseLeave={closeServicesMenu}
                className={`absolute top-full left-0 mt-2 w-80 bg-white border border-[#e2e0dc] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-2.5 transition-all duration-300 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}
              >
                <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white border-l border-t border-[#e2e0dc] rotate-45" />
                {services.map((s, i) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#f4f3f1] transition-all duration-200 group/item">
                    <div className={`w-9 h-9 rounded-xl ${s.color} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110`}>
                      <s.icon size={15} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#080808]">{s.label}</div>
                      <div className="text-xs text-[#888] mt-0.5">{s.desc}</div>
                    </div>
                    <ArrowRight size={13} className="text-[#ccc] group-hover/item:text-[#080808] group-hover/item:translate-x-0.5 transition-all duration-200" />
                  </Link>
                ))}
                <div className="mx-3 my-2 h-px bg-[#f0efed]" />
                <div className="px-3 pb-1 flex items-center justify-between">
                  <span className="text-xs text-[#aaa]">{locale === 'de' ? 'Alle Leistungen' : 'All services'}</span>
                  <ArrowRight size={11} className="text-[#aaa]" />
                </div>
              </div>
            </div>

            <NavLink href={`/${locale}/partner`} label={t('partner')} />
            <NavLink href={`/${locale}/about`}   label={t('about')} />
            <NavLink href={`/${locale}/blog`}    label={t('blog')} />
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-2">
            <Link href={`/${otherLocale}`} className="px-3 py-1.5 text-xs font-semibold border border-[#e2e0dc] rounded-lg hover:bg-[#f4f3f1] hover:border-[#ccc9c3] transition-all uppercase tracking-widest text-[#666]">
              {otherLocale}
            </Link>
            <a href="https://app.e-viral.de/#/login" target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 text-sm font-medium text-[#555] hover:text-[#080808] rounded-lg hover:bg-[#f4f3f1] transition-all duration-200">
              {t('login')}
            </a>
            <Link href={`/${locale}/booking`} className="btn-primary text-sm px-5 py-2.5">
              {t('cta')}
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-xl hover:bg-[#f4f3f1] transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e2e0dc] px-4 py-4 space-y-1 shadow-lg">
          <p className="text-[10px] font-bold text-[#aaa] uppercase tracking-widest px-2 mb-2">{t('services')}</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-[#f4f3f1] transition-all" onClick={() => setMobileOpen(false)}>
              <div className={`w-8 h-8 rounded-xl ${s.color} flex items-center justify-center`}><s.icon size={14} className="text-white" /></div>
              <span className="text-sm font-medium text-[#080808]">{s.label}</span>
            </Link>
          ))}
          <div className="h-px bg-[#f0efed] my-2" />
          {[
            { href: `/${locale}/partner`, label: t('partner') },
            { href: `/${locale}/about`, label: t('about') },
            { href: `/${locale}/blog`, label: t('blog') },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="block px-2 py-2.5 text-sm font-medium text-[#444] rounded-xl hover:bg-[#f4f3f1] transition-all" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="pt-3 flex gap-2">
            <Link href={`/${otherLocale}`} className="flex-1 text-center py-2.5 text-sm font-semibold border border-[#e2e0dc] rounded-xl hover:bg-[#f4f3f1] uppercase tracking-wider">
              {otherLocale}
            </Link>
            <Link href={`/${locale}/booking`}
               className="flex-1 text-center py-2.5 text-sm font-semibold bg-[#080808] text-white rounded-xl hover:bg-[#222] transition-all">
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
