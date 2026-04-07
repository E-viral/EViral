import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import AnimatedSection from '@/components/common/AnimatedSection';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Impressum' : 'Legal Notice / Imprint' };
}

const imprintBody = {
  de: `EViRAL - Mert Özcan

Friedrich-Ebert-Straße 322

47139 Duisburg

Deutschland

## Inhaber

Mert Özcan

## Kontakt

E-Mail: [info@eviral.de](mailto:info@eviral.de)

## USt-IdNr.

DE356241698

## Verantwortlich fuer den Inhalt nach § 18 Abs. 2 MStV

Mert Özcan

Friedrich-Ebert-Straße 322

47139 Duisburg

## Haftung fuer Inhalte

Als Diensteanbieter sind wir gemaess den allgemeinen Gesetzen fuer eigene Inhalte auf diesen Seiten verantwortlich.

Wir sind jedoch nicht verpflichtet, uebermittelte oder gespeicherte fremde Informationen zu ueberwachen oder nach Umstaenden zu forschen, die auf eine rechtswidrige Taetigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberuehrt.

Eine Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moeglich.

Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.

## Haftung fuer Links

Unsere Website enthaelt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.

Deshalb koennen wir fuer diese fremden Inhalte auch keine Gewaehr uebernehmen.

Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.

Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar.

Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.

Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

## Urheberrecht

Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.

Die Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts beduerfen der schriftlichen Zustimmung des jeweiligen Autors.

Downloads und Kopien dieser Seite sind nur fuer den privaten, nicht kommerziellen Gebrauch gestattet.

Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.

Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.

Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

## Bild- und Markenrechte

Alle verwendeten Marken- und Produktnamen sind Eigentum der jeweiligen Rechteinhaber.

Die verwendeten Bilder und Videos unterliegen den jeweiligen Lizenzbedingungen und duerfen ohne entsprechende Genehmigung nicht weiterverwendet werden.`,
  en: `EViRAL - Mert Özcan

Friedrich-Ebert-Straße 322

47139 Duisburg

Germany

## Owner

Mert Özcan

## Contact

Email: [info@eviral.de](mailto:info@eviral.de)

## VAT ID

DE356241698

## Responsible for the content according to § 18 para. 2 MStV

Mert Özcan

Friedrich-Ebert-Straße 322

47139 Duisburg

## Liability for content

As a service provider, we are responsible for our own content on these pages in accordance with general laws.

However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.

Obligations to remove or block the use of information under general laws remain unaffected.

However, liability is only possible from the point in time when a specific legal violation becomes known.

Upon becoming aware of any legal infringements, we will remove this content immediately.

## Liability for links

Our website contains links to external websites of third parties, over whose content we have no influence.

We assume no responsibility for this external content.

The respective provider or operator is always responsible for the content of the linked pages.

No illegal content was apparent at the time the link was created.

Constant monitoring of linked pages is unreasonable without concrete evidence of a legal violation.

Upon notification of legal infringements, we will remove such links immediately.

## Copyright

The content and works created by the operator of this website are subject to German copyright law.

Reproduction, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author.

Downloads and copies of this page are permitted for private use only.

Where content on this page was not created by the operator, the copyrights of third parties are respected.

If you become aware of a copyright infringement, please let us know.

Upon becoming aware of any legal infringements, we will remove such content immediately.

## Image and trademark rights

All trademarks and product names used are the property of their respective owners.

The images and videos used are subject to their respective license terms and may not be reused without permission.`,
};

export default function ImprintPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  const content = isDE ? imprintBody.de : imprintBody.en;

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <AnimatedSection>
          <h1 className="text-3xl font-black tracking-tight mb-8">{isDE ? 'Impressum' : 'Legal Notice / Imprint'}</h1>
        </AnimatedSection>
        <div className="prose prose-sm max-w-none space-y-6 text-gray-700 leading-relaxed">
          <ReactMarkdown
            components={{
              h2: ({ node: _node, ...props }) => <h2 className="text-lg font-bold mb-3 text-black" {...props} />,
              p: ({ node: _node, ...props }) => <p className="leading-relaxed" {...props} />,
              a: ({ node: _node, href = '', children, ...props }) => (
                <a href={href} className="underline underline-offset-4 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer" {...props}>
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
