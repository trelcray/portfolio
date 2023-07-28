import type { Metadata } from "next";
import { Sora } from "next/font/google";

import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { TopLeftImg } from "@/components/top-left-img";
import { Toaster } from "@/components/ui/Toaster";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore my portfolio and discover how my skills turn complexity into simplicity",
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative bg-site bg-cover bg-no-repeat font-sora text-white",
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
