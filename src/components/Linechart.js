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

  /**
   *
   * @param {object} sessionNumber
   */

  const changeNumbersToDay = (sessionNumber) => {
    if (sessionNumber) {
      sessionNumber[0].day = "L";
      sessionNumber[1].day = "M";
      sessionNumber[2].day = "M";
      sessionNumber[3].day = "J";
      sessionNumber[4].day = "V";
      sessionNumber[5].day = "S";
      sessionNumber[6].day = "D";
    }
  };

  changeNumbersToDay(sessionsTime);
  changeNumbersToDay(mockedPerson.mockSessions);

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
