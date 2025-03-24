import nodemailer from 'nodemailer';

export async function POST(req, res) {
  try {
    const data = await req.json();

    // Destructure the form data
    const {
      departureDate, tripType, returnDate, location, country, region, numberOfTravellers
    } = data;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change this if using another provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'amankhancompq2002@gmail.com', // Change this to your recipient's email
      subject: 'New Travel Ticket Booking Request',
      html: `
        <h2>New Travel Ticket Booking Request</h2>
        <p><strong>Departure Date:</strong> ${departureDate}</p>
        <p><strong>Trip Type:</strong> ${tripType}</p>
        ${tripType === 'round-trip' ? `<p><strong>Return Date:</strong> ${returnDate}</p>` : ''}
        <p><strong>Location:</strong> ${location}</p>
        ${location === 'abroad' ? `<p><strong>Country:</strong> ${country}</p>` : ''}
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Number of Travellers:</strong> ${numberOfTravellers}</p>
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