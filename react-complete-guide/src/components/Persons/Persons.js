import React, { Component, PureComponent } from "react";
import Person from "./Person/Person";

// const Persons = props => {
//   console.log("[Persons.js] rendering");

//   return (
//     <>
//       {props.persons.map((person, idx) => {
//         return (
//           <Person
//             key={person.id}
//             name={person.name}
//             age={person.age}
//             click={() => props.clicked(idx)}
//             changed={event => props.changed(event, person.id)}
//           />
//         );
//       })}
//     </>
//   );
// };

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount");
  }

  componentWillUnmount() {
    console.log("[Persons.js] Comopnent will Unmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.clicked !== this.props.clicked ||
      nextProps.changed !== this.props.changed
    ) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapShotBeforeUpdate");
    return { message: "SnapShot!" };
  }

  componentDidUpdate(prevProps, prevState, SnapShot) {
    console.log("[Persons.js] ComponentDidUpdate");
    console.log(SnapShot);
  }

  render() {
    console.log("[Persons.js] rendering");
    return (
      <>
        {this.props.persons.map((person, idx) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.props.clicked(idx)}
              changed={event => this.props.changed(event, person.id)}
            />
          );
        })}
      </>
    );
  }
}

export default Persons;
