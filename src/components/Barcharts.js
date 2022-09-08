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
  const { globalDataUser, mockedPerson, mockUserActive } =
    useGlobalContext() || {};
  const { sessionsScore } = globalDataUser || {};
  const contentStyle = {
    color: "#74798c",
    fontSize: "14px",
  };
  const renderLegend = (value) => {
    return <span style={contentStyle}>{value}</span>;
  };

  return (
    <BarChart
      width={835}
      height={320}
      data={mockUserActive ? mockedPerson.mockSessionsScore : sessionsScore}
      margin={{ top: 0, right: 48, bottom: 32, left: 48 }}
      barGap={8}
      barCategoryGap="35%"
      style={{ backgroundColor: "#FBFBFB" }}
    >
      <CartesianGrid
        strokeDasharray="2 2"
        horizontal={true}
        vertical={false}
        stroke="#DEDEDE"
      />

      <XAxis
        dataKey=""
        dy={16}
        padding={{ left: -48, right: -48 }}
        stroke="#9B9EAC"
        tick={{ fontSize: 14, fontWeight: 500 }}
        tickLine={false}
      />
      <YAxis
        yAxisId="right"
        allowDecimals={false}
        axisLine={false}
        dataKey="calories"
        domain={["dataMin - 100", "dataMax + 100"]}
        dx={48}
        orientation="left"
        stroke="#9B9EAC"
        tickLine={false}
        hide={true}
      />
      <YAxis
        yAxisId="left"
        allowDecimals={false}
        axisLine={false}
        dataKey="kilogram"
        domain={["dataMin - 1", "dataMax + 2"]}
        dx={48}
        orientation="right"
        stroke="#9B9EAC"
        tickLine={false}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: "#E60000",
        }}
        itemStyle={{
          color: "white",
        }}
        labelStyle={{ display: "none" }}
        formatter={(value, name, unit) => [value, unit]}
      />
      <Legend
        align="right"
        verticalAlign="top"
        iconType="circle"
        iconSize={9}
        height={60}
        formatter={renderLegend}
      />
      <Bar
        yAxisId="left"
        dataKey="kilogram"
        fill="#282D30"
        radius={[50, 50, 0, 0]}
        maxBarSize={8}
        name="Poids (kg)"
        unit=" kg"
      />
      <Bar
        yAxisId="right"
        dataKey="calories"
        fill="#E60000"
        radius={[50, 50, 0, 0]}
        maxBarSize={8}
        name="Calories brûlées (kcal)"
        unit=" kcal"
      />
    </BarChart>
  );
};

export default Barcharts;
