interface Props {}

export default function Guide({}: Props) {
  return (
    <section className="flex flex-col justify-between gap-16 xl:flex-row xl:gap-y-32">
      <div className="flex w-full flex-col gap-4 xl:w-1/2">
        <h2>Sicherheit</h2>
        <p>
          Das Gefühl der Sicherheit ist ein Grundbedürfnis für uns Menschen. Der
          Staat ist dafür verantwortlich, die Sicherheit seiner Bürgerinnen und
          Bürger zu gewährleisten. Bei Chat-Apps stellt sich die Frage, wie viel
          Zugriff der Staat darauf haben sollte. Obwohl Menschen hier indirekt
          und oft anonym kommunizieren, gibt es Fälle von Cybermobbing,
          sexueller Belästigung, Handel mit illegalen Gütern und sogar
          Menschenhandel. Das Problem ist, dass es in Chat-Apps kaum Regeln gibt
          und der Staat oft nur eingreifen kann, wenn es bereits zu spät ist.{" "}
          <br />
          <br />
          Man ist Pro-Sicherheit, wenn man den Staat ermächtigen möchte, auf
          Nachrichten und Daten von Chat-Apps zuzugreifen. So könnten
          verdächtige Chats analysiert und Straftaten rechtzeitig verhindert
          werden. Trotz dieser Massahmen muss der Staat sicherstellen, dass die
          Privatsphäre der Nutzer gewahrt bleibt, indem transparent erklärt
          wird, wie mit den Daten umgegangen wird. Die Balance zwischen
          Sicherheit und Privatsphäre ist dabei entscheidend.{" "}
        </p>
      </div>
      <div className="flex w-full flex-col gap-4 xl:w-1/2">
        <h2>Privatsphäre</h2>
        <p>
          Die Privatsphäre ist wie die Sicherheit ein Grundbedürfnis des
          Menschen. In der Bundesverfassung wird genau geschrieben, dass jede
          Person Anspruch auf Achtung ihres Privat- und Familienlebens hat,
          sowie den Schutz vor Missbrauch ihrer persönlichen Daten. Ohne diese
          Rechte wäre es vermutlich für viele Menschen unangenehm und
          gefährlich. Denn ohne die Gewährleistung der Privatsphäre fühlt man
          sich entblösst und seine persönlichen engen Daten und Geheimnisse
          könnten von jedem gelesen werden.
          <br />
          <br />
          Man ist Pro-Privatsphäre, wenn man gegen dem Staatszugriff ist. Man
          will nicht, dass der Staat in seine eigenen Daten und Nachrichten
          hineinsehen kann. Auch wenn das für die allgemeine Sicherheit etwas
          nützen könnte. Denn dies sind die persönlichen und schutzpflichtigen
          Daten, die darauf nur wenige Zugriff haben sollen.
        </p>
      </div>
    </section>
  );
}
