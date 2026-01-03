"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Wraps the app with MotionConfig to respect user's reduced motion preference.
 * When reducedMotion="user", Framer Motion automatically disables animations
 * for users who have enabled "Reduce motion" in their OS accessibility settings.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
