// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
var num1=10;
var num2=5;
var division=num1/num2; 
var output=(<div>
  <h1 className='myHeading'>using JSX in react js</h1>
  <hr/>
    <h2 className='p1'>using expression</h2>
    <ul className='p2'>
      <li>Addition123 {num1+num2}</li>
      <li>Subtraction {num1-num2}</li>
      <li>Division {division}</li>
      <li>Multiplication {num1*num2}</li>
      <li>relational expression (num1 above num2) {(num1>num2)?"num1 is bigger":"num1 is smaller"}</li>
    </ul>
</div>)
root.render(output);




