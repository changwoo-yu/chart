import ExerAmountChart from "@/components/charts/exerAmountChart";
import React from "react";

const InbodyAddChart = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className=" w-[400px] h-[400px] border border-black m-2">
        <h1 className="flex justify-center text-2xl m-3">누신사</h1>
        <div className="flex flex-wrap justify-center items-center">
          <ExerAmountChart border="border border-black" />
          <div className="border border-black w-[200px] h-[200px] m-12">박스</div>
          <div className="">
            <button className="">버튼1</button>
            <button>버튼2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InbodyAddChart;
