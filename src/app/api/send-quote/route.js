// app/api/submit-quote/route.js
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

// Rate limiting (basic in-memory example)
// const rateLimit = new Map();

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      quoteFor = 'N/A',
      subQuote = 'N/A',
      firstName = 'N/A',
      lastName = 'N/A',
      email = 'N/A',
      phone = 'N/A',
      dateToContact = 'N/A',
      timeToContact = 'N/A',
      notes = 'N/A',
    } = data;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ message: 'Invalid email address' }), { status: 400 });
    }

    const sanitize = (input) => sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} });
    const sanitizedData = {
      quoteFor: sanitize(quoteFor),
      subQuote: sanitize(subQuote),
      firstName: sanitize(firstName),
      lastName: sanitize(lastName),
      email: sanitize(email),
      phone: sanitize(phone),
      dateToContact: sanitize(dateToContact),
      timeToContact: sanitize(timeToContact),
      notes: sanitize(notes),
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const logoUrl = 'https://trustwiseinsurance.com/Navlogo.png';
    let logoBuffer;
    try {
      const response = await fetch(logoUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch logo: ${response.statusText}`);
      }
      logoBuffer = Buffer.from(await response.arrayBuffer());
    } catch (error) {
      console.error('Error fetching logo:', error);
      return new Response(JSON.stringify({ message: 'Failed to fetch logo' }), { status: 500 });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request - ${sanitizedData.quoteFor}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="text-align: center; color: #E6BF64;">New Quote Request</h2>
          <p style="font-size: 16px; color: #555;">You have received a new quote request with the following details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Quote For:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.quoteFor}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Sub Quote:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.subQuote}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.firstName} ${sanitizedData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Date to Contact:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.dateToContact}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Time to Contact:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.timeToContact}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Notes:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${sanitizedData.notes}</td>
            </tr>
          </table>
          <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">This email was generated automatically. Please do not reply to this email.</p>
        </div>
      `,
    };

    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: sanitizedData.email,
      subject: 'We have received your request',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="font-size: 16px; color: #555;">Dear ${sanitizedData.firstName},</h2>
          <h2 style="text-align: center; color: #4CAF50;">Thank you for your request!</h2>
          <p style="font-size: 16px; color: #555;">We have received your quote request for <strong>${sanitizedData.quoteFor}</strong>. Our team will review your request and get back to you shortly.</p>
          <p style="font-size: 16px; color: #555;">Best regards,</p>
          <p style="font-size: 16px; color: #555;">The Trustwise Insurance Team</p>
          <div style="text-align: center; margin-top: 20px;">
            <img src="cid:logo" alt="Trustwise Insurance Logo" style="width: 150px; height: auto;" />
          </div>
          <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">This email was generated automatically. Please do not reply to this email.</p>
        </div>
      `,
      attachments: [
        {
          filename: 'logo.png',
          content: logoBuffer,
          cid: 'logo',
        },
      ],
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(mailToUser),
    ]);

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new Response(JSON.stringify({ message: 'Failed to process request', error: error.message }), { status: 500 });
  }
}