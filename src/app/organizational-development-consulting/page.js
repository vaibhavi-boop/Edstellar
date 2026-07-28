import HeroSection from "@/Components/AllStaticComponents/HeroSection";
import ParagraphSection from "@/Components/AllStaticComponents/ParagraphSection";


// Import JSON data
import pageData from "@/data/OrganizationalDevelopmentConsulting.json";

export default function Home() {
  return (
    <>
      <HeroSection data={pageData.HeroSectionData} breadcrumbs={pageData.BreadcrumbData} />
      <ParagraphSection data={pageData.ParagraphSectionData} />
    </>
  );
}