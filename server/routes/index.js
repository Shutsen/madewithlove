const express = require('express');
const router = express.Router();
const weather = require('../services/weather');
const { escape } = require("validator")

// Dark Sky API forecast request
router.get('/darksky/:lat/:lng/:lang/:metrics', async (req, res) => {
  const lat = escape(req.params.lat);
  const lng = escape(req.params.lng);
  const lang = escape(req.params.lang);
  const metrics = escape(req.params.metrics);
  let weatherData = await weather.getForecast(lat, lng, lang, metrics);

  res.status(200).json({
    weatherData
  });
});

// Dark Sky API time machine request
router.get('/darksky/:lat/:lng/:lang/:metrics/:date', async (req, res) => {
  const lat = escape(req.params.lat);
  const lng = escape(req.params.lng);
  const lang = escape(req.params.lang);
  const metrics = escape(req.params.metrics);
  const date = escape(req.params.date);
  let observedData = await weather.getForecast(lat, lng, lang, metrics, date);

  res.status(200).json({
    observedData
  });
});

module.exports = router;