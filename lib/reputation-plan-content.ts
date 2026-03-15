interface LocalizedString {
  de: string;
  en: string;
}

interface LocalizedStringList {
  de: string[];
  en: string[];
}

interface ReputationPlanContent {
  cardHighlights: LocalizedStringList;
  fullDescription: LocalizedString;
}

export const reputationPlanContent: Record<'basic' | 'pro' | 'premium', ReputationPlanContent> = {
  basic: {
    cardHighlights: {
      de: [
        'Cloudbasiertes Dashboard fuer zentrales Reputationsmanagement',
        'Anbindung von Google Business, Facebook und Booking.com',
        '100 E-Mail- und 30 SMS-Bewertungsanfragen pro Monat',
        'KI-gestuetzte Antwortfunktion mit manueller Freigabeoption',
        '1 Standort inklusive plus Alerts fuer neue und offene Rezensionen',
      ],
      en: [
        'Cloud-based dashboard for centralized reputation management',
        'Integration with Google Business, Facebook, and Booking.com',
        '100 email and 30 SMS review requests per month',
        'AI-supported reply assistant with manual approval option',
        '1 location included plus alerts for new and unanswered reviews',
      ],
    },
    fullDescription: {
      de: `EViRAL Basic Bewertung
Professionelles Online-Reputationsmanagement fuer Unternehmen

1. Produktueberblick
EViRAL Basic Bewertung ist eine cloudbasierte Softwareloesung zur professionellen Verwaltung und Optimierung Ihrer Online-Reputation.
Die Plattform ermoeglicht Unternehmen eine zentrale, strukturierte und effiziente Steuerung saemtlicher Bewertungsprozesse - von der aktiven Generierung neuer Rezensionen bis zur systematischen Analyse bestehender Kundenbewertungen.
Ueber ein intuitives, webbasiertes Dashboard erhalten Sie vollstaendige Transparenz ueber alle relevanten Bewertungskennzahlen, Kommunikationsprozesse sowie die Entwicklung Ihrer Online-Praesenz.

EViRAL Basic Bewertung unterstuetzt Unternehmen dabei:
- kontinuierlich neue Bewertungen zu generieren
- zeitnah und professionell auf Kundenfeedback zu reagieren
- Bewertungsentwicklungen datenbasiert auszuwerten
- Prozesse im Reputationsmanagement zu automatisieren

2. Plattform-Integration
Die Software ermoeglicht die Anbindung und Ueberwachung folgender Plattformen:
- Google Business Profil
- Facebook
- Booking.com

Neue Bewertungen werden automatisiert erfasst und zentral im System dargestellt.

3. Leistungsumfang
3.1 Zentrales Bewertungs- und Analyse-Dashboard
- Echtzeit-Anzeige eingehender Bewertungen
- Uebersicht aller historischen Rezensionen
- Darstellung der Sterneentwicklung
- Trendanalysen ueber definierbare Zeitraeume
- Filterfunktionen nach Plattform, Zeitraum und Bewertungstyp
- Statuskennzeichnung (offen / beantwortet)
- Uebersicht saemtlicher Kundeninteraktionen

3.2 Automatisierte Bewertungsanfragen
Enthalten sind:
- 100 E-Mail-Bewertungsanfragen pro Monat
- 30 SMS-Bewertungsanfragen pro Monat

Zusaetzlich:
- Individuell anpassbare Nachrichtentexte
- Integration Ihres Logos
- Mehrsprachige Konfiguration moeglich
- Automatische Erinnerungsfunktion bei ausbleibender Rueckmeldung

3.3 KI-gestuetzte Antwortfunktion
Das System beinhaltet eine integrierte KI-gestuetzte Assistenz zur Unterstuetzung bei der Bearbeitung von Rezensionen.

Funktionen:
- Automatische Erkennung neuer Bewertungen
- Analyse von Tonalitaet und Inhalt
- Erstellung individueller Antwortvorschlaege
- Optional automatisierte Veroeffentlichung
- Manuelle Freigabe oder Anpassung jederzeit moeglich

Die finale Entscheidung ueber Veroeffentlichung und Inhalt verbleibt stets beim Nutzer.

3.4 Kommunikationskanaele
- E-Mail-Versandfunktion
- SMS-Versandfunktion

Die Nutzung erfolgt im Rahmen der im Tarif enthaltenen Kontingente.

3.5 Social-Media-Anbindungen
- Facebook
- Instagram

Diese ermoeglichen eine konsolidierte Verwaltung Ihrer Online-Reputation.

3.6 Standorte
- 1 Unternehmensstandort inklusive
- Erweiterung auf weitere Standorte optional moeglich

3.7 Benachrichtigungen und Alerts
Automatische Benachrichtigungen bei:
- Eingang neuer Bewertungen
- Unbeantworteten Rezensionen

4. Preise und Vertragsbedingungen
Preis: 49,90 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate
Kuendigungsfrist: 3 Monate vor Ablauf`,
      en: `EViRAL Basic Reviews
Professional Online Reputation Management for Businesses

1. Product Overview
EViRAL Basic Reviews is a cloud-based software solution for the professional management and optimization of your online reputation.
The platform enables businesses to centrally, structurally, and efficiently manage all review workflows - from active generation of new reviews to systematic analysis of existing customer feedback.
Through an intuitive web-based dashboard, you gain full transparency into key review metrics, communication workflows, and the development of your online presence.

EViRAL Basic Reviews helps businesses to:
- continuously generate new reviews
- respond quickly and professionally to customer feedback
- evaluate rating trends based on data
- automate reputation-management processes

2. Platform Integration
The software supports integration and monitoring of the following platforms:
- Google Business Profile
- Facebook
- Booking.com

New reviews are captured automatically and displayed centrally in the system.

3. Scope of Services
3.1 Central Review and Analytics Dashboard
- Real-time display of incoming reviews
- Overview of all historical reviews
- Star-rating development view
- Trend analysis across configurable time periods
- Filters by platform, time range, and review type
- Status labels (open / answered)
- Overview of all customer interactions

3.2 Automated Review Requests
Included:
- 100 email review requests per month
- 30 SMS review requests per month

Additionally:
- Customizable message templates
- Integration of your logo
- Multi-language setup possible
- Automatic reminder function for missing replies

3.3 AI-Supported Reply Function
The system includes an integrated AI assistant to support review handling.

Functions:
- Automatic detection of new reviews
- Analysis of tone and content
- Creation of individualized response suggestions
- Optional automated publishing
- Manual approval or editing at any time

Final responsibility for publication and content always remains with the user.

3.4 Communication Channels
- Email sending function
- SMS sending function

Usage is within the quotas included in the selected plan.

3.5 Social Media Integrations
- Facebook
- Instagram

These enable consolidated management of your online reputation.

3.6 Locations
- 1 business location included
- Optional expansion to additional locations

3.7 Notifications and Alerts
Automatic notifications for:
- Incoming new reviews
- Unanswered reviews

4. Pricing and Contract Terms
Price: EUR 49.90 per month
Minimum contract term: 24 months
Notice period: 3 months before term end`,
    },
  },
  pro: {
    cardHighlights: {
      de: [
        'Erweiterte Plattformabdeckung mit 5 Bewertungsplattformen',
        '300 E-Mail- und 50 SMS-Anfragen pro Monat',
        'KI-Agent fuer strukturierte Bewertungsbeantwortung',
        'Sentiment-Analyse und erweiterte KI-Auswertungen',
        'Gmail-Integration und priorisierter E-Mail-Support',
      ],
      en: [
        'Expanded coverage with 5 review platforms',
        '300 email and 50 SMS requests per month',
        'AI agent for structured review handling',
        'Sentiment analysis and advanced AI insights',
        'Gmail integration and prioritized email support',
      ],
    },
    fullDescription: {
      de: `EViRAL Pro KI System
Intelligentes Online-Reputationsmanagement mit erweiterter KI-Analyse

1. Produktueberblick
EViRAL PRO kombiniert Echtzeit-Monitoring, KI-gestuetzte Bewertungsbeantwortung sowie tiefgehende Datenanalysen in einem zentralen Dashboard.

2. Plattform-Integrationen
- Google Business Profil
- Facebook
- Yelp
- Booking.com
- TripAdvisor

3. Funktionen und Leistungsumfang
- 300 E-Mail-Anfragen pro Monat
- 50 SMS-Anfragen pro Monat
- KI-Agent fuer Bewertungsbeantwortung
- Erweiterte KI-Analysen
- Gmail-Integration
- Priorisierter E-Mail-Support

4. Preise und Vertragsbedingungen
Preis: 99,90 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate`,
      en: `EViRAL Pro AI System
Intelligent Online Reputation Management with Advanced AI Analysis

1. Product Overview
EViRAL PRO combines real-time monitoring, AI-supported review responses, and deep analytics in one centralized dashboard.

2. Platform Integrations
- Google Business Profile
- Facebook
- Yelp
- Booking.com
- TripAdvisor

3. Features and Scope of Services
- 300 email requests per month
- 50 SMS requests per month
- AI agent for review responses
- Advanced AI analytics
- Gmail integration
- Priority email support

4. Pricing and Contract Terms
Price: EUR 99.90 per month
Minimum contract term: 24 months`,
    },
  },
  premium: {
    cardHighlights: {
      de: [
        '15+ Plattformen fuer umfassendes Review-Monitoring',
        '500 E-Mail- und 75 SMS-Anfragen pro Monat',
        'Vollautomatischer KI-Agent fuer hohe Volumina',
        'Bis zu 3 Standorte sowie NFC- und QR-Integration',
        'Wettbewerbs-Benchmarking und dedizierter Support',
      ],
      en: [
        '15+ platforms for comprehensive review monitoring',
        '500 email and 75 SMS requests per month',
        'Fully automated AI agent for high volumes',
        'Up to 3 locations plus NFC and QR integration',
        'Competitor benchmarking and dedicated support',
      ],
    },
    fullDescription: {
      de: `EViRAL Premium System
Die umfassendste Loesung fuer vollautomatisiertes Reputationsmanagement

1. Produktueberblick
Das EViRAL Premium-System ist die leistungsstaerkste Loesung - fuer Unternehmen mit mehreren Standorten, hoher Bewertungsaktivitaet oder strategischem Anspruch.

2. Plattform-Integrationen
15+ Plattformen inkl. Airbnb, Trustpilot, Glassdoor, Kununu, Indeed, Google Play, App Store, Jameda, BBB, Zillow, Expedia, Agoda, Consumer Affairs

3. Funktionen und Leistungsumfang
- 500 E-Mail-Anfragen pro Monat
- 75 SMS-Anfragen pro Monat
- Vollautomatischer KI-Agent
- Bis zu 3 Standorte
- NFC-Karten und QR-Code-Integration
- Wettbewerbs-Benchmarking

4. Preise und Vertragsbedingungen
Preis: 169,90 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate`,
      en: `EViRAL Premium System
The most comprehensive solution for fully automated reputation management

1. Product Overview
EViRAL Premium is our most powerful solution - for businesses with multiple locations, high review volume, or strategic reputation requirements.

2. Platform Integrations
15+ platforms including Airbnb, Trustpilot, Glassdoor, Kununu, Indeed, Google Play, App Store, Jameda, BBB, Zillow, Expedia, Agoda, Consumer Affairs

3. Features and Scope of Services
- 500 email requests per month
- 75 SMS requests per month
- Fully automated AI agent
- Up to 3 locations
- NFC card and QR code integration
- Competitor benchmarking

4. Pricing and Contract Terms
Price: EUR 169.90 per month
Minimum contract term: 24 months`,
    },
  },
};