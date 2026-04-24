import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, service, message } = request.body;

  if (!firstName || !lastName || !email || !phone || !service || !message) {
    return response.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Simpson & Sons Tree Service <hello@simpsonandsonstreeservice.com>',
      to: ['Simpsonandsonstreeservice@gmail.com'],
      replyTo: email,
      subject: `New Estimate Request: ${service} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #1a3c2e; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Estimate Request</h1>
            <p style="color: #f5a623; margin: 4px 0 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">${service}</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; font-weight: bold; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; font-weight: bold;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;"><a href="mailto:${email}" style="color: #1a3c2e;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; font-weight: bold;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;"><a href="tel:${phone}" style="color: #1a3c2e;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; font-weight: bold;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; font-weight: bold; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f5f9f5; border-left: 4px solid #f5a623; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #666;">Reply directly to this email to respond to <strong>${firstName}</strong> at <strong>${email}</strong>.</p>
            </div>
          </div>
          <p style="text-align: center; font-size: 12px; color: #aaa; margin-top: 16px;">Simpson &amp; Sons Tree Service &middot; Big Lake, MN &middot; simpsonandsonstreeservice.com</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return response.status(400).json({ error: `Failed to send email: ${error.message || JSON.stringify(error)}` });
    }

    return response.status(200).json({ data });
  } catch (err: any) {
    console.error('Server error:', err);
    return response.status(500).json({ error: `Internal Server Error: ${err?.message || String(err)}` });
  }
}
