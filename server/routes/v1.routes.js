const express = require('express');
const Router = express.Router();

const logController = require('../controllers/logController');

Router.post('/log/store', logController.storeLog, (req, res, next) => {
  const { logStored } = res.locals;

  return res
    .status(201)
    .json({
      status: true,
      log: logStored,
      message: 'Successfully stored log into DB',
    })
    .render('Successfully stored log into DB');
});

Router.get('/log/getAllLogs', logController.getAllLogs, (req, res, next) => {
  const { allLogs } = res.locals;
  return res.status(200).json({
    status: true,
    all: allLogs,
  });
});

module.exports = Router;
