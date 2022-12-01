import { configureStore } from "@reduxjs/toolkit";

import { todosReducer } from "./todosSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

/**
---Create View (UI)
---Design Store & Actions
---Create reducers with initial state
---Create action creators
---Test by dispatching actions from redux devtools
---Create store
---Bind store to UI
---Test binding using redux devtools
---Dispatch actions & test the full functionality
 */
