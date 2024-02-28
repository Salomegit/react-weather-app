import React from "react";
import "../../styles/index.css";

const Current = () => {


  // const name = "john"
  // console.log(name)
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> Nairobi</p>
          <p className="weather-description">Sunny</p>
        </div>

        <img alt="weather" src="icons/01d.png" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">18°c</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">22°c</span>

          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>

          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>

          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
