import HeroSection from "@/Components/AllStaticComponents/HeroSection";
import StatsSection from "@/Components/AllStaticComponents/StatsSection";
import VerticleIconSection from "@/Components/AllStaticComponents/VerticleIconSection";
import TabsSection from "@/Components/AllStaticComponents/TabsSection";
import TimelineSection from "@/Components/AllStaticComponents/TimelineSection";
import VerticleLineSection from "@/Components/AllStaticComponents/VerticleLineSection";
import GridCardSection from "@/Components/AllStaticComponents/GridCardSection";
import CTASection from "@/Components/AllStaticComponents/CTASection";
import ServiceSlidesSection from "@/Components/AllStaticComponents/ServiceSlidesSection";
import FaqSection from "@/Components/AllStaticComponents/FaqSection";

import pageData from "@/data/DigitalLearningEcosystem.json";

export default function Home() {
  return (
    <>
      <HeroSection data={pageData.heroSection} breadcrumbs={pageData.breadcrumb} />
      <StatsSection items={pageData.stats} />
      <VerticleIconSection data={pageData.verticalIconSection} />
      <TabsSection
        data={pageData.tabsSection}
        centered={true}
        showDescription={true}
      />
      <TimelineSection data={pageData.timelineSection} />
      <VerticleLineSection data={pageData.verticalLineSection} />
      <GridCardSection data={pageData.gridCardSection} />
      <CTASection data={pageData.ctaSection} />
      <FaqSection data={pageData.faqSection} />
      <ServiceSlidesSection data={pageData.serviceSlidesSection} />
    </>
  );
}