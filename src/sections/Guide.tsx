interface Props {}

export default function Guide({}: Props) {
  return (
    <section className="flex flex-col justify-between gap-16 md:flex-row xl:gap-y-32">
      <div className="flex flex-col gap-4 w-1/2">
        <h2>Sicherheit</h2>
        <p>
        Das Gefühl der Sicherheit ist ein Grundbedürfnis für uns Menschen. Der Staat hat die Verpflichtung, die Sicherheit seiner Bürgerinnen 
          und Bürger zu gewährleisten. Bei den Chat-Apps ist jetzt die Frage, wie viel Macht und Zugriff der Staat auf diese Apps haben soll.
          Obwohl bei Chat-Apps Menschen miteinander indirekt und manchmal auch anonym kommunizieren, gibt es viele Vorfälle von Cybermobbing, sexueller Belästigung, 
          Handel mit illegalen Gütern (Drogen, Waffen) bis zu Menschenhandel und Pädophilie. Bei Chat-Apps ist einfach das Problem, dass es keine wirklichen Regeln gibt und 
          die Polizei oder der Staat haben nicht das Recht, bei manchen Vorfällen einzugreifen, oder sie können nur eingreifen, wenn es schon zu spät ist. 
          <br />
          <br />
          Man ist Pro-Sicherheit, wenn man will, dass der Staat mehr Recht auf die Nachrichten und Daten der Chat-Apps hat. So können sie verdächtige Chats analysieren 
          und früh genug handeln. Obwohl dies so klingt wie die NSA bevor Snowden, muss der Staat mit den Usern mithilfe Nutzungsbedingungen, Vereinbarungen und Nachrichten klar
          kommunizieren, was sie mit den Daten machen. Der Staat darf nämlich nicht das Grundbedürfnis der Privatsphäre verletzen, um das Grundbedürfnis der Sicherheit zu gewährleisten.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <h2>Privatsphäre</h2>
        <p>
        Die Privatsphäre ist wie die Sicherheit ein Grundbedürfnis des Menschen. In der Bundesverfassung wird genau geschrieben, dass jede Person Anspruch auf Achtung 
        ihres Privat- und Familienlebens hat, sowie den Schutz vor Missbrauch ihrer persönlichen Daten. Ohne diese Rechte wäre es vermutlich für viele Menschen 
        unangenehm und gefährlich. Denn ohne die Gewährleistung der Privatsphäre fühlt man sich entblösst und seine persönlichen engen Daten und Geheimnisse könnten von jedem gelesen werden. 
          
          <br />
          <br />
          Man ist Pro-Privatsphäre, wenn man dagegen dem Staatszugriff ist. Man will nicht, dass der Staat in seine eigenen Daten und Nachrichten hineinsehen kann. 
          Auch wenn das für die allgemeine Sicherheit etwas nützen könnte. Denn dies sind die persönlichen und schutzpflichtigen Daten, die darauf nur wenige Zugriff haben sollen. 
        </p>
      </div>
    </section>
  );
}
