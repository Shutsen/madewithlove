import React from 'react';
import PropTypes from 'prop-types';
import WeatherImage from './WeatherImage';
import WeatherHourly from './WeatherHourly';
import WeatherMeasurements from '../components/WeatherMeasurements';
import { toDateString, isDayTime } from '../utils/date';

function WeatherCard(props) {
  const weather = props.weatherData;
  const today = weather.daily.data[0];
  const dayTime = isDayTime(weather.currently.time, weather.timezone)
  let dynamicClass = dayTime ? 'day' : 'night';

  return (
    <div className={`weather-card ${dynamicClass}`}>
      <section>
        <div className="city">{props.city}</div>
        <time dateTime={toDateString(today.time, weather.timezone, 'YYYY-MM-DD')}>
          {toDateString(today.time, weather.timezone)}
        </time>
        <WeatherImage icon={weather.currently.icon}/>
      </section>
      <hr className="-mx-10px"/>
      <WeatherHourly weatherData={weather.hourly} timezone={weather.timezone}/>
      <hr className="-mx-10px"/>
      <p className="weather-summary">{today.summary}</p>
      <hr className="-mx-10px"/>
      <WeatherMeasurements weatherData={today} timezone={weather.timezone}/>
    </div>
  );
}

WeatherCard.propTypes = {
  weatherData: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
};

export default WeatherCard;