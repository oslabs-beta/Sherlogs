const Logs = require('../models/logs');

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

module.exports = logController;
