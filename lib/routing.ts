import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'de',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/login': {
      en: '/login',
      de: '/login',
    },
    '/about': {
      en: '/about',
      de: '/ueber-uns',
    },
    '/booking': {
      en: '/booking',
      de: '/buchen',
    },
    '/partner': {
      en: '/partner',
      de: '/partner-werden',
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt',
    },
    '/imprint': {
      en: '/imprint',
      de: '/impressum',
    },
    '/privacy': {
      en: '/privacy',
      de: '/datenschutz',
    },
    '/terms': {
      en: '/terms',
      de: '/agb',
    },
    '/avv': {
      en: '/avv',
      de: '/avv',
    },
    '/blog': {
      en: '/blog',
      de: '/beitraege',
    },
    '/blog/[slug]': {
      en: '/blog/[slug]',
      de: '/beitraege/[slug]',
    },
    '/services/reputation-management': {
      en: '/services/reputation-management',
      de: '/dienstleistungen/reputationsmanagement',
    },
    '/services/websites': {
      en: '/services/websites',
      de: '/dienstleistungen/websites',
    },
    '/services/websites/demo/[slug]': {
      en: '/services/websites/demo/[slug]',
      de: '/dienstleistungen/websites/beispiele/[slug]',
    },
    '/services/ai-phone-assistant': {
      en: '/services/ai-phone-assistant',
      de: '/dienstleistungen/ki-telefonassistent',
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];

export function isAppLocale(locale: string): locale is AppLocale {
  return routing.locales.includes(locale as AppLocale);
}