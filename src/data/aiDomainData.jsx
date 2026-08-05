// Data for the AI domain category-page sections that sit between
// "Why now" / "Transformation" and "Why Edstellar" / "Method" in the
// reference design (ai-domain-page). Kept separate from categorydata.jsx
// so these blocks can be reused or swapped per category later.

export const shiftsSection = {
  eyebrow: { italic: "What changed", text: "THE FIELD AS IT STANDS NOW", count: "5 shifts" },
  heading: { normal: "Adoption is nearly universal.", italic: "Production is not." },
  paragraph:
    "Five things moved in the last eighteen months, and each one changed what a team has to be able to do. The pattern across all five is the same: the technology arrived faster than the capability to run it, and the gap is where budgets are currently being spent without return.",
  note: "Figures are attributed to the analyst or study that published them. Where forecasts differ between sources we have said so rather than picking the most favorable number.",
  items: [
    {
      icon: "agents",
      fig: "~40%",
      figLabel: "of enterprise apps embed an agent by end of 2026, from under 5% a year earlier",
      title: "Assistants became agents",
      tag: "the agentic shift",
      over: "Software stopped answering and started <b>pursuing a goal</b>.",
      body: "The shift is from software that answers a question to software that pursues a goal: planning steps, calling tools, reading the result and adapting. <b>MIT Sloan and BCG put agentic adoption at 35% in two years</b>, a curve that took earlier AI roughly eight.",
      source: "Gartner; MIT Sloan and BCG",
      demands: "Agent design, tool access and bounded autonomy",
      program: "Agentic AI Training",
      isGap: false,
    },
    {
      icon: "gap",
      fig: "41%",
      figLabel: "of agent deployments actually reach production",
      title: "The gap is capability, not technology",
      tag: "the production gap",
      over: "Almost everyone has adopted. <b>Fewer than half</b> have shipped.",
      body: "Adoption has crossed roughly <b>80% of US enterprises</b>, but under half of those deployments reach production. The reasons given are consistent: missing guardrails, weak evaluation harnesses, unclear ownership, and the difficulty of connecting agents safely to real systems.",
      source: "2026 industry adoption data",
      demands: "Evaluation, guardrails and clear ownership",
      program: "AI Evaluation and Red-Teaming",
      isGap: false,
    },
    {
      icon: "cost",
      fig: "25x",
      figLabel: "more tokens per task, against a 10x fall in unit price",
      title: "Cheaper models, larger bills",
      tag: "inference economics",
      over: "Unit prices fell. <b>Bills went up</b> anyway.",
      body: "A 2024 chatbot exchange consumed around 2,000 tokens. A 2026 agentic workflow that plans, calls tools, retries and self-verifies can consume <b>50,000 or more for a single transaction</b>. Gartner expects inference costs to fall over 90% by 2030 and warns enterprises will not feel it, because agentic workloads burn far more tokens than the generative use cases that came before.",
      source: "Gartner",
      demands: "Cost-aware architecture and model routing",
      program: "AI Inference Economics and Model Routing",
      isGap: true,
    },
    {
      icon: "small",
      fig: "Smallest",
      figLabel: "model that provably clears your accuracy bar",
      title: "Small models took the routine work",
      tag: "model routing",
      over: "The win is not smaller models. It is <b>knowing which to call</b>.",
      body: "The winning pattern is not small instead of large. It is orchestration: route each step to the smallest model that clears the bar, with a calibrated escalation path to a frontier model for the steps that genuinely need one. Purpose-built models trained on domain data now beat general-purpose ones on specialized tasks.",
      source: "Gartner; AT&T 2026 outlook",
      demands: "Knowing when small is sufficient, and proving it",
      program: "AI Inference Economics and Model Routing",
      isGap: true,
    },
    {
      icon: "proto",
      fig: "Standard",
      figLabel: "tool interfaces replaced bespoke integrations",
      title: "Tool access got a protocol",
      tag: "integration",
      over: "Giving an agent real capability got cheap. So did <b>giving it the wrong one</b>.",
      body: "Connecting a model to real systems used to be bespoke work per integration. A shared protocol layer has changed that, which lowers the cost of giving an agent real capability and correspondingly raises the cost of giving it the wrong capability.",
      source: "Model Context Protocol adoption, 2026",
      demands: "Safe, standardized system integration",
      program: "Agent Tooling and Integration Safety",
      isGap: true,
    },
  ],
};

export const costOfInactionSection = {
  eyebrow: { italic: "Cost of inaction", text: "WHAT STANDING STILL COSTS", count: "4 pressures" },
  heading: { normal: "The organizations that", italic: "do nothing", after: "are not standing still." },
  paragraph:
    "Not adopting AI is itself a decision with consequences, and they compound. These four pressures compound quietly, and none of them wait for a budget cycle.",
  note: "The first two figures are published by the source named on the card; penalty ceilings are stated in the regulation itself. The last two are patterns we see in discovery, labeled as such rather than dressed up as research.",
  items: [
    {
      k: "Regulatory exposure",
      fig: "7%",
      u: "of global annual turnover",
      d: "The EU AI Act sets its own penalty ceilings: up to 7% of worldwide annual turnover or 35 million euros for prohibited practices, and 3% or 15 million for other breaches. Obligations attach to the deploying organization, not the model vendor.",
      src: "EU AI Act, penalty provisions",
    },
    {
      k: "Lead time",
      fig: "Months",
      u: "to build capability, not weeks",
      d: "Obligation dates do not move, but capability takes discovery, delivery and assessment cycles to build. Organizations that start when the deadline is already visible are starting late, and no amount of budget compresses a learning curve.",
      src: "Pattern, not a published statistic",
    },
    {
      k: "Key-person risk",
      fig: "2-3",
      u: "people hold the capability",
      d: "In most organizations the working knowledge of the models sits with a handful of individuals. Their departure is an outage, and it is a risk that grows quietly while nothing appears to be wrong.",
      src: "Observed in discovery engagements",
    },
    {
      k: "Stalled pilots",
      fig: "Demo",
      u: "is where most AI stops",
      d: "Pilots clear a demo and then stall, because reaching production needs deployment, monitoring and governance skills that no proof of concept required. The spend is already made; the return is not.",
      src: "Pattern, not a published statistic",
    },
  ],
};

export const outcomesForkSection = {
  eyebrow: { italic: "Outcomes", text: "WHERE IT LEADS", count: "Two ceilings" },
  heading: { normal: "We do not train AI users. We build", italic: "the people who will run it." },
  paragraph:
    "Two tracks means two ceilings, and both are a success. Everyone starts in the same place; where a team stops depends on whether it uses AI or builds it. A marketing team reaching fluent is an arrival, not a stalled journey.",
  note: "Teams that reach the top of either track stop consuming AI and start improving it. Programs named above are drawn from the catalog below. Steps marked proposed are gaps we have identified and can build; they are not currently listed.",
  shared: {
    tag: "Everyone starts here",
    steps: [
      { n: "AI-curious", d: "Aware the tools exist. No shared standard, no agreed rules for company data.", programs: [] },
      {
        n: "AI-fluent",
        d: "Uses AI daily inside agreed guardrails, with the same patterns across the team.",
        programs: [{ t: "ChatGPT Prompt Engineering Training", isNew: false }, { t: "AI for Managers Training", isNew: false }],
      },
    ],
  },
  branches: [
    {
      tag: "Teams who use AI",
      steps: [
        {
          n: "AI-productive",
          d: "Applies AI to its own function's work and can judge when the output is good enough to act on.",
          programs: [
            { t: "AI for HR Training", isNew: false },
            { t: "AI for Accountants Training", isNew: false },
            { t: "AI Decision Support Systems Training", isNew: false },
          ],
        },
      ],
    },
    {
      tag: "Teams who build AI",
      steps: [
        {
          n: "AI-capable",
          d: "Builds, evaluates and deploys its own systems, and can tell a working model from a convincing one.",
          programs: [
            { t: "Machine Learning with Python Training", isNew: false },
            { t: "Generative AI (GenAI) Training", isNew: false },
            { t: "Retrieval Augmented Generation (RAG) Training", isNew: false },
            { t: "ML Model Monitoring Training", isNew: false },
          ],
        },
        {
          n: "AI-self-sustaining",
          d: "Governs what it builds and refreshes its own practice as the tooling moves, without waiting for us.",
          programs: [
            { t: "MLOps Foundations", isNew: true },
            { t: "AI Evaluation and Red-Teaming", isNew: true },
            { t: "Artificial Intelligence (AI) Governance Training", isNew: false },
            { t: "EU AI Act Implementation", isNew: true },
          ],
        },
      ],
    },
  ],
};

export const industriesSection = {
  eyebrow: { italic: "Industries", text: "ONE PATTERN, WORKED THROUGH", count: "18 shown, not 18 total" },
  heading: { normal: "The industry changes.", italic: "The four conditions do not." },
  paragraph:
    "AI does not help every industry for eighteen different reasons. It helps because the same four conditions keep recurring, in processes that look nothing alike. Test your own highest-volume process against them, then read what follows as workings rather than as a list of sectors we serve. Eighteen is how many we wrote out, not how many qualify.",
  note: "Figures marked with a source are published research. The rest are described as patterns rather than given a number, because inventing one would be easier than measuring it and considerably less useful to you.",
  patternYes: [
    "It runs at <b>volume</b>: the same shape of decision, many times over.",
    "The <b>signal already exists</b> in data you hold, even if nobody currently reads it.",
    "Judgment is <b>pattern-shaped</b> rather than genuinely novel each time.",
    "<b>Approximately right is useful</b>, because a person reviews the output before it counts.",
  ],
  patternNo: [
    "The decision is <b>one-off</b>, so there is no pattern to learn.",
    "There is <b>no history</b>, only opinion about what should happen.",
    "An error is both <b>unrecoverable and unreviewed</b>, with nobody in the loop to catch it.",
  ],
  sectors: [
    {
      n: "Pharmaceuticals and life sciences",
      k: "pharma biotech drug discovery trials clinical medicine cro",
      hook: "Patient recruitment is the single largest cause of trial delay. Around <b>80% of trials</b> miss their original enrollment timeline, and Phase III conduct runs about <b>$55,700 a day</b>.",
      src: "Tufts CSDD; 2020 systematic review of enrollment barriers",
      where: "Matching patient records against eligibility criteria, and forecasting site-level enrollment before a trial opens.",
      need: "Validated modeling under regulatory scrutiny, with documentation an inspector will accept.",
      program: "AI in Clinical Trials Training",
    },
    {
      n: "Cybersecurity operations",
      k: "security soc infosec threat siem analyst breach",
      hook: "Analysts are buried in noise. <b>46% of all alerts</b> turn out to be false positives, so roughly half of a SOC's workload produces no security value.",
      src: "Microsoft and Omdia, State of the SOC 2026",
      where: "Triage and correlation, separating the alerts worth a human from the ones that are not.",
      need: "Anomaly detection tuned to your own baseline, plus the judgment to know when the model is wrong.",
      program: "AI for Cybersecurity Professionals Training",
    },
    {
      n: "Financial services and accounting",
      k: "bank banking finance fintech treasury audit ledger accounting capital markets",
      hook: "Reconciliation and close consume finance capacity every period, and the work is rules-based, repetitive and unforgiving of error.",
      where: "Transaction matching, anomaly detection in ledgers, and first-pass variance explanation.",
      need: "Models whose output can be traced and defended in an audit, not accepted on trust.",
      program: "AI for Accountants Training",
    },
    {
      n: "Risk and compliance",
      k: "regulatory governance audit controls legal obligations grc",
      hook: "Regulatory volume grows faster than compliance headcount, and AI regulation is now adding to the load it was meant to help carry.",
      where: "Obligation mapping, control testing, and drafting the evidence trail rather than reconstructing it later.",
      need: "Framework fluency and the ability to classify model risk correctly the first time.",
      program: "AI for Compliance Managers Training",
    },
    {
      n: "Logistics and supply chain",
      k: "supply chain freight shipping warehouse transport fleet distribution procurement",
      hook: "Forecast error compounds downstream. A wrong demand signal becomes wrong inventory, wrong routing and wrong labor, several weeks later.",
      where: "Demand forecasting, route optimization, and exception handling across the network.",
      need: "Time-series modeling plus monitoring, because a forecast model that quietly drifts is worse than none.",
      program: "Artificial Intelligence for Logistics Training",
    },
    {
      n: "People operations",
      k: "hr human resources recruitment talent hiring workforce staffing l&d",
      hook: "Screening volume outstrips the hours available, and the shortcuts taken under that pressure are exactly where bias enters a hiring process.",
      where: "Application triage, internal skills matching, and workforce analytics.",
      need: "Fairness testing and explainability, since employment decisions carry legal exposure.",
      program: "AI for HR Training",
    },
    {
      n: "Manufacturing",
      k: "factory production industrial plant assembly quality inspection oem",
      hook: "Defects found at the end of a line have already consumed the full cost of production. Inspection is where value is recovered or lost.",
      where: "Visual inspection, predictive maintenance, and process parameter tuning.",
      need: "Vision models that survive changing light, wear and shift patterns, which means monitoring more than modeling.",
      program: "ML Model Monitoring Training",
    },
    {
      n: "Energy and infrastructure",
      k: "utilities power grid oil gas renewables solar wind mining water pipeline",
      hook: "Assets are dispersed across terrain that is expensive to inspect and slow to reach, so condition is often inferred rather than known.",
      where: "Satellite and aerial imagery analysis, vegetation encroachment, and asset condition scoring.",
      need: "Geospatial and computer vision skills applied to imagery at scale.",
      program: "Advanced Geospatial AI with Deep Learning Training",
    },
    {
      n: "Retail and consumer",
      k: "ecommerce e-commerce shop store merchandising fmcg cpg consumer goods",
      hook: "Assortment and pricing decisions are made ahead of demand, and the cost of being wrong shows up as markdown or as empty shelf.",
      where: "Demand sensing, assortment planning, and decision support for merchandising teams.",
      need: "Models that inform a human decision and make their own uncertainty visible.",
      program: "AI Decision Support Systems Training",
    },
    {
      n: "Telecommunications and support",
      k: "telco telecom contact center customer service support helpdesk carrier",
      hook: "Contact volume scales with the customer base while support headcount does not, and the gap is absorbed as queue time.",
      where: "Automated resolution of routine contacts, with escalation paths that keep a human in the loop.",
      need: "Agent design with tool access, plus the guardrails that stop an agent acting beyond its remit.",
      program: "Agentic AI Training",
    },
  ],
  gapSectors: [
    {
      n: "Healthcare delivery",
      k: "hospital clinic patient medical nhs provider payer nursing radiology diagnostics",
      hook: "Clinicians spend a substantial share of the working day on documentation rather than patients, and imaging demand keeps outrunning the supply of radiologists.",
      where: "Clinical note generation, triage of imaging queues, and coding support.",
      need: "Clinical AI validation, human-in-the-loop design, and the regulatory literacy that patient-facing systems demand.",
      gap: "Clinical AI Deployment and Validation",
    },
    {
      n: "Insurance",
      k: "underwriting claims actuarial broker reinsurance policy",
      hook: "Claims and underwriting decisions are high-volume, individually consequential, and increasingly required to be explainable to a regulator on request.",
      where: "Claims triage, fraud signals, and first-pass risk pricing.",
      need: "Model risk management for pricing and adjudication, plus adverse-action explainability.",
      gap: "AI for Underwriting and Claims",
    },
    {
      n: "Legal and professional services",
      k: "law firm contracts discovery consulting advisory accounting practice",
      hook: "Discovery and contract review scale with matter size, not with the hours available, and the work is precise enough that errors are expensive.",
      where: "Document review, clause extraction, and precedent retrieval across large corpora.",
      need: "Retrieval systems that cite their source, plus a working grasp of hallucination risk in a privileged context.",
      gap: "AI for Legal and Contract Review",
    },
    {
      n: "Public sector",
      k: "government council civil service local authority citizen defence defense municipal",
      hook: "Case backlogs grow because determination is manual and demand is not, and the fairness bar for a public body is higher than for a private one.",
      where: "Eligibility triage, case routing, and citizen-facing enquiry handling.",
      need: "Public-sector AI accountability, bias testing, and decisions that can be explained to the person affected.",
      gap: "AI in Public Services and Citizen Delivery",
    },
    {
      n: "Agriculture and agritech",
      k: "farming farm crops agritech yield soil livestock food production",
      hook: "Crop decisions are made at field scale on sampled evidence, and the window to act on a disease signal is measured in days.",
      where: "Disease detection from imagery, yield forecasting, and irrigation and input optimization.",
      need: "Computer vision on drone and satellite imagery, and models that hold up across seasons and geographies.",
      gap: "Agricultural AI and Remote Sensing",
    },
    {
      n: "Media and publishing",
      k: "publishing content broadcast news editorial streaming entertainment moderation",
      hook: "Content volume and provenance obligations are both rising, and moderation at scale is now a legal exposure rather than a housekeeping task.",
      where: "Moderation triage, rights and provenance tracking, and archive search.",
      need: "Multimodal classification, provenance tooling, and a clear position on synthetic content disclosure.",
      gap: "AI for Content Operations and Provenance",
    },
    {
      n: "Automotive and mobility",
      k: "vehicles cars oem mobility transport ev fleet warranty",
      hook: "Warranty and field-failure signals arrive scattered across dealers, telematics and service notes, long after the design decision that caused them.",
      where: "Warranty pattern detection, predictive service, and perception-system evaluation.",
      need: "Multimodal analysis and safety-case evidence for systems that operate in the physical world.",
      gap: "AI for Automotive Quality and Safety Cases",
    },
    {
      n: "Construction and real estate",
      k: "property built environment engineering infrastructure architecture site development",
      hook: "Overrun is discovered late because progress is reported rather than measured, and rework is the most expensive form of correction.",
      where: "Progress verification from site imagery, design clash detection, and schedule risk forecasting.",
      need: "Vision models tolerant of dust, weather and partial views, plus forecasting under sparse data.",
      gap: "AI for Construction Progress and Risk",
    },
  ],
  closing: {
    n: "Your sector is not here",
    hook: "The list is examples, not a boundary. The four conditions above are the actual answer.",
    where: "Run your highest-volume repeated decision against the four conditions. If it clears all four it is a candidate, whatever the industry.",
    need: "Describe the bottleneck and we will say whether AI is the right tool. Sometimes the honest answer is that it is a process problem.",
    gap: "Describe your bottleneck",
  },
};

export const stackCoverageSection = {
  label: "Built against your stack",
  paragraph:
    "Programs are designed around what you already run, not a reference architecture we prefer. If your stack is not listed, it is almost certainly still covered.",
  note: "All names and marks shown are the property of their respective owners. Their appearance here indicates coverage in our training, not partnership, affiliation or endorsement.",
  groups: [
    { g: "Frontier models", items: ["GPT", "Claude", "Gemini", "Llama", "Mistral", "Open-weight models"] },
    { g: "Cloud AI platforms", items: ["Azure OpenAI", "Amazon Bedrock", "Google Vertex AI", "Databricks", "Snowflake"] },
    { g: "Build frameworks", items: ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "LlamaIndex", "Hugging Face"] },
    { g: "Retrieval and data", items: ["Vector databases", "Feature stores", "Your data warehouse"] },
    { g: "Assistants in daily use", items: ["Copilot", "ChatGPT Enterprise", "Your own fine-tunes"] },
  ],
};

// dom: genai | ml | mlops | gov | applied | data
// roles: mle | genaie | mlops | ds | gov | prod | fn
export const catalogDomains = [
  ["all", "All disciplines"],
  ["genai", "Generative AI"],
  ["ml", "Machine learning"],
  ["mlops", "MLOps"],
  ["gov", "Governance"],
  ["applied", "Applied AI"],
  ["data", "Data foundations"],
];

export const catalogRoles = [
  ["all", "All roles"],
  ["mle", "ML engineer"],
  ["genaie", "GenAI engineer"],
  ["mlops", "MLOps engineer"],
  ["ds", "Data scientist"],
  ["gov", "Governance lead"],
  ["prod", "AI product manager"],
  ["fn", "Every function"],
];

export const catalogPrograms = [
  { t: "Generative AI (GenAI) Training", h: "24 - 32 hrs", d: "Build and deploy generative models including LLMs, diffusion models and transformer architectures.", dom: "genai", roles: ["genaie", "ds"], u: "generative-ai-training" },
  { t: "Retrieval Augmented Generation (RAG) Training", h: "12 - 24 hrs", d: "Build RAG pipelines combining vector databases with LLMs for grounded answers from enterprise knowledge.", dom: "genai", roles: ["genaie", "mle"], u: "retrieval-augmented-generation-rag-training" },
  { t: "Agentic AI Training", h: "20 - 40 hrs", d: "Design autonomous agents that reason, plan and execute multi-step tasks with tool integration and memory.", dom: "genai", roles: ["genaie", "prod"], u: "agentic-ai-training" },
  { t: "LLM Observability Training", h: "16 - 24 hrs", d: "Monitor, evaluate and optimize LLM behavior with observability practices that improve reliability.", dom: "genai", roles: ["mlops", "genaie"], u: "llm-observability-training" },
  { t: "MLOps for LLMs Training", h: "", d: "Operate LLM systems in production: versioning, rollout, cost control and incident response.", dom: "genai", roles: ["mlops", "genaie"], u: "mlops-for-llms-training" },
  { t: "AI Evaluation and Red-Teaming", h: "16 - 24 hrs", d: "Adversarial testing for LLM systems: jailbreaks, prompt injection, grounding failures and refusal behavior.", dom: "genai", roles: ["genaie", "gov"], isNew: true },
  { t: "Introduction to Machine Learning Training", h: "", d: "Foundations of supervised and unsupervised learning for teams new to modeling.", dom: "ml", roles: ["ds", "fn"], u: "introduction-to-machine-learning-training" },
  { t: "Machine Learning with Python Training", h: "40 - 48 hrs", d: "Implement ML pipelines in Python for classification, regression and clustering, through to deployment.", dom: "ml", roles: ["mle", "ds"], u: "machine-learning-with-python-training" },
  { t: "Machine Learning with Scikit-Learn Training", h: "", d: "Predictive modeling and evaluation workflows using the scikit-learn ecosystem.", dom: "ml", roles: ["mle", "ds"], u: "machine-learning-with-scikit-learn-training" },
  { t: "Machine Learning with TensorFlow Training", h: "", d: "Build, train and deploy models with TensorFlow across structured and unstructured data.", dom: "ml", roles: ["mle", "ds"], u: "machine-learning-with-tensorflow-training" },
  { t: "Machine Learning with R Training", h: "", d: "Statistical modeling and machine learning workflows for analytics teams working in R.", dom: "ml", roles: ["ds"], u: "machine-learning-with-r-training" },
  { t: "Machine Learning with MATLAB Training", h: "", d: "Modeling and simulation workflows for engineering teams already standardized on MATLAB.", dom: "ml", roles: ["ds", "mle"], u: "machine-learning-with-matlab-training" },
  { t: "Text Classification with Machine Learning Training", h: "", d: "Build and evaluate text classifiers for routing, tagging and document triage.", dom: "ml", roles: ["ds", "mle"], u: "text-classification-with-machine-learning-training" },
  { t: "AI Decision Support Systems Training", h: "16 - 24 hrs", d: "Build AI-powered decision support that strengthens forecasting, analysis and strategic decisions.", dom: "ml", roles: ["ds", "prod"], u: "ai-decision-support-systems-training" },
  { t: "ML Model Monitoring Training", h: "16 - 24 hrs", d: "Monitor models in production to detect drift, maintain performance and evidence fairness.", dom: "mlops", roles: ["mlops", "mle"], u: "ml-model-monitoring-training" },
  { t: "MLOps Foundations", h: "24 - 32 hrs", d: "The deployment layer beneath every other program: pipelines, registries, serving, CI/CD and rollback.", dom: "mlops", roles: ["mlops", "mle"], isNew: true },
  { t: "Artificial Intelligence (AI) Governance Training", h: "16 - 24 hrs", d: "Navigate global AI regulation, classify model risk and build transparent governance programs.", dom: "gov", roles: ["gov", "prod"], u: "artificial-intelligence-ai-governance-training" },
  { t: "Responsible Generative AI Training", h: "20 - 40 hrs", d: "Implement guardrails, bias detection and ethical frameworks for generative AI in production.", dom: "gov", roles: ["gov", "genaie"], u: "responsible-generative-ai-training" },
  { t: "AI Security and Risk Management Training", h: "", d: "Threat modeling, controls and risk management for deployed AI systems.", dom: "gov", roles: ["gov", "mlops"], u: "ai-security-and-risk-management-training" },
  { t: "AI for Compliance Managers Training", h: "", d: "AI governance and compliance obligations for the risk and compliance function.", dom: "gov", roles: ["gov"], u: "ai-for-compliance-managers-training" },
  { t: "EU AI Act Implementation", h: "12 - 20 hrs", d: "Working through classification, technical documentation and post-market monitoring duties, article by article.", dom: "gov", roles: ["gov", "prod"], isNew: true },
  { t: "ChatGPT Prompt Engineering Training", h: "16 - 24 hrs", d: "Design effective prompts with chain-of-thought, role framing and structured output techniques.", dom: "applied", roles: ["fn", "prod"], u: "chatgpt-prompt-engineering-training" },
  { t: "AI for Managers Training", h: "", d: "Strategic grounding in AI, ML and data science for leaders making build and buy decisions.", dom: "applied", roles: ["prod", "fn"], u: "ai-for-managers-training" },
  { t: "AI for Cybersecurity Professionals Training", h: "20 - 40 hrs", d: "Apply AI and ML to threat detection, anomaly identification and automated incident response.", dom: "applied", roles: ["mlops", "gov"], u: "ai-for-cybersecurity-professionals-training" },
  { t: "AI for HR Training", h: "", d: "Applying AI across recruitment, workforce analytics and employee experience, safely.", dom: "applied", roles: ["fn"], u: "artificial-intelligence-for-human-resource-training" },
  { t: "AI for Accountants Training", h: "", d: "AI for reconciliation, anomaly detection and financial analysis in finance teams.", dom: "applied", roles: ["fn"], u: "ai-for-accountants-training" },
  { t: "AI in Clinical Trials Training", h: "", d: "Applying AI and ML across trial design, recruitment and regulatory submission.", dom: "applied", roles: ["ds", "gov"], u: "ai-in-clinical-trials-training" },
  { t: "Artificial Intelligence for Logistics Training", h: "", d: "Machine learning and analytics applied to supply chain and logistics operations.", dom: "applied", roles: ["ds", "fn"], u: "artificial-intelligence-for-logistics-training" },
  { t: "Multi-Modal Vector Search Training", h: "16 - 24 hrs", d: "Build search across text, images and enterprise knowledge using multi-modal vector retrieval.", dom: "data", roles: ["mle", "genaie"], u: "multi-modal-vector-search-training" },
  { t: "Advanced Geospatial AI with Deep Learning Training", h: "", d: "Computer vision and spatial analytics applied to satellite and aerial imagery.", dom: "data", roles: ["ds", "mle"], u: "advanced-geospatial-ai-with-deep-learning-training" },
  { t: "Data Engineering for AI", h: "24 - 32 hrs", d: "The layer models depend on: quality, lineage, feature stores and the pipelines that feed retrieval.", dom: "data", roles: ["mle", "mlops"], isNew: true },
];

export const catalogSection = {
  eyebrow: { italic: "Catalog", text: "FILTER BY DISCIPLINE OR ROLE", count: "130 programs" },
  heading: { normal: "Instructor-led", italic: "AI programs,", after: "filtered to your team." },
  paragraph: "A selection from the live catalog. Combine a discipline and a role to narrow it.",
  emptyText: "No program matches that combination in this selection. The live catalog holds 130 AI programs, and we build custom programs where nothing fits.",
  allHref: "/corporate-training/artificial-intelligence",
};

export const rolePathsSection = {
  eyebrow: { italic: "Paths", text: "THE ORDER PROGRAMS ARE TAKEN IN", count: "7 role paths" },
  heading: { normal: "A catalog tells you what exists. A path tells you", italic: "what comes first." },
  paragraph:
    "The filters above return a set. They do not tell you the order to take it in, and order is most of the value: monitoring before deployment teaches nothing, and governance before a model exists is theory. These are the sequences we actually run, per role.",
  note: "Sequences are indicative, not fixed. Discovery establishes where a team already is, and a path usually starts partway along rather than at step one.",
  paths: [
    { r: "mle", n: "ML engineer", d: "Model building through to something that survives production traffic.", seq: ["Introduction to Machine Learning Training", "Machine Learning with Python Training", "ML Model Monitoring Training", "MLOps Foundations"] },
    { r: "genaie", n: "GenAI engineer", d: "LLM systems that stay grounded, get evaluated, and behave under adversarial input.", seq: ["Generative AI (GenAI) Training", "Retrieval Augmented Generation (RAG) Training", "AI Evaluation and Red-Teaming", "Agentic AI Training"] },
    { r: "mlops", n: "MLOps engineer", d: "The deployment layer, then the observability that keeps it honest.", seq: ["MLOps Foundations", "ML Model Monitoring Training", "LLM Observability Training", "MLOps for LLMs Training"] },
    { r: "ds", n: "Data scientist", d: "Statistical grounding, then modeling, then communicating a decision.", seq: ["Introduction to Machine Learning Training", "Machine Learning with Python Training", "Text Classification with Machine Learning Training", "AI Decision Support Systems Training"] },
    { r: "gov", n: "AI governance lead", d: "Frameworks first, then what they demand of a system in production.", seq: ["Artificial Intelligence (AI) Governance Training", "Responsible Generative AI Training", "EU AI Act Implementation", "AI Security and Risk Management Training"] },
    { r: "prod", n: "AI product manager", d: "Enough literacy to scope feasibly, enough governance to sequence responsibly.", seq: ["AI for Managers Training", "AI Decision Support Systems Training", "Artificial Intelligence (AI) Governance Training"] },
    { r: "fn", n: "Every function", d: "Safe daily use first, then whatever is specific to the function's own work.", seq: ["ChatGPT Prompt Engineering Training", "AI for Managers Training", "AI for HR Training", "AI for Accountants Training"] },
  ],
};

export const governanceSection = {
  eyebrow: { italic: "Governance", text: "FRAMEWORKS AND OBLIGATIONS", count: "6 frameworks" },
  heading: { normal: "Training aligned to the frameworks", italic: "you answer to." },
  paragraph:
    "Deployment now stalls on one question: can you govern it? Ungoverned AI is an enterprise risk rather than a missed opportunity, and training changes the risk arithmetic in three specific places.",
  frameworksLabel: "Frameworks these programs are built against",
  note: "Programs are framework-aligned skills training. Edstellar is not a certification body and does not issue framework certifications.",
  risks: [
    { i: "01", t: "Govern", d: "Teams who know how the frameworks actually work can classify a model's risk tier, document the controls around it, and produce evidence an auditor will accept. Untrained teams discover the requirement during the audit.", tag: "Classification and evidence" },
    { i: "02", t: "Validate", d: "Drift, bias, prompt injection and ungrounded output are all testable before release. Where evaluation and adversarial testing are routine engineering practice, models reach production proven rather than assumed.", tag: "Evaluation before release" },
    { i: "03", t: "Enable", d: "Shadow AI grows wherever staff have no sanctioned path. Broad enablement on approved tools, prompts and data handling replaces unmanaged tool use with adoption the organization can actually see.", tag: "Sanctioned adoption" },
  ],
  frameworks: [
    {
      n: "EU AI Act", m: "EU · phased from 2026",
      d: "Classifies systems by risk and attaches duties to the organization deploying them, not the vendor supplying the model. High-risk systems carry documentation, human oversight and post-market monitoring obligations, with penalty ceilings stated in the regulation itself.",
      asks: [["Classify", "Establish the risk tier of every system you deploy, and record why."], ["Document", "Technical documentation that exists before an audit, not after one."], ["Monitor", "Post-market monitoring that detects degradation in the field."]],
    },
    {
      n: "NIST AI RMF", m: "US · voluntary, live",
      d: "A voluntary framework structured around four functions: govern, map, measure and manage. It is not law, which is precisely why it has been adopted so widely as the working scaffolding for AI risk programs, including well outside the US.",
      asks: [["Govern", "Ownership, policy and accountability that survives staff turnover."], ["Measure", "Evaluation that produces evidence rather than confidence."], ["Manage", "A response path for when a model behaves badly in production."]],
    },
    {
      n: "ISO/IEC 42001", m: "Global · 2023",
      d: "The AI management system standard, and the one most often named when a customer or a board asks for certifiable assurance. It describes the system around the models rather than the models themselves, which is where most organizations are weakest.",
      asks: [["Scope", "Define which AI activities the management system covers."], ["Operate", "Repeatable processes rather than individual good practice."], ["Improve", "Internal audit and corrective action that actually runs."]],
    },
    {
      n: "ISO/IEC 23894", m: "Global · 2023",
      d: "Risk management guidance specific to AI, aligned to the general ISO 31000 vocabulary. Useful where an organization already runs a mature enterprise risk function and needs AI folded into it rather than handled separately.",
      asks: [["Align", "Fit AI risk into the enterprise risk register you already run."], ["Assess", "Identify risks that are specific to learned systems."], ["Treat", "Controls proportionate to the risk, and reviewed."]],
    },
    {
      n: "GDPR", m: "EU · live",
      d: "Predates the current wave but bites hard on it: lawful basis for training data, purpose limitation, and rights around automated decision-making that produces legal or similarly significant effects on a person.",
      asks: [["Basis", "A lawful basis for the data a model was trained on."], ["Explain", "Meaningful information about the logic of an automated decision."], ["Respect", "Rights of access, correction and objection that still work."]],
    },
    {
      n: "Sector rules", m: "Varies · overlay",
      d: "Financial services, healthcare, employment and public administration each add obligations on top of the horizontal frameworks. These usually bind earlier and harder than the AI-specific regimes, because they were already in force.",
      asks: [["Map", "Identify which sector rules already cover your use case."], ["Reconcile", "Resolve conflicts between sector rules and AI frameworks."], ["Evidence", "Meet the stricter of the two, and be able to show it."]],
    },
  ],
};

export const methodSection = {
  eyebrow: { italic: "Method", text: "FIVE STAGES, ONE LOOP", count: "5 stages" },
  heading: { normal: "How an AI capability program", italic: "actually runs." },
  paragraph: "Every engagement runs the same five stages, from capability baseline through to the refresh cycle.",
  loopNote: "Stage 05 feeds the next cycle: the gaps it measures become the next Discover",
  stages: [
    { ix: "01", t: "Discover", p: "We meet your CTO and L&D team to baseline what your data, engineering and product people can actually do today, against the roles you need them to fill. The output is a prioritized skill-gap report with objectives tied to business outcomes rather than course completions.", mods: "Week 1-2" },
    { ix: "02", t: "Design", p: "Programs are assembled against your model stack, your data, and the governance regime you operate under, then trainers are shortlisted from the vetted bench. Nothing is pulled off a shelf; the discovery output determines what the cohort actually covers.", mods: "Week 2-4" },
    { ix: "03", t: "Deliver", p: "Closed-cohort instructor-led sessions in your language and timezone, with GPU sandboxes, notebooks and retrieval or agent environments shipped alongside. No self-paced modules and no recorded substitutes.", mods: "Scheduled to your calendar" },
    { ix: "04", t: "Assess", p: "Pre and post technical assessments establish a measurable change in capability, benchmarked against role frameworks. Lab performance and applied outcomes are reported alongside, so the result is defensible to a board rather than a completion certificate.", mods: "Immediately after delivery" },
    { ix: "05", t: "Sustain", p: "Retrospectives, refresher modules and skill-refresh tracking keep the investment from decaying, and the measured gaps feed the next cycle. AI tooling moves quickly enough that a one-off program is a depreciating asset.", mods: "Quarterly" },
  ],
};
