'use client';
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props { title?: string; content: string; onClose: () => void; }

export default function ServiceDescriptionModal({ title, content, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handler); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}
           style={{ animation: 'scaleIn 0.3s cubic-bezier(0.22,1,0.36,1)' }}>
        <div className="flex items-center justify-between px-8 py-5 border-b border-[#f0efed]">
          <div>
            <h3 className="font-bold text-[#080808]">{title || 'Leistungsbeschreibung'}</h3>
            <p className="text-xs text-[#aaa]">Vertragsdetails & Konditionen</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl bg-[#f4f3f1] flex items-center justify-center hover:bg-[#e2e0dc] transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="overflow-y-auto px-8 py-6 max-h-[65vh]">
          <pre className="text-xs text-[#555] leading-relaxed whitespace-pre-wrap font-sans">{content}</pre>
        </div>
      </div>
    </div>
  );
}