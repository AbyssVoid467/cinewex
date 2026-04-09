import { UnfoldVertical } from "lucide-react";
import type React from "react";
import { memo, useRef } from "react";
import { useSliderPosition } from "@/hooks/landing/useSliderPosition";

const ADVANTAGE_FEATURES = [
  {
    id: "iterations",
    title: "Infinite Iterations",
    description: "Explore a thousand styles in seconds.",
    color: "cyan",
  },
  {
    id: "location",
    title: "Zero Location Fees",
    description: "From Mars to Metropolis, no travel needed.",
    color: "purple",
  },
  {
    id: "delivery",
    title: "Delivery in Days",
    description: "Collapse month-long schedules into 72 hours.",
    color: "cyan",
  },
] as const;

const LEGACY_CONSTRAINTS = [
  {
    id: "overhead",
    title: "High Overhead Costs",
    description: "Crew of 50+, insurance, catering, equipment rental.",
  },
  {
    id: "logistics",
    title: "Location Logistics",
    description: "Permits, scouting, weather dependency, travel time.",
  },
  {
    id: "timeline",
    title: "Months of Waiting",
    description: "Linear pipelines: Pre-production > Shoot > Long Post.",
  },
] as const;

export const RealitySliderSection = memo(() => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { position, setPosition, handleMove } = useSliderPosition(sliderRef);

  return (
    <section
      className="h-screen bg-black overflow-hidden flex flex-col"
      id="advantage"
    >
      <div
        ref={sliderRef}
        className="reality-slider relative w-full h-full cursor-ew-resize group"
        onMouseMove={handleMove}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            setPosition((p) => Math.max(0, p - 5));
          } else if (e.key === "ArrowRight") {
            setPosition((p) => Math.min(100, p + 5));
          }
        }}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={position}
        tabIndex={0}
        style={{ "--position": `${position}%` } as React.CSSProperties}
      >
        {/* Modern Side */}
        <div className="absolute inset-0 bg-linear-to-br from-on-primary to-on-secondary-fixed flex items-center justify-end px-12 md:px-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img
              alt="Vibrant AI City"
              className="w-full h-full object-cover"
              src="/assets/ai-city.jpg"
            />
          </div>
          <div className="relative z-10 text-right space-y-12 max-w-xl">
            <div className="space-y-2">
              <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px]">
                The Cinewex Way
              </span>
              <h3 className="font-headline text-5xl font-bold text-white uppercase italic">
                Hyper-Efficiency
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {ADVANTAGE_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className={`glass-panel p-6 rounded-2xl border-${feature.color}-500/30`}
                >
                  <p
                    className={`text-${feature.color}-400 font-bold text-sm tracking-widest uppercase mb-1`}
                  >
                    {feature.title}
                  </p>
                  <p className="text-white/70 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legacy Side */}
        <div className="traditional-side absolute inset-y-0 left-0 bg-zinc-900 flex items-center px-12 md:px-32 overflow-hidden border-r border-white/20">
          <div className="absolute inset-0 opacity-20 grayscale contrast-125">
            <img
              alt="Old Studio"
              className="w-full h-full object-cover"
              src="/assets/old-studio.jpg"
            />
          </div>
          <div className="relative z-10 space-y-12 max-w-xl min-w-125">
            <div className="space-y-2">
              <span className="text-zinc-500 font-bold tracking-[0.3em] uppercase text-[10px]">
                Legacy Production
              </span>
              <h3 className="font-headline text-5xl font-bold text-zinc-400 uppercase">
                Friction-Heavy
              </h3>
            </div>
            <div className="space-y-6">
              {LEGACY_CONSTRAINTS.map((constraint) => (
                <div
                  key={constraint.id}
                  className="border-l-2 border-zinc-700 pl-6"
                >
                  <p className="text-zinc-600 font-bold text-xs uppercase tracking-widest">
                    {constraint.title}
                  </p>
                  <p className="text-zinc-500 text-[10px] mt-1">
                    {constraint.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div className="slider-handle absolute inset-y-0 w-1 bg-white/50 backdrop-blur z-20 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-4 border-black/10">
            <UnfoldVertical className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
});

RealitySliderSection.displayName = "RealitySliderSection";
