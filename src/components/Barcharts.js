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

import { useGlobalContext } from "../context";

const Barcharts = () => {
  const { globalDataUser } = useGlobalContext() || {};
  const { sessionsScore } = globalDataUser || {};

  console.log(sessionsScore);

  return (
    <BarChart
      width={730}
      height={250}
      data={sessionsScore}
      margin={{ top: 0, right: 48, bottom: 32, left: 48 }}
      barGap={8}
      barCategoryGap="35%"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey=""
        dy={16}
        padding={{ left: -48, right: -48 }}
        stroke="#9B9EAC"
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
        stroke="#282D30"
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
