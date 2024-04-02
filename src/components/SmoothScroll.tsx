"use client";

import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis options={{ syncTouch: true }} root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
