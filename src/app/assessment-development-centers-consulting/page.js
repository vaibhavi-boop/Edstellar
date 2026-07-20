import HeroSection from "../../Components/StrategicWorkforcePlanning/HeroSection";
import ParagraphSection from "../../Components/assessmentdevelopmentcenters/ParagraphSection";
import VerticleIconSection from "../../Components/digitallearningecosystemconsulting/VerticleIconSection";
import StatsSection from "../../Components/StrategicWorkforcePlanning/StatsSection";
import StaticCardSection from "../../Components/StrategicWorkforcePlanning/StaticCardSection";
import TabsSection from "../../Components/StrategicWorkforcePlanning/TabsSection";
import AssessmentSection from "../../Components/assessmentdevelopmentcenters/AssessmentSection";
import TimelineSection from "../../Components/digitallearningecosystemconsulting/TimelineSection";

import {
  HeroSectionData,
  BreadcrumbData,
  ParagraphSectionData,
  VerticleIconSectionData,
  StatsData,
  StaticCardSectionData,
  TabsSectionData,
  AssessmentSectionData,
  TimelineSectionData
} from "../Data/Assessment_Development_Centers";

export default function Home() {
  return (
    <>
      <HeroSection data={HeroSectionData} breadcrumbs={BreadcrumbData} />
      <ParagraphSection data={ParagraphSectionData} />
      <VerticleIconSection data={VerticleIconSectionData}/>
      <StatsSection items={StatsData} />
      <StaticCardSection data={StaticCardSectionData} />
      <TabsSection data={TabsSectionData} />
      <AssessmentSection data={AssessmentSectionData} />
      <TimelineSection data={TimelineSectionData} />
    </>
  );
}