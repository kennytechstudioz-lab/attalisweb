import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Attalis Capital | Secure Oil & Gas Investment Platform",
    template: "%s | Attalis Capital"
  },
  description: "Attalis Capital is a world-class Oil and Gas energy company. Secure robust daily compound returns from managed crude oil tranches, natural gas pipelines, and clean-energy transitions directly through our secure, high-yield digital investment platform.",
  keywords: ["Attalis Capital", "Attalis Capital", "Oil and Gas Investment", "Energy Invest Platform", "Daily Yield returns", "Crude Oil Tranches", "Natural Gas Investment", "Passive energy returns", "Secure yield platform", "sustainable energy investment", "daily oil returns"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Attalis Capital | Secure Oil & Gas Investment Platform",
    description: "Attalis Capital is a world-class Oil and Gas energy company. Secure robust daily compound returns from managed crude oil tranches, natural gas pipelines, and clean-energy transitions directly through our secure, high-yield digital investment platform.",
    url: "https://dominiongroup.online",
    siteName: "Attalis Capital",
    images: [
      {
        url: "/AttalisLogo.png",
        width: 800,
        height: 600,
        alt: "Attalis Capital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attalis Capital | Secure Oil & Gas Investment Platform",
    description: "Attalis Capital is a world-class Oil and Gas energy company. Secure robust daily compound returns from managed crude oil tranches, natural gas pipelines, and clean-energy transitions directly through our secure, high-yield digital investment platform.",
    images: ["/AttalisLogo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
