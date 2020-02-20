import React from "react";
import "./Cockpit.css";

const Cockpit = props => {
  const assingnedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = "Red";
  }

  if (props.persons.length <= 2) {
    assingnedClasses.push("red");
  }
  if (props.persons.length <= 1) {
    assingnedClasses.push("bold");
  }

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p>This is really Work</p>
      <button className={btnClass} onClick={props.click}>
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
