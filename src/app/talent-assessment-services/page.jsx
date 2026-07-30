import HeroSection from "@/Components/AllStaticComponents/HeroSection";
import StatsSection from "@/Components/AllStaticComponents/StatsSection";
import MostRequestedAssessment from "@/Components/AllStaticComponents/MostRequestedAssessment";
import NumberSection from "@/Components/AllStaticComponents/NumberSection";
import AssessmentSection from "@/Components/AllStaticComponents/AssessmentSection";
import TabsSection from "@/Components/AllStaticComponents/TabsSection";
import TalentAssessmentCardSection from "@/Components/AllStaticComponents/TalentAssessmentCardSection";
import VerticleLineSection from "@/Components/AllStaticComponents/VerticleLineSection";
import TimelineSection from "@/Components/AllStaticComponents/TimelineSection";
import IndustrySection from "@/Components/AllStaticComponents/IndustrySection";
import ToolsCardSection from "@/Components/AllStaticComponents/ToolsCardSection";
import SlidesSection from "@/Components/AllStaticComponents/SlidesSection";
import GridCards from "@/Components/AllStaticComponents/GridCards";
import FaqSection from "@/Components/AllStaticComponents/FaqSection";
import BlogSection from "@/Components/AllStaticComponents/BlogSection";

// Import JSON data
import pageData from "@/data/TalentAssessment.json";

export default function Home() {
  return (
    <>
      <HeroSection
        data={pageData.HeroSectionData}
        breadcrumbs={pageData.BreadcrumbData}
      />
      <StatsSection items={pageData.stats} />
      <MostRequestedAssessment data={pageData.MostRequestedAssessmentData} />
      <NumberSection data={pageData.NumberSectionData} />
      <AssessmentSection data={pageData.AssessmentSectionData} />
      <TabsSection data={pageData.TabsSectionData} />
      <TalentAssessmentCardSection data={pageData.TalentAssessmentCardData} />
      <VerticleLineSection data={pageData.VerticleLineSectionData} />
      <TimelineSection data={pageData.TimelineSectionData} />
      <IndustrySection data={pageData.IndustryData} />
      <ToolsCardSection data={pageData.ToolsCardData} />
      <SlidesSection data={pageData.SlidesSectionData} />
      <GridCards data={pageData.GridCardsData} />
      <FaqSection data={pageData.FAQSectionData} />
      <BlogSection data={pageData.BlogSectionData} />
    </>
  );
}
