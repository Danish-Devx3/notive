// lib/auth.ts - CORRECTED Configuration

import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { sendVerificationEmail, sendResetPasswordEmail } from "@/server/send-email";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

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
        await sendResetPasswordEmail(user.name || "there", user.email, url);
      } catch {
        throw new Error("Failed to send reset password email");
      }
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      try {
        await sendVerificationEmail(user.name || "there", user.email, url);
      } catch {
        throw new Error("Failed to send verification email");
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