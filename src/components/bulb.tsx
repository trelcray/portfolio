import Image from "next/image";

import bulb from "@/assets/bulb.png";

export const Bulb = () => {
  return (
    <picture
      className="pointer-events-none absolute -bottom-28 -left-32 z-10 hidden 
      w-[12.5rem] rotate-45 animate-pulse mix-blend-color-dodge duration-2000 
      md:flex xl:-bottom-28 xl:w-[16.25rem]"
    >
      <Image
        src={bulb}
        width={200}
        height={210}
        sizes="(max-width: 200px) 100vw"
        quality={100}
        className="h-auto w-auto"
        alt="one bulb image"
      />
    </picture>
  );
};
