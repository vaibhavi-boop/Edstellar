import VerticleIconSection from "../../Components/DigitalLearningEcosystem/VerticleIconSection";
import {
  HeroSectionData,
  BreadcrumbData,
  StatsData,
  VerticleIconSectionData
} from "../Data/Digital_Learning_Ecosystem_Consulting_Services";

export default function Home() {
  return (
    <>
    <HeroSection
    breadcrumbs={BreadcrumbData}  
    data={HeroSectionData}
    items={StatsData}
    />
    <VerticleIconSection data={VerticleIconSectionData} />
    </>
  );
}