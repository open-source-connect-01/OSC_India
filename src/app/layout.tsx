import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://opensourceconnect.in"
  ),
  title: {
    default: "Open Source Connect | Connecting The World Through Open Source",
    template: "%s | Open Source Connect",
  },
  description:
    "Open Source Connect (OSC) provides community infrastructure, operational support, educational programs, and collaboration opportunities to help open source projects, contributors, and organizations grow sustainably.",
  keywords: [
    "Open Source",
    "OSC",
    "Open Source India",
    "Open Source Community",
    "Software Collaboration",
    "Tech Community",
    "Open Source Infrastructure",
  ],
  authors: [{ name: "Open Source Connect Team" }],
  openGraph: {
    title: "Open Source Connect | Connecting The World Through Open Source",
    description:
      "Open Source Connect (OSC) provides community infrastructure, operational support, educational programs, and collaboration opportunities to help open source projects, contributors, and organizations grow sustainably.",
    url: "https://opensourceconnect.in",
    siteName: "Open Source Connect (OSC)",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Source Connect - Connecting The World Through Open Source",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Connect | Connecting The World Through Open Source",
    description:
      "Open Source Connect (OSC) provides community infrastructure, operational support, educational programs, and collaboration opportunities to help open source projects, contributors, and organizations grow sustainably.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
