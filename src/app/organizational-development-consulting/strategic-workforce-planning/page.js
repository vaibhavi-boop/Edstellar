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

import {
  HeroSectionData,
  BreadcrumbData,
  StatsData,
  LogoSectionData,
  StaticCardSectionData,
  GridCardSectionData,
  TabsSectionData,
  NumberSectionData,
  VerticleLineSectionData,
  SlidesSectionData,
  ServiceSlidesSectionData,
  FAQSectionData,
  CTASectionData,
} from "@/app/Data/Strategic_Workflow_Planning_Data";

export default function Home() {
  return (
    <>
      <HeroSection data={HeroSectionData} breadcrumbs={BreadcrumbData} />
      <StatsSection items={StatsData} />
      <LogoSection data={LogoSectionData} />
      <StaticCardSection data={StaticCardSectionData} />
      <GridCardSection data={GridCardSectionData} />
      <TabsSection
          data={TabsSectionData}
          centered={false}
          showDescription={false}
      />
      <NumberSection data={NumberSectionData} />
      <VerticleLineSection data={VerticleLineSectionData} />
      <SlidesSection data={SlidesSectionData} />
      <ServiceSlidesSection data={ServiceSlidesSectionData} />
      <FaqSection data={FAQSectionData} />
      <CTASection data={CTASectionData} />
    </>
  );
}