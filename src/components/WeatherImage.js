import React from 'react';
import PropTypes from 'prop-types';
import weatherIconMap from '../assets/weatherIconMap.json';

function WeatherImage(props) {
  const getIcon = () => {
    const icon = weatherIconMap[props.icon];
    const imgPath = `/img/weather/${icon.icon}.png`;
    const altText = icon.alt;
    return { imgPath, altText };
  }

  const iconData = getIcon();

  return (
    <figure>
      <img src={iconData.imgPath} alt={iconData.altText}/>
    </figure>
  );
}

WeatherImage.propTypes = {
  icon: PropTypes.string.isRequired
};

export default WeatherImage;