import { piProfile } from "./profile";
import type { ContactInfo } from "./types";

export const contactInfo: ContactInfo = {
  institution: "Department of Environmental Science & Engineering, Fudan University",
  address: "Shanghai, China",
  email: piProfile.email,
  joinText:
    `Please directly email me at ${piProfile.email} with a brief introduction, the opportunity you are interested in, and how your interests connect to our work. Use the email subject format "XingLab Application - [Opportunity] - [Your Name]"; for example, "XingLab Application - PhD student - Daxing Pai 派大星". Attach supporting files as needed; PDFs are preferred.`,
  applicationSections: [
    {
      title: "Postdoctoral Researchers",
      description:
        "In your email, please cover the points below and attach the relevant supporting files.",
      materials: [
        "Briefly describe your research interests, proposed postdoctoral direction, and future career development plan.",
        "Attach 2-3 reference letters.",
        "Attach your personal CV.",
        "Attach up to 3 representative papers or manuscripts, if available.",
        "(Optional) Attach any other materials you consider important."
      ]
    },
    {
      title: "Graduate Students",
      description:
        "Prospective master's and PhD students should follow the official Fudan University admissions process and are welcome to contact the lab in advance.",
      materials: [
        "In your email, briefly describe your current program, research interests, and why you are interested in our lab.",
        "Attach your personal CV.",
        "(Optional) Attach academic transcripts and English test scores, if available.",
        "(Optional) Attach representative materials such as papers, thesis work, posters, code repositories, or project reports, if available."
      ]
    },
    {
      title: "Undergraduate Students",
      description:
        "Undergraduate students interested in research training, thesis projects, or internships are welcome to contact the lab. We are especially interested in students who can make a sustained, continuous research commitment over multiple semesters.",
      materials: [
        "In your email, briefly describe your current year and major, research interests, expected availability, and whether you can participate continuously over the longer term.",
        "Attach your personal CV, if available.",
        "(Optional) Attach academic transcripts and English test scores, if available.",
        "(Optional) Attach representative materials such as posters, code repositories, course projects, or research reports, if available."
      ]
    },
    {
      title: "Research Assistants",
      description:
        "Research assistant applicants should send a concise email and attach supporting files as needed.",
      materials: [
        "In your email, briefly describe your background, relevant skills, research interests, expected start date and availability.",
        "Attach your personal CV.",
        "(Optional) Attach representative materials such as papers, thesis work, posters, code repositories, or project reports, if available."
      ]
    },
  ]
};

export const contactInfoZh: ContactInfo = {
  institution: "复旦大学环境科学与工程系",
  address: "中国上海",
  email: piProfile.email,
  joinText:
    `请直接发送邮件至 ${piProfile.email}，在邮件中简要介绍你自己、你感兴趣的机会，以及你的研究兴趣如何与实验室方向相关。邮件主题请使用格式 “XingLab Application - [Opportunity] - [Your Name]”；例如 “XingLab Application - PhD student - Daxing Pai 派大星”。如有相关支持材料，请作为附件发送；优先使用 PDF 格式。`,
  applicationSections: [
    {
      title: "博士后研究人员",
      description: "请在邮件中说明以下内容，并附上相关支持材料。",
      materials: [
        "简要说明你的研究兴趣、拟开展的博士后研究方向，以及未来职业发展计划。",
        "提供 2-3 封推荐信。",
        "附上个人简历。",
        "如有代表性论文或手稿，可附上最多 3 篇。",
        "（可选）附上你认为重要的其他材料。"
      ]
    },
    {
      title: "研究生",
      description:
        "有意申请硕士或博士项目的同学应遵循复旦大学官方招生流程，也欢迎提前联系实验室。",
      materials: [
        "在邮件中简要说明你目前的项目或学习阶段、研究兴趣，以及为什么对本实验室感兴趣。",
        "附上个人简历。",
        "（可选）如有成绩单和英语考试成绩，可一并附上。",
        "（可选）如有论文、毕业论文工作、海报、代码仓库或项目报告等代表性材料，可一并附上。"
      ]
    },
    {
      title: "本科生",
      description:
        "欢迎对科研训练、毕业论文项目或实习感兴趣的本科生联系实验室。我们尤其欢迎能够在多个学期持续、稳定参与科研的同学。",
      materials: [
        "在邮件中简要说明你的年级和专业、研究兴趣、预期可投入时间，以及是否能够较长期、连续参与。",
        "如有个人简历，请附上。",
        "（可选）如有成绩单和英语考试成绩，可一并附上。",
        "（可选）如有海报、代码仓库、课程项目或研究报告等代表性材料，可一并附上。"
      ]
    },
    {
      title: "科研助理",
      description: "科研助理申请者请发送简洁邮件，并根据需要附上支持材料。",
      materials: [
        "在邮件中简要说明你的背景、相关技能、研究兴趣、预计开始时间和可投入时间。",
        "附上个人简历。",
        "（可选）如有论文、毕业论文工作、海报、代码仓库或项目报告等代表性材料，可一并附上。"
      ]
    }
  ]
};
