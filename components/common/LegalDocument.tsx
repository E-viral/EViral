import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import AnimatedSection from '@/components/common/AnimatedSection';
import { legalDocuments, resolveLegalLocale, type LegalDocumentKey } from '@/lib/legal-content';

interface LegalDocumentProps {
  documentKey: LegalDocumentKey;
  locale: string;
}

export default function LegalDocument({ documentKey, locale }: LegalDocumentProps) {
  const contentLocale = resolveLegalLocale(locale);
  const document = legalDocuments[documentKey];
  const pageTitle = document.pageTitle[contentLocale];
  const body = document.body[contentLocale];

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <AnimatedSection>
          <h1 className="text-3xl font-black tracking-tight mb-8">{pageTitle}</h1>
        </AnimatedSection>
        <div className="prose prose-sm max-w-none space-y-6 text-gray-700 leading-relaxed">
          <ReactMarkdown
            components={{
              h2: ({ node: _node, ...props }) => <h2 className="text-lg font-bold mb-3 text-black" {...props} />,
              p: ({ node: _node, ...props }) => <p className="leading-relaxed" {...props} />,
              ul: ({ node: _node, ...props }) => <ul className="list-disc pl-5 space-y-2" {...props} />,
              li: ({ node: _node, ...props }) => <li className="pl-1" {...props} />,
              strong: ({ node: _node, ...props }) => <strong className="font-bold text-black" {...props} />,
              a: ({ node: _node, href = '', children, ...props }) => {
                const className = 'underline underline-offset-4 hover:text-black transition-colors';

                if (href.startsWith('/')) {
                  return (
                    <Link href={`/${locale}${href}`} className={className}>
                      {children}
                    </Link>
                  );
                }

                return (
                  <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
                    {children}
                  </a>
                );
              },
            }}
          >
            {body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}