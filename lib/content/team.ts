import { piProfile } from "./profile";
import type { Member } from "./types";

export const members: Member[] = [
  {
    name: piProfile.name,
    chineseName: piProfile.chineseName,
    role: "Assistant Professor, Fudan University",
    group: "Principal Investigator",
    bio: "",
    email: piProfile.email,
    image: piProfile.image,
    links: piProfile.links.filter((link) => link.label === "Google Scholar"),
    careerSummary: [
      {
        period: "2026.8 - Present",
        title: "Assistant Professor",
        institution: "Fudan University"
      },
      {
        period: "2023.8 - 2026.7",
        title: "Postdoctoral Scholar",
        institution: "University of California, San Diego"
      },
      {
        period: "2019.1 - 2023.4",
        title: "PhD in Chemistry",
        institution: "The University of British Columbia"
      },
      {
        period: "2014.9 - 2018.6",
        title: "BSc in Chemistry",
        institution: "Zhejiang University"
      }
    ],
    profileHref: "/shipei-xing"
  },
  {
    name: "Yinjie Yu",
    chineseName: "余胤杰",
    group: "Master's Students",
    bio:
      "Yinjie received his bachelor's degree from Shandong University. His research interests lie in mass spectrometry informatics, with a focus on mining small-molecule metabolomics data.",
    email: "26210740098@m.fudan.edu.cn",
    image: "/images/profiles/Yinjie_Yu.jpg",
    joinedYear: 2026
  },
  {
    name: "Lujie Qu",
    chineseName: "渠路捷",
    group: "Master's Students",
    bio:
      "Lujie's research focuses on mass spectrometry and small-molecule metabolism, with particular interest in the connections among the environment, microorganisms, and human metabolism.",
    email: "ljqu26@m.fudan.edu.cn",
    image: "/images/profiles/Lujie_Qu.jpg",
    joinedYear: 2026
  }
];
