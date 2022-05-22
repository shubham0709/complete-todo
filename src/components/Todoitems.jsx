import React from "react";

const Todoitems = ({ todo, setTodo }) => {
  const remove = (x) => {
    let temp = todo.filter((elem) => {
      return elem !== x;
    });
    setTodo([...temp]);
  };
  return (
    <>
      {todo.map((x, i) => (
        <>
          <div>
            do this : {x}
            <button
              onClick={() => {
                remove(x);
              }}
            >
              Remove
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default Todoitems;
