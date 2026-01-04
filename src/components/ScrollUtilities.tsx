"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const width = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(smoothProgress, [0, 0.95, 1], [1, 1, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/80 z-50 rounded-r-full shadow-[0_0_6px_rgba(var(--primary-rgb),0.4)]"
      style={{ width, opacity }}
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer flex items-center justify-center btn-glow z-50"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 20, scale: 0.9 }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ChevronUp className="h-7 w-7" />
    </motion.button>
  );
}
