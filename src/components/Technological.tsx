"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";


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
        <div className="w-auto h-auto m-5">
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