import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
class DinningTable extends React.Component {
  render() {
    return (
      <div className="col-lg-3 my-3 px-3">
        <div className="card shadow">
          <div className="card-header text-bg-primary d-flex justify-content-between">
            <h5>Hasti Sachapara</h5>
            <h5>
              <span className="badge bg-white text-primary">1</span>
            </h5>
          </div>
          <div className="card-body">
            <button className="btn btn-danger w-100">
              Thali - <span className="badge bg-white text-primary">1</span>
            </button>
            <div className="row mt-2">
              <div className="col-6">
                <button type="button" className="btn btn-dark w-100">
                  Roti - <span className="badge bg-white text-dark">1</span>
                </button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-warning w-100">
                  chas - <span className="badge bg-white text-dark">1</span>
                </button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <button type="button" className="btn btn-info w-100">
                  Papad - <span className="badge bg-white text-dark">1</span>
                </button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-success w-100">
                  Sweet - <span className="badge bg-white text-dark">1</span>
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between text-bg-primary">
            <span className="h5">Total</span>
            <span className="h5">1</span>
          </div>
        </div>
      </div>
    );
  }
}
class Restaurant extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <DinningTable />
        </div>
      </div>
    );
  }
}
root.render(<Restaurant />);
