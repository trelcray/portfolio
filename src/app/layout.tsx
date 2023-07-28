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

const urlShare = "https://thaliszambarda.vercel.app";
const titleShare = "Portfolio";
const descriptionShare =
  "Explore my portfolio and discover how my skills turn complexity into simplicity";

export const metadata: Metadata = {
  title: titleShare,
  description: descriptionShare,
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: titleShare,
    description: descriptionShare,
    url: urlShare,
    siteName: titleShare,
    images: [
      {
        url: `${urlShare}/opengraph-image.png`,
        width: 800,
        height: 546,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(urlShare),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
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
