import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Use Effect rendered");
    if (value >= 1) {
      document.title = `New Messages ${value}`;
    }
  }, [value]);

  console.log("Rendered outside the useEffect");
  return (
    <>
      <h1>{value}</h1>
      <button type="button" onClick={() => setValue(value + 1)}>
        Increase Value
      </button>
    </>
  );
};

export default UseEffectBasics;
