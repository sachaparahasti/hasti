import React, { Component, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
// functional components useState
function Gst(){
  var [amount,setAmount]=useState(0);
  var [gstRate,setGstRate]=useState(5);
  var [taxType,setTaxType]=useState("exclusive");
  var [result,setResult]=useState(0);

    const calculateGST = (e) => {
    e.preventDefault();

    let gstAmount = 0;

    if (taxType === "exclusive") {
      gstAmount = (amount * gstRate) / 100;
      setResult(amount + gstAmount);
    } else {
      gstAmount = amount - (amount * 100) / (100 + gstRate);
      setResult(amount);
    }
  };
return(<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-6">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">GST Calculator</h4>
        </div>
        <div className="card-body">
          <form onSubmit={calculateGST}>
            {/* Amount */}
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input type="number" className="form-control" onChange={(e)=>setAmount(Number(e.target.value  ))}  placeholder="Enter amount" />
            </div>
            {/* GST Rate */}
            <div className="mb-3">
              <label className="form-label">GST Rate</label>
              <select className="form-select" onChange={(e)=>setGstRate(Number(e.target.value  ))}>
                <option value>Select GST Rate</option>
                <option value={5}>5%</option>
                <option value={18}>18%</option>
                <option value={40}>40%</option>
              </select>
            </div>
            {/* Tax Type */}
            <div className="mb-3">
              <label className="form-label d-block">Txt Type</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="taxType" onChange={(e)=>setTaxType(e.target.value  )} defaultValue="inclusive" />
                <label className="form-check-label">Inclusive</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="taxType" onChange={(e)=>setTaxType(e.target.value  )} defaultValue="exclusive" />
                <label className="form-check-label">Exclusive</label>
              </div>
            </div>
            {/* Button */}
            <button type="submit" className="btn btn-primary w-100">
              Calculate GST
            </button>
          </form>
          <h5 className="mt-3 text-success">
                Total Amount: ₹{result.toFixed(2)}
              </h5>
        </div>
      </div>
    </div>
  </div>
</div>
)
}
root.render(<Gst />);
