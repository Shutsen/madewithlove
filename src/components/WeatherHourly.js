import React from 'react';
import PropTypes from 'prop-types';
import WeatherHourlyInstance from './WeatherHourlyInstance'

function WeatherHourly(props) {
  let hourInstances = props.weatherData.data;
  const timezone = props.timezone;

  let items = hourInstances.map((item, i) => {
    // only show 24 hours
    if (i >= 24) {
      return false;
    }
    return (
      // time is unique
      <li key={item.time}>
        <WeatherHourlyInstance weatherData={item} timezone={timezone}/>
      </li>
    );
  })

  return (
    <section>
      <ul className="weather-hourly" tabIndex="2">
        {items}
      </ul>
    </section>
  );
}

WeatherHourly.propTypes = {
  weatherData: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired
};

export default WeatherHourly;