"use client";

import { useState, useRef, ReactNode, MouseEvent, CSSProperties } from "react";
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
  glowColor = "rgba(var(--primary-rgb), 0.15)",
  borderColor = "rgba(var(--primary-rgb), 0.4)",
  style,
  innerStyle,
}: HoverCardEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative h-full", containerClassName)}
      style={{
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 40px -10px rgba(var(--primary-rgb), 0.2)"
          : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ...style,
      }}
    >
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-300 backdrop-blur-sm h-full",
          className
        )}
        style={innerStyle}
      >
        {/* Base border - always visible */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] border-[2px] border-white/10"
        />
        {/* Glow effect layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 overflow-hidden rounded-[inherit]"
          style={{
            background: `radial-gradient(150px 150px at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
        {/* Border highlight effect layer */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300 rounded-[inherit]"
          style={{
            inset: 0,
            border: `2px solid ${borderColor}`,
            WebkitMaskImage: `radial-gradient(120px 120px at ${mousePosition.x}px ${mousePosition.y}px, white 30%, transparent 65%)`,
            maskImage: `radial-gradient(120px 120px at ${mousePosition.x}px ${mousePosition.y}px, white 30%, transparent 65%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {/* Card content */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}
