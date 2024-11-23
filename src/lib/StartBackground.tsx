interface RectProps {
  bgColor: string;
  tailwindClasses: string;
}

function Rect({ bgColor, tailwindClasses }: RectProps) {
  return (
    <div
      className={`border-body-color absolute border-8 ${tailwindClasses}`}
      style={{
        backgroundColor: bgColor,
      }}
    ></div>
  );
}

export default function StartBackground() {
  const rects = [
    {
      bgColor: "#0D2748",
      tailwindClasses: "left-[30%] top-[16%] w-[53%] h-[64%]",
    },
    {
      bgColor: "#006C7B",
      tailwindClasses: "left-[47%] top-[74%] w-[17%] h-[15%]",
    },
    {
      bgColor: "#006C7B",
      tailwindClasses: "left-[19%] top-[-7%] w-[67%] h-[33%]",
    },
    {
      bgColor: "#005773",
      tailwindClasses: "left-[19%] top-[63%] w-[31%] h-[37%]",
    },
    {
      bgColor: "#003551",
      tailwindClasses: "left-[-2%] top-[30%] w-[41%] h-[57%]",
    },
    {
      bgColor: "#005069",
      tailwindClasses: "left-[17%] top-[6%] w-[31%] h-[33%]",
    },
    {
      bgColor: "#005E73",
      tailwindClasses: "left-[77%] top-[39%] w-[29%] h-[52%]",
    },
    {
      bgColor: "#003D60",
      tailwindClasses: "left-[59%] top-[55%] w-[29%] h-[40%]",
    },
    {
      bgColor: "#008986",
      tailwindClasses: "left-[-3%] top-[72%] w-[12%] h-[19%]",
    },
    {
      bgColor: "#007E85",
      tailwindClasses: "left-[69%] top-[-14%] w-[32%] h-[57%]",
    },
    {
      bgColor: "#007B81",
      tailwindClasses: "left-[-3%] top-[-7%] w-[29%] h-[49%]",
    },
  ];

  return (
    <div className="absolute left-0 top-0 h-[110vh] w-full">
      {rects.map((rect, index) => (
        <Rect key={index} {...rect} />
      ))}
    </div>
  );
}
