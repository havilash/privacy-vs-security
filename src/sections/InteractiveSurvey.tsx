import { useState } from "react";

import SurveyQuestion from "@/components/SurveyQuestion";

export default function InteractiveSurvey() {
  const questions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec semper justo, ac laoreet arcu?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec semper justo, ac laoreet arcu?",
  ];

  // Initialize responses with the neutral value (2 for each question)
  const neutralValue = 2;
  const [responses, setResponses] = useState<number[]>(
    Array(questions.length).fill(neutralValue)
  );

  const handleSliderChange = (index: number, value: number) => {
    setResponses((prev) => {
      const updated = [...prev];
      updated[index] = value; // Update the specific question's response
      return updated;
    });
  };

  return (
    <section className="flex flex-col items-center px-4 py-10">
      {/* Header Section */}
      <div className="mb-6 flex flex-col items-center">
        <h1>Now you!</h1>
        <h2 className="mt-1">Dark or Light? Security or Privacy?</h2>
      </div>

      {/* Questions Section */}
      <div className="w-full">
        {/* Question Labels */}
        <div className="mb-4 grid grid-cols-3 border-b border-gray-700 pb-2 text-sm text-gray-300">
          <h3 className="text-center text-[#D9D9D9]">Question</h3>
          <h3 className="text-center text-[#D9D9D9]">
            Stimme überhaupt nicht zu
          </h3>
          <h3 className="text-center text-[#D9D9D9]">Stimme voll zu</h3>
        </div>

        {/* Survey Questions */}
        <div className="grid gap-y-6">
          {questions.map((questionText, index) => (
            <SurveyQuestion
              key={index}
              text={questionText}
              initialValue={responses[index]} // Pass initial value to slider
              onChange={(value) => handleSliderChange(index, value)} // Handle value changes
            />
          ))}
        </div>
      </div>

      {/* Responses Output */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold">Responses:</h3>
        <p>{JSON.stringify(responses)}</p>
      </div>
    </section>
  );
}
