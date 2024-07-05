"use client";

import React, { useState } from "react";

const Test4 = () => {
  const [test, setTest] = useState("");
  const handleClick = () => {
    setTest(test + 5);
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      {test}
    </div>
  );
};

export default Test4;
