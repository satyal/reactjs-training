import React, { Component } from "react";

// Hooks approach
//const [count, setCount] = React.useState(0)
//const [text, setText] = React.useState("")

export default class ExampleThree extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, text: "" };
  }

  buttonClickHandler = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));

    // Hooks approach
    //setCount(prevState=>prevState+1)
  };

  textChanged = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    console.log("state: ", this.state);

    return (
      <div>
        <h1>Working with state</h1>

        <button onClick={this.buttonClickHandler}>+</button>

        <h2>{this.state.count}</h2>

        <input
          type="text"
          value={this.state.text}
          onChange={this.textChanged}
        />
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

/**
 * This example shows how to use state in a class component
 *
 * Arrow functions have been used for handler methods and
 * so no "this" binding is required.
 */
