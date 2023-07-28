"use client";

import { motion } from "framer-motion";

import { Avatar } from "@/components/avatar";
import { ProjectsBtn } from "@/components/projects-btn";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { fadeIn } from "@/utils/variants";

export default function Home() {
  return (
    <PageWrapper>
      <div
        className="flex h-full min-h-screen w-full bg-gradient-to-r from-primary/10
        via-black/30 to-black/10 pb-24 pt-32 xl:py-0 "
      >
        <div
          className="container mx-auto flex h-full flex-col justify-center 
          text-center xl:pt-20 xl:text-left"
        >
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            Welcome to my world as a front-end developer! With expertise in
            HTML, CSS, and JavaScript, I bring elegant and intuitive interfaces
            to life. Explore my portfolio and discover how my skills turn
            complexity into simplicity, providing memorable digital experiences.
            Let's embark on this technological journey together!
          </motion.p>
          <div className="flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-full w-[75rem] overflow-hidden">
        <div
          className="translate-z-0 absolute h-full w-full bg-none mix-blend-color-dodge 
          xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat"
        ></div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-52 -right-20 h-full max-h-[42.375rem] w-full
          max-w-[46.063rem]"
        >
          <Avatar />
        </motion.div>
      </div>
    </PageWrapper>
  );
}
