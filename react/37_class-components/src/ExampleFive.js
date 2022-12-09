import React, { Component } from "react";

export default class ExampleFive extends Component {
  interval = null;

  constructor(props) {
    super(props);

    this.state = { timeNow: new Date().toLocaleTimeString() };

    console.log("constructor");
  }

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps", props);

    return {};
  }

  /**
   * React.useEffect(()=>{
   *    // Code to run after component had mounted
   *
   *    return () => {
   *        // Code to run before component unmounts
   *    }
   * }, [])
   */
  componentDidMount() {
    // Code to run after component had mounted
    console.log("componentDidMount");

    this.interval = setInterval(() => {
      this.setState({ timeNow: new Date().toLocaleTimeString() });
    }, 5000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state);

    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");

    clearInterval(this.interval);

    // Code to run before component unmounts
  }

  render() {
    console.log("render");

    return (
      <>
        <h1>Lifecycle Methods in Class components</h1>

        <h2>{this.state.timeNow}</h2>
      </>
    );
  }
}

/**
 * Order of lifecycle methods:
 * 
 * Mounting phase:
        constructor()
        getDerivedStateFromProps()
        render()
        componentDidMount()
    Updating phase:
        getDerivedStateFromProps()
        shouldComponentUpdate()
        render()
        getSnapshotBeforeUpdate()
        componentDidUpdate()
    Unmounting phase:
        componentWillUnmount()
 */
