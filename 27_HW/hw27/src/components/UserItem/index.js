import React, { Component } from "react";

import "./styles.css";

export class TasksItem extends Component {
  render() {
    return (
      <div className="Task">
        <div className="Task__task"> {this.props.task}</div>
      </div>
    );
  }
}
