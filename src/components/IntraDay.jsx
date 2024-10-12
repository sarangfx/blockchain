import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Bitcoin",
    Bitcoin: 0.38,
  },
  {
    name: "Eth",
    Ethereum: 0.2,
  },
  {
    name: "DAX",
    DAX: 0.21,
  },
  {
    name: "Nasdaq",
    Nasdaq: 0.15,
  },
  {
    name: "Ripple",
    Ripple: 0.1,
  },
];

export default function App() {
  return (
    <div className="w-1/4 h-[24rem] bg-[#1D2031]   p-3 border rounded-md border-[#2b3152]  hover:bg-[#1D2031]/5 cursor-pointer">
      Average Intra-Day Move
      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart layout="vertical" width={600} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4F4F4F" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />

          <Bar
            dataKey="Bitcoin"
            barSize={15}
            fill="#4B90E2"
            radius={[0, 10, 10, 0]}
          />
          <Bar
            dataKey="Ethereum"
            barSize={15}
            fill="#FF46AA"
            radius={[0, 10, 10, 0]}
          />
          <Bar
            dataKey="DAX"
            barSize={15}
            fill="#F5A622"
            radius={[0, 10, 10, 0]}
          />
          <Bar
            dataKey="Nasdaq"
            barSize={15}
            fill="#F52222"
            radius={[0, 10, 10, 0]}
          />
          <Bar
            dataKey="Ripple"
            barSize={15}
            fill="#BA28FF"
            radius={[0, 10, 10, 0]}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
