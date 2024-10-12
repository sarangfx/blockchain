import React from "react";
import GaugeChart from "react-gauge-chart";

function Rank() {
  return (
    <>
      <div className="w-1/5  bg-[#1D2031] p-3 space-y-8 border border-x-1 rounded-md border-[#2b3152]  hover:bg-[#1D2031]/5 cursor-pointer  ">
        <GaugeChart
          id="gauge-chart2"
          arcWidth={0.3}
          nrOfLevels={4}
          percent={0.65}
          textComponent="Rank"
        />
        <span className="font-bold grid grid-rows-4 grid-flow-col justify-items-center bg-gradient-to-b from-lime-400 from-10% via-amber-500 via-30% to-red-700 to-100% text-transparent bg-clip-text">
          <div>Neutral</div>
          <div>Moderate</div>
          <div>Aggressive</div>
          <div>Highly Aggressive</div>
        </span>
      </div>
    </>
  );
}

export default Rank;
