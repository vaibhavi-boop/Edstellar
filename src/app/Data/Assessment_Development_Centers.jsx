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
      title: "Architect and Design",
      description:
        "Create a target-state architecture blueprint with platform recommendations, integration design patterns, a governance framework, and a phased investment plan that balances quick wins with strategic transformation.",
      duration: "3-4 Weeks",
      type: "Blueprint",
      tags: [
        "Architecture blueprint",
        "Platform recommendations",
        "Governance framework",
      ],
    },

    {
      number: "03",
      title: "Build and Integrate",
      description:
        "Configure platforms, build live integrations using xAPI/LTI/SCORM standards, migrate content, deploy analytics dashboards, establish governance workflows, and produce comprehensive technical documentation.",
      duration: "6-8 Weeks",
      type: "Implementation",
      tags: [
        "Live integrations",
        "Content migration",
        "Analytics dashboards",
      ],
    },

    {
      number: "04",
      title: "Launch and Adopt",
      description:
        "Execute a structured rollout with administrator training, content creator enablement, manager briefings, learner communications, and quick-start guides that drive adoption from day one.",
      duration: "3-4 Weeks",
      type: "Change Management",
      tags: [
        "Admin training",
        "Manager briefings",
        "Quick-start guides",
      ],
    },

    {
      number: "05",
      title: "Optimize and Evolve",
      description:
        "Deliver monthly performance reports, quarterly business reviews, feedback analysis, maturity advancement recommendations, and annual roadmap refreshes that keep your ecosystem evolving with your business.",
      duration: "Ongoing",
      type: "Optimization",
      tags: [
        "Monthly reports",
        "Quarterly reviews",
        "Annual roadmap refresh",
      ],
    },
  ],
};

/* Verticle Line Section data */
export const VerticleLineSectionData = {
  title: "What Sets Edstellar Apart as Your Learning Ecosystem Consulting Partner",
  subtitle: "",
  description: "Edstellar combines deep ecosystem architecture expertise with practical implementation experience across 500+ enterprise engagements, delivering vendor-neutral solutions that connect technology investments to measurable business outcomes.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc85e3753ceec1595c5b3d_Why%20Choose%20Edstellar%20for%20Experiential%20Learning%20Design.webp",
  features: [
    {
      title: "Vendor-Neutral Advisory",
      description: "We evaluate 30+ learning platforms objectively, recommending solutions based solely on your requirements, integration needs, and strategic goals. No vendor partnerships influence our recommendations.",
      color: "bg-[#2d2f6b]",
    },
    {
      title: "Integration Architecture Expertise",
      description: "Our consultants bring deep expertise in xAPI, LTI, SCORM, REST APIs, and SSO, ensuring your platforms communicate seamlessly and data flows without friction across your entire ecosystem.",
      color: "bg-[#c8e130]",
    },
    {
      title: "Governance from Day One",
      description: "Unlike firms that bolt governance on as an afterthought, we build content governance, data governance, and platform governance into every engagement from the start, ensuring long-term sustainability.",
      color: "bg-[#2d2f6b]",
    },
    {
      title: "People-First, Technology-Second",
      description: "We start with learner needs and business objectives, then select technology to serve those goals. This people-first approach ensures adoption, engagement, and measurable learning impact.",
      color: "bg-[#c8e130]",
    },
    {
      title: "Measurable Business Impact",
      description: "Every engagement includes an ROI framework that connects ecosystem performance to business metrics, demonstrating cost reduction, productivity gains, and skills development outcomes.",
      color: "bg-[#2d2f6b]",
    },
  ],
};

/* Grid cards Secion data */
export const GridCardSectionData = {
  heading: "The Numbers Behind Learning Ecosystem Transformation",
  description: "The data is clear: organizations that invest in connected learning ecosystems see measurable improvements in learner adoption, skills development velocity, and technology cost efficiency while reducing content redundancy and platform sprawl.",
  items: [
    {
      icon: <Clock3 size={20} />,
      value: "$624.1B",
      description: "Projected global managed learning services market by 2031 (Allied Market Research)",
    },
    {
      icon: <Image size={20} />,
      value: "44%",
      description: "Of workers' core skills disrupted by 2027, demanding ecosystem-level responses (WEF)",
    },
    {
      icon: <CircleDollarSign size={20} />,
      value: "49%",
      description: "Of L&D professionals identify a growing skills crisis requiring connected ecosystems (LinkedIn)",
    },
    {
      icon: <Globe size={20} />,
      value: "50%",
      description: "Reduction in content development time with AI-powered ecosystem tools (GP Strategies 2025)",
    },
  ],
};

/* CTA Section data */
export const CTASectionData = {
  heading: "Ready to Transform Your Learning Ecosystem?",

  description: "Schedule a consultation with Edstellar's learning ecosystem consultants. We will assess your technology landscape, identify quick wins and strategic opportunities, and chart a roadmap for a connected, high-performing learning ecosystem.",
  button: {
    text: "Schedule a Consultation",
    href: "https://www.edstellar.com/",
    title: "Click Here to Schedule a Consultation",
  },

  secondaryButton: {
    text: "",
    link: "",
  },
};

/* FAQ's Section Data */
export const FAQSectionData = {
  heading: "Common Questions About Digital Learning Ecosystem Consulting",
  description: "Get answers to the most frequently asked questions about learning ecosystem strategy, platform selection, integration, and optimization.",
  items: [
    {
      question: "What is a digital learning ecosystem and how does it differ from just having an LMS?",
      answer: 'A digital learning ecosystem is a connected network of learning technologies, content sources, analytics tools, and performance support systems. An LMS handles course delivery and compliance tracking; the broader ecosystem adds content curation, personalized learning pathways, social learning, and skills intelligence the LMS alone cannot provide.',
    },
    {
      question: "How do you evaluate and select the right learning platforms?",
      answer: "Edstellar uses a vendor-neutral evaluation framework starting with your business requirements, not vendor demos. We map your functional, technical, integration, and experience requirements and score platforms against those criteria. As a learning ecosystem consulting company, we manage the RFP process, facilitate demonstrations, and provide objective recommendations based on fit, cost, scalability, and integration capability.",
    },
    {
      question: "How long does it take to implement a fully integrated ecosystem?",
      answer: "A typical ecosystem implementation follows a phased approach spanning 14 to 19 weeks for the initial build, with ongoing optimization continuing thereafter. Discovery and assessment takes 2 to 3 weeks, architecture design takes 3 to 4 weeks, build and integration takes 6 to 8 weeks, and launch and adoption takes 3 to 4 weeks. However, complexity varies based on the number of platforms, integration requirements, content migration volume, and organizational readiness. We design phased roadmaps that deliver quick wins early while building toward the complete ecosystem vision.",
    },
    {
      question: "How do you measure the ROI of a digital learning ecosystem investment?",
      answer: "We establish baseline metrics before implementation and track improvements across multiple dimensions: technology cost reduction through platform consolidation, content development efficiency gains, learner adoption and engagement rates, time-to-competency improvements, skills development velocity, and learning impact on business KPIs. Our unified analytics architecture aggregates data from every platform to provide a complete picture. Most clients see measurable technology cost reduction of 30 to 40% and significant adoption improvements within the first quarter of deployment.",
    },
    {
      question: "Can you integrate existing tools without replacing everything?",
      answer: "Absolutely. Most ecosystem engagements involve optimizing and connecting existing platforms rather than wholesale replacement. We assess your current technology stack, identify which tools serve your needs well, which need configuration improvements, which should be integrated more deeply, and which should be retired. Our integration architecture uses industry standards like xAPI, LTI, SCORM, REST APIs, and SSO to connect platforms regardless of vendor. The goal is to maximize your existing investments while filling genuine gaps with strategically selected additions.",
    },
  ],
};

/* Service Slides Section Data */
export const ServiceSlidesSectionData = {
  heading: "Explore Connected Consulting Services",

  cards: [
    {
      icon: <WalletCards size={22} />,
      category: "Content Services",
      title: "Learning Content Design and Development",
      description: "Create engaging microlearning modules, interactive courses, and multimedia content that populates your learning ecosystem with high-quality, governed resources.",
      link: "https://www.edstellar.com/learning-content-development-services",
    },

    {
      icon: <Users size={22} />,
      category: "Needs Analysis",
      title: "Training Needs Analysis",
      description: "Conduct comprehensive training needs analysis to identify skills gaps, learning priorities, and technology requirements that inform your ecosystem strategy.",
      link: "https://www.edstellar.com/training-needs-analysis-solutions",
    },

    {
      icon: <BadgeCheck size={22} />,
      category: "Performance Support",
      title: "Employee Performance Support",
      description: "Embed expert guidance, decision tools, and contextual help directly into the flow of work as a critical component of your connected learning ecosystem.",
      link: "https://www.edstellar.com/employee-performance-support",
    },

    {
      icon: <Building2 size={22} />,
      category: "Skills & Competency",
      title: "Skills Assessment and Competency Mapping",
      description: "Map skills taxonomies and competency frameworks that feed directly into your learning ecosystem, enabling personalized learning pathways and skills intelligence.",
      link: "https://www.edstellar.com/assessment-development-centers-consulting",
    },
  ],
};