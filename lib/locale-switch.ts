import type { AppHref } from './navigation';
import { getBlogPostBySlug } from './blog-content';
import { getWebsiteDemoBySlug, getWebsiteDemoSlug } from './website-demo-data';
import type { AppLocale } from './routing';

type RouteParams = Record<string, string | string[] | undefined>;

function getFirstParam(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export function getLocaleSwitchHref(
  pathname: string,
  params: RouteParams,
  currentLocale: AppLocale,
  nextLocale: AppLocale
): AppHref {
  if (pathname === '/blog/[slug]') {
    const currentSlug = getFirstParam(params.slug);
    const post = currentSlug ? getBlogPostBySlug(currentSlug, currentLocale) : undefined;

    if (!post) {
      return '/blog';
    }

    return {
      pathname: '/blog/[slug]',
      params: { slug: post.slug[nextLocale] },
    };
  }

  if (pathname === '/services/websites/demo/[slug]') {
    const currentSlug = getFirstParam(params.slug);
    const demo = currentSlug ? getWebsiteDemoBySlug(currentSlug, currentLocale) : undefined;

    if (!demo) {
      return '/services/websites';
    }

    return {
      pathname: '/services/websites/demo/[slug]',
      params: { slug: getWebsiteDemoSlug(demo, nextLocale) },
    };
  }

  return pathname as AppHref;
}