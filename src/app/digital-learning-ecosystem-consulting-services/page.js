import HeroSection from "../../Components/StrategicWorkforcePlanning/HeroSection";
import StatsSection from "../../Components/StrategicWorkforcePlanning/StatsSection";
import VerticleIconSection from "../../Components/digitallearningecosystemconsulting/VerticleIconSection";
import TabsSection from "../../Components/StrategicWorkforcePlanning/TabsSection";
import TimelineSection from "../../Components/digitallearningecosystemconsulting/TimelineSection";
import VerticleLineSection from "../../Components/StrategicWorkforcePlanning/VerticleLineSection";
import GridCardSection from "../../Components/StrategicWorkforcePlanning/GridCardSection";
import CTASection from "../../Components/StrategicWorkforcePlanning/CTASection";
import ServiceSlidesSection from "../../Components/StrategicWorkforcePlanning/ServiceSlidesSection";
import FaqSection from "../../Components/StrategicWorkforcePlanning/FaqSection";

/*import LogoSection from "../../Components/StrategicWorkforcePlanning/LogoSection";
import StaticCardSection from "../../Components/StrategicWorkforcePlanning/StaticCardSection";
import NumberSection from "../../Components/StrategicWorkforcePlanning/NumberSection";
import SlidesSection from "../../Components/StrategicWorkforcePlanning/SlidesSection";

*/

import {
  HeroSectionData,
  BreadcrumbData,
  StatsData,
  VerticleIconSectionData,
  TabsSectionData,
  TimelineSectionData,
  VerticleLineSectionData,
  GridCardSectionData,
  CTASectionData,
  FAQSectionData,
  ServiceSlidesSectionData,
} from "../Data/Digital_Learning_Ecosystem_Consulting_Services";

export default function Home() {
  return (
    <>
      <HeroSection data={HeroSectionData} breadcrumbs={BreadcrumbData} />
      <StatsSection items={StatsData} />
      <VerticleIconSection data={VerticleIconSectionData} />
      <TabsSection
          data={TabsSectionData}
          centered={true}
          showDescription={true}
      />
      <TimelineSection data={TimelineSectionData} />
      <VerticleLineSection data={VerticleLineSectionData} />
      <GridCardSection data={GridCardSectionData} />
      <CTASection data={CTASectionData} />
      <FaqSection data={FAQSectionData} />
      <ServiceSlidesSection data={ServiceSlidesSectionData} />
    </>
  );
}