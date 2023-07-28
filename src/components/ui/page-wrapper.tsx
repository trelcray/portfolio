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
        "flex h-full min-h-screen w-full items-center justify-center",
        "bg-primary/60 py-32 lg:py-0 lg:pb-2 lg:pt-10",
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
