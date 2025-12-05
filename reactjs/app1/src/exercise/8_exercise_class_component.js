import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
class Score extends React.Component
{
  render()
  {
    return(
    <div className="container">
  <div className="row">
    <div className="col-lg-5 mt-2 my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between text-bg-success ">
          <h5>India</h5>
          <h5>
            <span>358-5(50 Ov)</span>
          </h5>
        </div>
        <div className="card-header">
          <div className="row text-center align-items-center">
            <div className="col-4 text-start">
              <h6 className="m-0">Batter</h6>
            </div>
            <div className="col">
              <h6 className="m-0">R</h6>
            </div>
            <div className="col">
              <h6 className="m-0">B</h6>
            </div>
            <div className="col">
              <h6 className="m-0">4s</h6>
            </div>
            <div className="col">
              <h6 className="m-0">6s</h6>
            </div>
            <div className="col">
              <h6 className="m-0">SR</h6>
            </div>
          </div>
        </div>
        <div className="card-body py-2">
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-primary">
              <strong>Yashasvi Jaiswal</strong>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">22</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">38</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">2</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">1</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">57.89</span>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-primary">
              <strong>Rohit</strong>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">14</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">8</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">3</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">0</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">175.00</span>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-primary">
              <strong>Kohli</strong>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">102</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">93</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">7</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">2</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">109.68</span>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-primary">
              <strong>Ruturaj Gaikwad</strong>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">105</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">83</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">12</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">2</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">126.51</span>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-primary">
              <strong>Rahul (c &amp; wk)</strong>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">66</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">43</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">6</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">2</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">153.49</span>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-primary">
              <strong>Washington Sundar</strong>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">1</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">8</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">0</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">0</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">12.50</span>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-primary">
              <strong>Ravindra Jadeja</strong>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">24</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">27</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">2</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">0</span>
            </div>
            <div className="col">
              <span className="badge bg-white text-black">88.89</span>
            </div>
          </div>
        </div>
        <div className="card-footer py-2">
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-black ">
              <strong>Extras</strong>
            </div>
            <div className=" col">
              <strong>24 (b 0, lb 4, w 20, nb 0, p 0)</strong>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-black ">
              <strong>Total</strong>
            </div>
            <div className=" col">
              <strong>358-5 (50 Overs, RR: 7.16) </strong>
            </div>
          </div>
          <div className="row text-center align-items-center my-2">
            <div className="col-4 text-start text-black ">
              <strong>Did not Bat</strong>
            </div>
            <div className=" col">
              <strong className="text-primary">
                Harshit Rana, Kuldeep Yadav, Arshdeep Singh, Prasidh
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
  }
}
root.render(<Score />);
