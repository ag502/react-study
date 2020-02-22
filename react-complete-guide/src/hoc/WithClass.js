import React from "react";
import "../containers/App.css";
import "../components/Persons/Person/Person.css";

// const WithClass = props => {
//   return <div className={props.classes}>{props.children}</div>;
// };

const WithClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithClass;
