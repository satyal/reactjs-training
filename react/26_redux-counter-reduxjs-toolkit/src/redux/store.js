import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./counterReducer";

export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/*import { createStore } from "redux";

import { counterReducer } from "./counterReducer";

export const reduxStore = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/
