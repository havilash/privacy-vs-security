import Guide from "./sections/Guide";
import InteractiveSurvey from "./sections/InteractiveSurvey";
import MetaInfo from "./sections/MetaInfo";
import PersonalGuide from "./sections/PersonalGuide";
import Start from "./sections/Start";
import SurveyInfo from "./sections/SurveyInfo";

export default function App() {
  return (
    <>
      <main className="flex size-full flex-col items-center gap-32">
        <Start />
        <div className="flex w-[clamp(75%,40rem,100%)] flex-col gap-32 px-8">
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
