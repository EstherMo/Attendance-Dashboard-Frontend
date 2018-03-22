import React, { Component } from "react";
import logo from "./mohologo.png";
import "./App.css";
import Programs from "./components/Programs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Moho's Attendance Dashboard</h1>
        </header>
        <Programs />
      </div>
    );
  }
}

export default App;
