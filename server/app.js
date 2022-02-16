const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');


const errorHandler = require(path.resolve(__dirname, './utils/errorHandling'));
const { stream } = require('./utils/logger');
const connectDB = require('./database');
const userRouter = require('./routes/v1.routes/userRouter');
const secureRoute = require('./routes/v1.routes/secure-routes');
require('./auth/auth');

async function createApp(config) {
  await connectDB(config.mongoUrl);
  const app = express();
  app.use(express.json());
  app.use(helmet());
  app.use(morgan('combined', { stream }));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/', userRouter);
  app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

  app.use('*', (req, res) => {
    res.status(404).send('Not Found');
  });

  app.use((err, req, res, next) => {
    return errorHandler(err);
  });

  return app;
}

module.exports = createApp;
