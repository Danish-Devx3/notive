// components/emails/reset-password-email.tsx

import { 
  Body, 
  Button, 
  Container, 
  Head, 
  Html, 
  Section, 
  Tailwind, 
  Text, 
  Hr, 
  Link 
} from "@react-email/components";

interface ResetPasswordEmailProps {
  userName?: string;
  userEmail: string;
  resetUrl: string;
}

const ResetPasswordEmail = ({ 
  userName = "there", 
  userEmail,
  resetUrl 
}: ResetPasswordEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white rounded-lg shadow-lg max-w-[600px] mx-auto my-[40px] p-[40px]">
            
            {/* Header Section */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Reset Your Password
              </Text>
              <Text className="text-[14px] text-gray-500 m-0">
                We received a request to reset your password
              </Text>
            </Section>

            {/* Content Section */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hi {userName},
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                We received a request to reset the password for your account. Click the button below to create a new password.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                This password reset link will expire in <strong>1 hour</strong> for security purposes.
              </Text>
            </Section>

            {/* Button Section */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetUrl}
                className="bg-red-600 text-white font-semibold px-[32px] py-[12px] rounded-lg no-underline inline-block"
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link Section */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                If the button above doesn't work, copy and paste this link into your browser:
              </Text>
              <Text className="text-[12px] text-blue-600 leading-[18px] break-all bg-gray-50 p-[12px] rounded border border-gray-200">
                <Link href={resetUrl} className="text-blue-600 no-underline">
                  {resetUrl}
                </Link>
              </Text>
            </Section>

            {/* Warning Section */}
            <Section className="bg-yellow-50 border border-yellow-200 rounded-lg p-[16px] mb-[32px]">
              <Text className="text-[14px] text-yellow-800 leading-[20px] m-0">
                <strong>⚠️ Security Notice:</strong> If you didn't request this password reset, please ignore this email. Your password will remain unchanged.
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Footer Section */}
            <Section>
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                <strong>Why did I receive this email?</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                This email was sent to <strong>{userEmail}</strong> because a password reset was requested for this account. If this wasn't you, please contact our support team immediately.
              </Text>

              <Text className="text-[12px] text-gray-500 leading-[18px] text-center mt-[24px]">
                © {new Date().getFullYear()} Your Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>

          {/* Additional Footer */}
          <Section className="max-w-[600px] mx-auto mt-[16px]">
            <Text className="text-[12px] text-gray-500 text-center leading-[18px]">
              Need help? Contact us at <Link href="mailto:support@yourcompany.com" className="text-blue-600 no-underline">support@yourcompany.com</Link>
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResetPasswordEmail;