const express = require('express');
const Router = express.Router();
const authRouter = require('./auth.routes');

Router.use('/auth', authRouter);
const logController = require('../controllers/logController');
const filterLogController = require('../controllers/filterLogController');

//This code handles a GET request for profile.
//It returns a "You made it to the secure route" message.
//It also returns information about the user and token.
//The goal will be so that only users with a verified token will be presented with this response.
Router.get('/profile', (req, res, next) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user,
    token: req.query.secret_token,
  });
});

Router.post('/log/store', logController.storeLog, (req, res, next) => {
  const { logStored } = res.locals;

  return res.status(201).json({
    status: true,
    log: logStored,
    message: 'Successfully stored log into DB',
  });
});

Router.get('/log/getAllLogs', logController.getAllLogs, (req, res, next) => {
  const { allLogs } = res.locals;
  return res.status(200).json({
    status: true,
    all: allLogs,
  });
});

Router.post('/log/filter', filterLogController.filter, (req, res, next) => {
  const { filteredLogs, noMatchFound } = res.locals;
  if (noMatchFound) {
    return res.status(204).json({
      status: false,
      filterResult: noMatchFound,
      message: 'No collection matches filter parameter',
    });
  } else {
    return res.status(200).json({
      status: true,
      filtered: filteredLogs,
      message: 'Successfully get collection of fitered logs from DB',
    });
  }
});

module.exports = Router;
