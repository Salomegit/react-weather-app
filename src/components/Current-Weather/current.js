import React from "react";
import "../../styles/index.css";

const Current = () => {
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
            <spann classname="parameter-label">Details</spann>
          </div>
          <div className="parameter-row">
            <spann classname="parameter-label">Feels Like</spann>
            <spann classname="parameter-label">22°c</spann>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
