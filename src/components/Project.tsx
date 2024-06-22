"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";

export default function Project() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleExpandClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="h-[40rem] w-full dark:bg-[#0f172a] bg-[#f8f8f2]  dark:bg-dot-sky/[0.2] bg-dot-white/[0.5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0f172a] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Showcase of My Work
      </p>
      <div>
        <PinContainer
          title="/NewsAPP"
          href="https://github.com/Govindghosh/NewsApp.git"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              NewsApp
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This React-based News App provides real-time news updates across
                various categories. It utilizes the News API to fetch the latest
                news articles, allowing users to stay informed about current
                events.
              </span>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
