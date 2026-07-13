import CaseStudiesCard from "@/Components/resources/CaseStudiesCard";
import Link from "next/link";
import CaseStudies from "@/data/CaseStudies.json";

function page() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="grid grid-cols-[1fr_420px] gap-10">
            <div>
              <div className="relative">
                <img
                  src="https://cdn.prod.website-files.com/6484144ee6dda9d4b9ab7f57/64ad5c0ce36a0585e4dc7a8b_Group%201000001896%20(1).webp"
                  alt="Invensis Technologies"
                  className="h-[450px] w-full object-cover"
                />

                <h1 className="absolute bottom-8 left-8 right-8 text-4xl font-semi-bold text-white">
                  Invensis Technologies Uses Edstellar to Streamline Training
                  Process
                </h1>
              </div>
              <div className="space-x-2">
                <Link href="/">Home</Link> &#10140;
                <Link href="/resources">Resources</Link> &#10140;
                <Link href="/resources/case-studies">Case Studies</Link>{" "}
                &#10140;
                <p className="">
                  {" "}
                  Invensis Technologies Uses Edstellar to Streamline Training
                  Process
                </p>
                <br />
                <div>
                  <h2 className="text-3xl mb-4">
                    {CaseStudies.sections[0].title}
                  </h2>
                  {CaseStudies.sections[0].content.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <CaseStudiesCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
