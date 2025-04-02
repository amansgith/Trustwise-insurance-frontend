// app/api/submit-quote/route.js
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';

// Rate limiting (basic in-memory example)
const rateLimit = new Map();

export async function POST(req) {
  try {
    // Rate limiting
    // const ip = req.headers.get('x-forwarded-for') || 'unknown';
    // const now = Date.now();
    // const limit = rateLimit.get(ip) || { count: 0, lastRequest: now };

    // if (now - limit.lastRequest > 60 * 60 * 1000) {
    //   limit.count = 0; // Reset after 1 hour
    // }
    // if (limit.count >= 5) {
    //   return new Response(JSON.stringify({ message: 'Too many requests' }), { status: 429 });
    // }
    // limit.count += 1;
    // limit.lastRequest = now;
    // rateLimit.set(ip, limit);

    // Parse the form data
    const data = await req.json();

    // Destructure with default values to avoid undefined
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

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ message: 'Invalid email address' }), { status: 400 });
    }

    // Sanitize inputs to prevent HTML injection
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

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Fetch the logo file over HTTP
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

    // Email to the owner
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

    // Email to the user
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
          content: logoBuffer, // Attach the buffer directly
          cid: 'logo',
        },
      ],
    };

    // Send emails and track their status
    const [ownerEmailResult, userEmailResult] = await Promise.all([
      transporter.sendMail(mailOptions).catch(err => ({ error: err.message })),
      transporter.sendMail(mailToUser).catch(err => ({ error: err.message })),
    ]);

    // Check for errors in sending emails
    if (ownerEmailResult?.error || userEmailResult?.error) {
      const errorMessage = `Owner email error: ${ownerEmailResult?.error || 'Success'}, User email error: ${userEmailResult?.error || 'Success'}`;
      console.error('Email sending errors:', errorMessage);
      return new Response(JSON.stringify({ message: 'Partial failure in sending emails', details: errorMessage }), { status: 500 });
    }

    // Update the owner's email with user email status
    const updatedMailOptions = {
      ...mailOptions,
      html: mailOptions.html.replace(
        '</table>',
        `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">User Confirmation Email:</td><td style="padding: 8px; border: 1px solid #ddd;">${userEmailResult.error ? 'Failed' : 'Sent'}</td></tr></table>`
      ),
    };
    await transporter.sendMail(updatedMailOptions);

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new Response(JSON.stringify({ message: 'Failed to process request', error: error.message }), { status: 500 });
  }
}