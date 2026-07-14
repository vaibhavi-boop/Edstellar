import {
  Target,
  Clock3,
  Cpu,
  Briefcase,
  Database,
  Users,
} from "lucide-react";

const StaticCardSectionData = {
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

export default StaticCardSectionData;