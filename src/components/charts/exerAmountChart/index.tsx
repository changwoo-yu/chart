"use client";
import React, { useId } from "react";
import { Radar, RadarChart, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import CustomTick from "../customTick";

console.error = (...m: any) => {
  if (/defaultProps/.test(m[0])) return;
};

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
];

const calculatePolygonPoints = (cx: any, cy: any, radius: any, numberOfSides = 5) => {
  const angleIncrement = (2 * Math.PI) / numberOfSides;
  let points = "";

  for (let i = 0; i < numberOfSides; i++) {
    const angle = i * angleIncrement;
    const x = cx + radius * Math.cos(angle - Math.PI / 2);
    const y = cy + radius * Math.sin(angle - Math.PI / 2);

    if (i === 0) {
      points += `M ${x},${y}`;
    } else {
      points += `L ${x},${y}`;
    }
  }

  points += "Z";
  return points;
};

const CustomPolarGrid = ({ cx, cy, polarRadius, numberOfSides }: any) => {
  return (
    <g className="recharts-polar-grid">
      {polarRadius.map((radius: any, i: any) => {
        const points = calculatePolygonPoints(cx, cy, radius, numberOfSides);
        const strokeColor = i === polarRadius.length - 1 ? "#9aedba" : "#62f0dd";
        const borderColor = i === polarRadius.length - 1 ? "5" : "1";

        return (
          <path
            key={`radius-line-${i}`}
            stroke={strokeColor}
            strokeWidth={borderColor}
            fill="none"
            className="recharts-polar-grid-concentric-polygon"
            d={points}
          />
        );
      })}
    </g>
  );
};

export default function ExerAmountChart({ border }: { border: string }) {
  const chartId = useId();
  return (
    <RadarChart className={`${border} `} id={chartId} cy={250} outerRadius={120} width={600} height={400} data={data}>
      {CustomPolarGrid({
        cx: 300,
        cy: 250,
        polarRadius: [35.61, 54.95, 78.35, 99.72, 120],
        numberOfSides: 5,
      })}
      <PolarAngleAxis
        dataKey="subject"
        tick={(props) => <CustomTick {...props} />}
        // style={{ stroke: "#57e68e", fontSize: "20", fontWeight: "300" }}
      />
      <PolarRadiusAxis />
      <Radar isAnimationActive={false} name="Mike" dataKey="A" stroke="#f05de8" fill="#b6f0cc" fillOpacity={0.6} />
    </RadarChart>
  );
}
