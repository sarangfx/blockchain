import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import FilterBtn from "./FilterBtn";

const data = [
  {
    name: "Oct",
    Bitcoin: 0.5,
    Ethereum: 0.6,
    DAX: 0.1,
    Nasdaq: 0.2,
    Ripple: 0.3,
  },
  {
    name: "Nov",
    Bitcoin: 0.3,
    Ethereum: 0.2,
    DAX: 0.4,
    Nasdaq: 0.7,
    Ripple: 0.8,
  },
  {
    name: "Dec",
    Bitcoin: 0.7,
    Ethereum: 0.4,
    DAX: 0.24,
    Nasdaq: 0.4,
    Ripple: 0.1,
  },
  {
    name: "Jan",
    Bitcoin: 0.3,
    Ethereum: 0.1,
    DAX: 0.2,
    Nasdaq: 0.5,
    Ripple: 0.4,
  },
  {
    name: "Feb",
    Bitcoin: 0.5,
    Ethereum: 0.6,
    DAX: 0.1,
    Nasdaq: 0.2,
    Ripple: 0.3,
  },
  {
    name: "Mar",
    Bitcoin: 0.7,
    Ethereum: 0.2,
    DAX: 0.1,
    Nasdaq: 0.3,
    Ripple: 0.3,
  },
];

export default function SortinoRatio() {
  return (
    <div className="w-3/4  bg-[#1D2031]   p-3 border rounded-md border-[#2b3152]  hover:bg-[#1D2031]/5 cursor-pointer ">
      <div className="grid grid-cols-2 gap-2">
        <div>Sortino Ratio</div>
        <div className="col-end-7 space-x-1 ">
          <FilterBtn name="7D" />
          <FilterBtn name="1M" />
          <FilterBtn name="3M" />
          <FilterBtn name="6M" />
          <FilterBtn name="1Y" />
          <FilterBtn name="YTD" />
          <FilterBtn name="Custom" />
          <FilterBtn name="All" />
        </div>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={1100}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bitcoin" fill="#4B90E2" radius={[15, 15, 0, 0]} />
          <Bar dataKey="Ethereum" fill="#FF46AA" radius={[15, 15, 0, 0]} />
          <Bar dataKey="DAX" fill="#F5A622" radius={[15, 15, 0, 0]} />
          <Bar dataKey="Nasdaq" fill="#F52222" radius={[15, 15, 0, 0]} />
          <Bar dataKey="Ripple" fill="#BA28FF" radius={[15, 15, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
