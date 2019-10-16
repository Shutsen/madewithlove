import React from 'react';
import PropTypes from 'prop-types';
import { toDateString } from '../utils/date'
import i18next from 'i18next';

function WeatherMeasurements(props) {
  const weather = props.weatherData;
  const timezone = props.timezone;

  const sunrise = toDateString(weather.sunriseTime, timezone, 'HH:mm');
  const sunset = toDateString(weather.sunsetTime, timezone, 'HH:mm');

  return (
    <section className="weather-measurements">
      <table>
        <caption className="table-caption">
        {i18next.t("DATA_SOURCE")}: <a href="https://darksky.net">Dark Sky API</a>
        </caption>
        <tbody>
          <tr>
            <th id="wm-sunrise">{i18next.t("SUNRISE")}</th>
            <th id="wm-sunset">{i18next.t("SUNSET")}</th>
          </tr>
          <tr>
            <td aria-labelledby="wm-sunrise">{sunrise}</td>
            <td aria-labelledby="wm-sunset">{sunset}</td>
          </tr>
          <tr>
            <th id="wm-chance-of-rain">{i18next.t("CHANCE_OF_RAIN")}</th>
            <th id="wm-humidity">{i18next.t("HUMIDITY")}</th>
          </tr>
          <tr>
            <td aria-labelledby="wm-chance-of-rain">{(weather.precipProbability * 100).toFixed()}%</td>
            <td aria-labelledby="wm-humidity">{(weather.humidity * 100).toFixed()}%</td>
          </tr>
          <tr>
            <th id="wm-windspeed">{i18next.t("WINDSPEED")}</th>
            <th id="wm-feels-like">{i18next.t("FEELS_LIKE")}</th>
          </tr>
          <tr>
            <td aria-labelledby="wm-windspeed">{weather.windSpeed} m/s</td>
            <td aria-labelledby="wm-feels-like">{sunset}</td>
          </tr>
          <tr>
            <th id="wm-uv-index">{i18next.t("UV_INDEX")}</th>
            <th id="wm-pressure">{i18next.t("PRESSURE")}</th>
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