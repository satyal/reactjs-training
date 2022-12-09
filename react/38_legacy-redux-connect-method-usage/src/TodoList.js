import React from "react";
import { useSelector } from "react-redux";

import ListItem from "./ListItem";

const TodoList = () => {
  const todos = useSelector((state) => state?.todos);

  const filterType = todos?.filterType;

  const filteredTodos = todos?.list.filter((element) => {
    return filterType === "All"
      ? true
      : filterType === "Complete"
      ? element.complete
      : !element.complete;
  });

  return (
    <ul className="todo-list">
      {filteredTodos?.map((element) => (
        <ListItem key={element.id} todo={element} />
      ))}
    </ul>
  );
};

export default TodoList;
