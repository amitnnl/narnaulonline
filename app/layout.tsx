import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
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
    default: "NarnaulOnline Studio | Web Development & Digital Engineering Agency",
    template: "%s | NarnaulOnline Studio",
  },
  description:
    "NarnaulOnline Studio is a modern web development and digital software engineering agency founded by Amit Jangid. We engineer high-performance web applications, custom enterprise ERPs, B2B commerce platforms, and scalable cloud architectures.",
  keywords: [
    "NarnaulOnline Studio",
    "Web Development Agency",
    "Digital Software Engineering",
    "Full-Stack Web Developers",
    "Amit Jangid",
    "Next.js Development Company",
    "React 19 Web Apps",
    "Custom Enterprise ERP",
    "B2B Wholesale E-Commerce",
    "Zero-Database Architecture",
    "High-Performance Web Design",
    "TypeScript Engineering",
  ],
  authors: [{ name: "Amit Jangid • NarnaulOnline Studio", url: "https://narnaulonline.com" }],
  creator: "NarnaulOnline Studio",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NarnaulOnline Studio | Web Development & Digital Engineering Agency",
    description:
      "Engineering high-performance web applications, enterprise administrative ERPs, wholesale catalogs, and modern cloud architectures.",
    url: "https://narnaulonline.com",
    siteName: "NarnaulOnline Studio",
    images: [
      {
        url: "/logo.png",
        width: 1569,
        height: 408,
        alt: "NarnaulOnline Studio - Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NarnaulOnline Studio | Web Development & Digital Engineering Agency",
    description:
      "Engineering high-performance web applications, enterprise ERPs, and custom software architectures.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}