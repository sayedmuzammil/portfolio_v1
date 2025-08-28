import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  services?: string[];
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<ContactPayload>;

    // Basic validation
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    if (!isValidEmail(data.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const servicesList = (data.services ?? []).join(', ') || '—';

    // 1) Send to YOU (inbox)
    const toYou = await resend.emails.send({
      from: 'onboarding@resend.dev', // replace with your verified sender in prod
      to: process.env.CONTACT_RECIPIENT || '',
      subject: `New contact from ${data.name}`,
      replyTo: data.email, // so you can reply directly
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Services:</strong> ${servicesList}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    // 2) (Optional) Auto-reply to the sender
    const toSender = await resend.emails.send({
      from: 'onboarding@resend.dev', // replace in prod
      to: data.email,
      subject: 'Thanks for reaching out 👋',
      html: `
        <p>Hi ${data.name},</p>
        <p>Thanks for getting in touch. I received your message and will reply soon.</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <blockquote>${escapeHtml(data.message).replace(
          /\n/g,
          '<br/>'
        )}</blockquote>
      `,
    });

    if (toYou.error || toSender.error) {
      // If either send failed, treat as error
      const reason =
        toYou.error?.message ?? toSender.error?.message ?? 'Email send failed';
      return NextResponse.json({ error: reason }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error(
      'Contact route error:',
      err instanceof Error ? err.message : 'Unknown error'
    );
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// simple HTML escape to avoid injection in the email content
function escapeHtml(str: string) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
