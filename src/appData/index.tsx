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
  POWERAUTOMATE:
    "https://img.shields.io/badge/Power_Automate-%230066FF.svg?style=for-the-badge&logo=powerautomate&logoColor=white",
  POWERAPPS:
    "https://img.shields.io/badge/Power_Apps-%23742774.svg?style=for-the-badge&logo=powerapps&logoColor=white",
  LAMBDA:
    "https://img.shields.io/badge/AWS_Lambda-%23FF9900.svg?style=for-the-badge&logo=awslambda&logoColor=white",
  DYNAMODB:
    "https://img.shields.io/badge/DynamoDB-%234053D6.svg?style=for-the-badge&logo=amazondynamodb&logoColor=white",
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
    title: "Agentic Automation Engineer - Infocap AI",
    date: "Nov 2024 - Present",
    gitURL: "",
    techstack: [
      TechIcon.AWS,
      TechIcon.LAMBDA,
      TechIcon.DYNAMODB,
      TechIcon.POWERAUTOMATE,
      TechIcon.UIPATH,
      TechIcon.PYTHON,
      TechIcon.CHATGPT,
    ],
    gallery: [],
    overview: `Full-time, remote out of the District of Columbia. I design and deliver technical
    proofs of concept for government and enterprise clients, using AWS Connect, the Power Platform
    and UiPath to support pre-sales and solution architecture work - the stage where you have to
    show something real rather than describe it. On our largest client I serve as Development Lead
    and Solution Architect on AWS, working across Connect, Lambda, DynamoDB and CloudFormation.
    I also build Infocap's own internal automation and integration systems, including the team's
    phone system, put together with Connect, Lambda and DynamoDB.`,
  },
  {
    id: 2,
    title: "Sr. Service Analyst - Exelon",
    date: "Oct 2023 - Nov 2024",
    gitURL: "",
    techstack: [TechIcon.UIPATH, TechIcon.POWERAUTOMATE, TechIcon.POWERAPPS],
    gallery: [],
    overview: `Full-time, remote out of Chicago. I owned the architecture and development of
    automations built on UiPath, Microsoft Power Automate and Power Apps, working across teams with
    analysts and stakeholders to keep release schedules on track. The role spanned the whole
    lifecycle - requirements gathering, build, maintenance and support - plus user education, which
    matters more than it sounds: an automation nobody understands is an automation nobody trusts.
    I also managed a small pod of automation developers on special projects for the Finance
    division.`,
  },
  {
    id: 3,
    title: "Consultant - Slalom",
    date: "Aug 2022 - Sep 2023",
    gitURL: "",
    techstack: [TechIcon.UIPATH, TechIcon.POWERAUTOMATE, TechIcon.CHATGPT],
    gallery: [],
    overview: `Full-time consulting specialising in Intelligent Process Automation, building on the
    UiPath and Power Automate platforms. I developed and deployed automations through the entire
    project lifecycle using Agile methodologies, and delivered training to Fortune 500 clients and
    internal teams on automation development, Center of Excellence practices, and emerging
    automation technology - generative AI included, right as it stopped being a curiosity and
    started being a requirement.`,
  },
  {
    id: 4,
    title: "Information Systems Analyst - Consumers Credit Union",
    date: "Nov 2019 - Aug 2022",
    gitURL: "",
    techstack: [TechIcon.UIPATH, TechIcon.POWERAUTOMATE, TechIcon.SQL],
    gallery: [],
    overview: `Full-time in the Greater Chicago Area. I supported and managed the credit union's
    core financial system - employee troubleshooting, testing and installing updates, and working
    with outside vendors. Alongside that I developed the automation programs that put departments
    onto RPA, using UiPath Studio Pro and StudioX, Microsoft Power Automate and Automic Automation.
    This is where automation went from something I did to something I do.`,
  },
  {
    id: 5,
    title: "Various others",
    date: "2013 - 2020",
    gitURL: "",
    techstack: [TechIcon.PHOTOSHOP, TechIcon.HTML, TechIcon.CSS],
    gallery: [],
    overview: `The route in, roughly in reverse. Enumerator for the U.S. Census Bureau (Jul - Oct
    2020), a part-time stint verifying addresses and collecting 2020 Census responses in the field.
    Coordinator of Digital Evangelization and Outreach at St. Paul the Apostle Parish in Gurnee, IL
    (Jul 2018 - Nov 2019), maintaining the parish's whole technical footprint - WiFi, website,
    social media, projection and sound at Masses - and building a multi-camera live streaming setup
    so home-bound parishioners could still attend. PC Technician at Abbott (Nov 2017 - Jul 2018),
    running daily operations for the Managed Print Services program and keeping the device
    inventory honest. Help Desk Analyst at NCOIT Inc (Sep 2016 - Nov 2017), first response on the
    ticketing system, system imaging and general support.

    Before that, Saint Leo University: Information Security Intern (Jan - May 2016), auditing
    university servers for vulnerabilities alongside the InfoSec team; Resident Assistant (Aug 2013
    - May 2016), running two resident events a month for nearly three years; and Student Tutor
    (Sep - Dec 2014) in computer information systems and theology. Plus a summer at NetWeaver
    Software in Cocoa, FL (May - Aug 2015), a startup doing online reservations, where I built and
    documented an Apache server, ran QA and systems testing, and made logos, gift certificates and
    instructional videos in Photoshop and Final Cut Pro.`,
  },
  {
    id: 6,
    title: "Windows XP Personal Website",
    date: "2025 - Present",
    gitURL: "https://github.com/gpinfocap/winxpsite",
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
    id: 7,
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
    id: 8,
    title: "AWS Certified DevOps Engineer - Professional",
    date: "May 2026 - May 2029",
    gitURL: "",
    techstack: [TechIcon.AWS, TechIcon.LAMBDA, TechIcon.DOCKER],
    gallery: [],
    overview: `The AWS Certified DevOps Engineer - Professional certification, covering continuous
    delivery, infrastructure as code, monitoring and incident response on AWS. Valid through
    May 2029.`,
  },
  {
    id: 9,
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
    id: 10,
    title: "Cloud & Data Certifications",
    date: "2011 - 2023",
    gitURL: "",
    techstack: [TechIcon.AZURE, TechIcon.MATILLION, TechIcon.PHOTOSHOP],
    gallery: [],
    overview: `Microsoft Certified: Azure Fundamentals (June 2023) and Matillion Associate
    Certification (January 2023), covering cloud fundamentals and cloud-native data transformation.
    Also, going back rather further, an Adobe Certified Associate in Photoshop CS5 from 2011 -
    proof that the design side came first.`,
  },
  {
    id: 11,
    title: "Education & Awards",
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
    title: "Infocap AI - Agentic Automation",
    content: WorkData[0],
  },
  {
    id: 2,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Exelon - Sr. Service Analyst",
    content: WorkData[1],
  },
  {
    id: 3,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Slalom - Consultant",
    content: WorkData[2],
  },
  {
    id: 4,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Consumers CU - IS Analyst",
    content: WorkData[3],
  },
  {
    id: 5,
    type: WorkType.PROFESSIONAL,
    icon: file,
    title: "Various others",
    content: WorkData[4],
  },
  {
    id: 6,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Windows XP Personal Website",
    content: WorkData[5],
  },
  {
    id: 7,
    type: WorkType.PERSONAL,
    icon: file,
    title: "Wrath of Verath",
    content: WorkData[6],
  },
  {
    id: 8,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "AWS DevOps Engineer - Pro",
    content: WorkData[7],
  },
  {
    id: 9,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "UiPath Certifications",
    content: WorkData[8],
  },
  {
    id: 10,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "Cloud & Data Certifications",
    content: WorkData[9],
  },
  {
    id: 11,
    type: WorkType.CREDENTIALS,
    icon: emptyfile,
    title: "Education & Awards",
    content: WorkData[10],
  },
];

export const PhotoCollection: GalleryImage[] = [];
