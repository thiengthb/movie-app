import React from "react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <svg
        className="w-16 h-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="100%"
        height="100%"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "transparent",
        }}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <circle
            strokeDasharray="169.64600329384882 58.548667764616276"
            r={36}
            strokeWidth={10}
            stroke="#df9343"
            fill="none"
            cy={50}
            cx={50}
          >
            <animateTransform
              keyTimes="0;1"
              values="0 50 50;360 50 50"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            />
          </circle>
          <g />
        </g>
      </svg>

      <p className="text-lg text-[gray] text-bold">Loading</p>
    </div>
  );
}
