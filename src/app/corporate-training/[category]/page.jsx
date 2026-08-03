import { notFound } from "next/navigation";
import {
  categorydata,
  whyheading,
  whyStats,
  why,
  alsoFromEdstellar,
  faqSection,
  WhyNow as whyNowData,
  capabilityTransformation,
} from "@/data/categorydata";

import CourseHero from "@/Components/CourseComponents/CourseHero";
import HeroStats from "@/Components/CourseComponents/HeroStatsSection";
import ClientsLogosSection from "@/Components/CourseComponents/ClientsLogosSection";
import StickyCourseTabs from "@/Components/CourseComponents/StickyTabsSection";
import ExpandSection from "@/Components/CourseComponents/ExpandSection";
import CourseInfoBar from "@/Components/CourseComponents/CourseInfoBarSection";
import ContactFormSection from "@/Components/CourseComponents/ContactFormSection";
import StickyFooter from "@/Components/CourseComponents/StickyFooter";
import RelatedDomainsSection from "@/Components/CategoryComponents/RelatedDomainsSection";
import WhyEdstellarSection from "@/Components/CourseComponents/WhyEdstellarSection";
import AlsoFromEdstellar from "@/Components/CourseComponents/AlsoFromEdstellar";
import CourseFAQSection from "@/Components/CourseComponents/CourseFAQSection";
import ScrollProgressBar from "@/Components/CourseComponents/ScrollProgressBar";
import WhyNow from "@/Components/CategoryComponents/WhyNow";
import CapabilityTransformation from "@/Components/CategoryComponents/CapabilityTransformation";
export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryCourses = categorydata.filter(
    (course) => course.category === category,
  );

  if (!categoryCourses.length) {
    notFound();
  }

  return (
    <>
      <CourseHero {...categoryCourses[0].hero} />
      <HeroStats data={categoryCourses[0].heroStatsData} />
      <ClientsLogosSection data={categoryCourses[0].ClientsLogosSectionData} />
      <StickyCourseTabs data={categoryCourses[0].StickyTabsData} />
      <ExpandSection data={categoryCourses[0].ExpandSectionData} />
      <WhyNow data={whyNowData} />
      <CapabilityTransformation data={capabilityTransformation} />
      <WhyEdstellarSection
        whyheading={whyheading}
        whyStats={whyStats}
        why={why}
      />
      <section>
        {alsoFromEdstellar && (
          <AlsoFromEdstellar
            heading={alsoFromEdstellar.heading}
            alsoFrom={alsoFromEdstellar.alsoFrom}
          />
        )}
      </section>
      <CourseFAQSection
        className="bg-[var(--paper-warm)] mt-16"
        faqSection={faqSection}
      />{" "}
      <RelatedDomainsSection />
      <ContactFormSection
        heading={{
          before: "Ask us about",
          em: "AI training",
          after: "for your teams.",
        }}
        paragraph="Tell us which teams you are training and what they need to be able to do. Anything you filtered in the catalog comes through with your message."
      />
      <StickyFooter />
      <ScrollProgressBar />
    </>
  );
}
