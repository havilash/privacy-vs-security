import { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./SurveyQuestion.css";
import { CUSTOM_LABELS } from "@/consts";

/* eslint-disable no-unused-vars */
interface Props {
  text: string;
  initialValue: number; // Neutral value passed from the parent
  onChange: (value: number) => void; // Notify parent of changes
}
/* eslint-enable no-unused-vars */


export default function SurveyQuestion({
  text,
  initialValue,
  onChange,
}: Props) {
  const [singleThumbValue, setSingleThumbValue] = useState<number[]>([
    0,
    initialValue,
  ]);

  useEffect(() => {
    setSingleThumbValue([0, initialValue]);
  }, [initialValue]);

  const handleSliderChange = (value: number[]) => {
    setSingleThumbValue(value);
    onChange(value[1]);
  };
  return (
    <div className="flex flex-col items-center text-center gap-4 space-x-10 lg:flex-row lg:text-left lg:items-start">
      <p className="w-full lg:w-2/5">{text}</p>
      <div className="w-full lg:w-3/5">
        <RangeSlider
          className="single-thumb w-full"
          value={singleThumbValue}
          onInput={handleSliderChange}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
          min={0}
          max={CUSTOM_LABELS.length - 1}
        />
        <div className="mt-2 text-center text-sm text-gray-500">
          {CUSTOM_LABELS[singleThumbValue[1]]}
        </div>
      </div>
    </div>
  );
}
