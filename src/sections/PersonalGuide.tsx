import SliderBar from "@/components/PersonalGuide/PersonalGuideSlider";
import PersonalText from "@/components/PersonalGuide/PersonalText";

interface PersonalGuideProps {
  responses: number[];
}

export default function PersonalGuide({ responses }: PersonalGuideProps) {
  return (
    <section className="pb-96">
      <h1 className="mb-4 flex flex-col items-center text-center">
        Persönlicher Leitfaden
      </h1>
      <h2 className="mb-4 flex flex-col items-center text-center">
        Mit den Fragen, die Sie oben beantwortet haben, haben wir eine kleine
        Auswertung Ihrer Datenschutz-/Sicherheitsanforderungen zusammengestellt.
      </h2>
      <div className="flex justify-between py-2">
        <h2>Privacy</h2>
        <h2>Security</h2>
      </div>
      <SliderBar responses={responses} />
      <PersonalText responses={responses} />
    </section>
  );
}
