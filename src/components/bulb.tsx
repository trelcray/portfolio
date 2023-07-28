import Image from "next/image";

export const Bulb = () => {
  return (
    <picture
      className="duration-[2000ms] pointer-events-none absolute -bottom-12 
      -left-44 z-10 hidden w-[12.5rem] rotate-90 animate-pulse 
      mix-blend-color-dodge lg:flex xl:bottom-2 xl:w-[16.25rem] xl:rotate-3"
    >
      <Image
        src="/bulb.png"
        width={200}
        height={210}
        sizes="100vw"
        quality={100}
        className="h-auto w-full"
        alt="one bulb image"
      />
    </picture>
  );
};
