'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';

interface FAQItem { q: string; a: string; }
interface Props { items: FAQItem[]; title?: string; }

export default function FAQAccordion({ items, title }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="py-16">
      {title && (
        <AnimatedSection>
          <h2 className="section-title text-center mb-12">{title}</h2>
        </AnimatedSection>
      )}
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 50}>
            <div className={`rounded-2xl border overflow-hidden transition-all duration-300
              ${open === i
                ? 'border-[var(--black)] shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
                : 'border-[var(--border)] hover:border-[var(--border2)]'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
              >
                <span className={`text-sm font-bold tracking-tight leading-snug transition-colors ${open === i ? 'text-[var(--black)]' : 'text-[var(--off-black)] group-hover:text-[var(--black)]'}`}>
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                  ${open === i ? 'bg-[var(--black)] rotate-0' : 'bg-[var(--surface2)] group-hover:bg-[var(--border2)]'}`}>
                  {open === i
                    ? <Minus size={14} className="text-white" />
                    : <Plus size={14} className="text-[var(--off-black)]" />
                  }
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease' }}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-[var(--border)] mb-4" />
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
