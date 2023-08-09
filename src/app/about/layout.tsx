import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Captivatiang stories birth magnificent designs.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
