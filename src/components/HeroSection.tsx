"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1PM8sLWGMqO3UcjyY1f6S4QKYpjGYGZVH/view?usp=sharing'; // Update with your actual resume path
    link.download = 'GOVIND GHOSH (1).pdf'; // The name for the downloaded file
    link.click();
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="z-10 mb-10 flex justify-center">
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
              {/* <img src="https://i.pinimg.com/564x/26/de/73/26de73409111ea0df3430f3d63e9bdc9.jpg" alt="govind_image" className="h-56 rounded-lg shadow-2xl" /> */}
              <div className="w-11/12 sm:w-8/12">
                <TextGenerateEffect
                  className="text-center text-[40px] md:text-5xl lg:text-6xl text-4xl font-bold z-20 dark:text-neutral-300 text-neutral-300 relative"
                  words="Turning Designs into Interactive Digital Realities"
                />
              </div>
              <p className="py-6 relative z-20 text-lg sm:text-2xl text-neutral-500">
                Specializing in React, Redux, Next.js, Tailwind CSS, MongoDB,
                Node.js, and Express.js. Crafting dynamic, user-focused web
                applications.
              </p>
            </div>
          </div>
          TODO: button
          {/* <button onClick={handleDownload} className="btn flex items-center">
            Download Resume
          </button> */}
        </div>
      </div>
    </div>
  );
}
