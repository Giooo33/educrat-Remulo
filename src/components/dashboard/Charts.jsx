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
  { name: "Fev", value: 100 },
  { name: "Mar", value: 205 },
  { name: "Abr", value: 110 },
  { name: "Mai", value: 165 },
  { name: "Jun", value: 145 },
  { name: "Jul", value: 180 },
  { name: "Ago", value: 156 },
  { name: "Set", value: 148 },
  { name: "Out", value: 220 },
  { name: "Nov", value: 180 },
  { name: "Dez", value: 245 },
];

const Charts = () => {
  const chart = (interval) => (
    <ResponsiveContainer height={250} width="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="" />
        <XAxis tick={{ fontSize: 12 }} dataKey="name" interval={interval} />
        <YAxis
          tick={{ fontSize: 12 }}
          domain={[0, 300]}
          tickCount={7}
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

export default Charts;
