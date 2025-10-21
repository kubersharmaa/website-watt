import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Transporter config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail account
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    //  HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WATT Contact Notification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
      color: #000;
    }

    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 12px;
      border: 1px solid #eaeaea;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }

    .header {
      background: #0077B6;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 25px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .header img {
      width: 60px;
      height: auto;
    }

    .brand-name {
      font-family: 'Arial, sans-serif';
      color: #fff;
      font-size: 26px;
      letter-spacing: 1.5px;
      margin: 0;
    }

    .content {
      padding: 30px;
      text-align: left;
    }

    .content h2 {
      color: #0077B6;
      font-size: 22px;
      margin-bottom: 15px;
      font-family: Arial, sans-serif;
      border-bottom: 2px solid #0077B6;
      display: inline-block;
      padding-bottom: 5px;
    }

    .message-details {
      background-color: #f0f8ff;
      border-left: 4px solid #0077B6;
      padding: 15px 20px;
      border-radius: 8px;
      margin: 20px 0;
    }

    .message-details p {
      margin: 6px 0;
      font-size: 15px;
    }

    .content p {
      font-size: 15px;
      line-height: 1.6;
      color: #333;
    }

    .footer {
      text-align: center;
      background: #000;
      color: #fff;
      padding: 15px;
      font-size: 13px;
    }

    .footer a {
      color: #0077B6;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
 <div class="email-container">
  <div class="header">
    <div class="header-left">
      <img src="/logo1.png" alt="WATT Logo" class="logo" />
      <h1 class="brand-name">WATT INCORPORATE</h1>
    </div>
  </div>

  <div class="content">
    <h2>New Contact Message</h2>

    <div class="message-details">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    </div>

    <p>
      A new inquiry has been received through the WATT contact form.  
      Please review and respond to this message promptly.  
      This ensures we continue to provide excellent support to our users.
    </p>
  </div>

  <div class="footer">
    © ${new Date().getFullYear()} WATT. All rights reserved.<br />
    <a href="https://hellowatt.in">hellowatt.in</a>
  </div>
 </div>
</body>
</html>
    `;

    //  Fixed sendMail config
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Proper template string
      to: process.env.EMAIL_USER,
      subject: `New Message: ${subject}`, // Proper backticks
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true, message: "Mail sent successfully!" });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send mail" },
      { status: 500 }
    );
  }
}
