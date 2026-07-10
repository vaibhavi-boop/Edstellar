import HeroSection from "../../Components/StrategicWorkforcePlanning/HeroSection";
import StatsSection from "../../Components/StrategicWorkforcePlanning/StatsSection";
import LogoSection from "../../Components/StrategicWorkforcePlanning/LogoSection";
import StaticCardSection from "../../Components/StrategicWorkforcePlanning/StaticCardSection";
import GridCardSection from "../../Components/StrategicWorkforcePlanning/GridCardSection";
import TabsSection from "../../Components/StrategicWorkforcePlanning/TabsSection";
import NumberSection from "../../Components/StrategicWorkforcePlanning/NumberSection";
import VerticleLineSection from "../../Components/StrategicWorkforcePlanning/VerticleLineSection";
import SlidesSection from "../../Components/StrategicWorkforcePlanning/SlidesSection";
import ServiceSlidesSection from "../../Components/StrategicWorkforcePlanning/ServiceSlidesSection";
import FaqSection from "../../Components/StrategicWorkforcePlanning/FaqSection";
import CTASection from "../../Components/StrategicWorkforcePlanning/CTASection";

import HeroSectionData from "../Data/HeroSectionData";
import StatsData from "../Data/StatsSectionData";
import LogoSectionData from "../Data/LogoSectionData";
import StaticCardSectionData from "../Data/StaticCardSectionData";
import GridCardSectionData from "../Data/GridCardSectionData";
import TabsSectionData from "../Data/TabsSectionData";
import NumberSectionData from "../Data/NumberSectionData";
import VerticleLineSectionData from "../Data/VerticleLineSectionData";
import SlidesSectionData from "../Data/SlidesSectionData";
import ServiceSlidesSectionData from "../Data/ServiceSlidesSectionData";
import FaqSectionData from "../Data/FaqSectionData";
import CTASectionData from "../Data/CTASectionData";

export default function Home() {
  return (
    <>
      <HeroSection data={HeroSectionData} />
      <StatsSection items={StatsData} />
      <LogoSection data={LogoSectionData} />
      <StaticCardSection data={StaticCardSectionData} />
      <GridCardSection data={GridCardSectionData} />
      <TabsSection data={TabsSectionData} />
      <NumberSection data={NumberSectionData} />
      <VerticleLineSection data={VerticleLineSectionData} />
      <SlidesSection data={SlidesSectionData} />
      <ServiceSlidesSection data={ServiceSlidesSectionData} />
      <FaqSection data={FaqSectionData} />
      <CTASection data={CTASectionData} />
    </>
  );
}