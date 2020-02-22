import React, { useEffect, Component, useMemo } from "react";
import "./Cockpit.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timer = setTimeout(() => {
      alert("Saved data to Cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assingnedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = "Red";
  }

  if (props.personsLength <= 2) {
    assingnedClasses.push("red");
  }
  if (props.personsLength <= 1) {
    assingnedClasses.push("bold");
  }

  console.log("[Cockpit.js] render");
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

// class Cockpit extends Component {
//   componentDidMount() {
//     console.log("[Cockpit.js] ComponentDidMount");
//   }

//   componentWillUnmount() {
//     console.log("[Cockpit.js] unmount");
//   }

//   componentDidUpdate(nextProps, nextState) {
//     console.log("[Cockpic.js] componentDidUpdate");
//   }

//   render() {
//     const assingnedClasses = [];
//     let btnClass = "";

//     if (this.props.showPersons) {
//       btnClass = "Red";
//     }

//     if (this.props.persons.length <= 2) {
//       assingnedClasses.push("red");
//     }
//     if (this.props.persons.length <= 1) {
//       assingnedClasses.push("bold");
//     }

//     console.log("[Cockpit.js] render");
//     return (
//       <div className="Cockpit">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really Work</p>
//         <button className={btnClass} onClick={this.props.click}>
//           Switch Name
//         </button>
//       </div>
//     );
//   }
// }

export default React.memo(Cockpit);
