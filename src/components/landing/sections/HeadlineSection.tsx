"use client";

import { useEffect, useState } from "react";
import DecryptedText from "@/components/ui/DecryptedText";

const images = [
  "https://picsum.photos/400/600?random=1",
  "https://picsum.photos/400/600?random=2",
  "https://picsum.photos/400/600?random=3",
];

export default function HeadlineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getImageClasses = (index: number) => {
    // Calculate positions based on rotation: Right->Center->Left->Right
    const centerIndex = (3 - activeIndex) % 3;
    const leftIndex = (4 - activeIndex) % 3;
    const rightIndex = (5 - activeIndex) % 3;

    const baseClasses =
      "absolute w-64 h-96 object-cover rounded-lg shadow-2xl transition-all duration-700 ease-in-out";

    if (index === centerIndex) {
      return `${baseClasses} z-30 scale-100 translate-x-0 opacity-100`;
    } else if (index === leftIndex) {
      return `${baseClasses} z-10 scale-90 -translate-x-24 opacity-70`;
    } else if (index === rightIndex) {
      return `${baseClasses} z-10 scale-90 translate-x-24 opacity-70`;
    }

    return baseClasses;
  };

  return (
    <section className="max-w-screen-2xl h-screen flex items-center py-16 px-8 mb-8 shrink-0 snap-start bg-zinc-950">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase max-w-4xl leading-none">
            <DecryptedText
              animateOn="view"
              text="Break the Boundaries of Budget and Physics."
              speed={40}
              maxIterations={10}
              sequential
              resetOnReenter
            />
            <span className="text-zinc-600 block mt-2">
              <DecryptedText
                text="We don't shoot on location; we generate worlds."
                animateOn="view"
                speed={40}
                resetOnReenter
                maxIterations={10}
                sequential
              />
            </span>
          </h2>
        </div>

        {/* Right Column - Dynamic Images */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Creative visualization ${index + 1}`}
              className={getImageClasses(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
