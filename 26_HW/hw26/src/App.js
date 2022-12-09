import React from "react";
import "./App.css";
import { GreetingElement } from "./components/GreetingElement";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GreetingElement />
      </div>
    );
  }
}
