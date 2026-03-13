'use client';
import React, { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'scale';
  once?: boolean;
}

export default function AnimatedSection({
  children, delay = 0, className = '',
  direction = 'up', once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const transforms: Record<string, string> = {
      up:    'translateY(36px)',
      left:  'translateX(36px)',
      right: 'translateX(-36px)',
      scale: 'scale(0.9)',
    };

    el.style.opacity = '0';
    el.style.transform = transforms[direction];
    el.style.transition = `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          if (once) observer.disconnect();
        } else if (!once) {
          el.style.opacity = '0';
          el.style.transform = transforms[direction];
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, once]);

  return <div ref={ref} className={className}>{children}</div>;
}
