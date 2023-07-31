"use client";

import { FC, ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Transition } from "@/components/transition";
import { cn } from "@/utils/cn";

interface IPageWrapperProps {
  children: ReactNode;
  className?: string;
}

export const PageWrapper: FC<IPageWrapperProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        "relative flex h-full min-h-screen w-full items-center justify-center",
        "overflow-hidden bg-primary/60 py-32 lg:py-20 lg:pb-2",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div>
          <Transition />
        </motion.div>
      </AnimatePresence>
      {children}
    </main>
  );
};
