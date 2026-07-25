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
        period: "2026 - Present",
        title: "Assistant Professor",
        institution: "Fudan University"
      },
      {
        period: "2023 - 2026",
        title: "Postdoctoral Scholar",
        institution: "University of California, San Diego"
      },
      {
        period: "2019 - 2023",
        title: "PhD in Chemistry",
        institution: "The University of British Columbia"
      },
      {
        period: "2014 - 2018",
        title: "BSc in Chemistry",
        institution: "Zhejiang University"
      }
    ],
    profileHref: "/shipei-xing"
  },
  // {
  //   name: "FIRST LAST",
  //   chineseName: "姓名",
  //   role: "Postdoctoral Researcher",
  //   group: "Postdocs",
  //   bio: "Profile details will be added after confirmation.",
  //   email: "first.last.postdoc1@example.com",
  //   links: [
  //     { label: "GitHub", href: "https://example.com/github/first-last-postdoc1" },
  //     { label: "ORCID", href: "https://example.com/orcid/first-last-postdoc1" }
  //   ]
  // },
  {
    name: "Postdoctoral Researchers",
    role: "Open Position",
    group: "Postdocs",
    bio:
      "We welcome postdocs with backgrounds in metabolomics/exposomics, bioinformatics, microbiology, AI, or data science.",
    email: piProfile.email,
    links: [{ label: "Learn more", href: "/contact" }],
    isOpenPosition: true
  },
  {
    name: "Master's & PhD Students",
    role: "Open Position",
    group: "Graduate Students",
    bio:
      "We welcome graduate students who want to develop computational or experimental approaches for metabolomics and xenobiotic metabolism.",
    email: piProfile.email,
    links: [{ label: "Learn more", href: "/contact" }],
    isOpenPosition: true
  },
  {
    name: "Undergraduate Researchers",
    role: "Open Position",
    group: "Undergraduate Students",
    bio:
      "We welcome motivated undergraduates who are curious about science, regardless of prior research experience. We are especially interested in students who can commit to sustained, continuous research over multiple semesters.",
    email: piProfile.email,
    links: [{ label: "Learn more", href: "/contact" }],
    isOpenPosition: true
  }
];
