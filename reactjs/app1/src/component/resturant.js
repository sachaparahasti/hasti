import React from "react";
import DinningTable from "./dinning_table"; 
export default class Restaurant extends React.Component{
     render() {
    return (
      <div className="container">
        <div className="row">
          <DinningTable name="krishna patel" tableno="1" />
          <DinningTable name="hasti sachapara" tableno="2" />
          <DinningTable name="aayushi patel" tableno="3" />
        </div>
      </div>
    );
  }
}