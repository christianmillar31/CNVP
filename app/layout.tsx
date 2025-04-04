import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cardinal North | Investment Banking Advisory",
  description: "Cardinal North provides expert investment banking advisory services, specializing in financial due diligence, risk assessment, and comprehensive transaction analysis.",
  keywords: "investment banking, financial advisory, due diligence, risk assessment, transaction analysis, Cardinal North, investment banking advisory",
  openGraph: {
    title: "Cardinal North | Investment Banking Advisory",
    description: "Expert investment banking advisory services, specializing in financial due diligence and transaction analysis.",
    url: "https://cardinalnorth.com",
    siteName: "Cardinal North",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cardinal North - Investment Banking Advisory"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardinal North | Investment Banking Advisory",
    description: "Expert investment banking advisory services, specializing in financial due diligence and transaction analysis.",
    images: ["/og-image.jpg"],
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
    google: "your-google-verification-code", // You'll need to add this later
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://cardinalnorth.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
