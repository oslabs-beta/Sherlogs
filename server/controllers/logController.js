const Logs = require('../models/logs');
const path = require('path');
const { checkLogBody } = require('../utils/auxiliaryFunctions');

const logController = {};

logController.storeLog = async (req, res, next) => {
  const body = checkLogBody(req.body);
  console.log('bodyyy', body);

  try {
    const data = await Logs.create({
      ...body,
      timestamp: new Date(body.timestamp),
    });
    res.locals.logStored = data;
    return next();
  } catch (err) {
    next({ message: err.message });
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
