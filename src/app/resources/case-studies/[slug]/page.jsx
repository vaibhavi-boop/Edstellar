import CaseStudiesCard from "@/Components/resources/CaseStudiesCard";
import CaseStudies from "@/data/CaseStudies.json";
import Courses from "@/Components/resources/Courses";
import CaseStudiesCTA from "@/Components/resources/CaseStudiesCTA";
import Breadcrumbs from "@/Components/GlobalComponents/Breadcrumbs";

function page() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <div>
                <div className="relative">
                  <img
                    src={CaseStudies.image}
                    alt={CaseStudies.title}
                    className="h-[450px] w-full rounded-xl object-cover"
                  />

                  <h1 className="absolute text-4xl bottom-4 left-4 right-4 font-semibold text-white md:bottom-8 md:left-8 md:right-8 md:">
                    {CaseStudies.title}
                  </h1>
                </div>
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Case Studies", href: "/resources/case-studies" },
                    { label: CaseStudies.title },
                  ]}
                />
                <br />
                <div>
                  {CaseStudies.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h2 className="my-6  text-3xl font-semibold">
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
                          className="py-6 my-6 border-l-4 -400 pl-4 text-[#3a3c7e] italic bg-[#f3f0fb] font-medium"
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

      <Courses />
      <CaseStudiesCTA />
    </div>
  );
}

export default page;
