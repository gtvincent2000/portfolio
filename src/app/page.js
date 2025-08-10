"use client";

import React from "react";
import { motion } from "framer-motion";

// Scroll Animation variants for the container
const container = {
  hidden: { opacity: 1 }, // keep parent visible so children can animate in
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,   // spacing between children
      delayChildren: 0.05,     // small lead-in
    },
  },
};

const itemSlide = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
};

const itemScale = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.55 } },
};

export default function Page() {
  return(
    <main className="font-sans">
      <motion.section
        variants={container}
        suppressHydrationWarning={true}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col items-center justify-center h-[60vh] pt-24"
        style={{ color: "var(--section-text)" }} // ensure text is visible
      >
        {/* Each child you want animated needs its own variants */}
        <motion.img
          variants={itemScale}
          src="/assets/profile_pic.jpg"
          alt="Gary Vincent"
          className="w-[250px] h-[250px] rounded-full border-4 object-cover"
          style={{ borderColor: "var(--image-border)" }}
        />

        <motion.h1 variants={itemSlide} className="mt-6 text-4xl font-bold">
          Gary Vincent
        </motion.h1>

        <motion.h2 variants={itemSlide} className="mt-2 text-2xl font-semibold opacity-90">
          {`Full‑Stack Developer`}
        </motion.h2>
      </motion.section>


      <motion.section
        id="introduction"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        className="flex flex-col items-center justify-center h-[40vh] pt-[10px]"
        style={{ color: "var(--section-text)" }}
      >
        <motion.h1 variants={itemSlide} className="text-4xl font-bold">
          Introduction
        </motion.h1>
        <motion.p variants={itemSlide} className="mt-4 text-md max-w-2xl text-center text-gray-400">
          Overview
        </motion.p>
        <motion.p variants={itemSlide} className="mt-4 text-lg max-w-3xl text-center">
         🧑🏻‍💻  {`I'm a Computer Science student with a passion for software development. I enjoy creating innovative solutions and learning new technologies.`}
        </motion.p>
        <motion.p variants={itemSlide} className="mt-4 text-lg max-w-3xl text-center">
         📖 {`I am a Junior at the University of Texas at Dallas, pursuing a Bachelor's degree in Computer Science.
          I specialize in web development frameworks like React and Node.js, 
          and I have a strong foundation in programming languages such as JavaScript, Python, and C++.`}
        </motion.p>
        <motion.p variants={itemSlide} className="mt-4 text-lg max-w-3xl text-center">
         🛠️ {`I enjoy building user-friendly interfaces and robust back-end systems.`}
         {`My goal is to deliver high-quality software solutions that implement AI to make the user's experience more interactive and efficient.`}
        </motion.p>
      </motion.section>

      <motion.section
        id="projects"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }} 
        className="flex flex-col items-center justify-center h-[60vh] pt-[60px]"
        style={{ color: "var(--section-text)" }}
      >
        <motion.h2 variants={itemSlide} className="text-3xl font-semibold">
          Projects
        </motion.h2>

      </motion.section>

      <motion.section
        id="timeline"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }} 
        className="flex flex-col items-center justify-center h-[60vh] pt-[60px]"
        style={{ color: "var(--section-text)" }}
      >
        <motion.h2 className="text-3xl font-semibold">
          Timeline
        </motion.h2>
      </motion.section>

      <motion.section
        id="contact"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }} 
        className="flex flex-col items-center justify-center h-[60vh] pt-[60px] pb-[100px]"
        style={{ color: "var(--section-text)" }}
      >
        <motion.h2 className="text-3xl font-semibold">
          Contact
        </motion.h2>
      </motion.section>
    </main>
  )
}
