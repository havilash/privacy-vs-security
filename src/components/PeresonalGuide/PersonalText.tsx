import React from "react";
import { CUSTOM_LABELS } from "@/consts";

type SliderBarProps = {
  responses: number[];
};

const SliderBar: React.FC<SliderBarProps> = ({ responses }) => {
  // Calculate the total of all responses
  const responsesTotal = responses.reduce((a, b) => a + b, 0);

  // Calculate the percentage
  const percent = (responsesTotal / (responses.length * (CUSTOM_LABELS.length - 1)));

  // Determine which "third" the percentage falls into
  let third: 1 | 2 | 3 = 1;  // Explicit type for third: it can only be 1, 2, or 3

  if (percent < 1/3) {
    third = 1;
  } else if (percent >= 1/3 && percent < 2/3) {
    third = 2;
  } else if (percent >= 2/3) {
    third = 3;
  }

  const responseThirdHeader: { [key in 1 | 2 | 3]: string } = {
    1: "GAY 1",
    2: "GAY 2",
    3: "GAY 3",
  };

    const responseThirdBody: { [key in 1 | 2 | 3]: string } = {
    1: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum. quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
    2: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum. quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
    3: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum. quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
  };

  const header = responseThirdHeader[third];
  const body = responseThirdBody[third]

  return (
    <div className="w-full h-6 rounded-lg">
      <h2 className="py-4">
        {header} 
      </h2>
      <p >
        {body}
      </p>
    </div>
  );
};

export default SliderBar;
