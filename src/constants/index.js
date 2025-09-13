import eleto from '../assets/eleto.jpg';
import abdull from '../assets/abdull.jpg';
import godwin from '../assets/godwin.jpg';
import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: "/html.png" },
  { name: "CSS 3", icon: "/css.png" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "TypeScript", icon: "/typescript.png" },
  { name: "React JS", icon: "/reactjs.png" },
  { name: "Redux Toolkit", icon: "/redux.png" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
  { name: "Node JS", icon: "/nodejs.png" },
  { name: "MongoDB", icon: "/mongodb.png" },
  { name: "Three JS", icon: "/threejs.png" },
  { name: "Git", icon: "/git.png" },
  { name: "Figma", icon: "/figma.png" },
  { name: "Docker", icon: "/docker.png" },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but AutoDevx proved me wrong.",
    name: "Eleto Ismail",
    designation: "CEO",
    company: "ELT-TechX",
    image: eleto,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like AutoDevx does.",
    name: "Godwin AY",
    designation: "COO",
    company: "Godwin Running Team Ltd",
    image: godwin,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Hushpopi Abdull",
    designation: "CTO",
    company: "456 Enterprises",
    image: abdull,
  },
];

const projects = [
  {
    name: "Clothes Store",
    description:
      "Web-based platform that allows users to search, book, and manage clothes from various providers, providing a convenient and efficient design outfit.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "wixHeadless", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Abdul-loh/cartui.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for foods anywhere you are and have your food delivered wherever your location is.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Abdul-loh/nexttutorial.git",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive blog site platform that allows users to get updates on the latest news happening around the world, with magazine-style reading.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongoDB", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Abdul-loh/Blogtutorial.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
