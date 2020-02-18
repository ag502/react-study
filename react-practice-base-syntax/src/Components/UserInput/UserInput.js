import React from "react";

const UserInput = props => {
  const style = {
    textAlign: "center",
    fontSize: "18px"
  };
  return (
    <input
      type="text"
      onChange={props.changed}
      value={props.currentName}
      style={style}
    />
  );
};

export default UserInput;
