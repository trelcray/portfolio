import Link from "next/link";

import { Socials } from "./socials";

export const Header = () => {
  return (
    <header
      className="absolute z-30 flex w-full items-center px-2 xl:h-[5.625rem] 
      xl:px-0"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col items-center justify-between gap-y-6 py-8 
          md:flex-row"
        >
          <Link href="/">
            <p className="text-3xl font-extralight text-white 2xl:text-5xl">
              <strong className="font-extrabold">Thalis</strong> Zambarda
              <span className="font-light text-accent">.</span>
            </p>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};
