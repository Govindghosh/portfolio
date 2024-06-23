"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
export default function Technological() {
  return (
    <div className="w-full h-auto dark:bg-[#0f172a] bg-[#f8f8f2]">
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="w-10/12 h-auto m-5">
          <TextRevealCard          
            text="Technological Palette"
            revealText="A blend of tools and technologies that power my projects and creativity."
          >
          </TextRevealCard>
        </div>
        <div className="w-[20rem] h-[20rem] border-white border-2 m-5">
          for Technological
        </div>
      </div>
    </div>
  );
}
