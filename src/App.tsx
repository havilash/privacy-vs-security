import Guide from "./sections/Guide";
import InteractiveSurvey from "./sections/InteractiveSurvey";
import MetaInfo from "./sections/MetaInfo";
import PersonalGuide from "./sections/PersonalGuide";
import Start from "./sections/Start";
import SurveyInfo from "./sections/SurveyInfo";

export default function App() {
  return (
    <>
      <main>
        <Start />
        <MetaInfo />
        <Guide />
        <SurveyInfo />
        <InteractiveSurvey />
        <PersonalGuide />
      </main>
    </>
  );
}
