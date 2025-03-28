import nodemailer from 'nodemailer';

export async function POST(req, res) {
  try {
    const data = await req.json();

    const {
      contactName,
      contactMobile,
      contactEmail,
      departureDate,
      tripType,
      returnDate,
      location,
      country,
      region,
      numberOfTravellers,
    } = data;

    // Configure the transporter using Gmail SMTP and App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email address
      subject: 'New Travel Ticket Booking Request',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="text-align: center; color: #4CAF50;">New Travel Ticket Booking Request</h2>
          <p style="font-size: 16px; color: #555;">You have received a new travel ticket booking request with the following details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Contact Name:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${contactName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mobile:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${contactMobile}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${contactEmail || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Departure Date:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${departureDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Trip Type:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${tripType}</td>
            </tr>
            ${
              tripType === 'round-trip'
                ? `<tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Return Date:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${returnDate}</td>
                  </tr>`
                : ''
            }
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${location}</td>
            </tr>
            ${
              location === 'abroad'
                ? `<tr>
                    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Country:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${country}</td>
                  </tr>`
                : ''
            }
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Region:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${region}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Number of Travellers:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${numberOfTravellers}</td>
            </tr>
          </table>
          <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">This email was generated automatically. Please do not reply to this email.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Booking request sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending booking request:', error);
    return new Response(JSON.stringify({ message: 'Failed to send booking request' }), { status: 500 });
  }
}