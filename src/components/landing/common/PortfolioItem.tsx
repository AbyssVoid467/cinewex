import { ArrowUpRight } from "lucide-react";
import { memo, useCallback } from "react";
import type {
  BackgroundId,
  PortfolioItem as PortfolioItemType,
} from "@/types/landing";

interface PortfolioItemProps {
  readonly item: PortfolioItemType;
  readonly onMouseEnter: (backgroundId: BackgroundId) => void;
  readonly onMouseLeave: (backgroundId: BackgroundId) => void;
}

export const PortfolioItem = memo<PortfolioItemProps>(
  ({ item, onMouseEnter, onMouseLeave }) => {
    const handleMouseEnter = useCallback(() => {
      onMouseEnter(item.backgroundId);
    }, [item.backgroundId, onMouseEnter]);

    const handleMouseLeave = useCallback(() => {
      onMouseLeave(item.backgroundId);
    }, [item.backgroundId, onMouseLeave]);

    const borderColorClass =
      item.hoverColor === "cyan"
        ? "hover:border-cyan-400"
        : "hover:border-purple-400";

    return (
      <button
        type="button"
        className={`portfolio-item group w-full text-left py-8 border-b border-white/10 ${borderColorClass} transition-colors`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-4xl md:text-6xl font-bold text-white transition-all duration-500 group-hover:translate-x-4">
            {item.title} — {item.category}
          </h3>
          <ArrowUpRight className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </button>
    );
  },
);

PortfolioItem.displayName = "PortfolioItem";
