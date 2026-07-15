import {
  HeroSectionData,
  BreadcrumbData,
  StatsData,
  TabsSectionData,
  VerticleLineSectionData,
  GridCardSectionData,
  CTASectionData,
  FAQSectionData,
  ServiceSlidesSectionData,
} from "../Data/Digital_Learning_Ecosystem_Consulting_Services";

export default function Home() {
  return (
    <>
    <HeroSection
    breadcrumbs={BreadcrumbData}  
    data={HeroSectionData}
    items={StatsData} />
    <TabsSection data={TabsSectionData} />
    data={VerticleLineSectionData}
    data={GridCardSectionData}
    data={CTASectionData}
    FaqSection data={FAQSectionData}
    data={ServiceSlidesSectionData}
    </>
  );
}