import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, feedback } = await req.json();

    //  Simple validation
    if (!name || !email || !feedback) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    const emailTemplate =`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WATT Feedback Notification</title>
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

    .headline {
      color: #fff;
      font-size: 15px;
      font-weight: normal;
      letter-spacing: 0.5px;
      margin: 0;
      text-align: right;
      flex: 1;
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

    .feedback-details {
      background-color: #f0f8ff;
      border-left: 4px solid #0077B6;
      padding: 15px 20px;
      border-radius: 8px;
      margin: 20px 0;
    }

    .feedback-details p {
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
      <img src="https://hellowatt.in/logo.jpeg" alt="WATT Logo" class="logo" />
      <h1 class="brand-name">  WATT INCORPORATE</h1>
    </div>
  </div>
</div>
    <div class="content">
      <h2>New Feedback Received</h2>

      <div class="feedback-details">
        <p><strong>Name:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Feedback:</strong> {{feedback}}</p>
      </div>

      <p>
        A new feedback has been received from your website.  
        Please review and respond as needed.  
        This report helps the <strong>WATT</strong> team continuously improve user experience.
      </p>
    </div>

    <div class="footer">
      © 2025 WATT. All rights reserved.<br />
      <a href="https://hellowatt.in">hellowatt.in</a>
    </div>
  </div>
</body>
</html>
    `;

    //  Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, // Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    //  Send the email to admin instead of user
await transporter.sendMail({
  from: `"WATT" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER, 
  subject: "New Feedback Received",
  html: emailTemplate
    .replace(/{{name}}/g, name)
    .replace(/{{email}}/g, email)
    .replace(/{{feedback}}/g, feedback),
});


    //  Send success response
    return new Response(
      JSON.stringify({
        message: "Feedback received and email sent successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing feedback:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
