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
        'Cloudbasierte Softwareloesung fuer professionelles Reputationsmanagement',
        'Google Business Profil, Facebook und Booking.com zentral integriert',
        '100 E-Mail- und 30 SMS-Bewertungsanfragen pro Monat inklusive',
        'KI-gestuetzte Antwortfunktion mit optionaler Automatisierung',
        '1 Standort inklusive, Alerts, Reporting und technischer Support',
      ],
      en: [
        'Cloudbasierte Softwareloesung fuer professionelles Reputationsmanagement',
        'Google Business Profil, Facebook und Booking.com zentral integriert',
        '100 E-Mail- und 30 SMS-Bewertungsanfragen pro Monat inklusive',
        'KI-gestuetzte Antwortfunktion mit optionaler Automatisierung',
        '1 Standort inklusive, Alerts, Reporting und technischer Support',
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

Benachrichtigungen erfolgen per E-Mail.

3.8 Analyse und Reporting
- Monatliche Bewertungsberichte
- Sterne- und Trendanalysen
- Thematische Auswertung von Kundenfeedback
- Performance-Uebersicht ueber definierbare Zeitraeume

3.9 Support und Einrichtung
- E-Mail-Support
- Technische Unterstuetzung
- Unterstuetzung bei der Erstkonfiguration

4. Preise und Vertragsbedingungen
Monatliche Abrechnung
84,90 EUR pro Monat
Vertragslaufzeit
Die Mindestvertragslaufzeit betraegt 24 Monate.
Kuendigungsfrist
Die Kuendigung ist spaetestens 3 Monate vor Ablauf der jeweiligen Vertragslaufzeit in Textform einzureichen.
Vertragsverlaengerung
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Laufzeit zu den jeweils urspruenglich vereinbarten Konditionen.`,
      en: `EViRAL Basic Bewertung
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

Benachrichtigungen erfolgen per E-Mail.

3.8 Analyse und Reporting
- Monatliche Bewertungsberichte
- Sterne- und Trendanalysen
- Thematische Auswertung von Kundenfeedback
- Performance-Uebersicht ueber definierbare Zeitraeume

3.9 Support und Einrichtung
- E-Mail-Support
- Technische Unterstuetzung
- Unterstuetzung bei der Erstkonfiguration

4. Preise und Vertragsbedingungen
Monatliche Abrechnung
84,90 EUR pro Monat
Vertragslaufzeit
Die Mindestvertragslaufzeit betraegt 24 Monate.
Kuendigungsfrist
Die Kuendigung ist spaetestens 3 Monate vor Ablauf der jeweiligen Vertragslaufzeit in Textform einzureichen.
Vertragsverlaengerung
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Laufzeit zu den jeweils urspruenglich vereinbarten Konditionen.`,
    },
  },
  pro: {
    cardHighlights: {
      de: [
        'Echtzeit-Monitoring ueber 5 Bewertungsplattformen',
        '300 E-Mail- und 50 SMS-Anfragen pro Monat inklusive Follow-up',
        'KI-Agent mit Tonfallanalyse und Priorisierung sensibler Rezensionen',
        'Erweiterte KI-Analysen mit Themen-, Keyword- und Trendauswertungen',
        'Gmail-Integration, Social-Media-Monitoring und priorisierter Support',
      ],
      en: [
        'Echtzeit-Monitoring ueber 5 Bewertungsplattformen',
        '300 E-Mail- und 50 SMS-Anfragen pro Monat inklusive Follow-up',
        'KI-Agent mit Tonfallanalyse und Priorisierung sensibler Rezensionen',
        'Erweiterte KI-Analysen mit Themen-, Keyword- und Trendauswertungen',
        'Gmail-Integration, Social-Media-Monitoring und priorisierter Support',
      ],
    },
    fullDescription: {
      de: `EViRAL PRO - KI-SYSTEM
Intelligentes Online-Reputationsmanagement mit erweiterter KI-Analyse

1. Produktueberblick
EViRAL PRO - KI-System ist eine cloudbasierte Softwareloesung fuer Unternehmen, die ihre Online-Reputation strategisch ueberwachen, analysieren und aktiv weiterentwickeln moechten.
Die Plattform kombiniert Echtzeit-Monitoring, KI-gestuetzte Bewertungsbeantwortung sowie tiefgehende Datenanalysen in einem zentralen, leistungsstarken Dashboard.

EViRAL PRO unterstuetzt Unternehmen dabei:
- Bewertungen plattformuebergreifend zu ueberwachen
- Kundenfeedback strukturiert auszuwerten
- Trends und Stimmungen fruehzeitig zu erkennen
- Relevante Bewertungen priorisiert zu bearbeiten
- datenbasierte Entscheidungen zur Optimierung der Reputation zu treffen

2. Plattform-Integrationen
Die Software ermoeglicht die Anbindung und Ueberwachung folgender Plattformen:
- Google Business Profil
- Facebook
- Yelp
- Booking.com
- TripAdvisor

Neue Bewertungen werden automatisiert erfasst und zentral im Dashboard dargestellt.

3. Funktionen und Leistungsumfang
3.1 Erweitertes Reputations-Dashboard
- Plattformuebergreifendes Live-Monitoring
- Priorisierung eingehender Bewertungen nach Relevanz
- Trend-, Stimmungs- und Performance-Analysen
- Statusuebersichten und Performance-Metriken
- Bewertungsvergleiche ueber Plattformen und Zeitraeume hinweg

3.2 Automatisierte Bewertungsanfragen
- 300 E-Mail-Anfragen pro Monat
- 50 SMS-Anfragen pro Monat
- Personalisierte und mehrsprachige Nachrichtenvorlagen
- Automatische Follow-Up-Funktion
- Tracking der Leistungskennzahlen von E-Mail- und SMS-Kampagnen

3.3 KI-Agent fuer Bewertungsbeantwortung
- KI-gestuetzte Antwortgenerierung
- Automatische Tonfall- und Stimmungsanalyse (positiv, neutral, negativ)
- Priorisierung sensibler Rezensionen
- Manuelle Freigabe oder Anpassung jederzeit moeglich

Die finale Entscheidung ueber veroeffentlichte Inhalte verbleibt stets beim Nutzer.

3.4 Erweiterte KI-Analysen
- Themen- und Keyword-Analysen
- Identifikation wiederkehrender Feedback-Muster
- Monats-, Quartals- und Jahresauswertungen
- Plattform- und Zeitvergleichsanalysen

3.5 Kommunikationskanaele und Monitoring
- E-Mail
- Gmail-Integration
- SMS
- Social-Media-Monitoring (Facebook und Instagram)

3.6 Standorte
- 1 Unternehmensstandort inklusive
- Erweiterung auf weitere Standorte optional moeglich

3.7 Alerts und Reporting
- Echtzeit-Benachrichtigungen
- Eskalationshinweise bei kritischen Bewertungen
- Professionelle Monatsberichte
- Trendbasierte Performance-Reports

3.8 Support
- Priorisierter E-Mail-Support
- Fachliche und technische Betreuung
- Unterstuetzung bei Einrichtung und Optimierung

4. Preise und Vertragsbedingungen
Monatliche Abrechnung
99,90 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate
Kuendigungsfrist: 3 Monate vor Ablauf der jeweiligen Vertragslaufzeit.
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Laufzeit zu den jeweils urspruenglich vereinbarten Konditionen.`,
      en: `EViRAL PRO - KI-SYSTEM
Intelligentes Online-Reputationsmanagement mit erweiterter KI-Analyse

1. Produktueberblick
EViRAL PRO - KI-System ist eine cloudbasierte Softwareloesung fuer Unternehmen, die ihre Online-Reputation strategisch ueberwachen, analysieren und aktiv weiterentwickeln moechten.
Die Plattform kombiniert Echtzeit-Monitoring, KI-gestuetzte Bewertungsbeantwortung sowie tiefgehende Datenanalysen in einem zentralen, leistungsstarken Dashboard.

EViRAL PRO unterstuetzt Unternehmen dabei:
- Bewertungen plattformuebergreifend zu ueberwachen
- Kundenfeedback strukturiert auszuwerten
- Trends und Stimmungen fruehzeitig zu erkennen
- Relevante Bewertungen priorisiert zu bearbeiten
- datenbasierte Entscheidungen zur Optimierung der Reputation zu treffen

2. Plattform-Integrationen
Die Software ermoeglicht die Anbindung und Ueberwachung folgender Plattformen:
- Google Business Profil
- Facebook
- Yelp
- Booking.com
- TripAdvisor

Neue Bewertungen werden automatisiert erfasst und zentral im Dashboard dargestellt.

3. Funktionen und Leistungsumfang
3.1 Erweitertes Reputations-Dashboard
- Plattformuebergreifendes Live-Monitoring
- Priorisierung eingehender Bewertungen nach Relevanz
- Trend-, Stimmungs- und Performance-Analysen
- Statusuebersichten und Performance-Metriken
- Bewertungsvergleiche ueber Plattformen und Zeitraeume hinweg

3.2 Automatisierte Bewertungsanfragen
- 300 E-Mail-Anfragen pro Monat
- 50 SMS-Anfragen pro Monat
- Personalisierte und mehrsprachige Nachrichtenvorlagen
- Automatische Follow-Up-Funktion
- Tracking der Leistungskennzahlen von E-Mail- und SMS-Kampagnen

3.3 KI-Agent fuer Bewertungsbeantwortung
- KI-gestuetzte Antwortgenerierung
- Automatische Tonfall- und Stimmungsanalyse (positiv, neutral, negativ)
- Priorisierung sensibler Rezensionen
- Manuelle Freigabe oder Anpassung jederzeit moeglich

Die finale Entscheidung ueber veroeffentlichte Inhalte verbleibt stets beim Nutzer.

3.4 Erweiterte KI-Analysen
- Themen- und Keyword-Analysen
- Identifikation wiederkehrender Feedback-Muster
- Monats-, Quartals- und Jahresauswertungen
- Plattform- und Zeitvergleichsanalysen

3.5 Kommunikationskanaele und Monitoring
- E-Mail
- Gmail-Integration
- SMS
- Social-Media-Monitoring (Facebook und Instagram)

3.6 Standorte
- 1 Unternehmensstandort inklusive
- Erweiterung auf weitere Standorte optional moeglich

3.7 Alerts und Reporting
- Echtzeit-Benachrichtigungen
- Eskalationshinweise bei kritischen Bewertungen
- Professionelle Monatsberichte
- Trendbasierte Performance-Reports

3.8 Support
- Priorisierter E-Mail-Support
- Fachliche und technische Betreuung
- Unterstuetzung bei Einrichtung und Optimierung

4. Preise und Vertragsbedingungen
Monatliche Abrechnung
99,90 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate
Kuendigungsfrist: 3 Monate vor Ablauf der jeweiligen Vertragslaufzeit.
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Laufzeit zu den jeweils urspruenglich vereinbarten Konditionen.`,
    },
  },
  premium: {
    cardHighlights: {
      de: [
        'Standard- und Premium-Plattformen inklusive Airbnb, Trustpilot, Kununu und mehr',
        '500 E-Mail- und 75 SMS-Anfragen pro Monat mit Kampagnen-Tracking',
        'Vollautomatischer Premium-KI-Agent mit Eskalationslogik',
        'Multi-Standort-Management mit bis zu 3 Standorten inklusive',
        'Benchmarking, Management-Reports und priorisierte 1:1 Betreuung',
      ],
      en: [
        'Standard- und Premium-Plattformen inklusive Airbnb, Trustpilot, Kununu und mehr',
        '500 E-Mail- und 75 SMS-Anfragen pro Monat mit Kampagnen-Tracking',
        'Vollautomatischer Premium-KI-Agent mit Eskalationslogik',
        'Multi-Standort-Management mit bis zu 3 Standorten inklusive',
        'Benchmarking, Management-Reports und priorisierte 1:1 Betreuung',
      ],
    },
    fullDescription: {
      de: `EViRAL PREMIUM-SYSTEM
Die umfassendste Loesung fuer vollautomatisiertes, KI-gestuetztes Online-Reputationsmanagement

1. Produktueberblick
Das EViRAL Premium-System ist die leistungsstaerkste und umfassendste Loesung innerhalb der EViRAL Produktlinie.
Es kombiniert fortschrittliche KI-Automatisierung, Multi-Plattform-Integration, standortuebergreifende Analysefunktionen sowie strategische Optimierungswerkzeuge in einem zentralen Premium-Dashboard.
Dieses Paket richtet sich an Unternehmen mit mehreren Standorten, hoher Bewertungsaktivitaet oder erhoehtem strategischem Anspruch an ihr Reputationsmanagement.

EViRAL Premium unterstuetzt Unternehmen dabei:
- Bewertungen plattformuebergreifend in Echtzeit zu ueberwachen
- mehrere Standorte zentral zu steuern
- tiefgehende KI-Analysen fuer strategische Entscheidungen zu nutzen
- Bewertungsprozesse vollstaendig zu automatisieren
- langfristige Reputationsentwicklung datenbasiert zu steuern

2. Plattform-Integrationen
Standard-Plattformen
- Google Business Profil
- Facebook
- Yelp
- Booking.com
- TripAdvisor

Zusaetzliche Premium-Plattformen
- Airbnb
- Trustpilot
- Zillow
- BBB
- Indeed
- Glassdoor
- Expedia
- Consumer Affairs
- Agoda
- Kununu
- Google Play Store
- Apple App Store
- Jameda (falls branchenspezifisch relevant)

Neue Bewertungen werden automatisiert erfasst und zentral im Premium-Dashboard dargestellt.

3. Funktionen und Leistungsumfang
3.1 Premium-Reputations-Dashboard
- Zentrale Uebersicht aller Bewertungen ueber alle Plattformen
- Standortuebergreifende Analysen
- Plattform-, Standort- und Zeitvergleiche
- Langzeit-Trendanalysen
- Kundenstimmungsindex
- Geobasierte Bewertungsanalyse
- Produkt- und dienstleistungsbezogene Auswertungen

3.2 Premium-Bewertungsanfragen
- 500 E-Mail-Anfragen pro Monat
- 75 SMS-Anfragen pro Monat
- Automatisierte Follow-Ups
- Kampagnenplanung und Performance-Tracking
- Automatisierte QR-Code-Bewertungsloesungen
- NFC-Karten-Integration

3.3 Vollautomatischer KI-Agent (Premium)
- Vollautomatische, KI-gestuetzte Bewertungsbeantwortung
- Intelligente Hervorhebung relevanter Bewertungen im Dashboard
- Erweiterte Sentiment- und Schluesselwortanalyse
- Eskalationsbasierte Antwortlogik
- Personalisierte Antworten nach Unternehmensrichtlinien
- Automatische Optimierungsvorschlaege fuer interne Prozesse

Die finale Kontroll- und Anpassungsmoeglichkeit verbleibt jederzeit beim Nutzer.

3.4 Erweiterte KI-Analysen und Benchmarking
- Tiefgehende Stimmungs- und Keyword-Analysen
- Standort- und Plattform-Benchmarking
- Wettbewerbs- und Marktvergleich
- Plattform-, standort- und zeituebergreifende Leistungsanalysen
- Individuelle KPI-Dashboards

3.5 Multi-Standort-Management
- Bis zu 3 Standorte inklusive
- Hierarchien und Zugriffsrechte
- Separate Standortauswertungen
- Filialvergleich und Ranking

3.6 Kommunikation und Social Media
- E-Mail
- Gmail-Integration
- SMS
- Social-Media-Monitoring (Facebook und Instagram)
- Automatisches Teilen ausgewaehlter Bewertungen
- Einbettbare Review-Widgets und Live-Feeds

3.7 Alerts und Premium-Reporting
- Intelligente Echtzeit-Benachrichtigungen
- Eskalationsmeldungen bei kritischen Bewertungen
- Professionelle Monats- und Quartalsberichte
- Automatisierte Management-Reports
- Wachstumsanalysen und Handlungsempfehlungen

3.8 VIP-Support und strategische Betreuung
- Priorisierter Premium-Support
- 1:1 Onboarding
- Persoenlicher Ansprechpartner
- Bevorzugte technische Betreuung

4. Preise und Vertragsbedingungen
Monatliche Abrechnung
119,90 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate
Kuendigungsfrist: 3 Monate vor Ablauf der jeweiligen Vertragslaufzeit.
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Laufzeit zu den urspruenglich vereinbarten Konditionen.`,
      en: `EViRAL PREMIUM-SYSTEM
Die umfassendste Loesung fuer vollautomatisiertes, KI-gestuetztes Online-Reputationsmanagement

1. Produktueberblick
Das EViRAL Premium-System ist die leistungsstaerkste und umfassendste Loesung innerhalb der EViRAL Produktlinie.
Es kombiniert fortschrittliche KI-Automatisierung, Multi-Plattform-Integration, standortuebergreifende Analysefunktionen sowie strategische Optimierungswerkzeuge in einem zentralen Premium-Dashboard.
Dieses Paket richtet sich an Unternehmen mit mehreren Standorten, hoher Bewertungsaktivitaet oder erhoehtem strategischem Anspruch an ihr Reputationsmanagement.

EViRAL Premium unterstuetzt Unternehmen dabei:
- Bewertungen plattformuebergreifend in Echtzeit zu ueberwachen
- mehrere Standorte zentral zu steuern
- tiefgehende KI-Analysen fuer strategische Entscheidungen zu nutzen
- Bewertungsprozesse vollstaendig zu automatisieren
- langfristige Reputationsentwicklung datenbasiert zu steuern

2. Plattform-Integrationen
Standard-Plattformen
- Google Business Profil
- Facebook
- Yelp
- Booking.com
- TripAdvisor

Zusaetzliche Premium-Plattformen
- Airbnb
- Trustpilot
- Zillow
- BBB
- Indeed
- Glassdoor
- Expedia
- Consumer Affairs
- Agoda
- Kununu
- Google Play Store
- Apple App Store
- Jameda (falls branchenspezifisch relevant)

Neue Bewertungen werden automatisiert erfasst und zentral im Premium-Dashboard dargestellt.

3. Funktionen und Leistungsumfang
3.1 Premium-Reputations-Dashboard
- Zentrale Uebersicht aller Bewertungen ueber alle Plattformen
- Standortuebergreifende Analysen
- Plattform-, Standort- und Zeitvergleiche
- Langzeit-Trendanalysen
- Kundenstimmungsindex
- Geobasierte Bewertungsanalyse
- Produkt- und dienstleistungsbezogene Auswertungen

3.2 Premium-Bewertungsanfragen
- 500 E-Mail-Anfragen pro Monat
- 75 SMS-Anfragen pro Monat
- Automatisierte Follow-Ups
- Kampagnenplanung und Performance-Tracking
- Automatisierte QR-Code-Bewertungsloesungen
- NFC-Karten-Integration

3.3 Vollautomatischer KI-Agent (Premium)
- Vollautomatische, KI-gestuetzte Bewertungsbeantwortung
- Intelligente Hervorhebung relevanter Bewertungen im Dashboard
- Erweiterte Sentiment- und Schluesselwortanalyse
- Eskalationsbasierte Antwortlogik
- Personalisierte Antworten nach Unternehmensrichtlinien
- Automatische Optimierungsvorschlaege fuer interne Prozesse

Die finale Kontroll- und Anpassungsmoeglichkeit verbleibt jederzeit beim Nutzer.

3.4 Erweiterte KI-Analysen und Benchmarking
- Tiefgehende Stimmungs- und Keyword-Analysen
- Standort- und Plattform-Benchmarking
- Wettbewerbs- und Marktvergleich
- Plattform-, standort- und zeituebergreifende Leistungsanalysen
- Individuelle KPI-Dashboards

3.5 Multi-Standort-Management
- Bis zu 3 Standorte inklusive
- Hierarchien und Zugriffsrechte
- Separate Standortauswertungen
- Filialvergleich und Ranking

3.6 Kommunikation und Social Media
- E-Mail
- Gmail-Integration
- SMS
- Social-Media-Monitoring (Facebook und Instagram)
- Automatisches Teilen ausgewaehlter Bewertungen
- Einbettbare Review-Widgets und Live-Feeds

3.7 Alerts und Premium-Reporting
- Intelligente Echtzeit-Benachrichtigungen
- Eskalationsmeldungen bei kritischen Bewertungen
- Professionelle Monats- und Quartalsberichte
- Automatisierte Management-Reports
- Wachstumsanalysen und Handlungsempfehlungen

3.8 VIP-Support und strategische Betreuung
- Priorisierter Premium-Support
- 1:1 Onboarding
- Persoenlicher Ansprechpartner
- Bevorzugte technische Betreuung

4. Preise und Vertragsbedingungen
Monatliche Abrechnung
119,90 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate
Kuendigungsfrist: 3 Monate vor Ablauf der jeweiligen Vertragslaufzeit.
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Laufzeit zu den urspruenglich vereinbarten Konditionen.`,
    },
  },
};