"use client";

import { createContext, useState, useEffect, ReactNode, useRef } from "react";

interface TouchHoverContextType {
  activeElements: HTMLElement[];
  isTouch: boolean;
}

const TouchHoverContext = createContext<TouchHoverContextType>({
  activeElements: [],
  isTouch: false,
});

export function TouchHoverProvider({ children }: { children: ReactNode }) {
  const [activeElements, setActiveElements] = useState<HTMLElement[]>([]);
  const [isTouch, setIsTouch] = useState(false);
  const previousElements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
  }, []);

  // Manage touch-active class on elements
  useEffect(() => {
    // Remove class from previous elements that are no longer active
    previousElements.current.forEach((el) => {
      if (!activeElements.includes(el)) {
        el.classList.remove("touch-active");
      }
    });

    // Add class to all active elements
    activeElements.forEach((el) => {
      el.classList.add("touch-active");
    });

    previousElements.current = activeElements;
  }, [activeElements]);

  // Handle touch events globally
  useEffect(() => {
    if (!isTouch) return;

    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;

      // Find all ancestor elements with data-touch-hover (including the target itself)
      const touchHoverElements: HTMLElement[] = [];
      let current: HTMLElement | null = target;

      while (current) {
        if (current.hasAttribute("data-touch-hover")) {
          touchHoverElements.push(current);
        }
        current = current.parentElement;
      }

      if (touchHoverElements.length > 0) {
        // Touched touch-hover element(s) - activate all of them
        setActiveElements(touchHoverElements);
      } else {
        // Touched outside - clear active state
        setActiveElements([]);
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    return () => document.removeEventListener("touchstart", handleTouchStart);
  }, [isTouch]);

  return (
    <TouchHoverContext.Provider value={{ activeElements, isTouch }}>
      {children}
    </TouchHoverContext.Provider>
  );
}

export { TouchHoverContext };
