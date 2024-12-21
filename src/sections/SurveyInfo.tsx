import privacyVsSecurityImage from "@/assets/privacy-vs-security.png";

interface Props {}

export default function SurveyInfo({}: Props) {
  return (
    <section className="flex w-full flex-col gap-16">
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full xl:w-1/2">
          Das Säulendiagramm veranschaulicht die Ergebnisse einer Umfrage, bei
          der das Verhältnis zwischen den Bedürfnissen nach Sicherheit und
          Privatsphäre untersucht wurde. Die X-Achse zeigt die einzelnen
          Teilnehmer der Umfrage, während die Y-Achse den prozentualen Anteil
          des Bedürfnisses nach Privatsphäre (orange) oder Sicherheit (blau)
          darstellt. Die Werte reichen von 0 % bis 100 % und verdeutlichen, wie
          stark die Befragten in eine der beiden Richtungen tendieren.
          <br />
          <br />
          Die Ergebnisse basieren auf einer Reihe von Fragen, die das Bedürfnis
          nach Sicherheit und Privatsphäre abdecken. Dabei wurde analysiert,
          welche Fragen von den Befragten mit "Stimme voll und ganz zu" oder
          "Stimme überhaupt nicht zu" beantwortet wurden. Durch diese
          Bewertungen konnten wir berechnen, ob eine Person stärker zur
          Sicherheit oder zur Privatsphäre neigt. Aus dem Diagramm wird
          deutlich, dass die Mehrheit der Befragten eine Präferenz für
          Privatsphäre (60 %) zeigt, während 40 % eher zur Sicherheit tendieren.
          Dies bestätigt, dass Privatsphäre für die meisten Menschen eine höhere
          Priorität hat als Sicherheit.
        </p>
        <img
          className="w-full xl:w-1/2"
          src={privacyVsSecurityImage}
          alt="Privacy vs Security"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row">
        <p className="w-full xl:w-1/2">
          Der folgende Boxplot zeigt die Bewertungen für Sicherheit (blau) und
          Privatsphäre (orange) auf einer Skala von 0 bis 6, wobei 0 „Stimme
          überhaupt nicht zu“ und 6 „Stimme voll zu“ entspricht. Die vertikale
          Achse gibt die Bewertungen wieder, während die horizontale Achse keine
          Relevanz hat.
          <br />
          <br />
          Wie man klarsehen kann, ist das Sicherheitsbedürfnis im Allgemeinen
          geringer ausgeprägt als das Bedürfnis nach Privatsphäre. Dennoch
          zeigen diese Daten eine grössere Streuung im Vergleich zur
          Privatsphäre. In der Privatsphäre gibt es jedoch mehr Ausreisser.
          Während sich viele in Bezug auf die Privatsphäre einig sind, gibt es
          wenige, die eine stark abweichende Meinung haben im Vergleich zu der
          Mehrheit, anders als bei der Sicherheit.
        </p>
        <img
          className="w-full xl:w-1/2"
          src={privacyVsSecurityImage}
          alt="Privacy vs Security"
        />
      </div>
    </section>
  );
}
