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
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-6">
        I'm a <span className="font-medium">Software Engineer</span> at{" "}
        <span className="font-medium">GlobalLogic</span> in
        Bengaluru and an <span className="font-medium">IIT Bombay</span> alum
        (B.Tech, 2025).
      </p>

      <p className="mb-6">
        I build sleek, reliable <span className="font-medium">full-stack web apps. </span> 
        I ship serverless systems on AWS and pair strong DevOps practices with pragmatic engineering.
      </p>

      <p className="mb-6">
        I love solving hard problems and turning ideas into products. I am good in{" "}
        <span className="font-medium">C++, Java, and Python</span> but for DSA is use C++.
      </p>

      <p className="mb-6">I'm quick to learn, obsessively curious about AI/ML, and pumped to work on AI-powered products.</p>

      <p className="mb-0 italic">
        Always learning — open to great opportunities. Let’s build something
        that matters.
      </p>
    </motion.section>
  );
}
