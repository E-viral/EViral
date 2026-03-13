'use client';
import React, { useState } from 'react';
import { Check, X, Info, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ServiceDescriptionModal from './ServiceDescriptionModal';

interface Feature { label: string; included: boolean; }
interface Plan {
  name: string; price: number; yearlyPrice?: number; setupFee?: number;
  badge?: string; description?: string; features: Feature[]; minutes?: number; extraMin?: string;
}
interface Props { plans: Plan[]; showSetupFee?: boolean; }

export default function PricingCards({ plans, showSetupFee }: Props) {
  const [yearly, setYearly] = useState(false);
  const [modalPlan, setModalPlan] = useState<Plan | null>(null);

  return (
    <>
      {/* Toggle */}
      <AnimatedSection>
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={`text-sm font-semibold transition-colors ${!yearly ? 'text-[var(--black)]' : 'text-[var(--muted)]'}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none ${yearly ? 'bg-[var(--black)]' : 'bg-[var(--border2)]'}`}
          >
            <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 ${yearly ? 'translate-x-7' : 'translate-x-0.5'}`} />
          </button>
          <span className={`text-sm font-semibold transition-colors ${yearly ? 'text-[var(--black)]' : 'text-[var(--muted)]'}`}>
            Yearly
          </span>
          {yearly && (
            <span className="badge-accent text-[10px] animate-[fadeIn_0.3s_ease_both]">Save ~10%</span>
          )}
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => {
          const isFeatured = !!plan.badge;
          const price = yearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price;

          return (
            <AnimatedSection key={i} delay={i * 100} direction="up">
              <div className={`relative rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-300
                ${isFeatured
                  ? 'bg-[var(--off-black)] border-2 border-[var(--accent)] shadow-[0_0_60px_rgba(232,100,42,0.2)] scale-[1.02]'
                  : 'bg-white border border-[var(--border)] hover:border-[var(--border2)] hover:shadow-lift hover:-translate-y-2'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <span className="badge-accent text-[10px] rounded-t-none rounded-b-xl px-5 py-1.5">{plan.badge}</span>
                  </div>
                )}

                <div className={`p-7 flex flex-col flex-1 ${plan.badge ? 'pt-10' : ''}`}>
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-black tracking-tight mb-1 ${isFeatured ? 'text-white' : ''}`}>{plan.name}</h3>
                    {plan.minutes && (
                      <p className={`text-xs ${isFeatured ? 'text-gray-400' : 'text-[var(--muted)]'}`}>
                        {plan.minutes.toLocaleString()} min/mo · {plan.extraMin}/extra min
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-7">
                    <div className="flex items-end gap-1 mb-1">
                      <span className={`text-5xl font-black tracking-tighter leading-none ${isFeatured ? 'text-white' : ''}`}>
                        €{price % 1 === 0 ? price : price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className={`text-sm pb-1 ${isFeatured ? 'text-gray-400' : 'text-[var(--muted)]'}`}>/mo</span>
                    </div>
                    {showSetupFee && plan.setupFee && (
                      <p className={`text-xs ${isFeatured ? 'text-gray-400' : 'text-[var(--muted)]'}`}>
                        + €{plan.setupFee} {typeof window !== 'undefined' && document.documentElement.lang === 'de' ? 'einmalig' : 'setup fee'}
                      </p>
                    )}
                    {yearly && plan.yearlyPrice && (
                      <p className="text-xs text-green-500 font-semibold mt-1">
                        Save €{Math.round((plan.price - plan.yearlyPrice) * 12)}/yr
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <a href={process.env.NEXT_PUBLIC_BOOKING_URL || '#'} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm mb-6 transition-all duration-250
                      ${isFeatured
                        ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent2)] hover:shadow-lg hover:-translate-y-0.5'
                        : 'bg-[var(--black)] text-white hover:bg-[var(--off-black)] hover:shadow-md hover:-translate-y-0.5'
                      }`}
                  >
                    Get started <ArrowRight size={14} />
                  </a>

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                          ${f.included
                            ? isFeatured ? 'bg-[var(--accent)]/20' : 'bg-[var(--black)]'
                            : 'bg-[var(--surface2)]'
                          }`}>
                          {f.included
                            ? <Check size={10} className={isFeatured ? 'text-[var(--accent)]' : 'text-white'} />
                            : <X size={10} className="text-[var(--muted)]" />
                          }
                        </div>
                        <span className={`text-xs leading-snug ${
                          f.included
                            ? isFeatured ? 'text-gray-200' : 'text-[var(--off-black)]'
                            : isFeatured ? 'text-gray-500 line-through' : 'text-[var(--muted)] line-through'
                        }`}>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Service description link */}
                  {plan.description && (
                    <button onClick={() => setModalPlan(plan)}
                      className={`mt-6 flex items-center gap-1.5 text-xs font-medium hover:underline transition-colors ${isFeatured ? 'text-gray-400 hover:text-gray-200' : 'text-[var(--muted)] hover:text-[var(--black)]'}`}>
                      <Info size={12} /> View full service description
                    </button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {modalPlan && (
        <ServiceDescriptionModal
          title={modalPlan.name}
          content={modalPlan.description || ''}
          onClose={() => setModalPlan(null)}
        />
      )}
    </>
  );
}
