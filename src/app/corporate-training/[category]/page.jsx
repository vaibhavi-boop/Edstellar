import { notFound } from "next/navigation";
import { categorydata } from "@/data/categorydata";

import CourseHero from "@/Components/CourseComponents/CourseHero";
import HeroStats from "@/Components/CourseComponents/HeroStatsSection";
import ClientsLogosSection from "@/Components/CourseComponents/ClientsLogosSection";
import StickyCourseTabs from "@/Components/CourseComponents/StickyTabsSection";
import ExpandSection from "@/Components/CourseComponents/ExpandSection";

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
      <HeroStats data={categoryCourses[0].heroStatsData} />
      <ClientsLogosSection data={categoryCourses[0].ClientsLogosSectionData} />
      <StickyCourseTabs data={categoryCourses[0].StickyTabsData} />
      <ExpandSection data={categoryCourses[0].ExpandSectionData} />
    </>
  );
}