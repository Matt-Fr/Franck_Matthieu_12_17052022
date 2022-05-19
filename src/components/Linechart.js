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
      <XAxis dataKey="day" />
      <YAxis hide />
      <Tooltip />

      <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
    </LineChart>
  );
};

export default Linechart;
