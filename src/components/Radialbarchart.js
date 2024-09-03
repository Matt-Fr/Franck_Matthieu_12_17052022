import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { useParams } from "react-router-dom";
import { USER_MAIN_DATA } from "../data"; // Adjust path as needed

const Radialbarchart = () => {
  const { id } = useParams(); // Extract user ID from URL

  // Retrieve user data based on user ID
  const user = USER_MAIN_DATA.find((user) => user.id === parseInt(id, 10));
  const score = user ? user.todayScore || user.score : 0;
  const data = [
    {
      name: "L1",
      value: score,
    },
  ];

  const circleSize = 50;

  return (
    <RadialBarChart
      width={258}
      height={263}
      innerRadius={130}
      outerRadius={100}
      barSize={2}
      data={data}
      startAngle={90}
      endAngle={-270}
      fill="#FBFBFB"
      className="radial"
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 1]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        clockWise
        dataKey="value"
        cornerRadius={circleSize / 2}
        fill="#FF0000"
        barSize={15}
      />
      <text
        className="pieText"
        x={129}
        y={120}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#282D30"
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
        }}
      >
        {score * 100}%
      </text>
      <text
        className="pieText"
        x={129}
        y={150}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#74798C"
        style={{
          fontSize: "1.1rem",
          color: "#74798C",
        }}
      >
        de votre
      </text>
      <text
        className="pieText"
        x={129}
        y={170}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#74798C"
        style={{
          fontSize: "1.1rem",
          color: "#74798C",
        }}
      >
        objectif
      </text>
    </RadialBarChart>
  );
};

export default Radialbarchart;
