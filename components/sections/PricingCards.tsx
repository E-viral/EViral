'use client';
import React, { useState } from 'react';
import { Check, X, Info, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import ServiceDescriptionModal from './ServiceDescriptionModal';
import { Link, type AppHref } from '@/lib/navigation';

interface Feature { label: string; included: boolean; }
type BillingMode = 'monthly' | 'yearly';
interface PlanPaymentLinks {
  monthly?: string;
  yearly?: string;
}
interface Plan {
  name: string; price: number; yearlyPrice?: number; setupFee?: number;
  badge?: string; description?: string; features: Feature[]; cardHighlights?: string[]; minutes?: number; extraMin?: string;
}
interface Props {
  plans: Plan[];
  showSetupFee?: boolean;
  bookingHref?: AppHref;
  paymentLinks?: Record<string, PlanPaymentLinks>;
}

export default function PricingCards({ plans, showSetupFee, bookingHref = '/booking', paymentLinks }: Props) {
  const [yearly, setYearly] = useState(false);
  const [modalPlan, setModalPlan] = useState<Plan | null>(null);
  const [ctaErrors, setCtaErrors] = useState<Record<string, string>>({});

  const usesDirectCheckout = paymentLinks !== undefined;
  const hasYearlySavings = plans.some((plan) => {
    const yearlyMonthlyPrice = plan.yearlyPrice ?? Number((plan.price * 0.9).toFixed(2));
    return yearlyMonthlyPrice < plan.price;
  });

  const getMissingLinkMessage = () => {
    if (typeof document !== 'undefined' && document.documentElement.lang === 'de') {
      return 'Zahlungslink ist derzeit nicht verfuegbar. Bitte kontaktieren Sie uns.';
    }
    return 'Payment link is currently unavailable. Please contact us.';
  };

  const clearPlanError = (planName: string) => {
    setCtaErrors((prev) => {
      if (!prev[planName]) {
        return prev;
      }
      const next = { ...prev };
      delete next[planName];
      return next;
    });
  };

  const formatEuro = (value: number) => {
    const fractionDigits = Number.isInteger(value) ? 0 : 2;
    return value.toLocaleString('de-DE', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      {/* Toggle */}
      <AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center p-1 rounded-full bg-[var(--surface2)] border border-[var(--border2)]">
            <button
              type="button"
              onClick={() => {
                setYearly(false);
                setCtaErrors({});
              }}
              className={`h-9 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${!yearly ? 'bg-[var(--black)] text-white shadow-sm' : 'text-[var(--muted)] hover:text-[var(--black)]'}`}
              aria-pressed={!yearly}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => {
                setYearly(true);
                setCtaErrors({});
              }}
              className={`h-9 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${yearly ? 'bg-[var(--black)] text-white shadow-sm' : 'text-[var(--muted)] hover:text-[var(--black)]'}`}
              aria-pressed={yearly}
            >
              Yearly
            </button>
          </div>
          {yearly && hasYearlySavings && (
            <span className="badge-accent text-[10px] animate-[fadeIn_0.3s_ease_both]">Save ~10%</span>
          )}
        </div>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => {
          const isFeatured = !!plan.badge;
          const billingMode: BillingMode = yearly ? 'yearly' : 'monthly';
          const monthlyPrice = plan.price;
          const effectiveYearlyMonthlyPrice = plan.yearlyPrice ?? Number((plan.price * 0.9).toFixed(2));
          const effectiveYearlyAnnualPrice = Number((effectiveYearlyMonthlyPrice * 12).toFixed(2));
          const price = yearly ? effectiveYearlyMonthlyPrice : monthlyPrice;
          const billingLabel = '/mo';
          const checkoutHref = paymentLinks?.[plan.name]?.[billingMode];
          const planError = ctaErrors[plan.name];
          const ctaClassName = `flex items-center justify-center gap-2 w-full h-12 rounded-xl font-bold text-sm flex-shrink-0 transition-all duration-200
            ${isFeatured
              ? 'bg-[var(--accent)] text-white hover:bg-[var(--accent2)] hover:shadow-lg'
              : 'bg-[var(--black)] text-white hover:bg-[var(--off-black)] hover:shadow-md'
            }`;

          return (
            <AnimatedSection key={i} delay={i * 100} direction="up">
              <div className={`relative rounded-3xl overflow-hidden min-w-0 h-full flex flex-col transition-all duration-300
                ${isFeatured
                  ? 'bg-[var(--off-black)] border-2 border-[var(--accent)] shadow-[0_0_60px_rgba(232,100,42,0.2)]'
                  : 'bg-white border border-[var(--border)] hover:border-[var(--border2)] hover:shadow-lift'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <span className="badge-accent text-[10px] rounded-t-none rounded-b-xl px-5 py-1.5">{plan.badge}</span>
                  </div>
                )}

                <div className={`p-5 sm:p-7 flex flex-col flex-1 ${plan.badge ? 'pt-10' : ''}`}>
                  {/* Header — fixed height so all cards stay aligned */}
                  <div className="mb-4 h-auto min-h-14">
                    <h3 className={`text-lg sm:text-xl font-black tracking-tight leading-tight break-words mb-1 ${isFeatured ? 'text-white' : ''}`}>{plan.name}</h3>
                    {plan.minutes && (
                      <p className={`text-xs ${isFeatured ? 'text-gray-400' : 'text-[var(--muted)]'}`}>
                        {plan.minutes.toLocaleString()} min/mo · {plan.extraMin}/extra min
                      </p>
                    )}
                  </div>

                  {/* Price — fixed height so all cards stay aligned */}
                  <div className="mb-6 h-24 sm:h-28">
                    <div className="flex items-end gap-1 mb-1">
                      <span className={`text-4xl sm:text-5xl font-black tracking-tighter leading-none ${isFeatured ? 'text-white' : ''}`}>
                        €{formatEuro(price)}
                      </span>
                      <span className={`text-sm pb-1 ${isFeatured ? 'text-gray-400' : 'text-[var(--muted)]'}`}>{billingLabel}</span>
                    </div>
                    {yearly && (
                      <p className={`text-xs ${isFeatured ? 'text-gray-400' : 'text-[var(--muted)]'}`}>
                        €{formatEuro(effectiveYearlyAnnualPrice)} /year billed annually
                      </p>
                    )}
                    {showSetupFee && plan.setupFee && (
                      <p className={`text-xs ${isFeatured ? 'text-gray-400' : 'text-[var(--muted)]'}`}>
                        + €{plan.setupFee} {typeof window !== 'undefined' && document.documentElement.lang === 'de' ? 'einmalig' : 'setup fee'}
                      </p>
                    )}
                    {yearly && effectiveYearlyMonthlyPrice < monthlyPrice && (
                      <p className="text-xs text-green-500 font-semibold mt-1">
                        Save €{Math.round((monthlyPrice - effectiveYearlyMonthlyPrice) * 12)}/yr
                      </p>
                    )}
                  </div>

                  {/* CTA — fixed height, always in the same position */}
                  <div className="mb-7 flex-shrink-0">
                    {usesDirectCheckout ? (
                      checkoutHref ? (
                        <a
                          href={checkoutHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => clearPlanError(plan.name)}
                          className={ctaClassName}
                        >
                          Get started <ArrowRight size={14} />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setCtaErrors((prev) => ({
                              ...prev,
                              [plan.name]: getMissingLinkMessage(),
                            }));
                          }}
                          className={ctaClassName}
                        >
                          Get started <ArrowRight size={14} />
                        </button>
                      )
                    ) : (
                      <Link href={bookingHref} onClick={() => clearPlanError(plan.name)} className={ctaClassName}>
                        Get started <ArrowRight size={14} />
                      </Link>
                    )}
                    {planError && (
                      <p className={`mt-2 text-xs font-medium ${isFeatured ? 'text-red-300' : 'text-red-600'}`}>
                        {planError}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.cardHighlights && plan.cardHighlights.length > 0 ? (
                      plan.cardHighlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isFeatured ? 'bg-[var(--accent)]/20' : 'bg-[var(--black)]'}`}>
                            <Check size={10} className={isFeatured ? 'text-[var(--accent)]' : 'text-white'} />
                          </div>
                          <span className={`text-xs leading-snug ${isFeatured ? 'text-gray-200' : 'text-[var(--off-black)]'}`}>{highlight}</span>
                        </li>
                      ))
                    ) : (
                      plan.features.map((f, j) => (
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
                      ))
                    )}
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
