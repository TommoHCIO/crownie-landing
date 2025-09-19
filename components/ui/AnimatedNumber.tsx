"use client";

import React, { useEffect, useState } from "react";
import { useTransform, useScroll, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  to: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ to, suffix = "" }) => {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const n = useTransform(spring, [0, 1], [0, to]);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const unsubscribe = n.on("change", (v) => setVal(Math.round(v)));
    return unsubscribe;
  }, [n]);

  return (
    <span>
      {val.toLocaleString()}
      <span className="ml-0.5 opacity-80">{suffix}</span>
    </span>
  );
};

export default AnimatedNumber;