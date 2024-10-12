import React from "react";
import PricePerformance from "./PricePerformance";
import Rank from "./Rank";
import CorrelationMatrix from "./CorrelationMatrix";
import LargeTxn from "./LargeTxn";
import SortinoRatio from "./SortinoRatio";
import IntraDay from "./IntraDay";


function Dashboards() {
  return (
    <>
      <div className="font-medium flex justify-between gap-2 m-2 ">
        <PricePerformance />
        <Rank />
      </div>
      
      <div className="font-medium flex flex-row  gap-2 m-2">
        <CorrelationMatrix />
        <LargeTxn />
      </div>
      <div className="font-medium flex flex-row  gap-2 m-2">
        <SortinoRatio />
        <IntraDay />
      </div>
    </>
  );
}

export default Dashboards;
