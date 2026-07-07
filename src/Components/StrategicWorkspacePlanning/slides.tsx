import Image from "next/image";

type Props = {
  data: {
    heading: string;
    description: string;
    quote: string;
    avatar: string;
    name: string;
    company: string;
  };
};

export default function Slides({ data }: Props) {
  return (
    <section className="bg-[#F5F7FC] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_680px] lg:items-start">
        {/* Left */}
        <div>
          <h2 className="text-[36px] mb-4 font-semibold leading-[44px] text-[#3a3a3a]">
            {data.heading}
          </h2>

          <p className="text-[16px] leading-[26px] text-[#3a3a3a]">
            {data.description}
          </p>
        </div>

        {/* Right */}
        <div className="rounded-xl bg-white p-10 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
          <p className="border-b border-[#E8EAF1] font-medium pb-4 text-[20px] italic leading-[28px] text-[#3a3a3a]">
            "{data.quote}"
          </p>

          <div className="mt-5 flex items-center gap-4">
            <Image
              src={data.avatar}
              alt={data.name}
              width={52}
              height={52}
              className="rounded-full"
            />

            <div>
              <h4 className="text-[16px] font-semibold text-[#3a3a3a]">
                {data.name}
              </h4>

              <p className="text-[14px] text-[#5c5e6e]">
                {data.company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}