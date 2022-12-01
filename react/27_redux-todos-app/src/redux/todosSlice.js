import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filterType: "All",
  list: [],
};

let id = 100;

const todosSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      console.log(state, action);

      state.list.push({
        id: id++,
        todoName: action?.payload?.todoName,
        complete: false,
      });
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((element) => {
        return element.id !== action?.payload?.id;
      });
    },
    taskStatusChanged: (state, action) => {
      state.list = state.list.map((element) => {
        return element.id === action?.payload?.id
          ? { ...element, complete: action?.payload?.complete }
          : element;
      });
    },
    filterChanged: (state, action) => {
      state.filterType = action?.payload?.filterType;
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const { addTodo, deleteTodo, taskStatusChanged, filterChanged } =
  todosSlice.actions;

/**
 * STORE: {todos: {
 * filterType:"All",
 * list:[{id:100,todoName:"Learn React",complete:true}]
 * }}
 *
 * ACTIONS:
 * {type:"todos/addTodo",todoName:"some task"}
 * {type:"todos/deleteTodo",id:101}
 * {type:"todos/taskStatusChanged",id:101,complete:true|false}
 * {type:"todos/filterChanged",filterType:"All|Open|Complete"}
 */
