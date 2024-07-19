"use client";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13ffa920", "#1E67C620", "#CE84CF20", "#DD335C20"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 50% 100%, hsl(var(--background)) 10%, ${color})`;

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="absolute inset-0 -z-10 grid min-h-screen place-content-center overflow-hidden"
    ></motion.div>
  );
};