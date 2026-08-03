import Link from "next/link";
import { notFound } from "next/navigation";
import { categorydata } from "@/data/categorydata";

import CourseHero from "@/Components/CourseComponents/CourseHero";
import CourseInfoBar from "@/Components/CourseComponents/CourseInfoBarSection";
import ContactFormSection from "@/Components/CourseComponents/ContactFormSection";
import StickyFooter from "@/Components/CourseComponents/StickyFooter";
import RelatedDomainsSection from "@/Components/CategoryComponents/RelatedDomainsSection";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryCourses = categorydata.filter(
    (course) => course.category === category
  );

  if (!categoryCourses.length) {
    notFound();
  }

  return (
    <>
      <CourseHero {...categoryCourses[0].hero} />
      <RelatedDomainsSection />
      <ContactFormSection />
      <StickyFooter />
    </>
  );
}