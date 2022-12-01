import React from "react";

import { useDispatch } from "react-redux";

import { taskStatusChanged, deleteTodo } from "./redux/todosSlice";

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const statusChanged = (e) => {
    dispatch(taskStatusChanged({ id: todo.id, complete: e.target.checked }));
  };

  const deleteItem = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <li>
      <button onClick={deleteItem}>X</button>
      <input
        type="checkbox"
        checked={todo?.complete}
        onChange={statusChanged}
      />
      {todo?.todoName}
    </li>
  );
};

export default ListItem;
