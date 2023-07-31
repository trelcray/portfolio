"use client";

import { motion } from "framer-motion";

import { Bulb } from "@/components/bulb";
import { Circles } from "@/components/circles";
import { ServiceSlider } from "@/components/service-slider";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { fadeIn } from "@/utils/variants";

export default function Services() {
  return (
    <PageWrapper className="bg-primary/30 py-32 xl:px-10">
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
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[25rem] lg:mx-0"
            >
              My services encompass web development, SEO, design, and
              copywriting - all tailored to deliver captivating online
              experiences and drive business growth.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[62%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </PageWrapper>
  );
}
