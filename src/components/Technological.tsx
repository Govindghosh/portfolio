"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";
export default function Technological() {
  return (
    <div className="w-full h-auto dark:bg-[#0f172a] bg-[#f8f8f2]">
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="w-10/12 h-auto m-5 flex items-center justify-center">
          <TextRevealCard
            className="flex justify-center items-center"
            text="Technological Palette"
            revealText="Technological Palette"
          ></TextRevealCard>
        </div>
        <div className="w-auto h-auto border-white border-2 m-5">
          for Technological
        </div>
      </div>
    </div>
  );
}
