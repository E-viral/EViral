'use client';
import React from 'react';
import { Check, X } from 'lucide-react';

interface Row { feature: string; values: (boolean | string)[] }
interface Props { headers: string[]; rows: Row[]; }

export default function ComparisonTable({ headers, rows }: Props) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-[var(--border)]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[var(--surface)]">
            <th className="text-left px-6 py-4 text-xs font-bold text-[var(--muted)] uppercase tracking-widest w-[40%] border-b border-[var(--border)]">
              Feature
            </th>
            {headers.map((h, i) => (
              <th key={i} className={`px-6 py-4 text-center text-sm font-black tracking-tight border-b border-[var(--border)]
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
              <td className="px-6 py-4 text-sm font-medium text-[var(--off-black)]">{row.feature}</td>
              {row.values.map((val, j) => (
                <td key={j} className={`px-6 py-4 text-center ${j === 1 ? 'bg-[var(--black)]/5' : ''}`}>
                  {typeof val === 'boolean' ? (
                    <div className="flex justify-center">
                      {val
                        ? <div className="w-6 h-6 rounded-full bg-[var(--black)] flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                        : <div className="w-6 h-6 rounded-full bg-[var(--surface2)] flex items-center justify-center">
                            <X size={12} className="text-[var(--muted)]" />
                          </div>
                      }
                    </div>
                  ) : (
                    <span className="text-sm font-semibold text-[var(--off-black)]">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
