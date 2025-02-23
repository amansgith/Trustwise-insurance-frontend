import nodemailer from 'nodemailer';

export async function POST(request) {
  const { quoteFor, subQuote, firstName, lastName, email, phone, businessName, dateToContact, timeToContact, groupName, notes } = await request.json();

  // Create a Nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your Gmail address
      pass: 'your-email-password', // Replace with your Gmail password or App Password
    },
  });

  // Email options
  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your Gmail address
    to: 'recipient@example.com', // Replace with the recipient's email
    subject: 'New Quote Request',
    text: `
      Quote For: ${quoteFor}
      Sub Quote: ${subQuote}
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Business Name: ${businessName}
      Date to Contact: ${dateToContact}
      Time to Contact: ${timeToContact}
      Group Name: ${groupName}
      Notes: ${notes}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}