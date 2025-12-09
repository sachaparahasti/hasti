import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Score extends React.Component {
  constructor() {
    super();
    this.state = {
      teamScore: 0,
      balls: 0,
      runs: 0,
      fours: 0,
      sixes: 0
    };
  }

  updateOne = () => {
    this.setState({
      runs: this.state.runs + 1,
      teamScore: this.state.teamScore + 1,
      balls: this.state.balls + 1
    });
  };

  updateTwo = () => {
    this.setState({
      runs: this.state.runs + 2,
      teamScore: this.state.teamScore + 2,
      balls: this.state.balls + 1
    });
  };

  updateFour = () => {
    this.setState({
      runs: this.state.runs + 4,
      teamScore: this.state.teamScore + 4,
      balls: this.state.balls + 1,
      fours: this.state.fours + 1
    });
  };

  updateSix = () => {
    this.setState({
      runs: this.state.runs + 6,
      teamScore: this.state.teamScore + 6,
      balls: this.state.balls + 1,
      sixes: this.state.sixes + 1
    });
  };

  updateBall = () => {
  this.setState({
    balls: this.state.balls + 1
  });
};

  strikeRate = () => {
    if (this.state.balls === 0) 
      return "0.00";
    return ((this.state.runs / this.state.balls) * 100).toFixed(2);
  };

 overs = () => {
  let totalBalls = this.state.balls;  
  let overs = Math.floor(totalBalls / 6); 
  let remainingBalls = totalBalls % 6;   

  return overs + "." + remainingBalls;
};


  render() {
    return (
      <div className="container mt-2 col-4">
        <div className="row">
          <div className="card">

          <div className="card-header bg-success text-white d-flex justify-content-between">
            <h5>India</h5>
            <h5>{this.state.teamScore} ({this.overs()} Ov)</h5>
          </div>

          <div className="card-body">
            <h3 className=" text-secondary m-1">Runs</h3>
            <button className="btn btn-secondary m-1" onClick={this.updateBall}>0</button>
            <button className="btn btn-primary m-1" onClick={this.updateOne}>1</button>
            <button className="btn btn-info m-1" onClick={this.updateTwo}>2</button>
            <button className="btn btn-success m-1" onClick={this.updateFour}>4</button>
            <button className="btn btn-danger m-1" onClick={this.updateSix}>6</button>
          </div>

          <div className="card-header">
            <div className="row text-center fw-bold">
              <div className="col-4 text-start">Batter</div>
              <div className="col">R</div>
              <div className="col">B</div>
              <div className="col">4s</div>
              <div className="col">6s</div>
              <div className="col">SR</div>
            </div>
          </div>

          <div className="card-body">
            <div className="row text-center">
              <div className="col-4 text-start text-primary"><b>Virat</b></div>
              <div className="col">{this.state.runs}</div>
              <div className="col">{this.state.balls}</div>
              <div className="col">{this.state.fours}</div>
              <div className="col">{this.state.sixes}</div>
              <div className="col">{this.strikeRate()}</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

root.render(<Score />);
