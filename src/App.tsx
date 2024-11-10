import Guide from "./sections/Guide";
import InteractiveSurvey from "./sections/InteractiveSurvey";
import MetaInfo from "./sections/MetaInfo";
import PersonalGuide from "./sections/PersonalGuide";
import Start from "./sections/Start";
import SurveyInfo from "./sections/SurveyInfo";

export default function App() {
  return (
    <>
      <main className="w-full h-full flex flex-col gap-32 items-center">
        <Start />
        <div className="w-[clamp(66%,40rem,100%)] px-8">
          <MetaInfo />
          <Guide />
          <SurveyInfo />
          <InteractiveSurvey />
          <PersonalGuide />
        </div>
      </main>
    </>
  );
}
