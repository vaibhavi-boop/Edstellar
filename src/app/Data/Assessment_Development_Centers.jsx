import {
  Clock3,
  Users,
  Image,
  CircleDollarSign,
  Globe,
  WalletCards,
  BadgeCheck,
  CircleDot,
  Building2,
  EyeOff,
  ChartColumnIncreasing,
  GitCompareArrows,
  ArrowLeftRight,
  UserRoundSearch,
  Rocket,
  TrendingUp,
} from "lucide-react";

/* Breadcrumb data */
export const BreadcrumbData = [
  {
    label: "Home",
    href: "https://www.edstellar.com/",
    title: "Click Here to View Home Page",
  },
  {
    label: "Talent Assessment",
    href: "https://www.edstellar.com/talent-assessment-services",
    title: "Click Here to View Talent Assessment", 
  },
  {
    label: "Assessment and Development Center Consulting",
  },
];

/* Breadcrumb data */
export const HeroSectionData = {
  heading: "<span class='text-[#c8e130]'>Digital Learning Ecosystem</span> Consulting",
  description:"Fragmented learning tools create fragmented learner experiences. Edstellar's digital learning ecosystem consulting helps enterprises design, integrate, and optimize a connected technology ecosystem by linking your LMS, LXP, content libraries, analytics, and performance support tools seamlessly. Our vendor-neutral approach ensures every platform decision serves your business goals, not vendor relationships.",
  features: [
    "Vendor-neutral advisory across 30+ learning platforms",
    "End-to-end ecosystem design from strategy through implementation and optimization",
    "Proven integration frameworks using xAPI, LTI, and SCORM standards",
  ],

  buttons: [
  {
    text: "Talk to an Assessment Center Consultant",
    href: "https://www.edstellar.com/",
    title: "Click Here to Talk to an Assessment Center Consultant",
  },
  {
    text: "",
    href: "",
    title: "",
  },
],

  image:"https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7481a209566c18083f23_Assessment%20and%20Development%20CenterConsulting%20(1).webp",
  imageAlt: "Assessment and Development Center Consulting",
  title: "Assessment and Development Center Consulting",
};

/* Paragraph Section Data */
export const ParagraphSectionData = {
  heading: "What Are Assessment and Development Centers?",
  highlightParagraph: "Assessment and development centers are structured, multi-method evaluation processes that use realistic job simulations, behavioral exercises, psychometric assessments, and trained assessor observation to objectively measure an individual's competencies, leadership potential, and readiness for current or future roles. An assessment center evaluates candidates against validated competency models through exercises mirroring real workplace challenges including in-basket tasks, group discussions, role-plays, fact-finding, case analyses, and presentations.",
  paragraph: "A development center uses the same methodology to generate developmental feedback, identify competency gaps, and produce individualized plans that accelerate leadership readiness. Together, they create a closed-loop system where evaluation informs development, and outcomes are validated through subsequent assessment. Refined over five decades of IO psychology research, this approach remains the gold standard, with a predictive validity of r = 0.51 outperforming interviews (r = 0.20), resume screening (r = 0.18), and reference checks (r = 0.26). Organizations turn to this methodology because it replaces subjective opinion with behavioral science.",
};

/* Verticle Icons Section */
export const VerticleIconSectionData = {
  heading: "Why Organizations Make the Wrong Talent Bets",
  description: "Most enterprises invest heavily in leadership pipelines yet continue to make talent decisions based on gut instinct, past performance in unrelated roles, and subjective manager opinions. Without structured assessment center methodology, organizations promote high performers into roles where they underperform, overlook hidden high-potential talent, and build leadership benches that lack the capabilities required for future business challenges. A qualified assessment center consulting company can diagnose and eliminate these costly patterns.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc77dd6ca961a76364c909_Why%20Organizations%20Make%20the%20Wrong%20Talent%20Bets%20(1).webp",
  items: [
    {
      icon: <CircleDot size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Gut-Feel Promotion Decisions",
      description:
        "Promotion decisions are made based on tenure, personal relationships, or performance in the current role rather than objective evaluation of readiness for the next role. The result is a leadership pipeline filled with technically skilled individuals who lack the strategic thinking, people leadership, and change management capabilities the organization needs.",
      stat:
        "60% of new managers fail within the first 24 months of promotion",
    },

    {
      icon: <EyeOff size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Hidden High-Potential Talent Goes Unrecognized",
      description: "Without structured high-potential identification processes, organizations default to visibility bias. Employees who are vocal, politically savvy, or based at headquarters get recognized, while equally capable but less visible talent in regional offices, operational roles, or underrepresented groups gets overlooked.",
      stat: "Only 1 in 7 high-potential employees is correctly identified without structured assessment",
    },

    {
      icon: <ChartColumnIncreasing size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "No Objective Baseline for Development Investment",
      description: "Organizations spend millions on leadership development programs without first assessing where each leader actually stands. Development becomes a one-size-fits-all curriculum rather than a targeted intervention addressing each individual's specific competency gaps and growth opportunities.",
      stat: "Companies waste an estimated 40% of leadership development spend on misaligned programs",
    },

    {
      icon: <GitCompareArrows size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Succession Plans Built on Assumptions, Not Evidence",
      description: "Succession plans list names without validated readiness data. When a critical role opens unexpectedly, the organization discovers that its 'ready now' successors lack the competencies the role demands, forcing expensive external hires that carry their own integration risks.",
      stat: "65% of companies report their succession plans are ineffective",
    },

    {
      icon: <ArrowLeftRight size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Inconsistent Assessment Standards Across Business Units",
      description:
        "Different hiring managers, different business units, and different geographies apply different standards when evaluating talent. Without a common competency framework and standardized assessment methodology, the same candidate could be rated 'outstanding' in one division and 'developing' in another.",
      stat:
        "Organizations without standardized assessment see 3x more inconsistency in talent ratings",
    },

    {
      icon: <UserRoundSearch size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Bias Undermines Diversity in Leadership Pipelines",
      description: "Unstructured talent decisions amplify unconscious bias. Gender, ethnicity, communication style, and educational background disproportionately influence subjective evaluations. The result is leadership pipelines that fail to reflect the diversity of the talent pool and the markets the organization serves.",
      stat: "Structured assessments reduce adverse impact by up to 50% compared to unstructured methods",
    },

  ],

  cta: {
    heading: "Stop guessing who your next leaders are. Start assessing with science.",
    button: {
      text: "Talk to an Assessment Center Consultant",
      href: "#",
      title: "Click Here to Talk to an Assessment Center Consultant",
    },
  },
};

/* Stats Section data */
export const StatsData = [
  {
    value: "$10.7B",
    title: "Global talent assessment services market in 2026, growing at 9.4% CAGR",
  },
  {
    value: "0.51",
    title: "Predictive validity coefficient for assessment centers, the highest among multi-method evaluation approaches",
  },
  {
    value: "54%",
    title: "ROI achieved from objective assessment tools, the strongest return among all leadership development approaches",
  },
  {
    value: "78%",
    title: "of HR professionals report that structured assessments have improved the quality of their hires",
  },
];

/* Static card Section data */
export const StaticCardSectionData = {
  variant: "green",

  heading: "Design. Deploy. Develop. The Three Pillars of Assessment Excellence.",
  description: "Effective talent assessment is not a single event but an integrated system. Edstellar's assessment and development center consulting practice connects three pillars: rigorous design that ensures every exercise measures what matters, seamless deployment that delivers a world-class participant experience, and developmental integration that transforms assessment data into accelerated leadership growth.",
  items: [
    {
      icon: <Rocket size={18} />,
      title: "Design",
      description: "Build the assessment architecture from the ground up. We design competency frameworks mapped to role-specific success profiles, create behaviorally anchored simulation exercises, select and validate psychometric instruments, develop assessor rating guides, and engineer the scoring methodology that produces reliable, defensible talent data.",
    },
    {
      icon: <Rocket size={18} />,
      title: "Deploy",
      description: "Execute assessment and development centers with precision. We manage end-to-end logistics, deliver in-person, virtual, or hybrid assessment experiences, coordinate certified assessor panels, facilitate simulation exercises, and produce same-day participant feedback and organizational talent reports.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "Develop",
      description: "Connect assessment insights to development action. We translate competency scores into individualized development plans, design targeted learning interventions for identified gaps, integrate assessment data with succession planning, and build internal assessor capability so your organization sustains the practice independently.",
    },
  ],
};

/* Tabs Section data */
export const TabsSectionData = {
  heading: "Our Assessment and Development Center Consulting Services",
  showDescription: false,
  description:
    "From ecosystem strategy and architecture through platform selection, AI-powered experience design, analytics, content governance, and change management, Edstellar delivers end-to-end digital learning ecosystem consulting services that connect your technology investments to business outcomes.",
  tabs: [
    {
      id: 1,
      button: "Competency Framework and Assessment Design",
      number: "01",
      title: "Competency Framework and Assessment Design",
      description1:
        "Architect the competency models, behavioral indicators, simulation exercises, and scoring systems that form the foundation of every assessment and development center. Every framework is validated against role-specific success profiles and organizational strategy. This competency-based assessment consulting service is where every engagement begins.",
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7c657f588cc446de2e67_Competency%20Framework%20and%20Assessment%20Design.webp",

      points: [
      "Competency modeling",
      "Behavioral anchor design",
      "Exercise development",
      "Scoring methodology",
    ],
    },

   {
     id: 2,
     button: "Leadership Assessment Centers",
     number: "02",
     title: "Leadership Assessment Centers",
     description1:
     "Deploy structured, multi-method assessment centers that evaluate senior and emerging leaders against validated competency frameworks. Behavioral simulations, psychometric instruments, and expert assessor panels produce objective readiness data for hiring, promotion, and succession decisions.",
     image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7c34402fa9501761bddd_Leadership%20Assessment%20Centers.webp",

     points: [
     "Multi-exercise simulation design",
     "Assessor panel coordination",
     "Competency-based scoring",
     "Leadership readiness reports",
   ], 
  },

 {
  id: 3,
  button: "High-Potential Identification Centers",
  number: "03",
  title: "High-Potential Identification Centers",
  description1:
    "Design and execute assessment programs that objectively identify high-potential talent across your organization. Move beyond manager nominations and performance ratings to a structured, bias-reduced process that evaluates learning agility, cognitive capacity, leadership motivation, and adaptability.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7b71e837c6f80cac5d61_High-Potential%20Identification%20Centers%20(1).webp",

  points: [
    "HiPo assessment criteria design",
    "Nine-box talent mapping",
    "Bench-strength analysis",
    "Potential vs. performance calibration",
    ],
   },

   {
  id: 4,
  button: "Development Centers",
  number: "04",
  title: "Development Centers",
  description1:
    "Shift the lens from selection to growth. Our development center consulting services use the same simulation-based methodology as assessment centers but focus on generating rich developmental feedback, identifying competency gaps, and producing actionable individualized development plans that accelerate leadership readiness.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7aa3720a714b39ef693d_Development%20Centers%20(1).webp",

  points: [
    "Developmental feedback design",
    "IDP creation",
    "Coaching integration",
    "Growth trajectory mapping",
    ],
   },

   {
  id: 5,
  button: "Virtual and Hybrid Assessment Centers",
  number: "05",
  title: "Virtual and Hybrid Assessment Centers",
  description1:
    "Design and deploy technology-enabled assessment centers that deliver the rigor of in-person evaluation through digital platforms. Virtual simulations, remote assessor observation, digital in-basket exercises, and video-based role-plays enable assessment at scale without geographic constraints.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7a35c57fd829671c955c_black-man-laptop-and-video-call-consulting%20(1).webp",

  points: [
    "Digital platform design",
    "Remote simulation delivery",
    "Virtual assessor protocols",
    "Hybrid experience architecture",
    ],
   },

   {
  id: 6,
  button: "Assessor Training and Capability Transfer",
  number: "06",
  title: "Assessor Training and Capability Transfer",
  description1:
    "Build your organization's internal assessment center capability. We train and certify your HR professionals, business leaders, and talent management teams as qualified assessors who can independently design, deploy, and evaluate assessment and development centers.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc79a694722b8bbe69a079_Assessor%20Training%20and%20Capability%20Transfer.webp",

  points: [
    "Assessor certification programs",
    "Behavioral observation training",
    "Scoring calibration workshops",
    "Internal AC sustainability",
    ],
   },
  ],
};

/* Assessment Section data */
export const AssessmentSectionData = [
  {
    image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7ccebd524ce2c31300d7_Competency%20Framework%20and%20Assessment%20Design.webp",
    title: "Competency Framework and Assessment Design",
    description: "Every effective assessment center begins with a rigorous competency framework that defines what good looks like for each target role. Without a validated framework, exercises measure the wrong things, assessors rate against personal preferences rather than organizational standards, and talent decisions lack the defensibility that hiring and promotion processes demand. Edstellar's competency framework and assessment design services build the entire assessment architecture, from role analysis through exercise engineering, ensuring every element of your assessment center measures the capabilities that actually predict on-the-job success.",
    cards: [
      {
        icon: "UserRound",
        title: "Role-Specific Success Profile Development",
        description: "We conduct structured job analyses and stakeholder interviews to identify the 6 to 10 competencies that differentiate high performance in each target role, defined with behavioral indicators at multiple proficiency levels.",
      },
      {
        icon: "LayoutGrid",
        title: "Competency-Exercise Mapping Matrix",
        description:
          "Each exercise is mapped to specific competencies ensuring every competency is observed in at least two different exercises, maximizing measurement reliability across in-basket, group discussion, role-play, and case study formats.",
      },
      {
        icon: "ChartColumn",
        title: "Behavioral Anchored Rating Scales (BARS)",
        description: "We engineer the scoring system that converts assessor observations into reliable, defensible talent data, including BARS, competency rubrics, inter-rater reliability protocols, and decision rules.",
      },
    ],
  },

  {
  image:
    "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7d09f6115feac80f59f1_Leadership%20Assessment%20Centers.webp",

  title: "Leadership Assessment Centers",

  description:
    "Selecting the right leaders is the highest-stakes talent decision any organization makes. A wrong leadership appointment costs 6 to 15 times the leader's annual salary. Yet most organizations still make leadership decisions based on interviews, resumes, and subjective opinions that carry a predictive validity of just 0.20. Edstellar's leadership assessment center consulting deploys structured, multi-method evaluation programs that assess senior and emerging leaders against validated competency frameworks, producing objective readiness data that dramatically improves the quality of hiring, promotion, and succession decisions.",

  cards: [
    {
      icon: "TrendingUp",
      title: "C-Suite and Board-Level Assessment Design",
      description:
        "Full-day, high-fidelity assessment programs for senior leadership roles, including strategic planning exercises, board presentations, direct report coaching conversations, and crisis management role-plays.",
    },
    {
      icon: "ShieldCheck",
      title: "Multi-Assessor Panel Coordination",
      description:
        "Expert assessor panels combining Edstellar organizational psychologists with calibrated business leaders, ensuring multiple perspectives and inter-rater reliability across all competency dimensions.",
    },
    {
      icon: "Users",
      title: "Assessment-to-Succession Integration",
      description:
        "Individual assessment reports provide validated readiness ratings that feed directly into succession planning, including gap analysis, onboarding acceleration recommendations, and organizational talent heat maps.",
    },
  ],
},

  {
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7d425968ee0aaef82ce0_high-potential.webp",
  title: "High-Potential Identification Centers",
  description:
    "Every organization has talent that outperforms expectations, but performance alone does not predict potential. Research consistently shows that only 1 in 7 high performers is also a high-potential leader. Edstellar's high-potential identification consulting service designs and deploys structured assessment programs that objectively evaluate cognitive agility, leadership motivation, adaptability, and organizational awareness.",

  cards: [
    {
      icon: "BarChart3",
      title: "Learning Agility Assessment",
      description:
        "Evaluating the ability to process complex, ambiguous information and learn rapidly through cognitive ability testing, learning agility exercises, and structured behavioral interviews.",
    },
    {
      icon: "Users",
      title: "Nine-Box Talent Mapping",
      description:
        "Integrating assessment center data with performance data to produce calibrated nine-box talent maps, replacing subjective manager nominations with objective data-driven placement.",
    },
    {
      icon: "ChartColumn",
      title: "Differentiated Development Pathways",
      description:
        "Designing stretch assignments, executive coaching, cross-functional rotations, and accelerated learning programs mapped to each high-potential's unique competency profile and growth trajectory.",
    },
  ],
},

  {
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7d6f365ba01e6a8d0ecf_Development.webp",
  title: "Development Centers",
  description:
    "Assessment centers tell you where talent stands. Development centers tell talent where to grow. Edstellar's development center consulting firm designs programs where every exercise, every observation, and every data point serves the participant's development rather than organizational selection, creating a psychologically safe environment that encourages risk-taking, self-reflection, and genuine behavioral experimentation.",

  cards: [
    {
      icon: "Monitor",
      title: "Developmental Simulation Design",
      description:
        "Exercises specifically calibrated for developmental impact rather than evaluative precision, structured to surface learning moments and challenge habitual leadership behaviors.",
    },
    {
      icon: "Video",
      title: "Individualized Development Plan (IDP) Creation",
      description:
        "Every participant receives a comprehensive IDP identifying 2 to 3 priority competency gaps with observable behavioral change targets, targeted development activities, and accountability mechanisms.",
    },
    {
      icon: "Globe",
      title: "Coaching Integration and Follow-Through",
      description:
        "Designing the handoff process between assessment data and executive coaching, training coaches to leverage behavioral observation data, and structuring follow-through cadences for sustained behavioral change.",
    },
  ],
},

  {
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7d99b85b75eadb9bef4d_Virtual%20and%20Hybrid%20Assessment%20Centers.webp",
  title: "Virtual and Hybrid Assessment Centers",
  description:
    "The shift to distributed workforces has permanently changed how organizations assess talent. Virtual assessment centers are no longer a pandemic workaround but a strategic capability that enables organizations to evaluate talent across geographies, reduce assessment logistics costs by up to 60%, and deliver candidate experiences that consistently earn satisfaction ratings above 85%. Edstellar's virtual assessment center consulting practice designs digital-first assessment experiences that preserve the behavioral richness and predictive validity of in-person assessment while unlocking the scalability, speed, and accessibility of technology-enabled delivery.",

  cards: [
    {
      icon: "GraduationCap",
      title: "Video-Based Role-Play Exercise Design",
      description:
        "Virtual simulation exercises specifically engineered for the virtual environment, accounting for differences in non-verbal communication, group dynamics, and technology interaction.",
    },
    {
      icon: "Target",
      title: "Virtual Group Discussion Facilitation",
      description:
        "Digital in-basket exercises, timed case analyses, and virtual group discussions with real-time assessor observation through split-screen observation techniques.",
    },
    {
      icon: "TrendingUp",
      title: "Hybrid Assessment Architecture",
      description:
        "Combining the depth of in-person simulation with the reach of virtual assessment, where executive-level exercises are delivered face-to-face and broader pipeline assessments are delivered virtually.",
    },
  ],
},

  {
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7dd745a5c9afa8d687eb_Assessor%20Training%20and%20Capability%20Transfer.webp",
  title: "Assessor Training and Capability Transfer",
  description:
    "The quality of an assessment center is only as good as the quality of its assessors. Research consistently shows that assessor training is the single most significant factor influencing assessment center validity, with well-trained assessors producing inter-rater reliability coefficients above 0.85 compared to untrained observers who rarely exceed 0.50. Edstellar's assessor training and capability transfer service builds your organization's internal capacity to design, deploy, and evaluate assessment and development centers independently, so the practice becomes a sustainable organizational capability rather than a perpetual consulting engagement.",

  cards: [
    {
      icon: "Users",
      title: "ORCE Behavioral Observation Methodology",
      description:
        "Training in the Observe, Record, Classify, Evaluate model, practicing recording behavioral evidence in real-time and calibrating ratings against master-scored exercises.",
    },
    {
      icon: "ChartColumn",
      title: "Inter-Rater Reliability Calibration",
      description:
        "Comprehensive certification programs including supervised practice assessments, bias awareness and mitigation training, consensus discussion facilitation, and calibration exercises until reliability meets thresholds.",
    },
    {
      icon: "ShieldCheck",
      title: "Annual Recertification and Quality Audit",
      description:
        "Establishing annual recertification protocols, calibration exercise libraries, quality audit frameworks, and assessor performance feedback systems that maintain assessment integrity over time.",
    },
  ],
},
];

/* Timeline Section data */
export const TimelineSectionData = {
  heading: "Our Approach to Assessment and Development Center Consulting",
  description:"Edstellar follows a proven five-phase methodology that takes organizations from ad hoc talent evaluation to a structured, validated assessment and development center capability. Each phase builds on the previous one, delivering measurable value at every stage while creating the infrastructure for sustained assessment excellence.",
  timeline: [
    {
      number: "01",
      title: "Discover",
      description:
        "We audit your current talent assessment practices, map the critical roles that require structured assessment, interview key stakeholders to understand decision-making needs, and benchmark your assessment maturity against industry best practices.",
      duration: "2-3 Weeks",
      type: "Stakeholder interviews + role analysis + audit",
      tags: [
        "Current-state talent assessment maturity audit",
        "Critical role identification and prioritization",
        "Stakeholder needs analysis",
        "Existing competency framework review",
        "Assessment center readiness assessment",
      ],
    },

    {
      number: "02",
      title: "Design",
      description: "We design the competency frameworks, simulation exercises, psychometric instrument suite, scoring methodology, and assessor guides that form the architecture of your assessment and development centers.",
      duration: "4-6 Weeks",
      type: "Competency workshops + exercise development",
      tags: [
        "Competency framework development",
        "Simulation exercise design",
        "Psychometric instrument selection",
        "Assessor rating guides development",
        "Pilot program design and scheduling",
      ],
    },

    {
      number: "03",
      title: "Pilot",
      description: "We run a live pilot assessment center with a cohort of participants, calibrate assessor ratings, validate exercise measurement properties, refine scoring systems based on real data, and optimize the participant experience.",
      duration: "3-4 Weeks",
      type: "Live pilot AC + calibration + refinement",
      tags: [
        "Pilot AC execution with live participants",
        "Assessor calibration and reliability analysis",
        "Exercise measurement validation",
        "Participant experience optimization",
        "Scoring system refinement",
      ],
    },

    {
      number: "04",
      title: "Diploy",
      description: "We deploy assessment and development centers at scale across the organization, managing logistics, coordinating assessor panels, facilitating exercises, producing individual and organizational reports, and integrating assessment data with succession and development systems.",
      duration: "4-8 Weeks",
      type: "Full-scale assessment center rollout",
      tags: [
        "Full-scale rollout across target populations",
        "Individual assessment reports and debriefs",
        "Organizational talent mapping",
        "Assessor panel coordination",
        "HRIS and succession system integration",
      ],
    },

    {
      number: "05",
      title: "Sustain",
      description: "We transfer assessment center capability to your internal team, establish ongoing quality assurance protocols, train and certify internal assessors, and provide advisory support to ensure the program delivers value year after year.",
      duration: "Ongoing",
      type: "Capability transfer + quality assurance",
      tags: [
        "Internal assessor training and certification",
        "AC administration playbook handoff",
        "Annual exercise refresh and framework review",
        "Assessor recalibration and quality audit",
        "Ongoing advisory and continuous improvement",
      ],
    },
  ],
};

/* Tabs Section data Sub */
export const TabsSectionDataSub = {
  heading: "What You'll Walk Away With",
  showDescription: true,
  description: "Each engagement delivers tangible, reusable assets that your organization owns and operates independently. These are the concrete deliverables your talent team retains and uses to make better talent decisions every day.",  tabs: [
    {
      id: 1,
      button: "Competency Framework",
      number: "01",
      title: "Competency Framework & Success Profiles",
      description1: "A validated competency framework for each target role, including competency definitions, behavioral indicators at multiple proficiency levels, assessment criteria, and the competency-exercise mapping matrix. These become the foundation for all future assessment, development, and succession decisions.",
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7e99541e9e63ca0ce9ba_Competency%20Framework%20-%20Success%20Profiles.webp",
      points: [
      "Role-specific competency definitions with behavioral indicators",
      "Multi-level proficiency scales for each competency",
      "Competency-exercise mapping matrix",
      "Success profile documentation per target role",
    ],
    },

   {
     id: 2,
     button: "Simulation Exercise Library",
     number: "02",
     title: "Simulation Exercise Library",
     description1: "A complete library of custom-designed simulation exercises, including in-basket tasks, group discussions, role-plays, case studies, fact-finding exercises, and presentations. Each exercise includes facilitator guides, participant materials, assessor observation forms, and scoring rubrics.",
     image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7ec77ee6e7debc0125e2_Simulation%20Exercise%20Library.webp",

     points: [
     "Custom simulation exercises mapped to competencies",
     "Facilitator guides and participant materials",
     "Assessor observation forms and scoring rubrics",
   ], 
  },

 {
  id: 3,
  button: "Assessor Guides & Scoring",
  number: "03",
  title: "Assessor Guides & Scoring System",
  description1: "Comprehensive assessor documentation including behavioral anchored rating scales, competency scoring rubrics, observation recording templates, consensus discussion protocols, and data integration algorithms. Everything assessors need to produce reliable, defensible ratings.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7f002bc92f81f0b85816_Assessor%20Guides%20-%20Scoring%20System.webp",

  points: [
    "Behavioral anchored rating scales (BARS)",
    "Consensus discussion protocols",
    "Data integration and scoring algorithms",
    ],
   },

   {
  id: 4,
  button: "Assessment Reports",
  number: "04",
  title: "Individual Assessment Reports",
  description1: "Detailed participant reports covering competency scores, behavioral evidence summaries, strengths and development areas, readiness ratings, and individualized development recommendations. Reports are designed for three audiences: the participant, the hiring manager, and the organization.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7f3f846c883359d24713_Individual%20Assessment%20Reports.webp",

  points: [
    "Competency radar chart and development priority matrix",
    "Behavioral evidence summaries per competency",
    "Readiness ratings and gap analysis",
    "Individualized development recommendations",
    ],
   },

   {
  id: 5,
  button: "Organizational Talent Maps",
  number: "05",
  title: "Organizational Talent Maps",
  description1: "Aggregated assessment data visualized as organizational talent maps, including nine-box performance-potential grids, bench-strength analysis by role and level, succession readiness heat maps, and development investment priority matrices.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7f7e6b419c04337164e2_Organizational%20Talent%20Maps.webp",

  points: [
    "Nine-box performance-potential grids",
    "Bench-strength analysis by role and level",
    "Development investment priority matrices",
    ],
   },

   {
  id: 6,
  button: "Assessor Certification",
  number: "06",
  title: "Assessor Certification & Playbooks",
  description1: "Complete assessor training materials, certification protocols, calibration exercise libraries, and assessment center administration playbooks. These assets enable your internal team to design, deploy, and evaluate assessment centers independently after Edstellar's engagement.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7e572dbb7dd2c8f9f5a8_Assessor%20Certification%20%26%20Playbooks%20(1).webp",

  points: [
    "Assessor certification program materials",
    "Calibration exercise library",
    "AC administration playbooks",
    "Annual recertification protocols",
    ],
   },
  ],
};

/* Tabs with Stats Section data */

/* Verticle Line Section data */
export const VerticleLineSectionData = {
  title: "Why Choose Edstellar for Assessment and Development Center Consulting?",
  subtitle: "",
  description: "Most competitors deploy standardized exercises from generic libraries. Edstellar designs every element around your organization's specific roles, strategic context, and cultural values.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc7fd11c4c0943e1ed58b5_Why%20Choose%20Edstellar%20for%20Coaching%20Services%20Consulting.webp",
  features: [
    {
      title: "Integrated Assessment-to-Development Continuum",
      description: "Most assessment center providers stop at the report. Edstellar integrates assessment data with development planning, coaching design, and succession system integration, creating a closed-loop talent system where evaluation directly informs and accelerates leadership growth.",
      color: "bg-[#2d2f6b]",
    },
    {
      title: "Custom-Designed, Not Off-the-Shelf",
      description: "While competitors deploy standardized exercises from generic libraries, Edstellar designs every competency framework, simulation exercise, and scoring system around your organization's specific roles, strategic context, industry challenges, and cultural values.",
      color: "bg-[#c8e130]",
    },
    {
      title: "Bias-Mitigated Assessment Design",
      description: "Fairness is engineered into every element of our assessment centers. Adverse impact analysis, cultural fairness validation, multiple assessor perspectives, structured behavioral anchors, and bias awareness training ensure assessment centers expand rather than narrow the diversity of your leadership pipeline.",
      color: "bg-[#2d2f6b]",
    },
    {
      title: "Virtual-First Architecture with Global Reach",
      description: "Our virtual and hybrid assessment center designs deliver the behavioral richness of in-person evaluation through digital platforms, enabling you to assess talent across geographies, reduce logistics costs by up to 60%, and maintain quality regardless of participant location.",
      color: "bg-[#c8e130]",
    },
    {
      title: "Science-Backed Methodology with Proven Validity",
      description: "Every assessment center we design is grounded in 50+ years of industrial-organizational psychology research. Competency frameworks are validated, exercises are measurement-tested, scoring systems are reliability-calibrated, and validity evidence is documented.",
      color: "bg-[#2d2f6b]",
    },
  ],
};

/* Slides with Stats Section data */
export const SlidesStatsSectionData = {
  heading: "Assessment Center Consulting Success Stories",

  slides: [
    {
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc80697bc4589d2ecf4a7f_Why%20Choose%20Edstellar%20for%20Assessment%20and%20Development%20Center%20Consulting.webp",
      quote: "A multinational bank needed to identify succession-ready leaders for 45 critical senior leadership roles across 12 countries. Existing succession plans were based on manager nominations with no objective assessment data. Two recent C-suite appointments had failed within 18 months. Edstellar designed a leadership assessment center program across 8 locations (4 in-person, 4 virtual), evaluating 180 senior leaders using behavioral simulations.",
      company: "Global Financial Services Group",
      title: "Global Financial Services Group",

      stats: [
        {
          value: "38",
          suffix: "",
          title:
            "Succession-ready leaders identified (vs. 12 originally nominated)",
        },
        {
          value: "42",
          suffix: "%",
          title: "Reduction in external senior hiring",
        },
        {
          value: "3.2",
          suffix: "X",
          title: "Higher performance ratings for assessed successors",
        },
      ],
    },

    {
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc80ac535c3e8722f2ca39_Why%20Choose%20Edstellar%20for%20Assessment%20and%20Development%20Center%20Consulting.webp",
      quote: "A Fortune 500 manufacturing company needed to assess 250+ plant managers across 60 facilities for digital transformation readiness. Leadership decisions were decentralized with no common competency framework. Edstellar built a unified competency framework, designed a hybrid assessment-development center model, and trained 24 internal HR professionals as certified assessors.",
      company: "Global Manufacturing Corporation",
      title: "Global Manufacturing Corporation",

      stats: [
        {
          value: "60",
          suffix: "",
          title: "Facilities with common leadership standard",
        },
        {
          value: "0.87",
          suffix: "",
          title: "Inter-rater reliability by internal assessors",
        },
        {
          value: "40",
          suffix: "%",
          title: "Faster time-to-performance for promoted leaders",
        },
      ],
    },

    {
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc80e44698ed300313ee64_Why%20Choose%20Edstellar%20for%20Assessment%20and%20Development%20Center%20Consulting.webp",
      quote: "A Series D technology company scaling from 800 to 3,000 employees needed a leadership pipeline for 35 new director and VP roles within 24 months. Edstellar designed a high-potential identification center evaluating 120 senior individual contributors and managers, then built a development center program for the top 40 identified high-potentials.",
      company: "High-Growth Technology Company",
      title: "High-Growth Technology Company",

      stats: [
        {
          value: "22/35",
          suffix: "",
          title: "Target roles filled internally within 18 months",
        },
        {
          value: "$4.4",
          suffix: "M",
          title: "Saved in external recruitment fees",
        },
        {
          value: "2.8",
          suffix: "X",
          title: "Higher promotion rate for HiPo cohort",
        },
      ],
    },

  ],
};

/* Logos section data */
export const LogoSectionData = {
  heading: "Organizations That Trust Edstellar for Assessment and Development Centers",
  description: "Leading organizations across industries trust Edstellar for assessment and development center consulting. Our competency frameworks, behavioral simulations, and assessor training programs operate inside Fortune 500 enterprises, government agencies, and high-growth technology companies worldwide.",

  topRow: [
    { image: "/Images/StrategicWorkflow/Abb.webp", alt: "Abb", title: "Abb" },
    { image: "/Images/StrategicWorkflow/Aditya Birla Group.webp", alt: "Aditya Birla Group", title: "Aditya Birla Group" },
    { image: "/Images/StrategicWorkflow/Adobe.webp", alt: "Adobe", title: "Adobe" },
    { image: "/Images/StrategicWorkflow/Amazon.webp", alt: "Amazon", title: "Amazon" },
    { image: "/Images/StrategicWorkflow/AutoDesk.webp", alt: "AutoDesk", title: "AutoDesk" },
    { image: "/Images/StrategicWorkflow/Emerson.webp", alt: "Emerson", title: "Emerson" },
    { image: "/Images/StrategicWorkflow/godrej.webp", alt: "godrej", title: "godrej" },
    { image: "/Images/StrategicWorkflow/Intel.webp", alt: "Intel", title: "Intel" },
    { image: "/Images/StrategicWorkflow/Johnson&Johnson.webp", alt: "Johnson&Johnson", title: "Johnson&Johnson" },
    { image: "/Images/StrategicWorkflow/MediaTek.webp", alt: "MediaTek", title: "MediaTek" },
    { image: "/Images/StrategicWorkflow/Microsoft.webp", alt: "Microsoft", title: "Microsoft" },
    { image: "/Images/StrategicWorkflow/nrsc.webp", alt: "nrsc", title: "nrsc" },
    { image: "/Images/StrategicWorkflow/Sportskeeda.webp", alt: "Sportskeeda", title: "Sportskeeda" },
    { image: "/Images/StrategicWorkflow/Tata_Chemicals.webp", alt: "Tata_Chemicals", title: "Tata_Chemicals" },
    { image: "/Images/StrategicWorkflow/Total.webp", alt: "Total", title: "Total" },
    { image: "/Images/StrategicWorkflow/Visa.webp", alt: "Visa", title: "Visa" },
  ],

  bottomRow: [
    { image: "/Images/StrategicWorkflow/Visa.webp", alt: "Visa", title: "Visa" },
    { image: "/Images/StrategicWorkflow/Total.webp", alt: "Total", title: "Total" },
    { image: "/Images/StrategicWorkflow/Tata_Chemicals.webp", alt: "Tata_Chemicals", title: "Tata_Chemicals" },
    { image: "/Images/StrategicWorkflow/Sportskeeda.webp", alt: "Sportskeeda", title: "Sportskeeda" },
    { image: "/Images/StrategicWorkflow/nrsc.webp", alt: "nrsc", title: "nrsc" },
    { image: "/Images/StrategicWorkflow/Microsoft.webp", alt: "Microsoft", title: "Microsoft" },
    { image: "/Images/StrategicWorkflow/MediaTek.webp", alt: "MediaTek", title: "MediaTek" },
    { image: "/Images/StrategicWorkflow/Johnson&Johnson.webp", alt: "Johnson&Johnson", title: "Johnson&Johnson" },
    { image: "/Images/StrategicWorkflow/Intel.webp", alt: "Intel", title: "Intel" },
    { image: "/Images/StrategicWorkflow/godrej.webp", alt: "godrej", title: "godrej" },
    { image: "/Images/StrategicWorkflow/Emerson.webp", alt: "Emerson", title: "Emerson" },
    { image: "/Images/StrategicWorkflow/AutoDesk.webp", alt: "AutoDesk", title: "AutoDesk" },
    { image: "/Images/StrategicWorkflow/Amazon.webp", alt: "Amazon", title: "Amazon" },
    { image: "/Images/StrategicWorkflow/Adobe.webp", alt: "Adobe", title: "Adobe" },
    { image: "/Images/StrategicWorkflow/Aditya Birla Group.webp", alt: "Aditya Birla Group", title: "Aditya Birla Group" },
    { image: "/Images/StrategicWorkflow/Abb.webp", alt: "Abb", title: "Abb" },
  ],
};

/* Slides Section data */
export const SlidesSectionData = {
  heading: "The outcome,\nin our client's words",
  description: "Enterprise organizations trust Edstellar's strategic workforce planning consulting to close the gap between where their talent is today and where their business strategy demands it to be.",
  
  slides: [
    {
     quote: "Before Edstellar, our succession plans were essentially a list of names that senior leaders felt good about. The assessment center program gave us objective data for the first time. We discovered high-potential leaders we had completely overlooked and identified succession risks we didn't know we had. It fundamentally changed how we make talent decisions.",
     avatar: "/StrategicWorkspacePlanningAssets/Rohit Sharma.webp",
     name: "CHRO",
     company: "Multinational Financial Services Group",
    },

    {
     quote: "What sets Edstellar apart is the capability transfer. They didn't just run assessment centers for us and leave. They trained 24 of our HR professionals as certified assessors, handed us the exercise library and scoring systems, and our team independently ran the entire second-year program. That's the definition of sustainable consulting.",
     avatar: "/StrategicWorkspacePlanningAssets/Rohit Sharma.webp",
     name: "VP Talent Management",
     company: "Global Manufacturing Corporation",
    },

    {
     quote: "The development center program was a career-defining experience for our high-potential leaders. The behavioral feedback was so specific and actionable that every participant walked away with a clear development plan. Six months later, their managers were reporting observable behavior change. That's the impact of assessment done right.",
     avatar: "/StrategicWorkspacePlanningAssets/Rohit Sharma.webp",
     name: "Chief People Officer",
     company: "High-Growth Technology Company",
    },

    {
     quote: "We evaluated three global assessment center providers before choosing Edstellar. The difference was customization. The other firms offered standardized exercise libraries. Edstellar designed every exercise around our actual leadership challenges, our industry context, and the competencies that matter for our strategy. The result was assessment data our leaders actually trusted and acted on.",
     avatar: "/StrategicWorkspacePlanningAssets/Rohit Sharma.webp",
     name: "Global Head of Leadership Development",
     company: "Energy Corporation",
    },
  ],
};

/* CTA Section data */
export const CTASectionData = {
  heading: "Ready to Build an Assessment Center That Actually Predicts Leadership Success?",
  description: "Stop relying on gut instinct and subjective opinions for your most critical talent decisions. Partner with Edstellar's assessment center consulting team to design, deploy, and sustain competency-based assessment and development centers that deliver objective, defensible, and actionable talent intelligence.",
  button: {
    text: "Schedule Your Assessment Center Consultation",
    href: "https://www.edstellar.com/",
    title: "Click Here to Schedule Your Assessment Center Consultation",
  },

  secondaryButton: {
    text: "",
    link: "",
  },
};

/* FAQ's Section Data */
export const FAQSectionData = {
  heading: "Frequently Asked Questions About Assessment and Development Centers",
  description: "Everything you need to know about assessment and development center consulting with Edstellar",
  items: [
    {
      question: "What is the difference between an assessment center and a development center?",
      answer: 'An assessment center and a development center use the same core methodology, including behavioral simulation exercises, trained assessors, and competency-based observation, but they serve fundamentally different purposes. An assessment center is designed for organizational decision-making: it produces objective evaluation data that informs hiring, promotion, succession planning, and talent classification decisions. A development center, by contrast, is designed for individual growth: it uses simulation exercises to generate rich, behaviorally specific feedback that helps participants understand their strengths, identify competency gaps, and create actionable development plans. Many organizations use both: assessment centers for talent decisions and development centers for accelerating the growth of identified talent.',
    },
    {
      question: "How long does a typical assessment center take to design and deploy?",
      answer: "A standard assessment center for a single leadership level typically takes 10 to 14 weeks from kickoff to first deployment: 2 to 3 weeks for discovery and role analysis, 4 to 6 weeks for competency framework development and exercise design, 3 to 4 weeks for pilot testing and refinement, and 1 week for full deployment. Programs covering multiple leadership levels, geographies, or requiring virtual platform configuration may take 16 to 20 weeks. Once designed, each subsequent deployment cycle takes 4 to 6 weeks to execute.",
    },
    {
      question: "What types of exercises are used in an assessment center?",
      answer: "Assessment centers use multiple exercise types including: in-basket or inbox exercises (prioritizing requests under time pressure), leaderless group discussions (collaborative problem-solving with peers), one-on-one role-plays (coaching, negotiating, or influencing), fact-finding exercises (gathering information to diagnose a problem), case study analyses (analyzing data and presenting recommendations), and integrated simulations (navigating interconnected challenges over a half-day or full-day period). Each exercise is designed to elicit specific competencies, and the competency-exercise matrix ensures every target competency is observed in at least two different exercises.",
    },
    {
      question: "How do you ensure assessment centers are fair and free from bias?",
      answer: "Fairness is engineered into every element. At the design level, we conduct adverse impact analyses on all exercises and psychometric instruments. Competency frameworks are validated across diverse populations. At the delivery level, we use multiple assessors per participant (typically 2 to 3), employ behaviorally anchored rating scales that force assessors to cite specific observed behaviors, and conduct structured consensus discussions where ratings must be supported by behavioral evidence. Assessor training includes dedicated modules on unconscious bias awareness. Well-designed assessment centers show lower adverse impact than unstructured interviews and manager nominations.",
    },
    {
      question: "Can assessment centers be conducted virtually?",
      answer: "Yes. Modern virtual assessment centers deliver simulation exercises through video conferencing and digital collaboration platforms, including video-based role-plays, virtual group discussions, digital in-basket exercises, and online case analyses. Research shows that well-designed virtual assessment centers produce validity and reliability coefficients comparable to in-person delivery. Key advantages include the ability to assess talent across geographies without travel costs (up to 60% cost reduction), faster scheduling, and consistently high participant satisfaction ratings. The critical success factor is purposeful design for the virtual medium rather than simply replicating in-person exercises through video.",
    },
    {
      question: "How do assessment center results integrate with succession planning and development programs?",
      answer: "Assessment center data becomes the evidence base for multiple talent management processes. For succession planning, individual assessment reports provide validated readiness ratings that replace subjective opinions. Aggregated organizational talent maps reveal bench-strength gaps by role, level, function, and geography. Nine-box talent grids are populated with objective performance-potential data. For development, individual competency profiles drive personalized development plans, coaching focus areas, and stretch assignment recommendations. Assessment data can be integrated with HRIS and talent management platforms through standard data feeds.",
    },
  ],
};

/* Service Slides Section Data */
export const ServiceSlidesSectionData = {
  heading: "Explore Related Consulting Services",

  cards: [
    {
      icon: <WalletCards size={22} />,
      category: "Consulting",
      title: "Talent Assessment Services",
      description: "Our parent practice covering psychometric assessment, 360-degree feedback, and talent analytics beyond assessment centers.",
      link: "https://www.edstellar.com/talent-assessment-services",
      buttonText: "Explore Talent Assessment Services",
    },

    {
      icon: <Users size={22} />,
      category: "Consulting",
      title: "Succession Planning Consulting",
      description: "Integrate assessment center data directly into succession planning, building evidence-based leadership pipelines.",
      link: "https://www.edstellar.com/leadership-succession-planning-consulting",
      buttonText: "Explore Succession Planning",
    },

    {
      icon: <BadgeCheck size={22} />,
      category: "Consulting",
      title: "Leadership Development Consulting",
      description: "Convert assessment insights into targeted leadership development programs that accelerate the growth of identified talent.",
      link: "https://www.edstellar.com/leadership-excellence-programs",
      buttonText: "Explore Leadership Development",
    },

    {
      icon: <Building2 size={22} />,
      category: "Consulting",
      title: "Executive Coaching",
      description: "Connect assessment center feedback to one-on-one executive coaching engagements that drive sustained behavioral change.",
      link: "https://www.edstellar.com/excellence-programs",
      buttonText: "Explore Executive Coaching",
    },

    {
      icon: <Building2 size={22} />,
      category: "Consulting",
      title: "Competency Framework Consulting",
      description: "Build the competency architecture that underpins assessment centers, performance management, and career pathing.",
      link: "https://www.edstellar.com/skill-gap-competency-assessment",
      buttonText: "Explore Competency Frameworks",
    },
  ],
};