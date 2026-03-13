'use client';
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

const platforms = [
  { name: 'Google', emoji: '🔵', color: 'hover:border-blue-400' },
  { name: 'Yelp', emoji: '⭐', color: 'hover:border-red-400' },
  { name: 'Booking.com', emoji: '🏨', color: 'hover:border-blue-600' },
  { name: 'TripAdvisor', emoji: '🦉', color: 'hover:border-green-500' },
  { name: 'Trustpilot', emoji: '✅', color: 'hover:border-green-400' },
  { name: 'Facebook', emoji: '📘', color: 'hover:border-blue-500' },
  { name: 'Airbnb', emoji: '🏠', color: 'hover:border-pink-500' },
  { name: 'Glassdoor', emoji: '🚪', color: 'hover:border-green-600' },
  { name: 'Kununu', emoji: '💼', color: 'hover:border-teal-500' },
  { name: 'Indeed', emoji: '🔍', color: 'hover:border-indigo-400' },
  { name: 'Jameda', emoji: '⚕️', color: 'hover:border-cyan-400' },
  { name: 'Trustindex', emoji: '📊', color: 'hover:border-purple-400' },
  { name: 'App Store', emoji: '🍎', color: 'hover:border-gray-400' },
  { name: 'Google Play', emoji: '🤖', color: 'hover:border-green-400' },
  { name: 'Expedia', emoji: '✈️', color: 'hover:border-yellow-400' },
  { name: 'Agoda', emoji: '🏖️', color: 'hover:border-red-400' },
  { name: 'Zillow', emoji: '🏡', color: 'hover:border-blue-400' },
  { name: 'BBB', emoji: '🏆', color: 'hover:border-blue-800' },
];

interface Props { title?: string; }

export default function PlatformIntegrations({ title }: Props) {
  return (
    <div className="py-12">
      {title && (
        <AnimatedSection>
          <h2 className="section-title text-center mb-10">{title}</h2>
        </AnimatedSection>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {platforms.map((p, i) => (
          <AnimatedSection key={i} delay={i * 30} direction="scale">
            <div className={`card-sticker p-4 flex flex-col items-center gap-2 text-center cursor-default border border-[var(--border)] ${p.color} transition-colors duration-200`}>
              <span className="text-2xl">{p.emoji}</span>
              <span className="text-[10px] font-bold text-[var(--muted)] leading-tight">{p.name}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
