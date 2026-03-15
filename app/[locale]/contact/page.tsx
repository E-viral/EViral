'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Mail, ArrowRight, Loader2, Check } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'general' }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-16">
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <h1 className="section-title mb-4">{isDE ? 'Kontaktieren Sie uns' : 'Get in Touch'}</h1>
              <p className="text-gray-500 mb-10">{isDE ? 'Haben Sie eine Frage? Wir freuen uns von Ihnen zu hören.' : 'Have a question? We\'d love to hear from you.'}</p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center"><Mail size={16} className="text-white" /></div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{isDE ? 'E-Mail' : 'Email'}</div>
                    <a href="mailto:info@e-viral.de" className="font-semibold hover:underline">info@e-viral.de</a>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href={`/${locale}/booking`} className="btn-primary">
                  {isDE ? 'Direkt Termin buchen' : 'Book directly'} <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              {status === 'success' ? (
                <div className="card-sticker flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4"><Check size={28} className="text-white" /></div>
                  <h3 className="text-xl font-bold mb-2">{isDE ? 'Nachricht gesendet!' : 'Message sent!'}</h3>
                  <p className="text-gray-500 text-sm">{isDE ? 'Wir melden uns innerhalb von 24 Stunden.' : 'We\'ll get back to you within 24 hours.'}</p>
                </div>
              ) : (
                <form onSubmit={submit} className="card-sticker space-y-4">
                  {[
                    { key: 'name', label: isDE ? 'Ihr Name' : 'Your Name', type: 'text', required: true },
                    { key: 'email', label: isDE ? 'E-Mail-Adresse' : 'Email Address', type: 'email', required: true },
                    { key: 'phone', label: isDE ? 'Telefon (optional)' : 'Phone (optional)', type: 'tel', required: false },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E0E0E0] rounded-xl text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium mb-1.5">{isDE ? 'Ihre Nachricht' : 'Your Message'}</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E0E0E0] rounded-xl text-sm focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-sm text-red-600">{isDE ? 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.' : 'Something went wrong. Please try again.'}</p>
                  )}
                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center disabled:opacity-50">
                    {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : null}
                    {isDE ? 'Nachricht senden' : 'Send Message'}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
