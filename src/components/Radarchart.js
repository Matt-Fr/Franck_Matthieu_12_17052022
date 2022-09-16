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
  const { globalDataUser, mockedPerson, mockUserActive } =
    useGlobalContext() || {};
  const { performanceByKind } = globalDataUser || "";

  /**
   * manually update numbers to performance type to match the design
   * @param {object} performance
   */

  const changeNumbersToPerformance = (performance) => {
    if (performance) {
      performance[0].kind = "Cardio";
      performance[1].kind = "Energie";
      performance[2].kind = "Endurance";
      performance[3].kind = "Force";
      performance[4].kind = "Vitesse";
      performance[5].kind = "Intensité";
    }
  };

  changeNumbersToPerformance(performanceByKind);
  changeNumbersToPerformance(mockedPerson.mockPerformance);

  const startAngle = 210;
  return (
    <RadarChart
      width={258}
      height={263}
      data={mockUserActive ? mockedPerson.mockPerformance : performanceByKind}
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
