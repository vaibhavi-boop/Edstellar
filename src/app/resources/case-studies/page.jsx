import { heroData } from "@/data/heroData";
import HeroSection from "@/Components/resources/HeroSection";
function page() {
  return (
    <div>
      <HeroSection {...heroData.casestudies} />
    </div>
  );
}

export default page;
