import { memo } from "react";

interface ProgressIndicatorProps {
  readonly activeStep: number;
  readonly totalSteps: number;
}

export const ProgressIndicator = memo<ProgressIndicatorProps>(
  ({ activeStep, totalSteps }) => {
    const getStepColor = (index: number): string => {
      if (index === activeStep) {
        return index === 1 ? "bg-purple-500" : "bg-cyan-400";
      }
      return "bg-white/10";
    };

    return (
      <div className="mt-16 flex gap-4">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: list is static and has no unique IDs
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${getStepColor(
              index,
            )}`}
          />
        ))}
      </div>
    );
  },
);

ProgressIndicator.displayName = "ProgressIndicator";
