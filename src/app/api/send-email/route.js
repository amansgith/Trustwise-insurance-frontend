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
      to: "example@email.com", // Change this to your recipient's email
      subject: `New Quote Request - ${quoteFor}`,
      text: `
        Quote For: ${quoteFor}
        Sub Quote: ${subQuote}
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Business Name: ${businessName}
        Date to Contact: ${dateToContact}
        Time to Contact: ${timeToContact}
        Group Name: ${groupName || "N/A"}
        Notes: ${notes || "N/A"}
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
