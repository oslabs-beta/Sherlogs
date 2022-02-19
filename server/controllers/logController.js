const Logs = require('../models/logs');
const path = require('path');
const errorHandler = require(path.resolve(__dirname, '../utils/errorHandling'));

const logController = {};

//store a single log
logController.storeLog = async (req, res, next) => {
  try {
    console.log('storeLog');
    const { log } = req.body;
    if (!log) {
      throw new Error('Error at find log inside req.body');
    }
    const data = await Logs.create({
      log: log,
    });

    if (data) {
      res.locals.logStored = data;

      return next();
    }
  } catch (err) {
    console.log(`error from storeLog. Message: ${err}`);
  }
};

logController.getAllLogs = async (req, res, next) => {
  try {
    let data = await Logs.find();
    console.log(data);
    if (data) {
      res.locals.allLogs = data;
      return next();
    }
  } catch (err) {
    console.error(`error from getAllLogs middleware. Message: ${err}`);
    res.status(500);
    return errorHandler(err);
  }
};
module.exports = logController;
