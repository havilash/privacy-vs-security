import privacyVsSecurityBoxplotImage from "@/assets/privacy-vs-security-boxplot.png";
import privacyVsSecurityImage from "@/assets/privacy-vs-security.png";

interface Props {}

export default function SurveyInfo({}: Props) {
  return (
    <section className="flex w-full flex-col gap-16">
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full xl:w-1/2">
          Das Säulendiagramm zeigt die Ergebnisse einer Umfrage zum Thema
          Sicherheit und Privatsphäre. Die X-Achse stellt die Teilnehmer dar,
          während die Y-Achse den Anteil der Personen zeigt, die mehr
          Privatsphäre (orange) oder mehr Sicherheit (blau) bevorzugen. Die
          Skala reicht von 0 % bis 100 %, was verdeutlicht, wie stark die
          Befragten jeweils eine dieser beiden Bedürfnisse favorisieren.
          <br />
          <br />
          Aus den Antworten auf eine Reihe von Fragen konnten wir ablesen, ob
          jemand mehr zur Sicherheit oder zur Privatsphäre tendiert. Das
          Diagramm zeigt, dass die Mehrheit (60 %) eine klare Präferenz für
          Privatsphäre hat, während 40 % eher Sicherheit bevorzugen. Dies
          bestätigt, dass Privatsphäre für viele wichtiger ist als Sicherheit.
        </p>
        <img
          className="w-full xl:w-1/2"
          src={privacyVsSecurityImage}
          alt="Privacy vs Security"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full xl:w-1/2">
          Der Boxplot zeigt, wie die Teilnehmer Sicherheit (blau) und
          Privatsphäre (orange) auf einer Skala von 0 bis 6 bewerten, wobei 0
          für „Stimme überhaupt nicht zu“ und 6 für „Stimme voll zu“ steht. Die
          vertikale Achse zeigt die Bewertungen, während die horizontale keine
          besondere Bedeutung hat.
          <br />
          <br />
          Insgesamt zeigt sich, dass das Sicherheitsbedürfnis meist geringer
          ausgeprägt ist als das Bedürfnis nach Privatsphäre. Es gibt jedoch
          mehr Unterschiede bei den Sicherheitsbewertungen, während bei der
          Privatsphäre die Meinungen der meisten Teilnehmer näher beieinander n
          liegen.
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
