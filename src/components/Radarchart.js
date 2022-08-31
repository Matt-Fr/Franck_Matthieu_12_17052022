import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import { useGlobalContext } from "../context";

const Radarchart = () => {
  const { globalDataUser } = useGlobalContext() || {};
  const { performanceByKind } = globalDataUser || "";

  /* Manually updating values in the object to match the design */

  if (performanceByKind) {
    for (let x = 0; x < performanceByKind.length; x++) {
      performanceByKind[0].kind = "Cardio";
      performanceByKind[1].kind = "Energie";
      performanceByKind[2].kind = "Endurance";
      performanceByKind[3].kind = "Force";
      performanceByKind[4].kind = "Vitesse";
      performanceByKind[5].kind = "Intensité";
    }
  } else return "";
  const startAngle = 210;
  return (
    <RadarChart
      width={258}
      height={263}
      data={performanceByKind}
      className="radar"
      outerRadius={80}
      startAngle={startAngle}
      endAngle={startAngle + 360}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        stroke="white"
        tickLine={false}
        tick={{ fill: "white", fontSize: 12, fontWeight: 500 }}
        tickSize={14}
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
