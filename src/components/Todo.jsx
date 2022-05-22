import React from "react";
import Todoitems from "../components/Todoitems";

const Todo = ({ todo, setTodo }) => {
  return <Todoitems todo={todo} setTodo={setTodo} />;
};

export default Todo;
