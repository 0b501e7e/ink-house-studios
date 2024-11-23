import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { google } from 'googleapis';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
  const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

  // Log OAuth2 Client Configuration
  console.log('OAuth2 Client Configuration:', { CLIENT_ID, REDIRECT_URI });

  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessTokenResponse = await oAuth2Client.getAccessToken();
    const accessToken = accessTokenResponse.token;

    if (!accessToken) {
      throw new Error("Failed to obtain an access token");
    }

    const transporter = nodemailer.createTransport(new SMTPTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    }));

    const { name, email, message } = await req.json();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'senanw95@gmail.com',
      subject: `New Booking from ${name}`,
      text: `Message from ${email}: ${message}`,
    };


    const sendResult = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    if (error instanceof Error) {
      // Detailed Error Logging
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ 
          success: false, 
          message: 'Failed to send email', 
          error: error.message 
      }), {
          headers: { 'Content-Type': 'application/json' },
          status: 500
      });
    } else {
      // Handling Non-Error Type
      console.error('An unexpected error occurred:', error);
      return new Response(JSON.stringify({ 
          success: false, 
          message: 'Failed to send email', 
          error: 'An unexpected error occurred' 
      }), {
          headers: { 'Content-Type': 'application/json' },
          status: 500
      });
    }
  }
}
