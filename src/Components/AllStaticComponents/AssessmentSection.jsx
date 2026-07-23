import {
  UserRound,
  LayoutGrid,
  ChartColumn,
  ClipboardList,
  Users,
  ShieldCheck,
  BarChart3,
  FileText,
  Monitor,
  Video,
  Globe,
  GraduationCap,
  Target,
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
  Landmark,
  Laptop,
  HeartPulse,
  Factory,
  Zap,
  ShoppingBag,
  Briefcase,
  Activity,
} from "lucide-react";

const iconMap = {
  UserRound,
  LayoutGrid,
  ChartColumn,
  ClipboardList,
  Users,
  ShieldCheck,
  BarChart3,
  FileText,
  Monitor,
  Video,
  Globe,
  GraduationCap,
  Target,
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
  Landmark,
  Laptop,
  HeartPulse,
  Factory,
  Zap,
  ShoppingBag,
  Briefcase,
  Activity,
};

export default function AssessmentSection({ data }) {
  return (
    <section>
      <div className="container">
        {data.map((section, index) => (
          <div
            key={index}
            className="mb-6 overflow-hidden rounded-xl border border-[#00000047] bg-white"
          >
            {/* Top Section */}
            <div
              className={`grid lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <img
                src={section.image}
                alt={section.alt}
                title={section.title}
                className="h-full w-full object-cover"
              />

              {/* Content */}
              <div className="md:p-10 p-5">
                <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3A3A3A] lg:text-[36px]">
                  {section.title}
                </h2>

                <p className="text-[16px] leading-[28px] text-[#3A3A3A]">
                  {section.description}
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid border-t-[0.5px] border-t-[#00000021] sm:grid-cols-1 lg:grid-cols-3">
              {section.cards.map((card, index) => {
                const Icon = iconMap[card.icon];

                return (
                  <div key={index} className="p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {/* Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#F4F7D4]">
                        {Icon && <Icon size={22} strokeWidth={1.8} />}
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="mb-3 text-[18px] font-semibold leading-[26px] text-[#3A3A3A]">
                          {card.title}
                        </h3>

                        <p className="text-[16px] leading-[24px] text-[#3A3A3A]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}