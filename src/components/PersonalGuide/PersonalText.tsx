import React from "react";

import { CUSTOM_LABELS } from "@/consts";

interface SliderBarProps {
  responses: number[];
}

const SliderBar: React.FC<SliderBarProps> = ({ responses }) => {
  // Calculate the total of all responses
  const responsesTotal = responses.reduce((a, b) => a + b, 0);

  // Calculate the percentage
  const percent =
    responsesTotal / (responses.length * (CUSTOM_LABELS.length - 1));

  // Determine which "quarter" the percentage falls into
  let quarter: 1 | 2 | 3 | 4 = 1; // Explicit type for third: it can only be 1, 2, or 3

  if (percent < 1 / 4) {
    quarter = 1;
  } else if (percent >= 1 / 4 && percent < 2 / 4) {
    quarter = 2;
  } else if (percent >= 2 / 4 && percent < 3 / 4) {
    quarter = 3;
  } else if (percent >= 3 / 4) {
    quarter = 4;
  }

  const responseQuarterHeader: Record<1 | 2 | 3 | 4, string> = {
    1: "Du legst grossen Wert auf Privatsphäre",
    2: "Du legst Wert auf Privatsphäre",
    3: "Du legst Wert auf Sicherheit",
    4: "Du legst grossen Wert auf Sicherheit",
  };

  const header = responseQuarterHeader[quarter];

  return (
    <div className="h-6 w-full rounded-lg pt-4">
      <h2 className="py-4">{header}</h2>
      <div className="space-y-3">
        <p>
          Zu Beginn fragten wir uns, unter welchen Bedingungen der Staat auf die
          Daten einer Chat-App zugreifen darf und wie weit Nutzer:innen bereit
          sind, ihre Privatsphäre zugunsten der Sicherheit zu opfern. Wir
          dokumentierten die Definitionen von Privatsphäre und Sicherheit,
          analysierten relevante Gesetze in der Schweiz und der EU und führten
          eine Umfrage durch.
        </p>
        <p>
          Unsere Hypothese war, dass Sicherheit den Menschen wichtiger sei als
          Privatsphäre, da viele ohnehin schon persönliche Daten preisgeben.
          Doch die Umfrage zeigte das Gegenteil: Die Mehrheit bevorzugt
          Privatsphäre – unabhängig von Geschlecht, Alter oder Beruf.
        </p>
        <p>
          Ein Hauptgrund ist das starke Unbehagen, das durch zu viel Exposition
          entsteht. Ausserdem sind viele sich nicht bewusst, wie viele Daten
          bereits genutzt werden, was wir am Beispiel von WhatsApp analysierten.
          Die Unwissenheit könnte dazu führen, dass sie unabsichtlich mehr Daten
          preisgeben würden, als sie eigentlich möchten.
        </p>
        <p>
          Abschliessend war unsere Hypothese falsch, weil wir unterschätzt
          haben, wie wichtig den Menschen ihre Privatsphäre ist und wie viel sie
          darüber wissen.
        </p>
      </div>
    </div>
  );
};

export default SliderBar;
