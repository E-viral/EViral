import LoginRedirectClient from './LoginRedirectClient';

export default function LoginRedirectPage({ params: { locale } }: { params: { locale: string } }) {
  return <LoginRedirectClient locale={locale} />;
}
