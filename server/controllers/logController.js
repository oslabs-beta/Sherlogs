const Logs = require('../models/logs');

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

module.exports = logController;
