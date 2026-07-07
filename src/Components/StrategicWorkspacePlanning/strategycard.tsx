import { ReactNode } from "react";
import { Check, ArrowRight } from "lucide-react";

type StrategyItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

type StrategyCardProps = {
  heading: string;
  description: string;
  items: StrategyItem[];
};

export default function StrategyCard({
  heading,
  description,
  items,
}: StrategyCardProps) {
  return (
    <section className="bg-[#F7F7F7] px-[40px] py-[60px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="mx-auto max-w-[950px] text-center">
          <h2 className="text-[36px] font-bold leading-[1.12] text-[#3a3a3a]">
            {heading}
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-[#5F6368]">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col
                rounded-[8px]
                border-l-[4px]
                border-[#D94848]
                bg-white
                p-5
                shadow-[0_2px_16px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-[5px]
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]
              "
            >
              {/* Icon */}
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#FFF2F2] text-[#D94848]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-semibold leading-[1.3] text-[#1c1c1c]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[16px] leading-7 text-[#5F6368]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
        <p className="mb-5 max-w-[600px] text-center text-[16px] leading-7 text-[#5F6368]">
            If any of these resonate, you are in the right place. Our strategic workforce planning consulting practice is built to address them through governed frameworks, measurable outcomes, and consultant-led delivery.
          </p>
        
          <button className="group inline-flex items-center gap-3 rounded-lg bg-[#D7F11E] px-6 py-3 text-[16px] font-medium text-black transition hover:bg-lime-300">
              Request a Consultation
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
          </button>
          </div>
      </div>
    </section>
  );
}