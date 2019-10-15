import React from 'react';
import PropTypes from 'prop-types';
import { Line as LineChart } from 'react-chartjs-2';
import { toDateString } from '../utils/date'

function WeatherCharts(props) {
  const formatData = (key) => {
    let labels = [];
    let data = [];

    for (const item of props.weatherData.hourly.data) {
      const hour = toDateString(item.time, props.weatherData.timezone, 'ha');
      // if we're dealing with percentage multiply by 100
      const keyData = key.percentage ? (item[key.name] * 100).toFixed(2) : item[key.name].toFixed(2);

      labels.push(hour);
      data.push(keyData);
    }

    return {
      labels,
      datasets: [
        {
          label: key.title,
          data
        }
      ]
    }
  }

  const interestingGraphs = [
    { name: 'temperature', title: 'Temperature (°C)' },
    { name: 'humidity', title: 'Humidity (%)', percentage: true },
    { name: 'pressure', title: 'Pressure (hPa)' },
    { name: 'windSpeed', title: 'Wind speed (m/s)' },
    { name: 'uvIndex', title: 'UV index' },
    { name: 'visibility', title: 'Visibility (km)' }
  ];

  const chartOptions = {
    scales: {
      xAxes: [{
        barPercentage: 0.2
      }]
    },
    maintainAspectRatio: false,
  };

  let graphs = interestingGraphs.map(type => {
    const data = formatData(type);

    return (
      <li key={type.name}>
        <LineChart data={data}
          width={100}
          options={chartOptions}
        />
      </li>
    );
  })

  return (
    <ul className="weather-chart">
      {graphs}
    </ul>
  );
}

WeatherCharts.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default WeatherCharts;