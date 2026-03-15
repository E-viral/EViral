import type { Metadata } from 'next';
import LegalDocument from '@/components/common/LegalDocument';
import { legalDocuments, resolveLegalLocale } from '@/lib/legal-content';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const contentLocale = resolveLegalLocale(locale);

  return { title: legalDocuments.terms.metadataTitle[contentLocale] };
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  return <LegalDocument documentKey="terms" locale={locale} />;
}
