import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // Destructure the form data
    const {
      firstName,
      middleName,
      lastName,
      immigrationStatus,
      languages,
      phone,
      email,
      coverLetter,
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
    const mailToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email address
      subject: 'New Career Application Received',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
          <h2 style="text-align: center; color: #E6BF64;">New Career Application</h2>
          <p style="font-size: 16px; color: #555;">You have received a new career application with the following details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${middleName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Immigration Status:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${immigrationStatus}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Languages:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">
                ${languages.map(
                  (lang) => `<p>${lang.language} (${lang.proficiency})</p>`
                ).join('')}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Cover Letter:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${coverLetter}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // Email to the user
    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: email, // User's email address
      subject: 'Thank You for Your Application',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
        <h2 style="font-size: 16px; color: #555;">Dear ${firstName},</h2>
          <h2 style="text-align: center; color: #4CAF50;">Thank you for your interest in joining our team</h2>
          <p style="font-size: 16px; color: #555;">If we found you compatible with us one of our team members would connect with you.</p>
          <p style="font-size: 16px; color: #555;">Please Note only selected candidates would receive a follow-up email.</p>
          <p style="font-size: 16px; color: #555;">Best regards,</p>
          <p style="font-size: 16px; color: #555;">The Trustwise Insurance Team</p>
        </div>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(mailToSelf),
      transporter.sendMail(mailToUser),
    ]);

    return new Response(JSON.stringify({ message: 'Application submitted successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return new Response(JSON.stringify({ message: 'Failed to submit application.' }), { status: 500 });
  }
}