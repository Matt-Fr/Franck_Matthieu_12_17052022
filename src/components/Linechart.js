import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { useGlobalContext } from "../context";

const Linechart = () => {
  const { globalDataUser, mockedPerson, mockUserActive } =
    useGlobalContext() || {};
  const { sessionsTime } = globalDataUser || {};

  console.log(mockedPerson);

  if (sessionsTime) {
    for (let x = 0; x < sessionsTime.length; x++) {
      sessionsTime[0].day = "L";
      sessionsTime[1].day = "M";
      sessionsTime[2].day = "M";
      sessionsTime[3].day = "J";
      sessionsTime[4].day = "V";
      sessionsTime[5].day = "S";
      sessionsTime[6].day = "D";
    }
  } else return "";

  if (mockedPerson.mockSessions) {
    mockedPerson.mockSessions[0].day = "L";
    mockedPerson.mockSessions[1].day = "M";
    mockedPerson.mockSessions[2].day = "M";
    mockedPerson.mockSessions[3].day = "J";
    mockedPerson.mockSessions[4].day = "V";
    mockedPerson.mockSessions[5].day = "S";
    mockedPerson.mockSessions[6].day = "D";
  }

  return (
    <LineChart
      width={258}
      height={263}
      data={mockUserActive ? mockedPerson.mockSessions : sessionsTime}
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
