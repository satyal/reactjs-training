import React, { Component } from "react";

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, text: "" };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  buttonClickHandler() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  textChanged(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Binding handlers to "this"</h1>

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
 *
 * Normal functions have been used for handler methods and
 * so "this" binding is required in constructor.
 *
 * Don't bind to this in JSX as the binding will happen on every re-render which is a costly thing
 */
