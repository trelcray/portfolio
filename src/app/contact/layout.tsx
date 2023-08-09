import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's connect.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
