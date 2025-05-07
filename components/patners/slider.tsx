"use client";
// This is a client component
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { clients } from "@/app/data/data";
import Image from "next/image";

export default function Carousel() {
  let [ref, { width }] = useMeasure();
  const xtranslation = useMotionValue(0);
  useEffect(() => {
    if (width === 0) return;
    let finalPosition = -width / 2;
    let controls;
    controls = animate(xtranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => controls.stop();
  }, [xtranslation, width]);
  return (
    <div className="overflow-hidden w-full ">
      <motion.div
        className="flex  items-center  gap-5 h-[15rem]  "
        ref={ref}
        style={{ x: xtranslation }}
      >
        {[...clients, ...clients].map((client) => (
          <motion.div key={client.id}>
            <Image
              src={client.image}
              alt={client.title}
              width={200}
              height={200}
              className=" shadow-md h-24 min-w-[15rem] rounded-md border border-slate-200"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
