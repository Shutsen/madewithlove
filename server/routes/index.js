require('dotenv').config()
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { escape } = require("validator")

// Dark Sky API forecast request
router.get('/darksky/:lat/:lng', async (req, res) => {
  const lat = escape(req.params.lat);
  const lng = escape(req.params.lng);
  let weatherData;

  try {
    const response = await axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${lat},${lng}?units=auto`);
    weatherData = response.data;
  } catch(err) {
    console.log('Error from darksky API: ', err);
    throw err;
  }

  res.status(200).json({
    weatherData
  });
});

// Dark Sky API time machine request
router.get('/darksky/:lat/:lng/:date', async (req, res) => {
  const lat = escape(req.params.lat);
  const lng = escape(req.params.lng);
  const date = escape(req.params.date);
  let observedData;

  try {
    const response = await axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${lat},${lng},${date}?units=auto`);
    observedData = response.data;
  } catch(err) {
    console.log('Error from darksky API: ', err);
    throw err;
  }

  res.status(200).json({
    observedData
  });
});

module.exports = router;