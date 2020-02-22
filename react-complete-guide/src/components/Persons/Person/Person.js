import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Person.css";
import styled from "styled-components";
import Aux from "../../../hoc/Auxiliary";
import Auxiliary from "../../../hoc/Auxiliary";
import WithClass from "../../../hoc/WithClass";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px, 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

// const person = props => {
//   console.log("[Person.js] render");
//   return (
//     <StyledDiv>
//       <p onClick={props.click}>
//         I'm a {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </StyledDiv>
//   );
// };

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElemnet = React.createRef();
  }

  componentDidMount() {
    this.inputElemnet.current.focus();
  }

  render() {
    console.log("[Person.js] render");
    return (
      <>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={inputEl => {
          //   this.inputElemnet = inputEl;
          // }}
          ref={this.inputElemnet}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, "Person");
