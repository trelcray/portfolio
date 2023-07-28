import Image from "next/image";

export const Avatar = () => {
  return (
    <picture className="pointer-events-none hidden xl:flex xl:max-w-[1200px]">
      <Image
        src="/avatar.png"
        width={737}
        height={720}
        quality={100}
        sizes="(max-width: 737px) 100vw)"
        className="translate-z-0 h-auto w-auto"
        alt="Avatar of adult man in glasses, with big beard and blue eyes"
      />
    </picture>
  );
};
