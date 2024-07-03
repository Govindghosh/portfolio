"use client";

import { socialMedia } from "@/data";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/textGenerate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { WavyBackground } from "./ui/wavy-background";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content w-full flex flex-col">
     
        <div className="mt-[66px]">
          <div className="flex flex-col items-center justify-center text-center m-7 w-11/12">
            <div>
              <TextGenerateEffect
                className="text-center text-[35px] md:text-4xl lg:text-6xl text-4xl font-bold z-20 dark:text-neutral-300 text-neutral-300 relative"
                words="If you have any questions "
              />
            </div>
            <div>
              <TextGenerateEffect
                className="text-center text-[35px] md:text-4xl lg:text-6xl text-4xl font-bold z-20 dark:text-neutral-300 text-neutral-300 relative"
                words="or would like to discuss potential"
              />
            </div>
            <div>
              <TextGenerateEffect
                className="text-center text-[35px] md:text-4xl lg:text-6xl text-4xl font-bold z-20 dark:text-neutral-300 text-neutral-300 relative"
                words="opportunities, feel free to reach out to me!"
              />
            </div>

            <Link href={"mailto:govindghosh0@gmail.com"} target="_blank">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      <nav>
        <div className="mt-16 flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-sm font-light md:text-base md:font-normal z-50">
            Copyright © 2024 Govind
          </p>
          <div className="flex items-center gap-6 md:gap-3">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="bg-black-200 bg-opacity/75 border-black-300 flex size-10 cursor-pointer items-center justify-center rounded-lg border saturate-150 backdrop-blur-lg"
              >
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={profile.img}
                    alt={`${profile.id} icon`}
                    height={20}
                    width={20}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
}
