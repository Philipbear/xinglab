import type { ProfileEntry, ProfileHonor } from "./types";

export const piProfile = {
  name: "Shipei Xing",
  chineseName: "邢世沛",
  title: "Assistant Professor - Department of Environmental Science & Engineering, Fudan University",
  email: "sxing@fudan.edu.cn",
  image: "/images/profiles/shipei-xing-profile.png",
  bio: "I am currently an Assistant Professor at Fudan University, and a recipient of the Excellent Young Scientists Fund (Overseas) – 国家优秀青年科学基金（海外）. As first or corresponding author, I have published in journals including Nature Methods, Analytical Chemistry, and others, with one manuscript in revision at Nature and another in revision at Nature Communications. My research interest is in developing mass spectrometry and computational methods to map the small-molecule landscape of the human body and to understand how food, microbes, and the environment shape it.",
  links: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=en0zumcAAAAJ&hl=en"
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0001-6227-6959"
    },
    {
      label: "GitHub",
      href: "http://github.com/Philipbear"
    }
  ],
  experience: [
    {
      period: "2026.8 - Present",
      title: "Assistant Professor",
      institution: "Department of Environmental Science & Engineering, Fudan University"
    },
    {
      period: "2023.8 - 2026.7",
      title: "Postdoctoral Scholar",
      institution: "University of California, San Diego",
      detail: "Supervisor: Pieter C. Dorrestein (Founder of the GNPS ecosystem & Molecular networking)",
      detailLinks: [
        { label: "Pieter C. Dorrestein", href: "https://dorresteinlab.ucsd.edu" },
        { label: "GNPS ecosystem", href: "https://gnps.ucsd.edu" }
      ]
    }
  ] satisfies ProfileEntry[],
  education: [
    {
      period: "2019.1 - 2023.4",
      title: "PhD in Chemistry",
      institution: "The University of British Columbia",
      detail: "Supervisor: Tao Huan",
      detailLinks: [{ label: "Tao Huan", href: "https://huan.chem.ubc.ca/" }]
    },
    {
      period: "2014.9 - 2018.6",
      title: "BSc in Chemistry, Chu Kochen Honors College",
      institution: "Zhejiang University",
      detail: "Supervisor: Zhan Lu, Feihe Huang",
      detailLinks: [
        { label: "Zhan Lu", href: "https://person.zju.edu.cn/lu" },
        { label: "Feihe Huang", href: "https://person.zju.edu.cn/feihehuang" }
      ]
    }
  ] satisfies ProfileEntry[],
  honors: [
    {
      year: "2025",
      title: "Excellent Young Scientists Fund (Overseas), National Natural Science Foundation of China",
      chineseTitle: "国家优秀青年科学基金项目（海外），国家自然科学基金委员会",
      // highlight: true
    },
    {
      year: "2022",
      title: "Canadian Society of Mass Spectrometry Lake Louise Travel Award (sponsored by Thermo)"
    },
    {
      year: "2022",
      title: "Pei-Huang Tung and Tan-Wen Tung Graduate Fellowship, UBC"
    },
    {
      year: "2022",
      title: "Gladys Estella Laird Research Fellowship, UBC"
    },
    {
      year: "2022",
      title: "C L Wang Memorial Scholarship, UBC"
    },
    {
      year: "2021",
      title: "Sandra Morris and Richard Tillyer Scholarship in Chemistry, UBC"
    },
    {
      year: "2018",
      title: "Outstanding Thesis Award, Zhejiang University"
    }
  ] satisfies ProfileHonor[],
  service: [
    "Reviewer: Nature, Cell, Nature Machine Intelligence, Nature Microbiology, Nature Communications, Analytical Chemistry, Environmental Pollution, BMC Bioinformatics, Analytica Chimica Acta, Journal of Cheminformatics, etc.",
    // "Editorial Board Member: BMC Chemistry"
  ]
};
