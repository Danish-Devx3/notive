import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "Notive - A note-taking app ",
    template: "%s | Notive - A note-taking app ",
  },
  description: "Advanced note-taking app with real-time collaboration, rich text editing, and seamless organization. Perfect for students, professionals, and teams.",
  keywords: [
    'note taking app',
    'real-time notes',
    'collaborative notes',
    'rich text editor',
    'note organization',
    'productivity app',
    'TipTap editor',
    'markdown notes',
    'team collaboration',
    'note sharing',
    'digital notebook',
    'cloud notes'
  ],
  authors: [{name: "Danish Ansari", url: "https://github.com/Danish-Devx3"}],
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Notive - A note-taking app ",
    title: "Notive - A note-taking app ",
    description: "Advanced note-taking app with real-time collaboration, rich text editing, and seamless organization. Perfect for students, professionals, and teams.",
    images: [{url: `${process.env.NEXT_PUBLIC_BASE_URL}/ogimage.png}`, height: 630, width: 1200, alt: "Notive - A note-taking app "}]
  },
  verification:{
    google: "W51XKeCYGrDF1PENoxzDnzf6DYnzdF--N9-E5n0acZc"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oxanium.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </NuqsAdapter>
        </Suspense>
      </body>
    </html>
  );
}
