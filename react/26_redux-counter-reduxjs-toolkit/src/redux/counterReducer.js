import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;

/*
const INITIAL_STATE = { count: 0 };

export function counterReducer(prevState = INITIAL_STATE, action) {
  let newState;

  switch (action?.type) {
    case "INCREMENT":
      newState = { ...prevState, count: prevState.count + 1 };
      break;

    case "DECREMENT":
      newState = { ...prevState, count: prevState.count - 1 };
      break;

    default:
      newState = prevState;
      break;
  }

  return newState;
}

export function increment() {
  return { type: "INCREMENT" };
}

export function decrement() {
  return { type: "DECREMENT" };
}
*/
/**
 * STORE: {count:0}
 *
 * ACTIONS:
 *      {type:"INCREMENT"}
 *      {type:"DECREMENT"}
 */

/**
 * 
-----Create View (UI)
-----Design Store & Actions
-----Create reducers
-----Create action creators
-----Create store
-----Bind store to UI
-----Test UI binding using redux devtools
-----Dispatch actions & test the full functionality
*/
