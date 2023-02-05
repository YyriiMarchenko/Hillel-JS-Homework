import React, { Component } from "react";
import { v4 } from "uuid";

import { TasksItem } from "./TaskItem";
import { Select } from "./Select";

const ALL = "0";
const PROGRESS = "1";
const DONE = "2";

const SELECT_OPTIONS = [
  {
    text: "All",
    value: ALL,
  },
  {
    text: "Progress",
    value: PROGRESS,
  },
  {
    text: "Done",
    value: DONE,
  },
];

export class TaskFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: "",
      taskTypeToShow: ALL,
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
        tasks: [
          ...prev.tasks,
          {
            task: this.state.task,
            id: v4(),
            isDone: false,
          },
        ],
      }));
  };

  onStatusChangeHandler = (taskId) => {
    this.setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        } else {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
      }),
    }));
  };

  onSelectChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      taskTypeToShow: e.target.value,
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

            <Select
              options={SELECT_OPTIONS}
              onChange={this.onSelectChangeHandler}
            />
          </form>

          <div className="tasksList">
            {this.state.tasks
              .filter(({ isDone }) => {
                switch (this.state.taskTypeToShow) {
                  case DONE:
                    return isDone;
                  case PROGRESS:
                    return !isDone;
                  case ALL:
                  default:
                    return true;
                }
              })
              .map(({ task, id, isDone }, index) => (
                <TasksItem
                  key={id}
                  id={id}
                  task={task}
                  index={index}
                  isDone={isDone}
                  onStatusChange={this.onStatusChangeHandler}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}
