import React from 'react';
import PropTypes from 'prop-types';
import { toMilitaryTime } from '../utils/date'

function WeatherMeasurements(props) {
  const weather = props.weatherData;
  const timezone = props.timezone;

  const sunrise = toMilitaryTime(weather.sunriseTime, timezone);
  const sunset = toMilitaryTime(weather.sunsetTime, timezone);

  return (
    <section className="weather-measurements">
      <table>
        <caption className="table-caption">
          Data-source: <a href="https://darksky.net">Dark Sky API</a>
        </caption>
        <tbody>
          <tr>
            <th id="wm-sunrise">Sunrise</th>
            <th id="wm-sunset">Sunset</th>
          </tr>
          <tr>
            <td aria-labelledby="wm-sunrise">{sunrise}</td>
            <td aria-labelledby="wm-sunset">{sunset}</td>
          </tr>
          <tr>
            <th id="wm-chance-of-rain">Chance of rain</th>
            <th id="wm-humidity">Humidity</th>
          </tr>
          <tr>
            <td aria-labelledby="wm-chance-of-rain">{(weather.precipProbability * 100).toFixed()}%</td>
            <td aria-labelledby="wm-humidity">{(weather.humidity * 100).toFixed()}%</td>
          </tr>
          <tr>
            <th id="wm-windspeed">Windspeed</th>
            <th id="wm-feels-like">Feels like</th>
          </tr>
          <tr>
            <td aria-labelledby="wm-windspeed">{weather.windSpeed} m/s</td>
            <td aria-labelledby="wm-feels-like">{sunset}</td>
          </tr>
          <tr>
            <th id="wm-uv-index">UV index</th>
            <th id="wm-pressure">Pressure</th>
          </tr>
          <tr>
            <td aria-labelledby="wm-uv-index">{weather.uvIndex}</td>
            <td aria-labelledby="wm-pressure">{weather.pressure} hPa</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

WeatherMeasurements.propTypes = {
  weatherData: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired
};

export default WeatherMeasurements