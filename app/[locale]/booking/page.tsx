import type { Metadata } from 'next';
import AnimatedSection from '@/components/common/AnimatedSection';
import CalendlyEmbed from '@/components/sections/CalendlyEmbed';

const DEFAULT_CALENDLY_URL = 'https://calendly.com/e-viral-info/30min';
const CALENDLY_URL = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || DEFAULT_CALENDLY_URL;

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDE = locale === 'de';

  return {
    title: isDE ? 'Kostenlose Beratung buchen' : 'Book a Free Consultation',
    description: isDE
      ? 'Wählen Sie einen passenden Termin und buchen Sie Ihre kostenlose Beratung direkt online.'
      : 'Choose a suitable time and book your free consultation directly online.',
  };
}

export default function BookingPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';

  return (
    <div className="pt-16">
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="badge mb-4">{isDE ? 'Terminbuchung' : 'Appointment Booking'}</span>
              <h1 className="section-title mb-3">
                {isDE ? 'Kostenlose Beratung buchen' : 'Book a Free Consultation'}
              </h1>
              <p className="section-subtitle mx-auto">
                {isDE ? 'Wählen Sie einen Termin, der für Sie passt.' : 'Pick a time that works best for you.'}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <CalendlyEmbed
              url={CALENDLY_URL}
              title={isDE ? 'Calendly Terminbuchung' : 'Calendly booking'}
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
