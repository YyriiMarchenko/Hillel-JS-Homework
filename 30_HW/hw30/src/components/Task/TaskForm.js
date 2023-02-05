import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export function TaskForm({ onSubmit }) {
  const [task, setTask] = useState("");
  const [isDone, setIsDone] = useState(false);

  const onNameChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const onStatusChangeHandler = (e) => {
    setIsDone(!!e.target.checked);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      id: v4(),
      task,
      isDone,
    });
  };

  return (
    <div className="todolist">
      <h1>ToDoList</h1>
      <form className="todo" onSubmit={onSubmitHandler}>
        <div className="fieldWrapper">
          <input
            value={task}
            placeholder="Task"
            type="text"
            onChange={onNameChangeHandler}
          />
        </div>

        <button className="btn-submit" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
