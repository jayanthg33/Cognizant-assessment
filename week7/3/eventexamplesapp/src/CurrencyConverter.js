 
import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      result: null,
    };
  }

  handleChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const euro = (parseFloat(this.state.amount) * 0.011).toFixed(2);
    this.setState({ result: euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount in INR:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Convert</button>
        </form>
        {this.state.result && (
          <p>Equivalent in Euro: €{this.state.result}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
