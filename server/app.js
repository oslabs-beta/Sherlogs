const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const errorHandler = require(path.resolve(__dirname, './utils/errorHandling'));
const { stream } = require('./utils/logger');
// const connectDB = require('./database');
// const apiV1Router = require('./routes/v1.routes');

async function createApp(config) {
  //   await connectDB(config.mongoUrl); // TODO: Uncomment when is setted
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(morgan('combined', { stream }));
  //   app.use('/apiv1', apiV1Router); // TODO: Create routing and controllers when we have the model

  app.use('*', (req, res) => {
    res.status(404).send('Not Found');
  });

  app.use((err, req, res, next) => {
    return errorHandler(err);
  });

  return app;
}

module.exports = createApp;
