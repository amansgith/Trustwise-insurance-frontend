import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Destructure the form data
    const {
      firstName, middleName, lastName, immigrationStatus, languages,
      phone, email, coverLetter
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
      to: email, // Send confirmation email to the applicant
      subject: "Thank you for your application",
      html: `
        <h2>Dear Candidate,</h2>
        <br/>
        <h2>Thank you for your interest in joining our team</h2>
        <p>If we found you compatible with us one of our team members would connect with you.</p>
        <p>Please Note only selected candidates would receive a follow-up email.</p>
        <br/>
        <p>Best Regards,</p>
        <p>Team Trustwise Insurance</p>
      `,
    };

    // Send confirmation email
    await transporter.sendMail(mailOptions);

    // Send data to Google Sheet
    const sheetUrl = process.env.NEXT_PUBLIC_SHEET_URL;
    await fetch(sheetUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      mode: "no-cors", // Add this to avoid CORS issues (Apps Script handles it)
    });

    return new Response(JSON.stringify({ message: "Application submitted successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return new Response(JSON.stringify({ message: "Failed to submit application" }), { status: 500 });
  }
}