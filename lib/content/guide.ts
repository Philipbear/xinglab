export type GuideTextPart =
  | string
  | {
      label: string;
      href: string;
    }
  | {
      text: string;
      strong: true;
    };

type GuideText = string | GuideTextPart[];

type GuideBlock = {
  title: string;
  body?: GuideText;
  bullets?: GuideText[];
  subblocks?: GuideBlock[];
};

type GuideResource = GuideBlock & {
  id: string;
  status?: string;
  href?: string;
  actionLabel?: string;
};

export type GuideSection = {
  id: string;
  title: string;
  deck?: string;
  paragraphs?: GuideText[];
  bullets?: GuideText[];
  blocks?: GuideBlock[];
  resources?: GuideResource[];
};

export type GuideContent = {
  eyebrow: string;
  title: string;
  description: string;
  tocTitle: string;
  htmlLang?: string;
  alternateHref?: string;
  alternateLabel?: string;
  sections: GuideSection[];
};

export type GuidePageSummary = {
  label: string;
  title: string;
  description: string;
  href: string;
};

export const guideContent: GuideContent = {
  eyebrow: "Lab Guide",
  title: "Xing Lab Guide",
  description:
    "Shared expectations, practical routines, and reusable resources for doing careful, reproducible science together.",
  tocTitle: "Contents",
  sections: [
    {
      id: "acknowledgment",
      title: "Acknowledgment",
      paragraphs: [
        [
          "This guide is inspired in part by publicly shared lab guide and resource documents from the ",
          {
            label: "Coley Research Group @ MIT",
            href: "https://coley.mit.edu/"
          },
          " and the ",
          {
            label: "Wang Bioinformatics Lab @ UC Riverside",
            href: "https://www.cs.ucr.edu/~mingxunw/"
          },
          ". We thank these groups for making their materials available to the broader research community."
        ]
      ]
    },
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "This guide is meant to make lab life easier to navigate. It describes how we communicate, meet, document work, prepare manuscripts and figures, share data and code, and learn from one another.",
        "We want to do impactful, ambitious research, but never at the expense of the well-being, happiness, or long-term growth of the people doing the work.",
        "If you need help with research, career development, or something affecting your life in or outside the lab, you are always welcome to reach out to the PI."
      ]
    },
    {
      id: "values-expectations",
      title: "Values & Expectations",
      deck:
        "We want the lab to be a place where people can do careful, ambitious work while feeling respected, supported, and able to grow.",
      bullets: [
        "Do rigorous science with generosity: be careful with data, claims, and interpretation; document clearly; and challenge ideas in ways that strengthen the work.",
        "Treat people with respect: excellence is not determined by background, title, language, or seniority. Everyone should feel comfortable to ask questions, raise concerns, and contribute ideas.",
        "Be reliable with each other: take ownership of your work, keep collaborators informed, and raise blockers before they slow the project.",
        "Stay aware of the lab's work: learn about one another's projects and look for collaboration opportunities.",
        "Keep learning: no one arrives knowing every method, instrument, coding practice, or writing convention. Asking for help is part of doing good research."
      ]
    },
    {
      id: "communication-meetings",
      title: "Communication & Meetings",
      blocks: [
        {
          title: "Communication",
          bullets: [
            "Use email for formal requests, external communication, documents, and deadline-sensitive items.",
            [
              { text: "Evening or weekend responses are not expected", strong: true },
              " for non-urgent messages."
            ],
            "If something is urgent, state the deadline clearly.",
            "If you need a recommendation letter, contact the PI at least 3 weeks before the deadline and share the relevant materials."
          ]
        },
        {
          title: "One-on-one meetings",
          bullets: [
            "One-on-one meetings usually happens weekly, or every other week when appropriate.",
            "Bring a short agenda, recent results, and specific questions whenever possible.",
            [
              "Do not wait for the next scheduled meeting if a blocker is slowing the project; ",
              { text: "reach out to the PI as soon as possible", strong: true },
              "."
            ]
          ]
        },
        {
          title: "Lab meetings",
          body:
            "Lab meetings are a shared space to learn science, practice presentation skills, build research judgment, and stay connected with work across the group. Everyone is expected to attend lab meetings unless they have a class, travel, illness, or other conflicts; please inform the PI in advance. Journal club and code review will rotate through this meeting rhythm rather than becoming extra standing meetings.",
          subblocks: [
            {
              title: "General weekly lab meetings",
              bullets: [
                "Members will rotate through in-progress updates, problem-solving discussions, and occasional planning talks so the lab can give feedback while projects are still flexible.",
                "Research updates should briefly reestablish the project context, summarize recent progress (including any setbacks), identify current challenges, and propose next steps."
              ]
            },
            {
              title: "Journal club",
              bullets: [
                "Presenters should rotate. The presenter should choose up to two papers and share them with the lab in advance.",
                "Journal club is for deeper discussion of important papers and methods. The goal is to build shared scientific judgment, not just collect links. Bring specific questions, concerns, or discussion points to the meeting.",
              ]
            },
            {
              title: "Code review",
              bullets: [
                "We use code review to improve reproducibility, readability, testing, documentation, and responsible use of LLM-generated code.",
                "The goal is collaborative improvement, not fault-finding. Come with a focused question, concern, or part of the workflow you want others to inspect."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "time-away-wellbeing",
      title: "Time Away & Well-being",
      paragraphs: [
        "Academic work offers flexibility, and we should use that flexibility to build a healthy, sustainable rhythm. More time spent working does not automatically mean better science.",
        "People do their best work when they can rest, think, recover, and keep a life outside the lab. Planning ahead helps the lab support that."
      ],
      bullets: [
        "Normal working rhythms may look different across people and project stages, but communication and reliability matter. Keep collaborators informed when your availability affects shared work.",
        "Plan longer absences in advance and communicate them to the PI and to people who depend on your work.",
        "Short breaks, sick days, medical appointments, family responsibilities, and personal emergencies are part of life. Communicate what others need to know, but you do not need to share private details.",
        "Respect other people's time away. Avoid creating unnecessary urgency during evenings, weekends, holidays, or vacations unless there is a true deadline or safety issue.",
        "When deadlines require unusual intensity, communicate expectations clearly and return to a sustainable rhythm afterward."
      ]
    },
    {
      id: "collaboration-authorship",
      title: "Collaboration & Authorship",
      paragraphs: [
        "Authorship and collaboration expectations should be discussed early and revisited as contributions evolve. This avoids surprises when a project becomes a manuscript, talk, poster, or public dataset."
      ],
      bullets: [
        "The lead author is usually responsible for driving the project, organizing the evidence, and preparing the first complete manuscript draft.",
        [
          { text: "ALL", strong: true },
          " coauthors should make clear intellectual, experimental, computational, analytical, or writing contributions."
        ],
        [
          { text: "ALL", strong: true },
          " coauthors should be kept informed before major decisions, submissions, public releases, or conference abstracts."
        ],
        [
          "No abstract, poster, manuscript, dataset, or code release should be submitted publicly without review and approval from ",
          { text: "ALL", strong: true },
          " coauthors and the ",
          { text: "PI", strong: true },
          "."
        ]
      ]
    },
    {
      id: "data",
      title: "Data",
      deck:
        "Raw data are part of the scientific record. They should be preserved, organized, backed up, and documented even when they do not appear in a final paper.",
      blocks: [
        {
          title: "Preserve raw data",
          bullets: [
            [
              "Preserve ",
              { text: "ALL", strong: true },
              " raw data, including exploratory runs, failed experiments, controls, samples, and files that are not used in the final publication. ",
              { text: "Do not overwrite original files.", strong: true }
            ],
            [
              "Keep the original files separate from processed data, cleaned tables, exported figures, and analysis outputs."
            ],
            "If data need to be excluded from an analysis, document the reason instead of deleting the files."
          ]
        },
        {
          title: "Organize project data",
          bullets: [
            [
              "Keep raw data, processed data, metadata, and analysis outputs in clearly named locations, with processing steps, key parameters, sample metadata, and quality-control decisions documented."
            ],
            "Use clear dates and names for folders and files so that progress can be reconstructed later.",
            "Make sure collaborators and future lab members can understand where the important files are and which version was used for each result."
          ]
        },
        {
          title: "Backups",
          bullets: [
            [
              { text: "Back up data early and often.", strong: true },
              " When possible, keep important project data in ",
              { text: "more than one place", strong: true },
              ", such as an external hard drive plus lab NAS, approved institutional storage, or approved cloud storage."
            ],
            [
              "Mac users can use ",
              {
                label: "Time Machine",
                href: "https://support.apple.com/guide/mac-help/mh35860/mac"
              },
              " with an external drive or network storage. Windows users can use ",
              {
                label: "File History",
                href: "https://support.microsoft.com/en-us/windows/backup-and-restore-with-file-history-7bf065bf-f1ea-0a78-c1cf-7dcf51cc8bfc"
              },
              " to back up selected folders to an external drive or network location; make sure project folders outside the default libraries are included."
            ],
            "Periodically confirm that backups can actually be restored, especially before major cleanups, computer changes, manuscript submission, or public data release."
          ]
        }
      ]
    },
    {
      id: "manuscripts",
      title: "Manuscripts",
      blocks: [
        {
          title: "Start with the story",
          bullets: [
            "A manuscript outline should make the paper's logic visible before the prose is polished: what problem matters, what gap remains, what evidence we have, and why the result changes how readers should think or work.",
            "Build the outline around figures and tables. Each major result should correspond to a figure, table, or clearly described analysis."
          ]
        },
        {
          title: "Outline components",
          bullets: [
            [
              "Abstract: a concise 5-10 sentence summary of the whole paper, including context, gap, approach, main result, and significance. See the ",
              {
                label: "Abstract Guide",
                href: "/resources/abstract_guide.pdf"
              },
              " when drafting or revising the abstract and paper narrative."
            ],
            "Introduction: a paragraph-level plan explaining the broad problem, the specific question, what has been done before, why this work is different or better, and the main contributions.",
            "Results: a list of key figures and tables. Draft captions early so each figure has a clear standalone message.",
            "Discussion: interpretations, important limitations, broader conclusions that are supported by the data, future improvements.",
            "Methods and supporting information: experiments, controls, ablations, datasets, method details, supplementary figures, and anything needed for reproducibility but too detailed for the main text."
          ]
        },
        {
          title: "Drafting and revision",
          bullets: [
            "Draft early enough that revisions can improve the science, not only the wording.",
            "Use comments and tracked changes as a learning process rather than a checklist to accept mechanically.",
            "When sending a manuscript draft to the PI, use a clear file name with the project name, your name initials, and date, for example: ProjectName_SX_20260901.docx."
          ]
        },
        {
          title: "Supplementary information",
          bullets: [
            "Supplementary information is usually prepared as two files: one Word document for supplementary figures and supplementary notes (if applicable), and one Excel file for supplementary tables.",
            "Nature journals usually also require a separate Excel file for source data."
          ]
        }
      ],
      resources: [
        {
          id: "resource-manuscript-template",
          title: "Manuscript Template",
          href: "/resources/manuscript_template.docx",
          actionLabel: "Download Word template",
          bullets: [
            "Manuscript format may vary by journal; check the author guidelines when preparing the final version."
          ]
        }
      ]
    },
    {
      id: "figures",
      title: "Figures",
      blocks: [
        {
          title: "Minimum standard for every figure",
          bullets: [
            "Figures should look clean and professional in all contexts: lab meetings, manuscript drafts, posters, and final submissions.",
            "For an internal draft, clean and professional means the audience can understand what is plotted, what is being compared, and what conclusion the figure supports without guessing.",
            [
              "At any stage, axes must have clear ",
              { text: "labels", strong: true },
              " and ",
              { text: "units", strong: true },
              " when applicable; legends or direct labels must explain groups, colors, symbols, and abbreviations."]
          ]
        },
        {
          title: "Publication and submission standards",
          bullets: [
            [
              "Avoid unnecessary chart borders, heavy gridlines, decorative effects, or color choices that are hard to distinguish. ",
              { text: "Less is more.", strong: true }
            ],
            "Use Arial (or Helvetica) throughout the figure, including labels, legends, annotations, and panel letters.",
            "At the final printed size, most text should be 4-10 pt.",
            "Use consistent font size, line width, marker size, color palette, panel labels, and chemical structure style across all panels.",
            "Captions should state what is shown, the sample size, the statistical test, and exact p-values if applicable."
          ]
        },
        {
          title: "Figure assembly",
          bullets: [
            "Use a tool that supports vector editing, such as Adobe Illustrator, Inkscape or PowerPoint.",
            "Save vector formats whenever possible, such as SVG, unless the journal requires a specific format.",
            "If a vector file becomes too large or impractical (for example, with large UMAP plots), export a raster image such as PNG or JPEG at no less than 600 DPI.",
            "When assembling multipanel figures, export plots at the intended final figure or poster size to avoid awkward resizing later.",
            "If panels are generated separately, keep axis sizes, label positions, fonts, and line widths consistent across panels."
          ]
        },
        {
          title: "Chemical structures",
          bullets: [
            "Chemical structures should usually be drawn in ChemDraw, using Nature or ACS style.",
            "On macOS, export ChemDraw structures as SVG files. On Windows, copying and pasting into PowerPoint should preserve vector quality.",
          ]
        },
        {
          title: "Plots and reproducibility",
          bullets: [
            "Generate quantitative plots programmatically when possible in Python or R (I personally prefer Python when possible). Programmatic plotting matters because data may update, analyses may need to be rerun, and figures often need to be reproduced during revision. Avoid making plots manually in Excel or Prism.",
            "Keep plotting code, processed data, and exported figure files together.",
            [
              "For a practical introduction to data visualization, this is a great resource: ",
              {
                label: "From Data to Viz",
                href: "https://www.data-to-viz.com/"
              },
              "."
            ]
          ]
        }
      ],
      resources: [
        {
          id: "resource-figure-template",
          title: "Figure Template",
          href: "/resources/figures_template.pptx",
          actionLabel: "Download PowerPoint template",
          bullets: [
            "Use this template as a starting point for assembling clean, consistent manuscript and presentation figures."
          ]
        }
      ]
    },
    {
      id: "documentation-data-code",
      title: "Documentation & Code",
      deck: "Future you, future lab members, collaborators, and reviewers should be able to understand what was done and why.",
      blocks: [
        {
          title: "Working records",
          bullets: [
            "Everyone is expected to keep research notes for experiments and analyses, either electronically or in a handwritten notebook, with enough detail that the work can be understood and revisited later.",
            "Record why important choices were made, not only what was done.",
            "Use clear dates and names for files, slides, drafts, and result folders so that progress can be reconstructed later."
          ]
        },
        {
          title: "Code and reproducible workflows",
          bullets: [
            "Use version control for code-based projects whenever possible.",
            "Organize scripts and notebooks so the main analysis path is understandable without relying on memory.",
            "Include a README with the folder structure, main scripts, expected inputs and outputs, and the order in which scripts should be run.",
            "Document the software environment, package versions, operating system or server, and external tools needed to rerun the work.",
            "Before making code public, check carefully for private data, credentials, unpublished collaborator materials, and licensing issues."
          ]
        }
      ]
    },
    {
      id: "llms",
      title: "Large Language Models (LLMs)",
      deck: "LLMs are useful research tools, and we should embrace them thoughtfully.",
      paragraphs: [
        "LLMs and AI-powered assistants can help with coding, documentation, literature triage, outlining, editing, brainstorming, data-analysis planning, presentation preparation, and learning unfamiliar tools or concepts. They are most useful when they make us faster, clearer, and more careful, not when they replace our understanding."
      ],
      blocks: [
        {
          title: "Responsibility and verification",
          bullets: [
            [
              {
                text: "It is your responsibility to understand every line of code that you commit. You are also responsible for every analysis and claim that you submit. Never accept LLM output without understanding it and verifying it with tests, inspection, source checks, and code review. We will use code review to help ensure this standard is met.",
                strong: true
              }
            ],
            "LLMs are usually strongest on common programming and writing tasks. They can be unreliable for specialized predictions, unpublished facts, or highly domain-specific scientific claims.",
            "Do not outsource scientific judgment or novelty. Use these tools to accelerate execution and clarify thinking, while developing your own ideas and expertise."
          ]
        },
        {
          title: "Context and privacy",
          bullets: [
            "Good results require good context: provide the relevant code base, expected inputs and outputs, and clear instructions for the task.",
            "Do not paste sensitive data, private manuscripts, confidential code, unpublished collaborator information, credentials, or proprietary material into cloud tools without appropriate approval."
          ]
        }
      ]
    },
    {
      id: "reviewing-manuscripts",
      title: "Reviewing Manuscripts",
      bullets: [
        [
          "Be ",
          { text: "kind", strong: true },
          ". Write the review as if you are helping real people improve work they care about."
        ],
        [
          "Start with the major ",
          { text: "strengths", strong: true },
          " when possible, especially if the work has clear value. This helps the authors and editor understand what is worth preserving."
        ],
        [
          "Separate ",
          { text: "technical correctness", strong: true },
          " from ",
          { text: "novelty or significance", strong: true },
          ". A correct paper can still have limited impact; a potentially important paper can still need stronger evidence."
        ],
        "When claims are overstated, identify the specific claim and explain what the data do and do not support.",
        [
          "For each major concern, try to ",
          { text: "propose a solution", strong: true },
          ", even if it is not perfect. This is more helpful than only saying that something is wrong or missing."
        ]
      ]
    },
    {
      id: "reading-list-key-papers",
      title: "Reading List & Key Papers",
      paragraphs: [
        "These are key papers and tools that all lab members are expected to read and become familiar with. The goal is not to memorize every detail, but to understand what each paper contributes, what each tool is used for, when it is relevant, and how it connects to our work."
      ],
      blocks: [
        {
          title: "Key Research and Tool Papers",
          body: "Core research papers and method/tool papers that define important ideas, workflows, and resources for the lab.",
          bullets: [
            [
              { text: "Key research papers:", strong: true },
              " ",
              { label: "Bile acid paper", href: "https://www.cell.com/cell/fulltext/S0092-8674(24)00185-5" },
              "  |  ",
              { label: "N-acyl lipid paper", href: "https://www.cell.com/cell/fulltext/S0092-8674(25)00565-3" },
              "  |  ",
              { label: "Reverse metabolomics", href: "https://www.nature.com/articles/s41586-023-06906-8" },
              "  |  ",
              { label: "LLM-assisted metabolite discovery", href: "https://www.nature.com/articles/s41586-025-09969-x" }
            ],
            [
              { text: "Tool papers:", strong: true },
              " ",
              { label: "MZmine", href: "https://www.nature.com/articles/s41587-023-01690-2" },
              "  |  ",
              { label: "USI", href: "https://www.biorxiv.org/content/10.1101/2020.05.09.086066v2" },
              "  |  ",
              { label: "FBMN", href: "https://www.nature.com/articles/s41592-020-0933-6" },
              "  |  ",
              { label: "ReDU", href: "https://www.nature.com/articles/s41592-020-0916-7" },
              "  |  ",
              { label: "Pan-ReDU", href: "https://www.nature.com/articles/s41467-025-60067-y" },
              "  |  ",
              { label: "MassQL", href: "https://www.nature.com/articles/s41592-025-02660-z" },
              "  |  ",
              { label: "MASST", href: "https://www.nature.com/articles/s41587-019-0375-9" },
              "  |  ",
              { label: "microbeMASST", href: "https://www.nature.com/articles/s41564-023-01575-9" },
              "  |  ",
              { label: "StructureMASST", href: "https://www.nature.com/articles/s41587-026-03082-8" }
            ]
          ]
        },
        {
          title: "Commonly Used Tool Links",
          body:
            "Lab members should know what these resources are used for and when they are the right place to start.",
          bullets: [
            [
              { label: "GNPS library", href: "https://external.gnps2.org/gnpslibrary" },
              "  |  ",
              { label: "Pan-ReDU", href: "https://redu.gnps2.org/" },
              "  |  ",
              { label: "USI resolver", href: "https://metabolomics-usi.gnps2.org/" },
              "  |  ",
              { label: "Fast MASST", href: "https://fasst.gnps2.org/fastsearch/" },
              "  |  ",
              { label: "microbeMASST", href: "https://masst.gnps2.org/microbemasst/" },
              "  |  ",
              { label: "microbiomeMASST", href: "https://masst.gnps2.org/microbiomemasst/" },
              "  |  ",
              { label: "plantMASST", href: "https://masst.gnps2.org/plantmasst/" },
              "  |  ",
              { label: "StructureMASST", href: "https://structure-masst.gnps2.org/" },
              "  |  ",
              { label: "GNPS dashboard", href: "https://dashboard.gnps2.org/" }
            ]
          ]
        }
      ]
    },
  ]
};

function getGuideSections(sectionIds: string[]) {
  return sectionIds
    .map((sectionId) => guideContent.sections.find((section) => section.id === sectionId))
    .filter((section): section is GuideSection => Boolean(section));
}

export const guidePages: GuidePageSummary[] = [
  {
    label: "LAB LIFE",
    title: "Lab Life",
    description:
      "Expectations, communication norms, meeting routines, well-being, collaboration, and authorship.",
    href: "/guide/lab-life"
  },
  {
    label: "RESEARCH PRACTICE",
    title: "Research Practice",
    description:
      "Data, manuscripts, figures, documentation, code, LLM use, reviewing, reading lists, and shared resources.",
    href: "/guide/research-practice"
  }
];

export const labLifeGuideContent: GuideContent = {
  eyebrow: "Lab Guide",
  title: "Lab Life",
  description:
    "Shared expectations, practical routines, and norms for working together in a healthy, thoughtful, and reliable lab environment.",
  tocTitle: "Lab Life Contents",
  alternateHref: "/guide/lab-life/zh",
  alternateLabel: "中文",
  sections: getGuideSections([
    "acknowledgment",
    "overview",
    "values-expectations",
    "communication-meetings",
    "time-away-wellbeing",
    "collaboration-authorship"
  ])
};

const researchPracticeOverviewSection: GuideSection = {
  id: "overview",
  title: "Overview",
  paragraphs: [
    "Research practice covers the habits that make our scientific work clear, reusable, and trustworthy. This page gathers expectations for data, manuscripts, figures, documentation, code, responsible use of LLMs, reviewing, and shared reading resources.",
    "The common thread is reproducibility: future you, lab members, collaborators, reviewers, and readers should be able to understand what was done, why it was done, and how conclusions were supported."
  ],
};

export const researchPracticeGuideContent: GuideContent = {
  eyebrow: "Lab Guide",
  title: "Research Practice",
  description:
    "Practical standards and resources for data, writing, figures, documentation, code, shared scientific references and others.",
  tocTitle: "Research Practice Contents",
  alternateHref: "/guide/research-practice/zh",
  alternateLabel: "中文",
  sections: [
    ...getGuideSections(["acknowledgment"]),
    researchPracticeOverviewSection,
    ...getGuideSections([
      "data",
      "manuscripts",
      "figures",
      "documentation-data-code",
      "llms",
      "reviewing-manuscripts",
      "reading-list-key-papers"
    ])
  ]
};

const translationNoticeSectionZh: GuideSection = {
  id: "translation-note",
  title: "翻译说明",
  paragraphs: [
    [
      "本中文版本由",
      { text: "ChatGPT", strong: true },
      "辅助翻译和整理，可能有遗漏、错误或不够准确的表述。如与英文版不一致，请以英文版为准；也欢迎告诉我们需要修改的地方。"
    ]
  ]
};

const acknowledgmentSectionZh: GuideSection = {
  id: "acknowledgment",
  title: "致谢",
  paragraphs: [
    [
      "本指南部分参考了 ",
      {
        label: "Coley Research Group @ MIT",
        href: "https://coley.mit.edu/"
      },
      " 和 ",
      {
        label: "Wang Bioinformatics Lab @ UC Riverside",
        href: "https://www.cs.ucr.edu/~mingxunw/"
      },
      " 公开分享的实验室指南和资源。感谢这些课题组向更广泛的科研界公开分享这些材料。"
    ]
  ]
};

const labLifeOverviewSectionZh: GuideSection = {
  id: "overview",
  title: "概览",
  paragraphs: [
    "这份指南旨在帮助大家更顺畅地适应实验室生活，介绍我们如何沟通、开会、记录工作、准备论文与图表、共享数据和代码，以及相互学习。",
    "我们追求有影响力的科研，但任何时候绝不应以牺牲成员的健康、幸福或个人成长为代价。",
    "遇到科研、职业或生活上的困难，都欢迎联系导师。"
  ]
};

const valuesExpectationsSectionZh: GuideSection = {
  id: "values-expectations",
  title: "价值观与期待",
  deck:
    "我们希望实验室是一个能认真做科研，也能让人感到被尊重、被支持、能持续成长的地方。",
  bullets: [
    "以严谨、友善的态度做科学：认真对待数据、论断和解释，做好清晰记录，并以有助于改进工作的方式质疑观点。",
    "尊重每一个人：优秀不由背景、头衔、语言或资历决定。每个人都应该能自在地提问、表达担忧和贡献想法。",
    "彼此可靠：对自己的工作负责，及时更新进展，在问题拖慢项目之前主动沟通。",
    "主动了解组内工作：学习彼此的项目，也留意可能的合作机会。",
    "保持学习：没有人一开始就懂所有方法、仪器、代码或写作规范。寻求帮助也是做好科研的一部分。"
  ]
};

const communicationMeetingsSectionZh: GuideSection = {
  id: "communication-meetings",
  title: "沟通与会议",
  blocks: [
    {
      title: "沟通",
      bullets: [
        "正式请求、对外沟通、文件往来和有明确时限的事项，请使用电子邮件。",
        [
          { text: "非紧急信息不需要晚上或周末回复", strong: true },
          "。"
        ],
        "紧急事项请直接写清截止时间。",
        "如果需要推荐信，请至少提前 3 周联系导师，并提供相关材料。"
      ]
    },
    {
      title: "一对一会议",
      bullets: [
        "一对一会议通常每周一次；也可以根据项目阶段调整为隔周。",
        "尽量带着简短议程、近期结果和具体问题来开会。",
        [
          "遇到卡点时，不要等到下一次固定会议；请",
          { text: "尽快联系导师", strong: true },
          "。"
        ]
      ]
    },
    {
      title: "组会",
      body:
        "组会为大家提供共同学习科学知识、锻炼表达能力、培养科研判断力以及了解组内各项工作的机会。除上课、出差、生病或其他时间冲突外，大家都应参加组会；如需缺席，请提前告知导师。文献讨论和代码审查将轮流纳入常规组会，不再另设固定会议。",
      subblocks: [
        {
          title: "每周常规组会",
          bullets: [
            "成员轮流汇报阶段性进展、开展问题讨论，并不定期进行规划交流，以便项目仍有调整空间时就能获得反馈。",
            "进展汇报应简要说明项目背景、近期进展（包括不顺利的部分）、当前挑战和下一步计划。"
          ]
        },
        {
          title: "文献讨论",
          bullets: [
            "报告人轮流担任，最多选择两篇论文，并提前分享给大家。",
            "文献讨论旨在深入探讨重要论文和方法、共同培养科研判断力，而不只是收集文献链接。请带着具体问题、疑虑或讨论要点参加。"
          ]
        },
        {
          title: "代码审查",
          bullets: [
            "代码审查帮助我们提高可重复性、可读性、测试和文档质量，也帮助大家负责任地使用 LLM 生成的代码。",
            "目标是共同改进，不是挑错。请带着具体问题，或希望大家一起检查的代码/工作流来参加。"
          ]
        }
      ]
    }
  ]
};

const timeAwayWellbeingSectionZh: GuideSection = {
  id: "time-away-wellbeing",
  title: "休假与身心健康",
  paragraphs: [
    "学术工作有一定灵活性，我们应该用它建立健康、可持续的节奏。工作时间更长，并不自动意味着科学做得更好。",
    "能休息、思考、恢复，也能保有实验室之外的生活，往往更有利于长期做好科研。提前计划，也能让实验室更好地支持彼此。"
  ],
  bullets: [
    "每个人以及项目的不同阶段都可以有不同的工作节奏，但沟通和可靠性始终很重要。若你的时间安排会影响协作，请提前告知相关人员。",
    "较长时间的离开请提前规划，并告知导师以及依赖你工作的相关人员。",
    "短暂休息、病假、就医、家庭责任和个人紧急情况都是生活的一部分。请沟通必要信息，不需要透露私人细节。",
    "尊重他人的休息时间。除非有明确截止日期或安全问题，尽量避免在晚上、周末、节假日或休假期间制造不必要的紧迫感。",
    "有些截止日期会带来阶段性高强度工作。请清楚沟通预期，并在之后回到可持续的节奏。"
  ]
};

const collaborationAuthorshipSectionZh: GuideSection = {
  id: "collaboration-authorship",
  title: "合作与作者署名",
  paragraphs: [
    "合作方式和作者署名应尽早讨论，并随着贡献的变化重新确认。这样可以避免项目转化为论文、学术报告、海报或公开数据集时出现分歧。"
  ],
  bullets: [
    "第一作者通常负责推动项目、组织证据，并准备第一版完整论文草稿。",
    [
      { text: "所有", strong: true },
      "共同作者都应有明确的智力、实验、计算、分析或写作贡献。"
    ],
    [
      { text: "所有", strong: true },
      "共同作者都应在重大决定、投稿、公开发布或会议摘要提交前被及时告知。"
    ],
    [
      "任何摘要、海报、论文、数据集或代码发布，在公开提交前都必须经过",
      { text: "所有", strong: true },
      "共同作者和",
      { text: "导师", strong: true },
      "的审阅与同意。"
    ]
  ]
};

export const labLifeGuideContentZh: GuideContent = {
  eyebrow: "实验室指南",
  title: "实验室生活",
  description:
    "关于实验室日常、沟通、会议、身心健康、合作与作者署名的共同期待。",
  tocTitle: "实验室生活目录",
  htmlLang: "zh-CN",
  alternateHref: "/guide/lab-life",
  alternateLabel: "English",
  sections: [
    translationNoticeSectionZh,
    acknowledgmentSectionZh,
    labLifeOverviewSectionZh,
    valuesExpectationsSectionZh,
    communicationMeetingsSectionZh,
    timeAwayWellbeingSectionZh,
    collaborationAuthorshipSectionZh
  ]
};

const researchPracticeOverviewSectionZh: GuideSection = {
  id: "overview",
  title: "概览",
  paragraphs: [
    "科研实践涵盖一系列使科研工作清晰、可复用且可信赖的习惯。本页汇总了数据管理、论文写作、科研绘图、文档与代码、负责任地使用 LLM、论文审阅和共享阅读资源等方面的规范。",
    "核心是可重复性：未来的自己、组内同事、合作者、审稿人和读者，都应能看懂我们做了什么、为什么做，以及证据如何支持结论。"
  ]
};

const dataSectionZh: GuideSection = {
  id: "data",
  title: "数据",
  deck:
    "原始数据是科研记录的一部分。无论是否用于最终论文，都应妥善保存、整理、备份并记录相关信息。",
  blocks: [
    {
      title: "保存原始数据",
      bullets: [
        [
          "保存",
          { text: "所有", strong: true },
          "原始数据，包括探索性实验、失败的实验、对照、样本，以及最终论文未使用的文件。",
          { text: "不要覆盖原始文件。", strong: true }
        ],
        "原始文件应与处理后的数据、清洗后的表格、导出的图表和分析结果分开保存。",
        "如果某些数据需要排除，请记录原因，不要删除文件。"
      ]
    },
    {
      title: "组织项目数据",
      bullets: [
        "原始数据、处理后数据、元数据和分析输出应放在命名清楚的位置，并记录处理步骤、关键参数、样本信息和质控决定。",
        "文件夹和文件名请包含清楚的日期与含义，方便之后重建项目进展。",
        "合作者和未来的组员应能看懂重要文件在哪里，以及每个结果使用的是哪个版本。"
      ]
    },
    {
      title: "备份",
      bullets: [
        [
          { text: "早备份，常备份。", strong: true },
          "重要项目数据尽量保存在",
          { text: "两个以上位置", strong: true },
          "，例如外置硬盘加实验室 NAS、学校认可的存储空间，或合规云存储。"
        ],
        [
          "Mac 用户可以使用 ",
          {
            label: "Time Machine",
            href: "https://support.apple.com/guide/mac-help/mh35860/mac"
          },
          " 配合外置硬盘或网络存储。Windows 用户可以使用 ",
          {
            label: "File History",
            href: "https://support.microsoft.com/en-us/windows/backup-and-restore-with-file-history-7bf065bf-f1ea-0a78-c1cf-7dcf51cc8bfc"
          },
          " 备份到外置硬盘或网络位置；请确认项目文件夹也被包含在备份中。"
        ],
        "请定期测试备份能否恢复，尤其是在清理文件、更换电脑、投稿或公开数据前。"
      ]
    }
  ]
};

const manuscriptsSectionZh: GuideSection = {
  id: "manuscripts",
  title: "论文写作",
  blocks: [
    {
      title: "从故事线开始",
      bullets: [
        "在润色文字之前，论文大纲应先把逻辑讲清楚：问题为何重要，空白在哪里，我们有什么证据，结果为什么值得读者关心。",
        "围绕图和表搭建大纲。每个主要结果都应对应一张图、一张表，或一项清楚描述的分析。"
      ]
    },
    {
      title: "大纲组成",
      bullets: [
        [
          "摘要：用 5-10 句概括背景、空白、方法、主要结果和意义。撰写或修改时，可参考 ",
          {
            label: "摘要写作指南",
            href: "/resources/abstract_guide.pdf"
          },
          "。"
        ],
        "引言：说明大问题、具体问题、已有工作、本文不同之处，以及主要贡献。",
        "结果：列出关键图表。尽早起草图注，让每张图都有清楚的信息。",
        "讨论：写清解释、局限、有数据支持的结论，以及未来改进方向。",
        "方法和补充信息：包括实验、对照、消融实验、数据集、方法细节、补充图，以及对可重复性重要但不适合放入正文的内容。"
      ]
    },
    {
      title: "起草与修改",
      bullets: [
        "尽早起草，让修改能改善科学内容，而不只是润色措辞。",
        "把批注和修订当作学习过程，而不是机械接受修改。",
        "将论文草稿发给导师时，请使用清楚的文件名，包括项目名、你的姓名缩写和日期，例如：ProjectName_SX_20260901.docx。"
      ]
    },
    {
      title: "补充信息",
      bullets: [
        "补充信息通常准备为两个文件：一个 Word 文档放补充图和补充说明（如适用），一个 Excel 文件放补充表。",
        "Nature 系列期刊通常还需要单独的 source data Excel 文件。"
      ]
    }
  ],
  resources: [
    {
      id: "resource-manuscript-template",
      title: "论文模板",
      href: "/resources/manuscript_template.docx",
      actionLabel: "下载 Word 模板",
      bullets: [
        "不同期刊格式要求不同；准备最终版本时请查看作者指南。"
      ]
    }
  ]
};

const figuresSectionZh: GuideSection = {
  id: "figures",
  title: "科研绘图",
  blocks: [
    {
      title: "每张图的最低标准",
      bullets: [
        "无论用于组会、论文草稿、海报还是最终投稿，图表都应清晰、整洁、专业。",
        "即使是内部草稿，也应让读者不用猜就能看懂：画了什么、比较了什么、支持什么结论。",
        [
          "任何阶段，坐标轴都应有清楚的",
          { text: "标签", strong: true },
          "，需要时也要有",
          { text: "单位", strong: true },
          "；图例或直接标注应解释分组、颜色、符号和缩写。"
        ]
      ]
    },
    {
      title: "发表与投稿标准",
      bullets: [
        [
          "避免不必要的边框、粗重网格线、装饰效果和难以区分的颜色。",
          { text: "Less is more.", strong: true }
        ],
        "整张图使用 Arial（或 Helvetica），包括标签、图例、注释和 panel 字母。",
        "在最终印刷尺寸下，大多数文字应为 4-10 pt。",
        "所有 panel 应保持字体大小、线宽、点大小、配色、panel 标注和化学结构风格一致。",
        "图注应说明展示内容、样本量和统计方法；需要时，也请给出精确 p 值。"
      ]
    },
    {
      title: "图表组装",
      bullets: [
        "使用支持矢量编辑的工具，例如 Adobe Illustrator、Inkscape 或 PowerPoint。",
        "除非期刊有特殊要求，尽量保存为 SVG 等矢量格式。",
        "如果矢量文件过大或不实用（如大型 UMAP 图），可导出 PNG 或 JPEG，分辨率不少于 600 DPI。",
        "组装多 panel 图时，按最终论文图或海报尺寸导出，避免后续反复缩放。",
        "如果 panel 分别生成，请保持坐标轴大小、标签位置、字体和线宽一致。"
      ]
    },
    {
      title: "化学结构",
      bullets: [
        "化学结构通常用 ChemDraw 绘制，采用 Nature 或 ACS 风格。",
        "macOS 上建议从 ChemDraw 导出 SVG。Windows 上复制粘贴到 PowerPoint 通常也能保留矢量质量。"
      ]
    },
    {
      title: "绘图与可重复性",
      bullets: [
        "尽量用 Python 或 R 程序化生成定量图（我个人更偏好 Python）。这样在数据更新、重新运行分析或修改论文时，图表都更容易复现。避免手动在 Excel 或 Prism 中作图。",
        "绘图代码、处理后的数据和导出的图表文件应存放在一起。",
        [
          "数据可视化入门可参考：",
          {
            label: "From Data to Viz",
            href: "https://www.data-to-viz.com/"
          },
          "。"
        ]
      ]
    }
  ],
  resources: [
    {
      id: "resource-figure-template",
      title: "科研绘图模板",
      href: "/resources/figures_template.pptx",
      actionLabel: "下载 PowerPoint 模板",
      bullets: [
        "可用这个模板作为制作整洁、风格统一的论文图表和演示图表的起点。"
      ]
    }
  ]
};

const documentationCodeSectionZh: GuideSection = {
  id: "documentation-data-code",
  title: "文档与代码",
  deck:
    "未来的自己、组内同事、合作者和审稿人，都应该能理解我们做了什么、为什么这样做。",
  blocks: [
    {
      title: "工作记录",
      bullets: [
        "每个人都应为实验和分析保留科研记录，可以是电子记录，也可以是手写实验记录本；记录要足够详细，方便之后理解和回顾。",
        "记录重要选择背后的原因，不只记录做了什么。",
        "文件、幻灯片、草稿和结果文件夹请使用清楚的日期和名称。"
      ]
    },
    {
      title: "代码与可重复工作流",
      bullets: [
        "代码项目尽量使用版本控制。",
        "整理脚本和 notebook，让主要分析路径不依赖记忆也能看懂。",
        "写 README，说明文件夹结构、主要脚本、输入输出和运行顺序。",
        "记录软件环境、包版本、操作系统或服务器，以及重跑所需的外部工具。",
        "公开代码前，请仔细检查是否包含私人数据、账号凭据、未发表的合作者材料或许可问题。"
      ]
    }
  ]
};

const llmsSectionZh: GuideSection = {
  id: "llms",
  title: "大语言模型（LLMs）",
  deck: "LLM 是有用的科研工具，我们可以积极使用，也要认真验证。",
  paragraphs: [
    "LLM 和 AI 助手可以帮助编程、文档、文献初筛、提纲、编辑、头脑风暴、分析规划和报告准备。它们最有价值的时候，是让我们更快、更清楚、更谨慎，而不是替代理解。"
  ],
  blocks: [
    {
      title: "责任与验证",
      bullets: [
        [
          {
            text: "你有责任理解自己提交的每一行代码，也要对每一项分析和结论负责。不要在没有理解和验证的情况下接受 LLM 输出；请用测试、检查、来源核对和代码审查来确认。",
            strong: true
          }
        ],
        "LLM 通常更擅长常见编程和写作任务。面对专业预测、未发表事实或高度领域化的科学判断时，它们可能不可靠。",
        "不要把科学判断或创新性外包给工具。让工具帮助执行和澄清思路，同时继续发展自己的判断力。"
      ]
    },
    {
      title: "上下文与隐私",
      bullets: [
        "好的结果需要好的上下文：提供相关代码、预期输入输出和清楚的任务说明。",
        "未经适当批准，不要将敏感数据、私人论文稿件、保密代码、未发表的合作者信息、账号凭据或专有材料粘贴到云端工具中。"
      ]
    }
  ]
};

const reviewingManuscriptsSectionZh: GuideSection = {
  id: "reviewing-manuscripts",
  title: "审阅论文",
  bullets: [
    [
      "保持",
      { text: "善意", strong: true },
      "。写审稿意见时，请记得对面是真实的人，也在认真对待自己的工作。"
    ],
    [
      "可以的话，先指出主要",
      { text: "优点", strong: true },
      "。这能帮助作者和编辑理解哪些内容值得保留。"
    ],
    [
      "区分",
      { text: "技术正确性", strong: true },
      "和",
      { text: "新颖性或重要性", strong: true },
      "。正确的论文可能影响有限；有潜力的论文也可能需要更强证据。"
    ],
    "当结论被夸大时，请指出具体结论，并说明数据支持什么、不支持什么。",
    [
      "对于每个主要问题，尽量",
      { text: "提出解决方案", strong: true },
      "，即使方案并不完美。这比只说哪里不对更有帮助。"
    ]
  ]
};

const readingListSectionZh: GuideSection = {
  id: "reading-list-key-papers",
  title: "阅读清单与关键论文",
  paragraphs: [
    "这些是组内成员应逐步熟悉的关键论文和工具。目标不是记住所有细节，而是理解每篇论文贡献了什么、每个工具适合做什么，以及它们如何连接到我们的工作。"
  ],
  blocks: [
    {
      title: "关键研究论文和工具论文",
      body: "这些研究论文和工具论文定义了实验室常用的重要概念、工作流和资源。",
      bullets: [
        [
          { text: "关键研究论文：", strong: true },
          " ",
          { label: "Bile acid paper", href: "https://www.cell.com/cell/fulltext/S0092-8674(24)00185-5" },
          "  |  ",
          { label: "N-acyl lipid paper", href: "https://www.cell.com/cell/fulltext/S0092-8674(25)00565-3" },
          "  |  ",
          { label: "Reverse metabolomics", href: "https://www.nature.com/articles/s41586-023-06906-8" },
          "  |  ",
          { label: "LLM-assisted metabolite discovery", href: "https://www.nature.com/articles/s41586-025-09969-x" }
        ],
        [
          { text: "工具论文：", strong: true },
          " ",
          { label: "MZmine", href: "https://www.nature.com/articles/s41587-023-01690-2" },
          "  |  ",
          { label: "USI", href: "https://www.biorxiv.org/content/10.1101/2020.05.09.086066v2" },
          "  |  ",
          { label: "FBMN", href: "https://www.nature.com/articles/s41592-020-0933-6" },
          "  |  ",
          { label: "ReDU", href: "https://www.nature.com/articles/s41592-020-0916-7" },
          "  |  ",
          { label: "Pan-ReDU", href: "https://www.nature.com/articles/s41467-025-60067-y" },
          "  |  ",
          { label: "MassQL", href: "https://www.nature.com/articles/s41592-025-02660-z" },
          "  |  ",
          { label: "MASST", href: "https://www.nature.com/articles/s41587-019-0375-9" },
          "  |  ",
          { label: "microbeMASST", href: "https://www.nature.com/articles/s41564-023-01575-9" },
          "  |  ",
          { label: "StructureMASST", href: "https://www.nature.com/articles/s41587-026-03082-8" }
        ]
      ]
    },
    {
      title: "常用工具链接",
      body:
        "请逐步熟悉这些资源的用途，以及什么时候适合从这里开始。",
      bullets: [
        [
          { label: "GNPS library", href: "https://external.gnps2.org/gnpslibrary" },
          "  |  ",
          { label: "Pan-ReDU", href: "https://redu.gnps2.org/" },
          "  |  ",
          { label: "USI resolver", href: "https://metabolomics-usi.gnps2.org/" },
          "  |  ",
          { label: "Fast MASST", href: "https://fasst.gnps2.org/fastsearch/" },
          "  |  ",
          { label: "microbeMASST", href: "https://masst.gnps2.org/microbemasst/" },
          "  |  ",
          { label: "microbiomeMASST", href: "https://masst.gnps2.org/microbiomemasst/" },
          "  |  ",
          { label: "plantMASST", href: "https://masst.gnps2.org/plantmasst/" },
          "  |  ",
          { label: "StructureMASST", href: "https://structure-masst.gnps2.org/" },
          "  |  ",
          { label: "GNPS dashboard", href: "https://dashboard.gnps2.org/" }
        ]
      ]
    }
  ]
};

export const researchPracticeGuideContentZh: GuideContent = {
  eyebrow: "实验室指南",
  title: "科研实践",
  description:
    "关于数据管理、论文写作、科研绘图、文档与代码、LLM 使用、论文审阅和共享科研资源的实践规范。",
  tocTitle: "科研实践目录",
  htmlLang: "zh-CN",
  alternateHref: "/guide/research-practice",
  alternateLabel: "English",
  sections: [
    translationNoticeSectionZh,
    acknowledgmentSectionZh,
    researchPracticeOverviewSectionZh,
    dataSectionZh,
    manuscriptsSectionZh,
    figuresSectionZh,
    documentationCodeSectionZh,
    llmsSectionZh,
    reviewingManuscriptsSectionZh,
    readingListSectionZh
  ]
};
