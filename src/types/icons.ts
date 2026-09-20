import type { HTMLAttributes } from "react";

/* Imperative API exposed by every animated icon (lucide-animated style) */
export interface AnimatedIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}
