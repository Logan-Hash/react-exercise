import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Change From Child</button>
    </div>
  );
}

export default ChildComponent;
