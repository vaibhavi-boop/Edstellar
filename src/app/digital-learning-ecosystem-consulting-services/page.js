import HeroSection from "../../Components/StrategicWorkforcePlanning/HeroSection";
import StatsSection from "../../Components/StrategicWorkforcePlanning/StatsSection";
import VerticleIconSection from "../../Components/digitallearningecosystemconsulting/VerticleIconSection";

/*import LogoSection from "../../Components/StrategicWorkforcePlanning/LogoSection";
import StaticCardSection from "../../Components/StrategicWorkforcePlanning/StaticCardSection";
import GridCardSection from "../../Components/StrategicWorkforcePlanning/GridCardSection";
import TabsSection from "../../Components/StrategicWorkforcePlanning/TabsSection";
import NumberSection from "../../Components/StrategicWorkforcePlanning/NumberSection";
import VerticleLineSection from "../../Components/StrategicWorkforcePlanning/VerticleLineSection";
import SlidesSection from "../../Components/StrategicWorkforcePlanning/SlidesSection";
import ServiceSlidesSection from "../../Components/StrategicWorkforcePlanning/ServiceSlidesSection";
import FaqSection from "../../Components/StrategicWorkforcePlanning/FaqSection";
import CTASection from "../../Components/StrategicWorkforcePlanning/CTASection";*/

import {
  HeroSectionData,
  BreadcrumbData,
  StatsData,
  VerticleIconSectionData,
  /*LogoSectionData,
  StaticCardSectionData,
  GridCardSectionData,
  TabsSectionData,
  NumberSectionData,
  VerticleLineSectionData,
  SlidesSectionData,
  ServiceSlidesSectionData,
  FAQSectionData,
  CTASectionData,*/
} from "../Data/Digital_Learning_Ecosystem_Consulting_Services";

export default function Home() {
  return (
    <>
      <HeroSection data={HeroSectionData} breadcrumbs={BreadcrumbData} />
      <StatsSection items={StatsData} />
      <VerticleIconSection data={VerticleIconSectionData} />
      {/*<LogoSection data={LogoSectionData} />
      <StaticCardSection data={StaticCardSectionData} />
      <GridCardSection data={GridCardSectionData} />
      <TabsSection data={TabsSectionData} />
      <NumberSection data={NumberSectionData} />
      <VerticleLineSection data={VerticleLineSectionData} />
      <SlidesSection data={SlidesSectionData} />
      <ServiceSlidesSection data={ServiceSlidesSectionData} />
      <FaqSection data={FAQSectionData} />
      <CTASection data={CTASectionData} />*/}
    </>
  );
}