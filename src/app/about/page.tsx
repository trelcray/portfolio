"use client";

import { useState } from "react";
import CountUp from "react-countup";

import { motion } from "framer-motion";

import { Avatar } from "@/components/avatar";
import { Circles } from "@/components/circles";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { aboutData } from "@/mocks/about-data";
import { cn } from "@/utils/cn";
import { fadeIn } from "@/utils/variants";

export default function About() {
  const [index, setIndex] = useState(0);
  return (
    <PageWrapper className="bg-primary/10 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute -left-64 bottom-0 z-0 hidden xl:flex"
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto mt-28 flex h-full flex-col items-center 
        justify-center gap-x-6 pt-2 xl:mt-0 xl:flex-row"
      >
        <div
          className="flex h-full flex-col items-center justify-center 
          text-start 2xl:gap-y-3"
        >
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-10 max-w-2xl"
          >
            Captivatiang <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-6 max-w-[31.25rem] px-2 xl:mx-0 xl:mb-12 
            xl:px-0"
          >
            3 years ago, I began my journey as a developer. Since then, I've
            done remote work for company, developed for startups, and
            collaborated on digital products for bussines and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-8 hidden md:flex md:max-w-xl xl:mb-0 
            xl:max-w-none"
          >
            <div className="flex flex-1 md:gap-x-6">
              <div
                className="relative flex-1 after:absolute after:right-0 
                after:top-0 after:h-full after:w-[0.063rem] after:bg-white/10"
              >
                <div
                  className="mb-2 text-2xl font-extrabold text-accent 
                  xl:text-4xl 2xl:text-5xl"
                >
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <span
                  className="flex max-w-[6.25rem] text-xs uppercase 
                  leading-[1.4] tracking-[0.063rem] 2xl:text-sm"
                >
                  Years of experience
                </span>
              </div>

              <div
                className="relative flex-1 after:absolute after:right-0 
                after:top-0 after:h-full after:w-[0.063rem] after:bg-white/10"
              >
                <div
                  className="mb-2 text-2xl font-extrabold text-accent 
                  xl:text-4xl 2xl:text-5xl"
                >
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <span
                  className="flex max-w-[6.25rem] text-xs uppercase 
                  leading-[1.4] tracking-[0.063rem] 2xl:text-sm"
                >
                  Satisfied clients
                </span>
              </div>

              <div
                className="relative flex-1 after:absolute after:right-0 
                after:top-0 after:h-full after:w-[0.063rem] after:bg-white/10"
              >
                <div
                  className="mb-2 text-2xl font-extrabold text-accent 
                  xl:text-4xl 2xl:text-5xl"
                >
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <span
                  className="flex max-w-[6.25rem] text-xs uppercase 
                  leading-[1.4] tracking-[0.063rem] 2xl:text-sm"
                >
                  Finished Projects
                </span>
              </div>

              <div className="relative flex-1">
                <div
                  className="mb-2 text-2xl font-extrabold text-accent 
                  xl:text-4xl 2xl:text-5xl"
                >
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <span
                  className="flex max-w-[6.25rem] text-xs uppercase 
                  leading-[1.4] tracking-[0.063rem] 2xl:text-sm"
                >
                  Winning Awards
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-[32rem] w-full flex-col xl:max-w-[40%]
          2xl:max-w-[42%]"
        >
          <div
            className="mx-auto mb-4 flex gap-x-3 sm:gap-x-4 xl:mx-0 xl:gap-x-8
            2xl:gap-x-10"
          >
            {aboutData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={cn(
                    "relative cursor-pointer capitalize after:absolute",
                    "after:-bottom-1 after:left-0 md:text-lg 2xl:text-xl",
                    "after:h-[0.125rem] after:w-8 after:bg-white",
                    index === i &&
                      `text-accent duration-300 after:w-[100%]
                      after:bg-accent after:transition-all`
                  )}
                  onClick={() => setIndex(i)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="flex h-full flex-col items-center gap-y-2
            overflow-y-scroll py-2 text-center xl:items-start 
            xl:gap-y-4 xl:py-6 xl:text-start"
          >
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex max-w-max flex-col items-center gap-x-2
                  text-white/60 md:flex-row"
                >
                  <p className="mb-2 font-light md:mb-0 2xl:text-lg">
                    {item.title}
                  </p>
                  <span className="hidden md:flex">-</span>
                  <span
                    className="flex w-full justify-center md:w-auto 
                    md:justify-start"
                  >
                    {item.stage}
                  </span>
                  {item.stage2 && <span>-</span>}
                  <span>{item.stage2}</span>
                  <span className="flex gap-x-4">
                    {item.icons?.map((icon, i) => {
                      return (
                        <i className="text-2xl text-white 2xl:text-3xl" key={i}>
                          {icon}
                        </i>
                      );
                    })}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
