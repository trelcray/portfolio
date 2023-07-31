import Image from "next/image";

import topLeftImg from "@/assets/top-left-img.png";

export const TopLeftImg = () => {
  return (
    <picture
      className="pointer-events-none absolute left-0 top-0 z-10  
      opacity-50 mix-blend-color-dodge"
    >
      <Image
        src={topLeftImg}
        width={400}
        height={400}
        quality={100}
        className="h-auto w-auto"
        sizes="(max-width: 400px) 100vw"
        alt="artistic image"
      />
    </picture>
  );
};
