import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export const metadata = {
  metadataBase: new URL("https://narnaulonline.com"),
  title: {
    default: "Amit Jangid | Full-Stack Web Developer & AI Automation Builder",
    template: "%s | Amit Jangid",
  },
  description:
    "Explore Amit Jangid's portfolio of web applications, AI automation concepts, business management systems, e-commerce platforms, and digital solutions.",
  keywords: [
    "Amit Jangid",
    "Amit Jangid portfolio",
    "Full-stack web developer",
    "Web application development",
    "AI automation developer",
    "AI agent workflows",
    "Business software development",
    "E-commerce development",
    "PHP and React applications",
    "Microfinance software",
    "Inventory management systems",
    "NarnaulOnline",
    "Haryana India",
  ],

  authors: [{ name: "Amit Jangid", url: "https://narnaulonline.com" }],
  creator: "Amit Jangid",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Amit Jangid | Developer & Technical Consultant",
    description:
      "Building practical software, DMIT calculation systems, inventory platforms, and digital products for real-world businesses.",
    url: "https://narnaulonline.com",
    siteName: "NarnaulOnline - Amit Jangid",
    images: [
      {
        url: "/logo.png",
        width: 1569,
        height: 408,
        alt: "Amit Jangid - NarnaulOnline",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amit Jangid | Developer & Technical Consultant",
    description:
      "Custom business software, DMIT intelligence platforms, and modern web applications.",
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
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}