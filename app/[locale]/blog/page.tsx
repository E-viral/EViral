import type { Metadata } from 'next';
import { Link } from '@/lib/navigation';
import AnimatedSection from '@/components/common/AnimatedSection';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '@/lib/blog-content';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Blog' : 'Blog' };
}

const categoryLabels: Record<string, Record<string, string>> = {
  en: { all: 'All', reputation: 'Reputation', ai: 'AI & Automation', websites: 'Websites', marketing: 'Marketing' },
  de: { all: 'Alle', reputation: 'Reputation', ai: 'KI & Automatisierung', websites: 'Websites', marketing: 'Marketing' },
};

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  const localeKey: 'de' | 'en' = isDE ? 'de' : 'en';
  const localePosts = blogPosts.map((post) => ({
    id: post.id,
    slug: post.slug[localeKey],
    title: post.title[localeKey],
    excerpt: post.excerpt[localeKey],
    category: post.category,
    createdAt: post.createdAt,
  }));
  const labels = categoryLabels[locale] || categoryLabels.en;

  return (
    <div className="pt-16">
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-5xl font-black tracking-tighter mb-4">
              {isDE ? 'Insights für digitales Wachstum' : 'Insights for Digital Growth'}
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl">
              {isDE ? 'Tipps, Strategien und Trends rund um Reputationsmanagement, KI und digitales Marketing.' : 'Tips, strategies, and trends on reputation management, AI, and digital marketing.'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localePosts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 80}>
              <Link href={{ pathname: '/blog/[slug]', params: { slug: post.slug } }} className="card-sticker flex flex-col h-full group">
                <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl">
                    {post.category === 'reputation' ? '⭐' : post.category === 'ai' ? '🤖' : post.category === 'websites' ? '🌐' : '📊'}
                  </span>
                </div>
                <span className="badge-outline text-xs mb-3 self-start">{labels[post.category] || post.category}</span>
                <h2 className="font-bold text-base mb-3 leading-snug group-hover:underline">{post.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar size={12} />
                    {new Date(post.createdAt).toLocaleDateString(isDE ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <span className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isDE ? 'Weiterlesen' : 'Read more'} <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
