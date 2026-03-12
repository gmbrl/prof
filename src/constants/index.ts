import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "3D Blender Sculptor",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Security Analyst",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Blockchain Developer",
    companyName: "Mount Kenya University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - September 2024",
    points: [
      "Built and maintained React.js Apps with Solidity smart contracts and Web3 integration.",
      "Collaborated with cross-functional teams to deliver secure blockchain products.",
      "Ensured responsive, cross-browser Web3 UIs with wallet compatibility..",
      "Conducted code reviews and smart contract audits for optimal security.",
    ],
  },
  {
    title: "Backend Developer",
    companyName: "Powerlearnproject",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Engineered and maintained full-stack web applications using React.js, integrated with MongoDB and SQL databases, enhancing data efficiency at PowerLearn Projects.",
      "Partnered with teams to build scalable, data-optimized solutions.",
      "Designed responsive, cross-browser UIs for database-driven apps.",
      "Led code reviews and optimizations, cutting query latency 30%.",
    ],
  },
  {
    title: "Security Analyst",
    companyName: "Google Developer Student Clubs",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Served as Security Analyst for Google Developer Student Club, conducting vulnerability scans and risk assessments on club projects and events.",
      "Collaborated with GDSC team members to implement secure coding practices in React.js apps and integrate threat detection tools.",
      "Fortified club hackathon apps with custom encryption and zero-trust models, ensuring tamper-proof data flows in decentralized environments.",
      "Orchestrated threat modeling workshops, elevating GDSC's security posture through proactive risk simulations unique to emerging tech.",
    ],
  },
  {
    title: "3D Blender Sculptor",
    companyName: "Kenya Game Developers Association",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Sculpted high-poly 3D game assets in Blender, including characters, environments, and props for indie game prototypes.",
      "Optimized low-poly models with UV unwrapping, PBR texturing, and rigging for Unity/Unreal Engine integration.",
      "Collaborated with game devs to iterate on dynamic sculptures, ensuring performance across PC/mobile platforms.",
      "Conducted mesh reviews and LOD creation, reducing poly counts by 40% while preserving visual fidelity.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Mobimend",
    description:
      "A comprehensive mobile and online shop platform enables users to book phone repairs, purchase devices, receive curated recommendations for popular fixes and products.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://mobimend.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
