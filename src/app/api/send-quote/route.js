import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // Destructure the form data
    const { 
      quoteFor, subQuote, firstName, lastName, email, phone, 
      dateToContact, timeToContact, notes 
    } = data;

    // Configure the transporter using Gmail SMTP and App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Define email content with inline CSS for styling
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change this to your recipient's email
      subject: `New Quote Request - ${quoteFor}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="text-align: center; color: #E6BF64;">New Quote Request</h2>
          <p style="font-size: 16px; color: #555;">You have received a new quote request with the following details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Quote For:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${quoteFor}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Sub Quote:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${subQuote}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Date to Contact:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${dateToContact}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Time to Contact:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${timeToContact}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Notes:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${notes || "N/A"}</td>
            </tr>
          </table>
          <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">This email was generated automatically. Please do not reply to this email.</p>
        </div>
      `,
    };

    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: email, // User's email address
      subject: 'We have received your request',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="font-size: 16px; color: #555;">Dear ${firstName},</h2>
          <h2 style="text-align: center; color: #4CAF50;">Thank you for your request!</h2>
          <p style="font-size: 16px; color: #555;">We have received your quote request for <strong>${quoteFor}</strong>. Our team will review your request and get back to you shortly.</p>
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
          path: './public/Navlogo.png',
          cid: 'logo',
        },
      ],
    };

    // Send email
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(mailToUser),
    ]);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
}