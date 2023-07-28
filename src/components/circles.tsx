import Image from "next/image";

export const Circles = () => {
  return (
    <picture
      className="duration-[2000ms] pointer-events-none absolute -right-16
      bottom-0 z-10 w-[12.5rem] animate-pulse mix-blend-color-dodge 
      xl:w-[18.75rem]"
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
