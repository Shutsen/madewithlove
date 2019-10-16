require('dotenv').config()
const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const port = process.env.PORT;

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.use((req, res, next) => {
  const error = new Error('Not found...');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));