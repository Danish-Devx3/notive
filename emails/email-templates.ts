export const getVerificationEmailHTML = (
  userName: string,
  userEmail: string,
  verificationUrl: string
) => {
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  
  <!-- Main Container -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        
        <!-- Email Content -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px;">
          
          <!-- Header Section -->
          <tr>
            <td style="padding: 40px 40px 32px 40px; text-align: center;">
              <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: bold; color: #111827;">
                Verify Your Email Address
              </h1>
              <p style="margin: 0; font-size: 14px; color: #6b7280;">
                Secure your account in just one click
              </p>
            </td>
          </tr>

          <!-- Content Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <p style="margin: 0 0 16px 0; font-size: 16px; color: #374151; line-height: 24px;">
                Hi ${userName},
              </p>

              <p style="margin: 0 0 16px 0; font-size: 16px; color: #374151; line-height: 24px;">
                Thank you for signing up! To complete your account setup and start using our services, please verify your email address by clicking the button below.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #374151; line-height: 24px;">
                This verification link will expire in <strong>24 hours</strong> for security purposes.
              </p>
            </td>
          </tr>

          <!-- Button Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px; text-align: center;">
              <a href="${verificationUrl}" 
                 style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 600; font-size: 16px; text-decoration: none; padding: 12px 32px; border-radius: 8px;">
                Verify Email Address
              </a>
            </td>
          </tr>

          <!-- Alternative Link Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #4b5563; line-height: 20px;">
                If the button above doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin: 0; font-size: 12px; color: #2563eb; line-height: 18px; word-break: break-all; background-color: #f9fafb; padding: 12px; border-radius: 4px; border: 1px solid #e5e7eb;">
                <a href="${verificationUrl}" style="color: #2563eb; text-decoration: none;">
                  ${verificationUrl}
                </a>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #4b5563; line-height: 20px;">
                <strong>Why did I receive this email?</strong>
              </p>
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563; line-height: 20px;">
                This email was sent to <strong>${userEmail}</strong> because you recently created an account. If you didn't sign up, you can safely ignore this email.
              </p>

              <p style="margin: 24px 0 0 0; font-size: 12px; color: #6b7280; line-height: 18px; text-align: center;">
                © ${currentYear} Notive. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

        <!-- Additional Footer -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; margin-top: 16px;">
          <tr>
            <td style="text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 18px;">
                Need help? Contact us at <a href="mailto:support@notive.com" style="color: #2563eb; text-decoration: none;">support@yourcompany.com</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
};

export const getResetPasswordEmailHTML = (
  userName: string,
  userEmail : string,
  resetUrl: string,
) => {
  const currentYear = new Date().getFullYear();

 return `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  
  <!-- Main Container -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        
        <!-- Email Content -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px;">
          
          <!-- Header Section -->
          <tr>
            <td style="padding: 40px 40px 32px 40px; text-align: center;">
              <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: bold; color: #111827;">
                Reset Your Password
              </h1>
              <p style="margin: 0; font-size: 14px; color: #6b7280;">
                We received a request to reset your password
              </p>
            </td>
          </tr>

          <!-- Content Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <p style="margin: 0 0 16px 0; font-size: 16px; color: #374151; line-height: 24px;">
                Hi ${userName},
              </p>

              <p style="margin: 0 0 16px 0; font-size: 16px; color: #374151; line-height: 24px;">
                We received a request to reset the password for your account. Click the button below to create a new password.
              </p>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #374151; line-height: 24px;">
                This password reset link will expire in <strong>1 hour</strong> for security purposes.
              </p>
            </td>
          </tr>

          <!-- Button Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px; text-align: center;">
              <a href="${resetUrl}" 
                 style="display: inline-block; background-color: #dc2626; color: #ffffff; font-weight: 600; font-size: 16px; text-decoration: none; padding: 12px 32px; border-radius: 8px;">
                Reset Password
              </a>
            </td>
          </tr>

          <!-- Alternative Link Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #4b5563; line-height: 20px;">
                If the button above doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin: 0; font-size: 12px; color: #2563eb; line-height: 18px; word-break: break-all; background-color: #f9fafb; padding: 12px; border-radius: 4px; border: 1px solid #e5e7eb;">
                <a href="${resetUrl}" style="color: #2563eb; text-decoration: none;">
                  ${resetUrl}
                </a>
              </p>
            </td>
          </tr>

          <!-- Warning Section -->
          <tr>
            <td style="padding: 0 40px 32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px;">
                <tr>
                  <td style="padding: 16px;">
                    <p style="margin: 0; font-size: 14px; color: #92400e; line-height: 20px;">
                      <strong>⚠️ Security Notice:</strong> If you didn't request this password reset, please ignore this email. Your password will remain unchanged.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #4b5563; line-height: 20px;">
                <strong>Why did I receive this email?</strong>
              </p>
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #4b5563; line-height: 20px;">
                This email was sent to <strong>${userEmail}</strong> because a password reset was requested for this account. If this wasn't you, please contact our support team immediately.
              </p>

              <p style="margin: 24px 0 0 0; font-size: 12px; color: #6b7280; line-height: 18px; text-align: center;">
                © ${currentYear} Notive. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

        <!-- Additional Footer -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; margin-top: 16px;">
          <tr>
            <td style="text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 18px;">
                Need help? Contact us at <a href="mailto:support@yourcompany.com" style="color: #2563eb; text-decoration: none;">support@yourcompany.com</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
};
