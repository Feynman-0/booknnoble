import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = request.body;

  if (!email) {
    return response.status(400).json({ error: 'Email is required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'oliverkeen.booksandnoble@gmail.com',
    subject: 'New Newsletter Subscription',
    text: `New subscriber email: ${email}`,
    html: `<h3>New Newsletter Subscription</h3><p><strong>Email:</strong> ${email}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return response.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Error in subscription:', error);
    return response.status(500).json({ error: 'Failed to subscribe' });
  }
}
