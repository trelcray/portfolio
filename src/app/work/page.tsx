"use client";

import { motion } from "framer-motion";

import { Bulb } from "@/components/bulb";
import { Circles } from "@/components/circles";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { WorkSlider } from "@/components/work-slider";
import { fadeIn } from "@/utils/variants";

export default function Work() {
  return (
    <PageWrapper className="bg-primary/30 py-36 md:py-32 xl:py-0">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          <div
            className="mb-4 flex flex-col text-center lg:text-left xl:mb-0
            xl:w-[30vw]"
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[25rem] lg:mx-0"
            >
              Welcome to my work space as a dedicated front-end developer! I
              specialize in creating visually captivating and user-centric
              websites. With meticulous attention to detail, I transform ideas
              into pixel-perfect designs, ensuring a seamless and engaging user
              experience. Explore my creations to witness a collection of
              diverse projects, where each site tells a unique story through
              stunning visuals and intuitive interfaces. Let's collaborate to
              elevate your online presence and bring your digital vision to
              life!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </PageWrapper>
  );
}
