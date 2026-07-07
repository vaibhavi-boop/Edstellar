import Image from "next/image";

export default function InsightsVer({
  title,
  subtitle,
  description,
  image,
  features,
}) {
  return (
    <section className="bg-[#F5F6F8] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div>
            <h2 className="text-4xl mb-4 font-bold leading-tight text-[#3a3a3a]">
              {title}
            </h2>

            <p className="mb-5 text-xl font-semibold text-[#2B2B2B]">
              {subtitle}
            </p>

            <p className="mb-5 text-base leading-6 text-gray-600">
              {description}
            </p>

            <div className="relative h-[420px] overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right */}

          <div>
            {features.map((item, index) => (
              <div
                key={index}
                className={`relative flex gap-5 py-4 ${
                  index !== features.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
              >
                <span
                  className={`absolute left-0 top-4 h-12 w-1 rounded-full ${item.color}`}
                ></span>

          {/* Content */}
            <div className="pl-6">
              <h3 className="text-xl font-bold text-[#3a3a3a]">
                {item.title}
              </h3>

            <p className="text-base leading-7 text-[#3a3a3a]">
             {item.description}
            </p>
          </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}