import Image from "next/image";

export const TopLeftImg = () => {
  return (
    <picture
      className="pointer-events-none absolute left-0 top-0 z-10 w-[12.5rem] 
      opacity-50 mix-blend-color-dodge xl:w-[25rem]"
    >
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        quality={100}
        sizes="(max-width: 400px) 100vw)"
        className="h-auto w-full"
        alt="art"
      />
    </picture>
  );
};