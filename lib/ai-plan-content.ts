interface LocalizedString {
  de: string;
  en: string;
}

interface LocalizedStringList {
  de: string[];
  en: string[];
}

interface AIPlanContent {
  cardHighlights: LocalizedStringList;
  fullDescription: LocalizedString;
}

export const aiPlanContent: Record<'assist' | 'professional' | 'enterprise', AIPlanContent> = {
  assist: {
    cardHighlights: {
      de: [
        'KI-Telefonassistent fuer eingehende Anrufe',
        'Anliegenabfrage und strukturierte Datenerfassung',
        'Grundlegende Infos wie Oeffnungszeiten und Hinweise',
        'Anrufweiterleitung an Mitarbeiter bei Bedarf',
        '1x Konfigurationsanpassung innerhalb von 12 Monaten',
      ],
      en: [
        'AI phone assistant for inbound calls',
        'Intent capture with structured data collection',
        'Basic information like opening hours and notices',
        'Call transfer to staff when required',
        '1 configuration update within 12 months',
      ],
    },
    fullDescription: {
      de: `Paket "AI Voice Assist"
Leistungsbeschreibung
Das Paket "AI Voice Assist" umfasst die Bereitstellung eines KI-gestuetzten Telefonassistenten zur automatisierten Annahme und Bearbeitung eingehender Telefonanrufe.

Der digitale Assistent nimmt eingehende Anrufe entgegen, fragt das Anliegen des Anrufers ab und kann auf Grundlage hinterlegter Informationen haeufige Fragen beantworten oder strukturierte Informationen erfassen.

Der KI-Telefonassistent kann beispielsweise eingesetzt werden fuer:
- Entgegennahme eingehender Telefonanrufe
- Abfrage von Anliegen des Anrufers
- Bereitstellung grundlegender Informationen, beispielsweise zu Oeffnungszeiten oder allgemeinen Hinweisen
- Aufnahme von Kontaktinformationen
- Weiterleitung von Anrufen an Mitarbeiter, sofern erforderlich
- Aufnahme von Terminwuenschen oder Kundenanfragen

Im Rahmen der Einrichtung wird der Telefonassistent auf Grundlage der vom Kunden bereitgestellten Informationen konfiguriert.

Bestehende Unternehmens- oder Praxisnummern koennen im Rahmen der technischen Moeglichkeiten mit dem KI-Telefonassistenten verbunden werden, beispielsweise durch Weiterleitung eingehender Anrufe.

Sofern ein geeignetes System vorhanden ist, kann der Assistent auch mit Termin- oder Kalendersystemen verknuepft werden, um Terminwuensche entgegenzunehmen oder entsprechende Informationen zu uebermitteln.

Waehrend der Vertragslaufzeit uebernimmt der Anbieter die technische Bereitstellung sowie den Betrieb der Plattform.

Technischer Support zur Nutzung und zum Betrieb des Systems ist im Leistungsumfang enthalten.

Eine Anpassung oder Aktualisierung der Konfiguration des KI-Telefonassistenten ist einmal innerhalb eines Zeitraums von zwoelf Monaten ab Vertragsbeginn moeglich.

Nutzung und Minutenkontingent
In diesem Paket sind monatlich 2.000 Gespraechsminuten fuer eingehende Telefonanrufe enthalten.

Bei Ueberschreitung des enthaltenen Minutenkontingents werden zusaetzliche Gespraechsminuten mit 0,16 EUR pro Minute berechnet.

Nicht verbrauchte Minuten verfallen am Ende des jeweiligen Abrechnungszeitraums.

Preise und Vertragsbedingungen
Preis: 399,00 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate

Kuendigungsfrist:
Der Vertrag kann mit einer Frist von drei Monaten zum Ende der jeweiligen Vertragslaufzeit gekuendigt werden.

Vertragsverlaengerung:
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Vertragslaufzeit zu den jeweils urspruenglich vereinbarten Konditionen.`,
      en: `Package "AI Voice Assist"
Service Description
The "AI Voice Assist" package includes the provision of an AI-powered phone assistant for automated handling and processing of inbound phone calls.

The digital assistant answers incoming calls, asks for the caller's request, and can answer common questions based on configured information or capture structured information.

The AI phone assistant can be used, for example, for:
- handling inbound phone calls
- capturing the caller's request
- providing basic information, for example opening hours or general notices
- collecting contact details
- routing calls to employees when required
- recording appointment requests or customer inquiries

During setup, the phone assistant is configured based on information provided by the customer.

Existing business or practice phone numbers can be connected to the AI phone assistant within technical possibilities, for example via call forwarding.

If a suitable system is available, the assistant can also be connected to appointment or calendar systems to receive appointment requests or transmit related information.

During the contract term, the provider handles technical provision as well as operation of the platform.

Technical support for use and operation of the system is included in the service scope.

One adjustment or update of the AI phone assistant configuration is possible once within a twelve-month period from contract start.

Usage and Minute Allowance
This package includes 2,000 conversation minutes per month for inbound calls.

If the included minute allowance is exceeded, additional minutes are charged at EUR 0.16 per minute.

Unused minutes expire at the end of the respective billing period.

Pricing and Contract Terms
Price: EUR 399.00 per month
Minimum contract term: 24 months

Notice period:
The contract may be terminated with three months' notice to the end of the respective contract term.

Contract renewal:
If no timely termination is made, the contract automatically renews for the same contract term under the originally agreed conditions.`,
    },
  },
  professional: {
    cardHighlights: {
      de: [
        'Fuer hoeheres Anrufaufkommen mit strukturierter Bearbeitung',
        'Begruessung, Anliegenabfrage und Unternehmensinfos',
        'Terminwuensche und Terminanderungen erfassen',
        'Optionale Kalenderanbindung bei geeigneten Systemen',
        '3.500 Inklusivminuten, danach 0,14 EUR/Min',
      ],
      en: [
        'For higher call volume with structured processing',
        'Greeting, intent capture, and company information',
        'Capture appointment requests and schedule changes',
        'Optional calendar integration where systems allow',
        '3,500 included minutes, then EUR 0.14/min',
      ],
    },
    fullDescription: {
      de: `Paket "AI Voice Professional"
Leistungsbeschreibung
Das Paket "AI Voice Professional" richtet sich an Unternehmen mit hoeherem Anrufaufkommen, bei denen eingehende Telefonanfragen automatisiert strukturiert erfasst und verarbeitet werden sollen.

Der KI-Telefonassistent nimmt eingehende Anrufe entgegen, analysiert das Anliegen des Anrufers und unterstuetzt bei der strukturierten Bearbeitung von Kundenanfragen.

Der Assistent kann unter anderem:
- Anrufer begruessen und nach ihrem Anliegen fragen
- Informationen zum Unternehmen bereitstellen
- Terminwuensche erfassen oder Terminanderungen aufnehmen
- Kontaktinformationen des Anrufers erfassen
- Anrufe bei Bedarf an zustaendige Mitarbeiter weiterleiten
- Gespraechsinformationen strukturiert erfassen

Im Rahmen der Einrichtung wird der Gespraechsablauf auf Grundlage der vom Kunden bereitgestellten Informationen konfiguriert.

Bestehende Unternehmens- oder Praxisnummern koennen im Rahmen der technischen Moeglichkeiten mit dem KI-Telefonassistenten verbunden werden.

Sofern geeignete Systeme vorhanden sind, kann eine Verknuepfung mit bestehenden Termin- oder Kalendersystemen erfolgen, um Terminwuensche entgegenzunehmen oder entsprechende Informationen zu uebermitteln.

Waehrend der Vertragslaufzeit uebernimmt der Anbieter den technischen Betrieb sowie die laufende Bereitstellung der Plattform.

Technischer Support zur Nutzung und zum Betrieb des Systems ist im Leistungsumfang enthalten.

Eine Anpassung oder Aktualisierung der Konfiguration des KI-Telefonassistenten ist einmal innerhalb eines Zeitraums von zwoelf Monaten ab Vertragsbeginn moeglich.

Nutzung und Minutenkontingent
In diesem Paket sind monatlich 3.500 Gespraechsminuten enthalten.

Bei Ueberschreitung des enthaltenen Minutenkontingents werden zusaetzliche Gespraechsminuten mit 0,14 EUR pro Minute berechnet.

Nicht verbrauchte Minuten verfallen am Ende des jeweiligen Abrechnungszeitraums.

Preise und Vertragsbedingungen
Preis: 499,00 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate

Kuendigungsfrist:
Der Vertrag kann mit einer Frist von drei Monaten zum Ende der jeweiligen Vertragslaufzeit gekuendigt werden.

Vertragsverlaengerung:
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Vertragslaufzeit zu den jeweils urspruenglich vereinbarten Konditionen.`,
      en: `Package "AI Voice Professional"
Service Description
The "AI Voice Professional" package is designed for businesses with higher call volume where incoming phone inquiries should be captured and processed in a structured, automated way.

The AI phone assistant answers incoming calls, analyzes the caller's request, and supports structured processing of customer inquiries.

The assistant can, among other things:
- greet callers and ask for their request
- provide company information
- capture appointment requests or schedule changes
- collect caller contact details
- route calls to responsible employees when needed
- capture conversation details in a structured form

During setup, the conversation flow is configured based on information provided by the customer.

Existing business or practice phone numbers can be connected to the AI phone assistant within technical possibilities.

If suitable systems are available, integration with existing appointment or calendar systems can be implemented in order to receive appointment requests or pass related information.

During the contract term, the provider handles technical operation and continuous platform provision.

Technical support for use and operation of the system is included in the scope of service.

One adjustment or update of the AI phone assistant configuration is possible once within a twelve-month period from contract start.

Usage and Minute Allowance
This package includes 3,500 conversation minutes per month.

If the included minute allowance is exceeded, additional minutes are charged at EUR 0.14 per minute.

Unused minutes expire at the end of the respective billing period.

Pricing and Contract Terms
Price: EUR 499.00 per month
Minimum contract term: 24 months

Notice period:
The contract may be terminated with three months' notice to the end of the respective contract term.

Contract renewal:
If no timely termination is made, the contract automatically renews for the same contract term under the originally agreed conditions.`,
    },
  },
  enterprise: {
    cardHighlights: {
      de: [
        'Fuer hohes Anrufvolumen mit automatisierter Verarbeitung',
        'FAQ-Antworten auf Basis hinterlegter Informationen',
        'Terminaufnahme und strukturierte Dokumentation',
        'Individuelle Konfiguration fuer Unternehmensprozesse',
        '5.500 Inklusivminuten, danach 0,13 EUR/Min',
      ],
      en: [
        'For high call volume with automated processing',
        'FAQ responses based on configured information',
        'Appointment intake and structured documentation',
        'Custom configuration for business processes',
        '5,500 included minutes, then EUR 0.13/min',
      ],
    },
    fullDescription: {
      de: `Paket "AI Voice Enterprise"
Leistungsbeschreibung
Das Paket "AI Voice Enterprise" richtet sich an Unternehmen mit hoeherem Anrufvolumen, bei denen eingehende Telefonanrufe automatisiert verarbeitet und strukturiert bearbeitet werden sollen.

Der KI-Telefonassistent fungiert hierbei als digitaler Ansprechpartner fuer eingehende Anrufe und unterstuetzt Unternehmen dabei, Kundenanfragen strukturiert entgegenzunehmen und zu bearbeiten.

Der Assistent kann unter anderem:
- eingehende Anrufe automatisch entgegennehmen
- Anliegen von Anrufern erfassen
- haeufige Fragen auf Grundlage hinterlegter Informationen beantworten
- Terminwuensche aufnehmen
- Anrufe bei Bedarf an zustaendige Mitarbeiter weiterleiten
- Gespraechsinformationen dokumentieren

Im Rahmen der Einrichtung wird der Assistent anhand der vom Kunden bereitgestellten Informationen konfiguriert und an die Anforderungen des Unternehmens angepasst.

Bestehende Unternehmens- oder Praxisnummern koennen im Rahmen der technischen Moeglichkeiten mit dem KI-Telefonassistenten verbunden werden.

Sofern geeignete Systeme vorhanden sind, kann eine Verbindung zu bestehenden Termin- oder Kalendersystemen erfolgen, um Terminwuensche entgegenzunehmen oder Termine zu verwalten.

Waehrend der Vertragslaufzeit uebernimmt der Anbieter den technischen Betrieb sowie die kontinuierliche Bereitstellung der Plattform.

Technischer Support zur Nutzung und zum Betrieb des Systems ist im Leistungsumfang enthalten.

Eine Anpassung oder Aktualisierung der Konfiguration des KI-Telefonassistenten ist einmal innerhalb eines Zeitraums von zwoelf Monaten ab Vertragsbeginn moeglich.

Nutzung und Minutenkontingent
In diesem Paket sind monatlich 5.500 Gespraechsminuten enthalten.

Bei Ueberschreitung des enthaltenen Minutenkontingents werden zusaetzliche Gespraechsminuten mit 0,13 EUR pro Minute berechnet.

Nicht verbrauchte Minuten verfallen am Ende des jeweiligen Abrechnungszeitraums.

Preise und Vertragsbedingungen
Preis: 699,00 EUR pro Monat
Mindestvertragslaufzeit: 24 Monate

Kuendigungsfrist:
Der Vertrag kann mit einer Frist von drei Monaten zum Ende der jeweiligen Vertragslaufzeit gekuendigt werden.

Vertragsverlaengerung:
Sofern keine fristgerechte Kuendigung erfolgt, verlaengert sich der Vertrag automatisch um dieselbe Vertragslaufzeit zu den jeweils urspruenglich vereinbarten Konditionen.`,
      en: `Package "AI Voice Enterprise"
Service Description
The "AI Voice Enterprise" package is designed for businesses with higher call volume where incoming phone calls should be processed automatically and handled in a structured way.

The AI phone assistant acts as a digital first point of contact for inbound calls and helps businesses capture and process customer inquiries in a structured way.

The assistant can, among other things:
- automatically answer incoming calls
- capture caller requests
- answer common questions based on configured information
- record appointment requests
- route calls to responsible employees when needed
- document call information

During setup, the assistant is configured based on information provided by the customer and adapted to the company's requirements.

Existing business or practice phone numbers can be connected to the AI phone assistant within technical possibilities.

If suitable systems are available, a connection to existing appointment or calendar systems can be implemented in order to receive appointment requests or manage appointments.

During the contract term, the provider handles technical operation and continuous provision of the platform.

Technical support for use and operation of the system is included in the scope of service.

One adjustment or update of the AI phone assistant configuration is possible once within a twelve-month period from contract start.

Usage and Minute Allowance
This package includes 5,500 conversation minutes per month.

If the included minute allowance is exceeded, additional minutes are charged at EUR 0.13 per minute.

Unused minutes expire at the end of the respective billing period.

Pricing and Contract Terms
Price: EUR 699.00 per month
Minimum contract term: 24 months

Notice period:
The contract may be terminated with three months' notice to the end of the respective contract term.

Contract renewal:
If no timely termination is made, the contract automatically renews for the same contract term under the originally agreed conditions.`,
    },
  },
};