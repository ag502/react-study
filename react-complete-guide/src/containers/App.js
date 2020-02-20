import React, { Component, useState } from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dafs", name: "Max", age: 28 },
      { id: "wqwf", name: "Manu", age: 29 },
      { id: "rwqq", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, idx)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    let assingnedClasses = [];
    if (this.state.persons.length <= 2) {
      assingnedClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      assingnedClasses.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really Work</p>
        <button className="Button" onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
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

export default App;
