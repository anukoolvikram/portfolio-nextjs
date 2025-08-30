"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Software Engineer</span> currently working at{" "}
        <span className="font-medium">GlobalLogic</span>, a{" "}
        <span className="font-medium">Hitachi Group Company</span>, in Bengaluru. I'm
        graduated with a <span className="font-medium">B.Tech from IIT Bombay</span> in{" "}
        <span className="font-medium">2025</span>.
      </p>

      <p className="mb-3">
        I specialize in building <span className="font-medium">full-stack web applications</span> using the{" "}
        <span className="font-medium">tech stack including</span> PostgreSQL, Express.js, React, Node.js. Along the
        way, I've worked with <span className="font-medium"> serverless deployment and AWS</span> with strong{" "}
        <span className="font-medium">DevOps practices</span>.
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is solving
        challenging problems and turning ideas into products. I enjoy working with{" "}
        <span className="font-medium">C++, Python, and JavaScript</span>, and I regularly
        sharpen my skills by solving <span className="font-medium">Data Structures & Algorithms</span>{" "}
        problems in my free time.
      </p>

      <p className="mb-3">
        Lately, I've been exploring{" "}
        <span className="font-medium">Artificial Intelligence</span> and{" "}
        <span className="font-medium">Machine Learning</span> because I'm fascinated by
        building systems that can <span className="underline">learn, adapt, and evolve</span>.
        My goal is to transition into a role where I can work on{" "}
        <span className="font-medium">AI-powered applications</span> and contribute to
        impactful products.
      </p>
    </motion.section>
  );
}
