import React from "react";
import { useParams } from "react-router-dom";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { USER_MAIN_DATA } from "../data";

const Radialbarchart = () => {
  const identity = useParams().id;
  const idendityNum = Number(identity);
  const profil = USER_MAIN_DATA.find((user) => user.id === idendityNum);
  console.log(profil);

  const { todayScore } = profil;

  const data = [{ name: "L1", value: todayScore }];
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
        y={131.5}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="black"
      >
        {todayScore * 100}% de votre objectif
      </text>
      <text
        className="pieText"
        x={129}
        y={120}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="black"
      >
        {todayScore * 100}% de votre objectif
      </text>
    </RadialBarChart>
  );
};

export default Radialbarchart;
