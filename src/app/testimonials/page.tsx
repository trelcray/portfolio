"use client";

import { motion } from "framer-motion";

import { TestimonialSlider } from "@/components/testimonial-slider";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { fadeIn } from "@/utils/variants";

export default function Testimonials() {
  return (
    <PageWrapper className="bg-primary/30 text-center xl:py-5">
      <div className="container mx-auto flex h-full flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </PageWrapper>
  );
}
