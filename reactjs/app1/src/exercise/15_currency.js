import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";  

const root = ReactDOM.createRoot(document.getElementById("root"));
// controlled components approach (class components)
class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      fromCurrency: "Rupees",
      toCurrency: "Dollar",
      result: 0,
    };
  }
  rates = {
    Rupees: 1,
    Dollar: 0.012,
    Pound: 0.0095,
    Yen: 1.75,
    Euro: 0.011,
  };
  updateValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  convertCurrency = (e) => {
    e.preventDefault();

    const { amount, fromCurrency, toCurrency } = this.state;

    if (amount === "" || isNaN(amount)) {
      this.setState({ result: 0 });
      return;
    }

    const amountInRupees = amount / this.rates[fromCurrency];
    const convertedAmount = amountInRupees * this.rates[toCurrency];

    this.setState({
      result: convertedAmount.toFixed(2),
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Currency Converter</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.convertCurrency}>
                  {/* Amount */}
                  <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                    name="amount"
                      type="number"
                      className="form-control"
                      placeholder="Enter amount"
                      onChange={this.updateValue}
                    />
                  </div>
                  {/* From Currency */}
                  <div className="mb-3">
                    <label className="form-label">From Currency</label>
                    <select
                    name="formCurrency"
                      className="form-select"
                      value={this.state.fromCurrency}
                      onChange={this.updateValue}
                    >
                      <option>Rupees</option>
                      <option>Dollar</option>
                      <option>Pound</option>
                      <option>Yen</option>
                      <option>Euro</option>
                    </select>
                  </div>
                  {/* To Currency */}
                  <div className="mb-3">
                    <label className="form-label">To Currency</label>
                    <select
                    name="toCurrency"
                      className="form-select"
                      value={this.state.toCurrency}
                      onChange={this.updateValue}
                    >
                      <option>Rupees</option>
                      <option>Dollar</option>
                      <option>Pound</option>
                      <option>Yen</option>
                      <option>Euro</option>
                    </select>
                  </div>
                  {/* Button (optional) */}
                  <button type="submit" className="btn btn-primary w-100">
                    Convert
                  </button>
                </form>
                <div className="mt-4">
                  <h4>
                    Result:{" "}
                    <span className="text-success">{this.state.result}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
root.render(<Currency />);
