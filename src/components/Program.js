import React, { Component } from "react";

class Program extends Component {
  state = {};
  render() {
    return (
      <div className="text">
        <h4> 📢 {this.props.program} </h4>
      </div>
    );
  }
}

export default Program;
