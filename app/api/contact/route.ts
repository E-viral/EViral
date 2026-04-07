import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, type } = body;

    if (!email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Try to save to DB if configured
    if (process.env.DATABASE_URL) {
      try {
        const { db } = await import('@/lib/db');
        const { contactSubmissions } = await import('@/lib/schema');
        await db.insert(contactSubmissions).values({ name, email, phone, message, type: type || 'general' });
      } catch (dbErr) {
        console.warn('DB save failed (non-critical):', dbErr);
      }
    }

    // Try to send email if configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.CONTACT_EMAIL || 'info@eviral.de',
          subject: `New contact form submission from ${name || email}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType: ${type}\n\nMessage:\n${message}`,
        });
      } catch (emailErr) {
        console.warn('Email send failed (non-critical):', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
