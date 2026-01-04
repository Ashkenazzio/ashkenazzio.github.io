'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TerminalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  idleTimeout?: number;
}

export function TerminalLogo({
  className = '',
  size = 'md',
  animated = true,
  idleTimeout = 8000,
}: TerminalLogoProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(animated);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerAnimation = useCallback(() => {
    setAnimationKey(prev => prev + 1);
    setShouldAnimate(true);
  }, []);

  useEffect(() => {
    if (!animated) {
      return;
    }

    let scrollDebounceTimer: ReturnType<typeof setTimeout> | null = null;
    const isAtTop = () => window.scrollY <= 20;

    const startIdleTimer = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = setTimeout(() => {
        // Trigger animation once when idle - cursor will keep blinking infinitely
        triggerAnimation();
      }, idleTimeout);
    };

    const stopAnimation = () => {
      setShouldAnimate(false);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    // Debounced scroll handler
    const handleScroll = () => {
      stopAnimation();
      if (scrollDebounceTimer) {
        clearTimeout(scrollDebounceTimer);
      }
      scrollDebounceTimer = setTimeout(() => {
        // If at top after scrolling stops, animate immediately
        if (isAtTop()) {
          triggerAnimation();
        } else {
          startIdleTimer();
        }
      }, 150);
    };

    const resetTimer = () => {
      // Only stop and wait for idle if scrolled down
      if (!isAtTop()) {
        stopAnimation();
        startIdleTimer();
      }
      // If at top, keep animation running
    };

    // On mount: animate immediately if at top, otherwise start idle timer
    if (isAtTop()) {
      triggerAnimation();
    } else {
      startIdleTimer();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', resetTimer, { passive: true });
    window.addEventListener('touchstart', resetTimer, { passive: true });
    window.addEventListener('click', resetTimer, { passive: true });

    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      if (scrollDebounceTimer) {
        clearTimeout(scrollDebounceTimer);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
      window.removeEventListener('click', resetTimer);
    };
  }, [animated, idleTimeout, triggerAnimation]);

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
