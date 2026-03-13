'use client';
import React from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';

interface Step { icon: string; title: string; desc: string; num?: string; }
interface Props { steps: Step[]; title?: string; subtitle?: string; dark?: boolean; }

export default function ProcessRoadmap({ steps, title, subtitle, dark }: Props) {
  return (
    <div className="py-16">
      {title && (
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className={`section-title mb-0 ${dark ? 'text-white' : ''}`}>{title}</h2>
            {subtitle && <p className={`section-subtitle mx-auto text-center ${dark ? 'text-gray-400' : ''}`}>{subtitle}</p>}
          </div>
        </AnimatedSection>
      )}
      <div className="grid md:grid-cols-4 gap-6 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
          style={{ background: 'linear-gradient(to right, transparent, var(--border2) 15%, var(--border2) 85%, transparent)' }} />

        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 100} direction="up">
            <div className={`text-center relative px-4 group ${dark ? '' : ''}`}>
              {/* Number bubble */}
              <div className={`relative w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center shadow-lg
                ${dark ? 'bg-white/10 border border-white/20' : 'bg-[var(--black)]'}
                group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                <span className="text-3xl">{step.icon}</span>
                <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center
                  ${dark ? 'bg-[var(--accent)] text-white' : 'bg-[var(--accent)] text-white'}`}>
                  {i + 1}
                </span>
              </div>
              <h4 className={`font-bold text-sm mb-2 tracking-tight ${dark ? 'text-white' : 'text-[var(--black)]'}`}>{step.title}</h4>
              <p className={`text-xs leading-relaxed ${dark ? 'text-gray-400' : 'text-[var(--muted)]'}`}>{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
