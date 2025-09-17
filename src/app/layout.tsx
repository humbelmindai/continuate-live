import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Continuate IT Services - Leading South African IT Solutions Provider",
  description: "Professional IT managed services, networking, CCTV, cybersecurity, and automation solutions for businesses across South Africa. 24/7 support and white-label partnerships available.",
  keywords: [
    "IT managed services South Africa",
    "IT support Johannesburg",
    "networking solutions",
    "CCTV installation",
    "cybersecurity services",
    "biometric systems",
    "office automation",
    "white label IT services"
  ],
  authors: [{ name: "Continuate IT Services" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Continuate IT Services - Leading South African IT Solutions Provider",
    description: "Professional IT managed services, networking, CCTV, cybersecurity, and automation solutions for businesses across South Africa.",
    url: "https://continuate.co.za",
    siteName: "Continuate IT Services",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuate IT Services - Leading South African IT Solutions Provider",
    description: "Professional IT managed services, networking, CCTV, cybersecurity, and automation solutions for businesses across South Africa.",
    creator: "@continuateIT",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
