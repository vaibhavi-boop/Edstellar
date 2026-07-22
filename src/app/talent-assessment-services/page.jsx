import HeroSection from "@/Components/StaticPages/HeroSection";
import RequestedAssessments from "@/Components/StaticPages/RequestedAssessments";
import TAOverview from "@/Components/StaticPages/TAOverview";
import StatsSection from "@/Components/StaticPages/StatsSection";
import TimeLine from "@/Components/StaticPages/TimeLine";
import pageData from "@/data/TalentAssessment.json";

export default function Page() {
  return (
    <div>
      <HeroSection data={pageData.heroSection} />
      <StatsSection data={pageData.statistics} />
      <RequestedAssessments data={pageData.mostRequestedAssessments} />
      <TimeLine data={pageData.diagnoseToDevelop} />
      <TAOverview data={pageData.talentAssessmentOverview} />
    </div>
  );
}
