"use server";

import { getResetPasswordEmailHTML, getVerificationEmailHTML } from "@/emails/email-templates";
import { transporter } from "@/lib/node-mailer";

export async function sendVerificationEmail(
  userName: string,
  userEmail: string,
  url: string
) {
  try {
    const info = await transporter.sendMail({
      from: `Notive <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Verify Your Email",
      html: getVerificationEmailHTML(userName || "there", userEmail, url),
    });
    if (!info.messageId) {
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, message: "verification email sent successfully" };
  } catch {
    return { success: false, message: "Failed to send verification email" };
  }
}

export const sendResetPasswordEmail = async (
  userName: string,
  userEmail: string,
  resetUrl: string
) => {
   try {
    const info = await transporter.sendMail({
      from: `Notive <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Verify Your Email",
      html: getResetPasswordEmailHTML(userName || "there", userEmail, resetUrl),
    });
    if (!info.messageId) {
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, message: "verification email sent successfully" };
  } catch {
    return { success: false, message: "Failed to send verification email" };
  }
};
