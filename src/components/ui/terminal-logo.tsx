'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TerminalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function TerminalLogo({
  className = '',
  size = 'md',
  animated = true
}: TerminalLogoProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(animated);
  const wasScrolledRef = useRef(false);

  useEffect(() => {
    if (!animated) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;

      // Detect transition from scrolled -> top
      if (wasScrolledRef.current && !isScrolled) {
        setAnimationKey(prev => prev + 1);
        setShouldAnimate(true);
      } else if (isScrolled) {
        setShouldAnimate(false);
      }

      wasScrolledRef.current = isScrolled;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const cursorSizes = {
    sm: 'w-[0.45em] h-[1em]',
    md: 'w-[0.5em] h-[1.1em]',
    lg: 'w-[0.5em] h-[1.15em]',
  };

  // Typing delays for each character
  const typeDelayO = 0.5;
  const typeDelayA = 0.85;
  const blinkStartDelay = 0.85;

  const showAnimated = animated && shouldAnimate;

  return (
    <span className={`font-mono font-bold text-primary inline-flex items-center ${sizeClasses[size]} ${className}`}>
      <span className="opacity-60">&gt;</span>
      <span className="ml-[0.15em] inline-flex overflow-hidden">
        {showAnimated ? (
          <motion.span
            key={`text-${animationKey}`}
            className="inline-flex"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 0.01, delay: typeDelayO }}
            >
              O
            </motion.span>
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              transition={{ duration: 0.01, delay: typeDelayA }}
            >
              A
            </motion.span>
          </motion.span>
        ) : (
          <span>OA</span>
        )}
      </span>
      {showAnimated && (
        <motion.span
          key={`cursor-${animationKey}`}
          className={`inline-block bg-primary ${cursorSizes[size]} translate-y-[0.05em]`}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            times: [0, 0.5, 0.5, 1],
            delay: blinkStartDelay,
          }}
        />
      )}
    </span>
  );
}
