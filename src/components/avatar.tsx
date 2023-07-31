import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "@/utils/variants";

export const Avatar = () => {
  return (
    <motion.picture
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="pointer-events-none absolute bottom-0 right-20 hidden xl:flex"
    >
      <Image
        src="/avatar.png"
        width={737}
        height={720}
        quality={100}
        sizes="(max-width: 737px) 100vw)"
        className="translate-z-0 h-auto w-auto"
        alt="Avatar of adult man in glasses, with big beard and blue eyes"
      />
    </motion.picture>
  );
};
