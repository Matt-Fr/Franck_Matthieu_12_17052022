import React from "react";
import { useParams } from "react-router-dom";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { USER_PERFORMANCE } from "../data";

const Radarchart = () => {
  const identity = useParams().id;
  const idendityNum = Number(identity);
  const performance = USER_PERFORMANCE.find(
    (user) => user.userId === idendityNum
  );

  const sessions = performance.data;

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
