import React from "react";
import SliderBar from "@/components/PeresonalGuide/PersonalGuidSlider";
import PersonalText from "@/components/PeresonalGuide/PersonalText";

interface PersonalGuideProps {
  responses: number[];
}

export default function PersonalGuide({ responses }: PersonalGuideProps) {
  return (
    <section className="pb-64">
      <h1 className="mb-4 flex flex-col items-center">Personal Guide</h1>
      <h2 className="mb-4 flex flex-col items-center">SUBTITLE JUST FOR FUN CUZ WE COOL LIKE THAT</h2>
      <div className="flex justify-between py-2">
        <h2>Privacy</h2>
        <h2>Security</h2>
      </div>
      <SliderBar responses={responses}/>
      <PersonalText responses={responses}/>
    </section>
  );
}

