import { type RefObject, useCallback, useState } from "react";
import { SLIDER_CONSTRAINTS } from "@/constants/landing/animations";
import { clamp } from "@/utils/landing/math";

interface UseSliderPositionReturn {
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  handleMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const useSliderPosition = (
  sliderRef: RefObject<HTMLDivElement | null>,
): UseSliderPositionReturn => {
  const [position, setPosition] = useState<number>(
    SLIDER_CONSTRAINTS.DEFAULT_POSITION,
  );

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (!sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const rawPosition = ((e.clientX - rect.left) / rect.width) * 100;
      const clampedPosition = clamp(
        rawPosition,
        SLIDER_CONSTRAINTS.MIN_POSITION,
        SLIDER_CONSTRAINTS.MAX_POSITION,
      );

      setPosition(clampedPosition);
    },
    [sliderRef],
  );

  return { position, setPosition, handleMove };
};
