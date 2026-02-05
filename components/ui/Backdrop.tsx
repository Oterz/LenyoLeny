"use client";

import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BackdropProps {
  readonly isOpen: boolean;
  readonly onClick?: () => void;
  readonly className?: string;
  readonly zIndex?: number;
  readonly duration?: number;
}

export const Backdrop = memo(function Backdrop({
  isOpen,
  onClick,
  className,
  zIndex = 40,
  duration = 200,
}: BackdropProps) {
  const [mounted, setMounted] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else {
      const timeout = setTimeout(() => {
        return setMounted(false);
      }, duration);
      return () => {
        return clearTimeout(timeout);
      };
    }
  }, [isOpen, duration]);

  if (!mounted) return null;

  return (
    <div
      onClick={onClick}
      role="presentation"
      aria-hidden="true"
      style={{ transitionDuration: `${duration}ms`, zIndex }}
      className={cn(
        "fixed inset-0 bg-black/50 transition-opacity",
        isOpen ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
});
