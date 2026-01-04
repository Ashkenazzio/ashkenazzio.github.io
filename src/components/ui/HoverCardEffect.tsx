"use client";

import { useState, useRef, useEffect, ReactNode, MouseEvent, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface HoverCardEffectProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  glowColor?: string;
  borderColor?: string;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
}

export function HoverCardEffect({
  children,
  className,
  containerClassName,
  glowColor,
  borderColor,
  style,
  innerStyle,
}: HoverCardEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [primaryRgb, setPrimaryRgb] = useState("15, 120, 112");
  const [isTouch, setIsTouch] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect touch device
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
  }, []);

  // Watch for touch-active class changes (managed by TouchHoverProvider)
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const hasClass = cardRef.current?.classList.contains("touch-active") ?? false;
          setIsTouchActive(hasClass);
        }
      });
    });

    observer.observe(cardRef.current, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Watch for theme changes and update the primary color
  useEffect(() => {
    const updatePrimaryColor = () => {
      const root = document.documentElement;
      const computedStyle = getComputedStyle(root);
      const primaryRgbValue = computedStyle.getPropertyValue("--primary-rgb").trim();
      if (primaryRgbValue) {
        setPrimaryRgb(primaryRgbValue);
      }
    };

    // Initial update
    updatePrimaryColor();

    // Watch for class changes on html element (theme switching)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          // Small delay to ensure CSS variables have updated
          requestAnimationFrame(updatePrimaryColor);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Use props if provided, otherwise use the dynamic primary color
  const effectiveGlowColor = glowColor || `rgba(${primaryRgb}, 0.15)`;
  const effectiveBorderColor = borderColor || `rgba(${primaryRgb}, 0.4)`;
  const effectiveShadowColor = `rgba(${primaryRgb}, 0.2)`;

  // Show hover effects on desktop hover OR on touch when this card is active
  const showEffects = (!isTouch && isHovered) || (isTouch && isTouchActive);

  return (
    <div
      ref={cardRef}
      data-touch-hover
      onMouseMove={isTouch ? undefined : handleMouseMove}
      onMouseEnter={isTouch ? undefined : handleMouseEnter}
      onMouseLeave={isTouch ? undefined : handleMouseLeave}
      className={cn("relative h-full rounded-[inherit]", containerClassName)}
      style={{
        transform: showEffects ? "translateY(-5px)" : "translateY(0)",
        boxShadow: showEffects
          ? `0 10px 40px -10px ${effectiveShadowColor}`
          : "none",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        ...style,
      }}
    >
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-300 backdrop-blur-sm h-full shadow-sm dark:shadow-none border border-gray-200/60 dark:border-white/10",
          className
        )}
        style={innerStyle}
      >
        {/* Glow effect layer - on desktop only (follows cursor) */}
        {!isTouch && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 overflow-hidden rounded-[inherit]"
            style={{
              background: `radial-gradient(150px 150px at ${mousePosition.x}px ${mousePosition.y}px, ${effectiveGlowColor}, transparent 70%)`,
              opacity: showEffects ? 1 : 0,
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
        )}
        {/* Border highlight effect - on desktop follows cursor, on touch shows full border */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300 rounded-[inherit]"
          style={{
            inset: -1,
            border: `3px solid ${effectiveBorderColor}`,
            boxShadow: `0 0 10px 0 ${effectiveBorderColor}`,
            // On desktop: radial mask following cursor. On touch: full border
            WebkitMaskImage: isTouch
              ? undefined
              : `radial-gradient(120px 120px at ${mousePosition.x + 1}px ${mousePosition.y + 1}px, white 30%, transparent 65%)`,
            maskImage: isTouch
              ? undefined
              : `radial-gradient(120px 120px at ${mousePosition.x + 1}px ${mousePosition.y + 1}px, white 30%, transparent 65%)`,
            opacity: showEffects ? (isTouch ? 0.6 : 1) : 0,
          }}
        />
        {/* Card content */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}
