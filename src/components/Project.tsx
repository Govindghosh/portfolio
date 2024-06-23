"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data";

export default function Project() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleExpandClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full dark:bg-[#0f172a] bg-[#f8f8f2]  dark:bg-dot-sky/[0.2] bg-dot-white/[0.5] relative">
        <div className="absolute pointer-events-none inset-0 dark:bg-[#0f172a] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center justify-center flex-col pt-12">
            <div className="w-full py-12 flex items-center justify-center">
              <p className="text-3xl sm:text-4xl font-bold">
                A Small Showcase of{" "}
                <span className="text-purple-300">My Work</span>
              </p>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
              {projects.map(({id, title, des, img, iconLists, siteLink, githubLink})=>(
                <div key={id}
                className="flex items-center justify-between "
                >
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
                      This React-based News App provides real-time news updates
                      across various categories. It utilizes the News API to
                      fetch the latest news articles, allowing users to stay
                      informed about current events.
                    </span>
                  </div>
                </div>
              </PinContainer>
                </div>
              ))}
              
            </div>
            <div className="m-5"> divider</div>
          </div>
        </div>
      </div>
    </div>
  );
}
