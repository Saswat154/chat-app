export const welcomeMail=(username)=>`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Welcome to NextChat</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f8fa;
      margin: 0;
      padding: 0;
    }
    .container {
      background-color: #ffffff;
      width: 90%;
      max-width: 600px;
      margin: 40px auto;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }
    h2 {
      color: #2b7cff;
    }
    p {
      color: #333333;
      font-size: 16px;
      line-height: 1.6;
    }
    .footer {
      margin-top: 30px;
      font-size: 13px;
      color: #777;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🎉 Welcome to NextChat!</h2>
    <p>Hi <strong>${username}</strong>,</p>
    <p>We’re thrilled to have you join <strong>NextChat</strong> — your new home for real-time conversations and connections.</p>
    <p>Your account has been created successfully. You can now log in and start chatting with your friends!</p>
    <p>If this wasn’t you, please contact our support team immediately.</p>
    <div class="footer">
      <p>Happy chatting 💬 — The NextChat Team</p>
    </div>
  </div>
</body>
</html>
`
export const signInMail = (userName, userIP, loginTime, deviceInfo, resetLink) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Login Alert - NextChat</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f8fa;
      margin: 0;
      padding: 0;
    }
    .container {
      background-color: #ffffff;
      width: 90%;
      max-width: 600px;
      margin: 40px auto;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }
    h2 {
      color: #2b7cff;
    }
    p {
      color: #333333;
      font-size: 16px;
      line-height: 1.6;
    }
    .info {
      background: #f0f4ff;
      border-left: 4px solid #2b7cff;
      padding: 10px 15px;
      margin: 15px 0;
      border-radius: 5px;
    }
    .footer {
      margin-top: 30px;
      font-size: 13px;
      color: #777;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🔐 New Login Detected</h2>
    <p>Hi <strong>${userName}</strong>,</p>
    <p>We noticed a new login to your <strong>NextChat</strong> account. Here are the details:</p>

    <div class="info">
      <p><strong>IP Address:</strong> ${userIP}</p>
      <p><strong>Date & Time:</strong> ${loginTime}</p>
      <p><strong>Device:</strong> ${deviceInfo}</p>
    </div>

    <p>If this was you, no action is needed.</p>
    <p>If you didn’t log in, please <a href="${resetLink}" style="color:#2b7cff;">reset your password</a> immediately.</p>

    <div class="footer">
      <p>Stay safe — The NextChat Security Team</p>
    </div>
  </div>
</body>
</html>
`;
