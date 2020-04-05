import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      parentName: "Parent"
    };
  }
  greetParent = () => {
    alert(`Hello ${this.state.parentName}`);
  };

  render() {
    return <ChildComponent greetHandler={this.greetParent} />;
  }
}

export default ParentComponent;
