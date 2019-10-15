import axios from 'axios';

export const getWeatherData = async (lat, lng) => {
  try {
    const response = await axios.get(`http://localhost:3030/darksky/${lat}/${lng}`);
    return response.data.weatherData;
  } catch(err) {
    console.log('Error from getWeatherData: ', err);
    throw(err);
  }
};

export const getObservedData = async (lat, lng, date) => {
  try {
    const response = await axios.get(`http://localhost:3030/darksky/${lat}/${lng}/${date}`);
    return response.data.observedData;
  } catch(err) {
    console.log('Error from getObservedData: ', err);
    throw(err);
  }
};
