import React from 'react';

interface CalendlyEmbedProps {
  url: string;
  title?: string;
}

export default function CalendlyEmbed({
  url,
  title = 'Calendly Booking',
}: CalendlyEmbedProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-white shadow-lift">
      <iframe
        src={url}
        title={title}
        className="w-full h-[760px]"
        frameBorder="0"
      />
    </div>
  );
}
