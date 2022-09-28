import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // another way of importing useState hook
  const [people, setPeople] = React.useState(data);
  // console.log(people);

  // function clearBtn() {
  //   setPeople([]);
  // }

  //deletePerson function
  const deletePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => deletePerson(id)}>
              Delete
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
