import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Manka() {
  var [count, setCount] = useState(0);
  var [countNumber, setCountNumber] = useState(0);
  var incrementCount = () => {
    if (count === 108) {
      setCount(1);
      setCountNumber(countNumber+1);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className="container justify-content-center min-vh-100 d-flex align-items-center">
      <div className="row w-50 justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-Header">
              <h3>Cont Manka</h3>
            </div>
            <div className="card-body">
              <h1>{count}</h1>
              <h2>{countNumber}</h2>
              <button onClick={incrementCount}>Increment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

root.render(<Manka />);
