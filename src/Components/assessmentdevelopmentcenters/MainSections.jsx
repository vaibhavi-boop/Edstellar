import {
  HeroSectionData,
  BreadcrumbData,
} from "../Data/Digital_Learning_Ecosystem_Consulting_Services";

export default function Home() {
  return (
    <>
    <HeroSection
    breadcrumbs={BreadcrumbData}  
    data={HeroSectionData} />
    </>
  );
}