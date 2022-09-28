import React, { useState } from "react";
//useState is a function

const UseStateBasics = () => {
  // console.log(useState("hello"));

  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick} className="btn">
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
