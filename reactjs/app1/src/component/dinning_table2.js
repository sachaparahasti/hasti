import React from "react";
export default class DinningTable extends React.Component{
      constructor(props) {
        console.log('constructor are called..');
        // required
        super(props);
        // create state object
       this.state = {
                      thali: 0,
                      roti: 0,
                      chas: 0,
                      papad: 0,
                      sweet: 0
                    };
                    
        //create instance (property) variable
        this.name = props.name;
        this.tableno = props.tableno;
        this.thaliPrice=100;
        this.rotiPrice=10;
        this.chasPrice=11;
        this.papadPrice=7;
        this.sweetPrice=15.25;
      }

      componentWillMount(){
        console.log('componentWillMount method called..');
    }
    componentDidMount(){
          console.log('componentDidMount method called..');
      }
       updateTotal = () => {
        //conditional update

        this.setState({
            price: (this.state.thali * this.thaliPrice) +
                (this.state.roti * this.rotiPrice) +
                (this.state.chas * this.chasPrice) +
                (this.state.papad * this.papadPrice) +
                (this.state.sweet * this.sweetPrice)

        });
    }
      updateThali = () => {
        this.setState({
          thali: this.state.thali + 1,
        });
      };
      updateRoti = () => {
        this.setState({
          roti: this.state.roti + 1,
        });
      };
      updateChas = () => {
        this.setState({
          chas: this.state.chas + 1,
        });
      };
      updatePapad = () => {
        this.setState({
          papad: this.state.papad + 1,
        });
      };
       updateSweet = () => {
        this.setState({
          sweet: this.state.sweet + 1,
        });
      };

      shouldComponentUpdate(nextProp,nextState){
        console.log('shouldComponentUpdate method called...');
        if(nextState.thali>4)
        {
            this.setState({
                thali: 4
            });
            return false;
        }
        else
        {
            return true;
        }
    }
    componentWillUpdate(nextProp,nextState){
          console.log('componentWillUpdate method called...');
        }
        componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate is called');
        if (
            this.state.thali != prevState.thali ||
            this.state.roti !== prevState.roti ||
            this.state.papad !== prevState.papad || 
            this.state.chas !== prevState.chas || 
            this.state.sweet !== prevState.sweet
        ) 
            {
            this.updateTotal();
        }
    }
        componentWillUnmount(){
          console.log('componentWillUnmount method called...');
      }
    render() {
        console.log('render method is called....');
        return (
          <div className="col-lg-4 my-3">
            <div className="card shadow">
              <div className="card-header text-bg-primary d-flex justify-content-between">
                <h5>{this.name}</h5>
                <h5><span className="badge bg-white text-primary">{this.tableno}</span></h5>
              </div>
              <div className="card-body">
                <button className="btn btn-danger w-100" onClick={this.updateThali}>
                  Thali -<span className="badge bg-white text-primary">{this.state.thali} </span>
                </button>
                <div className="row mt-2">
                  <div className="col-6">
                    <button type="button" className="btn btn-dark w-100" onClick={this.updateRoti} >
                      Roti -<span className="badge bg-white text-dark"> {this.state.roti} </span>
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-warning w-100" onClick={this.updateChas}>
                      chas -<span className="badge bg-white text-dark">{this.state.chas} </span>
                    </button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-6">
                    <button type="button" className="btn btn-info w-100" onClick={this.updatePapad}> 
                      Papad -<span className="badge bg-white text-dark">{this.state.papad}</span>
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn-success w-100" onClick={this.updateSweet}>
                      Sweet - <span className="badge bg-white text-dark">{this.state.sweet}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between text-white bg-primary">
                   <span className="h5">Total</span>
                   <span className="h5">Rs {this.state.price}</span>
                </div>
            </div>
          </div>
        );
      }
}