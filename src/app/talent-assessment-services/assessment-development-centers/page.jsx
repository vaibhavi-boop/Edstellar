import HeroSection from "@/Components/StrategicWorkforcePlanning/HeroSection";
import ParagraphSection from "@/Components/assessmentdevelopmentcenters/ParagraphSection";
import VerticleIconSection from "@/Components/digitallearningecosystemconsulting/VerticleIconSection";
import StatsSection from "@/Components/StrategicWorkforcePlanning/StatsSection";
import StaticCardSection from "@/Components/StrategicWorkforcePlanning/StaticCardSection";
import AssessmentSection from "@/Components/assessmentdevelopmentcenters/AssessmentSection";
import TimelineSection from "@/Components/digitallearningecosystemconsulting/TimelineSection";
import TabsSection from "@/Components/StrategicWorkforcePlanning/TabsSection";
import IndustryTabsSection from "@/Components/assessmentdevelopmentcenters/IndustryTabsSection";
import VerticleLineSection from "@/Components/StrategicWorkforcePlanning/VerticleLineSection";
import SlidesStatsSection from "@/Components/assessmentdevelopmentcenters/SlidesStatsSection";
import LogoSection from "@/Components/StrategicWorkforcePlanning/LogoSection";
import SlidesSection from "@/Components/StrategicWorkforcePlanning/SlidesSection";
import CTASection from "@/Components/StrategicWorkforcePlanning/CTASection";
import FaqSection from "@/Components/StrategicWorkforcePlanning/FaqSection";
import ServiceSlidesSection from "@/Components/StrategicWorkforcePlanning/ServiceSlidesSection";

import {
  HeroSectionData,
  BreadcrumbData,
  ParagraphSectionData,
  VerticleIconSectionData,
  StatsData,
  StaticCardSectionData,
  TabsSectionData,
  AssessmentSectionData,
  TimelineSectionData,
  TabsSectionDataSub,
  IndustryTabsSectionData,
  VerticleLineSectionData,
  SlidesStatsSectionData,
  LogoSectionData,
  SlidesSectionData,
  CTASectionData,
  FAQSectionData,
  ServiceSlidesSectionData,
} from "@/app/Data/Assessment_Development_Centers";

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
      <TabsSection data={TabsSectionDataSub} />
      <IndustryTabsSection data={IndustryTabsSectionData} />
      <VerticleLineSection data={VerticleLineSectionData} />
      <SlidesStatsSection data={SlidesStatsSectionData} />
      <LogoSection data={LogoSectionData} />
      <SlidesSection data={SlidesSectionData} />
      <CTASection data={CTASectionData} />
      <FaqSection data={FAQSectionData} />
      <ServiceSlidesSection data={ServiceSlidesSectionData} />
    </>
  );
}