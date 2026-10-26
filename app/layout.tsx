import { Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});


export const metadata = {
  metadataBase: new URL("https://narnaulonline.com"),
  title: {
    default: "NarnaulOnline | Full-Stage Software Development Organization",
    template: "%s | NarnaulOnline",
  },
  description:
    "NarnaulOnline is a full-stage digital software development organization founded by Amit Jangid. Building custom web applications, administrative ERPs, e-commerce systems, and modern digital platforms with zero database overhead.",
  keywords: [
    "NarnaulOnline",
    "Software Development Company",
    "Web Application Development Agency",
    "Full-Stage Development Organization",
    "Amit Jangid",
    "Website Design Company in India",
    "Custom ERP Development",
    "E-Commerce Solutions",
    "Zero-Database Architecture",
    "React and Next.js Development",
    "Haryana India Web Developers",
  ],

  authors: [{ name: "NarnaulOnline • Amit Jangid", url: "https://narnaulonline.com" }],
  creator: "NarnaulOnline",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NarnaulOnline | Full-Stage Digital Software Development Organization",
    description:
      "Enterprise-grade web applications, business portals, and digital software development with high performance, tailored milestone scopes, and zero database overhead.",
    url: "https://narnaulonline.com",
    siteName: "NarnaulOnline",
    images: [
      {
        url: "/logo.png",
        width: 1569,
        height: 408,
        alt: "NarnaulOnline - Digital Development Organization",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NarnaulOnline | Full-Stage Digital Software Development Organization",
    description:
      "Custom business software, administrative portals, and modern web applications with tailored milestone scopes and zero database overhead.",
  },
  alternates: {
    canonical: "https://narnaulonline.com",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}