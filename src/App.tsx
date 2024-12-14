import { useState } from "react";

import { NEUTRAL_VALUE, QUESTIONS } from "./consts";
import Guide from "./sections/Guide";
import InteractiveSurvey from "./sections/InteractiveSurvey";
import MetaInfo from "./sections/MetaInfo";
import PersonalGuide from "./sections/PersonalGuide";
import Start from "./sections/Start";
import SurveyInfo from "./sections/SurveyInfo";

export default function App() {
  const [responses, setResponses] = useState<number[]>(
    new Array(QUESTIONS.length).fill(NEUTRAL_VALUE),
  );

  return (
    <>
      <main className="flex size-full flex-col items-center gap-32">
        <Start />
        <div className="flex w-[clamp(75%,40rem,100%)] flex-col gap-32 px-8">
          <MetaInfo />
          <Guide />
          <SurveyInfo />
          <InteractiveSurvey
            questions={QUESTIONS}
            responses={responses}
            setResponses={setResponses}
          />
          <PersonalGuide responses={responses} />
        </div>
      </main>
    </>
  );
}
