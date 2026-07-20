import HeroSection from "../../Components/StrategicWorkforcePlanning/HeroSection";
import ParagraphSection from "../../Components/assessmentdevelopmentcenters/ParagraphSection";
import VerticleIconSection from "../../Components/digitallearningecosystemconsulting/VerticleIconSection";

import {
  HeroSectionData,
  BreadcrumbData,
  ParagraphSectionData,
} from "../Data/Assessment_Development_Centers";
import { VerticleIconSectionData } from "../Data/Assessment_Development_Centers";

export default function Home() {
  return (
    <>
      <HeroSection data={HeroSectionData} breadcrumbs={BreadcrumbData} />
      <ParagraphSection data={ParagraphSectionData} />
      <VerticleIconSection data={VerticleIconSectionData}/>
    </>
  );
}