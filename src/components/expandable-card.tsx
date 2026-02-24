"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCardProps {
  header: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function ExpandableCard({
  header,
  children,
  className = "",
  contentClassName = "",
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((prev) => !prev);
        }
      }}
      className={`cursor-pointer ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">{header}</div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden ${contentClassName}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
