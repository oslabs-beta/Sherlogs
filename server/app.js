const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorHandler = require(path.resolve(__dirname, './utils/errorHandling'));
const { stream } = require('./utils/logger');
const connectDB = require('./database');
const apiV1Router = require('./routes/v1.routes');

async function createApp(config) {
  await connectDB(config.mongoUrl);
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(morgan('combined', { stream }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  app.use('/apiv1', apiV1Router);

  app.use('*', (req, res) => {
    res.status(404).send('Not Found');
  });

  app.use(errorHandler);

  return app;
}

module.exports = createApp;
