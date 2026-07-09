import HeroSection from "@/Components/resources/HeroSection";
import { heroData } from "@/data/heroData";

function page() {
  return (
    <div>
      <HeroSection {...heroData.tools} />
    </div>
  );
}

export default page;
