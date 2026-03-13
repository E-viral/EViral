import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get('locale') || 'en';
  const limit = Number(req.nextUrl.searchParams.get('limit') || '10');

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ posts: [], total: 0, message: 'No DB configured' });
  }

  try {
    const { db } = await import('@/lib/db');
    const { blogPosts } = await import('@/lib/schema');
    const { eq, desc } = await import('drizzle-orm');
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.locale, locale))
      .orderBy(desc(blogPosts.createdAt))
      .limit(limit);
    return NextResponse.json({ posts, total: posts.length });
  } catch {
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }
}
