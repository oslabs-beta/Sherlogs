const Logs = require('../models/logs');

const logController = {};

logController.storeLog = async (req, res, next) => {
  try {
    const { log } = req.body;
    if (!log) {
      console.log('missing log');
    }
    let data = await Logs.create({
      log: log,
    });
    console.log(data);
    res.locals.logId = data._doc._id;
    return next();
  } catch (err) {
    console.log(`error from storeLog. Message: ${err}`);
  }
};

logController.storeLogs = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(`error from storeLogs middleware. Message ${err}`);
  }
};

module.exports = logController;
