"use client";
import React from "react";
import { Radar, RadarChart, PolarAngleAxis, PolarRadiusAxis } from "recharts";

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
        const strokeColor = i === polarRadius.length - 1 ? "blue" : "green";
        const borderColor = i === polarRadius.length - 1 ? "10" : "1";

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

export default function ExerAmountChart() {
  return (
    <RadarChart cx={300} cy={250} outerRadius={120} width={500} height={500} data={data}>
      {CustomPolarGrid({
        cx: 300,
        cy: 250,
        polarRadius: [35.61, 54.95, 78.35, 99.72, 120],
        numberOfSides: 5,
      })}
      <PolarAngleAxis dataKey="subject" style={{ fontSize: "30", fontWeight: "500" }} />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#00ACF2" fill="#B2E6FA" fillOpacity={0.6} />
    </RadarChart>
  );
}
