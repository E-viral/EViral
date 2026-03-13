'use client';
import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Loader2, Globe } from 'lucide-react';

const TLDS = ['.de', '.com', '.net', '.org', '.io', '.eu'];

export default function DomainChecker() {
  const [query, setQuery] = useState('');
  const [selectedTld, setSelectedTld] = useState('.de');
  const [result, setResult] = useState<{ domain: string; available: boolean } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const check = async () => {
    const d = query.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (!d) return;
    setLoading(true); setError(''); setResult(null);
    try {
      const res = await fetch(`/api/domain-check?domain=${encodeURIComponent(d + selectedTld)}`);
      const data = await res.json();
      if (data.error) { setError(data.error); } else { setResult(data); }
    } catch { setError('Domain check failed. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* TLD selector */}
      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {TLDS.map((tld) => (
          <button key={tld} onClick={() => setSelectedTld(tld)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200
              ${selectedTld === tld
                ? 'bg-[var(--black)] text-white shadow-md'
                : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:border-[var(--border2)] hover:text-[var(--black)]'
              }`}>
            {tld}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Globe size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
            placeholder="yourname"
            className="w-full pl-10 pr-4 py-4 border border-[var(--border)] rounded-xl text-sm focus:outline-none focus:border-[var(--black)] focus:shadow-[0_0_0_3px_rgba(8,8,8,0.08)] transition-all bg-white font-medium"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--muted)]">{selectedTld}</span>
        </div>
        <button onClick={check} disabled={loading || !query.trim()}
          className="btn-primary px-6 disabled:opacity-40 disabled:cursor-not-allowed">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          {loading ? 'Checking...' : 'Check'}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className={`mt-5 rounded-2xl px-6 py-5 flex items-center gap-4 border transition-all duration-300
          ${result.available
            ? 'bg-green-50 border-green-200'
            : 'bg-red-50 border-red-200'}`}>
          {result.available
            ? <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
            : <XCircle size={24} className="text-red-500 flex-shrink-0" />
          }
          <div className="flex-1">
            <p className="font-bold text-sm">{result.domain}</p>
            <p className={`text-sm ${result.available ? 'text-green-700' : 'text-red-700'}`}>
              {result.available ? '✓ Available — this domain can be registered!' : '✗ Taken — this domain is already registered.'}
            </p>
          </div>
          {result.available && (
            <a href={process.env.NEXT_PUBLIC_BOOKING_URL || '#'} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2.5">Register</a>
          )}
        </div>
      )}

      {error && (
        <div className="mt-4 text-center text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3 border border-red-200">{error}</div>
      )}
    </div>
  );
}
