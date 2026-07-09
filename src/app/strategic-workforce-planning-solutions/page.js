import HeroSection from "../../Components/StrategicWorkforcePlanning/HeroSection";
import StatsSection from "../../Components/StrategicWorkforcePlanning/StatsSection";
import StaticCardSection from "../../Components/StrategicWorkforcePlanning/StaticCardSection";
import GridCardSection from "../../Components/StrategicWorkforcePlanning/GridCardSection";

import HeroSectionData from "../Data/HeroSectionData";
import StatsData from "../Data/StatsSectionData";
import StaticCardSectionData from "../Data/StaticCardSectionData";
import GridCardSectionData from "../Data/GridCardSectionData";

export default function Home() {
  return (
    <>
      <HeroSection data={HeroSectionData} />
      <StatsSection items={StatsData} />
      <StaticCardSection data={StaticCardSectionData} />
      <GridCardSection data={GridCardSectionData} />
    </>
  );
}