"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/mocks/links";
import { cn } from "@/utils/cn";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-y-0 z-50 mt-auto flex h-max w-full flex-col items-center 
      gap-y-4 xl:right-2 xl:h-screen xl:w-16 xl:max-w-md xl:justify-center"
    >
      <div
        className="flex h-[5rem] w-full items-center justify-between gap-y-10
       bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max 
       xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl"
      >
        {links.map((link, i) => {
          return (
            <Link
              className={cn(
                "group relative flex items-center transition-all duration-300 hover:text-accent",
                link.path === pathname && "text-accent"
              )}
              key={i}
              href={link.path}
              aria-label={link.label}
            >
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-[0.188rem] bg-white p-[0.375rem] text-primary">
                  <span className="text-[0.75rem] font-semibold capitalize leading-none">
                    {link.name}
                  </span>
                  <div
                    className="absolute -right-2 border-y-[0.375rem] border-l-8 
                  border-r-0 border-solid border-y-transparent border-l-white"
                  />
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
