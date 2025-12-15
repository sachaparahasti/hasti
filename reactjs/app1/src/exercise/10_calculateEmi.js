import ReactDOM from "react-dom/client";
import React from "react";
class Emi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      rate: 0,
      time: 0,
      unit: "years",
      emi:0,
      totalInterest: 0,
      totalPayment: 0,
    };
  }
  updateAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };
  updateRate = (event) => {
    this.setState({
      rate: event.target.value,
    });
  };

  updateTime = (event) => {
    this.setState({
      time: event.target.value,
    });
  };

  updateUnit = (event) => {
    this.setState({
      unit: event.target.value,
    });
  };

  calculateEmi = (event) => {
    // convert height to meters
    const P = parseFloat(this.state.amount);
    const R = parseFloat(this.state.rate) / 12 / 100; // monthly interest
    let N = parseFloat(this.state.time);

    if (this.state.unit === "years") N = N * 12; // convert years to months

    if (P && R && N) {
      const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalPayment = emi * N;
      const totalInterest = totalPayment - P;
      this.setState({
        emi: emi.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
      });
    }
    event.preventDefault();
  };
  render() {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <div className="card-header">
                <h4 className="mb-3">EMI Calculator</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.calculateEmi}>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label"> Loan Amount (₹) </label>
                    <input type="number" name="amount" id="amount" className="form-control" placeholder="Enter amount" onChange={this.updateAmount} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rate" className="form-label">Annual Interest Rate (%)</label>
                    <input type="number" name="rate" id="rate" className="form-control" placeholder="Enter interest rate" onChange={this.updateRate} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="time" className="form-label"> Tenure </label>
                    <input type="number" name="time" id="time" className="form-control" placeholder="Enter time" onChange={this.updateTime} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="unit" className="form-label"> Tenure Unit</label>
                    <select id="unit" name="unit" className="form-select" onChange={this.updateUnit}>
                      <option value="years">Years</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                  {/* Onclick Button */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary">Calculate EMI</button>
                  </div>
                  {/* Results */}
                  <div className="border rounded p-3 bg-white">
                    <p>EMI (per month): {this.state.emi}</p>
                    <p>Total Payment: {this.state.totalPayment}</p>
                    <p>Total Interest: {this.state.totalInterest}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Emi />);
