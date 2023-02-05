// import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { TaskForm } from "./TaskForm";
import { TaskItem } from "./TaskItem";
// import { Loader } from "./styled/Loader";

import {
  addTask,
  deleteTaskById,
  // fetchUsers,
  setDone,
} from "../../slices/tasksSlice";

const ToDoList = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// const TaskItemStyled = styled.div`
//   width: 500px;
//   min-height: 50px;
//   border: 1px solid black;
//   border-radius: 5px;
//   /* margin-bottom: 15px; */
//   margin-top: 15px;
//   padding: 10px;
//   background-color: rgb(217, 207, 21);
//   color: azure;
//   align-items: center;
//   padding: 10px;
//   display: flex;
// `;

export function Task() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.list);
  // const isDataLoading = useSelector((state) => state.tasks.loading);

  const onUserAddHandler = (task) => {
    dispatch(addTask(task));
  };

  const onTaskDeleteHandler = (id) => () => dispatch(deleteTaskById(id));

  const onTaskStatusChangeHandler = (id) => (isDone) =>
    dispatch(setDone({ taskId: id, isDone }));

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <ToDoList>
      <TaskForm onSubmit={onUserAddHandler} />
      {/* {isDataLoading && <Loader />} */}

      {taskList?.map((user, index) => (
        <TaskItem
          {...user}
          index={index + 1}
          key={user.id}
          onDelete={onTaskDeleteHandler(user.id)}
          onStatusChange={onTaskStatusChangeHandler(user.id)}
        />
      ))}
    </ToDoList>
  );
}
