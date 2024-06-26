"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "framer-motion";
import Image from "next/image";
import { gridItems } from "@/data";
const SkeletonOne = ({ imgSrc, techName }:any) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row sm:flex-col my-2"
    >
      <motion.div
        className="h-full w-[10em] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src={imgSrc}
          alt={techName}
          height="100"
          width="100"
          className="rounded-full h-auto w-auto"
        />
        <p className="sm:text-base text-sm text-center font-semibold text-neutral-500 mt-4">
          {techName}
        </p>
      </motion.div>
    </motion.div>
  );
};


export default function Technological() {
  return (
    <div className="w-full h-auto dark:bg-[#0f172a] bg-[#f8f8f2]">
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="w-10/12 h-auto m-5 flex items-center justify-center">
          <TextRevealCard
            className="flex items-center justify-center"
            text="Technological Palette"
            revealText="Technological Palette"
          />
        </div>
        <div className="w-auto h-auto border-white border-2 m-5">
        <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
        </div>
      </div>
    </div>
  );
}