import { courses } from "@/data/mlMonitoringData";
import allCourses from "@/data/courses.json";
import { notFound } from "next/navigation";
import CourseSideNav from "@/Components/CourseComponents/CourseSideNav";
import CourseHero from "@/Components/CourseComponents/CourseHero";
import WhatIsSection from "@/Components/CourseComponents/WhatIsSection";
import LifecycleSection from "@/Components/CourseComponents/LifecycleSection";
import SkillsSection from "@/Components/CourseComponents/SkillsSection";
import OutcomesSection from "@/Components/CourseComponents/OutcomesSection";
import CurriculumSection from "@/Components/CourseComponents/CurriculumSection";
import AudienceSection from "@/Components/CourseComponents/AudienceSection";
import ModesSection from "@/Components/CourseComponents/ModesSection";
import WhyEdstellarSection from "@/Components/CourseComponents/WhyEdstellarSection";
import TestimonialsSection from "@/Components/CourseComponents/TestimonialsSection";
import CertificateSection from "@/Components/CourseComponents/CertificateSection";
import CourseFAQSection from "@/Components/CourseComponents/CourseFAQSection";
import RelatedApplySection from "@/Components/CourseComponents/RelatedApplySection";
import ContactFormSection from "@/Components/CourseComponents/ContactFormSection";

export default async function CoursePage({ params }) {
  const { category, slug } = await params;

  const course = courses.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!course) {
    const basic = allCourses.find(
      (item) => item.category === category && item.slug === slug,
    );

    if (!basic) notFound();

    return (
      <main className="container py-28">
        <h1 className="font-bold text-[clamp(30px,4vw,50px)] leading-[1.08] tracking-[-0.03em]">
          {basic.title}
        </h1>
        <p className="mt-4 text-[var(--muted)] text-[15px] leading-[1.7]">
          Content for this course is coming soon.
        </p>
      </main>
    );
  }

  return (
    <main>
      <CourseSideNav />
      {course.hero && <CourseHero {...course.hero} />}
      {course.whatIs && <WhatIsSection {...course.whatIs} />}
      <LifecycleSection />
      <SkillsSection />
      <OutcomesSection />
      <CurriculumSection />
      <AudienceSection />
      <ModesSection />
      <WhyEdstellarSection />
      <TestimonialsSection />
      <CertificateSection />
      <CourseFAQSection />
      <RelatedApplySection />
      <ContactFormSection />
    </main>
  );
}
