"use client";

import { motion } from "framer-motion";
import type { HowItWorksStep as StepType } from "@/lib/data";

interface HowItWorksStepProps {
  step: StepType;
  index: number;
  isLast?: boolean;
}

export function HowItWorksStep({
  step,
  index,
  isLast = false,
}: HowItWorksStepProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.2,
      }}
    >
      {!isLast && (
        <motion.div
          className="absolute left-[calc(50%+2rem)] top-7 hidden h-0.5 origin-left bg-gradient-to-r from-accent-orange/50 to-accent-orange/5 md:block"
          style={{ width: "calc(100% - 4rem)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.2 + 0.4,
          }}
        />
      )}

      <motion.div
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-orange to-accent-orange-dark text-xl font-bold text-white shadow-lg shadow-accent-orange/25"
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.2 + 0.1,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-accent-orange/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
        <span className="relative">{step.step}</span>
      </motion.div>

      <motion.h3
        className="mt-5 text-lg font-semibold text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        {step.title}
      </motion.h3>
      <motion.p
        className="mt-2 text-sm leading-relaxed text-white/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
      >
        {step.description}
      </motion.p>
    </motion.div>
  );
}
