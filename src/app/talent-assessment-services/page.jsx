import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>
      <section className="bg-[#22295a]">
        <div className="container">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-medium text-white mb-8 ">
                Corporate Talent Assessment Services for Workforce Readiness
              </h1>
              <p className="text-white mb-8">
                Edstellars Talent Assessments, powered by our Talent Diagnostics
                methodology, give CHROs and L&D Leaders the objective, validated
                capability insights they need, replacing guesswork with
                evidence. Prioritize capability investments across revenue,
                throughput, attrition, and succession risk.
              </p>
              <Link
                className="rounded-[8px] bg-[#c8e130] px-6 py-3 text-center font-medium text-[#22295a] no-underline transition-all duration-300"
                href="/"
              >
                Request a Diagonostic Consultation
              </Link>
            </div>
            <div>
              <Image
                src="https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/69dcdafb1fdc000c350e31a3_Corporate%20Talent%20Assessment%20Services%20for%20Workforce%20Readiness.webp"
                alt=""
                width={520}
                height={520}
                className="rounded"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
