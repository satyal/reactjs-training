import React from "react";

class ExampleTwo extends React.Component {
  constructor(props) {
    /* props argument must be passed to the super() method. Otherwise, this.props will be undefined in the constructor. Thought it will work in other methods such as render method.
     */

    super(props);

    console.log("Printing props is constructor: ", this.props);
  }

  render() {
    console.log("props: ", this.props);

    return (
      <>
        <h1>Working with props</h1>
        <div>{this.props.testProp}</div>
      </>
    );
  }
}

export default ExampleTwo;

/**
 * This example shows how to use props in a class component
 */
