import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div>
      <p>{props.userName}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default UserOutput;
