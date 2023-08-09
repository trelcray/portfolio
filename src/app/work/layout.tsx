import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Welcome to my work space as a dedicated front-end developer! I specialize in creating visually captivating and user-centric websites. ",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
