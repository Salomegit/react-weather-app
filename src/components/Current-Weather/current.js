import React from "react";
import "../../styles/index.css";

const Current = ({data}) => {


  // const name = "john"
  // console.log(name)
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> {data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>

        <img alt="weather" src={`icons/${data.weather[0].icon}.png`} className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{data.main.temp}°c</p>
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
