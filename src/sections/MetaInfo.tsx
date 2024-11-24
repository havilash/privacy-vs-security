import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

interface InfoProps {
  IconElement: React.ReactNode;
  value: string;
  title: string;
}

function Info({ IconElement, value, title }: InfoProps) {
  return (
    <div className="fit- flex flex-col items-center justify-center gap-4">
      <i className="text-9xl">{IconElement}</i>
      <h1 className="text-text-color">{value}</h1>
      <h2 className="text-text-color">{title}</h2>
    </div>
  );
}

export default function MetaInfo() {
  return (
    <section className="mt-16 flex flex-row flex-wrap items-center justify-center gap-24">
      <Info
        IconElement={<FaPeopleGroup color="var(--primary-color)" />}
        value="70+"
        title="Befrage"
      />
      <Info
        IconElement={<FaGlobeAmericas color="var(--primary-color)" />}
        value="11"
        title="Lorem"
      />
      <Info
        IconElement={<MdAccessTime color="var(--primary-color)" />}
        value="4"
        title="Ipsum"
      />
    </section>
  );
}
