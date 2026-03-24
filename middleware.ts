import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './lib/routing';

const handleI18nRouting = createMiddleware(routing);

const canonicalDeRoutes: Array<{ pattern: RegExp; to: (match: RegExpMatchArray) => string }> = [
  { pattern: /^\/de\/blog\/?$/i, to: () => '/de/beitraege' },
  { pattern: /^\/de\/blog\/([^/]+)\/?$/i, to: (match) => `/de/beitraege/${match[1]}` },
  { pattern: /^\/de\/services\/reputation-management\/?$/i, to: () => '/de/dienstleistungen/reputationsmanagement' },
  { pattern: /^\/de\/services\/websites\/?$/i, to: () => '/de/dienstleistungen/websites' },
  { pattern: /^\/de\/services\/websites\/demo\/([^/]+)\/?$/i, to: (match) => `/de/dienstleistungen/websites/beispiele/${match[1]}` },
  { pattern: /^\/de\/services\/ai-phone-assistant\/?$/i, to: () => '/de/dienstleistungen/ki-telefonassistent' },
];

function getCanonicalDePath(pathname: string): string | null {
  for (const route of canonicalDeRoutes) {
    const match = pathname.match(route.pattern);

    if (match) {
      return route.to(match);
    }
  }

  return null;
}

export default function middleware(request: NextRequest) {
  // Keep locale detection for all routes, but force the bare root to German.
  if (request.nextUrl.pathname === '/') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/de';
    return NextResponse.redirect(redirectUrl, 308);
  }

  const canonicalPath = getCanonicalDePath(request.nextUrl.pathname);

  if (canonicalPath && canonicalPath !== request.nextUrl.pathname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = canonicalPath;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
