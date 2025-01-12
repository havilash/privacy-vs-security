import StartBackground from "@/components/StartBackground";

export default function Start() {
  return (
    <section className="flex h-screen w-full items-center justify-center px-4 text-center">
      <StartBackground />
      <h1 className="z-50 text-[3rem] font-bold leading-tight text-text-color sm:text-[clamp(3rem,6vw,5rem)]">
        <span className="block sm:inline">Privatsphäre&nbsp;</span>
        <span className="block sm:inline">vs&nbsp;</span>
        <span className="block sm:inline">Sicherheit</span>
      </h1>
    </section>
  );
}
