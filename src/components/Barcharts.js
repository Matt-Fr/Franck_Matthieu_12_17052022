import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { USER_ACTIVITY } from "../data";

const Barcharts = () => {
  const { sessions } = USER_ACTIVITY[0];

  return (
    <BarChart
      width={730}
      height={250}
      data={sessions}
      margin={{ top: 0, right: 48, bottom: 32, left: 48 }}
      barGap={8}
      barCategoryGap="35%"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="day"
        dy={16}
        padding={{ left: -48, right: -48 }}
        stroke="#DEDEDE"
        tick={{ fontSize: 14, fontWeight: 500 }}
        tickLine={false}
      />
      <YAxis
        allowDecimals={false}
        axisLine={false}
        dataKey="kilogram"
        domain={["dataMin - 1", "dataMax + 2"]}
        dx={48}
        orientation="right"
        stroke="#DEDEDE"
        tickLine={false}
      />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="kilogram"
        fill="#282D30"
        radius={[50, 50, 0, 0]}
        maxBarSize={8}
      />
      <Bar
        dataKey="calories"
        fill="#E60000"
        radius={[50, 50, 0, 0]}
        maxBarSize={8}
      />
    </BarChart>
  );
};

export default Barcharts;
