import React from "react";

const Todoinput = ({ todo, setTodo }) => {
  const [input, setInput] = React.useState("");
  const updateInput = (e) => {
    setInput(e.target.value);
  };
  const updateTodo = () => {
    setTodo([...todo, input]);
  };
  return (
    <>
      <input
        onChange={(e) => {
          updateInput(e);
        }}
      />
      <button onClick={updateTodo}>ADD</button>
    </>
  );
};

export default Todoinput;
