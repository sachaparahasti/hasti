import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./matrix.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function DigitalClock() {
    // create data type  object
    let today=new Date();
    let hour=today.getHours();
    let minute=today.getMinutes();
    let seconds=today.getSeconds();
    let ampm;
     if(hour>12){
      ampm="PM";
    } 
    else{
      ampm="AM";
    }
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day=days[today.getDay()];
    let date=today.getDate();
    // ternary operator
      date = date < 10 ? "0" + date : date; 
    let month=months[today.getMonth()];
    let year=today.getFullYear();
    
     let output =(<>
        <canvas id="matrix" />
        <div className="clock-container">
            <div>
                <div className="matrix-clock" id="clock">
                    {hour}:{minute}:{seconds} {ampm}
                </div>
                <div className="date-text" id="date">
                   {day},{date} {month} {year}
                </div>
            </div>
        </div>
    </>
    )
    root.render(output);
}
setInterval(DigitalClock, 1000);