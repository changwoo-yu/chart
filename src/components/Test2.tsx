"use client";

import React, { useState } from "react";
import Test3 from "./Test3";

const Test2 = () => {
  const [test, setTest] = useState("");
  const handleClick = () => {
    setTest(test + 5);
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {test}
      <Test3/>
    </div>
  );
};

export default Test2;
