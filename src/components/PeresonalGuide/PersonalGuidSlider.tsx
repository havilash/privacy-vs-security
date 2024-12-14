import { CUSTOM_LABELS } from "@/consts";
import React, { useEffect, useState } from "react";

type SliderBarProps = {
  responses: number[];
};

const SliderBar: React.FC<SliderBarProps> = ({ responses }) => {
  const [currentWidth, setCurrentWidth] = useState(0);

  // Calculate the total of all responses
  const responsesTotal = responses.reduce((a, b) => a + b, 0);

  // Calculate the width percentage based on total responses
  const widthPercentage = (responsesTotal / (responses.length * (CUSTOM_LABELS.length - 1))) * 100;

  // Update the animated width value when the widthPercentage changes
  useEffect(() => {
    setCurrentWidth(widthPercentage);
  }, [responsesTotal]); // Trigger animation when responsesTotal changes

  return (
    <div className="relative w-full bg-gray-300 h-6 rounded-lg overflow-hidden">
      {/* For large screens: Privacy and Security positioned on the left and right respectively */}
      {/* Slider bar */}
      <div
        className="bg-[#007b81] h-full transition-all duration-500 ease-in-out"
        style={{ width: `${currentWidth}%` }}
      ></div>
    </div>
  );
};

export default SliderBar;
