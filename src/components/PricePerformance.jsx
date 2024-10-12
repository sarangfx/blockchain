import { Button } from "@headlessui/react";
import React from "react";
import FilterBtn from "./FilterBtn";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Bitcoin: 50,
    Ethereum: 85,
    DAX: 30,
    Nasdaq: 43,
    Ripple: 38,
  },
  {
    name: "Feb",
    Bitcoin: 85,
    Ethereum: 60,
    DAX: 50,
    Nasdaq: 49,
    Ripple: 69,
  },
  {
    name: "Mar",
    Bitcoin: 66,
    Ethereum: 73,
    DAX: 40,
    Nasdaq: 78,
    Ripple: 15,
  },
  {
    name: "Apr",
    Bitcoin: 38,
    Ethereum: 43,
    DAX: 34,
    Nasdaq: 25,
    Ripple: 60,
  },
  {
    name: "May",
    Bitcoin: 59,
    Ethereum: 50,
    DAX: 56,
    Nasdaq: 23,
    Ripple: 45,
  },
  {
    name: "Jun",
    Bitcoin: 98,
    Ethereum: 35,
    DAX: 25,
    Nasdaq: 78,
    Ripple: 43,
  },
  {
    name: "Jul",
    Bitcoin: 76,
    Ethereum: 43,
    DAX: 67,
    Nasdaq: 34,
    Ripple: 87,
  },
];

export default function App() {
  return (
    <div className="w-4/5  bg-[#1d2031]  rounded-md p-3 border border-x-1 border-[#2b3152]  hover:bg-[#1D2031]/5 cursor-pointer ">
      <div className="grid grid-cols-2 gap-2 ">
        <div>Price Performance (%)</div>
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
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 50, right: 50 }} />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="Bitcoin"
            stroke="#4B90E2"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Ethereum" stroke="#FF46AA" />
          <Line type="monotone" dataKey="DAX" stroke="#F5A622" />
          <Line type="monotone" dataKey="Nasdaq" stroke="#F52222" />
          <Line type="monotone" dataKey="Ripple" stroke="#BA28FF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
