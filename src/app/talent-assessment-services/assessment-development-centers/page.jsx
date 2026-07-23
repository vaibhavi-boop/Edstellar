import HeroSection from "@/Components/AllStaticComponents/HeroSection";
import ParagraphSection from "@/Components/AllStaticComponents/ParagraphSection";
import VerticleIconSection from "@/Components/AllStaticComponents/VerticleIconSection";
import StatsSection from "@/Components/AllStaticComponents/StatsSection";
import StaticCardSection from "@/Components/AllStaticComponents/StaticCardSection";
import AssessmentSection from "@/Components/AllStaticComponents/AssessmentSection";
import TimelineSection from "@/Components/AllStaticComponents/TimelineSection";
import TabsSection from "@/Components/AllStaticComponents/TabsSection";
import IndustryTabsSection from "@/Components/AllStaticComponents/IndustryTabsSection";
import VerticleLineSection from "@/Components/AllStaticComponents/VerticleLineSection";
import SlidesStatsSection from "@/Components/AllStaticComponents/SlidesStatsSection";
import LogoSection from "@/Components/AllStaticComponents/LogoSection";
import SlidesSection from "@/Components/AllStaticComponents/SlidesSection";
import CTASection from "@/Components/AllStaticComponents/CTASection";
import FaqSection from "@/Components/AllStaticComponents/FaqSection";
import ServiceSlidesSection from "@/Components/AllStaticComponents/ServiceSlidesSection";

// Import JSON data
import pageData from "@/data/AssessmentDevelopmentCenters.json";

export default function Home() {
  return (
    <>
      <HeroSection data={pageData.HeroSectionData} breadcrumbs={pageData.BreadcrumbData} />
      <ParagraphSection data={pageData.ParagraphSectionData} />
      <VerticleIconSection data={pageData.VerticleIconSectionData} />
      <StatsSection items={pageData.stats} />
      <StaticCardSection data={pageData.StaticCardSectionData} />
      <TabsSection data={pageData.TabsSectionData} />
      <AssessmentSection data={pageData.AssessmentSectionData} />
      <TimelineSection data={pageData.TimelineSectionData} />
      <TabsSection data={pageData.TabsSectionDataSub} />
      <IndustryTabsSection data={pageData.IndustryTabsSectionData} />
      <VerticleLineSection data={pageData.VerticleLineSectionData} />
      <SlidesStatsSection data={pageData.SlidesStatsSectionData} />
      <LogoSection data={pageData.LogoSectionData} />
      <SlidesSection data={pageData.SlidesSectionData} />
      <CTASection data={pageData.CTASectionData} />
      <FaqSection data={pageData.FAQSectionData} />
      <ServiceSlidesSection data={pageData.ServiceSlidesSectionData} />
    </>
  );
}