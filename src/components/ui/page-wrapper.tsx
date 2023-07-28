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
        "flex min-h-screen items-center justify-center bg-primary/60",
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
