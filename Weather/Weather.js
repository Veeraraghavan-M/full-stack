/*Create Weather.js */
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '347f1ca7b7a06966bab4cb42f765b1c1'; 

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => {
        setWeather(response.data);
        setError('');
      })
      .catch(error => {
        setError('City not found or invalid API key');
        setWeather(null);
      });
  };

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <input
        type="text"
        className="input"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="button" onClick={getWeather}>Get Weather</button>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2 className="city">{weather.name}, {weather.sys.country}</h2>
          <p className="temp">Temperature: {weather.main.temp}°C</p>
          <p className="description">Weather: {weather.weather[0].description}</p>
          <p className="humidity">Humidity: {weather.main.humidity}%</p>
          <p className="wind">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
