import { IProject, IService, ISkill } from "./type";
export const services: IService[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React</b>.",
    icon: "RiComputerLine",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Handle database, server, api using <b>Express</b> and other popular framework.",
    icon: "FaServer",
  },
  {
    id: 3,
    title: "API Development",
    description:
      "I can develop robust REST API using <b>django-rest-api</b>, <b>Node API</b> and <b>PHP Laravel</b>.",
    icon: "AiOutlineApi",
  },
  {
    id: 4,
    title: "Mobile Application Developer",
    description:
      "I can build optimized and performant native and cross-platform mobile apps using <b>Native iOS</b>, <b>Flutter</b> and <b>React Native</b>.",
    icon: "AiOutlineMobile",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Stunning user interface designer using <b>Figma</b>, <b>Adobe XD</b>, <b>Sketch</b>  and <b>Framer</b>.",
    icon: "AiOutlineAntDesign",
  },
  {
    id: 6,
    title: "Competitive Coder",
    description:
      "A daily problem solver in <b>HackRank</b> and <b>Leet Code</b>.",
    icon: "MdDeveloperMode",
  },
];

export const languages: ISkill[] = [
  {
    id: 1,
    name: "JavaScript",
    level: "35%",
    icon: "FaJsSquare",
  },
  {
    id: 2,
    name: "React",
    level: "40%",
    icon: "RiReactLine",
  },
  {
    id: 3,
    name: "Node",
    level: "45%",
    icon: "FaNodeJs",
  },

  {
    id: 4,
    name: "PHP",
    level: "50%",
    icon: "FaPhp",
  },
  {
    id: 5,
    name: "Laravel",
    level: "55%",
    icon: "FaLaravel",
  },
  {
    id: 6,
    name: "SQL",
    level: "60%",
    icon: "FaDatabase",
  },
  {
    id: 7,
    name: "MongoDB",
    level: "65%",
    icon: "FaMongodb",
  },
  {
    id: 8,
    name: "Express",
    level: "70%",
    icon: "FaExpress",
  },
  {
    id: 9,
    name: "React Native",
    level: "80%",
    icon: "FaReactNative",
  },
  {
    id: 10,
    name: "Flutter",
    level: "85%",
    icon: "FaFlutter",
  },
];

export const tools: ISkill[] = [
  {
    id: 1,
    name: "Git",
    level: "90%",
    icon: "",
  },
  {
    id: 2,
    name: "Figma",
    level: "80%",
    icon: "FaFigma",
  },
  {
    id: 3,
    name: "Adobe XD",
    level: "70%",
    icon: "FaAdobe",
  },
  {
    id: 4,
    name: "Sketch",
    level: "60%",
    icon: "FaSketch",
  },
  {
    id: 5,
    name: "Framer",
    level: "50%",
    icon: "FaFramer",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["react", "next"],
  },
  {
    id: 2,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["django", "react"],
  },
  {
    id: 3,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["next", "node"],
  },
  {
    id: 4,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["express", "react"],
  },
  {
    id: 5,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["react", "django"],
  },
  {
    id: 6,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["next", "express"],
  },
  {
    id: 7,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["react", "django"],
  },
  {
    id: 8,
    name: "Realtor Clone",
    description: "Realtor.com is a real estate listings website.",
    image: "/assets/images/realtor.png",
    url: "https://realestate-burhan.vercel.app/",
    github:
      "https://github.com/BurhanRabbani/react-realestate-webapp/tree/main",
    tags: ["react", "RapidAPI", "Chakra UI"],
    category: ["react", "express", "mongo"],
  },
];
