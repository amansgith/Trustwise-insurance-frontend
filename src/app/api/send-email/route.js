import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Destructure the form data
    const { 
      quoteFor, subQuote, firstName, lastName, email, phone, businessName, 
      dateToContact, timeToContact, groupName, notes 
    } = data;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this if using another provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change this to your recipient's email
      subject: `New Quote Request - ${quoteFor}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Quote For:</strong> ${quoteFor}</p>
        <p><strong>Sub Quote:</strong> ${subQuote}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Date to Contact:</strong> ${dateToContact}</p>
        <p><strong>Time to Contact:</strong> ${timeToContact}</p>
        <p><strong>Group Name:</strong> ${groupName || "N/A"}</p>
        <p><strong>Notes:</strong> ${notes || "N/A"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
}
