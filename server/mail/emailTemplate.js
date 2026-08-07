
export const WELCOME_VERIFICATION = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Verification Code</title>
<style>
  body, table, td, a {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100% !important;
    background-color: #f4f5f7;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }
  .email-wrapper {
    width: 100%;
    background-color: #f4f5f7;
    padding: 40px 0;
  }
  .email-content {
    max-width: 480px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
  .email-header {
    background-color: #4f46e5;
    padding: 32px 40px;
    text-align: center;
  }
  .email-header h1 {
    color: #ffffff;
    font-size: 20px;
    margin: 0;
    font-weight: 600;
  }
  .email-body {
    padding: 40px;
    text-align: center;
  }
  .email-body h2 {
    font-size: 22px;
    color: #111827;
    margin: 0 0 16px 0;
    text-align: left;
  }
  .email-body p {
    font-size: 15px;
    line-height: 1.6;
    color: #4b5563;
    margin: 0 0 24px 0;
    text-align: left;
  }
  .code-box {
    background-color: #f4f5f7;
    border: 1px dashed #c7c9d9;
    border-radius: 10px;
    padding: 20px;
    margin: 8px 0 24px 0;
  }
  .code-text {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 10px;
    color: #111827;
    font-family: 'Courier New', Courier, monospace;
  }
  .expiry-note {
    font-size: 13px;
    color: #9ca3af;
    text-align: left;
    margin: 0 0 24px 0;
  }
  .divider {
    border: none;
    border-top: 1px solid #e5e7eb;
    margin: 8px 0 24px 0;
  }
  .security-note {
    font-size: 13px;
    color: #9ca3af;
    text-align: left;
    margin: 0;
  }
  .email-footer {
    padding: 24px 40px 40px;
    text-align: center;
  }
  .email-footer p {
    font-size: 12px;
    color: #9ca3af;
    margin: 4px 0;
  }
  @media only screen and (max-width: 480px) {
    .email-content {
      border-radius: 0;
    }
    .email-body, .email-header, .email-footer {
      padding-left: 24px;
      padding-right: 24px;
    }
    .code-text {
      font-size: 28px;
      letter-spacing: 6px;
    }
  }
</style>
</head>
<body>
  <div class="email-wrapper">
    <table role="presentation" class="email-content" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td class="email-header">
          <h1>YourApp</h1>
        </td>
      </tr>
      <tr>
        <td class="email-body">
          <h2>Your verification code</h2>
          <p>
            Enter the code below to verify your email address and continue.
          </p>

          <div class="code-box">
            <span class="code-text">{VERIFICATION_CODE}</span>
          </div>

          <p class="expiry-note">
            This code will expire in 10 minutes.
          </p>

          <hr class="divider">

          <p class="security-note">
            If you didn't request this code, you can safely ignore this email. Someone may have typed your email address by mistake.
          </p>
        </td>
      </tr>
      <tr>
        <td class="email-footer">
          <p>&copy; 2026 YourApp, Inc. All rights reserved.</p>
          <p>123  Street, Nairobi Kenya, CA 94103</p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>

`