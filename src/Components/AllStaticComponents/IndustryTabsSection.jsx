"use client";

import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Check,
  Landmark,
  Laptop,
  HeartPulse,
  Factory,
  Zap,
  Building2,
  ShoppingBag,
  Briefcase,
  Activity,
} from "lucide-react";

const iconMap = {
  Landmark,
  Laptop,
  HeartPulse,
  Factory,
  Zap,
  Building2,
  ShoppingBag,
  Briefcase,
  Activity,
};

function StatCard({ stat, statKey, animatedRef }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [shouldAnimate] = useState(() => !animatedRef.current.has(statKey));

  useEffect(() => {
    if (inView && shouldAnimate) {
      animatedRef.current.add(statKey);
    }
  }, [inView, shouldAnimate, statKey, animatedRef]);

  const numeric = parseFloat(stat.value);
  const isDecimal = stat.value.includes(".");

  return (
    <div
      ref={ref}
      className="rounded-lg border border-[#D8D9E3] bg-white p-3 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-2.5 text-[40px] font-bold leading-none text-[#215aff]">
        {shouldAnimate && inView ? (
          <>
            <CountUp end={numeric} duration={2} decimals={isDecimal ? 2 : 0} />
            {stat.suffix && <span className="text-[#A3B718]">{stat.suffix}</span>}
          </>
        ) : (
          <>
            {stat.value}
            {stat.suffix && <span className="text-[#A3B718]">{stat.suffix}</span>}
          </>
        )}
      </div>

      <p className="text-[16px] leading-7 text-[#3A3A3A]">{stat.title}</p>
    </div>
  );
}

export default function IndustryTabsSection({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const animatedStatsRef = useRef(new Set());
  if (!data || !data.industries?.length) return null;
  const tab = data.industries[activeTab];

  return (
    <section className="bg-[#fff]">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[1050px] text-center">
          <h2 className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3A3A3A] lg:text-[36px]">
            {data.heading}
          </h2>
          <p className="mx-auto max-w-[900px] text-[16px] leading-7 text-[#3a3a3a]">{data.subheading}</p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mb-8 flex flex-wrap justify-center gap-3">
          {data.industries.map((item, index) => {
            const TabIcon = item.icon;

            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 rounded-full border-[1.5px] px-5 py-2.5 text-[16px] font-bold transition-all duration-300 ${
                    activeTab === index
                    ? "border-[#2E316F] bg-[#2E316F] text-white"
                    : "border-[#DCDEE5] bg-[#FCFCFC] text-[#596074] hover:border-[#DCDEE5] hover:bg-[#F1F1F1]"
                }`}
                >
                {TabIcon}
                {item.name}
               </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="rounded-xl bg-[#eef0f4] p-4 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:items-start">
            {/* Left */}
            <div>
              <div className="mb-3">
                <h3 className="text-[20px] font-semibold text-[#3A3A3A]">
                    {tab.title}
                </h3>
              </div>

              <p className="mb-4 text-[16px] leading-7 text-[#3A3A3A]">{tab.description}</p>

              <div>
                {tab.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 border-b border-[#2E2E2E] pb-1.5 mb-1.5"
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A3B718]">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] leading-7 text-[#1a1a2a]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid gap-4 sm:grid-cols-2">
              {tab.stats.map((stat, index) => {
                const statKey = `${activeTab}-${index}-${stat.title}`;

                return (
                  <StatCard
                    key={statKey}
                    stat={stat}
                    statKey={statKey}
                    animatedRef={animatedStatsRef}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}