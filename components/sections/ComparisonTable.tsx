'use client';
import React from 'react';
import { Check, X } from 'lucide-react';

interface Row { feature: string; values: (boolean | string)[] }
interface Props { headers: string[]; rows: Row[]; }

export default function ComparisonTable({ headers, rows }: Props) {
  const renderValue = (val: boolean | string, isFeatured = false) => {
    if (typeof val === 'boolean') {
      if (val) {
        return (
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isFeatured ? 'bg-white' : 'bg-[var(--black)]'}`}>
            <Check size={12} className={isFeatured ? 'text-[var(--black)]' : 'text-white'} />
          </div>
        );
      }

      return (
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isFeatured ? 'bg-white/15' : 'bg-[var(--surface2)]'}`}>
          <X size={12} className={isFeatured ? 'text-white/80' : 'text-[var(--muted)]'} />
        </div>
      );
    }

    return (
      <span className={`text-sm font-semibold ${isFeatured ? 'text-white' : 'text-[var(--off-black)]'}`}>
        {val}
      </span>
    );
  };

  return (
    <div className="w-full">
      {/* Mobile cards to prevent horizontal overflow */}
      <div className="space-y-3 md:hidden">
        {rows.map((row, i) => (
          <div key={i} className="rounded-2xl border border-[var(--border)] bg-white p-4">
            <h3 className="text-sm font-bold tracking-tight text-[var(--off-black)]">{row.feature}</h3>
            <div className="mt-3 space-y-2">
              {row.values.map((val, j) => {
                const isFeatured = j === 1;
                return (
                  <div
                    key={j}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 ${isFeatured ? 'bg-[var(--black)] text-white' : 'bg-[var(--surface)]'}`}
                  >
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${isFeatured ? 'text-white/75' : 'text-[var(--muted)]'}`}>
                      {headers[j] || `Plan ${j + 1}`}
                    </span>
                    <div className="flex items-center justify-center min-h-6">
                      {renderValue(val, isFeatured)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-[var(--border)]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[var(--surface)]">
              <th className="text-left px-3 lg:px-6 py-4 text-xs font-bold text-[var(--muted)] uppercase tracking-widest border-b border-[var(--border)] min-w-[220px]">
                Feature
              </th>
              {headers.map((h, i) => (
                <th key={i} className={`px-3 lg:px-6 py-4 text-center text-sm font-black tracking-tight border-b border-[var(--border)]
                  ${i === 1 ? 'bg-[var(--black)] text-white' : 'text-[var(--off-black)]'}`}>
                  {h}
                  {i === 1 && <span className="block text-[9px] font-bold text-[var(--accent)] uppercase tracking-widest mt-0.5">Most Popular</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`group border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface)] transition-colors duration-150 ${i % 2 === 0 ? '' : 'bg-[var(--off-white)]'}`}>
                <td className="px-3 lg:px-6 py-4 text-sm font-medium text-[var(--off-black)]">{row.feature}</td>
                {row.values.map((val, j) => (
                  <td key={j} className={`px-3 lg:px-6 py-4 text-center ${j === 1 ? 'bg-[var(--black)]/5' : ''}`}>
                    <div className="flex justify-center">
                      {renderValue(val)}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
