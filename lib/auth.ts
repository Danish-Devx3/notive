// lib/auth.ts - CORRECTED Configuration

import ResetPasswordEmail from "@/components/emails/reset-email";
import VerificationEmail from "@/components/emails/verification-email";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  // Database configuration
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  // IMPORTANT: Base URL is required
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  
  // IMPORTANT: Secret is required
  secret: process.env.BETTER_AUTH_SECRET!,

  // Email and Password authentication
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      try {
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: user.email,
          subject: "Reset Your Password",
          react: ResetPasswordEmail({
            userName: user.name || "there",
            userEmail: user.email,
            resetUrl: url,
          }),
        });
      } catch {
        throw new Error("Failed to send reset password email");
      }
    }
  },

  // EMAIL VERIFICATION - This should be at ROOT level, NOT inside advanced
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    
    sendVerificationEmail: async ({ user, url }) => {
      try {

        const { error } = await resend.emails.send({
          // CRITICAL: Use Resend test domain for development
          from: "onboarding@resend.dev",
          to: user.email,
          subject: "Verify Your Email Address",
          react: VerificationEmail({
            userName: user.name || "there",
            userEmail: user.email,
            verificationUrl: url, // Use 'verificationUrl' not 'url'
          }),
        });

        if (error) {
          console.error("❌ Resend error:", error);
          throw new Error(`Failed to send verification email: ${error.message}`);
        }

      } catch (error) {
        console.error("❌ Error sending verification email:", error);
        throw error;
      }
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  // Session configuration
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
  },

  // Advanced options
  advanced: {
    generateId: () => crypto.randomUUID(),
  },

  // Next.js plugins
  plugins: [nextCookies()],
});