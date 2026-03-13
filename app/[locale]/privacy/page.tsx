import type { Metadata } from 'next';
import AnimatedSection from '@/components/common/AnimatedSection';
export async function generateMetadata(): Promise<Metadata> { return { title: 'Datenschutz / Privacy Policy' }; }
export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <AnimatedSection>
          <h1 className="text-3xl font-black tracking-tight mb-8">{isDE ? 'Datenschutzerklärung' : 'Privacy Policy'}</h1>
          <div className="prose prose-sm max-w-none space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">1. {isDE ? 'Datenschutz auf einen Blick' : 'Privacy at a glance'}</h2>
              <p>{isDE ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.' : 'The following notes provide a simple overview of what happens to your personal data when you visit this website.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">2. {isDE ? 'Verantwortlicher' : 'Controller'}</h2>
              <p>{isDE ? 'Verantwortlich für die Datenverarbeitung auf dieser Website ist E-Viral. Sie erreichen uns unter info@e-viral.de.' : 'The controller responsible for data processing on this website is E-Viral. You can reach us at info@e-viral.de.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">3. {isDE ? 'Datenerfassung auf dieser Website' : 'Data collection on this website'}</h2>
              <p>{isDE ? 'Wenn Sie über unsere Website eine Anfrage an uns richten, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.' : 'When you send us an enquiry via our website, your details from the enquiry form, including the contact details you provide there, are stored by us for the purpose of processing the enquiry and in case of follow-up questions. We do not share this data without your consent.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">4. {isDE ? 'Ihre Rechte' : 'Your rights'}</h2>
              <p>{isDE ? 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Bitte wenden Sie sich dazu an info@e-viral.de.' : 'You have the right at any time to request information free of charge about your stored personal data, its origin and recipient and the purpose of data processing, as well as a right to correction or deletion of this data. Please contact info@e-viral.de for this.'}</p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
