import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { name: "Jan", payments: 4000 },
  { name: "Feb", payments: 3000 },
  { name: "Mar", payments: 2000 },
  { name: "Apr", payments: 2780 },
  { name: "May", payments: 1890 },
  { name: "Jun", payments: 2390 },
  { name: "Jul", payments: 3490 },
  { name: "Aug", payments: 4000 },
  { name: "Sep", payments: 3000 },
  { name: "Oct", payments: 2000 },
  { name: "Nov", payments: 2780 },
  { name: "Dec", payments: 1890 },
];

const PaymentChart = () => {
  return (
    <div className="h-full rounded-lg col-span-4">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFD49D",
                border: "none",
                borderRadius: "8px",
                color: "#000",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ fontWeight: "bold", color: "#000" }}
              itemStyle={{ color: "#000" }}
            />
            {/* Shadow/area under the line */}
            <Area
              type="monotone"
              dataKey="payments"
              stroke="none"
              fill="#FFD49D"
              fillOpacity={0.2}
            />
            <Line
              type="monotone"
              dataKey="payments"
              stroke="#FFD49D"
              strokeWidth={2} // thinner line
              dot={false}
              activeDot={{ r: 5, fill: "#FFD49D", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentChart;
