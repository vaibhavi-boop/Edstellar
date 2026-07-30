import { courses } from "@/data/mlMonitoringData";
import allCourses from "@/data/courses.json";
import { notFound } from "next/navigation";
import CourseHero from "@/Components/CourseComponents/CourseHero";
import CourseInfoBar from "@/Components/CourseComponents/CourseInfoBarSection";
import ClientsLogosSection from "@/Components/CourseComponents/ClientsLogosSection";
import StickyTabs from "@/Components/CourseComponents/StickyTabsSection";
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
import CapabilitySection from "@/Components/CourseComponents/CapabilitySection";
import TrainersSection from "@/Components/CourseComponents/TrainersSection";
import StickyFooter from "@/Components/CourseComponents/StickyFooter";
import QuoteForm from "@/Components/CourseComponents/QuoteForm";

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
      {course.hero && <CourseHero {...course.hero} />}
      <CourseInfoBar data={course.courseInfoBardata} />
      <ClientsLogosSection data={course.ClientsLogosSectionData} />
      <StickyTabs data={course.StickyTabsData} />
      {course.whatIs && <WhatIsSection {...course.whatIs} />}
      <LifecycleSection />
      <div className="relative z-[10]">
        <SkillsSection />
        <OutcomesSection />
        <div className="absolute top-10 bottom-10 left-1/2  w-full max-w-[1280px] -translate-x-1/2 pointer-events-none ">
          <QuoteForm />
        </div>
      </div>
      <CurriculumSection />
      <AudienceSection />
      <ModesSection />
      <CapabilitySection />
      <WhyEdstellarSection />
      <TestimonialsSection />
       <TrainersSection />
      <CertificateSection />
      <CourseFAQSection />
      <RelatedApplySection />
      <ContactFormSection />
      <StickyFooter />
    </main>
  );
}
