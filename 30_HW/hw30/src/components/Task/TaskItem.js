import React from "react";
import PropTypes from "prop-types";
import { TaskItemStyled } from "./styled/TaskItemStyled";
import { BtnDelete } from "./styled/TaskItemStyled";
import { Task } from "./styled/TaskItemStyled";

export function TaskItem({ index, task, isDone, onDelete, onStatusChange }) {
  const onChangeHandler = (e) => {
    console.log(e.target.checked);
    onStatusChange(e.target.checked);
  };

  return (
    <TaskItemStyled>
      <div>{index}.</div>
      <Task> {task}</Task>
      <input type="checkbox" checked={isDone} onChange={onChangeHandler} />
      <BtnDelete onClick={onDelete}>Delete</BtnDelete>
    </TaskItemStyled>
  );
}

TaskItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};
