"use client";
import React from "react";
import { TextProps } from "recharts";
interface CustomTickProps extends TextProps {
  payload: {
    value: string;
  };
  index: number;
}

export default function CustomTick({ payload, index, x, y, textAnchor }: CustomTickProps) {
  // 각 텍스트에 대해 개별적으로 dx와 dy 값을 설정
  const dxValues = [0, -15, -13, 13, 15];
  const dyValues = [0, -10, 14, 14, -10];
console.log(x)
  return (
    <text
      x={x}
      y={y}
      dy={dyValues[index]}
      dx={dxValues[index]}
      fill="#575757"
      fontSize={12}
      letterSpacing="0%"
      fontWeight="500"
      textAnchor={textAnchor}
    >
      {payload.value}
    </text>
  );
}
