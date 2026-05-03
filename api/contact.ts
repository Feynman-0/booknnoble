import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, service, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // This should be an App Password, not your regular password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'oliverkeen.booksandnoble@gmail.com',
    subject: `New Contact Form Submission: ${service || 'General Inquiry'}`,
    text: `
      Name: ${name}
      Email: ${email}
      Service: ${service}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return response.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return response.status(500).json({ error: 'Failed to send email' });
  }
}
