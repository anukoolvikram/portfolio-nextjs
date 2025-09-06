import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiFlutter, SiCplusplus } from "react-icons/si";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Hyderabad, Telangana",
    description: "Interned at Soaron Aerospace Pvt Ltd, an Indian startup developing UAV technologies, where I built the frontend of a drone booking platform using Flutter.",
    icon: React.createElement(SiFlutter, { size: 30 }),
    date: "Apr 2024 - May 2024",
  },
  {
    title: "Software Developer",
    location: "Mumbai, Maharashtra",
    description:
      "I worked on building a registration portal for IIT Bombay Research Park using ReactJs and Django.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Bengaluru, Karnataka",
    description:
      "I'm working as a embedded software engineer at Global Logic, a Hitachi Group company.",
    icon: React.createElement(SiCplusplus, { size: 30 }),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Society Management App",
    description:
      "Developed a platform for housing society management and to handle resident data and provide feature to add community blogs and notices.",
    tags: ["PostgreSQL", "Express.js", "React", "Node.js"],
    imageUrl: '/images/society_management.png',
    githubUrl: "https://github.com/anukoolvikram/nivaso-latest",
    demoUrl: "https://nivaso-frontend.onrender.com/",
  },
  {
    title: "Realtime Coding Editor",
    description:
      "Built a collaborative real-time editor using React and Node.js with WebSockets. Allows feature to write and compile codes in Javascript and Python.",
    tags: ["React", "Node.js", "WebSockets"],
    imageUrl: '/images/realtime.png',
    githubUrl: "https://github.com/anukoolvikram/realtime-coding-editor",
    demoUrl: "https://realtimecodingeditor.netlify.app/",
  },
  // {
  //   title: "Amazon Price Tracker",
  //   description:
  //     "Created a full-stack price tracking app using Next.js with a dashboard to monitor 100+ product prices. Automated email alerts via Nodemailer and cron jobs for price drops every 24 hours. Integrated Bright Data to bypass anti-bot restrictions, improving accuracy by 20%.",
  //   tags: ["Next.js", "Node.js", "Nodemailer", "Cron Jobs", "Bright Data", "Tailwind"],
  //   imageUrl: '/images/algo.png',
  //   githubUrl: "https://github.com/anukoolvikram/algo-visualizer",
  //   demoUrl: "https://anukoolvikram.github.io/algo-visualizer/",
  // },
  {
    title: "Algorithm Visualizer",
    description:
      "Developed an interactive visualization tool for sorting, pathfinding, and graph traversal. Added play, pause, step, and speed controls for better user experience.",
    tags: ["React.js", "Algorithms"],
    imageUrl: '/images/algo.png',
    githubUrl: "https://github.com/anukoolvikram/algo-visualizer",
    demoUrl: "https://anukoolvikram.github.io/algo-visualizer/",
  },
] as const;


export const skillsData = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flutter"
] as const;
