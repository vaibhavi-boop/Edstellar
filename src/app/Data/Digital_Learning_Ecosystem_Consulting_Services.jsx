import {
  Clock3,
  Users,
  Image,
  CircleDollarSign,
  Globe,
  WalletCards,
  BadgeCheck,
  Building2,
  GitBranch,
  ChartColumnIncreasing,
  PieChart,
  FileText,
  UserRoundSearch,
} from "lucide-react";

/* Breadcrumb data */
export const BreadcrumbData = [
  {
    label: "Home",
    href: "https://www.edstellar.com/",
    title: "Click Here to View Home Page",
  },
  {
    label: "Learning & Development Consulting",
    href: "https://www.edstellar.com/learning-development-consulting-services",
    title: "Click Here to View Learning & Development Consulting", 
  },
  {
    label: "Digital Learning Ecosystem",
  },
];

/* Breadcrumb data */
export const HeroSectionData = {
  heading: "Digital Learning Ecosystem Consulting",

  description:
    "Fragmented learning tools create fragmented learner experiences. Edstellar's digital learning ecosystem consulting helps enterprises design, integrate, and optimize a connected technology ecosystem by linking your LMS, LXP, content libraries, analytics, and performance support tools seamlessly. Our vendor-neutral approach ensures every platform decision serves your business goals, not vendor relationships.",

  features: [
    "Vendor-neutral advisory across 30+ learning platforms",
    "End-to-end ecosystem design from strategy through implementation and optimization",
    "Proven integration frameworks using xAPI, LTI, and SCORM standards",
  ],

  button: {
    text: "Request a Consultation",
    href: "https://www.edstellar.com/",
    title: "Click Here to Request a Workforce Planning Consultation",
  },

  image:
    "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc84abb60d0e23edcbf6a1_Build%20a%20Connected%20Digital%20Learning%20Ecosystem.webp",

  imageAlt: "Digital Learning Ecosystem Consulting",

  title: "Digital Learning Ecosystem Consulting",
};

/* Stats Section data */
export const StatsData = [
  {
    value: "30+",
    title: "Learning Platforms Evaluated",
  },
  {
    value: "100+",
    title: "Integrations Delivered",
  },
  {
    value: "40%",
    title: "Avg. Technology Cost Reduction",
  },
  {
    value: "3x",
    title: "Improvement in Learner Adoption",
  },
];

/* Verticle Icons Section */
export const VerticleIconSectionData = {
  heading: "Why Most Digital Learning Ecosystems Underperform",

  description:
    "Organizations invest heavily in learning technology but rarely see the expected returns. Siloed platforms, redundant content, and vendor-driven decisions create fragmented experiences that frustrate learners and waste budgets. The problem is not a lack of tools. It is the absence of a connected ecosystem strategy.",
  image:
    "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc84fba469e0e998af0320_69d49c35Why%20Most%20Digital%20Learning%20Ecosystems%20Underperform.webp",

  items: [
    {
      icon: <GitBranch size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Fragmented Tools, Siloed Experiences",
      description:
        "Employees navigate multiple disconnected platforms with separate logins, different interfaces, and no unified learning path. Knowledge falls through the cracks between systems, and learners disengage from the fragmented experience.",
      stat:
        "49% of L&D professionals identify a growing skills crisis (LinkedIn 2025)",
    },

    {
      icon: <ChartColumnIncreasing size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Expensive Platforms Sitting Underutilized",
      description:
        "Organizations invest in premium learning platforms but adoption stalls at 20-30% of features. Licenses go unused, integrations remain incomplete, and the promised ROI never materializes because deployment lacked a strategic framework.",
      stat:
        "44% of core skills disrupted by 2027 (WEF)",
    },

    {
      icon: <PieChart size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "No Unified Analytics Across Platforms",
      description:
        "Learning data sits in silos across your LMS, LXP, content libraries, and HRIS. Without a unified analytics layer, you cannot measure true learning impact, track skills growth, or connect learning activity to business outcomes.",
      stat:
        "75% rate worker value evaluation as ineffective (Deloitte)",
    },

    {
      icon: <FileText size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Content Sprawl Without Governance",
      description:
        "Duplicate courses, outdated materials, and inconsistent quality plague organizations that lack content governance. Teams create content independently, leading to redundancy, confusion, and wasted development budgets.",
      stat:
        "30% of content budget wasted on duplicate/outdated material (Brandon Hall)",
    },

    {
      icon: <UserRoundSearch size={22} strokeWidth={1.8} className="text-[#FF4D3D]" />,
      title: "Technology Decisions Driven by Vendors, Not Strategy",
      description:
        "Platform purchases happen based on vendor demos and sales pitches rather than strategic fit. The result is an incoherent technology stack where tools overlap, integrate poorly, and serve vendor interests rather than organizational learning goals.",
      stat:
        "$624.1B managed learning market by 2031 (Allied Market Research)",
    },
  ],

  cta: {
    text:
      "Edstellar's digital learning ecosystem consulting transforms fragmented tools into a strategy-driven, unified learning experience where every platform communicates, data flows freely, and learners thrive.",

    button: {
      text: "Transform Your Learning Ecosystem",
      href: "#",
      title: "Transform Your Learning Ecosystem",
    },
  },
};

/* Tabs Section data */
export const TabsSectionData = {
  heading: "Comprehensive Digital Learning Ecosystem Consulting Services",
  description:
    "From ecosystem strategy and architecture through platform selection, AI-powered experience design, analytics, content governance, and change management, Edstellar delivers end-to-end digital learning ecosystem consulting services that connect your technology investments to business outcomes.",
  tabs: [
    {
      id: 1,
      button: "Ecosystem Strategy",
      number: "01",
      title: "Learning Ecosystem Strategy and Architecture",
      description1:
        "We begin every engagement with a comprehensive ecosystem audit, mapping your current technology landscape, identifying gaps and redundancies, and designing a target-state architecture that aligns every platform with your business strategy and learner needs.",
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc854338610685ce39e332_Learning%20Ecosystem%20Strategy%20and%20Architecture.webp",

      points: [
      "Comprehensive ecosystem audit and gap analysis",
      "Target-state architecture design and technology roadmap",
      "Vendor-neutral platform evaluation framework",
      "Governance model and investment roadmap",
    ],
    },

   {
     id: 2,
     button: "Platform Selection",
     number: "02",
     title: "Platform Selection and Integration",
     description1:
     "We manage the entire platform selection lifecycle, from requirements definition and RFP development through vendor scoring, contract negotiation, integration architecture, data flow mapping, and migration execution to ensure seamless interoperability.",
     image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc85786aae03baabedc1ba_Platform%20Selection%20and%20Integration.webp",

     points: [
     "RFP development and vendor scoring matrix",
     "Integration architecture and data flow mapping",
     "Content and data migration planning",
     "Interoperability testing and validation",
   ], 
  },

 {
  id: 3,
  button: "Adoption & Change",
  number: "03",
  title: "Adoption, Change Management, and Optimization",
  description1:
    "We drive ecosystem adoption through structured change management strategies, stakeholder engagement programs, administrator and creator training, phased rollouts, continuous feedback loops, and maturity assessments that guide ongoing optimization.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dc85a9630a436f30996c27_Adoption_%20Change%20Management_%20and%20Optimization.webp",

  points: [
    "Change management strategy and stakeholder engagement",
    "Admin training, phased rollout, and quick-start guides",
    "Feedback loops and ecosystem maturity assessment",
    ],
   },
  ],
};

/* Timeline Section data */
export const TimelineSectionData = {
  heading: "A Proven Methodology for Learning Ecosystem Consulting",
  description:"Our five-phase methodology ensures every ecosystem initiative moves from discovery through architecture, build, launch, and continuous optimization. Each phase produces tangible deliverables and builds toward a connected, high-performing learning ecosystem.",
  timeline: [
    {
      number: "01",
      title: "Discover and Assess",
      description:
        "Conduct a comprehensive technology stack inventory, stakeholder interviews, gap analysis, and industry benchmarking to produce a detailed opportunity map that prioritizes ecosystem investments by impact and feasibility.",
      duration: "2-3 Weeks",
      type: "Assessment",
      tags: [
        "Tech stack inventory",
        "Stakeholder interviews",
        "Opportunity map",
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