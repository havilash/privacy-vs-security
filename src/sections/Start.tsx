import StartBackground from "@/components/StartBackground";

export default function Start() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <StartBackground />
      <h1 className="z-50 text-[8vw] font-black text-text-color md:text-[5vw]">
        Privacy vs Security
      </h1>
    </section>
  );
}
