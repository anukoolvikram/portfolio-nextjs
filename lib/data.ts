import React from "react";
import { CgWorkAlt } from "react-icons/cg";



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
    description: "Interned at Soaron Aerospace Pvt Ltd, where I used Flutter to build the frontend of a drone booking platform, and integrated backend APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 - May 2024",
  },
  {
    title: "Software Developer",
    location: "Mumbai, Maharashtra",
    description:
      "Built a platform for the registration and allotment of research projects at IIT Bombay Research Park. Used ReactJs and Django.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2024 - Sep 2024",
  },
  {
    title: "Software Engineer",
    location: "Bengaluru, Karnataka",
    description:
      "I am working on a high-tech platform for a US-based client as a full stack developer. As of now, build several UI components using Vue.js. Also worked on writing API endpoints using Python. Helped in restructuring of microservices, to use S3 bucket and DynamoDB of AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Society Management APP",
    description:
      "Platform for housing society management and to handle resident data and provide feature to add community blogs and notices.",
    tags: ["React", "Node.js", "Postgres"],
    imageUrl: '/images/society.png',
    githubUrl: "https://github.com/anukoolvikram/housing-society-nivaso-PERN",
    demoUrl: "https://nivaso-frontend.onrender.com/",
  },
  {
    title: "Realtime Coding Editor",
    description:
      "Collaborative real-time coding editor platform using React and Node.js with WebSockets. Feature to write and compile codes in Python, JS, CPP, JAVA.",
    tags: ["React", "Node", "WebSockets"],
    imageUrl: '/images/editor.png',
    githubUrl: "https://github.com/anukoolvikram/realtime-coding-editor",
    demoUrl: "https://realtime-coding-editor-frontend.onrender.com"

  },
  {
    title: "Amazon Price Tracker",
    description:
      "Price tracking app for Amazon products built using Next.js. Includes email alerts for price drops every 24 hours.",
    tags: ["Next.js", "Node.js", "Cron Jobs"],
    imageUrl: '/images/price.png',
    githubUrl: "https://github.com/anukoolvikram/amazon-price-tracker",
    demoUrl: "https://amazon-price-tracker-cyan.vercel.app/",
  },
] as const;


export const skillsData = [
  "C++",
  "Python",
  "Java",
  "JS/TS",
  "HTML/CSS",
  "Tailwind",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Django",
  "Flutter",
  "Git",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "CI/CD",
  "AWS",
  "Kubernetes"
] as const;
