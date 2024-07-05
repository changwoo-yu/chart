"use client";
import React, { useState } from "react";
import Test2 from "./Test2";

const Test1 = () => {
  const [test, setTest] = useState("");
  const handleClick = () => {
    setTest(test + 5);
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {test}
      <Test2 />
    </div>
  );
};

export default Test1;
