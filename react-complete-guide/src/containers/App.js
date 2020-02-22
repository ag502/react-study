import React, { Component, useState } from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "dafs", name: "Max", age: 28 },
        { id: "wqwf", name: "Manu", age: 29 },
        { id: "rwqq", name: "Stephanie", age: 26 }
      ],
      otherState: "some other value",
      showPersons: false,
      showCockpit: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props, state);
    return state;
  }

  // componentWiilMont() {}

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("[App.js] ComponentDidUpdate");
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = event => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit && (
          <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            click={this.togglePersonsHandler}
          />
        )}
        {persons}
      </>
    );
  }
}

// const App = () => {
//   const [personStates, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 }
//     ]
//   });
//   const [otherState, setOtherState] = useState("some other value");

//   console.log(personStates, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: "Manu", age: 29 },
//         { name: "Stephanie", age: 27 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really Work</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personStates.persons[0].name}
//         age={personStates.persons[0].age}
//       />
//       <Person
//         name={personStates.persons[1].name}
//         age={personStates.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personStates.persons[2].name}
//         age={personStates.persons[2].age}
//       />
//     </div>
//   );
// };

export default WithClass(App, "App");
