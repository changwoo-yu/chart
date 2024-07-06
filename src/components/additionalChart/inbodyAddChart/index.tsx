import ExerAmountChart from "@/components/charts/exerAmountChart";
import React from "react";

const InbodyAddChart = () => {
  return (
    <div className="w-[800px] h-[800px] border border-white rounded-full">
      <h1 className="flex justify-center text-2xl">제목</h1>
      <div className="flex items-center ">
        <ExerAmountChart />
        <div className="border border-black w-[200px] h-[200px] m-[-75px]">박스</div>
      </div>
      <div className="flex justify-center ">
        <button className="m-[20px]">버튼1</button>
        <button>버튼2</button>
      </div>
    </div>
  );
};

export default InbodyAddChart;
