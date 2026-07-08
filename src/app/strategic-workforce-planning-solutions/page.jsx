import Hero from "../../Components/StrategicWorkspacePlanning/hero";
import Stats from "../../Components/StrategicWorkspacePlanning/stats";
import StrategyCard from "../../Components/StrategicWorkspacePlanning/strategycard";
import DataInsights from "../../Components/StrategicWorkspacePlanning/datainsights";
import Tabs from "../../Components/StrategicWorkspacePlanning/tabs";
import NumberSec from "../../Components/StrategicWorkspacePlanning/numbersec";
import InsightsVer from "../../Components/StrategicWorkspacePlanning/insightsver";
import Slides from "../../Components/StrategicWorkspacePlanning/slides";
import ServiceSlides from "../../Components/StrategicWorkspacePlanning/serviceslides";
import ReadyCTA from "../../Components/StrategicWorkspacePlanning/readycta";
import FAQs from "../../Components/StrategicWorkspacePlanning/faqs";

import DataHero from "../data/datahero";
import stats from "../data/stats";
import strategyItems from "../data/strategycard";
import insights from "../data/datainsights";
import DataTabs from "../data/datatabs";
import DataNumberSec from "../data/datanumbersec";
import VerInsight from "../data/verinsight";
import DataSlides from "../data/dataslides";
import DataServiceSlides from "../data/dataserviceslides";
import DataReadyCTA from "../data/datareadycta";
import Datafaq from "../data/datafaq";

export default function Home() {
  return (
    <>
      <Hero data={DataHero} />
      <Stats items={stats} />
      <StrategyCard
        heading="When Business Strategy Outpaces Talent Readiness"
        description="Most organizations plan their business strategy in detail. Their workforce strategy is an afterthought. Roles go unfilled at critical moments. Skills gaps appear only after they have already slowed growth. Talent decisions are made reactively, at higher cost and lower quality than a 12-month forward view would have prevented.Strategic workforce planning changes that equation. If any of the following challenges resonate, our strategic workforce planning consulting practice is built specifically to address them."
        items={strategyItems}
      />
      <DataInsights
        heading="The Data Behind the Workforce Planning Imperative"
        description="Research from Korn Ferry and the Korn Ferry Institute quantifies the planning gap and the cost of leaving it unaddressed."
        items={insights}
      />
      <Tabs data={DataTabs} />
      <NumberSec data={DataNumberSec} />
      <InsightsVer {...VerInsight} />
      <Slides data={DataSlides} />
      <ServiceSlides data={DataServiceSlides} />
      <FAQs data={Datafaq} />
      <ReadyCTA data={DataReadyCTA} />
    </>
  );
}