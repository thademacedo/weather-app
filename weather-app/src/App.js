import React, { useState, useEffect } from "react";
import "./App.scss";
import Sunny from "./assets/sunny.png";
import fetchWeatherData from "./components/apiService";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWeatherData();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <div className="app-header__logo">
          <img
            className="app-header__img"
            src={Sunny}
            placeholder="placeholder"
          ></img>
        </div>

        <div className="app-header__title">
          <h1>Weather Forecast</h1>
        </div>
      </div>

      <div className="body">
        <div className="body-title">
          <h3 className="body-title__h3">Find Current Weather Conditions</h3>
        </div>

        <div className="body-field">
          <form className="body-form" onSubmit={handleSubmit} id="uploadForm">
            <div className="body-form__box1">
              <input
                type="text"
                className="body-form__box"
                id="uploadText"
                placeholder="Enter City"
              ></input>
            </div>
            <div className="body-form__box2">
              <button className="submit-button" type="submit">
                Get Forecast
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <div>
            <h2> Weather Information </h2>
            <p>
              {" "}
              Location: {
                weatherData?.locations["Washington,DC,USA"]?.address
              },{" "}
            </p>
            <p>
              {" "}
              Current Temperature:{" "}
              {
                weatherData?.locations["Washington,DC,USA"]?.currentConditions
                  ?.temp
              }
              , °F
            </p>
            {/* <p>
              {" "}
              Weather Description:{" "}
              {weatherData?.locations?.currentConditions?.description}
            </p> */}
            <h3>Hourly Forecast</h3>
            <p>
              {" "}
              Date and Time:{" "}
              {
                weatherData?.locations["Washington,DC,USA"]?.currentConditions
                  ?.datetime
              }
            </p>
            {/* <ul>
              {weatherData &&
                weatherData.hours.map((hour) => (
                  <li key={hour.datetime}>
                    {hour.datetime}:{hour.temp}°F, {hour.description}
                  </li>
                ))}
            </ul> */}
            {/* {
              weatherData?.locations["Washington,DC,USA"]?.currentConditions
                ?.temp
            } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
