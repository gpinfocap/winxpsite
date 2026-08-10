import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import paint from "../../assets/paint.png";
export const TechIcon = {
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  UIPATH:
    "https://img.shields.io/badge/UiPath-FA4616?style=for-the-badge&logo=uipath&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  AZURE:
    "https://img.shields.io/badge/Azure-%230078D4.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  DOCKER:
    "https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white",
  SQL: "https://img.shields.io/badge/SQL-%234479A1.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  MATILLION:
    "https://img.shields.io/badge/Matillion-%2319232D.svg?style=for-the-badge&logo=databricks&logoColor=white",
  POWERSHELL:
    "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white",
  CHATGPT:
    "https://img.shields.io/badge/LLM_Integration-74aa9c?style=for-the-badge&logo=openai&logoColor=white",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  GODOT:
    "https://img.shields.io/badge/Godot-%23478CBF.svg?style=for-the-badge&logo=godot-engine&logoColor=white",
  PHOTOSHOP:
    "https://img.shields.io/badge/Photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe-photoshop&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    9,
    {
      id: 0,
      title: "Untitled - Paint",
      message: "",
      Icon: paint,
      isMinimized: false,
      zIndex: 0,
      program: App.PAINT,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.PROFESSIONAL,
  WorkType.PERSONAL,
  WorkType.CREDENTIALS,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "Agentic Automation Engineer - Infocap",
    date: "Current",
    gitURL: "",
    techstack: [
      TechIcon.PYTHON,
      TechIcon.UIPATH,
      TechIcon.CHATGPT,
      TechIcon.AWS,
      TechIcon.AZURE,
      TechIcon.SQL,
    ],
    gallery: [],
    overview: `I work as an Agentic Automation Engineer at Infocap, where the focus is on
    human-centric automation: combining AI, RPA and data engineering to help organisations make
    sensible automation decisions rather than automating for its own sake. Day to day this means
    designing and building agentic workflows, integrating large language models with existing
    enterprise systems, and making sure the humans in the loop stay in control of the process.`,
  },
  {
    id: 2,
    title: "RPA Developer - Enterprise RPA Initiative",
    date: "2 years",
    gitURL: "",
    techstack: [
      TechIcon.UIPATH,
      TechIcon.PYTHON,
      TechIcon.POWERSHELL,
      TechIcon.SQL,
    ],
    gallery: [],
    overview: `Spent two years as an RPA developer on an enterprise-wide robotic process automation
    initiative, delivering production automations against real business processes. The work covered
    the full lifecycle: sitting with process owners to understand what actually happens versus what
    the documentation claims, building and testing the automations, and supporting them once they
    were live.`,
  },
  {
    id: 3,
    title: "Software QA Intern",
    date: "Summer 2015",
    gitURL: "",
    techstack: [TechIcon.JAVASCRIPT, TechIcon.PYTHON],
    gallery: [],
    overview: `My first role in the industry - a summer internship doing software QA at a startup
    technology company, which turned into a paid position afterwards. It was the job that taught me
    how software actually breaks in the hands of real users, which is a perspective I have carried
    into every automation project since.`,
  },
  {
    id: 4,
    title: "Windows XP Personal Website",
    date: "2025 - Present",
    gitURL: "https://github.com/geepee123/winxpsite",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.REDUX,
      TechIcon.CSS,
      TechIcon.HTML,
      TechIcon.JAVASCRIPT,
    ],
    gallery: [],
    overview: `The site you are looking at right now. It is a personal portfolio built to look and
    behave like Windows XP - draggable windows, a working start menu, a taskbar, and a genuinely
    functional copy of Paint. Built with Next.js, TypeScript and Redux, forked from firwer's
    excellent winxpsite template and then rebuilt around my own content. There is something fitting
    about presenting a career spent automating modern systems inside an operating system from 2001.`,
  },
  {
    id: 5,
    title: "Wrath of Verath",
    date: "2026",
    gitURL: "https://github.com/geepee123/Wrath-of-Verath",
    techstack: [TechIcon.GODOT],
    gallery: [],
    overview: `A game project built in Godot with GDScript. Very much a throwaway side project built
    for the fun of it - the kind of thing you make on a weekend to learn an engine rather than to
    ship anything. Game development scratches a different itch than automation work does.`,
  },
  {
    id: 6,
    title: "AWS Certified DevOps Engineer - Professional",
    date: "May 2026 - May 2029",
    gitURL: "",
    techstack: [TechIcon.AWS, TechIcon.DOCKER],
    gallery: [],
    overview: `The AWS Certified DevOps Engineer - Professional certification, covering continuous
    delivery, infrastructure as code, monitoring and incident response on AWS. Valid through
    May 2029.`,
  },
  {
    id: 7,
    title: "UiPath Certifications",
    date: "2022 - 2024",
    gitURL: "",
    techstack: [TechIcon.UIPATH],
    gallery: [],
    overview: `Three UiPath certifications earned across the RPA side of my career: Certified
    Advanced RPA Developer (October 2022), Automation Developer Associate (October 2024), and
    Automation Business Analyst Associate (November 2024). The business analyst track matters as
    much as the developer one - most failed automations fail at the process understanding stage,
    not the code.`,
  },
  {
    id: 8,
    title: "Cloud & Data Certifications",
    date: "2023",
    gitURL: "",
    techstack: [TechIcon.AZURE, TechIcon.MATILLION, TechIcon.PHOTOSHOP],
    gallery: [],
    overview: `Microsoft Certified: Azure Fundamentals (June 2023) and Matillion Associate
    Certification (January 2023), covering cloud fundamentals and cloud-native data transformation.
    Also, going back rather further, an Adobe Certified Associate in Photoshop CS5 from 2011 -
    proof that the design side came first.`,
  },
  {
    id: 9,
    title: "Saint Leo University & Awards",
    date: "2012 - 2016",
    gitURL: "",
    techstack: [],
    gallery: [],
    overview: `Studied at Saint Leo University from 2012 to 2016, taking part in the Honors Program,
    the InfoSec Club, the Computer Club, the Career Planning Advisory Board and the Residence Life
    LLC Committee. Took first place in the Saint Leo CTF Challenge in March 2016, was a YVAIN
    Scholarship Finalist in 2014, and am an Eagle Scout.`,
  },
];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Infocap - Agentic Automation",
    content: WorkData[0],
  },
  {
    id: 2,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Enterprise RPA Initiative",
    content: WorkData[1],
  },
  {
    id: 3,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Software QA Intern",
    content: WorkData[2],
  },
  {
    id: 4,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Windows XP Personal Website",
    content: WorkData[3],
  },
  {
    id: 5,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Wrath of Verath",
    content: WorkData[4],
  },
  {
    id: 6,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "AWS DevOps Engineer - Pro",
    content: WorkData[5],
  },
  {
    id: 7,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "UiPath Certifications",
    content: WorkData[6],
  },
  {
    id: 8,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "Cloud & Data Certifications",
    content: WorkData[7],
  },
  {
    id: 9,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "Education & Awards",
    content: WorkData[8],
  },
];

export const PhotoCollection: GalleryImage[] = [];
