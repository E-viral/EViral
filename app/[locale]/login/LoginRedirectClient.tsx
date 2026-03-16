'use client';

import { useEffect } from 'react';

interface LoginRedirectClientProps {
  locale: string;
}

const DEFAULT_LOGIN_URL = 'https://app.e-viral.de/#/login';

function normalizeLoginUrl(url: string | undefined): string | undefined {
  if (!url) {
    return undefined;
  }

  const trimmed = url.trim();

  if (!trimmed) {
    return undefined;
  }

  // .env values with an unquoted "#" can be truncated to just the domain.
  if (/^https?:\/\/app\.e-viral\.de\/?$/i.test(trimmed)) {
    return DEFAULT_LOGIN_URL;
  }

  return trimmed;
}

function withLangParam(url: string, locale: string): string {
  if (locale !== 'de') {
    return url;
  }

  if (/([?&])lang=/.test(url)) {
    return url;
  }

  return `${url}${url.includes('?') ? '&' : '?'}lang=de`;
}

function getLoginUrl(locale: string): string {
  const fallback = normalizeLoginUrl(process.env.NEXT_PUBLIC_LOGIN_URL) || DEFAULT_LOGIN_URL;
  const loginUrlEn = normalizeLoginUrl(process.env.NEXT_PUBLIC_LOGIN_URL_EN);
  const loginUrlDe = normalizeLoginUrl(process.env.NEXT_PUBLIC_LOGIN_URL_DE);

  if (locale === 'de') {
    return loginUrlDe || withLangParam(fallback, locale);
  }

  return loginUrlEn || fallback;
}

export default function LoginRedirectClient({ locale }: LoginRedirectClientProps) {
  const normalizedLocale = locale === 'de' ? 'de' : 'en';
  const loginUrl = getLoginUrl(normalizedLocale);

  useEffect(() => {
    window.location.replace(loginUrl);
  }, [loginUrl]);

  return (
    <div className="pt-24 px-4 pb-16 max-w-2xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-3">
        {normalizedLocale === 'de' ? 'Weiterleitung zum Login...' : 'Redirecting to login...'}
      </h1>
      <p className="text-gray-500 mb-6">
        {normalizedLocale === 'de'
          ? 'Falls die Weiterleitung nicht automatisch startet, nutzen Sie bitte den Link unten.'
          : 'If the redirect does not start automatically, please use the link below.'}
      </p>
      <a href={loginUrl} className="btn-primary inline-flex">
        {normalizedLocale === 'de' ? 'Zum Login' : 'Go to Login'}
      </a>
    </div>
  );
}
