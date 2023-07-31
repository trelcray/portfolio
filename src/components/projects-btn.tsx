import { HiArrowRight } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";

export const ProjectsBtn = () => {
  return (
    <Link
      href="/work"
      className="group relative z-10 flex h-[11.563rem] w-[11.563rem]
        items-center justify-center bg-circleStar bg-cover bg-center 
        bg-no-repeat p-5 2xl:h-48 2xl:w-48"
    >
      <Image
        src="/rounded-text.png"
        width={141}
        height={148}
        quality={100}
        sizes="100vw"
        className="h-auto w-full animate-spin-slow"
        alt="rounded text image"
      />
      <HiArrowRight
        className="absolute text-4xl transition-all duration-300 
          group-hover:translate-x-2"
      />
    </Link>
  );
};
