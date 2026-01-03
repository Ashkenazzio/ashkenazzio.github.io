import { Variants } from 'framer-motion';

/**
 * Creates staggered container variants for animating child elements
 */
export const createContainerVariants = (
  staggerChildren: number = 0.12,
  delayChildren: number = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Creates spring-based item variants for fade + transform animations
 */
export const createItemVariants = (
  options: {
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
    stiffness?: number;
    damping?: number;
  } = {}
): Variants => {
  const { y = 25, x = 0, scale = 0.98, rotate = 0, stiffness = 100, damping = 15 } = options;

  return {
    hidden: {
      opacity: 0,
      y,
      x,
      scale,
      ...(rotate !== 0 && { rotate })
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness,
        damping,
      },
    },
  };
};

/**
 * Creates heading variants for section titles
 */
export const createHeadingVariants = (
  direction: 'x' | 'y' = 'y',
  offset: number = -20
): Variants => {
  const hidden = direction === 'x'
    ? { opacity: 0, x: offset, y: 0 }
    : { opacity: 0, y: offset, x: 0 };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  };

  return { hidden, visible };
};

/**
 * Luxurious easing function - ease-out-quint for smooth deceleration
 */
export const easeOutQuint = (t: number): number => 1 - Math.pow(1 - t, 5);

/**
 * Easing array for framer-motion cubic bezier
 */
export const easeOutQuintBezier = [0.22, 1, 0.36, 1] as const;
