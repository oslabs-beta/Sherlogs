const Logs = require('../models/logs');

const filterLogController = {};

filterLogController.filter = async (req, res, next) => {
  console.log('running for filter log middleware');
  try {
    // console.log(req.params);

    if (!req.params) {
      const dataError = {
        log: 'filterLogController middleware: no target for filtering',
        status: 406,
        message: { err: 'An error occurred' },
      };
      return next(dataError);
    }
    console.log(req.query);
    const match = {};
    if (req.query.levels) {
      match.level = req.query.levels;
    }
    if (req.query.time) {
      match.timestamp = req.query.time;
    }
    if (req.query.keyword) {
      match.keyword = req.query.keyword;
    }

    console.log(match);
    const data = await Logs.find(
      { level: { $eq: match.level }, timestamp: { $eq: match.timestamp } }
      // { timestamp: { $eq: match.timestamp } }
      // { keyword: /match.keyword/}
    );

    if (!data) {
      const dataError = {
        log: 'filterLogController middleware: no target for filtering',
        status: 406,
        message: { err: 'An error occurred' },
      };
      return next(dataError);
    }

    res.locals.filteredLogs = data;
    return next();
  } catch (err) {
    console.log(`error from filter log. Message: ${err}`);
  }
};

module.exports = filterLogController;
