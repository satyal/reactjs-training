import React from "react";

import AddTodo from "./AddTodo";
import Filters from "./Filters";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <h2>Todos App</h2>

      <AddTodo />

      <Filters />

      <TodoList />
    </div>
  );
};

export default App;
