import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import FilterBtn from "./FilterBtn";

const data = [
  {
    name: "2018",
    BTC: 400,
    Amount: 2500,
  },
  {
    name: "2019",
    BTC: 340,
    Amount: 2100,
  },
  {
    name: "2020",
    BTC: 1400,
    Amount: 800,
  },
  {
    name: "2021",
    BTC: 300,
    Amount: 2400,
  },
  {
    name: "2022",
    BTC: 1220,
    Amount: 400,
  },
  {
    name: "2023",
    BTC: 1800,
    Amount: 1100,
  },
  {
    name: "2024",
    BTC: 400,
    Amount: 2400,
  },
];

export default function App() {
  return (
    <div className="w-1/2 h-80 bg-[#1D2031] p-3 border rounded-md border-[#2b3152]  hover:bg-[#1D2031]/5 cursor-pointer ">
      <div className="grid grid-cols-2 gap-2">
        <div>Large Transaction Volume ($)</div>
        <div className="col-end-7 space-x-1 ">
          <FilterBtn name="1M" />
          <FilterBtn name="3M" />
          <FilterBtn name="6M" />
          
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="BTC" stroke="#F5A622" fill="#F5A622" />
          <Area
            type="monotone"
            dataKey="Amount"
            stroke="#4B90E2"
            fill="#4B90E2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
