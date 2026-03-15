import type { Metadata } from 'next';
import LegalDocument from '@/components/common/LegalDocument';
import { legalDocuments, resolveLegalLocale } from '@/lib/legal-content';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const contentLocale = resolveLegalLocale(locale);

  return { title: legalDocuments.avv.metadataTitle[contentLocale] };
}

export default function AVVPage({ params: { locale } }: { params: { locale: string } }) {
  return <LegalDocument documentKey="avv" locale={locale} />;
}