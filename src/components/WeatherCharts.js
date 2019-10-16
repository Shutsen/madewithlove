import React from 'react';
import PropTypes from 'prop-types';
import { Line as LineChart } from 'react-chartjs-2';
import { toDateString } from '../utils/date'
import i18next from 'i18next';

function WeatherCharts(props) {
  const formatData = (key) => {
    let labels = [];
    let data = [];

    for (const item of props.weatherData.hourly.data) {
      const hour = toDateString(item.time, props.weatherData.timezone, 'ha');
      let keyData;
      if (key.percentage) {
        // if we're dealing with percentage multiply by 100
        keyData = (item[key.name] * 100).toFixed(2);
      } else {
        keyData = item[key.name].toFixed(2);
      } 

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
    { name: 'temperature', title: `${i18next.t("TEMPERATURE")} (°C)` },
    { name: 'humidity', title: `${i18next.t("HUMIDITY")} (%)`, percentage: true },
    { name: 'pressure', title: `${i18next.t("PRESSURE")} (hPa)` },
    { name: 'windSpeed', title: `${i18next.t("WINDSPEED")} (°m/s)` },
    { name: 'uvIndex', title: `${i18next.t("UV_INDEX")}` },
    { name: 'visibility', title: `${i18next.t("VISIBILITY")} (km)` }
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