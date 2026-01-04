import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  updateValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  SubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      message: (
        <>
          Name {this.state.name}
          <br />
          Email Address {this.state.email}
          <br />
          password {this.state.password}
          <br />
          mobile {this.state.mobile}
        </>
      ),
    });
  };
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 offset-3">
            <div className="card shadow form-card">
              <div className="card-header bg-primary mb-4 fs-2">Registration Form</div>
              <div className="card-body p-4">
                <form method='post' onSubmit={this.SubmitForm}>
                  <h4 className="form-title text-center text-primary mb-4 fs-2">
                    Registration Form
                  </h4>
                  <hr />
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="name"
                      onChange={this.updateValue}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email address"
                      onChange={this.updateValue}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      onChange={this.updateValue}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="confirm password"
                      onChange={this.updateValue}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      placeholder="mobile"
                      onChange={this.updateValue}
                    />
                  </div>
                  <h4>Gender</h4>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={this.updateValue}
                  />
                  Male &nbsp;
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={this.updateValue}
                  />
                  Female &nbsp;
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={this.updateValue}
                  />
                  Other
                  <br />
                  <h4>Language</h4>
                  <select
                    name="language"
                    className="form-control"
                    onChange={this.updateValue}
                  >
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                  </select>
                  <h4>Upload Photo</h4>
                  <input
                    type="file"
                    name="photo"
                    className="form-control"
                    accept="image/*"
                    onChange={this.updateValue}
                  />
                  <br />
                  <p className="text-center">
                    <button type="submit" className="btn btn-primary">
                      CREATE ACCOUNT
                    </button>
                  </p>
                </form>
                <h3>{this.state.message}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
root.render(<RegisterForm />);
