import React, { useState } from "react";

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: "Francis",
  //   age: 22,
  //   message: "What a good day to code.",
  // });
  // console.log(person);

  const [name, setName] = useState("Francis");
  const [age, setAge] = useState(22);
  const [message, setMessage] = useState("What a good day to code!");

  //Change Message Function
  const changeMessage = () => {
    // setPerson({ ...person, message: "Keep grinding!" });
    setMessage("Today is sunny");
  };

  return (
    <>
      <h3> {name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={() => changeMessage()}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
