import type { Metadata } from 'next';
import AnimatedSection from '@/components/common/AnimatedSection';
export async function generateMetadata(): Promise<Metadata> { return { title: 'AGB / Terms & Conditions' }; }
export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <AnimatedSection>
          <h1 className="text-3xl font-black tracking-tight mb-8">{isDE ? 'Allgemeine Geschäftsbedingungen (AGB)' : 'Terms & Conditions'}</h1>
          <div className="prose prose-sm max-w-none space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">§ 1 {isDE ? 'Geltungsbereich' : 'Scope'}</h2>
              <p>{isDE ? 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen E-Viral und dem Kunden geschlossen werden. Abweichende Bedingungen des Kunden werden nicht Vertragsbestandteil.' : 'These Terms and Conditions apply to all contracts concluded between E-Viral and the customer. Deviating terms of the customer do not become part of the contract.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">§ 2 {isDE ? 'Vertragsgegenstand' : 'Subject matter'}</h2>
              <p>{isDE ? 'E-Viral erbringt Dienstleistungen im Bereich digitaler Wachstumslösungen, insbesondere Reputationsmanagement, Website-Erstellung und KI-Telefonassistenz, gemäß den jeweiligen Leistungsbeschreibungen.' : 'E-Viral provides services in the field of digital growth solutions, in particular reputation management, website creation and AI telephone assistance, in accordance with the respective service descriptions.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">§ 3 {isDE ? 'Vertragslaufzeit und Kündigung' : 'Contract term and termination'}</h2>
              <p>{isDE ? 'Die Mindestvertragslaufzeit beträgt 24 Monate. Der Vertrag kann mit einer Frist von 3 Monaten zum Ende der jeweiligen Vertragslaufzeit gekündigt werden. Sofern keine fristgerechte Kündigung erfolgt, verlängert sich der Vertrag automatisch um dieselbe Vertragslaufzeit.' : 'The minimum contract term is 24 months. The contract can be terminated with 3 months\' notice before the end of the respective contract term. If no timely termination is made, the contract automatically extends by the same contract term.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">§ 4 {isDE ? 'Preise und Zahlung' : 'Prices and payment'}</h2>
              <p>{isDE ? 'Die Preise ergeben sich aus den jeweils aktuellen Angeboten und Leistungsbeschreibungen. Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt monatlich oder jährlich per Lastschrift oder Überweisung.' : 'The prices are based on the current offers and service descriptions. All prices are exclusive of statutory VAT. Payment is made monthly or annually by direct debit or bank transfer.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">§ 5 {isDE ? 'Haftungsbeschränkung' : 'Limitation of liability'}</h2>
              <p>{isDE ? 'E-Viral haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. Eine weitergehende Haftung ist, soweit gesetzlich zulässig, ausgeschlossen.' : 'E-Viral is only liable for damages based on intentional or grossly negligent behaviour. Further liability is excluded to the extent permitted by law.'}</p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
