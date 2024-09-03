import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { useParams } from "react-router-dom";
import { USER_AVERAGE_SESSIONS } from "../data"; // Adjust path as needed

const Linechart = () => {
  const { id } = useParams(); // Extract user ID from URL

  // Retrieve data based on user ID
  const userSessions = USER_AVERAGE_SESSIONS.find(
    (user) => user.userId === parseInt(id, 10)
  );
  const sessionsTime = userSessions ? userSessions.sessions : [];

  // Convert session numbers to day labels
  const changeNumbersToDay = (sessions) => {
    if (sessions) {
      sessions.forEach((session, index) => {
        session.day = ["L", "M", "M", "J", "V", "S", "D"][index];
      });
    }
  };

  changeNumbersToDay(sessionsTime);

  return (
    <LineChart
      width={258}
      height={263}
      data={sessionsTime}
      className="linechart"
    >
      <CartesianGrid strokeDasharray="0 3" />
      <XAxis
        dataKey="day"
        tickLine={false}
        axisLine={false}
        tick={{ fill: "#FFFFFF" }}
        padding={{ left: 15, right: 15 }}
        style={{
          fontSize: "0.8rem",
          opacity: 0.5,
        }}
      />
      <YAxis
        hide={true}
        domain={["dataMin-20", "dataMax+40"]}
        tickLine={false}
        axisLine={false}
      />
      <Tooltip
        itemStyle={{
          color: "black",
        }}
        formatter={(value, name, unit) => [value, unit]}
        labelStyle={{ display: "none" }}
        cursor={{
          stroke: "black",
          strokeOpacity: 0.1,
          strokeWidth: 70,
          height: 100,
        }}
      />
      <Line
        activeDot={{
          fill: "white",
          stroke: "white",
          strokeOpacity: 0.2,
          strokeWidth: 15,
          r: 5,
        }}
        unit="min"
        dataKey="sessionLength"
        type="monotone"
        stroke="white"
        strokeWidth={2}
        dot={false}
      />
      <text
        x={30}
        y={50}
        fill="#FFFFFF"
        style={{
          fontSize: "0.9rem",
          opacity: 0.5,
        }}
      >
        Durée moyenne des
      </text>
      <text
        x={30}
        y={70}
        fill="#FFFFFF"
        style={{
          fontSize: "0.9rem",
          opacity: 0.5,
        }}
      >
        sessions
      </text>
    </LineChart>
  );
};

export default Linechart;
