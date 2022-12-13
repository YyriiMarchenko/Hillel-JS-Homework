import React, { Component } from "react";

import { TasksItem } from "./UserItem";

export class UserFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: "",
    };
  }

  onTaskChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      task: e.target.value,
    }));
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (this.state.task)
      this.setState((prev) => ({
        task: "",
        tasks: [...prev.tasks, { task: this.state.task }],
      }));
  };

  render() {
    return (
      <>
        <h1>ToDoList</h1>
        <div className="todolist">
          <form className="todo" onSubmit={this.onSubmitHandler}>
            <div className="fieldWrapper">
              <input
                placeholder="To do something"
                onChange={this.onTaskChangeHandler}
                value={this.state.task}
              />
            </div>

            <button className="btn-submit">Save</button>
          </form>
          <div className="tasksList">
            {this.state.tasks.map(({ task }, index) => (
              <TasksItem key={task + index} task={task} index={index} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
