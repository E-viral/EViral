import type { AppLocale } from './routing';

export interface LocalizedText {
  en: string;
  de: string;
}

export interface DemoTheme {
  heroFrom: string;
  heroTo: string;
  accent: string;
  accentSoft: string;
  cardTint: string;
}

export interface WebsiteDemoCompany {
  slug: LocalizedText;
  emoji: string;
  name: LocalizedText;
  cardDescription: LocalizedText;
  heroTitle: LocalizedText;
  heroSubtitle: LocalizedText;
  valuePoints: LocalizedText[];
  theme: DemoTheme;
}

export const websiteDemoCompanies: WebsiteDemoCompany[] = [
  {
    slug: { en: 'restaurant-hospitality', de: 'restaurant-gastronomie' },
    emoji: '🍽️',
    name: { en: 'Restaurant & Hospitality', de: 'Restaurant & Gastronomie' },
    cardDescription: {
      en: 'Professional website for restaurants and cafes',
      de: 'Professionelle Website fuer Restaurants und Cafes',
    },
    heroTitle: {
      en: 'A Website That Fills Your Tables',
      de: 'Eine Website, die Ihre Tische fuellt',
    },
    heroSubtitle: {
      en: 'Fast-loading menu pages, booking-ready contact flow, and visual storytelling for your food brand.',
      de: 'Schnelle Menue-Seiten, reservierungsfreundlicher Kontaktfluss und visuelles Storytelling fuer Ihre Marke.',
    },
    valuePoints: [
      {
        en: 'Mobile-first menu and opening-hours section',
        de: 'Mobile-First Menue- und Oeffnungszeiten-Bereich',
      },
      {
        en: 'Direct reservation and call-to-action focus',
        de: 'Direkter Reservierungs- und Call-to-Action-Fokus',
      },
      {
        en: 'Gallery structure for dishes and ambience',
        de: 'Galerie-Struktur fuer Gerichte und Ambiente',
      },
    ],
    theme: {
      heroFrom: '#7c2d12',
      heroTo: '#ea580c',
      accent: '#ea580c',
      accentSoft: '#fff7ed',
      cardTint: '#ffedd5',
    },
  },
  {
    slug: { en: 'trades-services', de: 'handwerk-dienstleistung' },
    emoji: '🔧',
    name: { en: 'Trades & Services', de: 'Handwerk & Dienstleistung' },
    cardDescription: {
      en: 'For tradespeople and service businesses',
      de: 'Fuer Handwerksbetriebe und Dienstleister',
    },
    heroTitle: {
      en: 'Turn Local Searches Into Booked Jobs',
      de: 'Mehr lokale Anfragen in gebuchte Auftraege verwandeln',
    },
    heroSubtitle: {
      en: 'A practical service website focused on trust, response speed, and clear lead capture.',
      de: 'Eine praxisorientierte Service-Website mit Fokus auf Vertrauen, schnelle Antworten und klare Lead-Erfassung.',
    },
    valuePoints: [
      {
        en: 'Service pages optimized for local SEO',
        de: 'Leistungsseiten optimiert fuer lokales SEO',
      },
      {
        en: 'Quote-request forms designed for conversion',
        de: 'Angebotsformulare mit Conversion-Fokus',
      },
      {
        en: 'Emergency contact and trust badges',
        de: 'Notfallkontakt und Vertrauens-Elemente',
      },
    ],
    theme: {
      heroFrom: '#1e3a8a',
      heroTo: '#2563eb',
      accent: '#2563eb',
      accentSoft: '#eff6ff',
      cardTint: '#dbeafe',
    },
  },
  {
    slug: { en: 'medical-health', de: 'medizin-gesundheit' },
    emoji: '🏥',
    name: { en: 'Medical & Health', de: 'Medizin & Gesundheit' },
    cardDescription: {
      en: 'For medical practices and health services',
      de: 'Fuer Arztpraxen und Gesundheitsdienstleister',
    },
    heroTitle: {
      en: 'A Calm, Trustworthy Practice Website',
      de: 'Eine ruhige und vertrauenswuerdige Praxis-Website',
    },
    heroSubtitle: {
      en: 'Patient-first design with clear appointment actions and reliable information architecture.',
      de: 'Patientenorientiertes Design mit klarer Terminbuchung und verstaendlicher Informationsstruktur.',
    },
    valuePoints: [
      {
        en: 'Structured services and treatment pages',
        de: 'Strukturierte Leistungs- und Behandlungsseiten',
      },
      {
        en: 'Prominent booking and contact modules',
        de: 'Prominente Termin- und Kontaktmodule',
      },
      {
        en: 'Trust-focused layout with accessibility in mind',
        de: 'Vertrauensorientiertes Layout mit Fokus auf Barrierefreiheit',
      },
    ],
    theme: {
      heroFrom: '#0f766e',
      heroTo: '#14b8a6',
      accent: '#14b8a6',
      accentSoft: '#f0fdfa',
      cardTint: '#ccfbf1',
    },
  },
  {
    slug: { en: 'real-estate', de: 'immobilien' },
    emoji: '🏠',
    name: { en: 'Real Estate', de: 'Immobilien' },
    cardDescription: {
      en: 'For agents and real estate companies',
      de: 'Fuer Makler und Immobilienunternehmen',
    },
    heroTitle: {
      en: 'Present Properties With Premium Clarity',
      de: 'Immobilien mit Premium-Klarheit praesentieren',
    },
    heroSubtitle: {
      en: 'A listing-focused website concept designed to build trust and increase qualified inquiries.',
      de: 'Ein listing-orientiertes Website-Konzept fuer mehr Vertrauen und qualifizierte Anfragen.',
    },
    valuePoints: [
      {
        en: 'Property showcase structure with clear filters',
        de: 'Objektstruktur mit klarer Filterfuehrung',
      },
      {
        en: 'Lead forms for buyers, sellers, and renters',
        de: 'Lead-Formulare fuer Kaeufer, Verkaeufer und Mieter',
      },
      {
        en: 'High-credibility visuals and market positioning',
        de: 'Hochwertige Darstellung und klare Marktpositionierung',
      },
    ],
    theme: {
      heroFrom: '#1f2937',
      heroTo: '#4b5563',
      accent: '#4b5563',
      accentSoft: '#f3f4f6',
      cardTint: '#e5e7eb',
    },
  },
  {
    slug: { en: 'beauty-wellness', de: 'beauty-wellness' },
    emoji: '💅',
    name: { en: 'Beauty & Wellness', de: 'Beauty & Wellness' },
    cardDescription: {
      en: 'For salons, spas and wellness services',
      de: 'Fuer Salons, Spas und Wellnessangebote',
    },
    heroTitle: {
      en: 'A Premium Digital Experience For Your Salon',
      de: 'Ein Premium-Digitalauftritt fuer Ihren Salon',
    },
    heroSubtitle: {
      en: 'Elegant brand presentation with service highlights, social proof, and easy booking flow.',
      de: 'Elegante Markenpraesentation mit Leistungsfokus, Social Proof und einfacher Terminbuchung.',
    },
    valuePoints: [
      {
        en: 'Service cards optimized for upsells',
        de: 'Leistungskarten mit Fokus auf Zusatzverkaeufe',
      },
      {
        en: 'Visual-first gallery and testimonials',
        de: 'Visueller Fokus mit Galerie und Testimonials',
      },
      {
        en: 'Smooth booking journey from first click',
        de: 'Nahtlose Terminreise vom ersten Klick an',
      },
    ],
    theme: {
      heroFrom: '#7c3aed',
      heroTo: '#ec4899',
      accent: '#db2777',
      accentSoft: '#fdf2f8',
      cardTint: '#fce7f3',
    },
  },
  {
    slug: { en: 'business-consulting', de: 'unternehmensberatung' },
    emoji: '📊',
    name: { en: 'Business Consulting', de: 'Unternehmensberatung' },
    cardDescription: {
      en: 'For consultants and professional service firms',
      de: 'Fuer Berater und professionelle Dienstleister',
    },
    heroTitle: {
      en: 'Showcase Authority And Win Better Clients',
      de: 'Expertise zeigen und bessere Kunden gewinnen',
    },
    heroSubtitle: {
      en: 'A strategic consulting website with strong positioning, service clarity, and lead confidence.',
      de: 'Eine strategische Beratungswebsite mit klarer Positionierung, Leistungslogik und Lead-Vertrauen.',
    },
    valuePoints: [
      {
        en: 'Authority-first structure for consulting offers',
        de: 'Authority-First Struktur fuer Beratungsangebote',
      },
      {
        en: 'Case-study and expertise storytelling blocks',
        de: 'Case-Study- und Expertise-Storytelling-Bloecke',
      },
      {
        en: 'Conversion path for strategy calls and leads',
        de: 'Konversionspfad fuer Strategiegespraeche und Leads',
      },
    ],
    theme: {
      heroFrom: '#111827',
      heroTo: '#6366f1',
      accent: '#6366f1',
      accentSoft: '#eef2ff',
      cardTint: '#e0e7ff',
    },
  },
];

export function getWebsiteDemoBySlug(slug: string, locale: AppLocale): WebsiteDemoCompany | undefined {
  return websiteDemoCompanies.find((company) => company.slug[locale] === slug);
}

export function getWebsiteDemoSlug(company: WebsiteDemoCompany, locale: AppLocale): string {
  return company.slug[locale];
}
