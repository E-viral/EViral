'use client';
import React, { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { Link } from '@/lib/navigation';

interface VideoSectionProps {
  locale: string;
  src?: string;
  poster?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
}

const DEFAULT_VIDEO_SRC = '/videos/e-viral-explainer.mp4';
const DEFAULT_VIDEO_POSTER = '/videos/poster.jpg';

export default function VideoSection({
  locale,
  src,
  poster,
  badgeText,
  title,
  subtitle,
}: VideoSectionProps) {
  const isDE = locale === 'de';
  const [failedToLoad, setFailedToLoad] = useState(false);
  const videoSrc = src?.trim() || DEFAULT_VIDEO_SRC;
  const posterSrc = poster?.trim() || DEFAULT_VIDEO_POSTER;
  const sectionBadge = badgeText?.trim() || (isDE ? 'Video-Einblick' : 'Video Overview');
  const sectionTitle = title?.trim() || (isDE ? 'So funktioniert EViral' : 'How EViral Works');
  const sectionSubtitle =
    subtitle?.trim() ||
    (isDE
      ? 'Ein kurzer Überblick über unsere Lösungen für Reputation, Website und KI-Telefonie.'
      : 'A quick overview of our solutions for reputation, websites, and AI phone automation.');

  return (
    <section className="py-20 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="badge mb-4">{sectionBadge}</span>
            <h2 className="section-title mb-3">{sectionTitle}</h2>
            <p className="section-subtitle mx-auto">{sectionSubtitle}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={120}>
          <div className="mx-auto w-full max-w-5xl">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-lift-lg bg-black">
            {failedToLoad ? (
              <div className="aspect-video w-full flex flex-col items-center justify-center text-center px-6 bg-[var(--off-black)] text-white">
                <h3 className="text-xl font-bold mb-2">
                  {isDE ? 'Video aktuell nicht verfügbar' : 'Video is currently unavailable'}
                </h3>
                <p className="text-sm text-gray-300 max-w-xl mb-5">
                  {isDE
                    ? 'Buchen Sie ein Gespräch und wir zeigen Ihnen die Plattform live in einer persönlichen Demo.'
                    : 'Book a call and we will walk you through the platform live in a personal demo.'}
                </p>
                <Link href="/booking" className="btn-primary">
                  {isDE ? 'Demo buchen' : 'Book a Demo'}
                </Link>
              </div>
            ) : (
              <div className="relative aspect-video w-full bg-black">
                <video
                  className="h-full w-full object-contain"
                  controls
                  preload="metadata"
                  playsInline
                  poster={posterSrc}
                  onError={() => setFailedToLoad(true)}
                >
                  <source src={videoSrc} type="video/mp4" />
                  {isDE
                    ? 'Ihr Browser unterstützt das Video-Tag nicht.'
                    : 'Your browser does not support the video tag.'}
                </video>
              </div>
            )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
