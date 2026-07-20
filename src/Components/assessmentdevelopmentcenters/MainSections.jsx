import {
  HeroSectionData,
  BreadcrumbData,
  StatsData,
  StaticCardSectionData,
  TabsSectionData,
  TimelineSectionData,
} from "../Data/Digital_Learning_Ecosystem_Consulting_Services";

export default function Home() {
  return (
    <>
    <HeroSection
    breadcrumbs={BreadcrumbData}  
    data={HeroSectionData}
    items={StatsData} />
    data={StaticCardSectionData}
    <TabsSection data={TabsSectionData} />
    data={TimelineSectionData}
    </>
  );
}