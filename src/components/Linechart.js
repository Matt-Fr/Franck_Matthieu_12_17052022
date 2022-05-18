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

  console.log(sessions);
  return (
    <LineChart width={258} height={263} data={sessions}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    </LineChart>
  );
};

export default Linechart;
