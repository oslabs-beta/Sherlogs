const express = require('express');
const Router = express.Router();
const logController = require('../controllers/logController');
const filterLogController = require('../controllers/filterLogController');

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
  try {
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
  } catch (err) {
    const filterRouterError = {
      log: '/log/filter router: error at router for filter log',
      status: 400,
      message: { err: 'An error occurred' },
    };
    return next(filterRouterError);
  }
});

module.exports = Router;
