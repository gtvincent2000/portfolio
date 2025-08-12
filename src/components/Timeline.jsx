"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

const itemScale = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 240, damping: 22 },
  },
};

function TimelineItem({ i, item }) {
  return (
    <li className="relative md:grid md:grid-cols-12 md:gap-6 md:min-h-[140px]">
      {/* Dot */}
      <span
        className="
          absolute top-[10px]
          left-4 -translate-x-1/2 ml-px      
          md:left-1/2 md:-translate-x-1/2 md:ml-0
          z-30 h-3 w-3 rounded-full bg-white
        "
        aria-hidden
      />
      {/* Mobile spacer for dot alignment */}
      <span
        className="absolute left-4 -translate-x-1/2 top-0 h-full w-[2px] bg-transparent md:hidden"
        aria-hidden
      />

      {/* Card: animate each item independently */}
      <motion.div
        variants={itemScale}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.01,            
          margin: "0px 0px",      
        }}
        className={clsx(
          "mt-6 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur transform-gpu will-change-transform",
          "ml-12 md:ml-0",
          "md:mt-8 md:col-span-5 md:px-6",
          i % 2 === 0 ? "md:col-start-1 md:text-right md:pr-10" : "md:col-start-8 md:text-left md:pl-10",
        )}
        style={{ color: "var(--section-text)" }}
      >
        <p className="text-sm opacity-70">{item.date}</p>
        <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>

        {item.tags?.length ? (
          <div className={clsx("mt-2 flex flex-wrap gap-2", i % 2 === 0 ? "justify-end" : "justify-start")}>
            {item.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-2 py-0.5 text-xs opacity-80">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {item.body ? <p className="mt-3 opacity-90 leading-relaxed">{item.body}</p> : null}
        {item.media ? <div className="mt-4">{item.media}</div> : null}
      </motion.div>
    </li>
  );
}

export default function Timeline({ items = [] }) {
  const trackRef = useRef(null);

  // Animated spine fill
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.2"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      className="scroll-mt-24 py-14 md:py-20 min-h-[60svh]"
      style={{ color: "var(--section-text)" }}
      aria-label="Roadmap timeline"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold md:text-left">Timeline / Roadmap</h2>

        <div ref={trackRef} className="relative mt-10 md:mt-12">
          {/* Static spine */}
          <span
            className="absolute left-4 top-0 h-full w-[2px] bg-white/15 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          {/* Animated fill */}
          <motion.span
            style={{ height: fillHeight }}
            className="absolute left-4 top-0 w-[2px] bg-white md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="relative">
            {items.map((item, i) => (
              <TimelineItem key={i} i={i} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
