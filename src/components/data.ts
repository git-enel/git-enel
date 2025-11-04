import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Code2,
  Braces,
  Cpu,
  Database,
  FileCode,
  Layers,
  Sparkles,
  TerminalSquare,
  Workflow,
  Figma,
  Zap,
} from "lucide-react";

export const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:aldrichderilchristianzebua@gmail.com",
    color: "#ff4b4b",
  },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/git-enel",
    color: "#b24bf3",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aldrich-deril-christian-zebua-690692330/",
    color: "#00d9ff",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/aldrichze03",
    color: "#ff8a3d",
  },
];

export const skills = [
  { name: "React", icon: Code2, color: "#00d9ff" },
  { name: "Next.js", icon: Zap, color: "#00d9ff" },
  { name: "TailwindCSS", icon: Sparkles, color: "#00d9ff" },
  { name: "TypeScript", icon: FileCode, color: "#00d9ff" },
  { name: "React Native", icon: Layers, color: "#00d9ff" },
  { name: "Flutter", icon: Workflow, color: "#00d9ff" },
  { name: "Ruby on Rails", icon: Cpu, color: "#b24bf3" },
  { name: "Ruby", icon: Braces, color: "#b24bf3" },
  { name: "Python", icon: TerminalSquare, color: "#b24bf3" },
  { name: "PostgreSQL", icon: Database, color: "#b24bf3" },
  { name: "Github", icon: Github, color: "#00ffc6" },
  { name: "Figma", icon: Figma, color: "#00ffc6" },
];

export const projects = [
  {
    title: "Online Booking Platform",
    description:
      "This web-based platform allows users to book boarding rooms and apartments with ease. Equipped with features such as location search, price filters, and facility details, it enables users to make quick and transparent reservations tailored to their needs.",
    image: "assets/Screenshot 2025-10-01 200933.png",
    tags: ["Next.js", "daisyUI", "TypeScript", "Ruby on Rails"],
    gallery: [
      "assets/Screenshot%202025-10-01%20200933.png",
      "assets/Screenshot%202025-10-01%20200948.png",
      "assets/Screenshot%202025-10-01%20200958.png",
      "assets/Screenshot%202025-10-01%20201032.png",
      "assets/Screenshot%202025-10-01%20201100.png",
    ],
  },
  {
    title: "Smart Tourism Platform",
    description:
      "An integrated tourism platform that provides various travel services including vehicle rentals, tour guides, destination recommendations, and hotel or villa bookings. Designed to help travelers plan trips that are convenient, time-efficient, and tailored to their preferences.",
    image: "assets/Screenshot 2025-10-01 201157.png",
    tags: ["Next.js", "daisyUI", "TypeScript", "Ruby on Rails", "Figma"],
    gallery: [
      "assets/Screenshot%202025-10-01%20201157.png",
      "assets/Screenshot%202025-10-01%20201252.png",
      "assets/Screenshot%202025-10-01%20201325.png",
      "assets/Screenshot%202025-10-01%20201439.png",
      "assets/Screenshot%202025-10-01%20201512.png",
      "assets/Screenshot%202025-10-01%20201609.png",
    ],
  },
  {
    title: "Smart Tourism Mobile Platform",
    description:
      "The mobile version of the Travel & Tour platform, designed to deliver a more practical and personalized travel experience directly from the user’s smartphone. With a simple and intuitive interface, the app allows tourists to access all services with just a few taps.",
    image: "assets/Screenshot 2025-10-01 203002.png",
    tags: ["React Native", "TypeScript", "Ruby on Rails", "Figma"],
    gallery: [
      "assets/Screenshot%202025-10-01%20203002.png",
      "assets/Screenshot%202025-10-01%20203011.png",
      "assets/Screenshot%202025-10-01%20203031.png",
      "assets/Screenshot%202025-10-01%20203047.png",
      "assets/Screenshot%202025-10-01%20203102.png",
      "assets/Screenshot%202025-10-01%20203142.png",
      "assets/Screenshot%202025-10-01%20203223.png",
      "assets/Screenshot%202025-10-01%20203235.png",
      "assets/Screenshot%202025-10-01%20203253.png",
      "assets/Screenshot%202025-10-01%20203309.png",
    ],
  },
];

export const experiences = [
  {
    type: "work",
    title: "Software Developer",
    company: "Rumah Solusi Digital - Medan, North Sumatra",
    year: "November 2024 - Present",
    description:
      "Developed and maintained modern web applications using React, Next.js, and Ruby on Rails with PostgreSQL. Collaborated with cross-functional teams to design scalable architectures and deliver high-quality, efficient systems.",
  },
  {
    type: "work",
    title: "Freelancer",
    company: "Enel's Workshop - Medan, North Sumatra",
    year: "September 2020 - November 2024",
    description:
      "Worked independently on a variety of projects involving data analysis, graphic design, and UI/UX development for both web and mobile applications.",
  },
  {
    type: "work",
    title: "Project Officer Intern",
    company: "University of Prima Indonesia - Medan, North Sumatra",
    year: "March 6 - July 15, 2023",
    description:
      "Handled administrative and visual design tasks to support campus events and operations, while performing data analysis and documentation management for university projects.",
  },
  {
    type: "work",
    title: "Assistant Lecturer",
    company: "University of Prima Indonesia - Medan, North Sumatra",
    year: "February 2022 - May 2024",
    description:
      "Assisted lecturers in delivering courses related to programming and multi-platform application development, providing technical support and guidance to students.",
  },
  {
    type: "education",
    title: "B.Sc. in Informatics Engineering",
    company: "University of Prima Indonesia - Medan, North Sumatra",
    year: "July 2020 - September 2024",
    description:
      "Graduated with a GPA of 3.97/4.00, focused on software engineering and AI research in medical image classification.",
  },
];
