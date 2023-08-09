import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
