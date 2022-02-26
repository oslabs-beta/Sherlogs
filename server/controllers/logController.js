const User = require('../models/logs');
const Logs = require('../models/logs');
const path = require('path');
const errorHandler = require(path.resolve(__dirname, '../utils/errorHandling'));

const logController = {};

//store a single log
logController.storeLog = async (req, res, next) => {
  try {
    console.log('request from winston: ', req.body);
    const { message, level, timestamp } = req.body;
    if (!message || !level || !timestamp) {
      throw new Error('Error at find log inside req.body');
    }
    const data = await Logs.create({
      message: message,
      level: level,
      timestamp: timestamp,
    });

    if (data) {
      console.log('data', data);
      res.locals.logStored = data;
      return next();
    }
  } catch (err) {
    console.log(`error from storeLog. Message: ${err}`);
  }
};

logController.getAllLogs = async (req, res, next) => {
  try {
    //TODO: refactor below codes for one specific user log
    // const { user } = req.body;
    // if (!user) {
    //   const userError = {
    //     log: 'getAllLogs middleware: no user found',
    //     status: 401,
    //     message: { err: 'An error occurred' },
    //   };
    //   return next(userError);
    // }
    const data = await Logs.find({});
    if (!data) {
      const dataError = {
        log: 'getAllLogs middleware: Error from db when query for log',
        status: 406,
        message: { err: 'An error occurred' },
      };
      return next(dataError);
    }
    res.locals.allLogs = data;
    return next();
  } catch (err) {
    return next(err);
  }
};
module.exports = logController;
