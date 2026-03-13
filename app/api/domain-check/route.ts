import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const domain = req.nextUrl.searchParams.get('domain');
  if (!domain) return NextResponse.json({ error: 'No domain provided' }, { status: 400 });

  try {
    // Use RDAP (free, no API key needed)
    const cleanDomain = domain.toLowerCase().trim();
    const tld = cleanDomain.split('.').pop() || 'de';
    
    const rdapUrl = `https://rdap.verisign.com/com/v1/domain/${cleanDomain}`;
    const rdapDe = `https://rdap.denic.de/domain/${cleanDomain}`;
    
    const url = tld === 'de' ? rdapDe : rdapUrl;
    
    try {
      const res = await fetch(url, { next: { revalidate: 0 } });
      // If we get a response, domain is taken
      if (res.ok) {
        return NextResponse.json({ domain: cleanDomain, available: false });
      }
      // 404 = domain available
      if (res.status === 404) {
        return NextResponse.json({ domain: cleanDomain, available: true });
      }
    } catch {
      // Network error or domain not found = likely available
      return NextResponse.json({ domain: cleanDomain, available: true });
    }

    return NextResponse.json({ domain: cleanDomain, available: false });
  } catch {
    return NextResponse.json({ error: 'Domain check failed' }, { status: 500 });
  }
}
