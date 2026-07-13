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
                  className="h-[450px] w-full object-cover rounded-xl"
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
                  {CaseStudies.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-10">
                      <h2 className="mb-4 text-3xl font-semibold">
                        {section.title}
                      </h2>

                      {section.content?.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="mb-2">
                          {paragraph}
                        </p>
                      ))}

                      {/* Company Details */}
                      {section.companyDetails && (
                        <div className="mt-6 rounded-lg bg-gray-100 p-6">
                          <p>
                            <strong>Headquarters:</strong>{" "}
                            {section.companyDetails.headquarters}
                          </p>
                          <p>
                            <strong>Website:</strong>{" "}
                            {section.companyDetails.website}
                          </p>
                          <p>
                            <strong>Established:</strong>{" "}
                            {section.companyDetails.established}
                          </p>
                          <p>
                            <strong>Company Size:</strong>{" "}
                            {section.companyDetails.companySize}
                          </p>
                          <p>
                            <strong>Training Team Size:</strong>{" "}
                            {section.companyDetails.trainingTeamSize}
                          </p>
                          <p>
                            <strong>Courses Trained:</strong>{" "}
                            {section.companyDetails.coursesTrained.join(", ")}
                          </p>
                          <p>
                            <strong>Industry:</strong>{" "}
                            {section.companyDetails.industry}
                          </p>
                        </div>
                      )}

                      {/* Quotes */}
                      {section.quotes?.map((quote, quoteIndex) => (
                        <blockquote
                          key={quoteIndex}
                          className="my-6 border-l-4 border-[#c8e130]-400 pl-4 text-[#22295ab3] italic bg-[#f3f0fb]]"
                        >
                          "{quote.text}"
                          {quote.author && (
                            <footer className="mt-2 not-italic font-medium">
                              — {quote.author}
                              {quote.designation && `, ${quote.designation}`}
                            </footer>
                          )}
                        </blockquote>
                      ))}
                    </div>
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
