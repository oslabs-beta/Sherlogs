const Logs = require('../models/logs');
const { isBackend } = require('../utils/auxiliaryFunctions');

const filterLogController = {};

filterLogController.filter = async (req, res, next) => {
  console.log('req body', req.body);
  try {
    let { levels: level, startSearch, keyword, logOrigin } = req.body.data;

    if (level.length === undefined && !startSearch && !keyword) {
      return res.redirect('/apiv1/log/getAllLogs');
    }

    startSearch = !startSearch
      ? { $not: { $type: 'null' } }
      : { $gte: new Date(startSearch) };

    const match = {
      timestamp: startSearch,
      isBackend: isBackend(logOrigin),
    };

    if (level.length > 0) {
      match['level'] = level;
    }
    if (keyword) {
      match['$text'] = { $search: keyword };
    }

    console.log('match: ', match);

    const data = await Logs.find(match);

    if (!data) {
      res.locals.noMatchFound =
        'filterLogController middleware: no match for filtering';
    }

    res.locals.filteredLogs = data;
    return next();
  } catch (err) {
    const filterError = {
      log: 'filterLogController middleware: error running filter middleware',
      status: 400,
      message: { err: 'An error occurred' },
    };
    return next(filterError);
  }
};

module.exports = filterLogController;
