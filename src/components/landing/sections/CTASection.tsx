import { Button as BaseButton } from "@base-ui/react/button";
import { memo } from "react";
import { AmbientOrb } from "../common/AmbientOrb";

const buttonVariants: Record<string, string> = {
  primary: "btn-primary-gradient text-white",
  secondary: "glass-panel text-white hover:bg-white/10",
  icon: "glass-panel hover:bg-cyan-400 hover:text-black",
};

const buttonSizes: Record<string, string> = {
  sm: "px-5 py-2 text-[10px]",
  md: "px-12 py-5 text-xs",
  lg: "px-12 py-8 text-sm md:text-base",
};

const Button = memo<{
  variant?: string;
  size?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}>(({ variant = "primary", size = "lg", children, className = "" }) => {
  const baseClasses =
    "font-headline font-bold uppercase tracking-widest transition-all";
  const variantClasses = buttonVariants[variant] || buttonVariants.primary;
  const sizeClasses = buttonSizes[size] || buttonSizes.md;

  return (
    <BaseButton
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </BaseButton>
  );
});

export const CTASection = memo(() => {
  return (
    <section className="relative py-60 overflow-hidden">
      <AmbientOrb
        position="center"
        color="cyan"
        size="md"
        className="left-1/4"
      />
      <AmbientOrb
        position="center"
        color="purple"
        size="md"
        className="right-1/4"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-8">
        <h2 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter text-white mb-16 leading-none uppercase">
          READY TO <br />
          SCALE YOUR STORY?
        </h2>
        <div className="max-w-xl mx-auto">
          <Button variant="primary" size="lg" className="w-full rounded-2xl">
            Let's Build Your Campaign
          </Button>
        </div>
        <p className="mt-10 font-bold text-[10px] text-zinc-500 tracking-[0.3em] uppercase">
          Accepting new brand partnerships for Q1 2025
        </p>
      </div>
    </section>
  );
});

CTASection.displayName = "CTASection";
