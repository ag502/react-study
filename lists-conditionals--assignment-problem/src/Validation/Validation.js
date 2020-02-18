import React from "react";

const Validation = props => {
  let message = "Text too short";
  if (props.textLength > 5) {
    message = "Text long enough";
  }
  return <p>{message}</p>;
};

export default Validation;
