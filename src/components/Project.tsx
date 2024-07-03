"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data";
import { TbLocationFilled } from "react-icons/tb";
import Image from "next/image";

const unShowing =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Project() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleExpandClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full dark:bg-[#0f172a] bg-[#f8f8f2] relative">
        <div className="absolute pointer-events-none inset-0 dark:bg-[#0f172a] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
        <div className="w-full h-auto flex items-center justify-center flex-col pt-12">
          <div className="w-full py-12 flex items-center justify-center">
            <p className="text-3xl sm:text-4xl font-bold">
              A Small Showcase of{" "}
              <span className="text-purple-400">My Work</span>
            </p>
          </div>
          <div className="w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-4 p-4">
            {projects.map(({ id, title, des, img, siteLink }) => (
              <div key={id} className="flex items-center justify-between m-4">
                <PinContainer title={title} href={siteLink}>
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem]">
                    <Image
                      src={img || unShowing}
                      alt={title}
                      className="absolute bottom-0 z-10"
                      layout="fill"
                      objectFit="cover"
                    />
                    <h2 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                      {title}
                    </h2>
                    <div
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        expandedId === id ? "h-auto" : "h-16"
                      }`}
                    >
                      <p
                        className="text-sm font-light lg:text-xl lg:font-normal"
                        style={{
                          color: "#BEC1DD",
                          margin: "1vh 0",
                        }}
                      >
                        {des}
                      </p>
                    </div>
                    <span
                      className="text-purple cursor-pointer"
                      onClick={() => handleExpandClick(id)}
                    >
                      {expandedId === id ? "Show less" : "More..."}
                    </span>
                    {/* <div className="flex items-center justify-center">
                      <p className="text-purple flex text-sm md:text-xs lg:text-xl">
                        <a href={siteLink} target="_blank" rel="noopener noreferrer">
                          Visit Site
                        </a>
                      </p>
                      <TbLocationFilled
                        className="ml-3"
                        color="#eeeeee"
                        size={"20px"}
                      />
                    </div> */}
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
          <div className="m-5">divider</div>
        </div>
      </div>
    </div>
  );
}
