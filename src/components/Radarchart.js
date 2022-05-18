import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { USER_PERFORMANCE } from "../data";

const Radarchart = () => {
  const sessions = USER_PERFORMANCE[0].data;

  return (
    <RadarChart outerRadius={90} width={258} height={263} data={sessions}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};

export default Radarchart;
