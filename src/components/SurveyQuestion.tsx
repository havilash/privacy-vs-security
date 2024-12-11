import { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./SurveyQuestion.css";

interface Props {
  text: string;
  initialValue: number; // Neutral value passed from the parent
  onChange: (value: number) => void; // Notify parent of changes
}

const CUSTOM_LABELS = [
  "stimmt üperhaupt nicht zu",
  "stimme nicht zu",
  "stimme zu",
  "stimme voll zu",
];

export default function SurveyQuestion({ text, initialValue, onChange }: Props) {
  const [singleThumbValue, setSingleThumbValue] = useState<number[]>([0, initialValue]);

  useEffect(() => {
    // Ensure slider reflects the correct initial value on mount
    setSingleThumbValue([0, initialValue]);
  }, [initialValue]);

  const handleSliderChange = (value: number[]) => {
    setSingleThumbValue(value);
    onChange(value[1]); // Notify parent with the current value
  };

  return (
    <div className="flex flex-col items-center md:flex-row gap-4">
      {/* Text Section */}
      <p className="w-full text-lg text-center md:w-1/3 md:text-left">{text}</p>

      {/* Slider Section */}
      <div className="w-full md:w-2/3 sm:w-1/2 ">
        <RangeSlider
          className="single-thumb"
          value={singleThumbValue}
          onInput={handleSliderChange}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
          min={0}
          max={CUSTOM_LABELS.length - 1} // Match labels array length
        />
        <div className="mt-2 text-center text-sm text-gray-500">
          {CUSTOM_LABELS[singleThumbValue[1]]}
        </div>
      </div>
    </div>
  );
}
