interface LocalizedString {
  de: string;
  en: string;
}

interface LocalizedStringList {
  de: string[];
  en: string[];
}

interface WebsitePlanContent {
  cardHighlights: LocalizedStringList;
  fullDescription: LocalizedString;
}

export const websitePlanContent: Record<'pro' | 'premium' | 'enterprise', WebsitePlanContent> = {
  pro: {
    cardHighlights: {
      de: [
        'Professionelle Unternehmenswebsite mit moderner Struktur',
        'Hosting und technische Infrastruktur inklusive',
        'Verknüpfung mit Ihrer Kundendomain',
        'Kontaktformular zur einfachen Kontaktaufnahme',
        'Jährliche Inhaltsaktualisierung plus technische Betreuung',
      ],
      en: [
        'Professional business website with a modern structure',
        'Hosting and technical infrastructure included',
        'Connection to your customer domain',
        'Contact form for easy customer inquiries',
        'Annual content update plus technical maintenance',
      ],
    },
    fullDescription: {
      de: `Paket „Pro Website“
Leistungsbeschreibung
Das Paket „Pro Website“ umfasst die Erstellung und Bereitstellung einer professionellen Unternehmenswebsite, die Unternehmen dabei unterstützt, online präsent zu sein und potenziellen Kunden einen modernen und vertrauenswürdigen Eindruck zu vermitteln.

Im Rahmen dieses Pakets wird eine kompakte und übersichtlich strukturierte Website erstellt, in der die wichtigsten Informationen über das Unternehmen, dessen Leistungen sowie Kontaktmöglichkeiten dargestellt werden. Die Website wird nach aktuellen Webdesign-Standards gestaltet und ist für die Nutzung auf Desktop-Geräten, Smartphones und Tablets optimiert.

Die Website wird als strukturierte Unternehmensseite aufgebaut, in der Inhalte wie Unternehmensvorstellung, Leistungsübersicht sowie Kontaktmöglichkeiten übersichtlich dargestellt werden.

Der Leistungsumfang umfasst unter anderem:
• Erstellung einer professionellen Unternehmenswebsite mit moderner Struktur
• Gestaltung und Aufbau der Website auf Basis eines zeitgemäßen Webdesign-Systems
• Bereitstellung und Einrichtung von Hosting und technischer Infrastruktur
• Verknüpfung der Website mit der Domain des Kunden
• Integration eines Kontaktformulars zur einfachen Kontaktaufnahme durch Besucher
• Möglichkeit zur Einbindung oder Verknüpfung externer Dienste, beispielsweise Karten- oder Standortdarstellungen, sofern entsprechende Konten oder Daten vorhanden sind
• grundlegende Suchmaschinen-Grundeinstellungen zur Unterstützung der Auffindbarkeit in Suchmaschinen
• Integration rechtlich erforderlicher Inhalte wie Impressum

Während der Vertragslaufzeit übernimmt der Anbieter die technische Betreuung der Website, einschließlich grundlegender Wartung sowie sicherheitsrelevanter Aktualisierungen.

Im Rahmen dieses Pakets ist eine jährliche Inhaltsaktualisierung der Website enthalten. Diese ermöglicht es dem Kunden, einmal innerhalb eines Zeitraums von zwölf Monaten ab Vertragsbeginn Änderungen an bestehenden Inhalten vorzunehmen, beispielsweise zur Aktualisierung von Texten, Bildern oder Kontaktdaten.

Preise und Vertragsbedingungen
Preis: 109,90 € pro Monat
Einmalige Bereitstellungsgebühr: 299,00 € einmalig
Mindestvertragslaufzeit: 24 Monate

Kündigungsfrist:
Der Vertrag kann mit einer Frist von drei Monaten zum Ende der jeweiligen Vertragslaufzeit gekündigt werden.

Vertragsverlängerung:
Sofern keine fristgerechte Kündigung erfolgt, verlängert sich der Vertrag automatisch um dieselbe Vertragslaufzeit zu den jeweils ursprünglich vereinbarten Konditionen.`,
      en: `Package “Pro Website”
Service Description
The “Pro Website” package includes the creation and provision of a professional business website that helps companies build a strong online presence and present a modern, trustworthy image to potential customers.

Under this package, a compact and clearly structured website is created to present key information about the company, its services, and contact options. The website is designed according to current web design standards and optimized for desktop devices, smartphones, and tablets.

The website is built as a structured company presence, where content such as company introduction, service overview, and contact information is presented clearly.

The scope of services includes, among other things:
• creation of a professional business website with a modern structure
• design and setup of the website based on a contemporary web design system
• provision and setup of hosting and technical infrastructure
• linking the website to the customer’s domain
• integration of a contact form for easy visitor inquiries
• option to integrate or connect external services, for example map or location displays, provided corresponding accounts or data are available
• basic search engine settings to support discoverability in search engines
• integration of legally required content such as legal notice (Imprint)

During the contract term, the provider handles technical support for the website, including basic maintenance and security-related updates.

This package includes one annual content update for the website. This allows the customer, once within a twelve-month period from contract start, to request changes to existing content, for example updates to texts, images, or contact details.

Pricing and Contract Terms
Price: €109.90 per month
One-time setup fee: €299.00 one-time
Minimum contract term: 24 months

Notice period:
The contract may be terminated with three months’ notice to the end of the respective contract term.

Contract renewal:
If no timely termination is made, the contract automatically renews for the same contract term under the originally agreed conditions.`,
    },
  },
  premium: {
    cardHighlights: {
      de: [
        'Mehrseitige Website mit bis zu 4 Inhaltsseiten',
        'Individuelle Gestaltung im professionellen Designsystem',
        'Kontakt- und Anfrageformulare inklusive',
        'Erweiterte SEO-Grundeinstellungen',
        'Jährliche Inhaltsaktualisierung plus Wartung',
      ],
      en: [
        'Multi-page website with up to 4 content pages',
        'Individual design within a professional design system',
        'Contact and inquiry forms included',
        'Extended SEO baseline settings',
        'Annual content update plus maintenance',
      ],
    },
    fullDescription: {
      de: `Paket „Premium Website“
Leistungsbeschreibung
Das Paket „Premium Website“ richtet sich an Unternehmen, die einen umfangreicheren Internetauftritt mit mehreren Inhaltsseiten und erweiterten Darstellungsmöglichkeiten benötigen.

Im Rahmen dieses Pakets wird eine professionelle Unternehmenswebsite mit bis zu 4 Inhaltsseiten erstellt. Die Website wird individuell strukturiert und nach modernen Webdesign-Standards gestaltet, um sowohl eine ansprechende Darstellung als auch eine klare Benutzerführung zu gewährleisten.

Die Seiten können beispielsweise Inhalte wie Startseite, Leistungsübersicht, Unternehmensinformationen sowie Kontaktmöglichkeiten enthalten.

Der Leistungsumfang umfasst insbesondere:
• Erstellung einer mehrseitigen Unternehmenswebsite mit bis zu 4 Inhaltsseiten
• individuelle Gestaltung der Website im Rahmen eines professionellen Designsystems
• Bereitstellung und Einrichtung der technischen Infrastruktur einschließlich Hosting
• Verknüpfung der Website mit der Domain des Kunden
• Integration von Kontakt- oder Anfrageformularen
• Möglichkeit zur Einbindung oder Verknüpfung externer Dienste und Plattformen, beispielsweise Karten-, Bewertungs- oder Social-Media-Diensten, sofern entsprechende Konten vorhanden sind
• erweiterte Suchmaschinen-Grundeinstellungen zur Unterstützung der Online-Sichtbarkeit
• Integration rechtlich erforderlicher Inhalte wie Impressum

Während der Vertragslaufzeit übernimmt der Anbieter die technische Betreuung der Website, einschließlich Wartung, Sicherheitsupdates sowie der Sicherstellung der technischen Funktionsfähigkeit.

Im Rahmen dieses Pakets ist eine jährliche Inhaltsaktualisierung enthalten. Der Kunde hat somit einmal innerhalb eines Zeitraums von zwölf Monaten ab Vertragsbeginn die Möglichkeit, Änderungen an bestehenden Inhalten der Website vorzunehmen, beispielsweise zur Anpassung von Texten, Bildern oder Kontaktdaten.

Preise und Vertragsbedingungen
Preis: 149,90 € pro Monat
Einmalige Bereitstellungsgebühr: 299,00 € einmalig
Mindestvertragslaufzeit: 24 Monate

Kündigungsfrist:
Der Vertrag kann mit einer Frist von drei Monaten zum Ende der jeweiligen Vertragslaufzeit gekündigt werden.

Vertragsverlängerung:
Sofern keine fristgerechte Kündigung erfolgt, verlängert sich der Vertrag automatisch um dieselbe Vertragslaufzeit zu den jeweils ursprünglich vereinbarten Konditionen.`,
      en: `Package “Premium Website”
Service Description
The “Premium Website” package is designed for businesses that need a broader online presence with multiple content pages and expanded presentation options.

Under this package, a professional business website with up to 4 content pages is created. The website is structured individually and designed according to modern web design standards to ensure both an appealing presentation and clear user guidance.

The pages may include, for example, content such as homepage, service overview, company information, and contact options.

The scope of services includes in particular:
• creation of a multi-page business website with up to 4 content pages
• individual website design within a professional design system
• provision and setup of technical infrastructure including hosting
• linking the website to the customer’s domain
• integration of contact or inquiry forms
• option to integrate or connect external services and platforms, for example map, review, or social media services, provided corresponding accounts are available
• extended search engine baseline settings to support online visibility
• integration of legally required content such as legal notice (Imprint)

During the contract term, the provider handles technical support for the website, including maintenance, security updates, and ensuring technical functionality.

This package includes one annual content update. The customer may therefore, once within a twelve-month period from contract start, request changes to existing website content, for example adjustments to texts, images, or contact details.

Pricing and Contract Terms
Price: €149.90 per month
One-time setup fee: €299.00 one-time
Minimum contract term: 24 months

Notice period:
The contract may be terminated with three months’ notice to the end of the respective contract term.

Contract renewal:
If no timely termination is made, the contract automatically renews for the same contract term under the originally agreed conditions.`,
    },
  },
  enterprise: {
    cardHighlights: {
      de: [
        'Individuelle Website mit bis zu 7 Inhaltsseiten',
        'Moderne Design- und Benutzerführungsstandards',
        'Umfangreiche Integrationen externer Plattformen',
        'Erweiterte technische Einstellungen für Sichtbarkeit',
        'Zukunftssichere Struktur mit jährlicher Inhaltsaktualisierung',
      ],
      en: [
        'Custom website with up to 7 content pages',
        'Modern design and user guidance standards',
        'Extensive integrations of external platforms',
        'Advanced technical settings for discoverability',
        'Future-proof structure with annual content updates',
      ],
    },
    fullDescription: {
      de: `Paket „Enterprise Website“
Leistungsbeschreibung
Das Paket „Enterprise Website“ richtet sich an Unternehmen mit erweiterten Anforderungen an ihren digitalen Auftritt sowie an Betriebe, die ihre Website als umfangreiche Unternehmenspräsentation nutzen möchten.

Im Rahmen dieses Pakets wird eine individuell strukturierte Unternehmenswebsite mit bis zu 7 Inhaltsseiten erstellt. Die Website wird nach modernen Webdesign-Standards entwickelt und an das Erscheinungsbild des Unternehmens angepasst.

Der Aufbau der Website ermöglicht eine umfassendere Darstellung des Unternehmens, seiner Leistungen sowie zusätzlicher Inhalte wie Referenzen, Informationsseiten oder weiterer Unternehmensbereiche.

Der Leistungsumfang umfasst unter anderem:
• Erstellung einer umfangreichen Unternehmenswebsite mit bis zu 7 Inhaltsseiten
• Gestaltung der Website entsprechend moderner Design- und Benutzerführungsstandards
• Bereitstellung und Einrichtung von Hosting und technischer Infrastruktur
• Verknüpfung der Website mit der Domain des Kunden
• Integration verschiedener Kontakt- und Anfragefunktionen
• Möglichkeit zur Verknüpfung oder Einbindung externer Plattformen und Dienste, beispielsweise Karten-, Bewertungs-, Analyse- oder Social-Media-Diensten, sofern entsprechende Konten oder Daten vorhanden sind
• erweiterte technische Einstellungen zur Unterstützung der Auffindbarkeit in Suchmaschinen
• Integration rechtlich erforderlicher Inhalte wie Impressum

Die Website wird so aufgebaut, dass zukünftige Erweiterungen oder zusätzliche Inhalte grundsätzlich möglich sind.

Während der Vertragslaufzeit übernimmt der Anbieter die technische Betreuung der Website, einschließlich Wartung, Sicherheitsupdates sowie der Sicherstellung eines stabilen technischen Betriebs.

Im Rahmen dieses Pakets ist eine jährliche Inhaltsaktualisierung der Website enthalten. Der Kunde kann somit einmal innerhalb eines Zeitraums von zwölf Monaten ab Vertragsbeginn Änderungen an bestehenden Inhalten vornehmen lassen, beispielsweise zur Aktualisierung von Texten, Bildern oder Unternehmensinformationen.

Preise und Vertragsbedingungen
Preis: 199,90 € pro Monat
Einmalige Bereitstellungsgebühr: 299,00 € einmalig
Mindestvertragslaufzeit: 24 Monate

Kündigungsfrist:
Der Vertrag kann mit einer Frist von drei Monaten zum Ende der jeweiligen Vertragslaufzeit gekündigt werden.

Vertragsverlängerung:
Sofern keine fristgerechte Kündigung erfolgt, verlängert sich der Vertrag automatisch um dieselbe Vertragslaufzeit zu den jeweils ursprünglich vereinbarten Konditionen.`,
      en: `Package “Enterprise Website”
Service Description
The “Enterprise Website” package is aimed at businesses with advanced requirements for their digital presence, as well as companies that want to use their website as a comprehensive corporate presentation.

Under this package, an individually structured business website with up to 7 content pages is created. The website is developed according to modern web design standards and adapted to the company’s visual identity.

The website structure enables a more comprehensive presentation of the company, its services, and additional content such as references, information pages, or further business areas.

The scope of services includes, among other things:
• creation of an extensive business website with up to 7 content pages
• website design according to modern design and user-guidance standards
• provision and setup of hosting and technical infrastructure
• linking the website to the customer’s domain
• integration of various contact and inquiry functions
• option to connect or integrate external platforms and services, for example map, review, analytics, or social media services, provided corresponding accounts or data are available
• advanced technical settings to support discoverability in search engines
• integration of legally required content such as legal notice (Imprint)

The website is structured so that future extensions or additional content are generally possible.

During the contract term, the provider handles technical support for the website, including maintenance, security updates, and ensuring stable technical operation.

This package includes one annual content update for the website. The customer can therefore request changes to existing content once within a twelve-month period from contract start, for example to update texts, images, or company information.

Pricing and Contract Terms
Price: €199.90 per month
One-time setup fee: €299.00 one-time
Minimum contract term: 24 months

Notice period:
The contract may be terminated with three months’ notice to the end of the respective contract term.

Contract renewal:
If no timely termination is made, the contract automatically renews for the same contract term under the originally agreed conditions.`,
    },
  },
};