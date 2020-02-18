import React, { Component } from "react";
import logo from "./logo.svg";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    userName: "Mike"
  };

  changedUserInput = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changedUserInput}
          currentName={this.state.userName}
        />
        <UserOutput userName={this.state.userName}>
          Hi I'm {this.state.userName}
        </UserOutput>
      </div>
    );
  }
}

export default App;
