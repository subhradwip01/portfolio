import backend from "./assets/backend.png";
import front from "./assets/Front.png";
import block from "./assets/block.png";
import mongo from "./assets/mongodb.png";
import git from "./assets/git.png";
import react from "./assets/react.webp";
import node from "./assets/node.png";
import js from "./assets/js.webp";
import firebase from "./assets/firebase.png";
import solidity from "./assets/solidty.png";
import express from "./assets/express.png";
import layer from "./assets/layer5.png";
import csi from "./assets/csi.png";

export const ABOUT = {
  description: `
    I am an aspiring CSE student who enjoys connecting real-life
    problems with programming: be it ideas from different disciplines,
    people from different teams, or applications from different
    industries. If I talk about my technical skill. I know
    JAVA,MERN.Trying to learn Blockchain Development. Every day I
    eagerly learn new technologies. Love to contribute in open source.
    Helping people with my kwoledge.
    `,
  githubLink: "",
  linkedinLink: "",
  resumeLink:""
};

export const TECH_STACK = [
  {
    name: "Backend",
    tech: ["MongoDB", "NodeJs", "ExpressJs"],
    img: backend,
  },
  {
    name: "Frontend",
    tech: ["React"],
    img: front,
  },
  {
    name: "Blockchain",
    tech: ["Solidity"],
    img: block,
  },
];

export const SKILLS = [
  {
    name: "React",
    img: react,
  },
  {
    name: "JavaScript",
    img: js,
  },
  {
    name: "Node",
    img: node,
  },
  {
    name: "MongoDB",
    img: mongo,
  },
  {
    name: "ExpressJs",
    img: express,
  },
  {
    name: "Firebase",
    img: firebase,
  },
  {
    name: "Solidity",
    img: solidity,
  },
  {
    name: "Git and Github",
    img: git,
  },
];

export const WORKS = [
  {
    organization: "Layer5",
    logo: layer,
    link: "https://layer5.io/",
    work: [
      {
        role: "Member/Contributor",
        work: `
            Working as open-source contributor in layer5io.
            Working for layer5.io site enhancement.
            Contributing with Reactjs, gatsby.
            Helping other contributor for their contribution.          
            `,
        year: "2022-Present",
      },
    ],
  },
  {
    organization: "CSI Chapter",
    logo: csi,
    link: "https://csivitap.co.in/",
    work: [
      {
        role: "Technical Member",
        work: "Worked on different project on MERN Stack. Worked on Frontend for Admin Panel of CSI, implemented Redux and firebase for project manager",
        year: "2021-2022",
      },
      {
        role: "Community Manager",
        work: "Working on community manager for building better ecosystem for the growth of members and club",
        year: "2022-Present",
      },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Work 1",
    type: ["react"],
    techStack: ["React", "MongoDB", "Bing News API", "ExpressJs"],
    preview: block,
    description: "A good description",
    github: "gitlink",
    siteLink: "sitelink",
  },
  {
    name: "Work 2",
    type: ["api"],
    techStack: ["React", "MongoDB", "Bing News API", "ExpressJs"],
    preview: front,
    description: "A good description",
    github: "gitlink",
    siteLink: "sitelink",
  },
  {
    name: "Work 3",
    type: ["mern"],
    techStack: ["React", "MongoDB", "Bing News API", "ExpressJs"],
    preview: backend,
    description: "A good description.",
    github: "gitlink",
    siteLink: "sitelink",
  },
  {
    name: "Work 4",
    type: ["web3"],
    techStack: ["React", "MongoDB", "Bing News API", "ExpressJs"],
    preview: backend,
    description: "A good description.",
    github: "gitlink",
    siteLink: "sitelink",
  },
  {
    name: "Work 5",
    type: ["mern"],
    techStack: ["React", "MongoDB", "Bing News API", "ExpressJs"],
    preview: backend,
    description: "A good description.",
    github: "gitlink",
    siteLink: "sitelink",
  },
  {
    name: "Work 6",
    type: ["api"],
    techStack: ["React", "MongoDB", "Bing News API", "ExpressJs"],
    preview: backend,
    description: "A good description.",
    github: "gitlink",
    siteLink: "sitelink",
  },
  {
    name: "Work 7",
    type: ["react"],
    techStack: ["React", "MongoDB", "Bing News API", "ExpressJs"],
    preview: backend,
    description: "A good description.",
    github: "gitlink",
    siteLink: "sitelink",
  },
];

export const CONTACT = {
  mobile: "+91-8637069830",
  email: "subhradwip01@gmail.com",
  gitLink: "",
  linkedLink: "",
  twitterLink: "",
};
