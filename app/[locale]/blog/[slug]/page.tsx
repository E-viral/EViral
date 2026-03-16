import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from '@/lib/navigation';
import ReactMarkdown from 'react-markdown';
import AnimatedSection from '@/components/common/AnimatedSection';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-content';

const categoryLabels: Record<'en' | 'de', Record<string, string>> = {
  en: { reputation: 'Reputation', ai: 'AI & Automation', websites: 'Websites' },
  de: { reputation: 'Reputation', ai: 'KI & Automatisierung', websites: 'Websites' },
};

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const localeKey: 'de' | 'en' = params.locale === 'de' ? 'de' : 'en';
  const post = getBlogPostBySlug(params.slug, localeKey);
  return { title: post?.title[localeKey] || 'Blog Post' };
}

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const isDE = params.locale === 'de';
  const localeKey: 'de' | 'en' = isDE ? 'de' : 'en';
  const post = getBlogPostBySlug(params.slug, localeKey);

  if (!post) {
    notFound();
  }
  const labels = categoryLabels[localeKey];

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <AnimatedSection>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-8 transition-colors">
            <ArrowLeft size={14} /> {isDE ? 'Zurück zum Blog' : 'Back to Blog'}
          </Link>
          <span className="badge-outline text-xs mb-4 block w-fit">{labels[post.category]}</span>
          <h1 className="text-4xl font-black tracking-tighter mb-4">{post.title[localeKey]}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-10 pb-8 border-b border-[#E0E0E0]">
            <Calendar size={14} />
            {new Date(post.createdAt).toLocaleDateString(isDE ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <ReactMarkdown
              components={{
                h2: ({ node: _node, ...props }) => <h2 className="text-2xl font-bold tracking-tight mt-10 mb-4 text-black" {...props} />,
                p: ({ node: _node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                ul: ({ node: _node, ...props }) => <ul className="list-disc pl-5 space-y-2 mb-4" {...props} />,
                li: ({ node: _node, ...props }) => <li className="text-gray-700" {...props} />,
                strong: ({ node: _node, ...props }) => <strong className="font-bold text-black" {...props} />,
                a: ({ node: _node, href = '', children, ...props }) => {
                  const className = 'underline underline-offset-4 hover:text-black transition-colors';

                  if (href.startsWith('/')) {
                    return (
                      <Link href={href as '/contact' | '/services/websites' | '/services/ai-phone-assistant'} className={className}>
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
              {post.content[localeKey]}
            </ReactMarkdown>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
