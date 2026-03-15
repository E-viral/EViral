export type SupportedLocale = 'de' | 'en';

interface LocalizedString {
  de: string;
  en: string;
}

interface LegalDocumentContent {
  metadataTitle: LocalizedString;
  pageTitle: LocalizedString;
  body: LocalizedString;
}

export type LegalDocumentKey = 'terms' | 'avv' | 'privacy';

export const legalDocuments: Record<LegalDocumentKey, LegalDocumentContent> = {
  terms: {
    metadataTitle: {
      de: 'AGB / Terms & Conditions',
      en: 'Terms & Conditions / AGB',
    },
    pageTitle: {
      de: 'Allgemeine Geschäftsbedingungen (AGB)',
      en: 'Terms & Conditions',
    },
    body: {
      de: `
## 1. Geltungsbereich und Begriffsbestimmungen

Diese Allgemeinen Geschäftsbedingungen ("AGB") gelten für alle Verträge zwischen EViRAL und Unternehmern im Sinne des § 14 BGB (nachfolgend "Kunde").

Die Leistungen von EViRAL richten sich ausschließlich an gewerbliche Kunden (B2B). Verträge mit Verbrauchern im Sinne des § 13 BGB werden nicht geschlossen.

Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, EViRAL stimmt ihrer Geltung ausdrücklich in Textform zu.

## 2. Vertragsgegenstand und Leistungen

EViRAL bietet digitale Dienstleistungen für Unternehmen an.

Hierzu können insbesondere gehören:

- Bereitstellung einer cloudbasierten Reputationsmanagement-Plattform
- Erstellung und Bereitstellung von Unternehmenswebsites
- Bereitstellung von KI-gestützten Kommunikationslösungen, insbesondere telefonischen Assistenzsystemen
- Automatisierung von Kommunikations- oder Feedbackprozessen
- Analyse- und Auswertungsfunktionen

Der konkrete Leistungsumfang ergibt sich aus:

- dem jeweils gebuchten Tarif oder Paket
- der Leistungsbeschreibung auf unserer Website
- individuellen Angeboten oder Vereinbarungen

Die Leistungen werden in der Regel als cloudbasierte Dienste bzw. Software-as-a-Service (SaaS) bereitgestellt.

Eine lokale Installation beim Kunden ist nicht geschuldet.

EViRAL ist berechtigt, sich zur Leistungserbringung technischer Dienstleister oder Subunternehmer zu bedienen.

## 3. Nutzerkonto und Registrierung

Für die Nutzung bestimmter Dienste kann die Einrichtung eines Benutzerkontos erforderlich sein. Der Kunde verpflichtet sich:

- vollständige und korrekte Angaben zu machen
- Änderungen seiner Daten unverzüglich zu aktualisieren
- Zugangsdaten vertraulich zu behandeln

Der Kunde ist für sämtliche Aktivitäten verantwortlich, die über sein Benutzerkonto erfolgen.

EViRAL ist berechtigt, Konten zu sperren oder zu löschen, wenn:

- falsche Angaben gemacht wurden
- Missbrauch vorliegt
- Zahlungen ausbleiben

## 4. Nutzung der Plattform und Lizenz

EViRAL gewährt dem Kunden für die Dauer des Vertrags ein einfaches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an der bereitgestellten Software und Plattform.

Der Kunde ist insbesondere nicht berechtigt:

- die Software oder Plattform zu vervielfältigen
- die Software zu verkaufen, zu vermieten oder weiterzugeben
- technische Schutzmechanismen zu umgehen
- Teile der Plattform zu kopieren oder zu extrahieren

## 5. Kein Widerrufsrecht

Da sich das Angebot ausschließlich an Unternehmer richtet, besteht kein gesetzliches Widerrufsrecht.

## 6. Leistungsänderungen und Drittanbieter

EViRAL nutzt Drittanbieter für Hosting, Plattformbetrieb, Telefonie, KI-Dienste, Kommunikation sowie Zahlungsabwicklung.

Sollte ein Drittanbieter Leistungen ändern oder einstellen, kann EViRAL eine gleichwertige Ersatzlösung einsetzen.

Solange die wesentlichen Funktionen erhalten bleiben, entsteht hierdurch kein Sonderkündigungsrecht.

## 7. Pflichten und Verantwortlichkeit des Kunden

Der Kunde ist für sämtliche Inhalte, Daten und Verarbeitungen selbst verantwortlich.

Der Kunde stellt sicher, dass er berechtigt ist, personenbezogene Daten seiner Endkunden zu verarbeiten und diese über entsprechende Datenverarbeitungen informiert wurden.

Der Kunde darf keine rechtswidrigen Inhalte verbreiten oder über die Plattform verarbeiten.

Der Kunde stellt EViRAL von sämtlichen Ansprüchen Dritter frei, die aus einer rechtswidrigen Nutzung der Dienste entstehen.

## 8. Vertragslaufzeit, Verlängerung und Kündigung

Die Vertragslaufzeit ergibt sich aus dem gewählten Tarif oder Angebot.

Kündigungen müssen mindestens in Textform erfolgen (z. B. per E-Mail).

Erfolgt keine Kündigung spätestens drei Monate vor Ablauf der Mindestlaufzeit, verlängert sich der Vertrag automatisch um die ursprünglich vereinbarte Vertragslaufzeit.

Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

Nach Vertragsende kann der Zugang zu den Diensten deaktiviert werden.

Der Kunde ist für die Sicherung und den Export seiner Daten selbst verantwortlich.

## 9. Preise und Zahlungsbedingungen

Die Preise ergeben sich aus dem jeweiligen Angebot, Tarif oder Bestellprozess.

Die Abrechnung erfolgt in der Regel monatlich im Voraus.

Die Zahlung kann über Stripe oder andere angebotene Zahlungsmethoden erfolgen.

Gerät der Kunde in Zahlungsverzug, ist EViRAL berechtigt:

- Verzugszinsen zu verlangen
- den Zugang zur Plattform oder zu Diensten vorübergehend zu sperren

Eine vorzeitige Kündigung oder Nichtnutzung entbindet den Kunden nicht von der Zahlungspflicht für die vereinbarte Vertragslaufzeit.

## 10. Drittanbieter, Verfügbarkeit und technische Änderungen

EViRAL nutzt externe Systeme für Hosting, Infrastruktur, Kommunikation, Telefonie, KI-Verarbeitung und Zahlungsabwicklung.

Technische Systeme, Anbieter oder Strukturen können jederzeit angepasst oder ersetzt werden.

Eine ununterbrochene Verfügbarkeit der Dienste kann nicht garantiert werden.

## 11. Geistiges Eigentum

Alle Rechte an Software, Plattform, Inhalten, Designs und Technologien liegen bei EViRAL oder deren Lizenzgebern.

## 12. KI-Inhalte

Einige Funktionen können auf künstlicher Intelligenz basieren.

KI-generierte Inhalte dienen lediglich als Vorschläge oder automatisierte Verarbeitungshilfen.

Der Kunde bleibt vollständig verantwortlich für:

- Inhalte
- Veröffentlichungen
- rechtliche Zulässigkeit

EViRAL haftet nicht für Folgen fehlerhaft übernommener KI-Inhalte.

## 13. Gewährleistung

EViRAL schuldet eine Leistung nach dem aktuellen Stand der Technik.

Eine vollständige Fehlerfreiheit oder permanente Verfügbarkeit wird nicht geschuldet.

## 14. Haftung

EViRAL haftet unbeschränkt bei:

- Vorsatz
- grober Fahrlässigkeit
- Schäden aus der Verletzung von Leben, Körper oder Gesundheit

Bei einfacher Fahrlässigkeit haftet EViRAL nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den vorhersehbaren typischen Schaden.

## 15. Datenschutz und Auftragsverarbeitung

Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.

Soweit EViRAL personenbezogene Daten im Auftrag des Kunden verarbeitet, erfolgt dies im Rahmen einer Auftragsverarbeitung gemäß Art. 28 DSGVO.

Die Auftragsverarbeitungsvereinbarung (AVV) ist Bestandteil dieses Vertrags und unter folgendem Link abrufbar: [Auftragsverarbeitungsvertrag (AVV)](/avv).

## 16. Änderungen der AGB

Änderungen dieser AGB werden dem Kunden rechtzeitig mitgeteilt.

Widerspricht der Kunde nicht innerhalb von vier Wochen nach Mitteilung, gelten die Änderungen als akzeptiert.

Preisänderungen werden ebenfalls mindestens vier Wochen vorher angekündigt.

## 17. Schlussbestimmungen

Es gilt deutsches Recht.

Gerichtsstand für alle Streitigkeiten aus Vertragsverhältnissen mit Unternehmern ist Duisburg.

Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.

**Anbieter**

EViRAL

Inhaber: Mert Özcan

Friedrich-Ebert-Straße 322

47139 Duisburg

E-Mail: eviralgermany@gmail.com
`.trim(),
      en: `
## 1. Scope and Definitions

These Terms and Conditions ("Terms") apply to all contracts between EViRAL and entrepreneurs within the meaning of Section 14 of the German Civil Code (BGB) (hereinafter "Customer").

EViRAL's services are directed exclusively at commercial customers (B2B). Contracts with consumers within the meaning of Section 13 BGB are not concluded.

Deviating, conflicting, or supplementary general terms and conditions of the Customer shall not become part of the contract unless EViRAL expressly agrees to their validity in text form.

## 2. Subject Matter of the Contract and Services

EViRAL offers digital services for businesses.

These may in particular include:

- provision of a cloud-based reputation management platform
- creation and provision of company websites
- provision of AI-supported communication solutions, in particular telephone assistant systems
- automation of communication or feedback processes
- analysis and reporting functions

The specific scope of services is determined by:

- the tariff or package booked in each case
- the service description on our website
- individual offers or agreements

The services are generally provided as cloud-based services or Software as a Service (SaaS).

Local installation at the Customer's premises is not owed.

EViRAL is entitled to use technical service providers or subcontractors for the provision of services.

## 3. User Account and Registration

The creation of a user account may be required in order to use certain services. The Customer undertakes to:

- provide complete and correct information
- update changes to its data without delay
- keep access data confidential

The Customer is responsible for all activities carried out via its user account.

EViRAL is entitled to block or delete accounts if:

- false information has been provided
- misuse occurs
- payments remain outstanding

## 4. Use of the Platform and License

For the duration of the contract, EViRAL grants the Customer a simple, non-transferable, and non-sublicensable right to use the software and platform provided.

The Customer is in particular not entitled to:

- reproduce the software or platform
- sell, rent out, or pass on the software
- circumvent technical protection mechanisms
- copy or extract parts of the platform

## 5. No Right of Withdrawal

Since the offer is directed exclusively at entrepreneurs, there is no statutory right of withdrawal.

## 6. Service Changes and Third-Party Providers

EViRAL uses third-party providers for hosting, platform operation, telephony, AI services, communication, and payment processing.

If a third-party provider changes or discontinues services, EViRAL may use an equivalent replacement solution.

As long as the essential functions are maintained, this shall not give rise to a special right of termination.

## 7. Customer Obligations and Responsibility

The Customer is solely responsible for all content, data, and processing activities.

The Customer ensures that it is entitled to process personal data of its end customers and that those end customers have been informed about the corresponding data processing activities.

The Customer may not distribute unlawful content or process it via the platform.

The Customer shall indemnify EViRAL against all third-party claims arising from unlawful use of the services.

## 8. Contract Term, Renewal, and Termination

The contract term results from the selected tariff or offer.

Terminations must at least be made in text form (e.g. by email).

If termination is not given no later than three months before the end of the minimum term, the contract shall automatically renew by the originally agreed contract term.

The right to extraordinary termination for good cause remains unaffected.

After the end of the contract, access to the services may be deactivated.

The Customer is responsible for securing and exporting its data.

## 9. Prices and Payment Terms

Prices result from the respective offer, tariff, or ordering process.

Billing is generally carried out monthly in advance.

Payment can be made via Stripe or other offered payment methods.

If the Customer is in default of payment, EViRAL is entitled to:

- charge default interest
- temporarily block access to the platform or to services

Early termination or non-use does not release the Customer from the payment obligation for the agreed contract term.

## 10. Third-Party Providers, Availability, and Technical Changes

EViRAL uses external systems for hosting, infrastructure, communication, telephony, AI processing, and payment processing.

Technical systems, providers, or structures may be adjusted or replaced at any time.

Uninterrupted availability of the services cannot be guaranteed.

## 11. Intellectual Property

All rights to the software, platform, content, designs, and technologies are held by EViRAL or its licensors.

## 12. AI Content

Some functions may be based on artificial intelligence.

AI-generated content serves only as suggestions or automated processing aids.

The Customer remains fully responsible for:

- content
- publications
- legal admissibility

EViRAL is not liable for consequences arising from incorrectly adopted AI content.

## 13. Warranty

EViRAL owes performance in accordance with the current state of the art.

Complete freedom from errors or permanent availability is not owed.

## 14. Liability

EViRAL is liable without limitation in cases of:

- intent
- gross negligence
- damages resulting from injury to life, body, or health

In cases of simple negligence, EViRAL is only liable for breaches of essential contractual obligations and limited to the foreseeable, typical damage.

## 15. Data Protection and Processing on Behalf

The processing of personal data is carried out in accordance with our privacy policy.

Insofar as EViRAL processes personal data on behalf of the Customer, this is done within the framework of processing on behalf pursuant to Article 28 GDPR.

The Data Processing Agreement (DPA) forms an integral part of this contract and is available at the following link: [Data Processing Agreement (DPA)](/avv).

## 16. Amendments to the Terms

Amendments to these Terms shall be communicated to the Customer in due time.

If the Customer does not object within four weeks after notification, the amendments shall be deemed accepted.

Price changes will likewise be announced at least four weeks in advance.

## 17. Final Provisions

German law applies.

The place of jurisdiction for all disputes arising from contractual relationships with entrepreneurs is Duisburg.

Should any provision of these Terms be or become invalid, the validity of the remaining provisions shall remain unaffected.

**Provider**

EViRAL

Owner: Mert Özcan

Friedrich-Ebert-Straße 322

47139 Duisburg

Email: eviralgermany@gmail.com
`.trim(),
    },
  },
  avv: {
    metadataTitle: {
      de: 'AV-Vertrag / Data Processing Agreement',
      en: 'Data Processing Agreement / AV-Vertrag',
    },
    pageTitle: {
      de: 'Auftragsverarbeitungsvertrag (AV-Vertrag)',
      en: 'Data Processing Agreement (DPA)',
    },
    body: {
      de: `
zwischen

EViRAL - Inhaber: Mert Özcan

Friedrich-Ebert-Straße 322, 47139 Duisburg

E-Mail: eviralgermany@gmail.com

nachfolgend "Auftragsverarbeiter"

und

dem Kunden (Unternehmer im Sinne des § 14 BGB)

nachfolgend "Verantwortlicher"

## 1. Gegenstand des Vertrags

Dieser Vertrag regelt die Verarbeitung personenbezogener Daten durch den Auftragsverarbeiter im Auftrag des Verantwortlichen gemäß Art. 28 DSGVO. Gegenstand ist die Bereitstellung der cloudbasierten Reputationsmanagement-Plattform von EViRAL, einschließlich KI-basierter Analysefunktionen, Review-Management, Kommunikationsfunktionen und Automations-Workflows.

## 2. Art und Zweck der Verarbeitung

Die Verarbeitung dient der Nutzung sämtlicher Funktionen der Plattform, insbesondere:

- Aggregation und Darstellung von Bewertungen
- Versand von Review-Requests über E-Mail, SMS oder WhatsApp
- KI-basierte Antwortvorschläge
- Auswertung der Reputation und Performance
- Verwaltung von Endkundendaten
- Nutzung von Landingpages, Widgets und QR-Codes

## 3. Art der Daten

Es können folgende personenbezogene Daten verarbeitet werden:

- Namen, E-Mail-Adressen, Telefonnummern
- Bewertungen, Antworten, Feedback
- technische Daten (IP-Adresse, Browserinformationen, Zeitstempel)
- Kommunikationsinhalte im Rahmen von Review-Requests
- Metadaten und Logs

## 4. Kategorien betroffener Personen

- Endkunden des Verantwortlichen
- Mitarbeiter des Verantwortlichen
- Nutzer der Plattform

## 5. Pflichten des Auftragsverarbeiters

Der Auftragsverarbeiter verpflichtet sich:

- Daten ausschließlich im Rahmen dieses Vertrags zu verarbeiten
- Daten nicht an Dritte weiterzugeben, außer zur Erfüllung der Dienstleistung
- alle Personen zur Vertraulichkeit zu verpflichten
- angemessene technische und organisatorische Maßnahmen zu ergreifen
- den Verantwortlichen bei der Erfüllung von Betroffenenrechten zu unterstützen
- Datenschutzverletzungen unverzüglich zu melden
- Daten nach Vertragsende zu löschen oder zu übergeben

## 6. Technische und organisatorische Maßnahmen (TOMs)

Der Auftragsverarbeiter garantiert Maßnahmen wie:

- TLS-Verschlüsselung
- Zugriffsbeschränkung und Rollenmodelle
- gesicherte EU-Serverstandorte
- regelmäßige Datensicherungen
- Sicherheitsprotokollierung
- Systemüberwachung

## 7. Unterauftragsverarbeiter

Der Verantwortliche stimmt dem Einsatz folgender Unterauftragsverarbeiter zu:

- White-Label-Plattformanbieter (technische Bereitstellung)
- Hosting-Provider (EU-Server)
- Stripe (Zahlungsabwicklung)
- WhatsApp Business API / Meta Platforms (Kommunikationsdienste)
- CloudTalk (VoIP-Dienste)
- KI-Dienstleister für automatisierte Texte und Analysen

Weitere Unterauftragsverarbeiter dürfen nur mit Mitteilung an den Verantwortlichen eingesetzt werden.

## 8. Ort der Verarbeitung

Die Verarbeitung findet innerhalb der EU statt.

Für Dienste mit Drittlandbezug (Meta, Stripe, KI-Anbieter) werden Standardvertragsklauseln gemäß Art. 46 DSGVO eingesetzt.

## 9. Rechte und Pflichten des Verantwortlichen

Der Verantwortliche bleibt Eigentümer der Daten und ist für deren Rechtmäßigkeit verantwortlich.

Er muss sicherstellen, dass alle gespeicherten Endkundendaten rechtskonform erhoben wurden.

## 10. Unterstützung bei Betroffenenrechten

Der Auftragsverarbeiter unterstützt bei:

- Auskunftsersuchen
- Berichtigung
- Löschung
- Einschränkung und Datenübertragbarkeit

## 11. Löschung von Daten

Nach Vertragsende werden Daten gelöscht, es sei denn gesetzliche Aufbewahrungsfristen bestehen.

Der Export liegt in der Verantwortung des Verantwortlichen.

## 12. Weisungsgebundenheit

Der Auftragsverarbeiter darf personenbezogene Daten nur gemäß dokumentierten Weisungen des Verantwortlichen verarbeiten.

Bei unklaren Weisungen erfolgt Rücksprache.

## 13. Haftung

Jede Partei haftet im Rahmen der gesetzlichen Vorgaben.

Der Auftragsverarbeiter haftet nicht für Fehler, die aus falschen oder rechtswidrigen Anweisungen des Verantwortlichen resultieren.

## 14. Vertragsdauer

Dieser Vertrag gilt für die Dauer der Nutzung der EViRAL-Plattform und endet automatisch mit dem Hauptvertrag.

## 15. Schlussbestimmungen

Es gilt deutsches Recht.

Gerichtsstand ist Duisburg.

Änderungen bedürfen der Textform.
`.trim(),
      en: `
between

EViRAL - Owner: Mert Özcan

Friedrich-Ebert-Straße 322, 47139 Duisburg

Email: eviralgermany@gmail.com

hereinafter "Processor"

and

the Customer (entrepreneur within the meaning of Section 14 BGB)

hereinafter "Controller"

## 1. Subject Matter of the Agreement

This agreement governs the processing of personal data by the Processor on behalf of the Controller pursuant to Article 28 GDPR. The subject matter is the provision of EViRAL's cloud-based reputation management platform, including AI-based analysis functions, review management, communication functions, and automation workflows.

## 2. Nature and Purpose of Processing

The processing serves the use of all functions of the platform, in particular:

- aggregation and display of reviews
- sending review requests via email, SMS, or WhatsApp
- AI-based response suggestions
- evaluation of reputation and performance
- management of end-customer data
- use of landing pages, widgets, and QR codes

## 3. Types of Data

The following personal data may be processed:

- names, email addresses, telephone numbers
- reviews, replies, feedback
- technical data (IP address, browser information, timestamps)
- communication content in connection with review requests
- metadata and logs

## 4. Categories of Data Subjects

- end customers of the Controller
- employees of the Controller
- users of the platform

## 5. Duties of the Processor

The Processor undertakes to:

- process data only within the framework of this agreement
- not disclose data to third parties except where required for the performance of the service
- bind all persons to confidentiality
- implement appropriate technical and organizational measures
- support the Controller in fulfilling data subject rights
- report personal data breaches without undue delay
- delete or hand over data after the end of the contract

## 6. Technical and Organizational Measures (TOMs)

The Processor guarantees measures such as:

- TLS encryption
- access restrictions and role models
- secure EU server locations
- regular backups
- security logging
- system monitoring

## 7. Sub-processors

The Controller agrees to the use of the following sub-processors:

- white-label platform provider (technical provision)
- hosting provider (EU servers)
- Stripe (payment processing)
- WhatsApp Business API / Meta Platforms (communication services)
- CloudTalk (VoIP services)
- AI service providers for automated texts and analyses

Additional sub-processors may only be used after notifying the Controller.

## 8. Place of Processing

Processing takes place within the EU.

For services involving third-country transfers (Meta, Stripe, AI providers), standard contractual clauses pursuant to Article 46 GDPR are used.

## 9. Rights and Obligations of the Controller

The Controller remains the owner of the data and is responsible for its lawfulness.

It must ensure that all stored end-customer data has been collected in compliance with the law.

## 10. Assistance with Data Subject Rights

The Processor supports with:

- access requests
- rectification
- deletion
- restriction and data portability

## 11. Deletion of Data

After the end of the contract, data shall be deleted unless statutory retention obligations exist.

Export is the responsibility of the Controller.

## 12. Instructions Binding the Processor

The Processor may process personal data only in accordance with documented instructions of the Controller.

In the event of unclear instructions, clarification shall be sought.

## 13. Liability

Each party is liable within the framework of the statutory provisions.

The Processor is not liable for errors resulting from incorrect or unlawful instructions of the Controller.

## 14. Contract Term

This agreement applies for the duration of the use of the EViRAL platform and ends automatically with the main contract.

## 15. Final Provisions

German law applies.

The place of jurisdiction is Duisburg.

Amendments require text form.
`.trim(),
    },
  },
  privacy: {
    metadataTitle: {
      de: 'Datenschutzerklaerung / Privacy Policy',
      en: 'Privacy Policy / Datenschutzerklaerung',
    },
    pageTitle: {
      de: 'Datenschutzerklaerung',
      en: 'Privacy Policy',
    },
    body: {
      de: `
## 1. Allgemeine Hinweise

Diese Datenschutzerklaerung informiert ueber die Verarbeitung personenbezogener Daten im Zusammenhang mit der Nutzung der Dienstleistungen von EViRAL.

Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO) sowie den geltenden nationalen Datenschutzbestimmungen.

Unsere Dienstleistungen umfassen unter anderem Loesungen im Bereich Reputationsmanagement, Erstellung und Bereitstellung von Websites sowie KI-gestuetzte Kommunikationsloesungen, beispielsweise telefonische Assistenzsysteme.

## 2. Kategorien personenbezogener Daten

Wir verarbeiten - abhaengig von der Art der Nutzung - insbesondere folgende Kategorien personenbezogener Daten.

**Kundendaten (B2B)**

Diese umfassen geschaeftliche Informationen, die im Rahmen der Registrierung oder Nutzung unserer Dienste bereitgestellt werden, beispielsweise:

- Name
- Firma
- Position
- geschaeftliche Adresse
- geschaeftliche Telefonnummer
- geschaeftliche E-Mail-Adresse
- Zugangsdaten (Login / Nutzername)
- Vertragsdaten
- Tarifinformationen
- Laufzeiten
- Rechnungsdaten
- interne Notizen zur Geschaeftsbeziehung

**Zahlungsdaten**

Zur Zahlungsabwicklung koennen Zahlungsinformationen verarbeitet werden, beispielsweise:

- Zahlungsstatus
- Rechnungen
- Transaktionskennungen

Die Zahlungsabwicklung kann ueber Zahlungsdienstleister wie Stripe erfolgen.

Wir erhalten keine vollstaendigen Kreditkartendaten.

Weitere Informationen:

[https://stripe.com/privacy](https://stripe.com/privacy)

**Nutzungsdaten der Plattform**

Hierzu koennen gehoeren:

- Logins
- Konfigurationen
- verwendete Workflows
- erstellte Bewertungsanfragen
- Aktivitaeten auf Landingpages
- Browsertyp
- IP-Adresse
- Geraeteinformationen
- Zeitstempel
- technische Logdaten

Diese Daten dienen der Analyse, Stabilitaet und Sicherheit der Systeme.

**Endkundendaten unserer Kunden**

Unsere Kunden koennen im Rahmen der Nutzung der Dienste Daten ihrer eigenen Kunden verarbeiten.

Hierzu koennen gehoeren:

- Name
- E-Mail-Adresse
- Telefonnummer
- Bewertungen
- Feedback
- Video-Testimonials
- Reaktionen des Unternehmers
- technische Metadaten

In diesen Faellen handeln unsere Kunden als Verantwortliche im Sinne der DSGVO, waehrend EViRAL als Auftragsverarbeiter taetig wird.

**Daten aus Telefonanrufen (KI-Telefonassistent)**

Im Rahmen unserer KI-basierten Telefonassistenz koennen eingehende Anrufe automatisiert verarbeitet werden.

Dabei koennen unter anderem folgende Daten verarbeitet werden:

- Telefonnummern von Anrufern
- Gespraechsinhalte oder Gespraechszusammenfassungen
- Terminwuensche oder Anliegen
- Zeitpunkt und Dauer von Anrufen
- technische Verbindungsdaten

Diese Daten werden ausschliesslich zur Bereitstellung des jeweiligen Telefonservices verarbeitet.

Wenn unsere Kunden den Telefonassistenten zur Kommunikation mit ihren eigenen Endkunden einsetzen, handeln unsere Kunden als Verantwortliche und EViRAL als Auftragsverarbeiter.

**Daten von Websitebesuchern**

Im Rahmen der Erstellung oder Bereitstellung von Websites koennen Daten von Websitebesuchern verarbeitet werden.

Hierzu zaehlen insbesondere:

- IP-Adressen
- Server-Logfiles
- Browserinformationen
- Geraeteinformationen
- Daten aus Kontaktformularen
- Nutzungsdaten der jeweiligen Website

Der jeweilige Websitebetreiber ist fuer die Inhalte seiner Website sowie fuer die Verarbeitung von Daten seiner Besucher verantwortlich.

## 3. Zwecke der Verarbeitung

Personenbezogene Daten werden insbesondere verarbeitet fuer:

- Bereitstellung und Betrieb unserer Dienstleistungen
- Betrieb der Reputationsmanagement-Plattform
- Durchfuehrung automatisierter Bewertungsanfragen
- Analyse und Darstellung von Bewertungen
- KI-basierte Antwortvorschlaege
- Integration von Widgets auf Websites
- Verwaltung von Kundenkonten
- Abrechnung und Zahlungsabwicklung
- IT-Sicherheit und Missbrauchspraevention
- Kundenservice und Support

Darueber hinaus koennen Daten verarbeitet werden fuer:

- Bereitstellung und Betrieb von Unternehmenswebsites
- technische Bereitstellung von Hostingdiensten
- automatisierte Bearbeitung eingehender Telefonanrufe
- Weiterleitung von Kundenanfragen
- Terminverwaltung

Fuer bestimmte Funktionen koennen KI-Dienste externer Anbieter eingesetzt werden.

## 4. Rechtsgrundlagen der Verarbeitung

**Art. 6 Abs. 1 lit. b DSGVO - Vertragserfuellung**

Bereitstellung unserer Dienstleistungen, Zahlungsabwicklung und Support.

**Art. 6 Abs. 1 lit. f DSGVO - berechtigtes Interesse**

Optimierung unserer Systeme, IT-Sicherheit, Missbrauchserkennung.

**Art. 6 Abs. 1 lit. c DSGVO - gesetzliche Pflicht**

z. B. steuerliche Aufbewahrungspflichten.

Fuer Endkundendaten unserer Kunden liegt die Rechtsgrundlage im Verhaeltnis zwischen dem Kunden und seinen eigenen Endkunden.

## 5. Empfaenger personenbezogener Daten

Empfaenger personenbezogener Daten koennen sein:

- Hostinganbieter
- Cloud-Infrastruktur-Anbieter
- Plattformanbieter
- Zahlungsdienstleister (z. B. Stripe)
- Kommunikationsanbieter (z. B. WhatsApp API oder Telefonieanbieter)
- KI-Dienstleister
- Steuerberater oder Behoerden im Rahmen gesetzlicher Verpflichtungen

Mit allen Dienstleistern bestehen Vertraege zur Auftragsverarbeitung gemaess Art. 28 DSGVO.

## 6. Datenuebermittlung in Drittlaender

Einige Dienstleister koennen Daten auch in Drittlaendern wie den USA verarbeiten.

Ein angemessenes Datenschutzniveau wird durch geeignete Garantien sichergestellt, beispielsweise:

- Standardvertragsklauseln nach Art. 46 DSGVO
- technische und organisatorische Schutzmassnahmen

Bei Nutzung von WhatsApp koennen Daten ueber Meta Platforms verarbeitet werden.

Weitere Informationen:

[https://www.whatsapp.com/legal/privacy-policy/](https://www.whatsapp.com/legal/privacy-policy/)

## 7. Speicherdauer

Personenbezogene Daten werden nur so lange gespeichert, wie dies fuer den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.

Typische Speicherfristen:

- Vertrags- und Zahlungsdaten: 10 Jahre
- technische Logdaten: 90 Tage bis 1 Jahr
- Endkundendaten: bis zur Loeschung durch den Kunden oder bis zum Vertragsende

Nach Ablauf erfolgt Loeschung oder Anonymisierung.

## 8. Rechte der betroffenen Personen

Betroffene Personen haben folgende Rechte:

- Auskunft
- Berichtigung
- Loeschung
- Einschraenkung der Verarbeitung
- Datenuebertragbarkeit
- Widerspruch
- Widerruf erteilter Einwilligungen

Anfragen koennen an die unten genannten Kontaktdaten gerichtet werden.

## 9. Beschwerderecht

Betroffene Personen haben das Recht, sich bei einer Datenschutzaufsichtsbehoerde zu beschweren.

Zustaendige Aufsichtsbehoerde:

Landesbeauftragte fuer Datenschutz NRW

Kavalleriestrasse 2-4

40213 Duesseldorf

## 10. Pflicht zur Bereitstellung von Daten

Fuer den Vertragsabschluss und die Nutzung unserer Dienstleistungen koennen bestimmte personenbezogene Daten erforderlich sein.

Ohne deren Bereitstellung ist eine Nutzung der Dienste moeglicherweise nicht moeglich.

## 11. Datensicherheit

Wir setzen technische und organisatorische Massnahmen ein, um personenbezogene Daten zu schuetzen, beispielsweise:

- TLS-Verschluesselung
- Zugriffs- und Berechtigungskonzepte
- sichere Serverstandorte
- regelmaessige Datensicherungen
- Sicherheitsprotokollierung
- Systemueberwachung

## 12. Cookies und Tracking

Wir verwenden Cookies, um technische Funktionen unserer Website bereitzustellen und die Nutzung unserer Dienste zu verbessern.

Einstellungen koennen ueber das Cookie-Banner angepasst werden.

## 13. Aenderungen dieser Datenschutzerklaerung

Wir behalten uns vor, diese Datenschutzerklaerung bei Bedarf zu aktualisieren.

Die jeweils aktuelle Version ist jederzeit ueber unsere Website abrufbar.

**Anbieter / Verantwortlicher**

EViRAL

Inhaber: Mert Oezcan

Friedrich-Ebert-Strasse 322

47139 Duisburg

E-Mail: eviralgermany@gmail.com
`.trim(),
      en: `
## 1. General Information

This privacy policy provides information about the processing of personal data in connection with the use of EViRAL's services.

The processing of personal data is carried out in accordance with the General Data Protection Regulation (GDPR) and applicable national data protection provisions.

Our services include, among other things, solutions in the areas of reputation management, creation and provision of websites, and AI-supported communication solutions, for example telephone assistant systems.

## 2. Categories of Personal Data

Depending on the type of use, we process in particular the following categories of personal data.

**Customer Data (B2B)**

This includes business information provided during registration or use of our services, for example:

- name
- company
- position
- business address
- business phone number
- business email address
- access data (login / username)
- contract data
- tariff information
- contract terms
- invoice data
- internal notes regarding the business relationship

**Payment Data**

For payment processing, payment-related information may be processed, for example:

- payment status
- invoices
- transaction identifiers

Payment processing may be carried out via payment service providers such as Stripe.

We do not receive full credit card data.

Further information:

[https://stripe.com/privacy](https://stripe.com/privacy)

**Platform Usage Data**

This may include:

- logins
- configurations
- used workflows
- created review requests
- activities on landing pages
- browser type
- IP address
- device information
- timestamps
- technical log data

This data is used for analysis, system stability, and system security.

**End-Customer Data of Our Customers**

As part of using our services, our customers may process data of their own customers.

This may include:

- name
- email address
- phone number
- reviews
- feedback
- video testimonials
- reactions of the business owner
- technical metadata

In these cases, our customers act as controllers within the meaning of the GDPR, while EViRAL acts as a processor.

**Data from Phone Calls (AI Phone Assistant)**

As part of our AI-based phone assistance, incoming calls may be processed automatically.

Among other things, the following data may be processed:

- caller phone numbers
- call content or call summaries
- appointment requests or concerns
- date/time and duration of calls
- technical connection data

This data is processed exclusively to provide the respective phone service.

If our customers use the phone assistant to communicate with their own end customers, our customers act as controllers and EViRAL acts as a processor.

**Data of Website Visitors**

As part of the creation or provision of websites, data of website visitors may be processed.

This includes in particular:

- IP addresses
- server log files
- browser information
- device information
- data from contact forms
- usage data of the respective website

The respective website operator is responsible for the content of its website and for processing data of its visitors.

## 3. Purposes of Processing

Personal data is processed in particular for:

- provision and operation of our services
- operation of the reputation management platform
- execution of automated review requests
- analysis and display of reviews
- AI-based response suggestions
- integration of widgets on websites
- management of customer accounts
- billing and payment processing
- IT security and abuse prevention
- customer service and support

In addition, data may be processed for:

- provision and operation of company websites
- technical provision of hosting services
- automated processing of incoming phone calls
- forwarding customer inquiries
- appointment management

For certain functions, AI services of external providers may be used.

## 4. Legal Bases for Processing

**Art. 6(1)(b) GDPR - performance of a contract**

Provision of our services, payment processing, and support.

**Art. 6(1)(f) GDPR - legitimate interest**

Optimization of our systems, IT security, and abuse detection.

**Art. 6(1)(c) GDPR - legal obligation**

e.g. statutory retention obligations under tax law.

For end-customer data of our customers, the legal basis exists in the relationship between the customer and its own end customers.

## 5. Recipients of Personal Data

Recipients of personal data may include:

- hosting providers
- cloud infrastructure providers
- platform providers
- payment service providers (e.g. Stripe)
- communication providers (e.g. WhatsApp API or telephony providers)
- AI service providers
- tax advisors or authorities within the framework of legal obligations

Data processing agreements pursuant to Art. 28 GDPR are in place with all service providers.

## 6. Data Transfers to Third Countries

Some service providers may also process data in third countries such as the USA.

An adequate level of data protection is ensured through suitable safeguards, for example:

- standard contractual clauses under Art. 46 GDPR
- technical and organizational protective measures

When using WhatsApp, data may be processed via Meta Platforms.

Further information:

[https://www.whatsapp.com/legal/privacy-policy/](https://www.whatsapp.com/legal/privacy-policy/)

## 7. Storage Period

Personal data is stored only as long as required for the respective purpose or as long as statutory retention obligations exist.

Typical retention periods:

- contract and payment data: 10 years
- technical log data: 90 days to 1 year
- end-customer data: until deletion by the customer or until end of contract

After expiry, deletion or anonymization is carried out.

## 8. Rights of Data Subjects

Data subjects have the following rights:

- access
- rectification
- erasure
- restriction of processing
- data portability
- objection
- withdrawal of granted consents

Requests may be sent to the contact details listed below.

## 9. Right to Lodge a Complaint

Data subjects have the right to lodge a complaint with a data protection supervisory authority.

Competent supervisory authority:

State Commissioner for Data Protection NRW

Kavalleriestrasse 2-4

40213 Duesseldorf

## 10. Obligation to Provide Data

Certain personal data may be required for concluding a contract and for using our services.

Without providing this data, use of the services may not be possible.

## 11. Data Security

We implement technical and organizational measures to protect personal data, for example:

- TLS encryption
- access and authorization concepts
- secure server locations
- regular backups
- security logging
- system monitoring

## 12. Cookies and Tracking

We use cookies to provide technical functions of our website and to improve use of our services.

Settings can be adjusted via the cookie banner.

## 13. Changes to This Privacy Policy

We reserve the right to update this privacy policy when necessary.

The current version is available at any time via our website.

**Provider / Controller**

EViRAL

Owner: Mert Oezcan

Friedrich-Ebert-Strasse 322

47139 Duisburg

Email: eviralgermany@gmail.com
`.trim(),
    },
  },
};

export function resolveLegalLocale(locale: string): SupportedLocale {
  return locale === 'en' ? 'en' : 'de';
}