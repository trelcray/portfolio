import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "My services encompass web development, SEO, design, and copywriting - all tailored to deliver captivating online experiences and drive business growth.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
