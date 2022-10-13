import React, { useState, useEffect } from "react";

// By default, useEffect runs after every re-render
//cleanup function
//second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //we place a callback function inside our useEffect hook
  useEffect(() => {
    console.log("Call useEffect");
    if (value >= 1) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);
  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Increment Me
      </button>
    </>
  );
};

export default UseEffectBasics;
