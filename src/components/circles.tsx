import Image from "next/image";

import circles from "@/assets/circles.png";

export const Circles = () => {
  return (
    <picture
      className="hidden md:pointer-events-none md:absolute md:-bottom-8 
      md:-right-24 md:z-10 md:flex md:w-[16rem] md:animate-pulse 
      md:mix-blend-color-dodge md:duration-2000 lg:-bottom-12 lg:-right-32 
      xl:w-[18.75rem] 2xl:-bottom-6 2xl:-right-16"
    >
      <Image
        src={circles}
        width={260}
        height={200}
        sizes="(max-width: 260px) 100vw"
        quality={100}
        className="h-auto w-auto"
        alt="one circles image"
      />
    </picture>
  );
};
