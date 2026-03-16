'use client';

import type { ComponentProps } from 'react';
import { useParams } from 'next/navigation';
import { Link, usePathname } from '@/lib/navigation';
import { getLocaleSwitchHref } from '@/lib/locale-switch';
import type { AppLocale } from '@/lib/routing';

type LocaleSwitchLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'locale'> & {
  currentLocale: AppLocale;
  targetLocale: AppLocale;
};

export default function LocaleSwitchLink({ currentLocale, targetLocale, ...props }: LocaleSwitchLinkProps) {
  const pathname = usePathname();
  const params = useParams();
  const href = getLocaleSwitchHref(
    pathname,
    params as Record<string, string | string[] | undefined>,
    currentLocale,
    targetLocale
  );

  return <Link {...props} href={href} locale={targetLocale} />;
}