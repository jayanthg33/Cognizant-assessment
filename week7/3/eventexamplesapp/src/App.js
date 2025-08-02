import React, { Component } from "react";
import "./App.css";
import CurrencyConverter from "./CurrencyConverter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! This is a static welcome message.");
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = (event) => {
    alert("I was clicked - Synthetic Event!");
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Handling Example</h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        <button onClick={this.handleClick}>Click on me</button>
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
