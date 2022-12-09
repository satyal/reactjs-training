import React from "react";

import AddTodo from "./AddTodo";
import Filters from "./Filters";
import TodoList from "./TodoList";
import LegacyReduxConnect from "./LegacyReduxConnect";

const App = () => {
  return (
    <div>
      <h2>Legacy Redux connect Example</h2>
      <LegacyReduxConnect />
      <hr />

      <h2>Todos App</h2>

      <AddTodo />

      <Filters />

      <TodoList />
    </div>
  );
};

export default App;
