"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSpring, useTransform, useInView } from "framer-motion";

interface AnimatedNumberProps {
  to: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [val, setVal] = useState(0);

  // Create a spring that animates from 0 to 1 when in view
  const spring = useSpring(isInView ? 1 : 0, {
    stiffness: 60,
    damping: 20,
    duration: 2000
  });

  // Transform the spring value to our target number
  const animatedValue = useTransform(spring, [0, 1], [0, to]);

  useEffect(() => {
    const unsubscribe = animatedValue.on("change", (v) => {
      setVal(Math.round(v));
    });
    return unsubscribe;
  }, [animatedValue]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      <span className="ml-0.5 opacity-80">{suffix}</span>
    </span>
  );
};

export default AnimatedNumber;