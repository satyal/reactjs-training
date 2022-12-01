import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { todosReducer } from "./todosSlice";

import loggerMiddleware from "./middlewares/loggerMiddleware";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger).concat(loggerMiddleware);
  },
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
