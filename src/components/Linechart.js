import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";
import { USER_AVERAGE_SESSIONS } from "../data";

const Linechart = () => {
  const { sessions } = USER_AVERAGE_SESSIONS[0];

  return (
    <LineChart width={258} height={263} data={sessions} className="linechart">
      <CartesianGrid strokeDasharray="0 3" />
      <XAxis
        dataKey="day"
        stroke="rgba(255, 255, 255, 0.6)"
        axisLine={false}
        dy={10}
        tick={{
          fontSize: 12,
          fontWeight: 500,
        }}
        tickLine={false}
      />
      <YAxis dataKey="sessionLength" domain={[0, "dataMax + 60"]} hide={true} />
      <Tooltip />

      <Line
        activeDot={{
          stroke: "rgba(255,255,255, 0.6)",
          strokeWidth: 2,
          r: 5,
        }}
        dataKey="sessionLength"
        dot={false}
        stroke="rgba(255, 255, 255, 0.6)"
        strokeWidth={1.5}
        type={"monotone"}
      />
    </LineChart>
  );
};

export default Linechart;
