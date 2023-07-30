import type { Metadata } from "next";
import { Sora } from "next/font/google";

import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { TopLeftImg } from "@/components/top-left-img";
import { Toaster } from "@/components/ui/Toaster";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "Portfolio",
    "Web Development",
    "Software Developer",
    "Frontend Developer",
  ],
  authors: [
    {
      name: "trelcray",
      url: siteConfig.url,
    },
  ],
  creator: "trelcray",
  themeColor: "black",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@thaliszambarda",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "relative bg-site bg-cover bg-repeat font-sora text-white",
          sora.variable
        )}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
