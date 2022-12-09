import React from "react";
import { connect } from "react-redux";

import { addTodo } from "./redux/todosSlice";

// const LegacyReduxConnect = ({ filterType, todos, addTodoFunction }) => {
//   const addRandomTodo = () => {
//     addTodoFunction(`Random TODO #${Math.round(Math.random() * 100)}`);
//   };

//   return (
//     <div>
//       <div>Filter Type: {filterType}</div>

//       <ul>
//         {todos.map((td) => {
//           return <li key={td.id}>{td.todoName}</li>;
//         })}
//       </ul>

//       <button onClick={addRandomTodo}>Add random Todo</button>
//     </div>
//   );
// };

class LegacyReduxConnect extends React.Component {
  addRandomTodo = () => {
    this.props.addTodoFunction(
      `Random TODO #${Math.round(Math.random() * 100)}`
    );
  };

  render() {
    return (
      <div>
        <div>Filter Type: {this.props.filterType}</div>

        <ul>
          {this.props.todos.map((td) => {
            return <li key={td.id}>{td.todoName}</li>;
          })}
        </ul>

        <button onClick={this.addRandomTodo}>Add random Todo</button>
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      filterType: state.todos.filterType,
      todos: state.todos.list,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodoFunction: (text) => {
        dispatch(addTodo({ todoName: text }));
      },
    };
  }
)(LegacyReduxConnect);
