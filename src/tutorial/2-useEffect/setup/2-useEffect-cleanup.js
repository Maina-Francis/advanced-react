import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);

  //add event listener to useEffect to listen for the change in window size
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log(size);

    //cleanup function for the eventlistener
    return () => {
      // console.log("clean up function");
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>Window Size</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
