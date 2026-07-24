import HeroSection from "@/Components/AllStaticComponents/HeroSection";
import StatsSection from "@/Components/AllStaticComponents/StatsSection";
import LogoSection from "@/Components/AllStaticComponents/LogoSection";
import StaticCardSection from "@/Components/AllStaticComponents/StaticCardSection";
import GridCardSection from "@/Components/AllStaticComponents/GridCardSection";
import TabsSection from "@/Components/AllStaticComponents/TabsSection";
import NumberSection from "@/Components/AllStaticComponents/NumberSection";
import VerticleLineSection from "@/Components/AllStaticComponents/VerticleLineSection";
import SlidesSection from "@/Components/AllStaticComponents/SlidesSection";
import ServiceSlidesSection from "@/Components/AllStaticComponents/ServiceSlidesSection";
import FaqSection from "@/Components/AllStaticComponents/FaqSection";
import CTASection from "@/Components/AllStaticComponents/CTASection";
import BlogSection from "@/Components/AllStaticComponents/BlogSection";

// Import JSON data
import pageData from "@/data/StrategicWorkflowPlanning.json";

export default function Home() {
  return (
    <>
      <HeroSection 
        data={pageData.HeroSectionData} 
        breadcrumbs={pageData.BreadcrumbData} 
      />
      <StatsSection items={pageData.stats} />
      <LogoSection data={pageData.LogoSectionData} />
      <StaticCardSection data={pageData.StaticCardSectionData} />
      <GridCardSection data={pageData.GridCardSectionData} />
      <TabsSection
        data={pageData.TabsSectionData}
        centered={false}
        showDescription={false}
      />
      <NumberSection data={pageData.NumberSectionData} />
      <VerticleLineSection data={pageData.VerticleLineSectionData} />
      <SlidesSection data={pageData.SlidesSectionData} />
      <ServiceSlidesSection data={pageData.ServiceSlidesSectionData} />
      <FaqSection data={pageData.FAQSectionData} />
      <CTASection data={pageData.CTASectionData} />
      <BlogSection data={pageData.BlogSectionData} />
    </>
  );
}