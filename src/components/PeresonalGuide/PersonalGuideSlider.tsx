import React, { useEffect, useState } from "react";

import { CUSTOM_LABELS } from "@/consts";

interface SliderBarProps {
  responses: number[];
}

const SliderBar: React.FC<SliderBarProps> = ({ responses }) => {
  const [currentWidth, setCurrentWidth] = useState(0);

  // Calculate the total of all responses
  const responsesTotal = responses.reduce((a, b) => a + b, 0);

  // Calculate the width percentage based on total responses
  const widthPercentage =
    (responsesTotal / (responses.length * (CUSTOM_LABELS.length - 1))) * 100;

  // Update the animated width value when the widthPercentage changes
  useEffect(() => {
    setCurrentWidth(widthPercentage);
  }, [responsesTotal]); // Trigger animation when responsesTotal changes

  return (
    <div className="relative h-6 w-full overflow-hidden rounded-lg bg-gray-300">
      {/* For large screens: Privacy and Security positioned on the left and right respectively */}
      {/* Slider bar */}
      <div
        className="h-full bg-[#007b81] transition-all duration-500 ease-in-out"
        style={{ width: `${currentWidth}%` }} // eslint-disable-line @typescript-eslint/restrict-template-expressions
      ></div>
    </div>
  );
};

export default SliderBar;
