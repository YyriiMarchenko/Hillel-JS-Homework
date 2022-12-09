import React from "react";
import { Сontainer } from "./Сontainer";
import { Navigation } from "./Navigation";
import { Header } from "./Header";

export class GreetingElement extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Header />
        <Сontainer />
      </React.Fragment>
    );
  }
}
