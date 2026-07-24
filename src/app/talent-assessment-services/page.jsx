import HeroSection from "@/Components/AllStaticComponents/HeroSection";
import StatsSection from "@/Components/AllStaticComponents/StatsSection";
import MostRequestedAssessment from "@/Components/AllStaticComponents/MostRequestedAssessment";
import NumberSection from "@/Components/AllStaticComponents/NumberSection";
import AssessmentSection from "@/Components/AllStaticComponents/AssessmentSection";
import TabsSection from "@/Components/AllStaticComponents/TabsSection";
import VerticleLineSection from "@/Components/AllStaticComponents/VerticleLineSection";
import TimelineSection from "@/Components/AllStaticComponents/TimelineSection";
import SlidesSection from "@/Components/AllStaticComponents/SlidesSection";
import FaqSection from "@/Components/AllStaticComponents/FaqSection";
import BlogSection from "@/Components/AllStaticComponents/BlogSection";

// Import JSON data
import pageData from "@/data/TalentAssessment.json";

export default function Home() {
  return (
    <>
      <HeroSection data={pageData.HeroSectionData} breadcrumbs={pageData.BreadcrumbData} />
      <StatsSection items={pageData.stats} />
      <MostRequestedAssessment data={pageData.MostRequestedAssessmentData} />
      <NumberSection data={pageData.NumberSectionData} />
      <AssessmentSection data={pageData.AssessmentSectionData} />
      <TabsSection data={pageData.TabsSectionData} />
      <VerticleLineSection data={pageData.VerticleLineSectionData} />
      <TimelineSection data={pageData.TimelineSectionData} />
      <SlidesSection data={pageData.SlidesSectionData} />
      <FaqSection data={pageData.FAQSectionData} />
      <BlogSection data={pageData.BlogSectionData} />
    </>
  );
}
