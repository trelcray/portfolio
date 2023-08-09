import { FC } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import avatar from "@/assets/avatar.png";
import { cn } from "@/utils/cn";
import { fadeIn } from "@/utils/variants";

interface IAvatarProps {
  className: string;
}

export const Avatar: FC<IAvatarProps> = ({ className }) => {
  return (
    <motion.picture
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 1, ease: "easeInOut" }}
      className={cn("pointer-events-none absolute hidden xl:flex", className)}
    >
      <Image
        src={avatar}
        width={737}
        height={720}
        quality={100}
        sizes="(max-width: 737px) 100vw"
        className="translate-z-0 h-auto w-auto"
        alt="Avatar of adult man in glasses, with big beard and blue eyes"
      />
    </motion.picture>
  );
};
