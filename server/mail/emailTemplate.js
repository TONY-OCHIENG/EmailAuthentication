
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
export const WELCOME_EMAIL = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome Email</title>
<style>
  /* Note: most email clients strip <style> blocks or support only a subset.
     Key styles are also inlined below for maximum compatibility. */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; background-color: #f4f4f7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
  a { color: #4f46e5; }
  @media screen and (max-width: 600px) {
    .email-container { width: 100% !important; }
    .fluid-padding { padding-left: 24px !important; padding-right: 24px !important; }
  }
</style>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f7;">

  <!-- Preheader text (hidden preview text in inbox) -->
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all;">
    Welcome aboard — here's how to get started.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:100%; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">

          <!-- Header / Logo -->
          <tr>
            <td align="center" style="background-color:#4f46e5; padding:32px 24px;">
              App Name
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="fluid-padding" style="padding:40px 40px 24px 40px;">
              <h1 style="margin:0 0 16px 0; font-size:24px; line-height:1.3; color:#1f2937; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
                Welcome, {first_name} 👋
              </h1>
              <p style="margin:0; font-size:16px; line-height:1.6; color:#4b5563; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
                We're really glad you're here. Your account is all set up, and there are just a couple of quick steps to get you fully up and running.
              </p>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td class="fluid-padding" align="center" style="padding:8px 40px 32px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="border-radius:8px; background-color:#4f46e5;">
                    <a href="{{cta_link}}" target="_blank" style="display:inline-block; padding:14px 32px; font-size:16px; font-weight:600; color:#ffffff; text-decoration:none; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
                      Get Started
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none; border-top:1px solid #e5e7eb; margin:0;">
            </td>
          </tr>       

          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb; padding:24px 40px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px; color:#9ca3af; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
                Questions? Just reply to this email — we're happy to help.
              </p>
              <p style="margin:0; font-size:13px; color:#9ca3af; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
                {{company_name}} · {{company_address}}
              </p>
              <p style="margin:12px 0 0 0; font-size:13px;">
                <a href="{{unsubscribe_link}}" style="color:#9ca3af; text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>


`