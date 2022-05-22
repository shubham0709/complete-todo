import './App.css';
import React, { useState } from "react";
import Todo from "./components/Todo";
// setTodo([...todo, "russian", "korean"]);
import Todoinput from "./components/Todoinput"

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <Todoinput todo={todo} setTodo={setTodo} />
      <Todo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
