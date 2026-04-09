"use client";

import type React from "react";
import { lazy, Suspense } from "react";
import { Footer } from "./common/Footer";
import { Navigation } from "./common/Navigation";
import HeadlineSection from "./sections/HeadlineSection";
import { HeroSection } from "./sections/HeroSection";

// Lazy load below-the-fold sections
const RealitySliderSection = lazy(() =>
  import("./sections/RealitySliderSection").then((m) => ({
    default: m.RealitySliderSection,
  })),
);

const PortfolioSection = lazy(() =>
  import("./sections/PortfolioSection").then((m) => ({
    default: m.PortfolioSection,
  })),
);

const WorkflowSection = lazy(() =>
  import("./sections/WorkflowSection").then((m) => ({
    default: m.WorkflowSection,
  })),
);

const TestimonialsSection = lazy(() =>
  import("./sections/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);

const CTASection = lazy(() =>
  import("./sections/CTASection").then((m) => ({
    default: m.CTASection,
  })),
);

const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0A0A0C]">
    <div className="w-12 h-12 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin" />
  </div>
);

const CinewexLanding: React.FC = () => {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container overflow-x-clip">
      <Navigation />

      <main>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <HeadlineSection />
          <RealitySliderSection />
          <PortfolioSection />
          <WorkflowSection />
          <TestimonialsSection />
          <CTASection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default CinewexLanding;
