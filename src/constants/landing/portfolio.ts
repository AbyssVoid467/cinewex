import type { PortfolioItem } from "@/types/landing";

export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    id: "ai-product-ads",
    title: "AI Product Ads",
    backgroundId: "bg-neon",
    hoverColor: "cyan",
    imagePath:
      "https://static.vecteezy.com/system/resources/previews/040/956/300/large_2x/energy-drink-ad-design-on-exploding-powder-effect-background-in-3d-illustration-vector.jpg",
    backgroundColor: "#001f24",
  },
  {
    id: "ai-tv-commercial",
    title: "AI TV commercial production",
    backgroundId: "bg-aura",
    hoverColor: "purple",
    imagePath:
      "https://falloffthewall.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-13-at-13.33.12.png",
    backgroundColor: "#2c0051",
  },
  {
    id: "ai-social-media-ads",
    title: "ai social media ads",
    backgroundId: "bg-lumina",
    hoverColor: "cyan",
    imagePath:
      "https://zeely.ai/blog/wp-content/uploads/2025/12/social-media-campaign-examples-optimized.jpg",
    backgroundColor: "#00363d",
  },
  {
    id: "brand-ad-campaigns",
    title: "Brand Ad Campaigns",
    backgroundId: "bg-orion",
    hoverColor: "purple",
    imagePath:
      "https://images.examples.com/wp-content/uploads/2018/04/Black-Friday-Billboard-Design-Example.jpg",
    backgroundColor: "#1c1b1d",
  },
] as const;
