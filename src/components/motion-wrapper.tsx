'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

type MotionDivProps = {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  variants?: any;
};

export function MotionDiv({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  variants,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
} 