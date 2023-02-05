import React, { Component } from "react";

import "./styles.css";

export class TasksItem extends Component {
  render() {
    return (
      <div className="Task">
        <div className={`Task${this.props.isDone ? " bgWarning" : ""}`}>
          <div className="Task__task"> {this.props.task}</div>

          <input
            type="checkbox"
            checked={this.props.isDone}
            onChange={() => this.props.onStatusChange(this.props.id)}
          />
        </div>
      </div>
    );
  }
}
