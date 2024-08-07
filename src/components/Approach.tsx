"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

export default function Approach() {
    return (
        <div className="w-full py-10">
         <div className="w-full flex items-center justify-center">
         <h1 className="sm:text-6xl text-[#f8f8f2] font-semibold">
            My <span className="text-purple-500">approach</span>
          </h1>
         </div>
          <div className="my-20 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
            <Card
              title="Planning & Strategy"
              icon={<AceternityIcon order="Phase 1" />}
              des="I'll collaborate to map out your website's goals, target audience,
              and key functionalities. I'll discuss things like site structure,
              navigation, and content requirements."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
              />
            </Card>
            <Card
              title="Development & Progress Update"
              icon={<AceternityIcon order="Phase 2" />}
              des="Once we agree on the plan, I cue my lofi playlist and dive into
              coding. From initial sketches to polished code, I keep you updated
              every step of the way."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
                colors={[
                  [255, 166, 158],
                  [221, 255, 247],
                ]}
                dotSize={2}
              />{" "}
            </Card>
            <Card
              title="Development & Launch"
              icon={<AceternityIcon order="Phase 3" />}
              des="This is where the magic happens! Based on the approved design,
              I'll translate everything into functional code, building your website
              from the ground up."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
                colors={[[125, 211, 252]]}
              />
            </Card>
          </div>
        </div>
      );
}
const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center  justify-center rounded-3xl border border-black/[0.2] p-4 lg:h-[35rem] dark:border-white/[0.2] "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute -left-3 -top-3 size-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 size-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -right-3 -top-3 size-10 text-black opacity-30 dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 size-10 text-black opacity-30 dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 size-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="absolute left-1/2 top-1/2 mx-auto flex min-w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2
          className="relative z-10 mt-4 text-center text-3xl
         font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2
         group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
        >
          {title}
        </h2>
        <p
          className="relative z-10 mt-4
         text-center text-base opacity-0 transition duration-200
         group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-px ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="text-purple inline-flex size-full cursor-pointer items-center
        justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold backdrop-blur-3xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};