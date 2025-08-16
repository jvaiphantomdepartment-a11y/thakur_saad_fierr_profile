import project2 from "@/assets/projects/pr1.png";
import project4 from "@/assets/projects/pr2.png";
import project3 from "@/assets/projects/pr3.png";
import project1 from "@/assets/projects/pr4.png";

import project6 from "@/assets/projects/pr5.png";
import project5 from "@/assets/projects/pr6.png";

export const projects = [
  {
    title: "Smile Palm Desert",
    description: `A compassionate dental practice focused on creating confident smiles. Offering expert dental care with a focus on comfort, care, and precision. Whether you need cosmetic or general dentistry, your smile is in great hands`,
    image: project2,
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Stripe"],
    liveUrl: "https://smilepalmdesert.jvai.site/",

    featured: true,
  },
  {
    title: "The Conversation Crew",
    description:
      "A program designed to help kids and teens build real-life social confidence. It offers a safe, supportive space for young people to practice communication skills, improve social interactions, and form lasting friendships",
    image: project5,
    technologies: ["React", "Socket.io", "Express", "MongoDB", "WebRTC"],
    liveUrl: "https://theconversationcrew.com/",

    featured: true,
  },
  {
    title: "Storm Intel",
    description:
      "A data-driven consultancy blending marketing expertise with cutting-edge IT solutions. Specializing in transforming data into actionable insights that drive business growth. From audience analysis to data architecture, they provide smart solutions for business success.",
    image: project4,
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
    liveUrl: "https://storm-intel.com/",

    featured: false,
  },

  {
    title: "Great Canadian Sims",
    description:
      "Custom-designed golf simulators and entertainment solutions that cater to both functionality and design. Helping clients create unique spaces that combine the thrill of golf with high-end entertainment features, perfect for any home or venue.",
    image: project3,
    technologies: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    liveUrl: "https://greatcanadiansims.ca/",

    featured: false,
  },
  {
    title: "Alternate Power Solutions",
    description:
      "A Cape Town-based service provider offering comprehensive solutions in electrical, solar, property maintenance, and plumbing. APS ensures energy-efficient and reliable services that help businesses and homes thrive sustainably.",
    image: project1,
    technologies: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    liveUrl: "https://alternate-power-sn-6zpr.vercel.app/%22",

    featured: false,
  },
  {
    title: "OTK Event Production",
    description:
      "A premium event production service trusted by major clients such as the Oscars. OTK specializes in creating spectacular events with cutting-edge technology and flawless execution, ensuring every event is a success",
    image: project6,
    technologies: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    liveUrl: "https://otk.jvai.site/",

    featured: false,
  },
];
