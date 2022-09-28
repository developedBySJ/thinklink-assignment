import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import lineChartData from "../../dummyData/lineChart";

export const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={lineChartData}
        margin={{
          left: 16,
        }}
      >
        <Line
          type="linear"
          dataKey="sales"
          stroke="#2FCA72"
          strokeWidth={2}
          dot={{
            fill: "#2FCA72",
            stroke: "#ffffff",
            strokeWidth: 2,
            r: 5,
          }}
          activeDot={{
            fill: "##485572",
          }}
        />
        <CartesianGrid strokeDasharray="1 2" />
        <XAxis
          axisLine={false}
          type="category"
          dataKey="day"
          tickMargin={12}
          style={{ fontWeight: 700, opacity: 0.5 }}
        />
        <YAxis
          axisLine={false}
          tickMargin={12}
          tickFormatter={(value) => `$${value / 1000}K`}
          style={{ fontWeight: 700, opacity: 0.5 }}
        />
        <Tooltip
          content={({ payload, active }) =>
            active && (
              <p className="bg-body-text rounded text-white px-2 py-1">
                ${payload?.[0]?.value}
              </p>
            )
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
