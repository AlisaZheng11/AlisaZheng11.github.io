// ============================================================
//  EDIT THIS FILE to update your portfolio.
//  Every section on the page is generated from the data below.
// ============================================================
const CONTENT = {
  name: "Shuyin (Alisa) Zheng",
  tagline: "Data Scientist · ML Engineer · Analyst",
  intro:
    "MS in Data Science student at Columbia University. I build machine learning models, " +
    "data pipelines, and dashboards that turn messy data into decisions, from fine-tuning " +
    "speech models to detecting duplicates across millions of financial records.",
  links: {
    email: "sz3410@columbia.edu",
    linkedin: "https://www.linkedin.com/in/alisazheng",
    github: "https://github.com/AlisaZheng11",          // TODO: add your GitHub URL
    resume: "resume.pdf" // drop your resume PDF into this folder with this name
  },

  experience: [
    {
      role: "Data Analyst Intern",
      org: "State Street, Alpha Data Services",
      location: "Clifton, NJ",
      dates: "Jun 2026 – Aug 2026",
      points: [
        "Built a duplicate-security detection framework in dynamic SQL for security master data across client datasets of 3M+ securities.",
        "Parameterized the framework with a DECODE-based schema mapping, so a single-line change retargets it between environments with no query rewrites.",
        "Engineered configurable detection logic with identifier hierarchies, null handling, and conflict-resolution rules, validated across multiple client environments.",
        "Traced end-to-end pipelines across environments to reconcile discrepancies and identify root causes of inconsistent results."
      ],
      tags: ["SQL", "Data Quality", "Excel"]
    },
    {
      role: "Senior Financial Analyst",
      org: "Hongxin Wealth & Tax Planning Group",
      location: "Bellevue, WA",
      dates: "May 2023 – Apr 2025",
      points: [
        "Built Tableau dashboards for marketing KPIs; recommendations raised client retention by 30% and cut marketing spend by $27K a year.",
        "Developed Excel forecasting models for retirement and estate planning scenarios, supporting 300+ client plans.",
        "Engineered SQL pipelines unifying 3 internal data sources, saving 2 hours a week of manual preparation."
      ],
      tags: ["Tableau", "SQL", "Forecasting"]
    },
    {
      role: "Business Analyst Consultant",
      org: "Sunny Language Academy",
      location: "Seattle, WA",
      dates: "Aug 2022 – May 2023",
      points: [
        "Automated invoice creation in Excel, ensuring 100% on-time delivery for 60+ invoices.",
        "Led budget planning and revenue forecasting with PivotTables, cutting operating expenses by 15%."
      ],
      tags: ["Excel", "Forecasting"]
    }
  ],

  projects: [
    {
      title: "VibeCheck: Speech Emotion Recognition",
      dates: "Apr 2026",
      summary:
        "Fine-tuned Wav2Vec2 (95M parameters) on RAVDESS, reaching 81.7% accuracy and 80.9% macro F1, a 37-point F1 gain over a frozen baseline. Deployed as a live Streamlit app with mic recording and real-time inference.",
      highlights: ["81.7% accuracy", "+37 pt F1", "Live demo"],
      tags: ["PyTorch", "Hugging Face", "Streamlit"],
      links: { github: "", demo: "" } // TODO: paste your GitHub and Hugging Face Space URLs
    },
    {
      title: "Credit Risk Prediction",
      dates: "Nov 2025",
      summary:
        "End-to-end supervised learning pipeline on 48K rows × 122 features comparing decision trees, gradient boosting, and XGBoost, with a bias–variance study and feature-importance analysis.",
      highlights: ["48K × 122 data", "XGBoost", "Interpretability"],
      tags: ["scikit-learn", "XGBoost", "pandas"],
      links: { github: "" }
    }
  ],

  // TODO: replace this placeholder with your research experience.
  research: [
    {
      title: "Your research project title",
      lab: "Lab or advisor name, Columbia University",
      dates: "Semester Year – Present",
      summary:
        "One or two sentences on the question you studied, your method, and what you found.",
      outputs: ["Paper / poster / talk", "Code"],
      links: { paper: "", github: "" }
    }
  ],

  education: [
    {
      school: "Columbia University",
      degree: "MS in Data Science",
      dates: "Expected Dec 2026",
      detail: "Machine Learning, Algorithms, Statistics, Data Visualization, Generative AI"
    },
    {
      school: "University of Washington",
      degree: "B.A. in Information Systems & Finance",
      dates: "Jun 2022",
      detail: "Data Mining, Database Management, Linear Algebra, Data Visualization"
    }
  ],

  skills: {
    "Languages & Tools": ["Python", "SQL", "R", "Tableau", "Excel", "Git"],
    "Machine Learning": ["PyTorch", "Hugging Face", "scikit-learn", "XGBoost", "pandas"],
    "LLMs": ["Fine-tuning", "Constrained decoding", "Prompt engineering", "Few-shot learning"]
  }
};
