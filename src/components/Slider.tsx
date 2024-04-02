"use client";

import { silderContent } from "@/lib/silderContent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);

interface SliderProps {}

const Slider: React.FC<SliderProps> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sliderContainer = sliderContainerRef.current;
      const slider = sliderRef.current;

      gsap.to(slider, {
        x: -(currentSlide - 1) * sliderContainer?.offsetWidth!,
        duration: 1,
        ease: "power2.inOut",
      });
    },
    { dependencies: [currentSlide] }
  );

  return (
    <div className="relative mt-8">
      {/* Back button */}
      <button
        disabled={currentSlide === 1}
        onClick={() => setCurrentSlide((prevSlider) => prevSlider - 1)}
        className="group absolute top-0 left-0 grid place-items-center h-full p-5 lg:p-12 lg:pl-32"
      >
        <ChevronLeft
          className={`w-8 h-8 ${
            currentSlide === 1
              ? "opacity-50"
              : "group-hover:-translate-x-2 transition-all duration-75"
          }`}
        />
      </button>

      <div
        ref={sliderContainerRef}
        className="mx-16 lg:mx-56 overflow-x-hidden"
      >
        <div
          ref={sliderRef}
          className="flex"
          style={{ width: `${silderContent.length * 100}%` }}
        >
          {silderContent.map((content, index) => (
            <div key={index} className="w-full">
              <p className="text-xl font-medium text-center">{content.title}</p>
              <h1 className="text-3xl md:text-5xl text-center font-bold py-6">
                {content.heading}
              </h1>
              <p className="text-lg text-center max-w-[550px] mx-auto">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* forward button */}
      <button
        disabled={currentSlide === silderContent.length}
        onClick={() => setCurrentSlide((prevSlider) => prevSlider + 1)}
        className="group absolute top-0 right-0 grid place-items-center h-full p-5 lg:p-12 lg:pr-32"
      >
        <ChevronRight
          className={`w-8 h-8 ${
            currentSlide === silderContent.length
              ? "opacity-50"
              : "group-hover:translate-x-2 transition-all duration-75"
          }`}
        />
      </button>
      <div className="grid place-items-center py-12">
        <div className="flex gap-x-3">
          {silderContent.map((_, index) => (
            <button
              disabled={currentSlide === index + 1}
              onClick={() => setCurrentSlide(index + 1)}
              key={index}
              className={`w-[10px] h-[10px] border rounded-full transition-colors duration-75 ${
                currentSlide === index + 1 ? "bg-white" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
