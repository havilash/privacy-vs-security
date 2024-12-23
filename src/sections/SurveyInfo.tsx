import privacyVsSecurityBoxplotImage from "@/assets/privacy-vs-security-boxplot.png";
import privacyVsSecurityImage from "@/assets/privacy-vs-security.png";

interface Props {}

export default function SurveyInfo({}: Props) {
  return (
    <section className="flex w-full flex-col gap-16">
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full xl:w-1/2">
          Das Diagramm zeigt, in welchem Masse einzelne Personen entweder
          Sicherheit oder Privatsphäre bevorzugen. Jeder Balken repräsentiert
          eine Person, und die Höhe der blauen und orangefarbenen Anteile zeigt,
          wie stark diese Person zu einem der beiden Bedürfnisse neigt.
          <br />
          <br />
          Die Mehrheit der Befragten tendiert stärker zur Privatsphäre, was
          darauf hinweist, dass vielen der Schutz ihrer persönlichen Daten und
          ihre Selbstbestimmung wichtiger sind als Sicherheitsmassnahmen.
          Privatsphäre bedeutet, dass man selbst kontrolliert, welche
          Informationen über einen bekannt werden. Sicherheit hingegen zielt
          darauf ab, Gefahren wie Kriminalität und Missbrauch vorzubeugen. Die
          Ergebnisse machen deutlich, dass viele bereit sind, mögliche
          Sicherheitsrisiken in Kauf zu nehmen, um ihre persönliche Freiheit zu
          bewahren.
        </p>
        <img
          className="w-full xl:w-1/2"
          src={privacyVsSecurityImage}
          alt="Privacy vs Security"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full xl:w-1/2">
          Das Diagramm zeigt, wie stark die Befragten Sicherheit und
          Privatsphäre auf einer Skala von 0 bis 6 bewerten. Dabei steht 0 für
          "stimme überhaupt nicht zu" und 6 für "stimme voll zu".
          <br />
          <br />
          Die Ergebnisse machen deutlich, dass das Bedürfnis nach Privatsphäre
          insgesamt höher bewertet wird als das nach Sicherheit. Während die
          Bewertungen zur Sicherheit stärker variieren, sind die Meinungen zur
          Privatsphäre unter den Befragten konsistenter. Dies zeigt wiedermals,
          dass vielen Menschen der Schutz ihrer persönlichen Daten besonders
          wichtig ist, auch wenn die Ansichten zur Sicherheit individuell stark
          unterschiedlich sind.
        </p>
        <img
          className="w-full xl:w-1/2"
          src={privacyVsSecurityBoxplotImage}
          alt="Privacy vs Security"
        />
      </div>
    </section>
  );
}
