import axios from 'axios';

export const getWeatherData = async (lat, lng, lang, metrics) => {
  try {
    const response = await axios.get(`http://localhost:3030/darksky/${lat}/${lng}/${lang}/${metrics}`);
    return response.data.weatherData;
  } catch(err) {
    console.log('Error from getWeatherData: ', err);
    throw(err);
  }
};

export const getObservedData = async (lat, lng, lang, metrics, timestamp) => {
  try {
    const response = await axios.get(`http://localhost:3030/darksky/${lat}/${lng}/${lang}/${metrics}/${timestamp}`);
    return response.data.observedData;
  } catch(err) {
    console.log('Error from getObservedData: ', err);
    throw(err);
  }
};
