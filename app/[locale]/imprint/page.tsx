import type { Metadata } from 'next';
import AnimatedSection from '@/components/common/AnimatedSection';
export async function generateMetadata(): Promise<Metadata> { return { title: 'Impressum / Imprint' }; }
export default function ImprintPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <AnimatedSection>
          <h1 className="text-3xl font-black tracking-tight mb-8">{isDE ? 'Impressum' : 'Legal Notice / Imprint'}</h1>
          <div className="prose prose-sm max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">{isDE ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to § 5 TMG'}</h2>
              <p>E-Viral<br />info@e-viral.de</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">{isDE ? 'Kontakt' : 'Contact'}</h2>
              <p>E-Mail: <a href="mailto:info@e-viral.de" className="underline">info@e-viral.de</a></p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">{isDE ? 'Haftung für Inhalte' : 'Liability for content'}</h2>
              <p>{isDE ? 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.' : 'As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Para. 1 TMG. According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity.'}</p>
            </section>
            <section>
              <h2 className="text-lg font-bold mb-3 text-black">{isDE ? 'EU-Streitschlichtung' : 'EU dispute resolution'}</h2>
              <p>{isDE ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.' : 'The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. Our email address can be found in the imprint above.'}</p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
