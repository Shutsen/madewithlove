import React from 'react';
import PropTypes from 'prop-types';
import WeatherImage from './WeatherImage';
import { toDateString } from '../utils/date';

function WeatherHourlyInstance(props) {
  const data = props.weatherData;
  const timezone = props.timezone;
  const hour = toDateString(data.time, timezone, 'HH');

  return (
    <div className="wh-item">
      <data>{hour}</data>
      <WeatherImage icon={data.icon}/>
      <data className="wh-temperature">{data.temperature.toFixed()}&#176;</data>
    </div>
  );
}

WeatherHourlyInstance.propTypes = {
  weatherData: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired
};

export default WeatherHourlyInstance;