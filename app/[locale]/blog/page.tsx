import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';
import { ArrowRight, Calendar } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return { title: locale === 'de' ? 'Blog' : 'Blog' };
}

// Static blog posts (fallback if no DB)
const staticPosts = [
  {
    slug: 'why-online-reviews-matter-2025',
    locale: 'en',
    title: 'Why Online Reviews Can Make or Break Your Business in 2025',
    excerpt: 'Online reviews have become the digital word-of-mouth that shapes purchasing decisions. Discover why reputation management is no longer optional.',
    category: 'reputation',
    createdAt: '2025-01-15',
  },
  {
    slug: 'ai-phone-assistants-customer-service',
    locale: 'en',
    title: 'How AI Phone Assistants Are Transforming Customer Service',
    excerpt: 'Every missed call is a missed opportunity. AI phone assistants are changing how businesses handle inbound calls — here\'s what you need to know.',
    category: 'ai',
    createdAt: '2025-01-22',
  },
  {
    slug: '5-reasons-professional-website',
    locale: 'en',
    title: '5 Reasons Every Local Business Needs a Professional Website in 2025',
    excerpt: 'Still without a professional website? Here\'s why it\'s costing your business more than you think — and what you can do about it today.',
    category: 'websites',
    createdAt: '2025-02-01',
  },
  {
    slug: 'warum-online-bewertungen-entscheidend',
    locale: 'de',
    title: 'Warum Online-Bewertungen über Ihren Unternehmenserfolg entscheiden',
    excerpt: 'Online-Bewertungen sind das digitale Mund-zu-Mund-Propaganda unserer Zeit. Erfahren Sie, warum Reputationsmanagement heute unverzichtbar ist.',
    category: 'reputation',
    createdAt: '2025-01-15',
  },
  {
    slug: 'ki-telefonassistenten-zukunft',
    locale: 'de',
    title: 'KI-Telefonassistenten: Warum kein Anruf mehr unbeantwortet bleiben sollte',
    excerpt: 'Jeder verpasste Anruf ist ein verlorener Kunde. KI-Telefonassistenten revolutionieren die Kundenkommunikation – so funktioniert es.',
    category: 'ai',
    createdAt: '2025-01-22',
  },
  {
    slug: 'professionelle-website-5-gruende',
    locale: 'de',
    title: '5 Gründe, warum jedes Unternehmen eine professionelle Website braucht',
    excerpt: 'Noch ohne professionelle Website? So viel kostet Sie das – und was Sie heute dagegen tun können.',
    category: 'websites',
    createdAt: '2025-02-01',
  },
];

const categoryLabels: Record<string, Record<string, string>> = {
  en: { all: 'All', reputation: 'Reputation', ai: 'AI & Automation', websites: 'Websites', marketing: 'Marketing' },
  de: { all: 'Alle', reputation: 'Reputation', ai: 'KI & Automatisierung', websites: 'Websites', marketing: 'Marketing' },
};

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  const localePosts = staticPosts.filter((p) => p.locale === locale);
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
            <AnimatedSection key={post.slug} delay={i * 80}>
              <Link href={`/${locale}/blog/${post.slug}`} className="card-sticker flex flex-col h-full group">
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
