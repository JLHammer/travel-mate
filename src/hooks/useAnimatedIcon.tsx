import { useAnimation } from "motion/react";
import type { ForwardedRef, MouseEvent, MouseEventHandler } from "react";
import { useCallback, useImperativeHandle, useRef } from "react";
import type { AnimatedIconHandle } from "../types";

type HoverHandlers = {
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
};

/*
 * Shared control logic for lucide-animated icons.
 * Uncontrolled: the icon animates on its own hover.
 * Controlled (a parent attaches a ref): the parent drives it via
 * startAnimation/stopAnimation and the icon's own hover is passed through.
 */
export const useAnimatedIcon = (
  ref: ForwardedRef<AnimatedIconHandle>,
  { onMouseEnter, onMouseLeave }: HoverHandlers
) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e);
      } else {
        controls.start("animate");
      }
    },
    [controls, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e);
      } else {
        controls.start("normal");
      }
    },
    [controls, onMouseLeave]
  );

  return {
    controls,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};
