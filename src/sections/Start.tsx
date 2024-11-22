import StartBackground from "@/lib/StartBackground";

export default function Start() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <StartBackground />
      <h1 className="z-50 text-[5vw] font-black text-text-color">
        Privacy vs Security
      </h1>
    </section>
  );
}
