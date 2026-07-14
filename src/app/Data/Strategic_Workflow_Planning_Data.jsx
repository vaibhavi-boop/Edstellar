import {
  Target,
  Clock3,
  Cpu,
  Briefcase,
  Database,
  Users,
  Image,
  CircleDollarSign,
  Globe,
  WalletCards,
  BadgeCheck,
  Building2,
  GraduationCap,
  Network,
} from "lucide-react";

/* Breadcrumb data */
export const BreadcrumbData = [
  {
    label: "Home",
    href: "https://www.edstellar.com/",
    title: "Click Here to View Home Page",
  },
  {
    label: "OD Consulting",
    href: "https://www.edstellar.com/organizational-development-consulting",
    title: "Click Here to View OD Consulting Page", 
  },
  {
    label: "Strategic Workforce Planning",
  },
];

/* Breadcrumb data */
export const HeroSectionData = {
  heading: "Strategic Workforce Planning for Enterprises",

  description:
    "Edstellar's strategic workforce planning consulting helps enterprise organisations align talent strategy to business goals, forecasting future capability needs, identifying gaps, and designing sourcing and development strategies that close them before they limit performance. Trusted by HR and business leaders across industries, our consultant-led, data-driven approach builds the workforce required to execute strategy rather than react to it, and transfers capability to your internal HR team.",

  features: [
    "End-to-end SWP from diagnosis to implementation",
    "Integrated with training, reskilling, and succession planning",
    "Data-driven insights for HR and business leaders",
  ],

  button: {
    text: "Request a Consultation",
    href: "https://www.edstellar.com/",
    title: "Click Here to Request a Workforce Planning Consultation",
  },

  image:
    "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f33645d20f4ed12ea12ee5_Strategic%20Workforce%20Planning%20for%20Enterprises%20(1).webp",

  imageAlt: "Strategic Workforce Planning for Enterprises",

  title: "Strategic Workforce Planning for Enterprises",
};

/* Stats Section data */
export const StatsData = [
  {
    value: "14+",
    title: "Years of Workforce Consulting",
  },
  {
    value: "200+",
    title: "Enterprise Workforce Plans Built",
  },
  {
    value: "40+",
    title: "Industries Covered",
  },
  {
    value: "Fortune 500",
    title: "Client Portfolio",
  },
];

/* Logos section data */
export const LogoSectionData = {
  heading: "Organizations That Trust Edstellar",

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

/* Static Cards section data */
export const StaticCardSectionData = {
  heading: "Why Strategic Workforce Planning Matters",

  description:
    "Most organizations plan their business strategy in detail. Their workforce strategy is an afterthought. Roles go unfilled at critical moments. Skills gaps appear only after they have already slowed growth. Talent decisions are made reactively, at higher cost and lower quality than a 12-month forward view would have prevented.Strategic workforce planning changes that equation. If any of the following challenges resonate, our strategic workforce planning consulting practice is built specifically to address them.",

  items: [
    {
      icon: <Target size={18} />,
      title: "Talent gaps surface only when growth stalls",
      description: "Business strategy is decided without knowing whether the talent to execute it exists, leaving critical roles unfilled at the worst possible moment.",
    },
    {
      icon: <Clock3 size={18} />,
      title: "HR is reacting to vacancies, not forecasting them",
      description: "HR leaders are reacting to vacancies rather than forecasting future capability needs, making talent decisions too late and too expensively.",
    },
    {
      icon: <Cpu size={18} />,
      title: "AI and automation outpacing workforce plans",
      description: "Rapid automation and AI adoption is changing role requirements faster than workforce plans can adapt.",
    },
    {
      icon: <Briefcase size={18} />,
      title: "Workforce data locked in silos",
      description: "Workforce data sits in silos across HR, finance, and operations, preventing integrated, confident planning decisions.",
    },
    {
      icon: <Database size={18} />,
      title: "Skills gaps visible only after business impact",
      description: "Skills gaps are identified only after they have produced business impact, not before, when intervention is still affordable.",
    },
    {
      icon: <Users size={18} />,
      title: "Leadership pipeline disconnected from workforce picture",
      description: "Leadership and succession plans are not connected to the broader workforce picture, creating blind spots at the top of the organization.",
    },
  ],

  button: {
    text: "Request a Consultation",
    href: "https://www.edstellar.com/",
    title: "Click Here to Request a Workforce Planning Consultation",
  },
};

/* Grid cards Secion data */
export const GridCardSectionData = {
  heading: "The Data Behind the Workforce Planning Imperative",

  description:
    "Research from Korn Ferry and the Korn Ferry Institute quantifies the planning gap and the cost of leaving it unaddressed.",

  items: [
    {
      icon: <Clock3 size={20} />,
      value: "35%",
      description:
        "of CHROs report future workforce needs are routinely overlooked due to short-term pressures, leaving organizations exposed when growth accelerates. (Korn Ferry)",
    },
    {
      icon: <Image size={20} />,
      value: "18%",
      description:
        "Only a small percentage of CHROs consistently use data analytics to inform people decisions—the vast majority still plan on instinct rather than evidence (Korn Ferry).",
    },
    {
      icon: <CircleDollarSign size={20} />,
      value: "2.5x",
      description:
        "Higher revenue growth is generated by organizations with high workforce engagement scores compared to lower-engagement peers—talent planning is a direct financial lever (Korn Ferry Institute).",
    },
    {
      icon: <Globe size={20} />,
      value: "66%",
      description:
        "A majority of CHROs know which skills their organization needs, but only 48% know how to acquire them—an execution gap that strategic workforce planning directly closes (Korn Ferry).",
    },
  ],
};

/* Tabs Section data */
export const TabsSectionData = {
  heading: "Strategic Workforce Planning Services",

  tabs: [
    {
      id: 1,
      button: "Demand Forecasting",
      number: "01",
      title: "Workforce Demand Forecasting",
      description1:
        "Edstellar's workforce demand forecasting services model future headcount and capability requirements by function, geography, and role family across a 1 to 5 year horizon. We connect your business growth plans, market scenarios, and operational drivers to produce a concrete view of what talent your organization will need, and when.",
      description2:
        "The output is a demand forecast your finance, HR, and business leaders can plan against together, replacing annual headcount guessing with structured, evidence-based projections that update as business conditions evolve.",
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f33687c358e98eba4ff702_Workforce%20Demand%20Forecasting%20(1).webp",

      points: [
      "Business driver analysis linking growth plans, revenue targets, and market entry to workforce requirements",
      "Role family and function-level headcount demand model across 1, 3, and 5 year horizons",
      "Geography-specific demand mapping for multi-location and global organizations",
      "Impact of automation and AI on role volumes and capability requirements",
      "Demand forecast integrated with financial planning cycles",
      "Executive-ready demand visualization and planning summary",
    ],
    },

   {
     id: 2,
     button: "Skills Gap Analysis",
     number: "02",
     title: "Skills Gap Analysis",
     description1:
     "Edstellar's skills gap analysis consulting maps your current workforce capabilities against future role requirements and quantifies the gap by department, level, and criticality. We move beyond headcount to understand what your people can actually do, and what they cannot do yet, so talent investment decisions are grounded in evidence.",
     description2:
     "The output is a skills gap matrix that shows exactly where your organization is exposed, which gaps are addressable through development, and which require hiring or sourcing from outside, giving HR and business leaders the data they need to prioritize.",
     image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f336a69cc0ba23b2daa272_Skills%20Gap%20Analysis%20(1).webp",

     points: [
     "Current-state skills inventory across functions, levels, and business units",
     "Future-state capability requirements mapped to role architecture and business strategy",
     "Quantified gap analysis by department, role family, and skill criticality",
     "Identification of critical roles with no internal succession or development pipeline",
     "Development addressability assessment: which gaps reskilling can close vs. requiring new talent",
     "Skills gap heatmap and executive reporting format",
   ], 
 },

{
  id: 3,
  button: "Talent Sourcing",
  number: "03",
  title: "Talent Sourcing Strategy",
  description1:
    "Edstellar's talent sourcing consulting designs a structured approach to closing workforce gaps through the right combination of internal development, external hiring, contingent talent, and automation. We use a Build / Buy / Borrow / Bot framework to evaluate each gap and recommend the most cost-effective and strategically appropriate sourcing route.",
  description2:
    "The output is a sourcing strategy your talent acquisition, HR, and L&D teams can execute from, replacing ad hoc hiring and training decisions with an integrated plan sequenced to your workforce demand forecast.",
  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f336c288cbc8449e598860_Talent%20Sourcing%20Strategy%20(1).webp",

  points: [
    "Build / Buy / Borrow / Bot analysis for each identified capability gap",
    "Internal mobility and reskilling pathway design for critical roles",
    "External hiring strategy and talent market intelligence by role family",
    "Contingent and gig workforce integration planning",
    "Automation and AI adoption roadmap for roles being redesigned or eliminated",
    "Sourcing cost modeling and ROI projection for each channel",
      ],
    },

  {
    id: 4,
    button: "Role Architecture",
    number: "04",
    title: "Role Architecture and Job Design",
    description1:
    "Edstellar's role architecture consulting defines future-ready role structures, job families, and career pathways that align to organizational strategy and support workforce flexibility. We help organizations move from title-based role definitions to skills-based, modular job architecture that enables talent mobility, supports compensation equity, and creates career pathways employees can actually navigate.",
    description2:
    "The output is a role architecture your HR, talent acquisition, and L&D teams use as a common framework, eliminating the confusion, duplication, and inequity that comes from roles defined inconsistently across business units.",
    image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f336dcec6e6cc9e1c2a1ce_Role%20Architecture%20and%20Job%20Design%20(1).webp",

    points: [
    "Job family and role hierarchy design aligned to business strategy and operating model",
    "Skills-based role definitions replacing or supplementing traditional job descriptions",
    "Career pathway mapping showing lateral and vertical progression routes",
    "Role criticality tiering to prioritize talent investment and succession planning",
    "Compensation band alignment to new role architecture",
    "Integration with talent systems and performance management frameworks",
  ],
},

    {
      id: 5,
      button: "Scenario Planning",
      number: "05",
      title: "Talent Sourcing Strategy",
      description1:
      "Edstellar's workforce scenario planning services model multiple business and market scenarios, including growth, contraction, disruption, merger, and market entry, and stress-test your talent strategy against each. We build the scenario models your executive team needs to make workforce decisions with confidence even when the business environment is uncertain.",
      description2:
      "The output is a scenario planning toolkit your HR and business leaders can use to evaluate talent decisions in context, understand the workforce implications of strategic choices before they are made, and activate contingency plans without delay when scenarios shift.",
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f3372d6b9a01397495cb9e_Talent%20Sourcing%20Strategy%20(2).webp",

      points: [
      "Identification of key workforce planning uncertainties and scenario drivers",
      "Three to five future workforce scenarios modeled against business strategy",
      "Headcount, skills, and cost implications of each scenario",
      "Trigger-based decision framework: what to watch for and what to do when scenarios shift",
      "Executive scenario review and alignment session",
      "Scenario planning methodology transferred to your HR team for ongoing use",
      ],
    },

    {
      id: 6,
      button: "Capability Building",
      number: "06",
      title: "Workforce Planning Capability Building",
      description1:
      "Edstellar's workforce planning consulting capability building service embeds strategic workforce planning as an ongoing organizational capability, not a one-off project. We design the process, governance, tools, and internal skill set your HR team needs to run workforce planning independently, updating forecasts and gap analyses as business conditions change.",
      description2:
      "The output is a workforce planning operating model your organization owns: a defined process, a governance rhythm, a toolset, and HR practitioners who know how to use them.",
      image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f3374649da67c1cd0eb0c8_Workforce%20Planning%20Capability%20Building%20(1).webp",

      points: [
      "Workforce planning process design and standard operating procedures",
      "Planning governance model: owners, cadence, inputs, outputs, and escalation",
      "Workforce planning toolkit: templates, models, and dashboards your team can run",
      "HR practitioner upskilling in workforce analytics and planning methodology",
      "Integration of workforce planning into annual strategic and financial planning cycles",
      "Maturity assessment and improvement roadmap for ongoing planning capability",
      ],
    },
  ],
};

/* Number Section data */
export const NumberSectionData = {
  heading: "How Edstellar Delivers Strategic Workforce Planning Outcomes",

  description:
    "Edstellar's strategic workforce planning consulting services follow a five-phase model combining diagnostic analysis, demand forecasting, gap mapping, strategic design, and capability activation. Every engagement is scoped to your organization's planning maturity, data availability, and strategic horizon.",

  steps: [
    {
      number: "01",
      title: "Diagnose",
      description:
        "Assess current workforce composition, skills inventory, planning maturity, and alignment between business strategy and existing talent plans.",
      week: "Weeks 1 - 2",
      badge: "Assessment",
      points: [
        "Workforce baseline assessment",
        "Skills inventory review",
        "Critical planning questions defined",
      ],
    },
    {
      number: "02",
      title: "Forecast",
      description:
        "Model future workforce demand by function, geography, and role family across 1, 3, and 5 year horizons, incorporating growth plans and automation impact.",
      week: "Weeks 2 - 4",
      badge: "Modelling",
      points: [
        "Demand model by role family",
        "Automation impact analysis",
        "Multi-scenario demand view",
      ],
    },
    {
      number: "03",
      title: "Gap Map",
      description:
        "Quantify skills, headcount, and capability gaps between current state and forecasted demand. Identify critical exposure points and succession risks.",
      week: "Weeks 3 - 4",
      badge: "Analysis",
      points: [
        "Gap quantification by department",
        "Succession risk identification",
        "Addressability assessment",
      ],
    },
    {
      number: "04",
      title: "Strategize",
      description:
        "Design a talent sourcing, reskilling, and role architecture strategy to close identified gaps cost-effectively, aligned to financial and operational planning cycles.",
      week: "Weeks 4 - 6",
      badge: "Design",
      points: [
        "Sourcing strategy design",
        "Scenario planning toolkit built",
        "Finance cycle alignment",
      ],
    },
    {
      number: "05",
      title: "Activate",
      description:
        "Embed the workforce plan into HR governance rhythms. Build internal capability through process design, toolkits, and practitioner upskilling.",
      week: "Weeks 6 - 8",
      badge: "Embed",
      points: [
        "Governance model embedded",
        "HR team upskilling",
        "Independent planning capability",
      ],
    },
  ],
};

/* Verticle Line Section data */
export const VerticleLineSectionData = {
  title: "What Makes Edstellar's Strategic Workforce Planning Different",

  subtitle:
    "Four clear differences that define every workforce planning engagement we deliver.",

  description:
    "From the way we connect planning to learning delivery, to the way we transfer capability to your team, Edstellar's approach is built to produce outcomes your organization continues to own after the engagement ends.",

  image: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69f337f2bdb20258b1556d23_Workforce%20Demand%20Forecasting%20(2).webp",

  features: [
    {
      title: "Integrated with learning and reskilling delivery",
      description:
        "As a strategic workforce planning company, Edstellar connects workforce planning to learning program design, training needs analysis, and capability development, so the reskilling strategy identified in planning is immediately executable through our L&D practice. No handoff required.",
      color: "bg-[#2d2f6b]",
    },
    {
      title: "Skills-based, not headcount-based",
      description:
        "Our workforce planning consulting methodology moves beyond headcount models to capability-level analysis, mapping what your people can do against what your business will need, producing talent decisions grounded in skills evidence rather than job title assumptions.",
      color: "bg-[#c8e130]",
    },
    {
      title: "Scenario-ready for uncertain environments",
      description:
        "Every engagement produces scenario models your executive team can use when business conditions shift, not just a static plan that becomes obsolete in the first quarter after delivery.",
      color: "bg-[#2d2f6b]",
    },
    {
      title: "Capability transfer over consulting dependency",
      description:
        "Edstellar's workforce planning consulting engagement model is designed to transfer capability to your internal HR team. Your practitioners own the process, tools, and governance model after we disengage, not a dependency on continued retainers.",
      color: "bg-[#c8e130]",
    },
  ],
};

/* Slides Section data */
export const SlidesSectionData = {
  heading: "The outcome,\nin our client's words",

  description:
    "Enterprise organizations trust Edstellar's strategic workforce planning consulting to close the gap between where their talent is today and where their business strategy demands it to be.",

  quote:
    "Edstellar's strategic workforce planning engagement gave us the first clear picture of what our talent pipeline actually looked like against where we were taking the business. The gap analysis changed how our executive team made investment decisions, and the capability-building work means our HR team can run this process themselves going forward.",

  avatar: "/StrategicWorkspacePlanningAssets/Rohit Sharma.webp",

  name: "Chief People Officer",

  company: "Global Technology Enterprise",
};

/* Service Slides Section data */

export const ServiceSlidesSectionData = {
  heading: "Integrated with Edstellar's Full Consulting Ecosystem",

  cards: [
    {
      icon: <WalletCards size={22} />,
      category: "Consulting",
      title: "Training Needs Analysis",
      description:
        "Workforce gap analysis identifies the capability gaps; TNA turns them into prioritized learning interventions your L&D function can act on immediately.",
      link: "https://www.edstellar.com/strategic-workforce-planning-solutions",
    },

    {
      icon: <Users size={22} />,
      category: "OD Consulting",
      title: "Leadership Pipeline and Succession Planning",
      description:
        "Strategic workforce planning informs future leadership requirements; succession planning builds the pipeline to fill them before critical roles go vacant.",
      link: "https://www.edstellar.com/leadership-succession-planning-consulting",
    },

    {
      icon: <BadgeCheck size={22} />,
      category: "Consulting",
      title: "Talent Assessments",
      description:
        "Skills inventory and assessment data feeds directly into the gap analysis, giving workforce planning a verified, evidence-based picture of current capabilities.",
      link: "https://www.edstellar.com/talent-assessment-services",
    },

    {
      icon: <Building2 size={22} />,
      category: "OD Consulting",
      title: "Organizational Strategy Consulting",
      description:
        "Workforce planning executes what organizational strategy defines — the two disciplines work in tandem to align structure, roles, and talent to strategic direction.",
      link: "https://www.edstellar.com/strategic-workforce-planning-solutions",
    },

    {
      icon: <GraduationCap size={22} />,
      category: "L&D Consulting",
      title: "Learning Strategy and Design",
      description:
        "Reskilling requirements identified in workforce planning become learning programs — Edstellar connects planning outputs directly to learning design and delivery.",
      link: "https://www.edstellar.com/learning-strategy-design-consulting",
    },

    {
      icon: <Network size={22} />,
      category: "OD Consulting",
      title: "Organizational Development Consulting",
      description:
        "Role architecture, capability frameworks, and workforce design connect directly to OD consulting — ensuring structure and talent strategy reinforce each other.",
      link: "https://www.edstellar.com/organizational-development-consulting",
    },
  ],
};

/* FAQ's Section Data */
export const FAQSectionData = {
  heading: "Frequently Asked Questions",
  description:
    "Everything you need to know before starting a workforce planning engagement with Edstellar.",

  items: [
    {
      question:
        "What is strategic workforce planning and how is it different from headcount planning?",
      answer:
        'Headcount planning answers "how many people do we need." Strategic workforce planning services answer "what capabilities do we need, where, when, and how do we acquire or develop them." Strategic workforce planning connects talent decisions to business strategy, models future scenarios, and produces a sourcing and development roadmap, not just a headcount number..',
    },
    {
      question:
        "How long does a strategic workforce planning engagement typically take?",
      answer:
        "A full workforce planning consulting engagement covering diagnosis, demand forecasting, gap mapping, strategy design, and capability activation runs approximately 6 to 8 weeks for most enterprise organizations. Scope varies based on planning complexity, data availability, and the number of functions or geographies included.",
    },
    {
      question:
        "What data do we need to begin a workforce planning engagement?",
      answer:
        "The most valuable starting data includes current headcount by role and function, your business strategy and growth projections, existing skills or performance data, and your current attrition rates. Many organizations begin without complete data. Our diagnostic phase identifies the data available and builds the planning model around it.",
    },
    {
      question:
        "How does workforce planning connect to our training and development programs?",
      answer:
        "Skills gap analysis directly produces the reskilling priorities your L&D function needs to act on. As your workforce planning consulting firm, Edstellar connects planning outputs directly to training needs analysis, learning program design, and capability development, so the gap identified in planning becomes a learning program in delivery, not a recommendation that sits in a slide deck.",
    },
    {
      question:
        "Can strategic workforce planning help us plan for AI and automation impact?",
      answer:
        "Yes. Automation and AI impact analysis is a core component of our demand forecasting and role architecture services. We model which roles will be augmented, redesigned, or eliminated over your planning horizon and incorporate that into the gap analysis and sourcing strategy, so your talent plan accounts for technology change rather than ignoring it.",
    },
  ],
};

/* CTA Section data */
export const CTASectionData = {
  heading: "Ready to Align Your Workforce to Your Business Strategy?",

  description:
    "Start with a strategic workforce planning consultation. Edstellar's workforce planning specialists will scope a consulting engagement tailored to your business horizon, talent data, and planning maturity. Every engagement begins with a structured scoping conversation, so you know exactly what the program will cover before any commitment is made.",

  primaryButton: {
    text: "Request a Workforce Planning Consultation",
    link: "https://www.edstellar.com/contact",
  },

  secondaryButton: {
    text: "Back to OD Consulting",
    link: "https://www.edstellar.com/organizational-development-consulting",
  },
};