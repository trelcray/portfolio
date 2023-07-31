import { HiArrowRight } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";

import roundedText from "@/assets/rounded-text.png";

export const ProjectsBtn = () => {
  return (
    <Link
      href="/work"
      className="group relative z-10 flex h-[11.563rem] w-[11.563rem]
        items-center justify-center bg-circleStar bg-cover bg-center 
        bg-no-repeat 2xl:h-48 2xl:w-48"
    >
      <Image
        src={roundedText}
        width={141}
        height={148}
        quality={100}
        sizes="(max-width: 348px) 100vw"
        className="h-[9.25rem] w-[8.813rem] animate-spin-slow"
        alt="rounded text image"
      />
      <HiArrowRight
        className="absolute text-4xl transition-all duration-300 
          group-hover:translate-x-2"
      />
    </Link>
  );
};
