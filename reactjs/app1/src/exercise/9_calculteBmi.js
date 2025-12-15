  import ReactDOM from "react-dom/client";
  import React from "react";
  class Bmi extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        weight: 0,
        height: 0,
        bmi: 0,
      };
    }
    updateWeight = (event) => {
      this.setState({
        weight: event.target.value,
      });
    };
    updateHeight = (event) => {
      this.setState({
        height: event.target.value,
      });
    };

    calculateBmi = (event) => {
      
      // convert height to meters
      let heightInMeters = this.state.height * 0.3048
      
      // calculate BMI
      let bmi = this.state.weight / (heightInMeters * heightInMeters);

    // round to 2 decimal places
    bmi = bmi.toFixed(2);
    
    // update state
    event.preventDefault(); 
    this.setState({ bmi });
};
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="card shadow">
                <div className="card-header">
                  <h3>BMI Calculator</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={this.calculateBmi}>
                    <div className="mb-3">
                      <label className="form-label">Weight (kg)</label>
                      <input type="text" id="weight" name="weight" className="form-control" onChange={this.updateWeight} />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Height (cm)</label>
                      <input type="text" id="height" name="height" className="form-control" onChange={this.updateHeight} />
                    </div>

                    <div>
                     <input type="submit" className="btn btn-primary" value="Calculate BMI" />
                    </div>
                    <div>
                      <h3>{this.state.bmi}</h3>
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

  root.render(<Bmi />);
