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
import { useGlobalContext } from "../context";

const Radarchart = () => {
  const { globalDataUser } = useGlobalContext() || {};
  const { kind, performanceByKind } = globalDataUser || "";

  console.log(kind);

  /* Manually updating values in the object to match mockup design */
  for (let x = 0; x < performanceByKind.length; x++) {
    performanceByKind[0].kind = "Cardio";
    performanceByKind[1].kind = "Energie";
    performanceByKind[2].kind = "Endurance";
    performanceByKind[3].kind = "Force";
    performanceByKind[4].kind = "Vitesse";
    performanceByKind[5].kind = "Intensité";
  }

  console.log(performanceByKind);

  return (
    <RadarChart
      outerRadius={90}
      width={258}
      height={263}
      data={performanceByKind}
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
