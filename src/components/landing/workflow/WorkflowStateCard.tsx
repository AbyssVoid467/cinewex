import { memo } from "react";
import type { WorkflowStep } from "@/types/landing";
import { Button } from "../common/Button";

interface WorkflowStateCardProps {
  readonly step: WorkflowStep;
  readonly isActive: boolean;
  readonly direction: "prev" | "current" | "next";
}

export const WorkflowStateCard = memo<WorkflowStateCardProps>(
  ({ step, isActive, direction }) => {
    const getTransformClass = (): string => {
      if (isActive) return "translate-y-0 opacity-100";
      if (direction === "prev") return "-translate-y-full opacity-0";
      return "translate-y-full opacity-0";
    };

    if (step.id === 0) {
      return (
        <div
          className={`workflow-state absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 ${getTransformClass()}`}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="font-mono text-cyan-400 text-xs tracking-widest uppercase">
                {step.tagline}
              </span>
            </div>
            <h3 className="font-headline text-4xl font-bold text-white mb-6 uppercase tracking-tight">
              {step.title}
            </h3>
            <p className="text-zinc-500 text-xl leading-relaxed">
              {step.description}
            </p>
            {step.prompt && (
              <div className="mt-8 font-mono text-xs text-white/20">
                {step.prompt}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (step.id === 1) {
      return (
        <div
          className={`workflow-state absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 ${getTransformClass()}`}
        >
          <div className="grid grid-cols-2 gap-8 w-full h-full">
            <div className="flex flex-col justify-center">
              <h3 className="font-headline text-4xl font-bold text-white mb-6 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-xl leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 group">
              <img
                alt="Storyboard concept art"
                className="w-full h-full object-cover grayscale opacity-50"
                src={step.imagePath}
              />
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-color" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`workflow-state absolute inset-0 flex items-center justify-center p-0 transition-all duration-700 ${getTransformClass()}`}
      >
        <img
          alt="Final rendered cinematic scene"
          className="w-full h-full object-cover"
          src={step.imagePath}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl text-center">
            <h3 className="font-headline text-4xl font-bold text-white mb-2 uppercase tracking-tighter">
              {step.title}
            </h3>
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
              {step.tagline}
            </p>
            <Button variant="primary" size="sm" className="mt-8 rounded-full">
              Download Assets
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

WorkflowStateCard.displayName = "WorkflowStateCard";
