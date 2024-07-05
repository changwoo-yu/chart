"use client";

import React, { useState } from "react";
import Test4 from "./Test4";

const Test3 = () => {
  const [test, setTest] = useState("");
  const handleClick = () => {
    setTest(test + 5);
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {test}
      <Test4 />
    </div>
  );
};

export default Test3;
