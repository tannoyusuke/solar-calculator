import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with placeholder API key if not set
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || '';

export async function POST(request: Request) {
    try {
        const payload = await request.json();

        // Basic validation
        if (!payload.name || !payload.email || !payload.message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const isRecruit = payload.type === 'recruit' || payload.type === 'casual';
        const isDocument = payload.type === 'document';

        const subjectType = isRecruit ? '【採用に関するお問合せ】' : isDocument ? '【資料請求】' : '【コーポレートサイトからのお問合せ】';
        const subject = `${subjectType} ${payload.name}様より`;

        const emailContent = `
TRYFUNDS WEBSITE 様

コーポレートサイトから以下のお問合せがありました。

【種別】 ${payload.type}
【お名前】 ${payload.name}
【会社名・所属】 ${payload.company || '未入力'}
【メールアドレス】 ${payload.email}
【電話番号】 ${payload.phone || '未入力'}
【お問合せ内容】
${payload.message}

-- 
This email was sent automatically from the Tryfunds Corporate Website.
        `.trim();

        // 1. Send Email to info@tryfunds.com via Resend
        // If no real API key is provided, we skip actual sending to avoid crashing during development
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: 'Tryfunds Website <noreply@tryfunds.com>', // Requires verified domain in Resend
                to: ['info@tryfunds.com'],
                subject: subject,
                text: emailContent,
                replyTo: payload.email,
            });
        }

        // 2. Send Slack Notification
        if (SLACK_WEBHOOK_URL) {
            const slackMessage = {
                text: `🔔 *コーポレートサイトから新しいお問合せ*\n\n*種別:* ${payload.type}\n*お名前:* ${payload.name}\n*会社名:* ${payload.company || '-'}\n*Email:* ${payload.email}\n*内容:*\n${payload.message}`
            };

            await fetch(SLACK_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(slackMessage),
            }).catch(e => console.error("Slack Webhook failed:", e));
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
