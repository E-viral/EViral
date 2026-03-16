import { createNavigation } from 'next-intl/navigation';
import { routing, type AppLocale } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export type AppHref = Parameters<typeof getPathname>[0]['href'];

export function getLocalizedPath(locale: AppLocale, href: AppHref) {
  return getPathname({ locale, href });
}