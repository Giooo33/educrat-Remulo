import React from "react";
import {
  LineChart,
  Tooltip,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 148 },
  { name: "Mar", value: 205 },
  { name: "Mai", value: 165 },
  { name: "Jul", value: 180 },
  { name: "Set", value: 148 },
  { name: "Nov", value: 180 },
];

const ChartsTwo = () => {
  const chart = (interval) => (
    <ResponsiveContainer height={100} width="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="" />
        <XAxis tick={{ fontSize: 12 }} dataKey="name" interval={interval} />
        <YAxis
          tick={{ fontSize: 12 }}
          domain={[0, 300]}
          tickCount={4}
          interval={interval}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          strokeWidth={2}
          stroke="#336CFB"
          fill="#336CFB"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      {chart("preserveEnd")}
      {/* {chart('preserveStart')}
      {chart('preserveStartEnd')}
      {chart('equidistantPreserveStart')}
      {chart(1)} */}
    </>
  );
};

export default ChartsTwo;
