import Image from "next/image";

export const Circles = () => {
  return (
    <picture
      className="hidden md:pointer-events-none md:absolute md:-bottom-8 
      md:-right-24 md:z-10 md:flex md:w-[16rem] md:animate-pulse 
      md:mix-blend-color-dodge md:duration-2000 lg:-bottom-12 lg:-right-32 
      xl:w-[18.75rem] 2xl:-bottom-6 2xl:-right-16"
    >
      <Image
        src="/circles.png"
        width={260}
        height={200}
        sizes="100vw"
        quality={100}
        className="h-auto w-full"
        alt="one circles image"
      />
    </picture>
  );
};
