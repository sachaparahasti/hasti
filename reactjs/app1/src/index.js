import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
class InsertCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  uploadPhoto = (file) => {
    this.setState({
      photo: file,
    });
  };
  uploadCategory = (event) => {
    console.log(this.state);
    event.preventDefault();
    // api calling
    let apiAddress = "https://theeasylearnacademy.com/shop/ws/category.php";
    axios(
      {
        url: apiAddress,
        method: "get",
        responseType: "json",
      }
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-12 col-md-8">
            <div className="card shadow">
              <div className="card-header text-bg-primary text-center">
                <h4 className="mb-0">Insert Category</h4>
              </div>
              <div className="card-body">
                <form
                  method="post"
                  onSubmit={this.uploadCategory}
                  encType="multipart/form-data"
                >
                  {/* Name */}
                  <div className="mb-3">
                    <label htmlFor="categoryname" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="category_name"
                      id="categoryname"
                      placeholder="Enter name"
                      required
                      value={this.state.name}
                      onChange={(e) => this.updateValue(e)}
                    />
                  </div>
                  {/* Photo */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="categoryphoto">
                      Photo
                    </label>
                    <input
                      type="file"
                      name="category_photo"
                      id="categoryphoto"
                      className="form-control"
                      required
                      onChange={(e) => this.uploadPhoto(e.target.files[0])}
                    />
                  </div>
                  {/* Is Live */}
                  <div className="mb-3">
                    <label className="form-label d-block">Is Live</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="islive"
                        id="liveYes"
                        value={1}
                        required
                        onChange={(e) => this.updateValue(e)}
                      />
                      <label className="form-check-label" htmlFor="liveYes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="islive"
                        id="liveNo"
                        value={0}
                        required
                        onChange={(e) => this.updateValue(e)}
                      />
                      <label className="form-check-label" htmlFor="liveNo">
                        No
                      </label>
                    </div>
                  </div>
                  {/* Submit */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Save Category
                    </button>
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
root.render(<InsertCategory />);
