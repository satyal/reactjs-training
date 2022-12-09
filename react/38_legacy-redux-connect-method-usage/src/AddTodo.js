import React from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "./redux/todosSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  const add = () => {
    dispatch(addTodo({ todoName: text }));
  };

  const textChanged = (e) => {
    setText(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    add();
  };

  return (
    <form onSubmit={formSubmit}>
      <input type="text" value={text} onChange={textChanged} />
      &nbsp;
      <input type="button" value="Add Todo" onClick={add} />
    </form>
  );
};

export default AddTodo;
