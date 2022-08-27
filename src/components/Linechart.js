import React from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { USER_AVERAGE_SESSIONS } from "../data";
import { useGlobalContext } from "../context";

const Linechart = () => {
  const { globalDataUser } = useGlobalContext() || {};
  const identity = useParams().id;
  const idendityNum = Number(identity);
  const averageSessions = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === idendityNum
  );
  const { sessions } = averageSessions;

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
