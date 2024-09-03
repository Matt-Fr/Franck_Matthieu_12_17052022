import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { useParams } from "react-router-dom";
import { USER_PERFORMANCE } from "../data"; // Adjust path as needed

const Radarchart = () => {
  const { id } = useParams(); // Extract user ID from URL

  // Retrieve user performance data based on user ID
  const userPerformance = USER_PERFORMANCE.find(
    (performance) => performance.userId === parseInt(id, 10)
  );

  const performanceByKind = userPerformance ? userPerformance.data : [];

  /**
   * Manually update numbers to performance type to match the design
   * @param {object} performance
   */
  const changeNumbersToPerformance = (performance) => {
    if (performance) {
      performance.forEach((item) => {
        switch (item.kind) {
          case 1:
            item.kind = "Cardio";
            break;
          case 2:
            item.kind = "Energie";
            break;
          case 3:
            item.kind = "Endurance";
            break;
          case 4:
            item.kind = "Force";
            break;
          case 5:
            item.kind = "Vitesse";
            break;
          case 6:
            item.kind = "Intensité";
            break;
          default:
            break;
        }
      });
    }
  };

  changeNumbersToPerformance(performanceByKind);

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
