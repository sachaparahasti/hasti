import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
class Restaurant extends React.Component {
  render() {
    return (
     <div class="container">
        <div class="row">
            <div class="col-lg-4 my-3">
                <div class="card shadow">
                    <div class="card-header text-bg-primary d-flex justify-content-between">
                        <h5>Hasti Sachapara</h5>
                        <h5><span class="badge bg-white text-primary">1</span></h5>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-danger w-100" >Thali - <span class="badge bg-white text-primary">1</span></button>
                        <div class="row mt-2">
                            <div class="col-6">
                                 <button type="button" class="btn btn-dark w-100">Roti - <span class="badge bg-white text-dark">1</span></button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn btn-warning w-100">chas - <span class="badge bg-white text-dark">1</span></button>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-6">
                                 <button type="button" class="btn btn-info w-100">Papad - <span class="badge bg-white text-dark">1</span></button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn btn-success w-100">Sweet - <span class="badge bg-white text-dark">1</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between text-bg-primary">
                        <span class="h5">Total</span>
                        <span class="h5">1</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
root.render(<Restaurant />);
