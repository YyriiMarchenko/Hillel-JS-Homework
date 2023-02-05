import styled from "styled-components";

export const TaskItemStyled = styled.div`
  width: 500px;
  min-height: 50px;
  border: 1px solid black;
  border-radius: 7px;
  margin-top: 15px;
  padding: 10px;
  background-color: rgb(217, 207, 21);
  color: azure;
  align-items: center;
  padding: 10px;
  display: flex;
`;

export const BtnDelete = styled.div`
  width: 12%;

  background-color: red;
  color: aliceblue;
  outline: none;
  display: flex;
  height: 25px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 15px;
  padding-top: 5px;
  padding-left: 10px;
`;

export const Task = styled.div`
  margin-right: 15px;
  margin-left: 5px;
`;
