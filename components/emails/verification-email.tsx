// components/emails/verification-email.tsx

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

interface VerificationEmailProps {
  userName?: string;
  userEmail: string;
  verificationUrl: string;
}

const VerificationEmail = ({ 
  userName = "there", 
  userEmail,
  verificationUrl 
}: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white rounded-lg shadow-lg max-w-[600px] mx-auto my-[40px] p-[40px]">
            
            {/* Header Section */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Verify Your Email Address
              </Text>
              <Text className="text-[14px] text-gray-500 m-0">
                Secure your account in just one click
              </Text>
            </Section>

            {/* Content Section */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hi {userName},
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Thank you for signing up! To complete your account setup and start using our services, please verify your email address by clicking the button below.
              </Text>

              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                This verification link will expire in <strong>24 hours</strong> for security purposes.
              </Text>
            </Section>

            {/* Button Section */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white font-semibold px-[32px] py-[12px] rounded-lg no-underline inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link Section */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                If the button above doesn't work, copy and paste this link into your browser:
              </Text>
              <Text className="text-[12px] text-blue-600 leading-[18px] break-all bg-gray-50 p-[12px] rounded border border-gray-200">
                <Link href={verificationUrl} className="text-blue-600 no-underline">
                  {verificationUrl}
                </Link>
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Footer Section */}
            <Section>
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[12px]">
                <strong>Why did I receive this email?</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                This email was sent to <strong>{userEmail}</strong> because you recently created an account. If you didn't sign up, you can safely ignore this email.
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

export default VerificationEmail;