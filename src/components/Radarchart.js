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
    <RadarChart
      outerRadius={90}
      width={258}
      height={263}
      data={sessions}
      className="radar"
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        stroke="white"
        tickLine={false}
        tick={{
          fontSize: 9,
          fontWeight: 500,
        }}
      />
      <PolarRadiusAxis
        domain={[0, 300]}
        tick={false}
        axisLine={false}
        tickCount={6}
      />
      <Radar
        dataKey="value"
        stroke="#FF0101B2"
        fill="#FF0101B2"
        fillOpacity={0.8}
      />
    </RadarChart>
  );
};

export default Radarchart;
