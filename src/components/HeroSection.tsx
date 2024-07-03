"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FcDownload } from "react-icons/fc";
import { Button } from "./ui/MovingBorders";

export default function HeroSection() {
  const handleDownload = () => {
    const resumeLink = 'https://drive.google.com/file/d/1PM8sLWGMqO3UcjyY1f6S4QKYpjGYGZVH/view?usp=sharing'; // Update with your actual resume path
    try {
      const a = document.createElement("a");
      a.href = resumeLink;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return (
    <div className="h-[42rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="z-10 sm:mb-10 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h1
            className={cn(
              "md:text-6xl text-4xl text-white relative z-20 pt-36 pb-12"
            )}
          >
            Govind&apos;s Portfolio
          </h1>
          <div className="hero flex items-center justify-center">
            <div className="hero-content flex flex-col items-center text-center">
              <div className="w-11/12 sm:w-8/12">
                <TextGenerateEffect
                  className="text-center text-[40px] md:text-5xl lg:text-6xl text-4xl font-bold z-20 dark:text-neutral-300 text-neutral-300 relative"
                  words="Turning Designs into Interactive Digital Realities"
                />
              </div>
              <p className="py-6 relative z-20 text-lg sm:text-2xl text-neutral-100">
                Specializing in React, Redux, Next.js, Tailwind CSS, MongoDB,
                Node.js, and Express.js. Crafting dynamic, user-focused web
                applications.
              </p>
            </div>
          </div>
          <Button
          className="relative flex items-center justify-center gap-1 border border-neutral-200 px-3 py-1 text-xs font-semibold text-black sm:px-4 sm:py-2 sm:text-base dark:border-slate-800 dark:text-white"
          duration={Math.floor(Math.random() * 10000) + 1000}
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          onClick={handleDownload}
        >
          <FcDownload />
          <span className="hidden sm:block">Resume</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 " />
        </Button>
        </div>
      </div>
    </div>
  );
}
