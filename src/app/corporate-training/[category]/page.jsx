import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categorydata,
  whyheading,
  whyStats,
  why,
  alsoFromEdstellar,
  faqSection,
} from "@/data/categorydata";

import CourseHero from "@/Components/CourseComponents/CourseHero";
import WhyEdstellarSection from "@/Components/CourseComponents/WhyEdstellarSection";
import AlsoFromEdstellar from "@/Components/CourseComponents/AlsoFromEdstellar";
import CourseFAQSection from "@/Components/CourseComponents/CourseFAQSection";

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
      />
    </>
  );
}
