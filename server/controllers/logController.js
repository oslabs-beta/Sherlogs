const Logs = require('../models/logs');

const logController = {};

//store a single log
logController.storeLog = async (req, res, next) => {
  try {
    console.log('storeLog');
    const { log } = req.body;
    // TODO: able to store more than one log
    if (!log) {
      console.log('missing log');
    }
    let data = await Logs.create({
      log: log,
    });
    if (data.__v === 0) {
      res.locals.logStored = data;
      return next();
    } else {
      throw new Error(`Error from storeLog. Status Code from db: ${data.__v}`);
    }
  } catch (err) {
    console.log(`Error from storeLog. Message: ${err}`);
  }
};

module.exports = logController;
