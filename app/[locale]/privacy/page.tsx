import type { Metadata } from 'next';
import LegalDocument from '@/components/common/LegalDocument';
import { legalDocuments, resolveLegalLocale } from '@/lib/legal-content';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const contentLocale = resolveLegalLocale(locale);

  return { title: legalDocuments.privacy.metadataTitle[contentLocale] };
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  return <LegalDocument documentKey="privacy" locale={locale} />;
}
