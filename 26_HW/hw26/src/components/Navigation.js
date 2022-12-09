import React from "react";
import "./Navigation.css";
export class Navigation extends React.Component {
  render() {
    return (
      <div class="sidenav">
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Designers</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}
