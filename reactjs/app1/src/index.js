import React, { Component, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// uncontrolled component
class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.year = React.createRef();
    this.month = React.createRef();
    this.salary = React.createRef();
    this.state = {
      submit: "",
    };
  }
  calculateGratuity = (event) => {
    event.preventDefault();
    let years = Number(this.year.current.value);
    let months = Number(this.month.current.value);
    let salary = Number(this.salary.current.value);

    // Convert months to year
    if (months >= 6) {
      years += 1;
    }

    // Minimum 5 years rule
    if (years < 5) {
      this.setState({
        gratuity: 0,
        message: "Gratuity not applicable (minimum 5 years required)",
      });
      return;
    }

    let gratuityAmount = (salary * 15 * years) / 26;

    this.setState({
      gratuity: gratuityAmount.toFixed(2),
      message: "",
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Gratuity Calculate</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.calculateGratuity} method="post">
                  {/* Service Duration Year */}
                  <div className="mb-3">
                    <label className="form-label">
                      Service Duration (Years)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter years"
                      ref={this.year}
                    />
                  </div>
                  {/* Service Duration Month */}
                  <div className="mb-3">
                    <label className="form-label">
                      Service Duration (Months)
                    </label>
                    <input
                      type="number"
                      ref={this.month}
                      className="form-control"
                      placeholder="Enter months"
                      min={0}
                      max={11}
                    />
                  </div>
                  {/* Last Salary */}
                  <div className="mb-4">
                    <label className="form-label">Last Salary</label>
                    <input
                      type="number"
                      ref={this.salary}
                      className="form-control"
                      placeholder="Enter last salary"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                  <div className="mt-3 text-center">
                    <h5>
                      submit:{" "}
                      <span className="text-primary">{this.state.submit}</span>
                    </h5>
                  </div>
                </form>

                 <div className="mt-4 text-center">
                  {this.state.message && (
                    <p className="text-danger">{this.state.message}</p>
                  )}
                  {!this.state.message && (
                    <h5 className="text-success">
                      Gratuity Amount: ₹{this.state.gratuity}
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
root.render(<Calculate />);
