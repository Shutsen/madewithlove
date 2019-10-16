const axios = require('axios');

const Weather = {};

const DARK_SKY_API_BASE = `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}`;

Weather.getForecast = async (lat, lng, lang, metrics, date) => {
  let darkSkyEndpoint = `${DARK_SKY_API_BASE}/${lat},${lng}`;

  if (date) {
    darkSkyEndpoint += `,${date}`
  }

  darkSkyEndpoint += `?units=${metrics}&lang=${lang}`;

  try {
    const response = await axios.get(darkSkyEndpoint);
    return response.data
  } catch(err) {
    console.log('Error from darksky API: ', err);
    throw err;
  }
}

module.exports = Weather;