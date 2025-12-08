import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Ture extends React.Component{
  render() {
    return(
      <div className="container">
  <div className="row">
    <div className="col-lg-5 my-4 shadow">
      <div className="card">
        <div className="card-header">
          <h5>Tour Detail</h5>
        </div>
        <div className="card-body">
          <div>
            <img
              className=""
              src="tour.jpg"
              alt=""
              height="100%"
              width="100%"
            />
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold mb-1">
              <strong>ESSOTTO RECREATION HUB</strong>
            </h5>
            <div className="text-end">
              <h5 className="fw-bold mb-0">₹391</h5>
              <small>per night</small>
            </div>
          </div>
          <div className="col-8">
            {" "}
            <h5 className=" text-black ">
              KIADB Export Promotion Industrial Area{" "}
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}

root.render(<Ture />);
